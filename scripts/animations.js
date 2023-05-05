// JavaScript Document
console.log("CocaCola?BAH");

// Bron: Tom heeft me geholpen met de laatste links - dus click + toggle
var blackflagButton = document.querySelector("main ol li:nth-of-type(1) button");
var unityButton = document.querySelector("main ol li:nth-of-type(2) button");
var originsButton = document.querySelector("main ol li:nth-of-type(3) button");
var odysseyButton = document.querySelector("main ol li:nth-of-type(4) button");
var valhallaButton = document.querySelector("main ol li:nth-of-type(5) button");

var crocodile = document.querySelector("main ol li:nth-of-type(1) > img");
var eagle = document.querySelector("main ol li:nth-of-type(2) > img");
var cat = document.querySelector("main ol li:nth-of-type(3) > img");
var octopus = document.querySelector("main ol li:nth-of-type(4) > img");
var pepsimax = document.querySelector("main ol li:nth-of-type(5) > img");

// Crocodile Animation (Blackflag)
blackflagButton.addEventListener("click", () => {
  crocodile.classList.toggle("showCrocodile")
})

// Eagle Animation (Unity)
unityButton.addEventListener("click", () => {
  eagle.classList.toggle("showEagle")
})

// (Naked) Cat Animation (Origins)
originsButton.addEventListener("click", () => {
  cat.classList.toggle("showCat")
})

// Octopus Animation (Odyssey)
odysseyButton.addEventListener("click", () => {
  octopus.classList.toggle("showOctopus")
})

// PepsiMax Animation (Valhalla)
valhallaButton.addEventListener("click", () => {
  pepsimax.classList.toggle("showPepsimax")
})
