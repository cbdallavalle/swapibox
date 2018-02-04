class swapiRepository {
  constructor() {
    this.people = [];
    this.planets = [];
    this.vehicles = [];
    this.filmCrawl = {};
  }

  async fetchData(url) {
    try {
      const initialFetch = await fetch(url);

      if (initialFetch.status <= 200) {
        return await initialFetch.json();
      } else {
        throw new Error('Bad response stats')
      }
    } catch (error) {
      throw new Error('cannot load data at this time :(') ; 
    }
  }

  async getFilmCrawl(number) {
    const rootUrl = `https://swapi.co/api/films/${number}/`
    const fetchedFilm = await this.fetchData(rootUrl);
    this.filmCrawl = {
      title:fetchedFilm.title,
      date: fetchedFilm.release_date,
      crawl: fetchedFilm.opening_crawl
    };
  }

  async cleanData(type) {
    const rootUrl = `https://swapi.co/api/${type}/?page=1`;
    const fetchedData = await this.fetchData(rootUrl);
    const cleanData = typeof fetchedData === 'string' ? [fetchedData]
      : await this.getDetails(fetchedData.results, type);
    this[type] = cleanData;
  }

  getDetails(results, type) {
    const cleanData = results.map( async(result) => {
      const info = async() => {
        if(type === 'people') {
          const homeworld = await this.fetchData(result.homeworld);
          const species = await this.fetchData(result.species);
          return await this.getPeopleInfo(homeworld, species)
        } else if( type === 'planets' ) {
          const residents = await this.fetchResidents(result.residents);
          return await this.getPlanetInfo(result, residents)
        } else {
          return await this.getVehicleInfo(result)
        }
      }

      return this.buildDetails( result.name, await info())
    })
    return Promise.all(cleanData)
  }

  buildDetails(name, info) {
    return {
      name: name,  
      info: info
    }
  }    

  getPeopleInfo(homeworld, species) {
    return {
      homeworld: homeworld.name,
      homePop: homeworld.population,
      species: species.name
    }
  }

  getPlanetInfo(planet, residents) {
    return {
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residents.join(', ')
    };
  }

  getVehicleInfo(vehicle) {
    return {
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers
    }
  }

  fetchResidents(residentsArr) {
    const residents = residentsArr.map( async (url) => {
      const resident = await this.fetchData(url);
      return (resident.name)
    })
    return Promise.all(residents)
  } 
}

export default swapiRepository;