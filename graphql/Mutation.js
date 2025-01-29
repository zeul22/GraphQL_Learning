import { users } from "../index.js";


export const Mutate=()=>{
    newUser:(parent,{name,age,gender})=>{
        console.log("Is this working?");
        console.log(name,age,gender);
        users.push({name,age,gender})
        console.log(users);
        
        return "User added successful"
        
    }
}