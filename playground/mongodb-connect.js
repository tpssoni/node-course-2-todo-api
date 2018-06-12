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

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result)=> {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// });

	//insert new doc into  the users collection (name, age, location)

	// db.collection('users').insertOne({
	// 		name: 'Mohan',
	// 		age: 21,
	// 		location: 'limbodi'
	// 	}, (err, result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert user', err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	client.close();
});