
let apple = document.getElementById("apple");
let mandarin = document.getElementById("mandarin");
let tomato = document.getElementById("tomato");
let cucumber = document.getElementById("cucumber");

apple.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("appleId", this.id);
})
mandarin.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("mandarinId", this.id);
})
tomato.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("tomatoId", this.id);
})
cucumber.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("cucumberId", this.id);
})

document.querySelectorAll(".area").forEach(x => {
    x.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})

document.querySelector(".fruits").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("appleId");
    this.appendChild(document.getElementById(data));
})

document.querySelector(".fruits").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("mandarinId");
    this.appendChild(document.getElementById(data));
})

document.querySelector(".vegetables").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("tomatoId");
    this.appendChild(document.getElementById(data));
})

document.querySelector(".vegetables").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("cucumberId");
    this.appendChild(document.getElementById(data));
})

document.querySelector(".box").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("appleId");
    this.appendChild(document.getElementById(data));
})

document.querySelector(".box").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("mandarinId");
    this.appendChild(document.getElementById(data));
})

document.querySelector(".box").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("tomatoId");
    this.appendChild(document.getElementById(data));
})

document.querySelector(".box").addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("cucumberId");
    this.appendChild(document.getElementById(data));
})