const inputTextarea = document.getElementById("inputfield")
const outputTextarea = document.getElementById("outputfield")

inputTextarea.value = ""

inputTextarea.addEventListener("input", (event) => {
    const regex = /(\r\n|\n|\r)/gm
    outputTextarea.innerText = inputTextarea.value.replace(regex, ' ');
});

function copy() {
    navigator.clipboard.writeText(outputTextarea.innerText);
    blink()
}

function blink() {
    console.log("copied")
}

function clearTextarea() {
    inputTextarea.value = ""
    inputTextarea.dispatchEvent(new Event("input"))
}
