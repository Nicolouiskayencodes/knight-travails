import createBoard from "./node.js";

export function knightMoves(start, end){
  let board = createBoard();
  if (start === end) {
    return start;
  }
  let queue = [];
  let visited = [];
  let root = board[start[0]][start[1]]
  queue.push([root,[]]);
  let done = null;
  while (queue.length !==0) {
    let current = queue.shift();
    let node = current[0];
    let path = current[1];
    node.links.forEach(element => {
      if (element[0] === end[0] && element[1] === end[1]) {
        let newPath = [...path];
        newPath.push(node.val);
        newPath.push(element);
        if(done === null){
        done = newPath;
        }
      } else if (!visited.includes(element)) {
        let newPath = [...path];
        newPath.push(node.val);
        queue.push([board[element[0]][element[1]], newPath])
        visited.push(element)
      }
    });
    if (done !==null){return done}
    
  }
}