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

  beforeEach( () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockData)
    }))
  })

  it('should exist', async () => {
    const something = await swapiRepo.fetchData("url")
    expect(swapiRepo.fetchData("url")).toEqual(mockData)
  })
})


// swapiRepo = new swapiRepository();
//     window.fetch = jest.fn().mockImplementation(() => {
//       return (
//         new Promise(resolve => {
//           resolve(json: () => {
//             return (
//               new Promise(resolve => {
//                 resolve(fetchArray: mockData)
//                 })
//               )
//           })
//         })
//       )
//     })





// window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       json: () => Promise.resolve({
//         groceries: mockGroceries,
//       })
//     }))