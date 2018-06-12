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

	// db.collection('Todos').find({
	// 	_id:new ObjectID('5b1fc2ffc939470d95b1f794')
	// }).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// },(err)=>{
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos count: ${count}`);
	// },(err)=>{
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('users').find({name: 'Rohan'}).toArray().then((docs)=>{
		console.log('users');
		console.log(JSON.stringify(docs, undefined, 2));
	},(err)=>{
		console.log('Unable to fetch todos', err);
	});	


	//client.close();
});