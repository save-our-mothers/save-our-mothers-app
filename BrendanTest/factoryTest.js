const emrResponse = require('./response');
let visitArray = emrResponse.data.visits;

// factory function to make objects to populate with totals for each year
function yearFactory(year) {
    //Make base object with year from argument
    const yearObj = {
        year: year,
        year_total: 0,
    };
    //Add 52 weeks with a while loop
    let weekNum = 1;
    while (weekNum < 53) {
        yearObj[weekNum] = 0;
        weekNum++;
    };
    //Add 12 months (53-64) with a while loop
    let monthNum = 53;
    while (monthNum < 65) {
        yearObj[monthNum] = 0;
        monthNum++;
    };
    //Add 4 quarters (65-68) with a while loop
    let quarterNum = 65;
    while (quarterNum < 69) {
        yearObj[quarterNum] = 0;
        quarterNum++;
    }
    return yearObj;
};

//create object for each year by passing that year into yearFactory
let y2021 = yearFactory(2021);
let y2022 = yearFactory(2022);
let y2023 = yearFactory(2023);
let y2024 = yearFactory(2024);
let y2025 = yearFactory(2025);
let y2026 = yearFactory(2026);
let y2027 = yearFactory(2027);
let y2028 = yearFactory(2028);
let y2029 = yearFactory(2029);
let y2030 = yearFactory(2030);
let y2031 = yearFactory(2031);

//create array to hold each object as the value with year as key 
const yearsData = [
    {2021: y2021},
    {2022: y2022},
    {2023: y2023},
    {2024: y2024},
    {2025: y2025},
    {2026: y2026},
    {2027: y2027},
    {2028: y2028},
    {2029: y2029},
    {2030: y2030},
    {2031: y2031},
];


// updates each y20xx object with week, month, quarter, and year totals
// loops over each visit object
for (let visit of visitArray) {
    //pulls week, month, and quarter data
    let week = visit.week_of_year;
    let month = visit.month_of_year;
    let quarter = visit.quarter;
    //loops over array of y20xx objects
    for (let i = 0; i < yearsData.length; i++) {
        //if the year matches b/w visit and object of records for that year, increments each record.
        //year from visit is matched to relevant object by comparing the year of the visit
        //to the key and incrementing the corresponding properrty of the object in array yearsObject 
        if (visit.year == Object.keys(yearsData[i])[0]) {
            //increments week total for that week (1 to 52)
            yearsData[i][visit.year][ week ] += 1;
            //increments month total for that month (53 to 64)
            yearsData[i][visit.year][ month + 52 ] += 1;
            //incremenets quarter total for that quarter(65 to 68)
            yearsData[i][visit.year][ quarter + 64 ] += 1;
            //increments year_total for that year
            yearsData[i][visit.year].year_total += 1;
        }
    }
}

console.log('2021', y2021);
console.log('2022', y2022);
console.log('2023', y2023);
console.log('2024', y2024);
console.log('2030', y2030);