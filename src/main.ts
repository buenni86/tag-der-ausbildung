console.log('Script started successfully');

import WAE from "./wa-lib";

let wae = new WAE();

wae.init().then(() => {
    wae.popUp("javStep","javDisp","Hallo Welt!",[{
        label: "Link1",
        className: "primary",
        callback: () => {}
    },wae.buttons.close]);
    wae.minimapButton();
});