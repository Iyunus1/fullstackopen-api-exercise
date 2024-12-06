const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())

let phoneBook = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/notes', (req, res) => {
  res.json(phoneBook)
})

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const entry = phoneBook.find((entry) => id === entry.id)

  if(entry){
    res.json(entry)
  } else {
    res.status(404).end()
  }

})

app.post('/api/notes', (req, res) => {
  const entry = req.body;
  console.log(entry)
  res.json(entry)
})

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id
  phoneBook = phoneBook.filter((entry) => entry.id !== id)

  res.status(204).end()
})

app.get('/info', (req, res) => {
  const currentDate = new Date();
  res.send(`Phonebook has info for ${phoneBook.length} people ${currentDate}`)
})

app.listen(PORT, () =>{
  console.log(`Server is listening on ${PORT}`)
})