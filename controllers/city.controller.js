let cities = [];

let nextId = 1;

// Create a new city
export const createCity = (req, res) => {
  const { name, country, population } = req.body;

  if (!name || !country || !population) {
    return res
      .status(400)
      .json({ message: "Name, country, and population are required." });
  }

  const newCity = { id: nextId++, name, country, population };
  cities.push(newCity);
  res.status(201).json(newCity);
};

// Get all cities
export const getAllCities = (req, res) => {
  res.status(200).json(cities);
};
// Get a city by ID
export const getCityById = (req, res) => {
  const cityId = parseInt(req.params.id);

  const city = cities.find((c) => c.id === cityId);
  if (!city) {
    return res.status(404).json({ message: "City not found." });
  }
  res.status(200).json(city);
};
// Update a city by ID
export const updateCityById = (req, res) => {
  const cityId = parseInt(req.params.id);

  const { name, country, population } = req.body;

  const cityIndex = cities.findIndex((c) => c.id === cityId);

  if (cityIndex === -1) {
    return res.status(404).json({ message: "City not found." });
  }

  if (!name || !country || !population) {
    return res
      .status(400)
      .json({ message: "Name, country, and population are required." });
  }

  cities[cityIndex] = { id: cityId, name, country, population };
  res.status(200).json(cities[cityIndex]);
};
// Delete a city by ID
export const deleteCityById = (req, res) => {
  const cityId = parseInt(req.params.id);

  const cityIndex = cities.findIndex((c) => c.id === cityId);
  if (cityIndex === -1) {
    return res.status(404).json({ message: "City not found." });
  }

  cities.splice(cityIndex, 1);
  res.status(200).json({ message: "City deleted successfully." });
};
