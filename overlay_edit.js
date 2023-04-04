

export const init=(root)=>{

    const edit=document.querySelector("#overlay_edit")

    const openEdit =()=>{
        edit.classList.replace("hidden_edit","overlay_edit")
    }

    document.querySelectorAll(".list_text").forEach(item => {
        item.addEventListener('click', openEdit) })

    
    
    const closeButton = document.querySelector(".edit_close_button")
    const sendButton=document.querySelector(".send_edit_button")
    const cancelButton=document.querySelector(".cancel_button")

    const closeEdit =()=>{
        edit.classList.replace("overlay_edit","hidden_edit")
        
    }

    closeButton.addEventListener("click", closeEdit)
    sendButton.addEventListener("click", closeEdit)
    cancelButton.addEventListener("click", closeEdit)

    
}