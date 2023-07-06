// factory function to make objects to populate with totals for each year
function yearFactory(year) {
    //Make base object with year from argument
    const yearObj = {
        year: year,
        year_total: 0,
    };

    //Add week_x 52 times with a while loop
    let weekNum = 1;
    let weekRow = 'week_' + weekNum;
    while (weekNum < 53) {
        yearObj[weekRow] = 0;
        weekNum++;
        weekRow = 'week_' + weekNum;
    };
    
    //Add month_x 12 times with a while loop
    let monthNum = 1;
    let monthRow = 'month_' + monthNum;
    while (monthNum < 13) {
        yearObj[monthRow] = 0;
        monthNum++;
        monthRow = 'month_' + monthNum;
    };

    //Add quarter_x 4 times with a while loop
    let quarterNum = 1;
    let quarterRow = 'Q_' + quarterNum;
    while (quarterNum < 5) {
        yearObj[quarterRow] = 0;
        quarterNum++;
        quarterRow = 'Q_' + quarterNum;
    }

    return yearObj;
};

const y2022 = yearFactory(2022);

console.log(y2022);