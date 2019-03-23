module.exports = function makeExchange(currency) {
    let coins = {};
    let arr = [[50, 25, 10, 5, 1], ['H', 'Q', 'D', 'N', 'P']];
    let i = 0;
    if (currency >= 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        coins.H = 0;
        coins.Q = 0;
        coins.D = 0;
        coins.N = 0;
        coins.P = 0;
        while (currency > 0) {
            chek();
            currency = currency - arr[0][i];
            coins[arr[1][i]]++;
        }
        for (let j = 0; j < 5; j++) {
            if (coins[arr[1][j]] === 0) {
                delete coins[arr[1][j]];
            }
        }
    }

    function chek() {
        if (currency < arr[0][i]) {
            i++;
            chek();
        }

    }

    return coins;
};
