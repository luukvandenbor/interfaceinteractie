// JavaScript Document
console.log("PepsiMax!");

//Bron: Javascript toegepast vanuit vorig jaar voor thema muziek.
var blackflag = document.querySelector("main ol li:nth-of-type(1) div");
var unity = document.querySelector("main ol li:nth-of-type(2) div");
var origins = document.querySelector("main ol li:nth-of-type(3) div");
var odyssey = document.querySelector("main ol li:nth-of-type(4) div");
var valhalla = document.querySelector("main ol li:nth-of-type(5) div");

var musicBlackFlag = document.querySelector("main ol li:nth-of-type(1) div audio");
var musicUnity = document.querySelector("main ol li:nth-of-type(2) div audio");
var musicOrigins = document.querySelector("main ol li:nth-of-type(3) div audio");
var musicOdyssey = document.querySelector("main ol li:nth-of-type(4) div audio");
var musicValhalla = document.querySelector("main ol li:nth-of-type(5) div audio");


var isPlayingBlackFlag = false;
var isPlayingUnity = false;
var isPlayingOrigins = false;
var isPlayingOdyssey = false;
var isPlayingValhalla = false;


//Slide 1 - Blackflag
blackflag.addEventListener("click", () => {
  if (isPlayingBlackFlag) {
        musicBlackFlag.pause()
        isPlayingBlackFlag = false
    } else {
        musicBlackFlag.play()
        isPlayingBlackFlag = true
    }
})

//Slide 2 - Unity
unity.addEventListener("click", () => {
  if (isPlayingUnity) {
        musicUnity.pause()
        isPlayingUnity = false
    } else {
        musicUnity.play()
        isPlayingUnity = true
    }
})

//Slide 3 - Origins
origins.addEventListener("click", () => {
  if (isPlayingOrigins) {
        musicOrigins.pause()
        isPlayingOrigins = false
    } else {
        musicOrigins.play()
        isPlayingOrigins = true
    }
})

//Slide 4 - Odyssey
odyssey.addEventListener("click", () => {
  if (isPlayingOdyssey) {
        musicOdyssey.pause()
        isPlayingOdyssey = false
    } else {
        musicOdyssey.play()
        isPlayingOdyssey = true
    }
})

//Slide 5 - Valhalla
valhalla.addEventListener("click", () => {
  if (isPlayingValhalla) {
        musicValhalla.pause()
        isPlayingValhalla = false
    } else {
        musicValhalla.play()
        isPlayingValhalla = true
    }
})
