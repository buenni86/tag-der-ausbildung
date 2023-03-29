/// <reference types="@workadventure/iframe-api-typings" />

WA.onInit().then(() => {
    addClickEventAndWarp("fra","evs");
    addClickEventAndWarp("fra","evps");

}).catch(e => console.error(e));

function addClickEventAndWarp(standort:string, id: string){//ich hab kein Bock mehr bitte funktioniere danke LG Leon (mag typescript sehr doll)
    document.getElementById(id)?.addEventListener("click", buildGoTo(standort,id))
}

function buildGoTo(standort:string, id: string){
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
    return () => {WA.nav.goToPage(roomURL); location.reload();}
}

export {}