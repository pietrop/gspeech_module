'use strict';

var SendToGoogle = require('./send_to_google.js');

var audioFile = '/Users/pietropassarelli/Desktop/test_gspeech/example.flac';
var googleKeys = {projectId: 'grape-spaceship-123',keyFilename:'./keys.json'  };
var languageModel = 'en-US';
//split[optional]


//iterate [optional]

//send 
//TODO: add config var in here 
var SendToGoogleUtil = new SendToGoogle();

// receive 
// TODO: add callback, with error. 
SendToGoogleUtil.send(audioFile,googleKeys,languageModel, function(resp){
	console.log(JSON.stringify(resp,null,2))
});

	//write out [optional]

	//parse


	//return 