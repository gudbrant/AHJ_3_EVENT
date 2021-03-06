export default class Gameplay {
  constructor(gameControl) {
    this.gameControl = gameControl;
    this.scoreView = this.gameControl.scoreView;
    this.score = 0;
  }

  onCellClick(event) {
    event.preventDefault();
    const charPosition = Array.from(document.getElementsByClassName('cell')).indexOf(this.gameControl.charEl.parentElement);
    const whackPosition = Array.from(document.getElementsByClassName('cell')).indexOf(event.target.parentElement);

    if (whackPosition === charPosition) {
      this.score += 1;
      this.gameControl.showCounts -= 1;
      this.scoreView.updateScore(this.score);
      this.scoreView.updateMisses(this.gameControl.showCounts);
    }

    if (this.whackMisses === 5) {
      // eslint-disable-next-line no-alert
      alert('Вы проиграли!');
      this.score = 0;
      this.gameControl.showCounts = 0;
      this.scoreView.updateScore(this.score);
      this.scoreView.updateMisses(this.gameControl.showCounts);
    }
  }

  init() {
    this.gameBoard = document.getElementById('game-container');
    this.gameBoard.addEventListener('click', (event) => this.onCellClick(event));
  }
}
