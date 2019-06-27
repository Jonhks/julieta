const button1 = document.getElementById('button1')
const input1 = document.getElementById('input1')

const name = 'Jonh'
const persona = {
  name: 'jonh',
  edad: 25,
  cabello: null,
  altura: 1.85,
  gustos: {
    comida: 'enchiladas',
    bebida: 'mineral'
  },
}


// const result = window.prueba.perrito(persona)
// console.log(result)

const arr = ['a', 'b', 'c']
const arrV = [];
for (let i = 0; i < arr.length; i++) {
  arrV.push(i)
  console.log(arrV);
}

button1.addEventListener('click', () => {
  let name = input1.value
  window.prueba.perrito(name)
})






// const palabra = 'Laboratoria'

// for(let i = 0; i < palabra ; i++ ){
//   console.log(palabra[i])
// }


// const square = num => num * num;

// console.log(square(3,3))


// const sum = (a, b) => a + b;



let movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  plot: 'Marty McFly, a 17-year-old high school student, ' +
    'is accidentally sent 30 years into the past in a time-traveling DeLorean ' +
    'invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};


const favoriteMovies = [
  'The Big Fish',
  'The Lord of the Rings',
  'The Empire Strikes Back',
  'The Artist',
  'The Godfather',
  'Back to the Future',
];


// git init 
// git remote add origin miurl
// git remote add upstream master-url
// git status
// git add ./ git add -A / git add README.md
// git commit -m "comentario"
// git push origin dev
// git pull origin master
// git pull upstream master
// git fetch origi
// git merge origin/master
// comit


git log 