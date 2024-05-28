const countAnimalByPersonName = (person) => ({
    ...person,
    name: `${person.name} [${person.animals.length}]`
});

const countPeopleInCountryName = (countries) => {
    return countries.map(country => {
        const people = country.people || [];
        return {
            name: `${country.name} [${people.length}]`,
            people: people.map(person => countAnimalByPersonName(person))
        };
    });
};

const count = (args, data) => {
    const countArg = args.find(arg => arg.action === "--count");
    return countArg ? countPeopleInCountryName(data, countArg.value) : data;
};

module.exports = count;



