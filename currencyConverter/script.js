const cur1 = document.querySelector(".cur-1"),
    cur2 = document.querySelector(".cur-2"),
    cur1Input = document.querySelector(".cur-1-input"),
    cur2Input = document.querySelector(".cur-2-input"),
    baseRate = document.querySelector(".base"),
    switchCur = document.querySelector(".switch-cur"),
    countries = [
        {
            name: "EUR",
            flagUrl: "https://www.worldometers.info/img/flags/as-flag.gif"
        },
        {
            name: "GBP",
            flagUrl: "https://www.worldometers.info/img/flags/uk-flag.gif"
        },
        {
            name: "USD",
            flagUrl: "https://www.worldometers.info/img/flags/us-flag.gif"
        }
    ],
    apiUrl = "https://v6.exchangerate-api.com/v6/",
    key = "1b7a6ec46d083641f6fc6d93";

// Get Exchange Rate
async function getExchangeRate() {
    const cur1Value = cur1.value,
        cur2Value = cur2.value;

    const response = await fetch(`${apiUrl}${key}/latest/${cur1Value}`),
        data = await response.json(),
        rate = data.conversion_rates[cur2Value];

    baseRate.textContent = `1${cur1Value} = ${rate.toFixed(2)} ${cur2Value}`;

    cur2Input.value = (cur1Input.value * rate).toFixed(2);
}

getExchangeRate();

//Add event listeners
cur1.addEventListener("change", () => {
    getExchangeRate();
    getFlag();
    
});

cur2.addEventListener("change", () => {
    getExchangeRate();
    getFlag();
});

cur1Input.addEventListener("input", getExchangeRate);
cur2Input.addEventListener("input", getExchangeRate);

switchCur.addEventListener("click", () => {
    const cur1Val = cur1.value;
    cur1.value = cur2.value;
    cur2.value = cur1Val;
    switchCur.classList.toggle("rotate");
    getExchangeRate();
    getFlag();
});

// Get flag
function getFlag() {
    countries.forEach((country) => {
        if(cur1.value === country.name) {
            imgSrc = document.querySelector(".from img");
            imgSrc.setAttribute("src", country.flagUrl);
        };
        if(cur2.value === country.name) {
            imgSrc = document.querySelector(".to img");
            imgSrc.setAttribute("src", country.flagUrl);
        };
    });
}
