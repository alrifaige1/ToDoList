
const init=(root)=>{
    console.log(root)
    const handleSubmit=async(event)=>{
        event.preventDefault()

        const data=new FormData(root)

        console.log(data.has("email"))
        

        const mail=data.get("email")
        console.log(mail)
        const mdp=data.get("password")
        console.log(mdp)
        const reMdp=data.get("repeatpassword")
        console.log(reMdp)

        const jsonData= Object.fromEntries(data)

        const password= document.getElementById("password");
        const errorMail= document.getElementById("errorMail");
        const errorMailDeja_Utilise= document.getElementById("errorMailDeja_Utilise");
        const errorMDP= document.getElementById("errorMDP");
        const errorMDP_tout= document.getElementById("errorMDP_tout"); // Si les 2 mots de passes ne sont pas les memes
        const successAccount= document.getElementById("successAccount");

        if( (mail.length >0 && mdp.length >0 && reMdp.length >0) && (mdp===reMdp) ){ 
            const newUser = await postUser(jsonData)
            console.log("Un mail de confirmation vous a été envoyé");
            password.style.marginBottom="24px";
            errorMail.style.display="none";
            errorMailDeja_Utilise.style.display="none";
            errorMDP_tout.style.display="none";
            errorMDP.style.display="none";
            successAccount.style.display="grid";
            window.location.href="index.html";
        }

        // si ce que je tappe pour mot de passe et confirm mot de passe sont >0 et !
    if( (mdp.length >0 && reMdp.length >0) && (mdp!==reMdp) ){ 
        console.log("Les mots de passe ne correspondent pas");
        errorMDP.style.display="none";
        errorMail.style.display="none";
        errorMailDeja_Utilise.style.display="none";
        errorMDP_tout.style.display="grid";
        
    }

    if(mail.length ===0){ // si je n'ai rien tappé pour le mail
        console.log("Veuillez renseigner une adresse e-mail");
        errorMail.style.display="grid";
        password.style.marginBottom="0px"; // enlever le marginBottom apres avoir rien rempli
    }

    if(mdp.length ===0){ // si je n'ai rien tappé pour le mot de passe
        console.log("Veuillez renseigner un mot de passe");
        errorMDP.style.display="grid";
        password.style.marginBottom="0px"; // enlever le marginBottom apres avoir rien rempli
    }

        
    }
    root.addEventListener("submit", handleSubmit)
}

const postUser = async (user) =>{
    const response = await fetch("http://localhost:3000/user", {
        headers: {
            'Content-Type': 'application/json'
          },
        method: "POST",
        
        body: JSON.stringify(user)
    })

    if(response.ok){
        const responseData= await response//.json()
        return responseData
    }
    else{
        throw response
    }
}


const signUpRoot= document.querySelector(".signup_form")

const signup=init(signUpRoot)


