export const removeItemFromArrayByIndex = (arr, index) => {
  const tempArr = JSON.parse(JSON.stringify(arr))
  tempArr.splice(index, 1);
  return tempArr
}

export const findIndexSolveById = (arrSolve, id) => {
  const indexSolve = arrSolve.findIndex(solve => solve.id === id)
  return indexSolve
}
