
export const calculatorForms = {
    housing: {
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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