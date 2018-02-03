const mockData = {
  peopleData: {
    name: "Darth Vader",
    info: {
      homeworld: "Tatooine",
      species: "Human",
      homePop: "200000"  
    }

  },
  planetData: {
    name: "Alderaan", 
    info: {
      terrain: "grasslands, mountains", 
      population: "2000000000", 
      climate: "temperate", 
      residents: [
        {resident: "Leia Organa"},
        {resident: "Bail Prestor Organa"},
        {resident: "Raymus Antilles"}
      ]  
    }
  },
  vehicleData: {
    name: "Sand Crawler",
    info: {
      model: "Digger Crawler",
      passengers: "30",
      vehicleClass: "wheeled" 
    }
  },
}

export default mockData;