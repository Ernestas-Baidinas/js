function calulatePercentage(part, total) {
    if (total === 0) {
        console.log("bendra verte negali buti lygu nuliui");
        return;
    }
    let percentage = (part / total) * 100;
    console.log(part, total, "procentas:", percentage.toFixed(2) + "%")
}

calulatePercentage(1, 2)