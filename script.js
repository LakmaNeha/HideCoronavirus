replaceTxt(document.body)

 function replaceTxt(element){
if(element.hasChildNodes()){
    element.childNodes.forEach(replaceTxt)
}else if (element.nodeType === Text.TEXT_NODE){
    if (element.textContent.match(/coronavirus|covid-19/gi, '')){
        const newEl = document.createElement('span')
        newEl.innerHTML = element.textContent.replace(/coronavirus|covid-19/gi,
            '<span style="background-color: black; color: black">#****#</span>')
        element.replaceWith(newEl)
    }
}
}


    