const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const notes = require('../../db/db.json');
const generateUniqueId = require('generate-unique-id');
const fs = require('fs');
const path = require('path');

const id = generateUniqueId({
    length: 10,
    useLetters: false
});

router.get('/notes', (req, res) =>{
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) =>{
    let results = notes;
    //set id based on next index

    let newNote = {title, text, id};
    results.push(newNote);

    //add the note to the db.json file
    const write = fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(results)
    );
});


module.exports = router;


















module.exports = router;