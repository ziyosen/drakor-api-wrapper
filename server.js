import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({ message: "API Drakor sudah aktif!" });
});

app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
});
