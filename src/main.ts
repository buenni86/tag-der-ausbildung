console.log('Script started successfully');

import WAE from "./wa-lib";

let wae = new WAE();

wae.init().then(() => {
    wae.popUpNoArea("infoPopUp","Willkommen bei Workadveutre!\nBewege dich mit WASD, Pfeiltasten oder Rechtsklick.\nDieses Event wird teilweise Aufgezeichnet",[wae.buttons.close]);
    wae.minimapButton();
    wae.cameraEvent(640,735,"bühne");
    wae.popUp("evsPopup","dbPlanetArea","Hier zu unserer DB-Planet Seite:",[{label: "OK",callback: (popup => {WA.nav.openTab("https://www.db.de/workadventure")})}])
});
