export const init=(root, from, to)=>{

    const toList=()=>{
        document.location.href=to
    }

    document.querySelectorAll(from).forEach(item => {
        item.addEventListener('click', toList) })

}