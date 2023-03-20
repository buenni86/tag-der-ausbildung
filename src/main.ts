console.log('Script started successfully');

import WAE from "./wa-lib";

let wae = new WAE();

wae.init().then(() => {
    wae.popUpNoArea("infoPopUp","Willkommen bei Workadveutre!\nBewege dich mit WASD, Pfeiltasten oder Rechtsklick.",[wae.buttons.close]);
    wae.minimapButton();
    wae.cameraEvent(640,735,"bühne");
});