!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n={born:0,lifespan:30,get name(){return"Plant"},kill:function(){},tick:function(t){}},o=function(){return Object.create(n)},i=function(t){for(var e={board:[],log:[],boardWidth:30,boardHeight:30,tick:function(){this.board.map((function(t){t.soilFertilized,t.entity}))}},r=0;r<e.boardHeight;r++){e.board[r]=[];for(var n=0;n<e.boardWidth;n++)e.board[r][n]={soilFertilized:!0,entity:null}}return e}((function(t){return Math.floor(Math.random()*Math.floor(t+1))})),u=o();i.board[0][0].entity=u;setInterval((function(){console.log("c");for(var t,e="",r=0;r<i.boardHeight;r++){for(var n=0;n<i.boardWidth;n++)e+=null!==(t=i.board[r][n]).entity||t.soilFertilized?null===t.entity?"~":"Plant"===t.entity.name?"Ï":"x":"■";e+="\n"}console.log(e)}),1e3)}]);