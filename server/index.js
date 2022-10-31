const express = require("express");
const app = express();

const cors = require("cors");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

app.get("/test", (req, res) => {
    console.log("hit the test!")
    res.send("Hello World!");
});

app.post("/calculate-housing-emissions", (req, res) => {
    console.log(req.body)
})