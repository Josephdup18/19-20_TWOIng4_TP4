var express = require('express');
var router = express.Router();
const axios = require("axios");
var _ = require('lodash');
//npmvar find = require('lodash.find');



API_KEY = "bb489c9b";
API_URL = "http://www.omdbapi.com/";

let movies = [
  {
    id: 1,
    movie: "La guerre des etoiles",
    yearOfRelease: 99,
    duration: 180,// en minutes,
    actors: ["Yoda","Chewbaka"],
    poster:  "huhu", //lien vers une image d'affiche,
    boxOffice: 14000, // en USD$,
    rottenTomatoesScore: 9
   },


    {
    id: 2,
    movie: "La guerre des etoiles",
    yearOfRelease: 1999,
    duration: 180,// en minutes,
    actors: ["Yoda","Chewbaka"],
    poster: "huhuhu", //lien vers une image d'affiche,
    boxOffice: 30000, // en USD$,
    rottenTomatoesScore: 8
   },

   {
    id: 3,
    movie: "La guerre des etoiles",
    yearOfRelease: "99",
    duration: '180',// en minutes,
    actors: ["Yoda","Chewbaka"],
    poster:  "joji",// lien vers une image d'affiche,
    boxOffice: 311111 ,// en USD$,
    rottenTomatoesScore: 9
   },
  
  
  ]


///* GET movies listing. */
 
router.get('/', function(req, res, next) {
	res.status(200).json({ movies });
  });


///* GET movies by id */

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const selec = _.find(ListMovies, ["id", id]);
  console.log("title", id, selec);
  res.status(200).json({
    selec
  });
});

///* PUT movie */

router.put("/", (req, res) => {
  const {title} = req.body;
  axios.get(`${API_URL}?t=${title}&apikey=${API_KEY}`).then(({data}) => {
    const id = _.uniqueId();
    ListMovies.push(list)
  });
  res.status(200).json ({
  });
});

///* DELETE movie */
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  _.remove(ListMovies, ["id", id]);
  res.status(200).json({
  })
})

///* POST movie */
router.post('/:id', (req, res) => {
  const{id} = req.params;
  const{movie} = req.body;
  const update = _.find(ListMovies, ["id", id]);
  update.movie = movie;
  res.status(200).json({
  })
})


//   DELETE
router.delete('/:id', function(req, res, next) {
  res.send('supprimé');
});





module.exports = router;