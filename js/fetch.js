function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://rickandmortyapi.com/api';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(personaje) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = personaje.picture.medium;
    span.innerHTML = `${personaje.name.first} ${personaje.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
//arrow function
