const express = require("express");
const path = require("path");
require('dotenv').config()


const app = express();

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
    } else {
        next();
    }
});

const server = app.listen(8080, () => {
    console.log(`Server started on port ${server.address().port}`);
    console.log(`Link to server: http://localhost:${server.address().port}`);
});

