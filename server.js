const express = require("express");
const path = require("path");

const app = express();

const PORT = 5000;


/* =========================================
   MIDDLEWARE
========================================= */

app.use(express.json());


// Serve files from the main project folder
app.use(express.static(__dirname));


// Serve images
app.use(
    "/images",
    express.static(path.join(__dirname, "images"))
);


/* =========================================
   HTML PAGES
========================================= */

// Home
app.get("/", function (req, res) {

    res.sendFile(
        path.join(__dirname, "templates", "index.html")
    );

});


// Home page
app.get("/index.html", function (req, res) {

    res.sendFile(
        path.join(__dirname, "templates", "index.html")
    );

});


// Songs page
app.get("/songs.html", function (req, res) {

    res.sendFile(
        path.join(__dirname, "templates", "songs.html")
    );

});


// Bible verses page
app.get("/verses.html", function (req, res) {

    res.sendFile(
        path.join(__dirname, "templates", "verses.html")
    );

});


// Action dance page
app.get("/dance.html", function (req, res) {

    res.sendFile(
        path.join(__dirname, "templates", "dance.html")
    );

});


// Videos page
app.get("/video.html", function (req, res) {

    res.sendFile(
        path.join(__dirname, "templates", "video.html")
    );

});


/* =========================================
   SONGS API
========================================= */

app.get("/api/songs", function (req, res) {

    const songs = [

        {
            id: 1,
            title: "I'm Special, Very Special",
            category: "I",
            lyrics:
                "I'm special, very special,\n" +
                "There's nobody else like me.\n" +
                "God made me special,\n" +
                "God made me wonderfully."
        },

        {
            id: 2,
            title: "Jesus Loves Me",
            category: "J",
            lyrics:
                "Jesus loves me, this I know,\n" +
                "For the Bible tells me so.\n" +
                "Little ones to Him belong,\n" +
                "They are weak but He is strong."
        },

        {
            id: 3,
            title: "Jesus Loves the Little Children",
            category: "J",
            lyrics:
                "Jesus loves the little children,\n" +
                "All the children of the world."
        },

        {
            id: 4,
            title: "This Little Light of Mine",
            category: "T",
            lyrics:
                "This little light of mine,\n" +
                "I'm gonna let it shine."
        },

        {
            id: 5,
            title: "If You're Happy and You Know It",
            category: "I",
            lyrics:
                "If you're happy and you know it,\n" +
                "Clap your hands."
        }

    ];

    res.json(songs);

});


/* =========================================
   BIBLE VERSES API
========================================= */

app.get("/api/verses", function (req, res) {

    const verses = [

        {
            id: 1,
            reference: "Matthew 19:14",
            verse: "Let the little children come to me."
        },

        {
            id: 2,
            reference: "Philippians 4:13",
            verse: "I can do all things through Christ who strengthens me."
        },

        {
            id: 3,
            reference: "Psalm 119:105",
            verse: "Your word is a lamp to my feet and a light to my path."
        },

        {
            id: 4,
            reference: "John 3:16",
            verse: "For God so loved the world that He gave His only Son."
        },

        {
            id: 5,
            reference: "Proverbs 3:5",
            verse: "Trust in the Lord with all your heart."
        }

    ];

    res.json(verses);

});


/* =========================================
   ACTION DANCE API
========================================= */

app.get("/api/dance", function (req, res) {

    const dances = [

        {
            id: 1,
            title: "I'm Special, Very Special",
            emoji: "🌟",
            actions: [
                "Point to yourself ☝️",
                "Raise both hands 🙌",
                "Clap your hands 👏",
                "Turn around 💃",
                "Smile 😊"
            ]
        },

        {
            id: 2,
            title: "Jesus Loves Me",
            emoji: "❤️",
            actions: [
                "Point upward ☝️",
                "Put hands on your heart ❤️",
                "Clap your hands 👏",
                "Move side to side 💃",
                "Raise your hands 🙌"
            ]
        },

        {
            id: 3,
            title: "This Little Light of Mine",
            emoji: "💡",
            actions: [
                "Show your fingers ✨",
                "Raise your hands 🙌",
                "Move your hands side to side",
                "Clap 👏",
                "Dance 💃"
            ]
        }

    ];

    res.json(dances);

});


/* =========================================
   VIDEOS API
========================================= */

app.get("/api/videos", function (req, res) {

    const videos = [

        {
            id: 1,
            title: "Sunday School Songs",
            youtube: "https://www.youtube.com/"
        },

        {
            id: 2,
            title: "Kids Bible Songs",
            youtube: "https://www.youtube.com/"
        },

        {
            id: 3,
            title: "Action Songs for Kids",
            youtube: "https://www.youtube.com/"
        }

    ];

    res.json(videos);

});


/* =========================================
   TEST API
========================================= */

app.get("/api/test", function (req, res) {

    res.json({
        message: "Sunday School backend is working! 🌈"
    });

});


/* =========================================
   START SERVER
========================================= */

app.listen(PORT, function () {

    console.log(
        `🌈 Sunday School website running at http://localhost:${PORT}`
    );

});