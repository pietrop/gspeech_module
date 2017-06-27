'use strict';
const SendToGoogle = require('./send_to_google.js');

//Props 
var audioFile = '/Users/pietropassarelli/Desktop/audio_demo_trimmed.flac';
var googleKeys = {projectId: 'grape-spaceship-123',keyFilename:'./keys.json'  };
var languageModel = 'en-US';

var SendToGoogleUtil = new SendToGoogle();


test.skip('Google STT - sent to Google', () => {
	return SendToGoogleUtil.send(audioFile,googleKeys,languageModel, function(resp){
	// console.log(JSON.stringify(resp,null,2))
	 expect(resp[0]).toBe("I have a dream");
	});
});