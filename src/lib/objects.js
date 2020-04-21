const createPerson = (name, age) => {
  const person = { name, age };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) return true;
  return false;
};

const isOver65 = person => {
  if (person.age > 65) return true;
  return false;
};

const getAges = people => {
  const result = people.map(a => a.age);
  return result;
};

const findByName = (name, people) => {
  const result = people.find(word => word.name === name);
  return result;
};

const findHondas = cars => {
  const result = cars.filter(car => car.manufacturer === "Honda");
  return result;
};

const averageAge = people => {
  const ageArray = people.map(x => x.age);
  const result = ageArray.reduce((acc, age) => acc + age, 0) / ageArray.length;
  return result;
};

const createTalkingPerson = (name, age) => {
  const person = { name, age };
  person.introduce = name2 =>
    `Hi ${name2}, my name is ${name} and I am ${age}!`;
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
