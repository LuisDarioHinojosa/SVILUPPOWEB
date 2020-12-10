{
    // Minimum arguments
    let date = new Date(2020,11);
    console.log(date);
    // The constructor will add and round the number of months you pass
    let d2 = new Date(2020,2323);
    console.log(d2);

    // you can pass the miliseconds
    let d3 = new Date(23432324324);
    console.log(d3);
    // Unix Epoch

    // now
    let d4 = new Date(Date.now());
    console.log(d4);

    // unix timespamp (miliseconds since the unix epoch)
    let time = Date.now();
    // measuring exectution time in javascript
    let x = 0;
    for(let i = 0; i < 1000000; i++){
        x++;
    }
    let end = Date.now();
    let total = end-time;
    console.log("Time: " + total);

    // date operations (number of dates)
    let birth = new Date(2000,9,15);
    let today = Date.now();

    // miliseconds per day
    let convFactor = 1000*60*60*24;
    let daysAlive = (today-birth)/convFactor;
    console.log("Days Alive: " + daysAlive);

    // Create a date with diferent local time

}