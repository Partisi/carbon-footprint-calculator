
export const calculatorForms = {
    housing: [
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
    travel: [],
    food: [],
    products: [],
    services: [],
};


const placeholder = {
    label: "",
    type: Number,
    suffix: "",
    required: true,
    tooltip: ""
}