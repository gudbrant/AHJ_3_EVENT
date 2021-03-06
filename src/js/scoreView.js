/* eslint-disable prefer-destructuring */
export default class ScoreView {
  constructor() {
    this.scoreEl = document.getElementsByClassName('whack-counter')[0].getElementsByClassName('score')[0];
    this.missEl = document.getElementsByClassName('miss-counter')[0].getElementsByClassName('score')[0];
  }

  updateScore(score) {
    this.scoreEl.innerText = score;
  }

  updateMisses(misses) {
    this.missEl.innerText = misses;
  }
}
