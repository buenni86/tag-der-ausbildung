/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { ButtonDescriptor } from "@workadventure/iframe-api-typings";
import { ActionBarActionButtonDescriptor } from "@workadventure/iframe-api-typings/front/Api/Iframe/Ui/ButtonActionBar";

class WAE {
    buttons: {
        close: ButtonDescriptor,
    } = {
        close: {
            label: "Schließen",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        },
    }

    constructor (){
    }

    async init(){
        WA.onInit().then(() => {
            console.log('Scripting API ready');
            console.log('Player tags: ',WA.player.tags)
            
            // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
            bootstrapExtra().then(() => {
                console.log('Scripting API Extra ready');
            }).catch(e => console.error(e));
        
        }).catch(e => console.error(e));
    }

    popUp(area: string, display: string, text: string, buttons: ButtonDescriptor[]){
        let currentPopup: any = undefined;
        WA.room.area.onEnter(area).subscribe(() => {
            currentPopup = WA.ui.openPopup(display, text, buttons);
        });
    
        WA.room.area.onLeave(area).subscribe(closePopup);
        function closePopup(){
            if (currentPopup !== undefined) {
                currentPopup.close();
                currentPopup = undefined;
            }
        }
    }

    popUpNoArea(display: string, text: string, buttons: ButtonDescriptor[]){
        WA.ui.openPopup(display, text, buttons);
    }

    modal(title: string, src: string, api: boolean){
        WA.ui.modal.openModal({
            position: "right",
            title: title,
            src: src,
            allow: "fullscreen",
            allowApi: api
        });
    }

    modalOnArea(area: string, title: string, src: string, api: boolean){
        let currentModal: any = undefined;
        WA.room.area.onEnter(area).subscribe(() => {
            currentModal = WA.ui.modal.openModal({
                position: "right",
                title: title,
                src: src,
                allow: "fullscreen",
                allowApi: api
            });
        });
        WA.room.area.onLeave(area).subscribe(closeModal);
        function closeModal(){
            if (currentModal !== undefined) {
                currentModal.close();
                currentModal = undefined;
            }
        }
    }

    async cameraEvent(x: number, y: number, area: string){
        let base64image: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAATZJREFUaEPtmcsNwjAMhr+uAwPABrANEgsACyCxDWwAA8A6IB8qIRHixE2VPuxLL3b6Pxw1qRtGHs3I8eMEajvoDgzdgRVwAeQZiyNwyiRzAKQuFg9gB8gzGLEWWgDPRFB9EWhfvwReISwxAldgMxACN2CbS+D9VVBrs6sYYsDU4kR3uqSpGJxAF3kTat2BViTfxAntEkqZdwvJp76N3GOCUfCfMhVDrd4uRdAvNMWUtC7kLWRVrlSdO1BKSes67oBVuVJ17kApJa3rTNoB9SBlVS2jTsXgd+IMNS2p877QqOwtkmbWqBh8D2QqmpvuDoz6v9A9YbDREux7PiADjnWo/2KbWKYyQiIl+iYg4INTGu0sJFOac8Kgoy8CMtjY/5vOiLIagRT1q+Y4garyewvVln8KDnwADiM+McXkgF4AAAAASUVORK5CYII="
        let b1: ActionBarActionButtonDescriptor = {
            "id":"kamera",
            "type":"action",
            "imageSrc":base64image,
            "toolTip":"Auf Bühne zoomen",
            "callback": () => {
                WA.camera.set(x,y,undefined,undefined,true,true);
                WA.ui.actionBar.removeButton("kamera");
                WA.ui.actionBar.addButton(b2);
            }
        }
        let b2: ActionBarActionButtonDescriptor = {
            "id":"kamera2",
            "type":"action",
            "imageSrc": await WA.player.getWokaPicture(),
            "toolTip":"Auf Spieler zoomen",
            "callback": () => {
                WA.camera.followPlayer(true);
                WA.ui.actionBar.removeButton("kamera2");
                WA.ui.actionBar.addButton(b1);
            }
        }

        
        WA.room.area.onEnter(area).subscribe(() => {
            WA.ui.actionBar.addButton(b1);
        });
        WA.room.area.onLeave(area).subscribe(() => {
            WA.camera.followPlayer(true);
            WA.ui.actionBar.removeButton("kamera");
            WA.ui.actionBar.removeButton("kamera2");
        });
    }

    minimapButton(){
        let currentWebsite: any = undefined;
        WA.ui.actionBar.addButton({
            "id":"minimap",
            "type":"action",
            "imageSrc":"https://buenni86.github.io/tag-der-ausbildung/src/mapLogo.png",
            "toolTip":"Minimap",
            "callback": async () => {
                if (currentWebsite !== undefined) {
                    currentWebsite.close();
                    currentWebsite = undefined;
                } else {
                    currentWebsite = await WA.nav.openCoWebSite("https://buenni86.github.io/tag-der-ausbildung/src/minimapper");
                }
            }
        })
    }
}

export default WAE;