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

  async cleanData(type) {
    const rootUrl = `https://swapi.co/api/${type}/?page=1`;
    const fetchedData = await this.fetchData(rootUrl);
    const cleanData = await this.getDetails(fetchedData.results, type);
    this[type] = cleanData;
  }

  getDetails(results, type) {
    const cleanData = results.map( async(result) => {
      const info = async() => {
        if(type === 'people') {
          return await this.getPeopleInfo(result)
        } else if( type === 'planets' ) {
          return await this.getPlanetInfo(result)
        } else {
          return await this.getVehicleInfo(result)
        }
      }
      return {
        name: result.name,
        info: await info()
      }
    })
    return Promise.all(cleanData)
  }

  async getPeopleInfo(person) {
    const homeworld = await this.fetchData(person.homeworld);
    const species = await this.fetchData(person.species);
    return {
      homeworld: homeworld.name,
      homePop: homeworld.population,
      species: species.name
    }
  }

  async getPlanetInfo(planet) {
    const residents = await this.fetchResidents(planet.residents);
    return {
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residents
    };
  }

  async getVehicleInfo(vehicle) {
    return {
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers
    }
  }

  fetchResidents(residentsArr) {
    const residents = residentsArr.map( async (url) => {
      const resident = await this.fetchData(url);
      return ({ resident: resident.name })
    })
    return Promise.all(residents)
  } 






  //cleanPeopleData
  //get mock data and it's going to return a cleanPeopleData
  //pass data from window fetch to peopleDetails
  //make fetchData equal to whatever mockData being used

  async cleanPeopleData(url) {
    const peopleObj = await this.fetchData(url);
    const people = await this.getPeopleDetails(peopleObj);
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