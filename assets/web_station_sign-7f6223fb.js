import"./modulepreload-polyfill-ec808ebb.js";(async()=>{var h;var n=await fetch("./station_sign_files/content.json").then(e=>e.json().then(t=>t));const i=document.getElementById("tbr");i.innerHTML="";for(let e of n.tafel.misc.links){let t=document.createElement("a");t.classList.add("impressumLink"),t.setAttribute("href",e.link.to),t.innerHTML=e.link.title,i.appendChild(t)}i.innerHTML+="<span class='logos'><img id='logo-0-0' class='logo' src='./station_sign_files/Logo.gif'></span>",document.getElementById("tafelHeader").innerHTML=n.tafel.misc.header,document.getElementById("col1").innerHTML=n.tafel.misc.gelbeLeiste.col1,document.getElementById("col2").innerHTML=n.tafel.misc.gelbeLeiste.col2,document.getElementById("col3").innerHTML=n.tafel.misc.gelbeLeiste.col3,document.getElementById("col4").innerHTML=n.tafel.misc.gelbeLeiste.col4;const L=document.getElementById("tbody");L.innerHTML="";for(let e of n.tafel.content){let t=document.createElement("tr"),l=document.createElement("td");l.classList.add("cell_time");let d=document.createElement("span");d.classList.add("time"),d.innerHTML=e.eintrag.col1.zeit,l.appendChild(d);let c=document.createElement("span");c.classList.add("tripID"),c.innerHTML=e.eintrag.col1.zugnummer,l.appendChild(c);let f=document.createElement("td"),s=document.createElement("span"),o=document.createElement("span");s.classList.add("to_from"),o.classList.add("additionalStyling"),o.innerHTML=e.eintrag.col2,s.appendChild(o),f.appendChild(s);let E=document.createElement("td"),a=document.createElement("span"),r=document.createElement("span");a.classList.add("path"),r.classList.add("additionalStyling"),r.innerHTML=e.eintrag.col3.whiteText,a.appendChild(r),E.appendChild(a);let m=document.createElement("span"),p=document.createElement("span");m.classList.add("tripMessage"),p.classList.add("additionalStyling"),p.innerHTML=e.eintrag.col3.yellowText,m.appendChild(p),a.appendChild(m);let T=document.createElement("td"),u=document.createElement("span"),g=document.createElement("span");u.classList.add("platform"),g.classList.add("additionalStyling"),g.innerHTML=e.eintrag.col4,u.appendChild(g),T.appendChild(u),t.appendChild(l),t.appendChild(f),t.innerHTML+="<td><span class='wing_symbol'>&nbsp;</span></td>",t.appendChild(E),t.appendChild(T),L.appendChild(t)}if(n.tafel.misc.unterschrift!=""){const e=document.createElement("div");e.classList.add("additionalText"),e.setAttribute("id","disruption"),e.innerHTML=n.tafel.misc.unterschrift,(h=document.getElementById("additionalTextContainer"))==null||h.appendChild(e)}})().catch(n=>console.error(n));
