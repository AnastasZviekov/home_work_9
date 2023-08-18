const products = [['apple', 10], ['banana', 8], ['mango', 20], ['grape', 18]]


    function getPrice(products, seasonFunc) {
        let copiedPrice = JSON.parse(JSON.stringify(products));
        let totalPrice = 0;
        let res=0;

        for (let i = 0; i < copiedPrice.length; i++) {
            let currentPrice = copiedPrice[i][1];
             if (typeof seasonFunc === `function`) {
                res= seasonFunc(currentPrice);}
            else {
                  res=currentPrice;}
                  totalPrice+=res;
    }
    return totalPrice;
}


function summerValue(value){
    return value*0.8;
}

function winterValue(value){
    return value*2;
}

let totalSummerPrice = getPrice(products, summerValue);
let totalWinterPrice = getPrice(products, winterValue);
let totalProdPrice = getPrice(products);

console.log(totalSummerPrice);
console.log(totalWinterPrice);
console.log(totalProdPrice);

document.write(`<tr><td>Summer Price: ${totalSummerPrice}</td> <br>
<td>Winter Price ${totalWinterPrice}</td> <br>
<td>Usual Price ${totalProdPrice}</td></tr> <br>
`)