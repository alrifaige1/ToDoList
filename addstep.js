
import * as DeleteElement from "./delete_element.js"

export const init =(root, steps)=>{
    const onClick=async(event)=>{
        event.preventDefault()

        const stepName=document.getElementById("etapes").value

        const element=createStepElement(stepName)

        steps.append(element)

        const initDelete=DeleteElement.init(element)

    }

    root.addEventListener("click", onClick)
}

const createStepElement = (step)=>{
    const element=document.createElement("div")
    element.classList.add("etape")

    const checkbox=document.createElement("input")
    checkbox.classList.add("checkbox")
    checkbox.setAttribute("type","checkbox")

    const titre=document.createElement("p")
    titre.classList.add("titre_etape")
    titre.textContent=step

    const deleteButton=document.createElement("img")
    deleteButton.setAttribute("src","images/mdi_remove_circle_outline.svg")

    element.append(checkbox,titre,deleteButton)

    return element
}
