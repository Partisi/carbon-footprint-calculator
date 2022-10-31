
export const calculatorForms = {
    housing: {
        description: "Calculating your household emissions is a perfect place to start! Before you go off and start to make your community greener, it is important to have your house in order first! Household emissions are the easiest for individuals to adjust and this calculator would give you a great idea of where your household emissions really come from.",
        period: "",
        inputs: [
            {
                name: "people",
                label: "People in Household",
                type: Number,
                suffix: "people",
                required: true,
                tooltip: "",
            },
            {
                name: "electricity",
                label: "Electricity Use (Yearly)",
                type: Number,
                suffix: "kWh/year",
                required: false,
                tooltip: ""
            },
            {
                name: "gas",
                label: "Natural Gas Use (Yearly)",
                type: Number,
                suffix: "therms/year",
                required: false,
                tooltip: ""
            },
            {
                name: "oil",
                label: "Fuel Oil Use (Yearly)",
                type: Number,
                suffix: "litres/year",
                required: false,
                tooltip: ""
            },
            {
                name: "waste",
                label: "Waste (Weekly)",
                type: Number,
                suffix: "kg/week",
                required: false,
                tooltip: ""
            },
            {
                name: "water",
                label: "Water",
                type: Number,
                suffix: "litres/day",
                required: false,
                tooltip: ""
            },
        ],
    },

    travel: {
        description: "Traveling is a key factor in global Carbon Dioxide emissions - from cars to trains to planes. In today's modern world, there are a variety of different transportation methods with each option differing in its emissions. Thinking how you can get to work or school the greenest way possible makes a huge difference in global emissions!",
        period: "per month",
        inputs: [
            {
                name: "car",
                label: "Distance Driven",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
                name: "bus",
                label: "Distance Traveled in Bus",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
                name: "metro",
                label: "Distance Traveled in Metro",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
                name: "taxi",
                label: "Distance Traveled in Taxi",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
                name: "train",
                label: "Distance Traveled in Train",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
                name: "plane",
                label: "Distance Traveled in Plane",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            }
        ]
    },
    food: {
        description: "Believe it or not - the food we eat everyday does affect global emissions. Food is processed, transported, and stored with each category differing in its carbon emissions runoff.",
        period: "per day",
        inputs: [
            {
                name: "redmeat",
                label: "Red Meat Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                name: "whitemeat",
                label: "White Meat Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                name: "dairy",
                label: "Dairy Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                name: "cereal",
                label: "Cereals Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                name: "vegetable",
                label: "Vegetables Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                name: "fruit",
                label: "Fruits Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                name: "oil",
                label: "Oils Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                name: "snack",
                label: "Snacks Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                name: "drink",
                label: "Drinks Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
        ]
    },
    products: {
        description: "It is no secret that money (and capitalism to some extent) causes manufacturers to make more of the goods that are most in demand. Knowing where your dollars go for causing emissions may make you think twice before buying that new Louis Vuitton sweater.",
        period: "per month",
        inputs: [
            {
                name: "electical",
                label: "Electrical Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "household",
                label: "Household Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "clothes",
                label: "Clothes Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "medical",
                label: "Medical Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "recreational",
                label: "Recreational Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "other",
                label: "Other Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            }
        ],
    },
    services: {
        description: "Taking a step back to view our daily lives in a larger picture - we can see how key areas of our lives contribute to global emissions. While these costs are generally unavoidable, we can still be concious of our decisions and maybe make an effort to be just a bit greener.",
        period: "per month",
        inputs: [
            {
                name: "health",
                label: "Health Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "finance",
                label: "Finance Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "recreation",
                label: "Recreation Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "education",
                label: "Education Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "vehicle",
                label: "Vehicle Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "communications",
                label: "Communications Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                name: "other",
                label: "Other Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
        ],
    }
};