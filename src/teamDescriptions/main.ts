import { Root, Description } from "./teamDeclaration";

const urlParams = new URLSearchParams(window.location.search);

const teamName = urlParams.get("name");

async function getDescriptions() {
    const descriptions: Root = await fetch("./descriptions.json").then((r) => r.json()).then((d) => {return d});
    return descriptions.descriptions.filter(function(item){return item.name === teamName})[0];
}

function buildHTMLElement(json: Description){
    const div = document.createElement("div");
    div.classList.add("description");

    const h1 = document.createElement("h1");
    h1.innerHTML = json.fullName;

    const location = document.createElement("p");
    location.classList.add("location")
    location.innerHTML = "Standort/e: " + json.location;

    const p = document.createElement("p");
    p.innerHTML = json.text;

    const mail = document.createElement("p");
    mail.innerHTML = json.mailto;
    mail.addEventListener("click", function (){window.location.href = "mailto:" + json.mailto})

    div.appendChild(h1);
    div.appendChild(location);
    div.appendChild(p);
    return div;
}

async function main() {
    const d = await getDescriptions();
    document.body.appendChild(buildHTMLElement(d));
}

main();

export {}