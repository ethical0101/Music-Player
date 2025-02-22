document.addEventListener("DOMContentLoaded", function () {
    const lyricsElement = document.getElementById("song-lyrics");
    const lyricsText = lyricsElement.innerText;
    const words = lyricsText.split(" ");
    lyricsElement.innerHTML = words
        .map(
            (word, index) =>
                `<span style="--word-index: ${index}">${word}</span>`
        )
        .join(" ");
});
