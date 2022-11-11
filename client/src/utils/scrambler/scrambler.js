const scrambler = require("./scramble_333.js")

scrambler.initialize(null, Math)

export const getScrambles = {
  getScramble: scrambler.getRandomScramble,
  getEdgeScramble: scrambler.getEdgeScramble,
  getCornerScramble: scrambler.getCornerScramble,
}

//console.log(getScrambles.getScramble())