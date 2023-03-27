console.log('Script started successfully');

import WAE from "./wa-lib";

let wae = new WAE();

wae.init().then(() => {
    async () => {
        var pos = await WA.player.getPosition()
        if(pos.x<1500){
            wae.popUpNoArea("infoPopUp","Willkommen bei Workadveutre!\nBewege dich mit WASD, Pfeiltasten oder Rechtsklick.\nDieses Event wird teilweise Aufgezeichnet",[wae.buttons.close]);
        }
    }
    wae.minimapButton();
    wae.cameraEvent(640,735,"bühne");
    wae.popUp("evsPopup","dbPlanetArea","Hier zu unserer DB-Planet Seite:",[{label: "OK",callback: (() => {WA.nav.openTab("https://www.db.de/workadventure")})}]);
    teamListButton();
});

function teamListButton() {
    let currentWebsite: any = undefined;
    WA.ui.actionBar.addButton({
        "id":"team",
        "type":"action",
        "imageSrc":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAoxJREFUaEPt1k2oTkEYB/DfXSBWEhY+Cgt2JGKBsrBAsVBshJIssCOycrORr5WPhdiQFEUoFAtFckViIxYooiglhbKgqXlr4j33nPfOufd660yd5pw5zzzz/z//mXmeHl3eerocv4bAcCvYKNAokBmBZgtlBjB7eqNAdggzHTQKFARwKxZjSfx/D/dxKjPg/0wfDAUeY14B0CeYXyeJuglcxNoSgJewri4SdRLYgLMJsGM4H7/XYAGWxu+NOFcHiToJpNG/ggA6bTtxJA7UpkKdBN5hSgS4CA/+IjATL+PYe0z93xRICczCq24jkG6hXTg63FtoNebiKa5VkDs9xHfxCJczD3EphqIz8AbTEtBvMb0CiTqv0UoY2hE4iN1twB7Cngok6khklTG0I5AexhRvJzdHbilRGcNgEaggVL8mWQQqy9cGwihMwuTkCUH6gI9J/62EYWUMdRzikViFTbGvEv0+nETI2EVkBnyIWwBKrzCEeieUDCHqA2lfcAEhb/xs46AUQ04pUXRlhhwQgLWegGtc8rQKuhTv7ahg2GYdtZTACATGOzABE2MfHN7EysTz3+Bv4Q7CeDiA/bVQA4VyehmWJ4YhYa7Hizh2Ayvi+2d8QuiPx8T6K/xrEdiCvZhRsPL2uGfD70DyamLXrmyoGsW0Qg1zQv45HCdvw4kCR69xAKcDgX3oLVlxDp5HmzPYHN/3x/lVAbezS9e/HgMU7GbjWYnj3kDgIRaWGI7Bj0TO8fE9bIeQ4HJauHJbPr5ibHQ2Gt9LHPcFAr8rrJ6elSr2FVwWmnS0VkMgJ9QFcztWYBAwDJ3LnEQ2dCj7WakhMNwyNAo0CmRGoNlCmQHMnt4okB3CTAddr8AfameLdcwQvt4AAAAASUVORK5CYII=",
        "toolTip":"Teams",
        "callback": async () => {
            if (currentWebsite !== undefined) {
                currentWebsite.close();
                currentWebsite = undefined;
            } else {
                currentWebsite = await WA.nav.openCoWebSite("https://buenni86.github.io/tag-der-ausbildung/src/teamList",true);
            }
        }
    })
}
