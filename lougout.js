export const init=(root)=>{
    const handleLogout=async()=>{
        const userLogout=await postLogout()
        window.location.href="index.html";
        

    }
    root.addEventListener("click", handleLogout)
}

const postLogout=async()=>{
    const response = await fetch("http://localhost:3000/logout",{
        method: "POST",
        
        
    })

    if(response.ok){
        const responseData= await response//.json()
        return responseData
    }
    else{
        throw response
    }
}