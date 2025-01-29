export const getAllPosts=async()=>{
    const response=await fetch("https://jsonplaceholder.org/posts")
    const data=await response.json();
    return data;
}


export const getOnePost=async(parent,arg)=>{
    const {id}=arg
    const response=await fetch(`https://jsonplaceholder.org/posts/${id}`)
    const data=await response.json();
    console.log(data);
    
    return data;
}