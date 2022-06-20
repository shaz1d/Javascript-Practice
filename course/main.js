const btn = document.getElementById("btn");
btn.addEventListener("click", handleClick);

const apiKey = "85c37b865e2a2651d54bc1d2c03af111";

async function handleClick() {
  const cityName = document.getElementById("text").value;
  if (!cityName) {
    alert("please enter a value");
    return;
  }

  const endpoint = new URL(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}`
  );
  endpoint.searchParams.set("appid", apiKey);

  const response = await fetch(endpoint);
  if (response.status === 404) {
    alert("City not found");
    return;
  }

  const data = await response.json();
  const {
    coord: { lon, lat },
    weather,
    main: { temp },
    sys: { country },
    name,
  } = data;

  console.log(temp);
}
