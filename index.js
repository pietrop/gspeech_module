'use strict';

const SendToGoogle 		= require('./google_stt/send_to_google.js');
const convertToWav    	= require('./google_stt/convert_to_audio.js');
const split             = require('./split.js');

//audio convert props
//var file = "/Users/pietropassarelli/Desktop/test_gspeech/tmp/audio_trimmed_27-2209.flac.0.flac"
// var file = "/Users/pietropassarelli/Desktop/captioned_norman_door_audio.m4a";
var file = "/Users/pietropassarelli/Desktop/TMP2/Demo_media/Vox.com/norman\ door/norman_door.mp4";
// var file = "/Users/pietropassarelli/Desktop/TMP2/Demo_media/Vox.com/norman\ door/norman_door_trimmed.mp4";
var audioFile = "/Users/pietropassarelli/Desktop/audio_trimmed_27-2209.flac";
var ffmpegPath = "/Users/pietropassarelli/Dropbox/CODE/Vox/TBVE/autoEdit_v2/node_modules/ffmpeg-static/bin/mac/x64/ffmpeg";

// var audioFile = '/Users/pietropassarelli/Desktop/test_gspeech/example.flac';

//stt probps 
var googleKeys = {projectId: 'grape-spaceship-123',keyFilename:'./keys.json'  };
var languageModel = 'en-US';


//split props
var tmpFolder = "./tmp";
var ffprobePath = "/Users/pietropassarelli/Dropbox/CODE/Vox/TBVE/autoEdit_v2/node_modules/ffprobe-static/bin/mac/x64/ffprobe";

/**
 * Functions 
 */
var SendToGoogleUtil = new SendToGoogle();
 var out               = [];
 var total             = 0;
//convert to audio 
convertToWav(file, audioFile, ffmpegPath, function(newFile) {
		console.log(newFile);

	//split[optional]
	split(newFile, tmpFolder, ffmpegPath, ffprobePath, function(files) {

		//iterate [optional]
		// reading number of audio files 
		total = files.length; 
		//3. iterate and send to STT
        files.forEach(function(f, index) {
        	console.log(f);
        	//delay 
        	// setTimeout(function(){
        		console.log("sending f", index, f);
        			//TODO: add config var in here 
					
					// TODO: add callback, with error. 
					// TODO: change param to config object to make self documenting.
					SendToGoogleUtil.send(f.name,googleKeys,languageModel, function(err, resp){
						// receive 
						if(err){
							console.error('ERROR:', err);
		             		// callback(error, null );
		         		}
		         		console.log("---");
						console.log(JSON.stringify(resp,null,2));
						//write out [optional]

						//parse


						//return 
						
					});
					//3000 milliseconds == 3 seconds
        	// }, 180000);
			//send 
			const SendToGoogle 		= require('./google_stt/send_to_google.js');
		

		
		});//iterate over files split
	});//split
});//convertToWav