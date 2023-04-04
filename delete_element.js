export const init=(root)=>{
    const deleteButton=root.lastElementChild;
    
    const onClick=()=>{
        root.remove()
    }

    deleteButton.addEventListener("click",onClick)

}