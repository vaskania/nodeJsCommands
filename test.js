const fs = require('fs');
const { argv } = require('process');
const cliProgress = require('cli-progress');

const readStream = fs.createReadStream(argv[2]);

const chunkSize = fs.createReadStream(argv[2]).readableHighWaterMark;

const { size } = fs.statSync(argv[2]);

const pb = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

let counter = 0;

pb.start(size / 1000, 0);

readStream.on('data', (chunk) => {
  if (chunk) {
    pb.update(calculateChunk());
  } else {
    pb.stop();
  }
});

const calculateChunk = () => {
  return (counter += chunkSize / 1000);
};
