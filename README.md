
# Google Speech API STT node module - work in progress
Testing google speech API. 

- [Audio duration limit](https://cloud.google.com/speech/limits)

This repo for now uses the [@google-cloud/speech](https://www.npmjs.com/package/@google-cloud/speech) node module and test the synchronous request. As it's the most straightforward. But would like to try with streams and file longer then 1 min evenutally. 

- Size limit of request  `10485760` bytes ( `10.48576` MB)

## Getting google credentials JSON

in [google cloud](https://console.cloud.google.com)

- `API manager`

- `credential`

- `create credentials` -> `service account keys` -> `json`. 

- rename as `keys.json` and put at root of projct. This is in `.gitignore` so no risk of accidentally commiting it to git/github.

The json would look something like this 

```json
{
  "type": "service_account",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
```

But I am not sure which of these fields a side from the key are actually "really" needed, as in are being used to authenticate the requst. 

## Converting audio file to flac 

```
ffmpeg -i example.wav -c:a flac example.flac
```

## Running repo

Get the repo 

```
git clone git@github.com:pietrop/gspeech_module.git
```

Get into the folder

```
cd gspeech_module
```

Install dependencies

``` 
npm install
```

Try it out

```
npm start
```

This will run the stt against the demo file, and you should see it in console.


## TODO

- [ ] try using `gcloud` and get a file longer then one min but less then 80 min transcribed. 


---

## TODO to package as component to integrate in autoEdit

- [ ] `convert_to_audio` module, to convert to `flac`.
	- [ ] get google flac specs from documentation
	- [ ] see how to convert using `fluent-ffmpeg` node wrapper. 
- [ ] make `send_to_google_stt` module, [look at IBM one in autoEdit for inspiration](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/lib/interactive_transcription_generator/transcriber/ibm_stt_node/send_to_watson.js) 
- [ ] once this works, look into optimising
	- [ ] adding split,(every 90 secs) 
	- [ ] and reconnect, [similar to IBM module in autoEdit](https://github.com/OpenNewsLabs/autoEdit_2/tree/master/lib/interactive_transcription_generator/transcriber/ibm_stt_node)

### Extra
- [ ] Add hardcoded parameters to config


## Issues
- [ ] no timecodes in response, is there a way to get them from the API?
- [ ] no word accurate timecodes in response 

If no timecode, split at 30 sec, use that time to then split the words and generate timecodes with mats, similar to poporn js srt parser.  

Ideally cut on silence. using ffmepg silence detect [like so eg]( 
https://stackoverflow.com/questions/36074224/how-to-split-video-or-audio-by-silent-parts).

but if no silence after 90 sec, split before the 1 min.

Or use gcloud storage and upload longer clip eg 5 min. (up to 80 min ) 



=======
# Google Speech API STT node module - work in progress
Testing google speech API. 

- [Audio duration limit](https://cloud.google.com/speech/limits)

This repo for now uses the [@google-cloud/speech](https://www.npmjs.com/package/@google-cloud/speech) node module and test the synchronous request. As it's the most straightforward. But would like to try with streams and file longer then 1 min evenutally. 

- Size limit of request  `10485760` bytes ( `10.48576` MB)

## Getting google credentials JSON

in [google cloud](https://console.cloud.google.com)

- `API manager`

- `credential`

- `create credentials` -> `service account keys` -> `json`. 

- rename as `keys.json` and put at root of projct. This is in `.gitignore` so no risk of accidentally commiting it to git/github.

The json would look something like this 

```json
{
  "type": "service_account",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
```

But I am not sure which of these fields a side from the key are actually "really" needed, as in are being used to authenticate the requst. 

## Converting audio file to flac 

```
ffmpeg -i example.wav -c:a flac example.flac
```

## Running repo

Get the repo 

```
git clone git@github.com:pietrop/gspeech_module.git
```

Get into the folder

```
cd gspeech_module
```

Install dependencies

``` 
npm install
```

Try it out

```
npm start
```

This will run the stt against the demo file, and you should see it in console.


## TODO

- [ ] try using `gcloud` and get a file longer then one min but less then 80 min transcribed. 


---

## TODO to package as component to integrate in autoEdit

- [x] `convert_to_audio` module, to convert to `flac`.
	- [x] get google flac specs from documentation
	- [x] see how to convert using `fluent-ffmpeg` node wrapper. 
- [x] make `send_to_google_stt` module, [look at IBM one in autoEdit for inspiration](https://github.com/OpenNewsLabs/autoEdit_2/blob/master/lib/interactive_transcription_generator/transcriber/ibm_stt_node/send_to_watson.js) 
- [ ] once this works, look into optimising
	- [x] adding split,(every 50 secs) 
	- [ ] and reconnect, [similar to IBM module in autoEdit](https://github.com/OpenNewsLabs/autoEdit_2/tree/master/lib/interactive_transcription_generator/transcriber/ibm_stt_node)

### Extra
- [ ] move hardcoded parameters to config


## Issues
- [ ] no timecodes in response, is there a way to get them from the API?
- [ ] no word accurate timecodes in response 

If no timecode, split at 50 sec, use that time to then split the words and generate timecodes with mats, similar to poporn js srt parser.  

Ideally cut on silence. using ffmepg silence detect [like so eg]( 
https://stackoverflow.com/questions/36074224/how-to-split-video-or-audio-by-silent-parts).

but if no silence after 90 sec, split before the 1 min.

Or use gcloud storage and upload longer clip eg 5 min. (up to 80 min ) 

