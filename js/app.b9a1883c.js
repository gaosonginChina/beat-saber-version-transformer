(function(e){function n(n){for(var r,i,s=n[0],u=n[1],c=n[2],l=0,p=[];l<s.length;l++)i=s[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(p.length)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,s=1;s<t.length;s++){var u=t[s];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var f=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"034f":function(e,n,t){"use strict";var r=t("64a9"),a=t.n(r);a.a},"0957":function(e,n){},1:function(e,n){},2:function(e,n){},"58fd":function(e,n){},"64a9":function(e,n,t){},"9bdf":function(e,n,t){},a543:function(e,n,t){"use strict";var r=t("9bdf"),a=t.n(r);a.a},c5da:function(e,n){},cd49:function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("MainView")],1)},o=[],i=t("d225"),s=t("308d"),u=t("6bb5"),c=t("4e2b"),f=t("9ab4"),l=t("60a3"),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("h1",[e._v("Beat Saber Map Transformer")]),t("p",[e._v("Transform the map files from version 1.5 to 2.0.")]),e._m(0),t("p",[t("input",{staticClass:"file-selector",attrs:{type:"file",webkitdirectory:""},on:{input:e.handleChange,change:e.handleChange}})]),t("img",{staticClass:"song-cover",attrs:{src:e.songCover,alt:e.songName}}),e.songName?t("ul",{staticClass:"song-info"},[t("li",[e._v("《"+e._s(e.songName)+"》")]),t("li",[e._v("beatmap version: "+e._s(e.version))])]):e._e(),t("p",{directives:[{name:"show",rawName:"v-show",value:"2.0.0"==e.version,expression:"version == '2.0.0'"}]},[e._v("\n    This is a version 2.0 map, you don't need to transform this map.\n  ")]),t("p",[e.files?t("button",{attrs:{disabled:"1.5.0"!=e.version},on:{click:e.transform}},[e._v("\n      Transform & Save\n    ")]):e._e()]),e.transformed?t("p",[e._v("\n    Unzip the package to the beat saber custom levels folder. Then you should\n    see it in game."),t("br"),e._v("\n    Folder path maybe\n    "),t("code",[e._v("[path to steam]\\Steam\\steamapps\\common\\Beat Saber\\Beat\n      Saber_Data\\CustomLevels\\[song name]")])]):e._e(),t("p",{staticClass:"tip"},[e._v("\n    Open an issue if you have any question or advice using this tool.\n  ")]),t("github-button",{attrs:{href:"https://github.com/xlfsummer/beat-saber-version-transformer","data-size":"large","data-show-count":"true","aria-label":"xlfsummer/beat-saber-version-transformer"}},[e._v("Star")])],1)},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("label",[e._v("Choose the song map "),t("strong",[e._v("folder")]),e._v(" (not zip file):")])])}],d=(t("7f7f"),t("ac6a"),t("768b")),h=(t("5df3"),t("1c4c"),t("96cf"),t("3b8d")),v=t("b0b4"),b=t("013f"),g=(t("6762"),t("2fdb"),t("7618"));t("7514");function w(e){var n,t,r=new FileReader,a=new Promise(function(e,r){n=e,t=r});return r.onload=function(){var e=r.result,t=JSON.parse(e);n(t)},r.onerror=function(){t(r.error)},r.readAsText(e,"utf8"),a}function _(e){var n,t,r=new FileReader,a=new Promise(function(e,r){n=e,t=r});return r.onload=function(){var e=r.result;n(e)},r.onerror=function(){t(r.error)},r.readAsDataURL(e),a}function y(e){var n=e.find(function(e){return/^info\./i.test(e.name)});if(!n)throw new Error("can't find info.dat or info.json");return n}function j(e){return O.apply(this,arguments)}function O(){return O=Object(h["a"])(regeneratorRuntime.mark(function e(n){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=y(n),e.next=3,w(t);case 3:if(r=e.sent,x(r)){e.next=6;break}throw new Error("Song Info not valid");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},e)})),O.apply(this,arguments)}function x(e){return"object"==Object(g["a"])(e)&&e.songName||e._songName}function k(e){return"songName"in e}function N(e){return R.apply(this,arguments)}function R(){return R=Object(h["a"])(regeneratorRuntime.mark(function e(n){var t,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j(n);case 2:return t=e.sent,r="",r=k(t)?t.coverImagePath:t._coverImageFilename,a=n.find(function(e){return e.name==r})||null,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)})),R.apply(this,arguments)}function S(e){return P.apply(this,arguments)}function P(){return P=Object(h["a"])(regeneratorRuntime.mark(function e(n){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N(n);case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,_(t);case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}},e)})),P.apply(this,arguments)}function F(e){return E.apply(this,arguments)}function E(){return E=Object(h["a"])(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j(n);case 2:if(t=e.sent,!k(t)){e.next=7;break}return e.abrupt("return",t.songName);case 7:return e.abrupt("return",t._songName);case 8:case"end":return e.stop()}},e)})),E.apply(this,arguments)}function C(e){return T.apply(this,arguments)}function T(){return T=Object(h["a"])(regeneratorRuntime.mark(function e(n){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j(n);case 2:return t=e.sent,r="",r=k(t)?"1.5.0":t._version,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)})),T.apply(this,arguments)}function A(e,n){return L.apply(this,arguments)}function L(){return L=Object(h["a"])(regeneratorRuntime.mark(function e(n,t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=n.find(function(e){return e.name==t}),r){e.next=3;break}throw new Error("can't find path "+t);case 3:return e.next=5,w(r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)})),L.apply(this,arguments)}var M,I,B,J=t("75fc");t("a481"),t("55dd"),t("0957"),t("c5da"),t("db4a"),t("58fd");function D(e){return U.apply(this,arguments)}function U(){return U=Object(h["a"])(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new $(n),e.abrupt("return",t.transformTo2_0());case 2:case"end":return e.stop()}},e)})),U.apply(this,arguments)}(function(e){e["ExpertPlus"]="ExpertPlus",e["Expert"]="Expert",e["Hard"]="Hard",e["Normal"]="Nomal",e["Easy"]="Easy"})(M||(M={})),function(e){e["Standard"]="Standard",e["OneSaber"]="OneSaber",e["NoArrows"]="NoArrows"}(I||(I={})),function(e){e["Default"]="DefaultEnvironment",e["Nice"]="NiceEnvironment"}(B||(B={}));var $=function(){function e(n){Object(i["a"])(this,e),this.originFiles=null,this.outputFiles=null,this.originFiles=n}return Object(v["a"])(e,[{key:"transformTo2_0",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var n,t,r,a,o,i,s,u,c,f=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this.originFiles,n){e.next=3;break}throw new Error("file not exist!");case 3:return e.next=5,j(n);case 5:if(t=e.sent,k(t)){e.next=8;break}throw new Error("song version not 1.5.0");case 8:return r=t.difficultyLevels[0],e.next=11,A(n,t.difficultyLevels[0].jsonPath);case 11:return a=e.sent,o={_songName:t.songName,_songSubName:t.songSubName,_songAuthorName:t.authorName,_coverImageFilename:t.coverImagePath,_songFilename:r.audioPath,_beatsPerMinute:t.beatsPerMinute,_version:"2.0.0",_shuffle:0,_shufflePeriod:a._shufflePeriod,_environmentName:t.environmentName||B.Default,_previewDuration:t.previewDuration,_difficultyBeatmapSets:[{_beatmapCharacteristicName:I.Standard,_difficultyBeatmaps:t.difficultyLevels.map(function(e){return{_beatmapFilename:e.jsonPath.replace(/\.json$/,".dat"),_difficulty:e.difficulty,_difficultyRank:2*e.difficultyRank-1,_noteJumpMovementSpeed:a._noteJumpSpeed,_noteJumpStartBeatOffset:0}}).sort(function(e,n){return e._difficultyRank-n._difficultyRank})}],_previewStartTime:t.previewStartTime,_songTimeOffset:0},i=new File([JSON.stringify(o)],"Info.dat"),e.next=16,Promise.all(t.difficultyLevels.map(function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A(f.originFiles,n.jsonPath);case 2:return e.t0=e.sent,e.t1=n.jsonPath,e.abrupt("return",[e.t0,e.t1]);case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()));case 16:return e.t0=function(e){var n=Object(d["a"])(e,2),t=n[0],r=n[1];return[{_version:"2.0.0",_events:t._events,_notes:t._notes,_obstacles:t._obstacles},r.replace(/\.json$/,".dat")]},e.t1=function(e){var n=Object(d["a"])(e,2),t=n[0],r=n[1];return new File([JSON.stringify(t)],r)},s=e.sent.map(e.t0).map(e.t1),u=this.originFiles.find(function(e){return e.name==r.audioPath}),c=function(e){return f.originFiles.find(function(n){return e})}(t.coverImagePath),e.abrupt("return",[i,u,c].concat(Object(J["a"])(s)));case 22:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}]),e}(),z=t("7c39"),q=t.n(z);function H(e){var n=document.createElement("a"),t=URL.createObjectURL(e);n.href=t,n.download=e instanceof File?e.name:"download",n.click(),URL.revokeObjectURL(t)}var V=t("e878"),G=function(e){function n(){var e;return Object(i["a"])(this,n),e=Object(s["a"])(this,Object(u["a"])(n).call(this)),e.files=null,e.songInfo=null,e.songName="",e.songCover="",e.version="",e.transformed=!1,e.handleChange=e.handleChange.bind(Object(b["a"])(e)),e}return Object(c["a"])(n,e),Object(v["a"])(n,[{key:"handleChange",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(n){var t,r,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.target,t.files&&t.files.length){e.next=3;break}return e.abrupt("return");case 3:return r=this.files=Array.from(t.files),e.next=6,Promise.all([F(r),S(r).then(function(e){return e||""}),C(r)]);case 6:a=e.sent,o=Object(d["a"])(a,3),this.songName=o[0],this.songCover=o[1],this.version=o[2];case 11:case"end":return e.stop()}},e,this)}));function n(n){return e.apply(this,arguments)}return n}()},{key:"transform",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var n,t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D(this.files);case 2:return n=e.sent,t=new q.a,n.forEach(function(e){return t.file(e.name,e)}),e.t0=File,e.next=8,t.generateAsync({type:"blob"});case 8:e.t1=e.sent,e.t2=[e.t1],e.t3="".concat(this.songName,".zip"),r=new e.t0(e.t2,e.t3),H(r),this.transformed=!0;case 14:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}]),n}(l["b"]);G=f["a"]([Object(l["a"])({components:{GithubButton:V["a"]},data:function(){return{files:null,songInfo:null,songName:"",version:"",transformed:!1}}})],G);var K=G,Q=K,W=(t("a543"),t("2877")),X=Object(W["a"])(Q,p,m,!1,null,"55837d91",null),Y=X.exports,Z=function(e){function n(){return Object(i["a"])(this,n),Object(s["a"])(this,Object(u["a"])(n).apply(this,arguments))}return Object(c["a"])(n,e),n}(l["b"]);Z=f["a"]([Object(l["a"])({components:{MainView:Y}})],Z);var ee=Z,ne=ee,te=(t("034f"),Object(W["a"])(ne,a,o,!1,null,null,null)),re=te.exports,ae=t("2f62");r["a"].use(ae["a"]);var oe=new ae["a"].Store({state:{},mutations:{},actions:{}}),ie=t("9483");Object(ie["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({store:oe,render:function(e){return e(re)}}).$mount("#app")},db4a:function(e,n){}});
//# sourceMappingURL=app.b9a1883c.js.map