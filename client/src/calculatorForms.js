
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
                tooltip: "An average household in America goes through about 10,000 kWh a year."
            },
            {
                name: "gas",
                label: "Natural Gas Use (Yearly)",
                type: Number,
                suffix: "therms/year",
                required: false,
                tooltip: "Only about 50% of households use natural gas with the average of those with natural gas coming to around 700 therms a year. Most households use EITHER electricity or natural gas."
            },
            {
                name: "oil",
                label: "Fuel Oil Use (Yearly)",
                type: Number,
                suffix: "liters/year",
                required: false,
                tooltip: "Only about 5 million households in America use fuel oil with the average being around 2,000 liters a year."
            },
            {
                name: "waste",
                label: "Waste (Weekly)",
                type: Number,
                suffix: "lb/week",
                required: false,
                tooltip: "Each garbage bag can be roughly equal to 40 pounds of waste."
            },
            {
                name: "water",
                label: "Water",
                type: Number,
                suffix: "liters/day",
                required: false,
                tooltip: "The average water use per person is around 300 liters a day."
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
                tooltip: "The average distance driven per month in America is about 1,000 miles."
            },
            {
                name: "bus",
                label: "Distance Traveled in Bus",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: "This input can vary widely but if you use the bus as often as someone who drives, you may also use 1,000 miles a month as a reference point here."
            },
            {
                name: "metro",
                label: "Distance Traveled in Metro",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: ""
            },
            {
                name: "taxi",
                label: "Distance Traveled in Taxi",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: ""
            },
            {
                name: "train",
                label: "Distance Traveled in Train",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: ""
            },
            {
                name: "plane",
                label: "Distance Traveled in Plane",
                type: Number,
                suffix: "miles/month",
                required: false,
                tooltip: "For your reference, a flight from New York to Los Angeles is about 2,700 miles while a flight from New York to Rome is about 4,200 miles."
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
                tooltip: "A nice ribeye steak is about 300 grams of red meat."
            },
            {
                name: "whitemeat",
                label: "White Meat Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "The average chicken breast is about 170 grams of white meat."
            },
            {
                name: "dairy",
                label: "Dairy Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "One cup of milk is about 250 grams while a slice of american cheese is about 30 grams."
            },
            {
                name: "cereal",
                label: "Cereals Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "The average loaf of bread is about 400 grams."
            },
            {
                name: "vegetable",
                label: "Vegetables Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "The average recommended amount is about 400 grams (so for most people the average consumption is about 100 grams :P)."
            },
            {
                name: "fruit",
                label: "Fruits Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "Average recommended per day is about 400 grams of fruit."
            },
            {
                name: "oil",
                label: "Oils Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "1 cup of olive oil is about 200 grams."
            },
            {
                name: "snack",
                label: "Snacks Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "A regular bag of Doritos is about 50 grams."
            },
            {
                name: "drink",
                label: "Drinks Consumption",
                type: Number,
                suffix: "grams/day",
                required: false,
                tooltip: "A soda can be between 40-60 grams each."
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
                tooltip: "Average household electrical bill is about $122 per month in America."
            },
            {
                name: "household",
                label: "Household Cost",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "These include anyday items in your household and can range from $50 per month to $200 per month."
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
                tooltip: "Including sports, movie theaters, and other 'fun' activities."
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
        description: "Taking a step back to view our daily lives in a larger picture - we can see how key areas of our lives contribute to global emissions. While these costs are generally unavoidable, we can still be concious of our decisions and maybe make an effort to be just a bit greener. This part, however, is a bit more loose on the estimate side.",
        period: "per month",
        inputs: [
            {
                name: "health",
                label: "Health Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "Average health costs depending on age from $0 a month for young adults to $500 for adults on average."
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
                tooltip: "Inclusive of gasoline and other vehicle-releated expenses."
            },
            {
                name: "communications",
                label: "Communications Costs",
                type: Number,
                suffix: "$ per month",
                required: false,
                tooltip: "Cell phone and other communications."
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