import e  from "express"
import cors from "cors"
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer  } from "@apollo/server/standalone";
import { schema } from "./graphql/schema.js";
import { query } from "./graphql/query.js";
import { Mutate } from "./graphql/Mutation.js";
import { Resolver } from "./graphql/Resolver.js";
import { connectGraphQL } from "./graphql/GraphQL.js";
import { expressMiddleware } from "@apollo/server/express4";
dotenv.config("./.env");

const app=e();
const port=Number(process.env.PORT)
export const users=[]

// GraphQL
const server=connectGraphQL(port);
await server.start()

app.use(cors({  
    origin:"*",
    credentials:true
}))
app.use( e.urlencoded({extended:true}))
app.use(e.json())

app.listen(port,(req,res)=>{
    console.log("Server is running on", port);
})

app.use("/graphql",expressMiddleware(server))


app.get('/',async (req,res)=>{
    await fetch("https://jsonplaceholder.org/users")
    .then(async (response) => {
      const data = await response.json(); // Convert response to JSON
      console.log(data.data); // Log the actual data
  
      return res.json({
        data: data, // Send the parsed data
      });
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    });
    
})

app.get("/test",(req,res)=>{
    return res.json({"Working":"Beautifully"})
})
app.get("*",(req,res)=>{
    return res.json({404:"Data not found!"})
})
