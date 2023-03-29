/// <reference types="@workadventure/iframe-api-typings" />

WA.onInit().then(() => {
    forIDgettheIDandDoTheIDthingwhileBeingtheIDwarpwarpthisthing("fra","evs");
    forIDgettheIDandDoTheIDthingwhileBeingtheIDwarpwarpthisthing("fra","evps");

}).catch(e => console.error(e));

function forIDgettheIDandDoTheIDthingwhileBeingtheIDwarpwarpthisthing(standort:string, id: string){//ich hab kein Bock mehr bitte funktioniere danke LG Leon (mag typescript sehr doll)
    document.getElementById(id)?.addEventListener("click", clickycliykwarpywarpyschnorkimakarioni(standort,id))
}

function clickycliykwarpywarpyschnorkimakarioni(standort:string, id: string){ //aaaaaaaAAAAaAaAaAaaAaaAaAAAaAaaaAaaaaaAAAA1!!!11!!111111!!!!!!1!!11!!1
    let roomURL: string = "https://play.workadventu.re/@/db-systel/db/tag-der-ausblidung";
    switch(standort){
        case "fra": {
            roomURL = "https://play.workadventu.re/@/db-systel/db/frankfurt-ausbildung#" + id;
            break; 
        } 
        case "ber": {
            roomURL = "https://play.workadventu.re/@/db-systel/db/berlin-ausbildung#" + id;
            break; 
        } 
        case "erf": {
            roomURL = "https://play.workadventu.re/@/db-systel/db/erfurt-ausbildung#" + id;
            break; 
        } 
        default: {
            break; 
        }
    }
    return () => {WA.nav.goToPage(roomURL)}
}

export {}