const songData = [
    { title: "Song 1", link: "https://www.youtube.com/watch?v=abc1" },
    { title: "Song 2", link: "https://www.youtube.com/watch?v=abc2" },
    { title: "Song 3", link: "https://www.youtube.com/watch?v=abc3" },
    { title: "Song 4", link: "https://www.youtube.com/watch?v=abc4" },
    { title: "Song 5", link: "https://www.youtube.com/watch?v=abc5" },
    { title: "Song 6", link: "https://www.youtube.com/watch?v=abc6" },
    { title: "Song 7", link: "https://www.youtube.com/watch?v=abc7" },
    { title: "Song 8", link: "https://www.youtube.com/watch?v=abc8" },
    { title: "Song 9", link: "https://www.youtube.com/watch?v=abc9" },
    { title: "Song 10", link: "https://www.youtube.com/watch?v=abc10" }
  ];
  
  window.addEventListener("load", () => {
    const songList = document.querySelector("#song-list");
  
    songData.forEach((song, index) => {
      const songText = document.createElement("a-text");
      songText.setAttribute("value", `${index + 1}. ${song.title}`);
      songText.setAttribute("position", `-0.7 ${0.9 - index * 0.2} 0.01`);
      songText.setAttribute("color", "white");
      songText.setAttribute("scale", "0.5 0.5 0.5");
      songText.setAttribute("cursor-listener", "");
      songText.classList.add("clickable");
  
      songText.addEventListener("click", () => {
        window.open(song.link, "_blank");
      });
  
      songList.appendChild(songText);
    });
  });
  