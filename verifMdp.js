export const init=(root)=>{
    const onClick=(event)=>{
        event.preventDefault()
        const mdpActuel = '123456789'
        const pass = document.getElementById('pass').value
        const confirmPass = document.getElementById('confirmMdp').value
        const newMdp = document.getElementById('newMdp').value
      

        if (pass != mdpActuel) {

            document.getElementById('containerMessageErrorMdp').style.display = "block"
            document.getElementById('messageVraiMdp').style.color = "red"
            document.getElementById('messageVraiMdp').innerHTML = "Le mot du passe actuel n'est pas valide"
    
            
        }

        if (newMdp.length < 8) {
            document.getElementById('containerMessageErrorMdp').style.display = "block"
            document.getElementById('messageVraiMdp').style.color = "red"
            document.getElementById('messageVraiMdp').innerHTML = "La longueur du mot de passe doit être supérieur à 8"
    
            
        }
    
        if (newMdp != confirmPass) {
            document.getElementById('containerMessageErrorMdp').style.display = "block"
            document.getElementById('messageVraiMdp').style.color = "red"
            document.getElementById('messageVraiMdp').innerHTML = "Le deux mot du passe ne sont pas identiques"
    
            
        }

    

    }

   root.addEventListener("submit",onClick)
}