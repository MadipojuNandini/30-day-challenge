function spotlightMap(grid) {
    const rows = grid.length;
    const columns = grid[0].length;
    const newGrid = [];
  
    // Iterate through each cell in the grid
    for (let i = 0; i < rows; i++) {
      const newRow = [];
      for (let j = 0; j < columns; j++) {
        let sum = 0;
  
        // Calculate the sum of the current cell and its adjacent cells
        for (let x = i - 1; x <= i + 1; x++) {
          for (let y = j - 1; y <= j + 1; y++) {
            if (x >= 0 && x < rows && y >= 0 && y < columns) {
              sum += grid[x][y];
            }
          }
        }
  
        newRow.push(sum);
      }
  
      newGrid.push(newRow);
    }
  
    return newGrid;
  }
  const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transformedGrid = spotlightMap(grid);
  console.log(transformedGrid);