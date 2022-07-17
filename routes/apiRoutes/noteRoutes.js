const router = require('express').Router();
const generateUniqueId = require('generate-unique-id');
const fs = require('fs');
const path = require('path');



router.get('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync('db/db.json'));
    res.json(results);
});

router.post('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync('db/db.json'));
    //set id ?

    let newNote = { title: req.body.title, text: req.body.text, id: generateUniqueId()};
    results.push(newNote);

    //add the note to the db.json file
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(results)
    );
    res.json(newNote);
   
});

router.delete('/notes/:id', (req, res) =>{
    let results = JSON.parse(fs.readFileSync('db/db.json'));
    let newNoteArray = results.filter((note) => note.id !== req.params.id);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(newNoteArray)
    );
    res.json(newNoteArray);
})

module.exports = router;


















module.exports = router;