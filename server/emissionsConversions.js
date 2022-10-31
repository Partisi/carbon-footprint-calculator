/**
 * Total conversions for each input value with their emissions per unit
 */
const emissionsConversions = {
    housing: { // category that these conversions are associated with
        "electricity": { emissionsPerUnit: 0.0429, unit: "kWh" }, // i.e. for each kWh, we produce 0.0429 kgs of CO2 emissions.
        "gas": { emissionsPerUnit: 5.3060, unit: "therm" },
        "oil": { emissionsPerUnit: 2.6892, unit: "liter" },
        "waste": { emissionsPerUnit: 3.4994, unit: "pound" },
        "water": { emissionsPerUnit: 0.0106, unit: "liter" },
    },
    travel: {
        "car": { emissionsPerUnit: 0.9191, unit: "mile" },
        "bus": { emissionsPerUnit: 0.9191, unit: "mile" },
        "metro": { emissionsPerUnit: 0.4584, unit: "mile" },
        "taxi": { emissionsPerUnit: 0.9191, unit: "mile" },
        "train": { emissionsPerUnit: 0.4584, unit: "mile" },
        "plane": { emissionsPerUnit: 0.1625, unit: "mile" },
    },
    food: {
        "redmeat": { emissionsPerUnit: 0.0195, unit: "gram" },
        "whitemeat": { emissionsPerUnit: 0.0037, unit: "gram" },
        "dairy": { emissionsPerUnit: 0.0042, unit: "gram" },
        "cereal": { emissionsPerUnit: 0.0018, unit: "gram" },
        "vegetable": { emissionsPerUnit: 0.0007, unit: "gram" },
        "fruit": { emissionsPerUnit: 0.0013, unit: "gram" },
        "oil": { emissionsPerUnit: 0.0040, unit: "gram" },
        "snack": { emissionsPerUnit: 0.0015, unit: "gram" },
        "drink": { emissionsPerUnit: 0.0006, unit: "gram" },
    },
    products: {
        "electrical": { emissionsPerUnit: 0.47, unit: "dollar" },
        "household": { emissionsPerUnit: 0.47, unit: "dollar" },
        "clothes": { emissionsPerUnit: 0.47, unit: "dollar" },
        "medical": { emissionsPerUnit: 0.47, unit: "dollar" },
        "recreational": { emissionsPerUnit: 0.47, unit: "dollar" },
        "other": { emissionsPerUnit: 0.47, unit: "dollar" },
    },
    services: {
        "health": { emissionsPerUnit: 0.20, unit: "dollar" },
        "finance": { emissionsPerUnit: 0.14, unit: "dollar" },
        "recreation": { emissionsPerUnit: 0.20, unit: "dollar" },
        "education": { emissionsPerUnit: 0.20, unit: "dollar" },
        "vehicle": { emissionsPerUnit: 0.37, unit: "dollar" },
        "communications": { emissionsPerUnit: 0.20, unit: "dollar" },
        "other": { emissionsPerUnit: 0.20, unit: "dollar" },
    },

}

module.exports = { emissionsConversions }

/**
 * Calculations (how each value was calculated)
 * Although this is messy and might be better to put elsewhere, more useful to show my thinking process here.
 * 
 *
 * coKWH = 0.04296426929 (kgs of CO2 per kWh)
 * - 947.2 lbs of CO2 per mWh (from Emissions Factors for Greenhouse Gas Inventories)
 * - 0.09472 lbs of CO2 per kWh
 * - 0.04296426929 kgs of CO2 per kWh (factor of 1lb == 0.453592)
 *
 * coTHERMS = 5.306 (kgs of CO2 per therm)
 * - 53.06 kgs of CO2 per mmBtu (from Emissions Factors for Greenhouse Gas Inventories)
 * - 1 mmBtu == 10 therms
 * - 5.306 kgs of CO2 per therm
 *
 * coliter =  2.68927 (kgs of CO2 per liter)
 * - 10.18 kgs of CO2 per gallon (Emissions Factors for Greenhouse Gas Inventories; Distillate Fuel Oil No. 1)
 * - 2.68927 kgs of CO2 per liter
 *
 * coKG = (kgs of CO2 per kg of wasate)
 * - 0.63 metric tons of CO2 per ton of waste (Emissions Factors for Greenhouse Gas Inventories; Mixed MSW)
 * - 630 kgs of CO2 per ton of waste
 * - 0.63 kgs of CO2 per kg of waste
 *
 * coCarKM - (kgs of CO2 per km of driving)
 * - 8.78 kg CO2e/US gallon (Calculate Your Carbon Footprint - Shrink That Foot)
 * - 1 gallon == 24.6 miles (US Avg)
 * - 8.78 kgs of CO2 per 24.6 miles
 * - 0.3569 kgs of CO2 per mile
 * - 0.5711 kgs of CO2 per km
 *
 * coTrainKM = (kgs of CO2 per km of train/subway)
 * - 177 grams of CO2 per passenger per mile (https://tedb.ornl.gov/wp-content/uploads/2021/02/TEDB_Ed_39.pdf#page=68)
 * - .177 kgs of CO2 per passenger per mile
 * - 0.28485 kgs of CO2 per passenger per km
 *
 * coFlyKM = (kgs of CO2 per km of flying)
 * - 101 grams of CO2 per passenger per km (https://www.carbonindependent.org/22.html)
 * - 0.101 kgs of CO2 per passenger per km
 *
 * coFoodGrams = (kgs of CO2 per gram of food)
 * - (https://web.archive.org/web/20220102015902/http://shrinkthatfootprint.com/shrink-your-food-footprint)
 *
 * coDollars - (kgs of CO2 per dollar spent)
 * - (https://web.archive.org/web/20200219181524/http://shrinkthatfootprint.com:80/shrink-your-product-footprint)
 * - (https://web.archive.org/web/20200219182223/http://shrinkthatfootprint.com:80/shrink-your-service-footprint)
 */