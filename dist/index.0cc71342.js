const inputTextarea=document.getElementById("inputfield"),outputTextarea=document.getElementById("outputfield");function copy(){navigator.clipboard.writeText(outputTextarea.innerText),blink()}function blink(){console.log("copied")}inputTextarea.value="",inputTextarea.addEventListener("input",(e=>{outputTextarea.innerText=inputTextarea.value.replace(/(\r\n|\n|\r)/gm," ")}));
//# sourceMappingURL=index.0cc71342.js.map