const keyboardContainer = document.getElementById("keyboard-container")

const keys = ["A", "W", "S", "E", "D", "F", "T", "G", "Y", "H", "U", "J"]

const playKey = (key) => {
    const audio = document.getElementById(key + "-sound")
    audio.load()
    audio.play()
}

document.addEventListener("keypress", (e) => {
    if(keys.includes(e.key.toUpperCase())){
        playKey(e.key.toLowerCase())
    }
})
