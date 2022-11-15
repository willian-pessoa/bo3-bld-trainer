const TEST_DATA = [
  {
    id: 1,
    scramble: [
      'L2 D2 R  B2 R  B2 U2 R  U2 F2 R2 U\' L\' U\' F  L\' U\' B2 D  B2 '
    ],
    time: '00:00.38',
    milliseconds: 387,
    memo: false,
    exec: '00:00.38',
    dnf: false,
    plus2: true
  },
  {
    id: 2,
    scramble: [
      'F\' R2 B\' L2 U2 L2 F  D2 U2 F2 U2 L\' D\' L\' F\' L\' U\' L  B  U  F2 '
    ],
    time: '00:00.36',
    milliseconds: 368,
    memo: false,
    exec: '00:00.36',
    dnf: false,
    plus2: false
  },
  {
    id: 3,
    scramble: [
      'L2 R2 D2 U  F2 L2 F2 U\' F2 D  R2 F\' U2 L\' B2 D  F2 R\' U2 B  '
    ],
    time: '00:11.47',
    milliseconds: 11477,
    memo: false,
    exec: '00:11.47',
    dnf: false,
    plus2: false
  },
  {
    id: 4,
    scramble: [
      'U\' L2 F2 R2 D  F2 R2 U  L2 R2 U  B  L2 U\' B\' F  L\' F2 U  B\' F  '
    ],
    time: '00:00.23',
    milliseconds: 235,
    memo: false,
    exec: '00:00.23',
    dnf: false,
    plus2: false
  },
  {
    id: 5,
    scramble: [
      'B  D  F  U2 R  F  U\' L\' U2 R2 F2 D\' R2 L2 D\' R2 B2 U  F2 '
    ],
    time: '00:00.41',
    milliseconds: 416,
    memo: false,
    exec: '00:00.41',
    dnf: false,
    plus2: false
  },
  {
    id: 6,
    scramble: [
      'F\' D\' L\' U\' D  F\' B2 D\' L2 B  R2 L2 B\' D2 R2 F\' R2 L2 F2 '
    ],
    time: '00:01.37',
    milliseconds: 1372,
    memo: false,
    exec: '00:01.37',
    dnf: false,
    plus2: false
  },
  {
    id: 7,
    scramble: [
      'D2 R  D2 B\' U  D\' L\' F2 D\' R2 B\' R2 B  R2 L2 B\' R2 U2 B  '
    ],
    time: '00:01.60',
    milliseconds: 1602,
    memo: false,
    exec: '00:01.60',
    dnf: true,
    plus2: false
  },
  {
    id: 8,
    scramble: [
      'R2 F\' L2 D2 F2 U2 R2 F2 U2 B\' R2 U\' B\' F  L\' F  D  U\' L\' D2 '
    ],
    time: '00:00.96',
    milliseconds: 965,
    memo: false,
    exec: '00:00.96',
    dnf: false,
    plus2: false
  },
  {
    id: 9,
    scramble: [
      'L2 F  U\' D  F2 U2 B2 L  U2 F2 R2 U2 B2 R2 U\' R2 L2 U\' F2 '
    ],
    time: '00:00.58',
    milliseconds: 586,
    memo: false,
    exec: '00:00.58',
    dnf: false,
    plus2: false
  },
  {
    id: 10,
    scramble: [
      'L  F2 L  F2 D2 F2 D2 U2 R  U2 R  F\' L\' D\' U  F  U\' L2 D  U  '
    ],
    time: '00:00.61',
    milliseconds: 614,
    memo: false,
    exec: '00:00.61',
    dnf: true,
    plus2: false
  },
  {
    id: 11,
    scramble: [
      'R2 D  L2 R2 D  L2 D2 F2 D2 R2 B2 L\' B2 D  U  R\' B  F\' U\' F\' R2 '
    ],
    time: '00:00.74',
    milliseconds: 740,
    memo: false,
    exec: '00:00.74',
    dnf: true,
    plus2: false
  },
  {
    id: 12,
    scramble: [
      'F\' U2 B\' F  U2 L2 F\' L2 F\' D2 R2 U\' R  D2 L\' F\' L\' U\' R2 D\' '
    ],
    time: '00:00.99',
    milliseconds: 999,
    memo: false,
    exec: '00:00.99',
    dnf: false,
    plus2: false
  },
  {
    id: 13,
    scramble: [
      'L  U  F2 U\' D  R\' L\' B\' D\' R2 F  B2 L2 U2 F  B\' U2 F\' U2 R2 '
    ],
    time: '00:00.78',
    milliseconds: 787,
    memo: false,
    exec: '00:00.78',
    dnf: false,
    plus2: false
  },
  {
    id: 14,
    scramble: [
      'F  D2 R2 D2 L2 B\' U2 L2 U2 F\' L\' U  B  F\' R\' B2 D  U\' R  B\' '
    ],
    time: '00:00.79',
    milliseconds: 797,
    memo: false,
    exec: '00:00.79',
    dnf: true,
    plus2: false
  },
  {
    id: 15,
    scramble: [
      'B2 F2 D  F2 D  L2 R2 U\' L2 D2 L2 F  R2 U\' L  R\' B\' D2 R\' D\' '
    ],
    time: '00:00.71',
    milliseconds: 710,
    memo: false,
    exec: '00:00.71',
    dnf: false,
    plus2: false
  }
]

const findBo3 = (arrSolves) => {
  let bo3 = arrSolves[0]

  for (let i in arrSolves) {
    if (arrSolves[i] !== "DNF") {
      if (bo3 === "DNF" || arrSolves[i] < bo3) {
        bo3 = arrSolves[i]
      }
    }
  }
  return bo3
}

export const parseSessionData = (solves) => {
  const parsedObject = {
    data: [],
    averageBo3: 0,
    totalSuccess: 0,
    averageMo3: 0,
  }
  const dataArr = []
  let countMedia = 1
  const currentMedia = {
    media: 0,
    bo3Solves: [],
    bo3: "",
    success: 0,
    mo3: "",
  }

  for (let i = 1; i <= solves.length; i++) {
    const index = i - 1
    switch (i % 3) {
      case 1:
        currentMedia.media = countMedia;
        currentMedia.bo3Solves.push(solves[index].dnf ? "DNF" : solves[index].milliseconds)
        if (solves[index].dnf) {
          currentMedia.success = 0
        } else {
          currentMedia.success = 1
        }
        countMedia++
        break
      case 2:
        currentMedia.bo3Solves.push(solves[index].dnf ? "DNF" : solves[index].milliseconds)
        if (!solves[index].dnf) {
          currentMedia.success++
        }
        break
      case 0:
        currentMedia.bo3Solves.push(solves[index].dnf ? "DNF" : solves[index].milliseconds)
        if (!solves[index].dnf) {
          currentMedia.success++
        }
        if (currentMedia.success === 3) {
          currentMedia.mo3 = Math.floor(currentMedia.bo3Solves.reduce((a, b) => a + b, 0) / 3)
        } else {
          currentMedia.mo3 = "DNF"
        }
        currentMedia.bo3 = findBo3(currentMedia.bo3Solves)
        const deepCopyCurrentMedia = JSON.parse(JSON.stringify(currentMedia));
        dataArr.push(deepCopyCurrentMedia)
        currentMedia.bo3Solves = []
        break
      default:
        return
    }
  }

  let sumBo3 = 0
  let sumMo3 = 0
  let totalBo3 = 0
  let totalMo3 = 0
  let totalSuccess = 0
  for (let i in dataArr) {
    if (dataArr[i].bo3 !== "DNF") {
      sumBo3 += dataArr[i].bo3
      totalSuccess += dataArr[i].success
      totalBo3++
    }
    if (dataArr[i].mo3 !== "DNF") {
      sumMo3 += dataArr[i].mo3
      totalMo3++
    }
  }

  parsedObject.data = dataArr
  parsedObject.averageBo3 = Math.floor(sumBo3 / totalBo3)
  parsedObject.averageMo3 = Math.floor(sumMo3 / totalMo3)
  parsedObject.totalSuccess = totalSuccess
  return parsedObject
}

parseSessionData(TEST_DATA)