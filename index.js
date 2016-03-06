'use strict';

const test = require('loadtest');

var server = test.startServer({ port: 7357 }); //localhost
const fns = {};

var options = {
    url: 'http://new.locator-app.com/',
    maxRequests: 100,
};


module.exports =test.loadTest(options, function(error, result)
{
    if (error)
    {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
    console.log(result);
});

server.close();

//module.exports = fns;