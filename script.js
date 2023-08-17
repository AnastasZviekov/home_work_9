const products = [['apple', 10], ['banana', 8], ['mango', 20], ['grape', 18]]

function summerValue(value) {
    return value * 0.8;
}

function winterValue(value) {
    return value * 2;
}

function getPrice(products, seasonFunc) {
    let res = 0;
    let totalPrice = 0;

    let copiedPrice = [...products];
    for (let i = 0; i < copiedPrice.length; i++) {
        let currentProduct = copiedPrice[i];

        for (let j = 0; j < currentProduct.length; j++) {
            let currentPrice = currentProduct[j];
            if (typeof currentPrice === `number`) {
                if (typeof seasonFunc === `function`) {
                    res = seasonFunc(currentPrice);
                    totalPrice += res;
                }
                else {
                    totalPrice += currentPrice;
                }
            }
        }
    }
    return totalPrice;

}

let totalSummerPrice = getPrice(products, summerValue);
let totalWinterPrice = getPrice(products, winterValue);
let totalProdPrice = getPrice(products);

console.log(totalSummerPrice);
console.log(totalWinterPrice);
console.log(totalProdPrice);

document.write(`<tr><td>${totalSummerPrice}</td>
<td>${totalWinterPrice}</td>
<td>${totalProdPrice}</td></tr>
`)