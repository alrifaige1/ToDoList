

export const init=(root)=>{
    const deleteButton = document.querySelector("#delete_page_button")
    const menu=document.querySelector("#delete_popup")
    const closeButton = document.querySelector(".cancel_delete")
    const finalDelete=document.querySelector("#final_delete")

    const openMenu =()=>{
        menu.classList.replace("hidden_delete","delete_popup_background")
    }

    const closeMenu =()=>{
        menu.classList.replace("delete_popup_background","hidden_delete")
        
    }

    const backHome =()=>{
        document.location.href="./home.html"
    }

    deleteButton.addEventListener("click", openMenu)
    closeButton.addEventListener("click", closeMenu)
    finalDelete.addEventListener("click",backHome)

    
}



