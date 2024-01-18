const boxes = document.querySelectorAll(".box"), 
    image = document.querySelector(".image") 

boxes.forEach((box) => {

    // kutunun üstüne sürüklenince kesikli kenar 
    box.addEventListener("dragover", (e) => {
        e.preventDefault()
        box.classList.add("hovered")
    })

    // kutuya sürükleme geçince düz kenar
    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered")
    })

    // kutunun üstüne bırakılınca düz kenar
    box.addEventListener("drop", () => {
        box.appendChild(image) 
        box.classList.remove("hovered")
    })

})