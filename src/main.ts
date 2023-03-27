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
        "imageSrc":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAlZJREFUaEPtlz+ozlEYxz/fhZgsKFKsd2CgZDOYFBsDLiaL9cboZlGsKFKKQTGoazDcwcDgFt1YbBiEKCWFoh49Oq/e7v393nN+7znve711Tv16h/Oc5/n+ec6fV0z40ITjpxJYaQerA9WBTAVqC2UKmL28OpAtYWaC6kCTgGY2DRwA9gC/gcfAE0nXMwVftry4A2Z2FzjUAvS5pF0lSRQlYGbPgJ0RgPckHS5FohgBMzsFXEsEdlzS7cTYgWElCdwCvPdTRjEXShJ4A2xNQQ+8k7QlMXZsDkw8gf+rhczMj8IpYFHSXMzuUWziFAyNe8DMngK7+0C/lbQtgUSxYzQVwzICZnYTONkA9qKkswkksi+yLhiaCLRtxuSTI/cpYWbJGEZCIOZSbD6XwNAtZGargU3A5r7PRXoPfOj9Svo2iERWC3ni1A0UYh30kfDti6kb5heAq8D9NjKpGFpv4pQjzMyuhJfn+kTgS8O+AHeAGUk/l06mYBj6KRF5NnflMw+ckORt1mn8I2Bmq4Bj4UHmim4Aeso+lLS/l7kw+F7aReCopFehNf3y9D9FPj4Dn8LvZWBO0i+f+EvAzPzcPw+0PbBOS/Ke9Vjvc1dsFOOMpEt9mPxAaRqvgQuSbsjMzgGzETQ7JL0Mib3AzCjQAw8kHQx1tgMvInVmncAjYG8kcK2kHyHxR2DjiAh8lbQu1FkDfI/UWXACFgMjqX+vRONj+QbNd61VCeSo3bS2swOlAYw739AX2biBttWrBFbaiepAdSBTgdpCmQJmL68OZEuYmWDiHfgDU8MRdRVO51QAAAAASUVORK5CYII=",
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
