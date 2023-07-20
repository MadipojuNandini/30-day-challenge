function groupSeats(seatingArrangement, n) {
    const rows = seatingArrangement.length;
    const cols = seatingArrangement[0].length;
    let count = 0;
  
    for (let i = 0; i < rows; i++) {
      let consecutiveEmptySeats = 0;
      for (let j = 0; j < cols; j++) {
        if (seatingArrangement[i][j] === 0) {
          consecutiveEmptySeats++;
        } else {
          consecutiveEmptySeats = 0;
        }
  
        if (consecutiveEmptySeats === n) {
          count++;
          consecutiveEmptySeats--;
        }
      }
    }
  
    return count;
  }
  const seatingArrangement = [
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
  ];
  const n = 4;
  
  const count = groupSeats(seatingArrangement, n);
  console.log(count);