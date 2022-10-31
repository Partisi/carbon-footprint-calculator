const emissionsConversions = {
    housing: [
        { key: "electricity", emissionsPerUnit: 0.0429, unit: "kWh" },
        { key: "gas", emissionsPerUnit: 5.3060, unit: "therm" },
        { key: "oil", emissionsPerUnit: 2.6892, unit: "litre" },
        { key: "waste", emissionsPerUnit: 0.6300, unit: "kilogram" },
        { key: "water", emissionsPerUnit: 0.0106, unit: "litre" },
    ],
    travel: [
        { key: "car", emissionsPerUnit: 0.5711, unit: "kilometer" },
        { key: "bus", emissionsPerUnit: 0.5711, unit: "kilometer" },
        { key: "metro", emissionsPerUnit: 0.28485, unit: "kilometer" },
        { key: "taxi", emissionsPerUnit: 0.5711, unit: "kilometer" },
        { key: "train", emissionsPerUnit: 0.28485, unit: "kilometer" },
        { key: "plane", emissionsPerUnit: 0.101, unit: "kilometer" },
    ],
    food: [
        { key: "redmeat", emissionsPerUnit: 0.0195, unit: "gram" },
        { key: "whitemeat", emissionsPerUnit: 0.0037, unit: "gram" },
        { key: "dairy", emissionsPerUnit: 0.0042, unit: "gram" },
        { key: "cereal", emissionsPerUnit: 0.0018, unit: "gram" },
        { key: "vegetable", emissionsPerUnit: 0.0007, unit: "gram" },
        { key: "fruit", emissionsPerUnit: 0.0013, unit: "gram" },
        { key: "oil", emissionsPerUnit: 0.0040, unit: "gram" },
        { key: "snack", emissionsPerUnit: 0.0015, unit: "gram" },
        { key: "drink", emissionsPerUnit: 0.0006, unit: "gram" },
    ],
    products: [
        { key: "electrical", emissionsPerUnit: 0.47, unit: "dollar" },
        { key: "household", emissionsPerUnit: 0.47, unit: "dollar" },
        { key: "clothes", emissionsPerUnit: 0.47, unit: "dollar" },
        { key: "medical", emissionsPerUnit: 0.47, unit: "dollar" },
        { key: "recreational", emissionsPerUnit: 0.47, unit: "dollar" },
        { key: "other", emissionsPerUnit: 0.47, unit: "dollar" },
    ],
    services: [
        { key: "health", emissionsPerUnit: 0.20, unit: "dollar" },
        { key: "finance", emissionsPerUnit: 0.14, unit: "dollar" },
        { key: "recreation", emissionsPerUnit: 0.20, unit: "dollar" },
        { key: "education", emissionsPerUnit: 0.20, unit: "dollar" },
        { key: "vehicle", emissionsPerUnit: 0.37, unit: "dollar" },
        { key: "communications", emissionsPerUnit: 0.20, unit: "dollar" },
        { key: "other", emissionsPerUnit: 0.20, unit: "dollar" },
    ],

}

module.exports = { emissionsConversions }

/**
 * Calculations
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
 * coLITRE =  2.68927 (kgs of CO2 per litre)
 * - 10.18 kgs of CO2 per gallon (Emissions Factors for Greenhouse Gas Inventories; Distillate Fuel Oil No. 1)
 * - 2.68927 kgs of CO2 per litre
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