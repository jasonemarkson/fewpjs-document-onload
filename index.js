// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    // console.log('The DOM has loaded')
    newText();
})

function newText() {
    const p = document.getElementById('text')
    p.innerHTML = "This is really cool!"
}