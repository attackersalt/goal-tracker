import { Goal } from "./goal.js";
import { DOM } from "./dom.js"

const g1 = new Goal("hi", "hi 2", 0.1, 0.05);
console.log(g1);
g1.update();
console.log(g1);
g1.changeStep(0.06);
g1.update();
console.log(g1);

DOM.showGoal(g1);