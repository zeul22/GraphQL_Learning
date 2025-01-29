export const getAllusers=async()=>{
    const repsonse=await fetch("https://jsonplaceholder.org/users")
    const data=await repsonse.json()
    return data
}