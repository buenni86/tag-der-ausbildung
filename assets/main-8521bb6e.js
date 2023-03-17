var te=Object.defineProperty;var ne=(n,e,t)=>e in n?te(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var D=(n,e,t)=>(ne(n,typeof e!="symbol"?e+"":e,t),t);class L{constructor(e){this.properties=e??[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const x="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class re{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new L(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function _(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(x+"/configuration.html"+e)}async function oe(n,e){const t=await WA.room.getTiledMap(),r=new Map;return Y(t.layers,r,n,e),r}function Y(n,e,t,r){for(const o of n)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(t&&o.name!==t||r&&!r.includes(s.name))continue;e.set(s.name,new re(s))}}else o.type==="group"&&Y(o.layers,e,t,r)}let G;async function P(){return G===void 0&&(G=se()),G}async function se(){return ie(await WA.room.getTiledMap())}function ie(n){const e=new Map;return Z(n.layers,"",e),e}function Z(n,e,t){for(const r of n)r.type==="group"?Z(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}async function ae(){const n=await P(),e=[];for(const t of n.values())if(t.type==="objectgroup")for(const r of t.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function ue(n){let e=1/0,t=1/0,r=0,o=0;const s=n.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<n.height;i++)for(let a=0;a<n.width;a++)s[a+i*n.width]!==0&&(e=Math.min(e,a),o=Math.max(o,a),t=Math.min(t,i),r=Math.max(r,i));return{top:t,left:e,right:o+1,bottom:r+1}}function z(n){let e=1/0,t=1/0,r=0,o=0;for(const s of n){const i=ue(s);i.left<e&&(e=i.left),i.top<t&&(t=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:t,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ce=Object.prototype.toString,W=Array.isArray||function(e){return ce.call(e)==="[object Array]"};function I(n){return typeof n=="function"}function le(n){return W(n)?"array":typeof n}function V(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function q(n,e){return n!=null&&typeof n=="object"&&e in n}function pe(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var fe=RegExp.prototype.test;function ge(n,e){return fe.call(n,e)}var he=/\S/;function de(n){return!ge(he,n)}var ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ve(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return ye[t]})}var me=/\s*/,be=/\s+/,N=/\s*=/,we=/\s*\}/,Ae=/#|\^|\/|>|\{|&|=|!/;function We(n,e){if(!n)return[];var t=!1,r=[],o=[],s=[],i=!1,a=!1,u="",l=0;function p(){if(i&&!a)for(;s.length;)delete o[s.pop()];else s=[];i=!1,a=!1}var d,v,T;function S(b){if(typeof b=="string"&&(b=b.split(be,2)),!W(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(V(b[0])+"\\s*"),v=new RegExp("\\s*"+V(b[1])),T=new RegExp("\\s*"+V("}"+b[1]))}S(e||h.tags);for(var c=new E(n),m,g,y,C,B,w;!c.eos();){if(m=c.pos,y=c.scanUntil(d),y)for(var R=0,ee=y.length;R<ee;++R)C=y.charAt(R),de(C)?(s.push(o.length),u+=C):(a=!0,t=!0,u+=" "),o.push(["text",C,m,m+1]),m+=1,C===`
`&&(p(),u="",l=0,t=!1);if(!c.scan(d))break;if(i=!0,g=c.scan(Ae)||"name",c.scan(me),g==="="?(y=c.scanUntil(N),c.scan(N),c.scanUntil(v)):g==="{"?(y=c.scanUntil(T),c.scan(we),c.scanUntil(v),g="&"):y=c.scanUntil(v),!c.scan(v))throw new Error("Unclosed tag at "+c.pos);if(g==">"?B=[g,y,m,c.pos,u,l,t]:B=[g,y,m,c.pos],l++,o.push(B),g==="#"||g==="^")r.push(B);else if(g==="/"){if(w=r.pop(),!w)throw new Error('Unopened section "'+y+'" at '+m);if(w[1]!==y)throw new Error('Unclosed section "'+w[1]+'" at '+m)}else g==="name"||g==="{"||g==="&"?a=!0:g==="="&&S(y)}if(p(),w=r.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+c.pos);return Ce(Se(o))}function Se(n){for(var e=[],t,r,o=0,s=n.length;o<s;++o)t=n[o],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function Ce(n){for(var e=[],t=e,r=[],o,s,i=0,a=n.length;i<a;++i)switch(o=n[i],o[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(o)}return e}function E(n){this.string=n,this.tail=n,this.pos=0}E.prototype.eos=function(){return this.tail===""};E.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};E.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function A(n,e){this.view=n,this.cache={".":this.view},this.parent=e}A.prototype.push=function(e){return new A(e,this)};A.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var o=this,s,i,a,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),a=0;s!=null&&a<i.length;)a===i.length-1&&(u=q(s,i[a])||pe(s,i[a])),s=s[i[a++]];else s=o.view[e],u=q(o.view,e);if(u){r=s;break}o=o.parent}t[e]=r}return I(r)&&(r=r.call(this.view)),r};function f(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}f.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};f.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||h.tags).join(":"),s=typeof r<"u",i=s?r.get(o):void 0;return i==null&&(i=We(e,t),s&&r.set(o,i)),i};f.prototype.render=function(e,t,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),a=t instanceof A?t:new A(t,void 0);return this.renderTokens(i,a,r,e,o)};f.prototype.renderTokens=function(e,t,r,o,s){for(var i="",a,u,l,p=0,d=e.length;p<d;++p)l=void 0,a=e[p],u=a[0],u==="#"?l=this.renderSection(a,t,r,o,s):u==="^"?l=this.renderInverted(a,t,r,o,s):u===">"?l=this.renderPartial(a,t,r,s):u==="&"?l=this.unescapedValue(a,t):u==="name"?l=this.escapedValue(a,t,s):u==="text"&&(l=this.rawValue(a)),l!==void 0&&(i+=l);return i};f.prototype.renderSection=function(e,t,r,o,s){var i=this,a="",u=t.lookup(e[1]);function l(v){return i.render(v,t,r,s)}if(u){if(W(u))for(var p=0,d=u.length;p<d;++p)a+=this.renderTokens(e[4],t.push(u[p]),r,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")a+=this.renderTokens(e[4],t.push(u),r,o,s);else if(I(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(t.view,o.slice(e[3],e[5]),l),u!=null&&(a+=u)}else a+=this.renderTokens(e[4],t,r,o,s);return a}};f.prototype.renderInverted=function(e,t,r,o,s){var i=t.lookup(e[1]);if(!i||W(i)&&i.length===0)return this.renderTokens(e[4],t,r,o,s)};f.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)};f.prototype.renderPartial=function(e,t,r,o){if(r){var s=this.getConfigTags(o),i=I(r)?r(e[1]):r[e[1]];if(i!=null){var a=e[6],u=e[5],l=e[4],p=i;u==0&&l&&(p=this.indentPartial(i,l,a));var d=this.parse(p,s);return this.renderTokens(d,t,r,p,o)}}};f.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};f.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||h.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};f.prototype.rawValue=function(e){return e[1]};f.prototype.getConfigTags=function(e){return W(e)?e:e&&typeof e=="object"?e.tags:void 0};f.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!W(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){M.templateCache=n},get templateCache(){return M.templateCache}},M=new f;h.clearCache=function(){return M.clearCache()};h.parse=function(e,t){return M.parse(e,t)};h.render=function(e,t,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+le(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,t,r,o)};h.escape=ve;h.Scanner=E;h.Context=A;h.Writer=f;class J{constructor(e,t){this.template=e,this.state=t,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&t.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,t)}}}async function Le(){var n;const e=await ae();for(const t of e){const r=(n=t.properties)!==null&&n!==void 0?n:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new J(o.value,WA.state);if(s.isPureString())continue;const i=s.getValue();await K(t.name,o.name,i),s.onChange(async a=>{await K(t.name,o.name,a)})}}}async function Me(){var n;const e=await P();for(const[t,r]of e.entries())if(r.type!=="objectgroup"){const o=(n=r.properties)!==null&&n!==void 0?n:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new J(s.value,WA.state);if(i.isPureString())continue;const a=i.getValue();$(t,s.name,a),i.onChange(u=>{$(t,s.name,u)})}}}async function K(n,e,t){console.log(n),(await WA.room.area.get(n)).setProperty(e,t)}function $(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let j,U=0,O=0;function H(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Pe(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=F(n.properties.mustGetString("openLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Ee(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=F(n.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function Q(n){return n.map(e=>j.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function F(n){const e=Q(n),t=z(e),r=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(U-r,2)+Math.pow(O-o,2))}function Te(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?Pe(n):Ee(n),H(n)}),H(n)}function Be(n,e,t,r){const o=n.name;let s,i,a=!1;const u=t.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const p=!!u;function d(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,v()}})}function v(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function T(c){const m=z(Q(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+c,url:r+"/keypad.html#"+encodeURIComponent(c),position:{x:m.right*32,y:m.top*32,width:32*3,height:32*4},allowApi:!0})}function S(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(a=!0,t.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!l||!p)&&(t.getString("code")||t.getString("codeVariable"))){T(o);return}l&&(WA.state[e.name]?d():v())}),WA.room.onLeaveLayer(o).subscribe(()=>{a=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),S()}),WA.state.onVariableChange(e.name).subscribe(()=>{a&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),i&&WA.state[e.name]===!0&&S(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&v())})}function ke(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(n.x-U,2)+Math.pow(n.y-O,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(e).play({volume:r})}function Re(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&ke(n)})}function Ge(n,e,t){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Ve(n){n=n??x;const e=await oe();j=await P();for(const t of e.values())t.properties.get("door")&&Te(t),t.properties.get("bell")&&Re(t);for(const t of j.values()){const r=new L(t.properties),o=r.getString("doorVariable");if(o&&t.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');Be(t,i,r,n)}const s=r.getString("bellVariable");s&&Ge(s,r,t.name)}WA.player.onPlayerMove(t=>{U=t.x,O=t.y})}function je(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),o=n.get("leaveValue"),s=n.getString("triggerMessage"),i=n.getString("tag");xe(t,e,r,o,s,i)}}function xe(n,e,t,r,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function Ie(){const n=await P();for(const e of n.values()){const t=new L(e.properties);je(t,e.name)}}let X;async function Ue(n){const e=await WA.room.getTiledMap();n=n??x,X=await P();const t=e.layers.find(r=>r.name==="configuration");if(t){const o=new L(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const s of X.values()){const i=new L(s.properties),a=i.getString("openConfig");a&&s.type==="tilelayer"&&Oe(a.split(","),s.name,i)}}}function Oe(n,e,t){let r;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=t.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>_(n)})}function a(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=t.getString("openConfigTrigger");s&&(u&&u==="onaction"?i():_(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),a()})}function De(){return WA.onInit().then(()=>{Ve().catch(n=>console.error(n)),Ie().catch(n=>console.error(n)),Ue().catch(n=>console.error(n)),Me().catch(n=>console.error(n)),Le().catch(n=>console.error(n))}).catch(n=>console.error(n))}class _e{constructor(){D(this,"buttons",{close:{label:"Schließen",className:"primary",callback:e=>{e.close()}}})}async init(){WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),De().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(e=>console.error(e))}popUp(e,t,r,o){let s;WA.room.area.onEnter(e).subscribe(()=>{s=WA.ui.openPopup(t,r,o)}),WA.room.area.onLeave(e).subscribe(i);function i(){s!==void 0&&(s.close(),s=void 0)}}modal(e,t,r){WA.ui.modal.openModal({position:"right",title:e,src:t,allow:"fullscreen",allowApi:r})}modalOnArea(e,t,r,o){let s;WA.room.area.onEnter(e).subscribe(()=>{s=WA.ui.modal.openModal({position:"right",title:t,src:r,allow:"fullscreen",allowApi:o})}),WA.room.area.onLeave(e).subscribe(i);function i(){s!==void 0&&(s.close(),s=void 0)}}actionButton(e){WA.ui.actionBar.addButton(e)}minimapButton(){let e;WA.ui.actionBar.addButton({id:"minimap",type:"action",imageSrc:"https://buenni86.github.io/tag-der-ausbildung/src/mapLogo.png",toolTip:"Minimap",callback:()=>{e!==void 0?(e.close(),e=void 0):e=WA.nav.openCoWebSite("https://google.com")}})}}console.log("Script started successfully");let k=new _e;k.init().then(()=>{k.popUp("javStep","javDisp","Hallo Welt!",[{label:"Link1",className:"primary",callback:()=>{}},k.buttons.close]),k.minimapButton()});