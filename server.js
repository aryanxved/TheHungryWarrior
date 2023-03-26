let mysql = require('mysql');
let config = require('./config.js');
const fetch = require('node-fetch');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { response } = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));


app.post('/api/loadUserSettings', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = `SELECT mode FROM user WHERE userID = ?`;
	console.log(sql);
	let data = [userID];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addReviewRestaurant', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO Review_Restaurants(ReviewTitle, ReviewLocation, ReviewQuality, ReviewDescription) VALUES (?, ?, ?, ?)`;
	console.log(sql)
	
	let data = [req.body.ReviewTitle, req.body.ReviewLocation, req.body.ReviewQuality, req.body.ReviewDescription];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addReviewHousing', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO Review_Housing(ReviewTitle, ReviewLocation, ReviewQuality, ReviewDescription) VALUES (?, ?, ?, ?)`;
	console.log(sql)
	
	let data = [req.body.ReviewTitle, req.body.ReviewLocation, req.body.ReviewQuality, req.body.ReviewDescription];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addReview', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO Review_Entertainment(ReviewTitle, ReviewLocation, ReviewQuality, ReviewDescription) VALUES (?, ?, ?, ?)`;
	console.log(sql)
	
	let data = [req.body.ReviewTitle, req.body.ReviewLocation, req.body.ReviewQuality, req.body.ReviewDescription];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

//Request Table API's

app.post('/api/addRequestRestaurant', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO Request_Restaurant(Email, FullName, PhoneNumber, RestaurantAddress, RestaurantInfo, RestaurantName) VALUES (?, ?, ?, ?, ?, ?)`;
	console.log(sql)
	
	let data = [req.body.Email, req.body.FullName, req.body.PhoneNumber, req.body.RestaurantAddress, req.body.RestaurantInfo, req.body.RestaurantName];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});
//Do
app.post('/api/addRequestHousing', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO Request_Housing(Email, FullName, PhoneNumber, HousingAddress, HousingInfo, HousingName) VALUES (?, ?, ?, ?, ?, ?)`;
	console.log(sql)
	
	let data = [req.body.Email, req.body.FullName, req.body.PhoneNumber, req.body.HousingAddress, req.body.HousingInfo, req.body.HousingName];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addRequestEntertainment', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO Request_Ent(Email, FullName, PhoneNumber, EntAddress, EntInfo, EntName) VALUES (?, ?, ?, ?, ?, ?)`;
	console.log(sql)
	
	let data = [req.body.Email, req.body.FullName, req.body.PhoneNumber, req.body.EntAddress, req.body.EntInfo, req.body.EntName];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addPostEntertainment', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO Entertainment(entertainmentBudget, entertainmentDistance, entertainmentActivity, entertainmentLevel, entertainmentName,
		entertainmentDest, entertainmentAddress, entertainmentUserName,
		entertainmentUserEmail, entertainmentUserPhone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
	console.log(sql)
	
	let data = [req.body.entertainmentBudget, req.body.entertainmentDistance, req.body.entertainmentActivity, req.body.entertainmentLevel, req.body.entertainmentName, req.body.entertainmentDest, req.body.entertainmentAddress, req.body.entertainmentUserName, req.body.entertainmentUserEmail, req.body.entertainmentUserPhone];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addPostHousing', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO Housing(housingBudget,housingDistance, housingPeople, housingRoomType, housingName,
		housingDesc, housingAddress, housingUserName, 
		housingUserEmail, housingUserPhone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
	console.log(sql)
	
	let data = [req.body.housingBudget, req.body.housingDistance, req.body.housingPeople, req.body.housingRoomType, req.body.housingName, req.body.housingDesc, req.body.housingAddress, req.body.housingUserName, req.body.housingUserEmail, req.body.housingUserPhone];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addPostFood', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO Food(foodBudget,foodDistance, foodCuisine, foodDesc, foodName,
		foodAddress, foodUserName, foodUserEmail, foodUserPhone 
		 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
	console.log(sql)
	
	let data = [req.body.foodBudget, req.body.foodDistance, req.body.foodCuisine, req.body.foodDesc, req.body.foodName, req.body.foodAddress, req.body.foodUserName, req.body.foodUserEmail, req.body.foodUserPhone];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/getEntertainment', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `SELECT * FROM Entertainment 
	WHERE entertainmentBudget <= ?
	and entertainmentDistance <= ?
	and entertainmentActivity = ? and entertainmentLevel = ?`;
	console.log(sql)
	
	let data = [req.body.entertainmentBudget, req.body.entertainmentDistance, req.body.entertainmentActivity, req.body.entertainmentLevel];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/getHousing', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `SELECT * FROM Housing 
	WHERE housingBudget <= ?
	and housingDistance <= ?
	and housingPeople = ? and housingRoomType = ?`;
	console.log(sql)
	
	let data = [req.body.housingBudget, req.body.housingDistance, req.body.housingPeople, req.body.housingRoomType];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/getFood', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `SELECT * FROM Food 
	WHERE foodBudget <= ?
	and foodDistance <= ?
	and foodCuisine = ?`;
	console.log(sql)
	
	let data = [req.body.foodBudget, req.body.foodDistance, req.body.foodCuisine];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/getPostsEntertainment', (req, res) => {
	let connection = mysql.createConnection(config);

	let sql = `SELECT * FROM Entertainment WHERE entertainmentUserEmail = ?`;
	console.log(sql)
	
	let data = [req.body.entertainmentUserEmail];

	console.log(data)
	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
