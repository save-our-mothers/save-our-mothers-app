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
];


// updates each y20xx object with week, month, quarter, and year totals
// loops over each visit object
// will need to be run twice for response for appointments and response for encounters
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


let visitsByYear = yearsData;


//writing test response.js query to insert into

// queryText = `
//     INSERT INTO patient_visits 
//         (year, 
//         year_total,
//         week_1,
//         week_2,
//         week_3,
//         week_4,
//         week_5,
//         week_6,
//         week_7,
//         week_8,
//         week_9,
//         week_10,
//         week_11,
//         week_12,
//         week_13,
//         week_14,
//         week_15,
//         week_16,
//         week_17,
//         week_18,
//         week_19,
//         week_20,
//         week_21,
//         week_22,
//         week_23,
//         week_24,
//         week_25,
//         week_26,
//         week_27,
//         week_28,
//         week_29,
//         week_30,
//         week_31,
//         week_32,
//         week_33,
//         week_35,
//         week_36,
//         week_37,
//         week_38,
//         week_39,
//         week_40,
//         week_41,
//         week_42,
//         week_43,
//         week_44,
//         week_45,
//         week_46,
//         week_47,
//         week_48,
//         week_49,
//         week_50,
//         week_51,
//         week_52,
//         month_1,
//         month_2,
//         month_3,
//         month_4,
//         month_5,
//         month_6,
//         month_7,
//         month_8,
//         month_9,
//         month_10,
//         month_11,
//         month_12,
//         Q_1,
//         Q_2,
//         Q_3,
//         Q_4,
//         )
//     VALUES (
//         $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, $63, $64, $65, $66, $67, $68, $69, $70 
//     )
// `;

// for await (let year of yearsData) {
//     let yearObject = year;
//     let eachYear = Object.keys(yearObject)[0];
//     let addYear = yearObject[eachYear];
//     // console.log(addYear['1']);
//     // console.log(addYear.year_total);
//     db.query(queryText, [
//         addYear.year,
//         addYear.year_total,
//         addYear['1'],
//         addYear['2'],
//         addYear['3'],
//         addYear['4'],
//         addYear['5'],
//         addYear['6'],
//         addYear['7'],
//         addYear['8'],
//         addYear['9'],
//         addYear['10'],
//         addYear['11'],
//         addYear['12'],
//         addYear['13'],
//         addYear['14'],
//         addYear['15'],
//         addYear['16'],
//         addYear['17'],
//         addYear['18'],
//         addYear['19'],
//         addYear['20'],
//         addYear['21'],
//         addYear['22'],
//         addYear['23'],
//         addYear['24'],
//         addYear['25'],
//         addYear['26'],
//         addYear['27'],
//         addYear['28'],
//         addYear['29'],
//         addYear['30'],
//         addYear['31'],
//         addYear['32'],
//         addYear['33'],
//         addYear['34'],
//         addYear['35'],
//         addYear['36'],
//         addYear['37'],
//         addYear['38'],
//         addYear['39'],
//         addYear['40'],
//         addYear['41'],
//         addYear['42'],
//         addYear['43'],
//         addYear['44'],
//         addYear['45'],
//         addYear['46'],
//         addYear['47'],
//         addYear['48'],
//         addYear['49'],
//         addYear['50'],
//         addYear['51'],
//         addYear['52'],
//         addYear['53'],
//         addYear['54'],
//         addYear['55'],
//         addYear['56'],
//         addYear['57'],
//         addYear['58'],
//         addYear['59'],
//         addYear['60'],
//         addYear['61'],
//         addYear['62'],
//         addYear['63'],
//         addYear['64'],
//         addYear['65'],
//         addYear['66'],
//         addYear['67'],
//         addYear['68'],
//         addYear['69'],
//         addYear['70']
//     ])
// }

