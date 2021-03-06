// Initialized Variables for total nutrition information
let totalCalories = 0;
let totalTFat = 0;
let totalSFat = 0;
let totalCholesterol = 0;
let totalSodium = 0;
let totalCarbohydrates = 0;
let totalDFiber = 0;
let totalSugar = 0;
let totalProtein = 0;
let totalPotassium = 0;

// Goes through array of each food item and accumlates data on nutritional values
function getNutrionalValue(data) {
    console.log(data.foods[0].food_name);
    data.foods.forEach(function (ingredient){
        totalCalories += ingredient.nf_calories;
        totalTFat += ingredient.nf_total_fat;
        totalSFat += ingredient.nf_saturated_fat;
        totalCholesterol += ingredient.nf_cholesterol;
        totalSodium += ingredient.nf_sodium;
        totalCarbohydrates += ingredient.nf_total_carbohydrate;
        totalDFiber += ingredient.nf_dietary_fiber;
        totalSugar += ingredient.nf_sugars;
        totalProtein += ingredient.nf_protein;
        totalPotassium += ingredient.nf_potassium;
    })
    // console.log(totalCalories);
}

// Takes in a string of ingredients with amount and units and fetches JSON from NutritionIX
// let testIngred = "1 banana, 10 cups of sugar, 4 avocadoes"
function fetchNutrition(string){
    let nutritionURL = "https://trackapi.nutritionix.com/v2/natural/nutrients";
    let bodyQ = "{\n  \"query\": \" "+ string + "\"\n}";

    fetch(nutritionURL, {
        "headers":{
            "accept":"application/json",
            "accept-language":"en-US,en;q=0.9",
            "content-type":"application/json",
            "x-app-id":"7d3ecb4e",
            "x-app-key":"f219f153fef321315ddf906f69ff2f52",
            "x-remote-user-id":"0"
        },
        // "referrer":"https://trackapi.nutritionix.com/docs/",
        // "referrerPolicy":"no-referrer-when-downgrade",
        "body": bodyQ,
        "method":"POST",
        "mode":"cors"
        })
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            getNutrionalValue(data);
            drawNutritionLabel();
        });
}

////////////////////////////////////////////////////////
//////////////// TESTING WITH JSON FILES ////////////////
////////////////////////////////////////////////////////
// let fileName = "/testNutrionix.json";
// let fileName2 = "/newNutrition.json";
// fetch(fileName2)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         getNutrionalValue(data);
//     });

// fetchNutrition(testIngred);