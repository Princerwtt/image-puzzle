const pieces = document.querySelectorAll('.puzzle-piece');
let emptyPiece = null;

// Add event listeners to each piece
pieces.forEach((piece) => {
  piece.addEventListener('dragstart', dragStart);
  piece.addEventListener('dragover', dragOver);
  piece.addEventListener('drop', drop);
});

function dragStart() {
  emptyPiece = this;
  setTimeout(() => (this.style.display = 'none'), 0);
}

function dragOver(event) {
  event.preventDefault();
}

function drop() {
  this.parentNode.insertBefore(emptyPiece, this);
  this.style.border = '2px solid #000';
  emptyPiece.style.display = 'block';
  emptyPiece = null;
}
