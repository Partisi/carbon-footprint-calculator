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
 * Endpoint for all calculations
 * Because we know the finite amount of categories, easy to pass in req body
 */
app.post("/calculate-emissions", (req, res) => {
    const { body } = req
    const conversions = emissionsConversions[body.category]
    try {
        let totalEmissions = 0
        for (var key of Object.keys(body)) {
            if (key in conversions) {
                totalEmissions += conversions[key].emissionsPerUnit * body[key]
            }
        }
        if (!!body.people) totalEmissions = totalEmissions / body.people
        res.status(200).send({
            totalEmissions: totalEmissions.toFixed(2), units: "kgs of CO2"
        })
    } catch (error) {
        console.log(error)
        res.status(201).send({ error })
    }
})

/**
 * For this app, it's far easier to just abstract away the calculations for each
 * since each category is pretty much the same with differing units.
 * 
 * If calculations vary greatly from category to category, then can split into
 * own separate endpoints like below
 */

app.post("/calculate-emissions/housing", (req, res) => {
    // some unique calculations...
})
app.post("/calculate-emissions/travel", (req, res) => {
    // some unique calculations...
})
app.post("/calculate-emissions/food", (req, res) => {
    // some unique calculations...
})

app.post("/calculate-emissions/products", (req, res) => {
    // some unique calculations...
})
app.post("/calculate-emissions/services", (req, res) => {
    // some unique calculations...
})