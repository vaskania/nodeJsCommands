const fs = require('fs');
const { argv } = require('process');
const cliProgress = require('cli-progress');

const readStream = fs.createReadStream(argv[2]);

const chunkSize = fs.createReadStream(argv[2]).readableHighWaterMark;

const { size } = fs.statSync(argv[2]);

console.log(size / chunkSize);

const pb = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

let counter = 0;

// pb.start(100, counter);

readStream.on('data', (chunk) => {
  if (chunk) {
    console.log(counter++);
  }
});
