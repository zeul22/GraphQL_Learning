import { startStandaloneServer } from "@apollo/server/standalone";
import { Resolver } from "./Resolver.js";
import { schema } from "./schema.js";
import { ApolloServer } from "@apollo/server";

export const connectGraphQL=(port,)=>{
    const server = new  ApolloServer({
        typeDefs:schema,
        resolvers:Resolver,
    })
    // startStandaloneServer(server,{listen:{port}}).then(()=>{
    //     console.log(`Server is working on ${port} ` );
        
    // })
    return server
    
}