document.querySelector("button").addEventListener("click", getTemperature);

function getTemperature() {
  let city = document.querySelector("#city").value;
  let country = document.querySelector("#country").value;

  // let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=4863f628c33e8e76c689690ca8df2bfb`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let temp = data.main.temp;
      let finalTemp = Math.round(((temp - 273.15) * 9) / 5 + 32);
      console.log(temp);

      document.querySelector("span").innerText = finalTemp;
      document.querySelector("h2").innerText = data.name;
      document.querySelector("h4").innerText = data.sys.country;

      //   complex fetch is fetch inside of a fetch so one runs before the other
    })

    .catch((err) => {
      console.log(`error ${err}`);
      alert("Mispelled city, try again.");
    });
}











// document.querySelector("#temp").innerText = data.main.temp;

// api.openweathermap.org
// }
// 4863f628c33e8e76c689690ca8df2bfb
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=4863f628c33e8e76c689690ca8df2bfb`)

// document.querySelector("img").src = data.photos[0].img_src;
//   document.querySelector("#city").innerText = city;
// kelvintemp = data['list'][0]['main']['temp']
// finaltemp = (kelvintemp - 273.15) * 9/5 + 32);
//   document.querySelector("#temp").innerText = data['list'][0]['main']['temp'];
