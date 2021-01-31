function* random() {
    const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    while (true) {
        yield pieces[Math.floor(Math.random() * pieces.length)];
    }
}




// with history of 2 pieces : before and after
function* historyRandomizer() {
    const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    let history;

    while (true) {
        // First "roll"
        piece = pieces[Math.floor(Math.random() * pieces.length)];
        // Roll is checked against the history
        if (piece === history) {
            piece = pieces[Math.floor(Math.random() * pieces.length)];
        }
        history = piece;
        yield piece;
    }
}



// 7-bag 
function* randomGenerator() {
    let bag = [];
  
    while (true) {
      if (bag.length === 0) {
        bag = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
        bag = shuffle(bag);
      }
      yield bag.pop();
    }
  }