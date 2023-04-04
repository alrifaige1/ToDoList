export const init=(root)=>{
    const mailButton=document.querySelector("#button")
    const onClick=(event)=>{
        event.preventDefault()
        const email = document.getElementById('email').value
        const emailVerif = document.getElementById('confirmEmail').value
      

        

        if (email == '' || emailVerif == '') {
            //  console.log(document.getElementById('messageVrai').innerHTML)
            document.getElementById('containerMessageError').style.display = "block"
            document.getElementById('messageVrai').style.color = "red"
            document.getElementById('messageVrai').innerHTML = "Email S'il vous plait insérer votre Email"
            
        }

        if (email.indexOf('@') == -1 || emailVerif.indexOf('@') == -1) {
            // console.log(document.getElementById('messageVrai').innerHTML)
            document.getElementById('containerMessageError').style.display = "block"
            document.getElementById('messageVrai').style.color = "red"
            document.getElementById('messageVrai').innerHTML = "Le Format de l'email n'est pas valide"
            
    
        }

        if (email.indexOf('.') == -1 || emailVerif.indexOf('.') == -1) {
            // console.log(document.getElementById('messageVrai').innerHTML)
            document.getElementById('containerMessageError').style.display = "block"
            document.getElementById('messageVrai').style.color = "red"
            document.getElementById('messageVrai').innerHTML = "Le Format de l'email n'est pas valide"
            
    
        }

        if (email != emailVerif) {
            document.getElementById('containerMessageError').style.display = "block"
            document.getElementById('messageVrai').style.color = "red"
            document.getElementById('messageVrai').innerHTML = "Les deux email n'sont pas identiques"
            
        }

    

    }

   mailButton.addEventListener("click",onClick)
}