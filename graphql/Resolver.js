import { users } from "../index.js";
import { query } from "./query.js";

export const Resolver={
        Mutation:{
            newUser:(parent,{name,age,gender})=>{
                users.push({name,age,gender})
                console.log(users);
                
                return "User added successful"
                
            }
        },
        Query:query
    }