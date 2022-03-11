import {distance5105} from "./ruler.js";
import {log} from "./log.js";

export const MODULE_ID = 'five-ten-five-ruler';

Hooks.once('ready', () => {
    if (!game.modules.get('lib-wrapper')?.active && game.user.isGM)
        ui.notifications.error("Module '5-10-5 Ruler' requires the 'libWrapper' module. Please install and activate it.");
});

//Override the measureDistances function so this **WILL*** break Terrain Ruler. Use at your own peril.
Hooks.once("canvasInit", function() {
	libWrapper.register(MODULE_ID, 'SquareGrid.prototype.measureDistances', function( ...args){
		return distance5105(...args);
	}, 'OVERRIDE');
});