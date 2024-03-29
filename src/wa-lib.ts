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
        let base64image: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEJUlEQVR4nO2dTUhUURiGHe84/mQpOjVk2ZT9RyZKLpqVUM4u0E0RgZsW0TaCFkERISSR0KpoEwQSzGaKdi6DXFQIEqkjKUmhTqWp+TvjMG3d+H7JYZrkfZ/tO2fuuXMfDnzfnHuvL5vNFgheCvM9AZFfJAA5EoAcCUCOBCBHApAjAcjx5foA0WgHzBua6mE+0P/RqVFRG66F5zg1mYTj6w4dgHliMOE0v7qD++H8xka/wPG9vc9dDq8VgB0JQI4EIEcCkCMByJEA5EgAcpz7ALmu87uf3IfjhwcSMH/6+BnMK6uDMJ+d/gnzXM9vX3gPvEaDn4bg+L6+lzDXCkCOBCBHApAjAciRAORIAHIkADnOfYCWloswDwSKc1rnDyWGYX786DGYW3V4vufX/eARzAuMa6g+gIBIAHIkADkSgBwJQI4EIEcCkJPzPkAqtQr7AE2nm+H4UE3V5ie1juTEDMz7P7yH+f8+P8/z4DXMZDJwvFYAciQAORKAHAlAjgQgRwKQIwHIce4DRCJtMK+orIT53OysU5/Awqqj94brYP5tfAzmrvMbGcb7CSwWFuZhfqL+JLzGWgHIkQDkSAByJAA5EoAcCUCOBCDHZ93fb1EUCMA8nU7jLzBeWGDVuRZWne+K1SewaG+/DPN4vAfmd7o6YX735i2YawUgRwKQIwHIkQDkSAByJAA5EoAcfyi0G34gmZyEdXo6lYLjXZ/Dd+XaVZjPTC3A3KqjXbH2A4Rrj+T0+A/vdcH8VGOj9gOIjZEA5EgAciQAORKAHAlAjgQgxxeNdsA6v7X1PPyC8a8jMM/1vvzy8h0wt7D6FBZWH8N1P4N1fplMBtb5nufB8VoByJEA5EgAciQAORKAHAlAjgQgRwKQ47c+YDV6LFxvXLA2XFgPWLAaPa43duQbz/NgI6+6eqc2hIiNkQDkSAByJAA5EoAcCUCOBCDHb21Y+P5j2ukA796+cRpvYdX59Q2HYX678wbM47FXMLde/Oj64shY7DXMm5vOwDwe74F9Aq0A5EgAciQAORKAHAlAjgQgRwKQ44tE2mCd6PqgRdf/211fyODax8g3rjeeBIO7tB9AbIwEIEcCkCMByJEA5EgAciQAOb6z5/ALC5aXFmGfwMLqI+T6AQtbHesBEX/x+6gPIDZGApAjAciRAORIAHIkADkSgBz/8tKi9RlYR5aWbYOD537N4C8vxA76/UUwX1tLwz6FtZ8gVFMFc4vkBD4/60GZJSWl8PddWVmC4wOBYpinUqsw1wpAjgQgRwKQIwHIkQDkSAByJAA5sAb9F1y4dB3mwWAFzD8nRmEfIN/7Caz9EDu2l8FrMP8b9wFiL7o3P6l1aAUgRwKQIwHIkQDkSAByJAA5EoAcXzbrtO1fbHG0ApAjAciRAORIAHIkADkSgJw/Zq0GlZfi/7wAAAAASUVORK5CYII="
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
            "imageSrc":"data:image/png;base64,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",
            "toolTip":"Minimap",
            "callback": async () => {
                if (currentWebsite !== undefined) {
                    currentWebsite.close();
                    currentWebsite = undefined;
                } else {
                    currentWebsite = await WA.nav.openCoWebSite("https://buenni86.github.io/tag-der-ausbildung/src/minimapper",true);
                }
            }
        })
    }
}

export default WAE;