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

let y2021 = yearFactory(2021);
let y2022 = yearFactory(2022);
let y2023 = yearFactory(2023);

const yearsData = [
    {2021: y2021},
    {2022: y2022},
    {2023: y2023},
];

//updates each y20xx object with week totals
//loops over each visit object
for (let visit of visitArray) {
    //loops over array of y20xx objects
    let week = visit.week_of_year;
    for (let i = 0; i < yearsData.length; i++) {
        if (visit.year == Object.keys(yearsData[i])[0]) {
            yearsData[i][visit.year][ week ] += 1;
        }
    }
}

//updates each y20xx object with month totals
//loops over each visit object
for (let visit of visitArray) {
    //loops over array of y20xx objects
    let month = visit.month_of_year;
    for (let i = 0; i < yearsData.length; i++) {
        if (visit.year == Object.keys(yearsData[i])[0]) {
            yearsData[i][visit.year][ month + 52 ] += 1;
        }
    }
}

//updates each y20xx object with quarter totals
// loops over each visit object
for (let visit of visitArray) {
    //loops over array of y20xx objects
    let quarter = visit.quarter;
    for (let i = 0; i < yearsData.length; i++) {
        if (visit.year == Object.keys(yearsData[i])[0]) {
            yearsData[i][visit.year][ quarter + 64 ] += 1;
        }
    }
}

// updates each y20xx object with year totals
// loops over each visit object
for (let visit of visitArray) {
    //loops over array of y20xx objects
    for (let i = 0; i < yearsData.length; i++) {
        //if the year matches b/w vist and object of records for that year, increments year_total for that year
        if (visit.year == Object.keys(yearsData[i])[0]) {
            yearsData[i][visit.year].year_total += 1;
        }
    }
}

console.log('2021', y2021);
console.log('2022', y2022);
console.log('2023', y2023);