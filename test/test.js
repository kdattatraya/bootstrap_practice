'use strict';
 var request = require('supertest');
 app = require("../app").getApp;
 
 
 describe('GET /','){
	 it('expect HTTP response 200',functio(done){
		  request(app).get('/').expect(200, done);
	 })
 }
 request(app);

