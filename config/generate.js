const { exec } = require("child_process");
var audioSamples = require("./audio");

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

for (var k in audioSamples) {
  var sample = audioSamples[k];
  var filename = "clip_" + pad(sample.id, 4);
  var cmd =
    'say -v "Allison" "' +  //here you can pass the voice parameter with e.g.:-v Allison
    sample.text +
    '" -o clips/' +
    filename +
    '.aiff; ffmpeg -y -i "clips/' +
    filename +
    '.aiff" -acodec libmp3lame clips/' +
    filename +
    ".mp3; rm clips/" +
    filename +
    ".aiff";
  console.log("Executing:", cmd);

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}
