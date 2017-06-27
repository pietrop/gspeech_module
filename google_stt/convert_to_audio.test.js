'use strict';
const convertToWav    = require('./convert_to_audio.js')

var file = "/Users/pietropassarelli/Desktop/TMP2/Demo_media/Vox.com/norman\ door/captioned_norman_door.mp4";
var fileTrimmer = "/Users/pietropassarelli/Desktop/TMP2/Demo_media/Vox.com/norman\ door/norman_door_trimmed.mp4";
var audioFile = "/Users/pietropassarelli/Desktop/audio_demo_trimmed.flac";
var ffmpegPath = "/Users/pietropassarelli/Dropbox/CODE/Vox/TBVE/autoEdit_v2/node_modules/ffmpeg-static/bin/mac/x64/ffmpeg";

test('convert audio file to flac', () => {
	return convertToWav(file, audioFile, ffmpegPath, function(newFile) {
		console.log(newFile);
		expect(newFile).toBe("/Users/pietropassarelli/Desktop/audio_demo_trimmed.flac");
		// expect(1+2).toBe(3);
	});
});


// convertToWav(fileTrimmer, audioFile, ffmpegPath, function(newFile) {
// 		console.log(newFile);
// 	});