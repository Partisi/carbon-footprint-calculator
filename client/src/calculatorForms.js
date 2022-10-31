
export const calculatorForms = {
    housing: {
        description: "",
        period: "",
        inputs: [
            {
                label: "People in Household",
                type: Number,
                suffix: "people",
                required: true,
                tooltip: ""
            },
            {
                label: "Electricty Use (Yearly)",
                type: Number,
                suffix: "kWh/yr",
                required: false,
                tooltip: ""
            },
            {
                label: "Natural Gas Use (Yearly)",
                type: Number,
                suffix: "therms/yr",
                required: false,
                tooltip: ""
            },
            {
                label: "Fuel Oil Use (Yearly)",
                type: Number,
                suffix: "litres/yr",
                required: false,
                tooltip: ""
            },
            {
                label: "Waste (Weekly)",
                type: Number,
                suffix: "kg/week",
                required: false,
                tooltip: ""
            },
            {
                label: "Water (daily)",
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
                label: "Distance Driven",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
                label: "Distance Traveled in Bus",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
                label: "Distance Traveled in Metro",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
                label: "Distance Traveled in Taxi",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
                label: "Distance Traveled in Train",
                type: Number,
                suffix: "km/month",
                required: false,
                tooltip: ""
            },
            {
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
                label: "Red Meat Consumption(daily)",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                label: "White Meat Consumption (daily)",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                label: "Dairy Consumption (daily)",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                label: "Cereals Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                label: "Vegetables Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                label: "Fruits Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                label: "Oils Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
                label: "Snacks Consumption",
                type: Number,
                suffix: "kCals/day",
                required: false,
                tooltip: ""
            },
            {
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
                label: "Electrical Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Household Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Clothes Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Medical Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Recreational Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
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
                label: "Health Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Finance Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Recreation Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Education Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Vehicle Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Communications Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
            {
                label: "Other Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: ""
            },
        ],
    }
};