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

	//findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5b1fd8352312658e60dc8e49')
	// },{
	// 	$set:{
	// 		completed: true
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('users').findOneAndUpdate({
		_id: new ObjectID('5b1fc78cd767720f7ad4e423')
	},{
		$set:{
			name:'Tapas'
		},
		$inc:{
			age: 1
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//client.close();
});