const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "GET request" });
});

app.post("/", (req, res) => {
    res.json({ message: "POST request" });
});

app.put("/", (req, res) => {
    res.json({ message: "PUT request" });
});

app.delete("/", (req, res) => {
    res.json({ message: "DELETE request" });
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});