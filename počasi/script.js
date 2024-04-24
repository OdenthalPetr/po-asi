const citiesWeather = [
  { name: "Praha", temperature: 15, description: "slunečno" },
  { name: "Brno", temperature: 17, description: "oblačno" },
  { name: "Ostrava", temperature: 12, description: "deštivo" },
  { name: "Kyjov", temperature: 15, description: "polojasno"},
  { name: "Benešov", temperature: 13, description: "slunečno"},
  { name: "Žatec", temperature:8, description: "polojasno"},
  { name: "Hradec Králové", temperature:9, description: "zataženo"},
  { name: "Podbořany", temperature:10, description: "jasno"},
  { name: "Chomutov", temperature:10, description: "déšť"},
  { name: "Most", temperature:10, description: "déšť"},
  { name: "Kadaň", temperature:11, description: "slunečno"},
  { name: "Šumava", temperature:5, description: "zataženo, občastný déšť"},
  { name: "Plzeň", temperature:14, description: "polojasno"},
  { name: "Liberec", temperature:16, description: "jasno"},
  { name: "Česká Lípa", temperature:12, description: "jasno, občas déšť"},
  { name: "Klášterec nad Ohří", temperature:12, description: "jasno, občas polojasno bez srážek"},
  { name: "Děčín", temperature:11, description: " déšť ojediněle jasno"},
  { name: "Jirkov", temperature:14, description: "slunečno"},
  { name: "Bzenec", temperature:17, description: "oblačno"},
  { name: "Plasy", temperature:10, description: "déšť"},
  { name: "Prostějov", temperature:16, description: "slunečno"},
  { name: "Brody", temperature:12, description: "zataženo občastný déšť"}, 
  { name: "Sázava", temperature: 10-8, description: "oblačno až polojasno "}

 
];

function initializeCitySelect() {
  const citySelect = document.getElementById("city-select");
  citiesWeather.forEach(city => {
      const option = document.createElement("option");
      option.text = city.name;
      citySelect.add(option);
  });
}


function displayWeather() {
  const selectedCity = document.getElementById("city-select").value;
  const weatherInfo = document.getElementById("weather-info");
  const city = citiesWeather.find(city => city.name === selectedCity);
  if (city) {
      weatherInfo.innerHTML = `<p>Počasí v ${city.name}: ${city.description}, teplota: ${city.temperature}°C</p>`;
  } else {
      weatherInfo.innerHTML = "<p>Vyberte prosím město.</p>";
  }
}

function updateWeather() {
  setTimeout(() => {
      alert("Data o počasí byla aktualizována.");
  }, 1000);
}

window.onload = function() {
  initializeCitySelect();
  const updateBtn = document.getElementById("update-btn");
  updateBtn.addEventListener("click", updateWeather);
  const citySelect = document.getElementById("city-select");
  citySelect.addEventListener("change", displayWeather);
};




   
