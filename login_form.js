export const init=(root)=>{
    console.log(root)
    const handleSubmit=async(event)=>{
        
        event.preventDefault()

        const data=new FormData(root)

        const mail=data.get("email")
        console.log(mail)
        const mdp=data.get("password")
        console.log(mdp)

        const jsonData= Object.fromEntries(data)

        const errorIdentifiant= document.getElementById("errorIdentifiant");
        const successIdentifiant= document.getElementById("successIdentifiant"); // pas demandé d'afficher
        const password= document.getElementById("password");
        const errorMail= document.getElementById("errorMail");
        const errorMDP= document.getElementById("errorMDP");

        if  (mail.length >0 && mdp.length >0){
            const newLogin= await postLogin(jsonData)
            console.log("Identifiants corrects");
            password.style.marginBottom="24px";
            errorMail.style.display="none";
            errorMDP.style.display="none";
            errorIdentifiant.style.display= "none";
            successIdentifiant.style.display= "grid";
            console.log("coucou")
            

        }

        if(mail.length ===0){
            console.log("Veuillez renseigner une adresse e-mail");
            errorMail.style.display="grid";
            errorIdentifiant.style.display= "none";
            password.style.marginBottom="0px"; // enlever le marginBottom apres avoir rien rempli
        }
    
        if(mdp.length ===0){
            console.log("Veuillez renseigner un mot de passe");
            errorMDP.style.display="grid";
            errorIdentifiant.style.display= "none";
            password.style.marginBottom="0px"; // enlever le marginBottom apres avoir rien rempli
        }



    }
    root.addEventListener("submit", handleSubmit)
    
}

const postLogin = async(login)=>{
    const response=await fetch("http://localhost:3000/login",{
        headers: {
            'Content-Type': 'application/json'
          },
        credentials: "include",
        method: "post",
        body: JSON.stringify(login)
    })
    console.log(response)

    if(response.ok){
        console.log(response)
        const responseData=await response//.json()
        console.log("Identifiants corrects");
        password.style.marginBottom="24px";
        errorMail.style.display="none";
        errorMDP.style.display="none";
        errorIdentifiant.style.display= "none";
        successIdentifiant.style.display= "grid";
        document.location.href="./home.html"
        return responseData
    }
    else{
        console.log("Identifiants incorrects");
        password.style.marginBottom="24px";
        errorMail.style.display="none";
        errorMDP.style.display="none";
        errorIdentifiant.style.display= "grid";
        successIdentifiant.style.display= "none";
        throw response
    }
}






