class swapiRepository {
  constructor() {
    this.people = [];
    this.planets = [];
    this.vehicles = [];
  }

  async fetchData(url) {
    const initialFetch = await fetch(url);
    const fetchedObj = await initialFetch.json();
    return fetchedObj
  }

  async cleanPeopleData(url) {
    const peopleObj = await this.fetchData(url);
    const people = await this.getPeopleDetails(peopleObj);
    this.people = people;
  }

  //cleanPeopleData
  //get mock data and it's going to return a cleanPeopleData
  //pass data from window fetch to peopleDetails
  //make fetchData equal to whatever mockData being used

  getPeopleDetails(peopleArr) {
    const people = peopleArr.results.map( async(person) => {
      const homeworldObj = await this.fetchHomeworld(person.homeworld);
      const species = await this.fetchSpecies(person.species);
      const personName = { name: person.name };
      return({ ...personName, ...homeworldObj, ...species })
    })
    return Promise.all(people);
  }

  async fetchHomeworld(url) {
    const homeworld = await this.fetchData(url);
    return ({ homeworld: homeworld.name, homePop: homeworld.population })
  }

  async fetchSpecies(url) {
    const species = await this.fetchData(url);
    return ({ species: species.name })
  }

  async cleanPlanetData(url) {
    const planetArr = await this.fetchData(url);
    const planets = await this.getPlanetDetails(planetArr);
    this.planets = planets;
  }

  getPlanetDetails(planetArr) {
    const planets = planetArr.results.map( async (planet) => {
      const residents = await this.fetchResidents(planet.residents);
      const planetObj = {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate
      };
      return({ ...planetObj, ...{ residents } })
    })
    return Promise.all(planets)
  }

  fetchResidents(residentsArr) {
    const residents = residentsArr.map( async (url) => {
      const resident = await this.fetchData(url);
      return ({ resident: resident.name })
    })
    return Promise.all(residents)
  } 

  async cleanVehicleData(url) {
    const vehiclesArr = await this.fetchData(url);
    const vehicles = await this.getVehicleDetails(vehiclesArr.results);
    this.vehicles = vehicles;
  }

  getVehicleDetails(vehiclesArr) {
    const vehicles = vehiclesArr.map( async (vehicle) => {
      return({
        name: vehicle.name,
        model: vehicle.model,
        vehicleClass: vehicle.vehicle_class,
        passengers: vehicle.passengers
      })
    })
    return Promise.all(vehicles)
  }
}

export default swapiRepository;