class swapiRepository {
  constructor() {
    this.people = {};
    this.planets = {};
    this.vehicles = {};
  }

  async cleanPeopleData(data) {
    console.log('peeps');
    const peopleFetch = await fetch(data);
    const peopleArr = await peopleFetch.json();
    const people = await this.getPeopleDetails(peopleArr);
    this.people = people;
  }

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
    const homeworldFetch = await fetch(url);
    const homeworld = await homeworldFetch.json();
    return ({ homeworld: homeworld.name, homePop: homeworld.population })
  }

  async fetchSpecies(url) {
    const speciesFetch = await fetch(url);
    const species = speciesFetch.json();
    return ({ species: species.name })
  }

  async cleanPlanetData(url) {
    console.log('planets');
    const planetFetch = await fetch(url);
    const planetArr = await planetFetch.json();
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
    const residents = residentsArr.map( async (residentUrl) => {
      const residentFetch = await fetch(residentUrl);
      const resident = await residentFetch.json();
      return ({ resident: resident.name })
    })
    return Promise.all(residents)
  } 

  async cleanVehicleData(vehicleUrl) {
    console.log('vehicles');
    const vehiclesFetch = await fetch(vehicleUrl);
    const vehiclesArr = await vehiclesFetch.json();
    const vehicles = await this.getVehicleDetails(vehiclesArr.results);
    this.vehicles = vehicles;
  }

  getVehicleDetails(vehiclesArr) {
    const vehicles = vehiclesArr.map( async (vehicle) => {
      return({
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers
      })
    })
    return Promise.all(vehicles)
  }
}

export default swapiRepository;