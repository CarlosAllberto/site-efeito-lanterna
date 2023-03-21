document.addEventListener("mousemove", e => {
    document.documentElement.style.setProperty("--cursorXpos", `${e.clientX}px`)
    document.documentElement.style.setProperty("--cursorYpos", `${e.clientY}px`)
})


var interruptor = document.querySelector("#interruptor")

interruptor.addEventListener("click", () => {
    let light = document.querySelector("#light")
    let lanterna = document.querySelector("#lanterna")
    let classes = light.classList.toString()
    
    if (classes.indexOf("on") == -1) {
        light.classList.add("on")
        lanterna.style.display = "none"
    } else {
        light.classList.remove("on")
        lanterna.style.display = "block"
    }
})