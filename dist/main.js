(()=>{"use strict";function l(l){let s={},n=l[0],u=l[1];return s.val=l,s.links=[],n+2>=0&&n+2<=7&&(u+1>=0&&u+1<=7&&s.links.push([n+2,u+1]),u-1>=0&&u-1<=7&&s.links.push([n+2,u-1])),n-2>=0&&n-2<=7&&(u+1>=0&&u+1<=7&&s.links.push([n-2,u+1]),u-1>=0&&u-1<=7&&s.links.push([n-2,u-1])),n+1>=0&&n+1<=7&&(u+2>=0&&u+2<=7&&s.links.push([n+1,u+2]),u-2>=0&&u-2<=7&&s.links.push([n+1,u-2])),n-1>=0&&n-1<=7&&(u+2>=0&&u+2<=7&&s.links.push([n-1,u+2]),u-2>=0&&u-2<=7&&s.links.push([n-1,u-2])),s}function s(s,n){let u=function(){let s=[];for(let n=0;n<8;n++){let u=[];for(let s=0;s<8;s++){let e=l([n,s]);u.push(e)}s.push(u)}return s}();if(s===n)return s;let e=[],t=[],o=u[s[0]][s[1]];e.push([o,[]]);let i=null;for(;0!==e.length;){let l=e.shift(),s=l[0],o=l[1];if(s.links.forEach((l=>{if(l[0]===n[0]&&l[1]===n[1]){let n=[...o];n.push(s.val),n.push(l),null===i&&(i=n)}else if(!t.includes(l)){let n=[...o];n.push(s.val),e.push([u[l[0]][l[1]],n]),t.push(l)}})),null!==i)return i}}console.log(s([2,4],[1,2])),console.log(s([0,0],[3,3])),console.log(s([3,3],[0,0])),console.log(s([0,0],[7,7])),console.log(s([3,2],[7,5]))})();