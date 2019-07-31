'use strict';
 
var pg = require('pg');
 
exports.handler = function(event, context) {   
 
    var dbConfig = {
        user: 'parksuser',
        password: 'password',
        database: 'parksdata',
        host: 'parksdata.cil7fd9ehe0r.us-east-1.rds.amazonaws.com',
        port: 5432
    };
    var client = new pg.Client(dbConfig);
    client.connect();
    client.end();
 };