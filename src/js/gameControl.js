/* eslint-disable no-underscore-dangle */
export default class GameControl {
  constructor(scoreView) {
    this.showCounts = 0;
    this.scoreView = scoreView;
  }

  set showCounts(counts) {
    this._showCounts = counts;
    if (this._showCounts < 0) this._showCounts = 0;
  }

  get showCounts() {
    return this._showCounts;
  }

  redrawPosition(position) {
    this.charEl = document.querySelector('.character');
    this.cellEl = Array.from(document.getElementsByClassName('cell'))[position];
    this.showCounts += 1;
    this.scoreView.updateMisses(this.showCounts);
    if (!this.charEl) {
      const newCharEl = document.createElement('div');
      newCharEl.classList.add('character');
      this.cellEl.appendChild(newCharEl);
      return;
    }
    this.cellEl.appendChild(this.charEl);
    this.checkGameOver();
  }

  getNewPosition() {
    this.charEl = document.querySelector('.character');
    if (!this.charEl) {
      return Math.round(Math.random() * (4 ** 2 - 1));
    }
    this.cellEl = Array.from(document.getElementsByClassName('cell')).indexOf(this.charEl.parentElement);
    const charPosition = this.cellEl;
    let newPosition = charPosition;
    while (newPosition === charPosition) {
      newPosition = Math.round(Math.random() * (4 ** 2 - 1));
    }
    return newPosition;
  }

  start(timeout) {
    setInterval(() => { this.redrawPosition(this.getNewPosition()); }, timeout * 1000);
  }

  checkGameOver() {
    if (this.showCounts >= 5) {
      // eslint-disable-next-line no-alert
      alert('Вы проиграли!');
      this.scoreView.updateScore(0);
      this.scoreView.updateMisses(0);
      this.showCounts = 0;
    }
  }
}
