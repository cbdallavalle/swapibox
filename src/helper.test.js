import swapiRepository from './helper.js';
import mockData from './mockData/mockData';

describe('default', () => {
    const swapiRepo = new swapiRepository();
  
  it('should exist', () => {
    expect(swapiRepo).toBeDefined;
  })

  it('should default to an empty array for the people, planets and vehicles key', () => {
    expect(swapiRepo.people).toEqual([]);
    expect(swapiRepo.planets).toEqual([]);
    expect(swapiRepo.vehicles).toEqual([]);
  })
})

describe('fetchData', () => {
  const swapiRepo = new swapiRepository;

  it('calls fetchData with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.mockFetch)
    }))
    expect(window.fetch).not.toHaveBeenCalled()
    swapiRepo.fetchData('url')
    expect(window.fetch).toHaveBeenCalledWith('url');
  })

  it('fetchData should fetch a mock fetch data', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.mockFetch)
    }))
    const mockFetchData = await swapiRepo.fetchData("https://swapi.co/api/people/?page=1v");
    expect(mockFetchData).toEqual(mockData.mockFetch);
  })

  it('should fetch with the correct params', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.mockFetch)
    }))

    const expectParams = ["https://swapi.co/api/people/?page=1v"]

    const mockFetchData = await swapiRepo.fetchData("https://swapi.co/api/people/?page=1v");
    expect(window.fetch).toHaveBeenCalledWith(...expectParams)
  })

  it('should throw an error', () => {
    window.fetch = jest.fn().mockImplementation(() =>  Promise.resolve({
      status: 500
      })
    )

    const expected = Error('cannot load data at this time :(')
    const response = swapiRepo.fetchData("url")
    expect(response).rejects.toEqual(expected);
  })
})

describe('getFilmCrawl', () => {
  const swapiRepo = new swapiRepository;

  it('should call fetch', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.mockFetch)
    }))
    expect(window.fetch).not.toHaveBeenCalled();
    swapiRepo.getFilmCrawl(7)
    expect(window.fetch).toHaveBeenCalled();
  })
})

describe('cleanData', () => {
  let swapiRepo;

  beforeEach(() => {
    swapiRepo = new swapiRepository();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.mockFetch)
    }))
  })

  it('should call a window fetch', () => {
    swapiRepo.cleanData('people');
    expect(window.fetch).toHaveBeenCalled();
  })  
})

describe('getDetails', () => {
  let swapiRepo;

  beforeEach(() => {
    swapiRepo = new swapiRepository();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.peopleData)
    }))
  })

  it('should call fetch when people data is passed in', () => {
    swapiRepo.getDetails(mockData.rawPeopleData, 'people');
    expect(window.fetch).toHaveBeenCalled();
  })

  it('should call fetch when planet data is passed in', () => {
    swapiRepo.getDetails(mockData.rawPlanetData, 'people');
    expect(window.fetch).toHaveBeenCalled();
  })

  it('should not call fetch when vehicle data is passed in', () => {
    swapiRepo.getDetails(mockData.rawVehicleData, 'vehicles');
    expect(window.fetch).not.toHaveBeenCalled();
  })
})

describe("the functions that compile objects ", () => {
  const swapiRepo = new swapiRepository();
  
  it('buildDetails should return an object with name and info as keys', () => {
    expect(swapiRepo.buildDetails('Leia', {})).toEqual({name: 'Leia', info: {}});
  })

  it('getPeopleInfo should return an object of people information', () => {
    expect(swapiRepo.getPeopleInfo({name: "Tatooine", population: "200000"}, {name: "Human"}
      )).toEqual({ homeworld: "Tatooine", species: "Human", homePop: "200000" })
  })

  it('getPlanetInfo should return an object of planet info', () => {
    expect(swapiRepo.getPlanetInfo( mockData.rawPlanetData[0], 
      [ "Leia Organa", "Bail Prestor Organa", "Raymus Antilles" ]
    )).toEqual(mockData.planetData.info)
  })

  it('getVehicleInfo should return an object of vehicle info', () => {
    expect(swapiRepo.getVehicleInfo(mockData.rawVehicleData[0]
      )).toEqual(mockData.vehicleData.info)
  })
})

describe("fetchResidents", () => {
  it('should call fetch', () => {
    let swapiRepo = new swapiRepository();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.rawPlanetData)
    }))

    swapiRepo.fetchResidents(mockData.rawPlanetData[0].residents);
    expect(window.fetch).toHaveBeenCalled();
  })
})
