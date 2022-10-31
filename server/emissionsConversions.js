const emissionsConversions = {
    housing: {
        coKWH: 0.0429, // how much kg of CO2 per kWh? from the US average
        coTHERMS: 5.3060, // how much kg of CO2 per therm of natural gas?
        coLITRE: 2.6892, // kg of CO2 per litre of gas
        coKG: 0.6300, // kg of CO2 per kg of waste
    },
    travel: {
        coCarKM: 0.5711, // kg of CO2 per kilometer
        coTrainKM: 0.28485, // kg of CO2 per km of train
        coFlyKM: 0.101, // kg of CO2 per km of flying
    },
    food: {
        coRedMeatGRAMS: 0.0195, // each food is how many kg of CO2 per gram
        coWhiteMeatGRAMS: 0.0037,
        coDairyGRAMS: 0.0042,
        coCerealGRAMS: 0.0018,
        coVegetablesGRAMS: 0.0007,
        coFruitsGRAMS: 0.0013,
        coOilsGRAMS: 0.0040,
        coSnacksGrams: 0.0015,
        coDrinksGRAMS: 0.0006,
    },
    products: {
        coDOLLARS: 0.47,  // kg of CO2 per dollar spent average
    },
    services: {
        coHealthDOLLARS: 0.2, // kg of cO2 per dollar spent on average
        coFinanceDOLLARS: 0.14, // if unknown for specific sector, use avg (0.2)
        coRecreationDOLLARS: 0.2,
        coEducationDOLLARS: 0.2,
        coVehicleDOLLARS: 0.37,
        coCommunicationsDOLLARS: 0.2,
        coOtherDOLLARS: 0.2,
    },

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