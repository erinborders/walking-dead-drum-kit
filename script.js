const drumKitTiles = [
    {
        dataKey: 65,
        sound: "example",
        kbd: "a"
    },
    {
        dataKey: 83,
        sound: "example",
        kbd: "s"
    },
    {
        dataKey: 68,
        sound: "example",
        kbd: "d"
    },
    {
        dataKey: 70,
        sound: "example",
        kbd: "f"
    },
    {
        dataKey: 71,
        sound: "example",
        kbd: "f"
    },
    {
        dataKey: 72,
        sound: "example",
        kbd: "g"
    },
    {
        dataKey: 74,
        sound: "example",
        kbd: "k"
    },
    {
        dataKey: 75,
        sound: "example",
        kbd: "h"
    },
    {
        dataKey: 76,
        sound: "example",
        kbd: "j"
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

window.addEventListener('keydown', function (evt) {
    this.console.log(evt)
})