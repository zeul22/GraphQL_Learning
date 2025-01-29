import { getAllPosts, getOnePost } from "../controllers/posts.js";
import { getAllusers } from "../controllers/users.js";
import { users } from "../index.js";

export const query={
            hello:()=> "Hello World",
            hello2:()=>"Rahul Anand",
            data:()=>"bhootnike",
            work:()=>"working!",
            users: getAllusers,
            posts:getAllPosts,
            post:getOnePost,
            sampleUsers:()=>{
                console.log("Is this working also?");
                
                console.log(users);
                return users
            },
        }
