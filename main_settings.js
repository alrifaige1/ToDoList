import * as Logout from "./lougout.js"
import * as AddList from "./addList.js"
import * as VerifEmail from "./verifEmail.js"
import * as VerifMdp from "./verifMdp.js"
import * as OverlayMenu from "./overlay_menu.js"
import * as GoTo from "./goTo.js"

const homeRoot=document.querySelector("body")

if (!homeRoot) {
	throw new Error("Couldn't find home root")
}

const menu=OverlayMenu.init(homeRoot)

const logoutRoot=document.querySelector(".logout")
if (!logoutRoot) {
	throw new Error("Couldn't find logout root")
}

const logout=Logout.init(logoutRoot)

const addListRoot=document.querySelector(".menu_add_list")

const listRoot=document.querySelector(".menu_list")
if (!listRoot) {
  throw new Error("Couldn't find list root")
}

if (!addListRoot) {
    throw new Error("Couldn't find add list form root")
  }

const addlist=AddList.init(addListRoot,listRoot)

const mailForm=document.querySelector(".mail_form")

if (!mailForm) {
    throw new Error("Couldn't find mail form root")
  }

const checkMail=VerifEmail.init(mailForm)

const mdpForm=document.querySelector(".mdp_form")

if (!mdpForm) {
    throw new Error("Couldn't find password form root")
  }

const checkMdp=VerifMdp.init(mdpForm)

const fromList=".boxtext"

const toList="./listdetail.html"

const goList=GoTo.init(homeRoot,fromList,toList)