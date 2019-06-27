const drumKitTiles = [
    {
        dataKey: 65,
        sound: "example"
    },
    {
        dataKey: 83,
        sound: "example"
    },
    {
        dataKey: 68,
        sound: "example"
    },
    {
        dataKey: 70,
        sound: "example"
    },
    {
        dataKey: 71,
        sound: "example"
    },
    {
        dataKey: 72,
        sound: "example"
    },
    {
        dataKey: 74,
        sound: "example"
    },
    {
        dataKey: 75,
        sound: "example"
    },
    {
        dataKey: 76,
        sound: "example"
    }
]

function createDrumKeys () {
//to make the divs and attach them to the html document
for (let i = 0; i < 9; i++) {
    let div = document.createElement('div')
    div.setAttribute("id", i)
    div.classList.add("data-key")
    div.innerHTML = `<span>${drumKitTiles[i].dataKey}</span>`
    document.getElementById('container').appendChild(div)
}
//set the data-key class value to the corresponding dataKey property in the drumKitTiles object
for (let i=0; i < 9; i++) {
    document.getElementsByClassName('data-key')[i].setAttribute('data-key', drumKitTiles[i].dataKey)
}
}
createDrumKeys();