
import * as DeleteElement from "./delete_element.js"
import * as OverlayEdit from "./overlay_edit.js"

export const init =(root, tasks)=>{
    
    const handleClick=async(event)=>{
        
        event.preventDefault()

        const taskName=document.getElementById("taskname").value
        console.log(taskName)

        const element=createTaskElement(taskName)

        tasks.append(element)

        const initDelete=DeleteElement.init(element)

        const initEdit=OverlayEdit.init(root)


    }

    root.addEventListener("click", handleClick)
}

const createTaskElement = (task)=>{
    const element=document.createElement("li")
    element.classList.add("list_element")

    const checkbox=document.createElement("input")
    checkbox.classList.add("checkbox")
    checkbox.setAttribute("type","checkbox")

    const listText=document.createElement("div")
    listText.classList.add("list_text")

    const listItem=document.createElement("p")
    listItem.classList.add("list_item")
    listItem.textContent=task

    const listDetail=document.createElement("p")
    listDetail.classList.add("list_detail")
    listDetail.textContent="1 sur 1 ● Echéance : date ● Notes"

    listText.append(listItem,listDetail)

    const deleteButton=document.createElement("img")
    deleteButton.setAttribute("src","images/mdi_delete.svg")

    element.append(checkbox,listText,deleteButton)

    console.log(element)

    return element
}
