const writeJson = require("../../util/json").writeJson;

let cities = require("./cities.json");

const getCities = () => {
  return cities;
};
const getCity = (index) => {
  return cities[index];
};
const getCityByName = (cityName) => {
  return cities.find((city) => {
    if (cityName === city.city) return city;
  });
};
const getCityByCountry = (countryName) => {
  return cities.find((city) => {
    if (countryName === city.country) return city;
  });
};
const addCity = (city) => {
  cities.push(city);
  console.log(cities);
  writeJson("modules/components/cities/cities.json", cities);
};
const editCity = (city, index) => {
  cities[index] = city;
  writeJson("modules/components/cities/cities.json", cities);
};
const removeCity = (index) => {
  cities.splice(index, 1);
  writeJson("modules/components/cities/cities.json", cities);
};

exports.cities = cities;
exports.getCities = getCities;
exports.getCity = getCity;
exports.getCityByName = getCityByName;
exports.getCityByCountry = getCityByCountry;
exports.addCity = addCity;
exports.editCity = editCity;
exports.removeCity = removeCity;
