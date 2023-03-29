/// <reference types="@workadventure/iframe-api-typings" />

WA.onInit().then(() => {
    //fra
    addClickEventAndWarp("evs","fra","evs");
    addClickEventAndWarp("evps","fra","evps");
    addClickEventAndWarp("stvit","fra","stvit");
    addClickEventAndWarp("pel","fra","pel");
    addClickEventAndWarp("dbds","fra","dbds");
    addClickEventAndWarp("nemo","fra","nemo");
    addClickEventAndWarp("sepia","fra","sepia");
    addClickEventAndWarp("tss","fra","tss");
    addClickEventAndWarp("sab","fra","sab");
    addClickEventAndWarp("sp4db","fra","sp4db");
    addClickEventAndWarp("traction","fra","traction");
    addClickEventAndWarp("disco","fra","disco");
    addClickEventAndWarp("infinity","fra","infinity");
    addClickEventAndWarp("co2ingpn","fra","co2ingpn");
    addClickEventAndWarp("tdosc","fra","tdosc");
    addClickEventAndWarp("ciso","fra","ciso");
    addClickEventAndWarp("sd","fra","sd");
    addClickEventAndWarp("mox","fra","mox");
    addClickEventAndWarp("mop","fra","mop");
    addClickEventAndWarp("dv","fra","dv");
    addClickEventAndWarp("eese","fra","eese");
    addClickEventAndWarp("bcm","fra","bcm");
    addClickEventAndWarp("az4db","fra","az4db");
    addClickEventAndWarp("moi","fra","moi");
    addClickEventAndWarp("polaris","fra","polaris");
    addClickEventAndWarp("tulip","fra","tulip");
    addClickEventAndWarp("bdcsdbc","fra","bdcsdbc");
    addClickEventAndWarp("tsfrotp","fra","tsfrotp");
    addClickEventAndWarp("ass3","fra","ass3");

    //ber
    addClickEventAndWarp("b-tss","ber","tss");
    addClickEventAndWarp("b-stvit","ber","stvit");
    addClickEventAndWarp("b-disco","ber","disco");
    addClickEventAndWarp("b-sd","ber","sd");
    addClickEventAndWarp("b-sab","ber","sab");
    addClickEventAndWarp("b-sp4db","ber","sp4db");
    addClickEventAndWarp("b-eese","ber","eese");
    addClickEventAndWarp("b-scope","ber","scope");
    addClickEventAndWarp("b-mop","ber","mop");
    addClickEventAndWarp("b-dv","ber","dv");
    addClickEventAndWarp("b-ass3","ber","ass3");
    addClickEventAndWarp("b-bcm","ber","bcm");
    addClickEventAndWarp("b-az4db","ber","az4db");
    addClickEventAndWarp("b-bdcsdbc","ber","bdcsdbc");

    //erf
    addClickEventAndWarp("e-sd","erf","sd");
    addClickEventAndWarp("e-stvit","erf","stvit");
    addClickEventAndWarp("e-mop","erf","mop");
    addClickEventAndWarp("e-dv","erf","dv");
    addClickEventAndWarp("e-bcm","erf","bcm");
    addClickEventAndWarp("e-moi","erf","moi");
    addClickEventAndWarp("e-ass3","erf","ass3");
    addClickEventAndWarp("e-gravity","erf","gravity");
    addClickEventAndWarp("e-mox","erf","mox");
    addClickEventAndWarp("e-scope","erf","scope");
    addClickEventAndWarp("e-infinity","erf","infinity");
    addClickEventAndWarp("e-az4db","erf","az4db");
    addClickEventAndWarp("e-tdosc","erf","tdosc");



}).catch(e => console.error(e));

function addClickEventAndWarp(html:string,standort:string, id: string){//ich hab kein Bock mehr bitte funktioniere danke LG Leon (mag typescript sehr doll)
    document.getElementById(html)?.addEventListener("click", buildGoTo(standort,id))
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
    return () => {WA.nav.goToPage(roomURL); window.top?.location.reload();}
}

export {}