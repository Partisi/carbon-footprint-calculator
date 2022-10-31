const express = require("express");
const app = express();

const cors = require("cors");
const { emissionsConversions } = require("./emissionsConversions");


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

/**
 * Endpoints for Calculations
 * Each endpoint is in a seperate post request due to instructions
 * Can also have a single endpoint with category in body and calculate based off that too
 */
app.post("/calculate-emissions/housing", (req, res) => {
    console.log(req.body)
    try {
        let totalEmissions = 0

        res.status(200).send({ totalEmissions })
    } catch (error) {
        console.log(error)
        res.status(201).send({ error })
    }
})
app.post("/calculate-emissions/travel", (req, res) => {
    console.log(req.body)
    try {
        let totalEmissions = 0

        res.status(200).send({ totalEmissions })
    } catch (error) {
        console.log(error)
        res.status(201).send({ error })
    }
})
app.post("/calculate-emissions/food", (req, res) => {
    console.log(req.body)
    try {
        let totalEmissions = 0

        res.status(200).send({ totalEmissions })
    } catch (error) {
        console.log(error)
        res.status(201).send({ error })
    }
})

app.post("/calculate-emissions/products", (req, res) => {
    console.log(req.body)
    try {
        let totalEmissions = 0

        res.status(200).send({ totalEmissions })
    } catch (error) {
        console.log(error)
        res.status(201).send({ error })
    }
})
app.post("/calculate-emissions/services", (req, res) => {
    console.log(req.body)
    try {
        let totalEmissions = 0

        res.status(200).send({ totalEmissions })
    } catch (error) {
        console.log(error)
        res.status(201).send({ error })
    }
})