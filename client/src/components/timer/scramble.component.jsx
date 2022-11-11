import React from "react";
import { useState, useEffect } from "react";

import "./scramble.styles.scss";

import { getScrambles } from "../../utils/scrambler/scrambler";

const Scramble = ({ scrambleType }) => {
  const [scramble, setScramble] = useState("");
  const [next, setNext] = useState(true)

  useEffect(() => {
    switch (scrambleType) {
      case "bld":
        setScramble(getScrambles.getScramble());
        break;
      case "edges":
        setScramble(getScrambles.getEdgeScramble());
        break;
      case "corners":
        setScramble(getScrambles.getCornerScramble());
        break;
      default:
        setScramble(getScrambles.getScramble());
    }
  },[scrambleType, next]);

  return <div className="scramble">{scramble}
  <div className="next" onClick={()=>setNext(prev=>!prev)}> next </div>
  </div>;
};

export default Scramble;
