/**
 * Main Forms for each category.
 * Each category has their own 'form' that is here in an obj (can also be JSON if needed)
 * Based on the category to show in the card format, will get the appropiate inputs here.
 * 
 * Also, each input is a Number, but made into parameter for future flexibility.
 */

// Categories: housing, travel, food, products, and services
export const calculatorForms = {
    housing: { // the category we are currently calculating for
        description: "Calculating your household emissions is a perfect place to start! Before you go off and start to make your community greener, it is important to have your house in order first! Household emissions are the easiest for individuals to adjust and this calculator would give you a great idea of where your household emissions really come from.",
        period: "", // over what period are each input? (for this category specifically, there are different periods so None here)
        inputs: [ // each 'form' input
            {
                name: "people", // the key associated
                label: "People in Household",
                type: Number,
                suffix: "people", // what to display after input
                required: true,
                tooltip: "", // if we want to have any extra info displayed if hover over input
                factor: 1, // factor to make this value into yearly estimate (i.e. input asks for monthly so our factor will be '12' so we get yearly estimate)
            },
            {
                name: "electricity",
                label: "Electricity Use (Yearly)",
                type: Number,
                suffix: "kWh/year",
                required: false,
                tooltip: "An average household in America goes through about 10,000 kWh a year.",
                factor: 1,
            },
            {
                name: "gas",
                label: "Natural Gas Use (Yearly)",
                type: Number,
                suffix: "therms/year",
                required: false,
                tooltip: "Only about 50% of households use natural gas with the average of those with natural gas coming to around 700 therms a year. Most households use EITHER electricity or natural gas.",
                factor: 1,
            },
            {
                name: "oil",
                label: "Fuel Oil Use (Yearly)",
                type: Number,
                suffix: "liters/year",
                required: false,
                tooltip: "Only about 5 million households in America use fuel oil with the average being around 2,000 liters a year.",
                factor: 1,
            },
            {
                name: "waste",
                label: "Waste (Weekly)",
                type: Number,
                suffix: "lb/week",
                required: false,
                tooltip: "Each garbage bag can be roughly equal to 40 pounds of waste.",
                factor: 52
            },
            {
                name: "water",
                label: "Water",
                type: Number,
                suffix: "liters/day",
                required: false,
                tooltip: "The average water use per person is around 300 liters a day.",
                factor: 365
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
                suffix: "miles/month",
                required: false,
                tooltip: "The average distance driven per month in America is about 1,000 miles.",
                factor: 12,
            },
            {
                name: "bus",
                label: "Distance Traveled in Bus",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: "This input can vary widely but if you use the bus as often as someone who drives, you may also use 1,000 miles a month as a reference point here.",
                factor: 12,
            },
            {
                name: "metro",
                label: "Distance Traveled in Metro",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: "",
                factor: 12,
            },
            {
                name: "taxi",
                label: "Distance Traveled in Taxi",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: "",
                factor: 12,
            },
            {
                name: "train",
                label: "Distance Traveled in Train",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: "",
                factor: 12,
            },
            {
                name: "plane",
                label: "Distance Traveled in Plane",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: "For your reference, a flight from New York to Los Angeles is about 2,700 miles while a flight from New York to Rome is about 4,200 miles.",
                factor: 12,
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
                suffix: "grams/day",
                required: false,
                tooltip: "A nice ribeye steak is about 300 grams of red meat.",
                factor: 365,
            },
            {
                name: "whitemeat",
                label: "White Meat Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "The average chicken breast is about 170 grams of white meat.",
                factor: 365,
            },
            {
                name: "dairy",
                label: "Dairy Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "One cup of milk is about 250 grams while a slice of american cheese is about 30 grams.",
                factor: 365,
            },
            {
                name: "cereal",
                label: "Cereals Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "The average loaf of bread is about 400 grams.",
                factor: 365,
            },
            {
                name: "vegetable",
                label: "Vegetables Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "The average recommended amount is about 400 grams (so for most people the average consumption is about 100 grams :P).",
                factor: 365,
            },
            {
                name: "fruit",
                label: "Fruits Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "Average recommended per day is about 400 grams of fruit.",
                factor: 365,
            },
            {
                name: "oil",
                label: "Oils Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "1 cup of olive oil is about 200 grams.",
                factor: 365,
            },
            {
                name: "snack",
                label: "Snacks Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "A regular bag of Doritos is about 50 grams.",
                factor: 365,
            },
            {
                name: "drink",
                label: "Drinks Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "A soda can be between 40-60 grams each.",
                factor: 365,
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
                tooltip: "Average household electrical bill is about $122 per month in America.",
                factor: 12,
            },
            {
                name: "household",
                label: "Household Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "These include anyday items in your household and can range from $50 per month to $200 per month.",
                factor: 12,
            },
            {
                name: "clothes",
                label: "Clothes Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "",
                factor: 12,
            },
            {
                name: "medical",
                label: "Medical Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "",
                factor: 12,
            },
            {
                name: "recreational",
                label: "Recreational Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "Including sports, movie theaters, and other 'fun' activities.",
                factor: 12,
            },
            {
                name: "other",
                label: "Other Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "",
                factor: 12,
            }
        ],
    },
    services: {
        description: "Taking a step back to view our daily lives in a larger picture - we can see how key areas of our lives contribute to global emissions. While these costs are generally unavoidable, we can still be concious of our decisions and maybe make an effort to be just a bit greener. This part, however, is a bit more loose on the estimate side.",
        period: "per month",
        inputs: [
            {
                name: "health",
                label: "Health Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "Average health costs depending on age from $0 a month for young adults to $500 for adults on average.",
                factor: 12,
            },
            {
                name: "finance",
                label: "Finance Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "",
                factor: 12,
            },
            {
                name: "recreation",
                label: "Recreation Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "",
                factor: 12,
            },
            {
                name: "education",
                label: "Education Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "",
                factor: 12,
            },
            {
                name: "vehicle",
                label: "Vehicle Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "Inclusive of gasoline and other vehicle-releated expenses.",
                factor: 12,
            },
            {
                name: "communications",
                label: "Communications Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "Cell phone and other communications.",
                factor: 12,
            },
            {
                name: "other",
                label: "Other Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "",
                factor: 12,
            },
        ],
    }
};