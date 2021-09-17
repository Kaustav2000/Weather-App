let lat = 0;
let lon = 0;
const City = async (c) => {
  let value = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${c}&limit=5&appid=23bdd6af94fd829f9dbb99553f64bdeb`
  );
  let res = await value.json();
  console.log(res);
  lat = res[0].lat;
  lon = res[0].lon;
  Weather(lat, lon);
};
const Weather = async (lat, lon) => {
  let value = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=23bdd6af94fd829f9dbb99553f64bdeb`
  );
  let res = await value.json();
  console.log(res);
};

City("Kolkata");
