/* =================================
   SUNDAY SCHOOL WEBSITE
   script.js
================================= */


/* =================================
   ENJOY BUTTON
================================= */

function Enjoy() {

    alert(
        "🌟 Welcome to Sunday School! 🌟\n\n" +
        "Let's Learn 📖\n" +
        "Let's Sing 🎵\n" +
        "Let's Dance 💃\n" +
        "Let's Grow in God's Love ❤️"
    );

}


/* =================================
   GO TO HOME
================================= */

function goHome() {

    window.location.href = "index.html";

}


/* =================================
   GO TO SONGS
================================= */

function goSongs() {

    window.location.href = "songs.html";

}


/* =================================
   GO TO BIBLE VERSES
================================= */

function goVerses() {

    window.location.href = "verses.html";

}


/* =================================
   GO TO ACTION DANCE
================================= */

function goDance() {

    window.location.href = "dance.html";

}


/* =================================
   GO TO VIDEOS
================================= */

function goVideos() {

    window.location.href = "video.html";

}


/* =================================
   SONGS DATA
================================= */

const songs = [

    {
        title: "I'm Special, Very Special",
        lyrics:
            "I'm special, very special,\n" +
            "There's nobody else like me.\n" +
            "God made me special,\n" +
            "God made me wonderfully."
    },

    {
        title: "Jesus Loves Me",
        lyrics:
            "Jesus loves me, this I know,\n" +
            "For the Bible tells me so.\n" +
            "Little ones to Him belong,\n" +
            "They are weak but He is strong."
    },

    {
        title: "Jesus Loves the Little Children",
        lyrics:
            "Jesus loves the little children,\n" +
            "All the children of the world.\n" +
            "Red and yellow, black and white,\n" +
            "They are precious in His sight."
    },

    {
        title: "This Little Light of Mine",
        lyrics:
            "This little light of mine,\n" +
            "I'm gonna let it shine.\n" +
            "This little light of mine,\n" +
            "I'm gonna let it shine."
    },

    {
        title: "If You're Happy and You Know It",
        lyrics:
            "If you're happy and you know it,\n" +
            "Clap your hands.\n" +
            "If you're happy and you know it,\n" +
            "Clap your hands."
    }

];


/* =================================
   SHOW SONG LYRICS
================================= */

function showLyrics(songNumber) {

    if (!songs[songNumber]) {

        alert("Song not found.");

        return;
    }

    const title = document.getElementById("songTitle");
    const lyrics = document.getElementById("lyrics");

    if (title) {

        title.innerText = songs[songNumber].title;

    }

    if (lyrics) {

        lyrics.innerText = songs[songNumber].lyrics;

        lyrics.style.display = "block";

    }

}


/* =================================
   CLOSE LYRICS
================================= */

function closeLyrics() {

    const lyrics = document.getElementById("lyrics");

    if (lyrics) {

        lyrics.style.display = "none";

    }

}


/* =================================
   SEARCH SONGS
================================= */

function searchSongs() {

    const searchBox =
        document.getElementById("songSearch");

    if (!searchBox) {
        return;
    }

    const searchText =
        searchBox.value.toLowerCase();

    const songCards =
        document.querySelectorAll(".song-card");

    songCards.forEach(function(card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =================================
   PAGE LOADED
================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "🌈 Sunday School website loaded successfully!"
        );

    }
);