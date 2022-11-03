const scrambler = require("./scramble_333.js")

scrambler.initialize(null, Math)

console.log(scrambler.getEdgeScramble())
console.log(scrambler.getCornerScramble())