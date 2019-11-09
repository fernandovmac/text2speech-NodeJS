## Overview

This repo is a simple text2speech node.js script for generating audioclips from Mac OS native "Voice" funcionality.

### Dependencies

Node - `npm install`

ffmpeg - `brew install ffmpeg`

Lame - `npm install lame`

### Generating audio samples

1-Add the sentences you need as JSON objects in the audio.js file. Follow the standards of the example written there now.

2-Run `node generate.js` from inside the `config/` directory. Make sure you create a `clips/` directory inside of there.

### Changing the speech's voice

Pass the "-v VoiceNameHere" parameter in the var cmd (line 14 from generate.js). Make sure the voice is actually installed in your OS (System Preferences -> Accessibility -> Speech)