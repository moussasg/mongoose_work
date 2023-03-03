
/* déclaré le schéma
const personSchema = new mongoose.Schema({ // il faut définir quoi a ajouté dans schema
  /// pour que je peut introduire des avaluers dans model aprés
  name: String,
  age: Number,
  favoriteFoods: [String],
  email:String
}); difinissé le modéles
const Person = require('C:/Users/mouss/Desktop/mongose_work'); // emplacement de fchier
const newPerson = new Person({ // difinissé le modéles = les valeurs de key
  name: 'John Doe',
  age: 30,
  detaill: 'test',
  favoriteFoods: ['Pizza', 'Burger'],
});
newPerson.save()
  .then(() => console.log('Person saved successfully'))
  .catch((err) => console.error('Error saving person:', err));
  */
// Définir un schéma pour la collection de peopleSchema
const mongoose = require('mongoose');
require('dotenv').config();
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, socketTimeoutMS: 30000 });
const peopleSchema = new mongoose.Schema({ // il faut déclaré le schéma malgrés que data est hébérgé sur atlas
  _id: { type: mongoose.Schema.Types.ObjectId, required: true }, 
  name: String,
  age: Number,
  favoriteFoods: Array,
});
const Person = mongoose.model('Person', peopleSchema); // schéma a intérieur de model
Person.findById('640106c8ec0a4f430c66fa35') // findById
  .then(person => {
    console.log('Person found:', person);
  })
  .catch(err => {
    console.error('Error finding person:', err);
  });
