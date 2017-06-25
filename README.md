# Google Speech API STT node module 
Testing google speech API. 

- [Audio duration limit](https://cloud.google.com/speech/limits)

This repo for now uses the [@google-cloud/speech](https://www.npmjs.com/package/@google-cloud/speech) node module and test the synchronous request. As it's easist. 

## Getting google credentials JSON
in https://console.cloud.google.com/

- API manager

- credential

- create credentials -> service account keys -> json. 

rename as `keys.json` and put at root of projct. This is in `.gitignore` so no risk of accidentally commiting it to git/github.

## Converting audio file to flac 

```
ffmpeg -i example.wav -c:a flac example.flac
```


## TODO

- [ ] try using `gcloud` and get a file longer then one min but less then 80 min transcribed. 


---

## TODO to package as component to integrate in autoEdit

-[ ] `convert_to_audio` module, to convert to `flac`.
	- [ ] get google flac specs from documentation
	- [ ] see how to convert using `fluent-ffmpeg` node wrapper. 
-[ ] make `send_to_google_stt` module, look at IBM one in autoEdit for inspiration 
-[ ] once this works, look into optimising
	-[ ] adding split,(every 90 secs) 
	-[ ] and reconnect, similar to IBM

### Extra
-[ ] Add parameters 


## Issues
- [ ] no timecodes in response 
- [ ] no word accurate timecodes in response 

If no timecode, split at 30 sec, use that time to then split the words and generate timecodes with mats, similar to poporn js srt parser.  

Ideally cut on silence. using ffmepg silence detect. 
eg https://stackoverflow.com/questions/36074224/how-to-split-video-or-audio-by-silent-parts

but if no silence after 90 sec, split before the 1 min.

Or use gcloud storage and upload longer clip eg 5 min. (up to 80 min ) 

