const isEmpty = require("../../utils/isEmpty")

const filterAnimals = (animals, value) => {
    return Array.isArray(animals) ? animals.filter(animal => animal.name.includes(value)) : [];
};

const filterPeople = (people, value) => {
    return people.map(person => {
        const animals = filterAnimals(person.animals || [], value);
        return {
            name: person.name,
            animals: animals
        };
    }).filter(person => person.animals.length > 0);
};

const filterCountries = (countries, value) => {
    return countries.map(country => ({
        name: country.name,
        people: filterPeople(country.people, value)
    })).filter(country => country.people.length > 0)
}

const filter = (args, data) => {
    const filterArg = args.find(arg => arg.action === "--filter");
    const filteredData = filterArg ? filterCountries(data, filterArg.value) : data;
    
    return isEmpty(filteredData) ? filteredData : "Not Found";
};

module.exports = filter;
