const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getRandomFortune, getAllFortunes, getAllCompliments, getAllApexLegends, getRandomLegend} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getRandomFortune)
app.get("/api/all-fortunes", getAllFortunes)
app.get("/api/all-compliments", getAllCompliments)
app.get("/api/apex-legends",getAllApexLegends)
app.get("/api/random-Legend",getRandomLegend)

app.listen(4000, () => console.log("Server running on 4000"));
