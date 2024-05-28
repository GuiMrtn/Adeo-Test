const countItems = require("../src/service/count/count");
const { data } = require("../src/mockedData/data");

describe('countValues function', () => {
    it('should count all items for one country and one of their person correctly', () => {
      const command = [{ action: '--count' }];
      const result = countItems(command, data);
  
      // Assertion for the first country and one of his person
      expect(result[0].name).toBe('Dillauti [5]');
      expect(result[0].people[0].name).toBe('Winifred Graham [6]');
  
      // Assertion for the second country and one of his person
      expect(result[1].name).toBe('Tohabdal [8]');
      expect(result[1].people[0].name).toBe('Effie Houghton [7]');
    });
  });