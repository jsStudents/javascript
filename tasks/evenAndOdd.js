let naturalNumber = {"even": [2, 4, 6, 8, 10],
    "odd": [1, 3, 5, 7, 9]
}

function sumTheArrays(naturalNumbers) {
    let firstArr = naturalNumbers.even;
    let secondArr = naturalNumbers.odd;
    return firstArr.map((num, index) => num + secondArr[index]);
}
