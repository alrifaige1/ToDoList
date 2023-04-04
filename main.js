import * as OverlayMenu from "./overlay_menu.js"
import * as OverlayEdit from "./overlay_edit.js"
import * as AddList from "./addList.js"
import * as Logout from "./lougout.js"
import * as DeleteElement from "./delete_element.js"
import * as AddStep from "./addstep.js"
import * as GoTo from "./goTo.js"

const homeRoot=document.querySelector("body")

if (!homeRoot) {
	throw new Error("Couldn't find home root")
}

const logoutRoot=document.querySelector(".logout")
if (!logoutRoot) {
	throw new Error("Couldn't find logout root")
}

const menu=OverlayMenu.init(homeRoot)

const edit=OverlayEdit.init(homeRoot)

const logout=Logout.init(logoutRoot)

const fromList=".menu_item"

const toList="./listdetail.html"

const goList=GoTo.init(homeRoot,fromList,toList)

const fromHome=".home_n_mail"

const toHome="./home.html"

const goHome=GoTo.init(homeRoot,fromHome,toHome)

const listRoot=document.querySelector(".menu_list")
if (!listRoot) {
  throw new Error("Couldn't find list root")
}

const addListRoot=document.querySelector(".menu_add_list")

if (!addListRoot) {
    throw new Error("Couldn't find add list form root")
  }

const addlist=AddList.init(addListRoot,listRoot)

const tasksRoots=document.querySelectorAll(".list_element")
if (!tasksRoots) {
  throw new Error("Couldn't find tasks root")
}

tasksRoots.forEach(task=>DeleteElement.init(task))

const stepsRoots=document.querySelectorAll(".etape")

if (!stepsRoots) {
  throw new Error("Couldn't find steps root")
}

stepsRoots.forEach(step=>DeleteElement.init(step))

const addStepButton=document.querySelector(".add_button")
const listEtapes=document.querySelector(".liste_etapes")
if (!addStepButton) {
  throw new Error("Couldn't find add step button")
}
if (!listEtapes) {
  throw new Error("Couldn't find list etapes root")
}

const addstep=AddStep.init(addStepButton,listEtapes)


