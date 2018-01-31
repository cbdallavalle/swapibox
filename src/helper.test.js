import swapiRepository from './helper.test.js';

describe('cleanData', () => {

  it('should make an api call based on the data passed in', () => {
    const swapiInfo = new swapiRepository();
  })
})


// describe('DistrictRepository iteration 0', () =>  {
//   const district = new DistrictRepository(kinderData);

//   test('district has data in an object', () => {
//     // remember that an array is also just an object.
//     expect(typeof district.data).toBe('object');
//   });

//   test('data coming in has no duplicates', () => {
//     // uncomment out the tests that best fits your model
//     // expect(district.data.length).toBe(181);
//     expect(Object.keys(district.data).length).toBe(181);
//   });

// });