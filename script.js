const drumKitTiles = [
    {
        dataKey: 65,
        sound: "sounds/deathyell1.wav",
        kbd: "a"
    },
    {
        dataKey: 83,
        sound: "sounds/deathyell9.wav",
        kbd: "s"
    },
    {
        dataKey: 68,
        sound: "sounds/deathyell3.wav",
        kbd: "d"
    },
    {
        dataKey: 70,
        sound: "sounds/deathyell4.wav",
        kbd: "f"
    },
    {
        dataKey: 71,
        sound: "sounds/deathyell5.wav",
        kbd: "g"
    },
    {
        dataKey: 72,
        sound: "sounds/deathyell6.wav",
        kbd: "h"
    },
    {
        dataKey: 74,
        sound: "sounds/deathyell7.wav",
        kbd: "j"
    },
    {
        dataKey: 75,
        sound: "sounds/deathyell8.wav",
        kbd: "k"
    },
    {
        dataKey: 76,
        sound: "sounds/zombie1.wav",
        kbd: "l"
    }
]

function createDrumKeys () {
//to make the divs and attach them to the html document
for (let i = 0; i < 9; i++) {
    let div = document.createElement('div')
    div.setAttribute("id", i)
    div.classList.add("key")
    div.innerHTML = `<kbd>${drumKitTiles[i].kbd}</kbd>\n<span>${drumKitTiles[i].dataKey}</span>`
    document.getElementById('container').appendChild(div)
}
//set the data-key class value to the corresponding dataKey property in the drumKitTiles object
for (let i=0; i < 9; i++) {
    document.getElementsByClassName('key')[i].setAttribute('data-key', drumKitTiles[i].dataKey)
}
}

createDrumKeys();

//to create the audio tags
function createAudioTags () {
    for(let i=0; i < 9; i++) {
        let audio = document.createElement('audio')
        audio.setAttribute('data-key', drumKitTiles[i].dataKey)
        audio.setAttribute('src', drumKitTiles[i].sound)
        document.getElementById('audio').appendChild(audio)
    }
}

createAudioTags();

function playMusic () {
    let audio = document.querySelector('#theme-song')
    audio.loop = true
    audio.volume = 0.7
    audio.play()
}

playMusic();

function playScreams (evt) {
    let audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`)
    let key = document.querySelector(`div[data-key="${evt.keyCode}"]`)
    if(!audio) return; //stops the function from running if there's no audio
    audio.currentTime = 0 //to rewind in case the person hits the key multiple times
    audio.play()
    key.classList.add('playing')
}

function removeTransition (evt) {
    //pick the longest transition event
    if(evt.propertyName !== 'transform') {
        return //skip if it's not a transform
    }
    this.classList.remove('playing')
}

var keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
//query selector all returns an array so we need to loop through each item and add an
//event listener
window.addEventListener('keydown', playScreams)
