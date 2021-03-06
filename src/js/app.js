import GameControl from './gameControl';
import Gameplay from './gameplay';
import ScoreView from './scoreView';

const scoreView = new ScoreView();
const gameControl = new GameControl(scoreView);
const gameplay = new Gameplay(gameControl);

gameplay.init();
gameControl.start(1);
