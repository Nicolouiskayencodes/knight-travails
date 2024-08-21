import Node from "./node.js";
export function createBoard(){
  let board = [];
  for (let i=0; i<8; i++){
    let row = [];
    for (let j=0;j<8; j++){
      let space = Node([i,j])
      row.push(space);
    }
    board.push(row);
  }
  return board;
}