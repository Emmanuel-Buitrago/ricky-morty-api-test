function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const ul = document.getElementById('authors');
const url = 'https://rickandmortyapi.com/api/character';

fetch(url)
.then((resp) => resp.json())
.then(data=>mostrarData(data.results))
.catch(function(error) {
  console.log(error);
});
var mostrarData = (data)=>{
  console.log(data)
  let body=''
  for(let i = 0;i<2;i++){
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    
    console.log(data[i].location);
    body+= '<div class="card-character"><img src="'+data[i].image+'" class="img-character" alt="logo personaje"><div class="info-character"><h3>Nombre: '+data[i].name+' </h3><h3>Estatus: <span> '+data[i].status+' </span> </h3><h3>Locacion:  '+data[i].location.name+' </h3><h3>Origen: '+data[i].origin.name+'</h3><a href="#" class="cta">More</a></div></div>'
  }
  document.getElementById('characters-info').innerHTML=body
}
  debugger
  ///let authors = data.results;
  ///return authors.map(function(author) {
    ///let li = createNode('li');
    ///let img = createNode('img');
    ///let span = createNode('span');
    ///img.src = author.picture.medium;
    ///span.innerHTML = `${author.name.first} ${author.name.last}`;
    ///append(li, img);
    ///append(li, span);
    ///append(ul, li);///
  ///})


