function countDown(number) {
    //the base case:
    if (number <= 0) {
        console.log('All done!');
        return;
    }
    console.log(number);
    number--;
    countDown(number);
}

countDown(10);