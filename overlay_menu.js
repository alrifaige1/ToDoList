

export const init=(root)=>{
    const menuButton = document.querySelector(".menu_button")
    const menu=document.querySelector("#overlay_menu")
    const closeButton = document.querySelector(".close_button")

    const openMenu =()=>{
        menu.classList.replace("hidden","overlay_menu")
    }

    const closeMenu =()=>{
        menu.classList.replace("overlay_menu","hidden")
        
    }

    menuButton.addEventListener("click", openMenu)
    closeButton.addEventListener("click", closeMenu)

    
}



