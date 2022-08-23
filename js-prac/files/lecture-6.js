const axios = require("axios").default;

const url = "https://jsonplaceholder.typicode.com/posts";

// this async function returns an object containing some object element
async function getData() {
  // data gets an array of objects from the  url
  const { data } = await axios.get(url);

  //data.splice gets first 10 elements from the data array and the reduce method returns an object which contains every element from the data of 10 elements
  const result = data.splice(0, 10).reduce((acc, curr) => {
    //destructuring some current object properties
    const { userId, title } = curr;
    acc[curr.id] = {
      userId,

      title,
    };
    return acc;
  }, {});
  return result;
}

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

const names = [
  "shazid",
  "abid",
  "borhan",
  "chanchal",
  "dhanosh",
  "emon",
  "faisal",
  "ghosh",
  "hasash",
  "dhonu",
  "shamchul",
  "phachol",
  "choudhuri",
  "gonodhu",
  "kakon",
  "tonu",
  "ayon",
  "jhon",
];

const filteredNames = names.reduce((acc, curr) => {
  const firstLetter = curr[0].toUpperCase();

  if (firstLetter in acc) {
    acc[firstLetter].push(curr);
  } else {
    acc[firstLetter] = [curr];
  }
  return acc;
}, {});

console.log(Object.keys(filteredNames).sort());

Object.keys(filteredNames)
  .sort()
  .forEach((group) => {
    // console.log(group);
    // filteredNames[group].forEach((name) => console.log(name));
    // console.log("");
  });
