const testMail= ()=>{
    console.log("index forgotten password 2 "); // pour voir si ça entre dans la fct
    const trueEmail= "alrifaiasma02@gmail.com";
    
    const v = document.getElementById("email").value; //pour recuperer ou modifier ce qu'on tape sur le formulaire
    const successEmail= document.getElementById("successEmail");
    const errorMail= document.getElementById("errorMail");

    if( (v.length >0) && (v===trueEmail) ){
        console.log("Si cette adresse e-mail correspond à un compte existant, un mail y a été envoyé");
        successEmail.style.textAlign="center";
        successEmail.style.display= "grid";
        errorMail.style.display="none"; 
    }

    if(v.length ===0){
        console.log("Veuillez saisir une adresse e-mail");
        errorMail.style.display="grid";
        successEmail.style.display="none";
    }
}


const testMDP= ()=>{
    const form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    console.log("change password 2"); // pour voir si ça entre dans la fct
    const trueNewPassword= "1527";

    const vMDP = document.getElementById("password").value;
    const newvMDP = document.getElementById("new-password").value;
    const successMDP= document.getElementById("successMDP");
    
    const password= document.getElementById("password");
    const newPassword= document.getElementById("new-password");

    if( (vMDP.length >0 && newvMDP.length >0) && (vMDP===trueNewPassword && newvMDP=== trueNewPassword) ){
        console.log("Le mot de passe a été modifié avec succès. Cliquez ici pour vous connecter");
        successMDP.style.display="grid";
        password.placeholder='password';
        newPassword.placeholder='password';
    }

    if(vMDP.length ===0 || newvMDP.length ===0){
        console.log("");
        password.style.marginBottom="0px"; // enlever le marginBottom apres avoir rien rempli
        newPassword.style.marginBottom="0px";
        successMDP.style.display="none";
        // password.placeholder='';
        // newPassword.placeholder='';
    }
}

const redirection_change_forgotten= () =>{
    console.log("redirection : change password 2");
    window.location.href="change_password.html";
}

const redirection_login=() =>{
    console.log("vers login 1");
    window.location.href="index.html";
}


