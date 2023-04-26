// JavaScript Document
console.log("Howdy!");

//Bron: Javascript toegepast vanuit vorig jaar voor thema muziek. Tom gaf aan dat ...

//slide 1
const blackflag = document.querySelector("main ol li:nth-of-type(1) div");
const musicBlackFlag = document.querySelector("main ol li:nth-of-type(1) div audio")

let isPlayingBlackFlag = false;

blackflag.addEventListener("click", () => {
  if (isPlayingBlackFlag) {
        musicBlackFlag.pause()
        isPlayingBlackFlag = false
    } else {
        musicBlackFlag.play()
        isPlayingBlackFlag = true
    }
})

//slide 2
const unity = document.querySelector("main ol li:nth-of-type(2) div");
const musicUnity = document.querySelector("main ol li:nth-of-type(2) div audio")

let isPlayingUnity = false;

unity.addEventListener("click", () => {
  if (isPlayingUnity) {
        musicUnity.pause()
        isPlayingUnity = false
    } else {
        musicUnity.play()
        isPlayingUnity = true
    }
})

//slide 3
const origins = document.querySelector("main ol li:nth-of-type(3) div");
const musicOrigins = document.querySelector("main ol li:nth-of-type(3) div audio")

let isPlayingOrigins = false;

origins.addEventListener("click", () => {
  if (isPlayingOrigins) {
        musicOrigins.pause()
        isPlayingOrigins = false
    } else {
        musicOrigins.play()
        isPlayingOrigins = true
    }
})

//slide 4
const odyssey = document.querySelector("main ol li:nth-of-type(4) div");
const musicOdyssey = document.querySelector("main ol li:nth-of-type(4) div audio")

let isPlayingOdyssey = false;

odyssey.addEventListener("click", () => {
  if (isPlayingOdyssey) {
        musicOdyssey.pause()
        isPlayingOdyssey = false
    } else {
        musicOdyssey.play()
        isPlayingOdyssey = true
    }
})

//slide 5
const valhalla = document.querySelector("main ol li:nth-of-type(5) div");
const musicValhalla = document.querySelector("main ol li:nth-of-type(5) div audio")

let isPlayingValhalla = false;

valhalla.addEventListener("click", () => {
  if (isPlayingValhalla) {
        musicValhalla.pause()
        isPlayingValhalla = false
    } else {
        musicValhalla.play()
        isPlayingValhalla = true
    }
})
