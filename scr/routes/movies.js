const {Router} =require('express');
const router=Router();
const isa  =require('underscore');

const movies = require('../sample.json');
console.log(movies);

router.get('/',(req , res )=>{
    //res.send('movies');
    res.json(movies);
});
router.post('/',(req , res )=>{
    //res.send('movies');
    const {title ,director ,year, rating}=req.body;
    if(title&& director&&year&&rating)
    {
        const id =movies.length+1;
        const newMovie={...req.body,id};
        
        movies.push(newMovie);
        res.json(movies);
    }
    else
    {
        res.status(500).json({"error 500":"error quinienon "});
    }
    
});
router.put('/:id',(req,res)=>{
const{id}=req.params;
const {title ,director ,year, rating}=req.body;
if(title&& director&&year&&rating)
{
    isa.each(movies,(movie,i)=>
    {
        if (movie.id==id)
        {
            movie.title=title;
            movie.director=director;
            movie.year=year;
            movie.rating=rating;
        }
        
    });
    res.json(movies);
    }else
    {
        res.status(500).json({"error":"ya valio"});
    } 

});

router.delete('/:id',(req, res)=>{
    const {id}=req.params;
    isa.each(movies,(movie,i)=>{
if(movie.id==id)
{
    movies.splice(i,1);
}   
});
//console.log(req.params);
res.send(movies);
});
module.exports=router;