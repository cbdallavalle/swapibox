const mockData = {
  peopleData: {
    name: "Darth Vader",
    info: {
      homeworld: "Tatooine",
      species: "Human",
      homePop: "200000"  
    }
  },
  rawPeopleData: [
    {
      "name": "Anakin Skywalker", 
      "height": "188", 
      "mass": "84", 
      "hair_color": "blond", 
      "skin_color": "fair", 
      "eye_color": "blue", 
      "birth_year": "41.9BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.co/api/planets/1/", 
      "films": [
          "https://swapi.co/api/films/5/", 
          "https://swapi.co/api/films/4/", 
          "https://swapi.co/api/films/6/"
      ], 
      "species": [
          "https://swapi.co/api/species/1/"
      ], 
      "vehicles": [
          "https://swapi.co/api/vehicles/44/", 
          "https://swapi.co/api/vehicles/46/"
      ], 
      "starships": [
          "https://swapi.co/api/starships/59/", 
          "https://swapi.co/api/starships/65/", 
          "https://swapi.co/api/starships/39/"
      ], 
      "created": "2014-12-10T16:20:44.310000Z", 
      "edited": "2014-12-20T21:17:50.327000Z", 
      "url": "https://swapi.co/api/people/11/"
    }
  ],
  planetData: {
    name: "Alderaan", 
    info: {
      terrain: "grasslands, mountains", 
      population: "2000000000", 
      climate: "temperate", 
      residents: "Leia Organa, Bail Prestor Organa, Raymus Antilles"
    }
  },
  rawPlanetData: [
    {
      "name": "Alderaan", 
      "rotation_period": "24", 
      "orbital_period": "364", 
      "diameter": "12500", 
      "climate": "temperate", 
      "gravity": "1 standard", 
      "terrain": "grasslands, mountains", 
      "surface_water": "40", 
      "population": "2000000000", 
      "residents": [
          "https://swapi.co/api/people/5/", 
          "https://swapi.co/api/people/68/", 
          "https://swapi.co/api/people/81/"
      ], 
      "films": [
          "https://swapi.co/api/films/6/", 
          "https://swapi.co/api/films/1/"
      ], 
      "created": "2014-12-10T11:35:48.479000Z", 
      "edited": "2014-12-20T20:58:18.420000Z", 
      "url": "https://swapi.co/api/planets/2/"
    }, 
  ],
  vehicleData: {
    name: "Sand Crawler",
    info: {
      model: "Digger Crawler",
      passengers: "30",
      vehicleClass: "wheeled" 
    }
  },
  rawVehicleData: [
    {
      "name": "Sand Crawler", 
      "model": "Digger Crawler", 
      "manufacturer": "Corellia Mining Corporation", 
      "cost_in_credits": "150000", 
      "length": "36.8", 
      "max_atmosphering_speed": "30", 
      "crew": "46", 
      "passengers": "30", 
      "cargo_capacity": "50000", 
      "consumables": "2 months", 
      "vehicle_class": "wheeled", 
      "pilots": [], 
      "films": [
          "https://swapi.co/api/films/5/", 
          "https://swapi.co/api/films/1/"
      ], 
      "created": "2014-12-10T15:36:25.724000Z", 
      "edited": "2014-12-22T18:21:15.523587Z", 
      "url": "https://swapi.co/api/vehicles/4/"
    },
  ], 
  defaultState: {
    cardsToRender:[],
    swapiRepo: {},
    targets:[],
    filmCrawl: {
      "title": "No Hope",
      "date": "1977-05-25", 
      "crawl": "It is a period of civil war.\r\nRebel scum spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first and only victory against\r\nthe great Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nscum spies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nfinest agents, Princess\r\nLeia flees home aboard her\r\nstarship, custodian of the\r\nstolen plans that can enslave her\r\npeople and restore\r\order to the galaxy...." 
    }
  },
  updateState: {
    cardsToRender: [],
    swapiRepo: {
      people: [],
      planets: [],
      vehicles: [],
      filmCrawl: {},
    },
    targets: [],
    filmCrawl: {
      "title": "No Hope",
      "date": "1977-05-25", 
      "crawl": "It is a period of civil war.\r\nRebel scum spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first and only victory against\r\nthe great Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nscum spies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nfinest agents, Princess\r\nLeia flees home aboard her\r\nstarship, custodian of the\r\nstolen plans that can enslave her\r\npeople and restore\r\order to the galaxy...." 
    }
  },
  mockFetch: {
    "count": 87, 
    "next": "https://swapi.co/api/people/?page=3", 
    "previous": "https://swapi.co/api/people/?page=1", 
    "results": [
      {
        "name": "Anakin Skywalker", 
        "height": "188", 
        "mass": "84", 
        "hair_color": "blond", 
        "skin_color": "fair", 
        "eye_color": "blue", 
        "birth_year": "41.9BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.co/api/planets/1/", 
        "films": [
            "https://swapi.co/api/films/5/", 
            "https://swapi.co/api/films/4/", 
            "https://swapi.co/api/films/6/"
        ], 
        "species": [
            "https://swapi.co/api/species/1/"
        ], 
        "vehicles": [
            "https://swapi.co/api/vehicles/44/", 
            "https://swapi.co/api/vehicles/46/"
        ], 
        "starships": [
            "https://swapi.co/api/starships/59/", 
            "https://swapi.co/api/starships/65/", 
            "https://swapi.co/api/starships/39/"
        ], 
        "created": "2014-12-10T16:20:44.310000Z", 
        "edited": "2014-12-20T21:17:50.327000Z", 
        "url": "https://swapi.co/api/people/11/"
      },
    ]
  }
}

export default mockData;