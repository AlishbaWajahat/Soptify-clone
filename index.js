
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs");
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let i = 0; i < as.length; i++) {
        let element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return songs;

}
async function main() {
    let music = await getSongs();
    console.log(music);
}
main();

// Add event listener to menu
document.querySelector(".menu").addEventListener("click", () => {
    let box2 = document.querySelector(".box-2");

    // Set an initial inline style if not already defined
    if (!box2.style.left) {
        box2.style.left = "-100%";
    }

    // Toggle between -100% and 0%
    if (box2.style.left === "-100%") {
        box2.style.left = "0%";
    } else {
        box2.style.left = "-100%";
    }
});










