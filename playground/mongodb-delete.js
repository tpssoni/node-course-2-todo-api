//const MongoClient = require('mongodb').MongoClient;
//MongoClient lets you connect to a Mongo Server.
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
	if(err){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');
	const db = client.db('TodoApp');

	//deleteMany
	// db.collection('users').deleteMany({name: 'Rohan'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//findOneAndDelete
	db.collection('users').findOneAndDelete({
		_id : new ObjectID('5b1fc5182809870e741aa3da')
	}).then((result)=>{
		console.log(result);
	});

	//client.close();
});