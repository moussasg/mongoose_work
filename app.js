const personSchema = new mongoose.Schema({ // il faut définir quoi a ajouté dans schema
  /// pour que je peut introduire des avaluers dans model aprés
  name: String,
  age: Number,
  favoriteFoods: [String],
  email:String ,
}); /// difinissé le modéles : valuers des key
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
// Définir un schéma pour la collection de peopleSchema
const mongoose = require('mongoose');
require('dotenv').config(); // .env pour cacher password + user 
const dbURI = process.env.DB_URI; // DB_URI; écrit dans .env 
mongoose.connect(dbURI, { useNewUrlParser:  true, useUnifiedTopology: true, socketTimeoutMS: 30000 });
const peopleSchema = new mongoose.Schema({ // il faut déclaré le schéma malgrés que data est hébérgé sur atlas
  _id: { type: mongoose.Schema.Types.ObjectId, required: true }, 
  name: String,
  age: Number,
  favoriteFoods: Array,
});
////////////
const Person = mongoose.model('Person', peopleSchema);/// on défini model , shéma a intérieur de model 
Person.findById('640106c8ec0a4f430c66fa35') // findById
  .then(person => {
    console.log('Person found:', person);
  })
  .catch(err => {
    console.error('Error finding person:', err);
  });
  //////
Person.findOne({ email: "charlie@example.com" })
  .then(person => {
      console.log(`Person found: ${person.name}`);
    })
  .catch(err => {
    console.log("Error finding person:", err);
  });
  ////////
  Person.findById('640106c8ec0a4f430c66fa35')
  .then(person => {
    person.favoriteFoods.push("hamburger"); // ajouter une valeurs 
    return person.save();
  })
  .then(updatedPerson => {
    console.log("Person updated:", updatedPerson);
  })
  .catch(err => {
    console.log("Error updating person:", err);
  });
  //// 
  Person.findOneAndUpdate( // elle ajoute pas le true jcp pas paq !
    { name: "Charlie" }, 
    { age: 20 }, 
    { new: 'true'}
  )
  .then(updatedPerson => {
    console.log("Person updated:", updatedPerson);
  })
  .catch(err => {
    console.log("Error updating person:", err);
  });
  /////// deleyti 
Person.findByIdAndRemove('640106c8ec0a4f430c66fa35')
.then( data => {
  console.log("is deleted:", data);
})
.catch( err => {
  console.log("Error deleting person:", err);
});
//// deleter pluseirs
Person.deleteMany({ name: "Bob" })
  .then(result => console.log("Documents deleted:", result))
  .catch(err => console.log("Error deleting documents:", err));
Person
  .find({ favoriteFoods: 'Burgers' }) // trouver les documents où le champ "likes" contient la valeur "burritos"
  .sort('name') // trier les résultats par le champ "name" en ordre croissant
  .limit(2) // limiter le nombre de résultats à 2 documents
  .select('-age') // exclure le champ "age" des résultats
  .then((data) => { // exécuter la requête et résoudre la req avec les résultats
    console.log(data);
  })
  .catch((err) => { // gérer les erreurs avec le rejet de la requ
    console.log(err);
  });
