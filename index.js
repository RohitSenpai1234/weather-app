const searchBox = document.getElementById("searchinp");
const searchBtn = document.querySelector(".searchbutton");
async function checkeweather(x) {
    try {
        const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${x}&days=3`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b4b637e394msh2bede7da043115cp1ba35fjsn65a0b5fc8101',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result, 3);
        console.log("name")


        document.querySelector(".city").innerHTML = result.location.name;
        document.querySelector(".temp").innerHTML = result.current.temp_c;
        document.querySelector(".humidity").innerHTML = result.current.humidity;
        document.querySelector(".wind").innerHTML = result.current.wind_kph;

    } catch (error) {
        console.error(error);
    }
};
// checkeweather("London")
searchBtn.addEventListener("click", () => {
    // console.log(typeof searchBox.value);
    checkeweather(searchBox.value)
});









