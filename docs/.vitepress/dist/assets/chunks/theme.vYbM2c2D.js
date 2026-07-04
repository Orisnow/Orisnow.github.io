const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.LQxJK8l7.js","assets/chunks/framework.BtRaMIly.js"])))=>i.map(i=>d[i]);
import{o as ts,a as zt,d as Se,r as ze,b as Ar,c as W,e as D,f as P,n as Ye,w as Cc,g as jn,v as kh,_ as ye,h as zh,i as Ne,j as ie,k as wi,u as rn,l as wa,m as Pc,p as xe,t as De,q as Ce,s as ce,F as st,x as bt,y as Vh,z as ws,A as Ro,B as Ae,C as Co,D as _n,T as ns,E as Hh,G as Gh,H as Ot,I as O,J as Ei,K as dl,L as Wh,M as Rr,N as Po,O as Cr,P as Dc,Q as As,R as Rs,S as fl,U as cn,V as Lc,W as wn,X as $h,Y as Xh,Z as gn,$ as Pr,a0 as qh,a1 as Aa,a2 as Ic,a3 as Yh,a4 as jh,a5 as Nc,a6 as Uc,a7 as Zh,a8 as Kh,a9 as Jh,aa as Qh,ab as eu}from"./framework.BtRaMIly.js";const Do="183",pn={ROTATE:0,DOLLY:1,PAN:2},$n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tu=0,pl=1,nu=2,hr=1,iu=2,ps=3,hi=0,Qt=1,Hn=2,qn=0,qi=1,ml=2,gl=3,_l=4,su=5,Mi=100,ru=101,au=102,ou=103,lu=104,cu=200,hu=201,uu=202,du=203,Ra=204,Ca=205,fu=206,pu=207,mu=208,gu=209,_u=210,vu=211,yu=212,Mu=213,Su=214,Pa=0,Da=1,La=2,Zi=3,Ia=4,Na=5,Ua=6,Fa=7,Dr=0,xu=1,bu=2,An=0,Fc=1,Oc=2,Bc=3,kc=4,zc=5,Vc=6,Hc=7,Gc=300,Ti=301,Ki=302,Vr=303,Hr=304,Lr=306,Oa=1e3,Xn=1001,Ba=1002,Bt=1003,Eu=1004,Ns=1005,Xt=1006,Gr=1007,xi=1008,sn=1009,Wc=1010,$c=1011,Ss=1012,Lo=1013,Ln=1014,En=1015,Zn=1016,Io=1017,No=1018,xs=1020,Xc=35902,qc=35899,Yc=1021,jc=1022,mn=1023,Kn=1026,bi=1027,Zc=1028,Uo=1029,Ji=1030,Fo=1031,Oo=1033,ur=33776,dr=33777,fr=33778,pr=33779,ka=35840,za=35841,Va=35842,Ha=35843,Ga=36196,Wa=37492,$a=37496,Xa=37488,qa=37489,Ya=37490,ja=37491,Za=37808,Ka=37809,Ja=37810,Qa=37811,eo=37812,to=37813,no=37814,io=37815,so=37816,ro=37817,ao=37818,oo=37819,lo=37820,co=37821,ho=36492,uo=36494,fo=36495,po=36283,mo=36284,go=36285,_o=36286,Tu=3200,Bo=0,wu=1,oi="",on="srgb",Qi="srgb-linear",yr="linear",mt="srgb",Li=7680,vl=519,Au=512,Ru=513,Cu=514,ko=515,Pu=516,Du=517,zo=518,Lu=519,yl=35044,Ml="300 es",Tn=2e3,bs=2001;function Iu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nu(){const i=Mr("canvas");return i.style.display="block",i}const Sl={};function xl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Kc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Kc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=Kc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Sr(...i){const e=i.join(" ");e in Sl||(Sl[e]=!0,Ge(...i))}function Uu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Fu={[Pa]:Da,[La]:Ua,[Ia]:Fa,[Zi]:Na,[Da]:Pa,[Ua]:La,[Fa]:Ia,[Na]:Zi};class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_s=Math.PI/180,vo=180/Math.PI;function Cs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function Wr(i,e,t){return(1-t)*i+t*e}function rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bu={DEG2RAD:_s};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],d=n[s+2],m=n[s+3],f=r[a+0],p=r[a+1],v=r[a+2],E=r[a+3];if(m!==E||c!==f||h!==p||d!==v){let _=c*f+h*p+d*v+m*E;_<0&&(f=-f,p=-p,v=-v,E=-E,_=-_);let g=1-o;if(_<.9995){const S=Math.acos(_),w=Math.sin(S);g=Math.sin(g*S)/w,o=Math.sin(o*S)/w,c=c*g+f*o,h=h*g+p*o,d=d*g+v*o,m=m*g+E*o}else{c=c*g+f*o,h=h*g+p*o,d=d*g+v*o,m=m*g+E*o;const S=1/Math.sqrt(c*c+h*h+d*d+m*m);c*=S,h*=S,d*=S,m*=S}}e[t]=c,e[t+1]=h,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],h=n[s+2],d=n[s+3],m=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+d*m+c*p-h*f,e[t+1]=c*v+d*f+h*m-o*p,e[t+2]=h*v+d*p+o*f-c*m,e[t+3]=d*v-o*m-c*f-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),d=o(s/2),m=o(r/2),f=c(n/2),p=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=f*d*m+h*p*v,this._y=h*p*m-f*d*v,this._z=h*d*v+f*p*m,this._w=h*d*m-f*p*v;break;case"YXZ":this._x=f*d*m+h*p*v,this._y=h*p*m-f*d*v,this._z=h*d*v-f*p*m,this._w=h*d*m+f*p*v;break;case"ZXY":this._x=f*d*m-h*p*v,this._y=h*p*m+f*d*v,this._z=h*d*v+f*p*m,this._w=h*d*m-f*p*v;break;case"ZYX":this._x=f*d*m-h*p*v,this._y=h*p*m+f*d*v,this._z=h*d*v-f*p*m,this._w=h*d*m+f*p*v;break;case"YZX":this._x=f*d*m+h*p*v,this._y=h*p*m+f*d*v,this._z=h*d*v-f*p*m,this._w=h*d*m-f*p*v;break;case"XZY":this._x=f*d*m-h*p*v,this._y=h*p*m-f*d*v,this._z=h*d*v+f*p*m,this._w=h*d*m+f*p*v;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],d=t[6],m=t[10],f=n+o+m;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-h)*p,this._z=(a-s)*p}else if(n>o&&n>m){const p=2*Math.sqrt(1+n-o-m);this._w=(d-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+h)/p}else if(o>m){const p=2*Math.sqrt(1+o-n-m);this._w=(r-h)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+h)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,d=t._w;return this._x=n*d+a*o+s*h-r*c,this._y=s*d+a*c+r*o-n*h,this._z=r*d+a*h+n*c-s*o,this._w=a*d-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const h=Math.acos(o),d=Math.sin(h);c=Math.sin(c*h)/d,t=Math.sin(t*h)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*n),d=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+c*h+a*m-o*d,this.y=n+c*d+o*h-r*m,this.z=s+c*m+r*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $r.copy(this).projectOnVector(e),this.sub($r)}reflect(e){return this.sub($r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new z,bl=new ui;class Ke{constructor(e,t,n,s,r,a,o,c,h){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],d=n[4],m=n[7],f=n[2],p=n[5],v=n[8],E=s[0],_=s[3],g=s[6],S=s[1],w=s[4],A=s[7],L=s[2],I=s[5],U=s[8];return r[0]=a*E+o*S+c*L,r[3]=a*_+o*w+c*I,r[6]=a*g+o*A+c*U,r[1]=h*E+d*S+m*L,r[4]=h*_+d*w+m*I,r[7]=h*g+d*A+m*U,r[2]=f*E+p*S+v*L,r[5]=f*_+p*w+v*I,r[8]=f*g+p*A+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],d=e[8];return t*a*d-t*o*h-n*r*d+n*o*c+s*r*h-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],d=e[8],m=d*a-o*h,f=o*c-d*r,p=h*r-a*c,v=t*m+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=m*E,e[1]=(s*h-d*n)*E,e[2]=(o*n-s*a)*E,e[3]=f*E,e[4]=(d*t-s*c)*E,e[5]=(s*r-o*t)*E,e[6]=p*E,e[7]=(n*c-h*t)*E,e[8]=(a*t-n*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Ke,El=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){const i={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qi]:{primaries:e,whitePoint:n,transfer:yr,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const lt=ku();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class zu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ii===void 0&&(Ii=Mr("canvas")),Ii.width=e.width,Ii.height=e.height;const s=Ii.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vu=0;class Vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qr(s[a].image)):r.push(qr(s[a]))}else r=qr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let Hu=0;const Yr=new z;class Zt extends Ai{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=Xn,s=Xn,r=Xt,a=xi,o=mn,c=sn,h=Zt.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Cs(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Gc;Zt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,h=c[0],d=c[4],m=c[8],f=c[1],p=c[5],v=c[9],E=c[2],_=c[6],g=c[10];if(Math.abs(d-f)<.01&&Math.abs(m-E)<.01&&Math.abs(v-_)<.01){if(Math.abs(d+f)<.1&&Math.abs(m+E)<.1&&Math.abs(v+_)<.1&&Math.abs(h+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,A=(p+1)/2,L=(g+1)/2,I=(d+f)/4,U=(m+E)/4,x=(v+_)/4;return w>A&&w>L?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=I/n,r=U/n):A>L?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=I/s,r=x/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=U/r,s=x/r),this.set(n,s,r,t),this}let S=Math.sqrt((_-v)*(_-v)+(m-E)*(m-E)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(_-v)/S,this.y=(m-E)/S,this.z=(f-d)/S,this.w=Math.acos((h+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Zt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Gu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jc extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e,t,n,s,r,a,o,c,h,d,m,f,p,v,E,_){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h,d,m,f,p,v,E,_)}set(e,t,n,s,r,a,o,c,h,d,m,f,p,v,E,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=h,g[6]=d,g[10]=m,g[14]=f,g[3]=p,g[7]=v,g[11]=E,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const f=a*d,p=a*m,v=o*d,E=o*m;t[0]=c*d,t[4]=-c*m,t[8]=h,t[1]=p+v*h,t[5]=f-E*h,t[9]=-o*c,t[2]=E-f*h,t[6]=v+p*h,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,p=c*m,v=h*d,E=h*m;t[0]=f+E*o,t[4]=v*o-p,t[8]=a*h,t[1]=a*m,t[5]=a*d,t[9]=-o,t[2]=p*o-v,t[6]=E+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,p=c*m,v=h*d,E=h*m;t[0]=f-E*o,t[4]=-a*m,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*d,t[9]=E-f*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,p=a*m,v=o*d,E=o*m;t[0]=c*d,t[4]=v*h-p,t[8]=f*h+E,t[1]=c*m,t[5]=E*h+f,t[9]=p*h-v,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*h,v=o*c,E=o*h;t[0]=c*d,t[4]=E-f*m,t[8]=v*m+p,t[1]=m,t[5]=a*d,t[9]=-o*d,t[2]=-h*d,t[6]=p*m+v,t[10]=f-E*m}else if(e.order==="XZY"){const f=a*c,p=a*h,v=o*c,E=o*h;t[0]=c*d,t[4]=-m,t[8]=h*d,t[1]=f*m+E,t[5]=a*d,t[9]=p*m-v,t[2]=v*m-p,t[6]=o*d,t[10]=E*m+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($u,e,Xu)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ti.crossVectors(n,tn),ti.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ti.crossVectors(n,tn)),ti.normalize(),Us.crossVectors(tn,ti),s[0]=ti.x,s[4]=Us.x,s[8]=tn.x,s[1]=ti.y,s[5]=Us.y,s[9]=tn.y,s[2]=ti.z,s[6]=Us.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],d=n[1],m=n[5],f=n[9],p=n[13],v=n[2],E=n[6],_=n[10],g=n[14],S=n[3],w=n[7],A=n[11],L=n[15],I=s[0],U=s[4],x=s[8],R=s[12],Q=s[1],F=s[5],Y=s[9],J=s[13],ne=s[2],K=s[6],Z=s[10],$=s[14],ee=s[3],se=s[7],pe=s[11],he=s[15];return r[0]=a*I+o*Q+c*ne+h*ee,r[4]=a*U+o*F+c*K+h*se,r[8]=a*x+o*Y+c*Z+h*pe,r[12]=a*R+o*J+c*$+h*he,r[1]=d*I+m*Q+f*ne+p*ee,r[5]=d*U+m*F+f*K+p*se,r[9]=d*x+m*Y+f*Z+p*pe,r[13]=d*R+m*J+f*$+p*he,r[2]=v*I+E*Q+_*ne+g*ee,r[6]=v*U+E*F+_*K+g*se,r[10]=v*x+E*Y+_*Z+g*pe,r[14]=v*R+E*J+_*$+g*he,r[3]=S*I+w*Q+A*ne+L*ee,r[7]=S*U+w*F+A*K+L*se,r[11]=S*x+w*Y+A*Z+L*pe,r[15]=S*R+w*J+A*$+L*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],d=e[2],m=e[6],f=e[10],p=e[14],v=e[3],E=e[7],_=e[11],g=e[15],S=c*p-h*f,w=o*p-h*m,A=o*f-c*m,L=a*p-h*d,I=a*f-c*d,U=a*m-o*d;return t*(E*S-_*w+g*A)-n*(v*S-_*L+g*I)+s*(v*w-E*L+g*U)-r*(v*A-E*I+_*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],d=e[8],m=e[9],f=e[10],p=e[11],v=e[12],E=e[13],_=e[14],g=e[15],S=t*o-n*a,w=t*c-s*a,A=t*h-r*a,L=n*c-s*o,I=n*h-r*o,U=s*h-r*c,x=d*E-m*v,R=d*_-f*v,Q=d*g-p*v,F=m*_-f*E,Y=m*g-p*E,J=f*g-p*_,ne=S*J-w*Y+A*F+L*Q-I*R+U*x;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ne;return e[0]=(o*J-c*Y+h*F)*K,e[1]=(s*Y-n*J-r*F)*K,e[2]=(E*U-_*I+g*L)*K,e[3]=(f*I-m*U-p*L)*K,e[4]=(c*Q-a*J-h*R)*K,e[5]=(t*J-s*Q+r*R)*K,e[6]=(_*A-v*U-g*w)*K,e[7]=(d*U-f*A+p*w)*K,e[8]=(a*Y-o*Q+h*x)*K,e[9]=(n*Q-t*Y-r*x)*K,e[10]=(v*I-E*A+g*S)*K,e[11]=(m*A-d*I-p*S)*K,e[12]=(o*R-a*F-c*x)*K,e[13]=(t*F-n*R+s*x)*K,e[14]=(E*w-v*L-_*S)*K,e[15]=(d*L-m*w+f*S)*K,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,d*o+n,d*c-s*a,0,h*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,d=a+a,m=o+o,f=r*h,p=r*d,v=r*m,E=a*d,_=a*m,g=o*m,S=c*h,w=c*d,A=c*m,L=n.x,I=n.y,U=n.z;return s[0]=(1-(E+g))*L,s[1]=(p+A)*L,s[2]=(v-w)*L,s[3]=0,s[4]=(p-A)*I,s[5]=(1-(f+g))*I,s[6]=(_+S)*I,s[7]=0,s[8]=(v+w)*U,s[9]=(_-S)*U,s[10]=(1-(f+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),c=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);const h=1/a,d=1/o,m=1/c;return un.elements[0]*=h,un.elements[1]*=h,un.elements[2]*=h,un.elements[4]*=d,un.elements[5]*=d,un.elements[6]*=d,un.elements[8]*=m,un.elements[9]*=m,un.elements[10]*=m,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Tn,c=!1){const h=this.elements,d=2*r/(t-e),m=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let v,E;if(c)v=r/(a-r),E=a*r/(a-r);else if(o===Tn)v=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===bs)v=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=m,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Tn,c=!1){const h=this.elements,d=2/(t-e),m=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let v,E;if(c)v=1/(a-r),E=a/(a-r);else if(o===Tn)v=-2/(a-r),E=-(a+r)/(a-r);else if(o===bs)v=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=d,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=m,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=v,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new z,un=new St,$u=new z(0,0,0),Xu=new z(1,1,1),ti=new z,Us=new z,tn=new z,wl=new St,Al=new ui;class vn{constructor(e=0,t=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],d=s[9],m=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const Rl=new z,Ui=new ui,Fn=new St,Fs=new z,as=new z,Yu=new z,ju=new ui,Cl=new z(1,0,0),Pl=new z(0,1,0),Dl=new z(0,0,1),Ll={type:"added"},Zu={type:"removed"},Fi={type:"childadded",child:null},jr={type:"childremoved",child:null};class kt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new z,t=new vn,n=new ui,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Ke}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Rl.copy(e).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fs.copy(e):Fs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(as,Fs,this.up):Fn.lookAt(Fs,as,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zu),jr.child=e,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const m=c[h];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),d=a(e.images),m=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const h in o){const d=o[h];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}kt.DEFAULT_UP=new z(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Os extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const E of e.hand.values()){const _=t.getJointPose(E,n),g=this._getHandJoint(h,E);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const d=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],f=d.position.distanceTo(m.position),p=.02,v=.005;h.inputState.pinching&&f>p+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=p-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Kr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Ou(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Kr(a,r,e+1/3),this.g=Kr(a,r,e),this.b=Kr(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return lt.workingToColorSpace(Gt.copy(this),e),Math.round(nt(Gt.r*255,0,255))*65536+Math.round(nt(Gt.g*255,0,255))*256+Math.round(nt(Gt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const d=(o+a)/2;if(o===a)c=0,h=0;else{const m=a-o;switch(h=d<=.5?m/(a+o):m/(2-a-o),a){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=h,e.l=d,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=on){lt.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,s=Gt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Bs);const n=Wr(ni.h,Bs.h,t),s=Wr(ni.s,Bs.s,t),r=Wr(ni.l,Bs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new it;it.NAMES=Qc;class Go extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new z,On=new z,Jr=new z,Bn=new z,Oi=new z,Bi=new z,Il=new z,Qr=new z,ea=new z,ta=new z,na=new wt,ia=new wt,sa=new wt;class ln{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),On.subVectors(n,t),Jr.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(On),c=dn.dot(Jr),h=On.dot(On),d=On.dot(Jr),m=a*h-o*o;if(m===0)return r.set(0,0,0),null;const f=1/m,p=(h*c-o*d)*f,v=(a*d-o*c)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(e,t),ia.fromBufferAttribute(e,n),sa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(na,r.x),a.addScaledVector(ia,r.y),a.addScaledVector(sa,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),On.subVectors(e,t),dn.cross(On).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),dn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Oi.subVectors(s,n),Bi.subVectors(r,n),Qr.subVectors(e,n);const c=Oi.dot(Qr),h=Bi.dot(Qr);if(c<=0&&h<=0)return t.copy(n);ea.subVectors(e,s);const d=Oi.dot(ea),m=Bi.dot(ea);if(d>=0&&m<=d)return t.copy(s);const f=c*m-d*h;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Oi,a);ta.subVectors(e,r);const p=Oi.dot(ta),v=Bi.dot(ta);if(v>=0&&p<=v)return t.copy(r);const E=p*h-c*v;if(E<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(Bi,o);const _=d*v-p*m;if(_<=0&&m-d>=0&&p-v>=0)return Il.subVectors(r,s),o=(m-d)/(m-d+(p-v)),t.copy(s).addScaledVector(Il,o);const g=1/(_+E+f);return a=E*g,o=f*g,t.copy(n).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ps{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),zs.subVectors(this.max,os),ki.subVectors(e.a,os),zi.subVectors(e.b,os),Vi.subVectors(e.c,os),ii.subVectors(zi,ki),si.subVectors(Vi,zi),pi.subVectors(ki,Vi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-pi.z,pi.y,ii.z,0,-ii.x,si.z,0,-si.x,pi.z,0,-pi.x,-ii.y,ii.x,0,-si.y,si.x,0,-pi.y,pi.x,0];return!ra(t,ki,zi,Vi,zs)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,ki,zi,Vi,zs))?!1:(Vs.crossVectors(ii,si),t=[Vs.x,Vs.y,Vs.z],ra(t,ki,zi,Vi,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new z,new z,new z,new z,new z,new z,new z,new z],fn=new z,ks=new Ps,ki=new z,zi=new z,Vi=new z,ii=new z,si=new z,pi=new z,os=new z,zs=new z,Vs=new z,mi=new z;function ra(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=e.dot(mi),h=t.dot(mi),d=n.dot(mi);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>o)return!1}return!0}const Ct=new z,Hs=new He;let Ju=0;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),e}}class eh extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class th extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Qu=new Ps,ls=new z,aa=new z;class Ir{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(aa)),this.expandByPoint(ls.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ed=0;const an=new St,oa=new kt,Hi=new z,nn=new Ps,cs=new Ps,Nt=new z;class qt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iu(e)?th:eh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(nn.min,cs.min),nn.expandByPoint(Nt),Nt.addVectors(nn.max,cs.max),nn.expandByPoint(Nt)):(nn.expandByPoint(cs.min),nn.expandByPoint(cs.max))}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)Nt.fromBufferAttribute(o,h),c&&(Hi.fromBufferAttribute(e,h),Nt.add(Hi)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new z,c[x]=new z;const h=new z,d=new z,m=new z,f=new He,p=new He,v=new He,E=new z,_=new z;function g(x,R,Q){h.fromBufferAttribute(n,x),d.fromBufferAttribute(n,R),m.fromBufferAttribute(n,Q),f.fromBufferAttribute(r,x),p.fromBufferAttribute(r,R),v.fromBufferAttribute(r,Q),d.sub(h),m.sub(h),p.sub(f),v.sub(f);const F=1/(p.x*v.y-v.x*p.y);isFinite(F)&&(E.copy(d).multiplyScalar(v.y).addScaledVector(m,-p.y).multiplyScalar(F),_.copy(m).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(F),o[x].add(E),o[R].add(E),o[Q].add(E),c[x].add(_),c[R].add(_),c[Q].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,R=S.length;x<R;++x){const Q=S[x],F=Q.start,Y=Q.count;for(let J=F,ne=F+Y;J<ne;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const w=new z,A=new z,L=new z,I=new z;function U(x){L.fromBufferAttribute(s,x),I.copy(L);const R=o[x];w.copy(R),w.sub(L.multiplyScalar(L.dot(R))).normalize(),A.crossVectors(I,R);const F=A.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,F)}for(let x=0,R=S.length;x<R;++x){const Q=S[x],F=Q.start,Y=Q.count;for(let J=F,ne=F+Y;J<ne;J+=3)U(e.getX(J+0)),U(e.getX(J+1)),U(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new z,r=new z,a=new z,o=new z,c=new z,h=new z,d=new z,m=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),E=e.getX(f+1),_=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,_),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,_),o.add(d),c.add(d),h.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const h=o.array,d=o.itemSize,m=o.normalized,f=new h.constructor(c.length*d);let p=0,v=0;for(let E=0,_=c.length;E<_;E++){o.isInterleavedBufferAttribute?p=c[E]*o.data.stride+o.offset:p=c[E]*d;for(let g=0;g<d;g++)f[v++]=h[p++]}return new Cn(f,d,m)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=e(c,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let d=0,m=h.length;d<m;d++){const f=h[d],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let m=0,f=h.length;m<f;m++){const p=h[m];d.push(p.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],m=r[h];for(let f=0,p=m.length;f<p;f++)d.push(m[f].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const m=a[h];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let td=0;class Ri extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=qi,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zn=new z,la=new z,Gs=new z,ri=new z,ca=new z,Ws=new z,ha=new z;class Nr{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){la.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(la);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=ri.dot(this.direction),c=-ri.dot(Gs),h=ri.lengthSq(),d=Math.abs(1-a*a);let m,f,p,v;if(d>0)if(m=a*c-o,f=a*o-c,v=r*d,m>=0)if(f>=-v)if(f<=v){const E=1/d;m*=E,f*=E,p=m*(m+a*f+2*o)+f*(a*m+f+2*c)+h}else f=r,m=Math.max(0,-(a*f+o)),p=-m*m+f*(f+2*c)+h;else f=-r,m=Math.max(0,-(a*f+o)),p=-m*m+f*(f+2*c)+h;else f<=-v?(m=Math.max(0,-(-a*r+o)),f=m>0?-r:Math.min(Math.max(-r,-c),r),p=-m*m+f*(f+2*c)+h):f<=v?(m=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+h):(m=Math.max(0,-(a*r+o)),f=m>0?r:Math.min(Math.max(-r,-c),r),p=-m*m+f*(f+2*c)+h);else f=a>0?-r:r,m=Math.max(0,-(a*f+o)),p=-m*m+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(la).addScaledVector(Gs,f),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const h=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-f.z)*m,c=(e.max.z-f.z)*m):(o=(e.max.z-f.z)*m,c=(e.min.z-f.z)*m),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,s,r){ca.subVectors(t,e),Ws.subVectors(n,e),ha.crossVectors(ca,Ws);let a=this.direction.dot(ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const c=o*this.direction.dot(Ws.crossVectors(ri,Ws));if(c<0)return null;const h=o*this.direction.dot(ca.cross(ri));if(h<0||c+h>a)return null;const d=-o*ri.dot(ha);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Es extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Dr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nl=new St,gi=new Nr,$s=new Ir,Ul=new z,Xs=new z,qs=new z,Ys=new z,ua=new z,js=new z,Fl=new z,Zs=new z;class $t extends kt{constructor(e=new qt,t=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const d=o[c],m=r[c];d!==0&&(ua.fromBufferAttribute(m,e),a?js.addScaledVector(ua,d):js.addScaledVector(ua.sub(t),d))}t.add(js)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!($s.containsPoint(gi.origin)===!1&&(gi.intersectSphere($s,Ul)===null||gi.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Nl.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const _=f[v],g=a[_.materialIndex],S=Math.max(_.start,p.start),w=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let A=S,L=w;A<L;A+=3){const I=o.getX(A),U=o.getX(A+1),x=o.getX(A+2);s=Ks(this,g,e,n,h,d,m,I,U,x),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let _=v,g=E;_<g;_+=3){const S=o.getX(_),w=o.getX(_+1),A=o.getX(_+2);s=Ks(this,a,e,n,h,d,m,S,w,A),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const _=f[v],g=a[_.materialIndex],S=Math.max(_.start,p.start),w=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let A=S,L=w;A<L;A+=3){const I=A,U=A+1,x=A+2;s=Ks(this,g,e,n,h,d,m,I,U,x),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),E=Math.min(c.count,p.start+p.count);for(let _=v,g=E;_<g;_+=3){const S=_,w=_+1,A=_+2;s=Ks(this,a,e,n,h,d,m,S,w,A),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function nd(i,e,t,n,s,r,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===hi,o),c===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Zs);return h<t.near||h>t.far?null:{distance:h,point:Zs.clone(),object:i}}function Ks(i,e,t,n,s,r,a,o,c,h){i.getVertexPosition(o,Xs),i.getVertexPosition(c,qs),i.getVertexPosition(h,Ys);const d=nd(i,e,t,n,Xs,qs,Ys,Fl);if(d){const m=new z;ln.getBarycoord(Fl,Xs,qs,Ys,m),s&&(d.uv=ln.getInterpolatedAttribute(s,o,c,h,m,new He)),r&&(d.uv1=ln.getInterpolatedAttribute(r,o,c,h,m,new He)),a&&(d.normal=ln.getInterpolatedAttribute(a,o,c,h,m,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:h,normal:new z,materialIndex:0};ln.getNormal(Xs,qs,Ys,f.normal),d.face=f,d.barycoord=m}return d}class id extends Zt{constructor(e=null,t=1,n=1,s,r,a,o,c,h=Bt,d=Bt,m,f){super(null,a,o,c,h,d,s,r,m,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const da=new z,sd=new z,rd=new Ke;class Vn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=da.subVectors(n,t).cross(sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rd.getNormalMatrix(e),s=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Ir,ad=new He(.5,.5),Js=new z;class Wo{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],h=r[3],d=r[4],m=r[5],f=r[6],p=r[7],v=r[8],E=r[9],_=r[10],g=r[11],S=r[12],w=r[13],A=r[14],L=r[15];if(s[0].setComponents(h-a,p-d,g-v,L-S).normalize(),s[1].setComponents(h+a,p+d,g+v,L+S).normalize(),s[2].setComponents(h+o,p+m,g+E,L+w).normalize(),s[3].setComponents(h-o,p-m,g-E,L-w).normalize(),n)s[4].setComponents(c,f,_,A).normalize(),s[5].setComponents(h-c,p-f,g-_,L-A).normalize();else if(s[4].setComponents(h-c,p-f,g-_,L-A).normalize(),t===Tn)s[5].setComponents(h+c,p+f,g+_,L+A).normalize();else if(t===bs)s[5].setComponents(c,f,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=ad.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xr extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const br=new z,Er=new z,Ol=new St,hs=new Nr,Qs=new Ir,fa=new z,Bl=new z;class ms extends kt{constructor(e=new qt,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)br.fromBufferAttribute(t,s-1),Er.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=br.distanceTo(Er);e.setAttribute("lineDistance",new Ut(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,e.ray.intersectsSphere(Qs)===!1)return;Ol.copy(s).invert(),hs.copy(e.ray).applyMatrix4(Ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let E=p,_=v-1;E<_;E+=h){const g=d.getX(E),S=d.getX(E+1),w=er(this,e,hs,c,g,S,E);w&&t.push(w)}if(this.isLineLoop){const E=d.getX(v-1),_=d.getX(p),g=er(this,e,hs,c,E,_,v-1);g&&t.push(g)}}else{const p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let E=p,_=v-1;E<_;E+=h){const g=er(this,e,hs,c,E,E+1,E);g&&t.push(g)}if(this.isLineLoop){const E=er(this,e,hs,c,v-1,p,v-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function er(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(br.fromBufferAttribute(o,s),Er.fromBufferAttribute(o,r),t.distanceSqToSegment(br,Er,fa,Bl)>n)return;fa.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(fa);if(!(h<e.near||h>e.far))return{distance:h,point:Bl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const kl=new z,zl=new z;class od extends ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)kl.fromBufferAttribute(t,s),zl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kl.distanceTo(zl);e.setAttribute("lineDistance",new Ut(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nh extends Zt{constructor(e=[],t=Ti,n,s,r,a,o,c,h,d){super(e,t,n,s,r,a,o,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ts extends Zt{constructor(e,t,n=Ln,s,r,a,o=Bt,c=Bt,h,d=Kn,m=1){if(d!==Kn&&d!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:m};super(f,s,r,a,o,c,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ld extends Ts{constructor(e,t=Ln,n=Ti,s,r,a=Bt,o=Bt,c,h=Kn){const d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,c,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ih extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ci extends qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],d=[],m=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ut(h,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(m,2));function v(E,_,g,S,w,A,L,I,U,x,R){const Q=A/U,F=L/x,Y=A/2,J=L/2,ne=I/2,K=U+1,Z=x+1;let $=0,ee=0;const se=new z;for(let pe=0;pe<Z;pe++){const he=pe*F-J;for(let me=0;me<K;me++){const We=me*Q-Y;se[E]=We*S,se[_]=he*w,se[g]=ne,h.push(se.x,se.y,se.z),se[E]=0,se[_]=0,se[g]=I>0?1:-1,d.push(se.x,se.y,se.z),m.push(me/U),m.push(1-pe/x),$+=1}}for(let pe=0;pe<x;pe++)for(let he=0;he<U;he++){const me=f+he+K*pe,We=f+he+K*(pe+1),ut=f+(he+1)+K*(pe+1),ct=f+(he+1)+K*pe;c.push(me,We,ct),c.push(We,ut,ct),ee+=6}o.addGroup(p,ee,R),p+=ee,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $o extends qt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),h(n),d(),this.setAttribute("position",new Ut(r,3)),this.setAttribute("normal",new Ut(r.slice(),3)),this.setAttribute("uv",new Ut(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new z,A=new z,L=new z;for(let I=0;I<t.length;I+=3)p(t[I+0],w),p(t[I+1],A),p(t[I+2],L),c(w,A,L,S)}function c(S,w,A,L){const I=L+1,U=[];for(let x=0;x<=I;x++){U[x]=[];const R=S.clone().lerp(A,x/I),Q=w.clone().lerp(A,x/I),F=I-x;for(let Y=0;Y<=F;Y++)Y===0&&x===I?U[x][Y]=R:U[x][Y]=R.clone().lerp(Q,Y/F)}for(let x=0;x<I;x++)for(let R=0;R<2*(I-x)-1;R++){const Q=Math.floor(R/2);R%2===0?(f(U[x][Q+1]),f(U[x+1][Q]),f(U[x][Q])):(f(U[x][Q+1]),f(U[x+1][Q+1]),f(U[x+1][Q]))}}function h(S){const w=new z;for(let A=0;A<r.length;A+=3)w.x=r[A+0],w.y=r[A+1],w.z=r[A+2],w.normalize().multiplyScalar(S),r[A+0]=w.x,r[A+1]=w.y,r[A+2]=w.z}function d(){const S=new z;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const A=_(S)/2/Math.PI+.5,L=g(S)/Math.PI+.5;a.push(A,1-L)}v(),m()}function m(){for(let S=0;S<a.length;S+=6){const w=a[S+0],A=a[S+2],L=a[S+4],I=Math.max(w,A,L),U=Math.min(w,A,L);I>.9&&U<.1&&(w<.2&&(a[S+0]+=1),A<.2&&(a[S+2]+=1),L<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,w){const A=S*3;w.x=e[A+0],w.y=e[A+1],w.z=e[A+2]}function v(){const S=new z,w=new z,A=new z,L=new z,I=new He,U=new He,x=new He;for(let R=0,Q=0;R<r.length;R+=9,Q+=6){S.set(r[R+0],r[R+1],r[R+2]),w.set(r[R+3],r[R+4],r[R+5]),A.set(r[R+6],r[R+7],r[R+8]),I.set(a[Q+0],a[Q+1]),U.set(a[Q+2],a[Q+3]),x.set(a[Q+4],a[Q+5]),L.copy(S).add(w).add(A).divideScalar(3);const F=_(L);E(I,Q+0,S,F),E(U,Q+2,w,F),E(x,Q+4,A,F)}}function E(S,w,A,L){L<0&&S.x===1&&(a[w]=S.x-1),A.x===0&&A.z===0&&(a[w]=L/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.vertices,e.indices,e.radius,e.detail)}}const tr=new z,nr=new z,pa=new z,ir=new ln;class cd extends qt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(_s*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,h=[0,0,0],d=["a","b","c"],m=new Array(3),f={},p=[];for(let v=0;v<c;v+=3){a?(h[0]=a.getX(v),h[1]=a.getX(v+1),h[2]=a.getX(v+2)):(h[0]=v,h[1]=v+1,h[2]=v+2);const{a:E,b:_,c:g}=ir;if(E.fromBufferAttribute(o,h[0]),_.fromBufferAttribute(o,h[1]),g.fromBufferAttribute(o,h[2]),ir.getNormal(pa),m[0]=`${Math.round(E.x*s)},${Math.round(E.y*s)},${Math.round(E.z*s)}`,m[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,m[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let S=0;S<3;S++){const w=(S+1)%3,A=m[S],L=m[w],I=ir[d[S]],U=ir[d[w]],x=`${A}_${L}`,R=`${L}_${A}`;R in f&&f[R]?(pa.dot(f[R].normal)<=r&&(p.push(I.x,I.y,I.z),p.push(U.x,U.y,U.z)),f[R]=null):x in f||(f[x]={index0:h[S],index1:h[w],normal:pa.clone()})}}for(const v in f)if(f[v]){const{index0:E,index1:_}=f[v];tr.fromBufferAttribute(o,E),nr.fromBufferAttribute(o,_),p.push(tr.x,tr.y,tr.z),p.push(nr.x,nr.y,nr.z)}this.setAttribute("position",new Ut(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class hd{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const d=n[s],f=n[s+1]-d,p=(a-d)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new He:new z);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,s=[],r=[],a=[],o=new z,c=new St;for(let p=0;p<=e;p++){const v=p/e;s[p]=this.getTangentAt(v,new z)}r[0]=new z,a[0]=new z;let h=Number.MAX_VALUE;const d=Math.abs(s[0].x),m=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),m<=h&&(h=m,n.set(0,1,0)),f<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(nt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,v))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(nt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],p*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ud extends hd{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new He){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),f=c-this.aX,p=h-this.aY;c=f*d-p*m+this.aX,h=f*m+p*d+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xo extends $o{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xo(e.radius,e.detail)}}class Ur extends qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,d=c+1,m=e/o,f=t/c,p=[],v=[],E=[],_=[];for(let g=0;g<d;g++){const S=g*f-a;for(let w=0;w<h;w++){const A=w*m-r;v.push(A,-S,0),E.push(0,0,1),_.push(w/o),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<o;S++){const w=S+h*g,A=S+h*(g+1),L=S+1+h*(g+1),I=S+1+h*g;p.push(w,A,I),p.push(A,L,I)}this.setIndex(p),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(E,3)),this.setAttribute("uv",new Ut(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}class vs extends qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const d=[],m=new z,f=new z,p=[],v=[],E=[],_=[];for(let g=0;g<=n;g++){const S=[],w=g/n;let A=0;g===0&&a===0?A=.5/t:g===n&&c===Math.PI&&(A=-.5/t);for(let L=0;L<=t;L++){const I=L/t;m.x=-e*Math.cos(s+I*r)*Math.sin(a+w*o),m.y=e*Math.cos(a+w*o),m.z=e*Math.sin(s+I*r)*Math.sin(a+w*o),v.push(m.x,m.y,m.z),f.copy(m).normalize(),E.push(f.x,f.y,f.z),_.push(I+A,1-w),S.push(h++)}d.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const w=d[g][S+1],A=d[g][S],L=d[g+1][S],I=d[g+1][S+1];(g!==0||a>0)&&p.push(w,A,I),(g!==n-1||c<Math.PI)&&p.push(A,L,I)}this.setIndex(p),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(E,3)),this.setAttribute("uv",new Ut(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=es(i[t]);for(const s in n)e[s]=n[s]}return e}function dd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const fd={clone:es,merge:Yt};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gd extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _d extends Ri{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Dr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vl extends Ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Dr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vd extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yd extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Md extends xr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class qo extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ma=new St,Hl=new z,Gl=new z;class rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===bs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sr=new z,rr=new ui,Mn=new z;class ah extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sr,rr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(sr,rr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new z,Wl=new He,$l=new He;class jt extends ah{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Wl,$l),t.subVectors($l,Wl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Sd extends rh{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class xd extends qo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yo extends ah{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bd extends rh{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ed extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new bd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Td extends qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gi=-90,Wi=1;class wd extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(Gi,Wi,e,t);s.layers=this.layers,this.add(s);const r=new jt(Gi,Wi,e,t);r.layers=this.layers,this.add(r);const a=new jt(Gi,Wi,e,t);a.layers=this.layers,this.add(a);const o=new jt(Gi,Wi,e,t);o.layers=this.layers,this.add(o);const c=new jt(Gi,Wi,e,t);c.layers=this.layers,this.add(c);const h=new jt(Gi,Wi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,d]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ad extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xl=new St;class oh{constructor(e,t,n=0,s=1/0){this.ray=new Nr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(e,t=!0,n=[]){return yo(e,this,n,t),n.sort(ql),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)yo(e[s],this,n,t);return n.sort(ql),n}}function ql(i,e){return i.distance-e.distance}function yo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)yo(r[a],e,t,!0)}}class Yl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lh extends Ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ge("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function jl(i,e,t,n){const s=Rd(n);switch(t){case Yc:return i*e;case Zc:return i*e/s.components*s.byteLength;case Uo:return i*e/s.components*s.byteLength;case Ji:return i*e*2/s.components*s.byteLength;case Fo:return i*e*2/s.components*s.byteLength;case jc:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case Oo:return i*e*4/s.components*s.byteLength;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:case Ha:return Math.max(i,16)*Math.max(e,8)/4;case ka:case Va:return Math.max(i,8)*Math.max(e,8)/2;case Ga:case Wa:case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $a:case Ya:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ho:case uo:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case po:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case go:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rd(i){switch(i){case sn:case Wc:return{byteLength:1,components:1};case Ss:case $c:case Zn:return{byteLength:2,components:1};case Io:case No:return{byteLength:2,components:4};case Ln:case Lo:case En:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);function ch(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cd(i){const e=new WeakMap;function t(o,c){const h=o.array,d=o.usage,m=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,d),o.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,h){const d=c.array,m=c.updateRanges;if(i.bindBuffer(h,o),m.length===0)i.bufferSubData(h,0,d);else{m.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<m.length;p++){const v=m[f],E=m[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,m[f]=E)}m.length=f+1;for(let p=0,v=m.length;p<v;p++){const E=m[p];i.bufferSubData(h,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,If=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Pd,alphahash_pars_fragment:Dd,alphamap_fragment:Ld,alphamap_pars_fragment:Id,alphatest_fragment:Nd,alphatest_pars_fragment:Ud,aomap_fragment:Fd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:kd,begin_vertex:zd,beginnormal_vertex:Vd,bsdfs:Hd,iridescence_fragment:Gd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Yd,color_fragment:jd,color_pars_fragment:Zd,color_pars_vertex:Kd,color_vertex:Jd,common:Qd,cube_uv_reflection_fragment:ef,defaultnormal_vertex:tf,displacementmap_pars_vertex:nf,displacementmap_vertex:sf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:hf,envmap_pars_fragment:uf,envmap_pars_vertex:df,envmap_physical_pars_fragment:bf,envmap_vertex:ff,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:_f,gradientmap_pars_fragment:vf,lightmap_pars_fragment:yf,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:Sf,lights_pars_begin:xf,lights_toon_fragment:Ef,lights_toon_pars_fragment:Tf,lights_phong_fragment:wf,lights_phong_pars_fragment:Af,lights_physical_fragment:Rf,lights_physical_pars_fragment:Cf,lights_fragment_begin:Pf,lights_fragment_maps:Df,lights_fragment_end:Lf,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Ff,map_fragment:Of,map_pars_fragment:Bf,map_particle_fragment:kf,map_particle_pars_fragment:zf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Gf,morphcolor_vertex:Wf,morphnormal_vertex:$f,morphtarget_pars_vertex:Xf,morphtarget_vertex:qf,normal_fragment_begin:Yf,normal_fragment_maps:jf,normal_pars_fragment:Zf,normal_pars_vertex:Kf,normal_vertex:Jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:sp,packing:rp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:_p,skinning_vertex:vp,skinnormal_vertex:yp,specularmap_fragment:Mp,specularmap_pars_fragment:Sp,tonemapping_fragment:xp,tonemapping_pars_fragment:bp,transmission_fragment:Ep,transmission_pars_fragment:Tp,uv_pars_fragment:wp,uv_pars_vertex:Ap,uv_vertex:Rp,worldpos_vertex:Cp,background_vert:Pp,background_frag:Dp,backgroundCube_vert:Lp,backgroundCube_frag:Ip,cube_vert:Np,cube_frag:Up,depth_vert:Fp,depth_frag:Op,distance_vert:Bp,distance_frag:kp,equirect_vert:zp,equirect_frag:Vp,linedashed_vert:Hp,linedashed_frag:Gp,meshbasic_vert:Wp,meshbasic_frag:$p,meshlambert_vert:Xp,meshlambert_frag:qp,meshmatcap_vert:Yp,meshmatcap_frag:jp,meshnormal_vert:Zp,meshnormal_frag:Kp,meshphong_vert:Jp,meshphong_frag:Qp,meshphysical_vert:em,meshphysical_frag:tm,meshtoon_vert:nm,meshtoon_frag:im,points_vert:sm,points_frag:rm,shadow_vert:am,shadow_frag:om,sprite_vert:lm,sprite_frag:cm},Ee={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},bn={basic:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Yt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Yt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Yt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Yt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Yt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Yt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Yt([Ee.common,Ee.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Yt([Ee.lights,Ee.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};bn.physical={uniforms:Yt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const ar={r:0,b:0,g:0},vi=new vn,hm=new St;function um(i,e,t,n,s,r){const a=new it(0);let o=s===!0?0:1,c,h,d=null,m=0,f=null;function p(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const A=S.backgroundBlurriness>0;w=e.get(w,A)}return w}function v(S){let w=!1;const A=p(S);A===null?_(a,o):A&&A.isColor&&(_(A,1),w=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(S,w){const A=p(w);A&&(A.isCubeTexture||A.mapping===Lr)?(h===void 0&&(h=new $t(new Ci(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:es(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),vi.copy(w.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(vi)),h.material.toneMapped=lt.getTransfer(A.colorSpace)!==mt,(d!==A||m!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,m=A.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new $t(new Ur(2,2),new In({name:"BackgroundMaterial",uniforms:es(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=lt.getTransfer(A.colorSpace)!==mt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||m!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,m=A.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function _(S,w){S.getRGB(ar,sh(i)),t.buffers.color.setClear(ar.r,ar.g,ar.b,w,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,_(a,o)},render:v,addToRenderList:E,dispose:g}}function dm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(F,Y,J,ne,K){let Z=!1;const $=m(F,ne,J,Y);r!==$&&(r=$,h(r.object)),Z=p(F,ne,J,K),Z&&v(F,ne,J,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,A(F,Y,J,ne),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function h(F){return i.bindVertexArray(F)}function d(F){return i.deleteVertexArray(F)}function m(F,Y,J,ne){const K=ne.wireframe===!0;let Z=n[Y.id];Z===void 0&&(Z={},n[Y.id]=Z);const $=F.isInstancedMesh===!0?F.id:0;let ee=Z[$];ee===void 0&&(ee={},Z[$]=ee);let se=ee[J.id];se===void 0&&(se={},ee[J.id]=se);let pe=se[K];return pe===void 0&&(pe=f(c()),se[K]=pe),pe}function f(F){const Y=[],J=[],ne=[];for(let K=0;K<t;K++)Y[K]=0,J[K]=0,ne[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:J,attributeDivisors:ne,object:F,attributes:{},index:null}}function p(F,Y,J,ne){const K=r.attributes,Z=Y.attributes;let $=0;const ee=J.getAttributes();for(const se in ee)if(ee[se].location>=0){const he=K[se];let me=Z[se];if(me===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),he===void 0||he.attribute!==me||me&&he.data!==me.data)return!0;$++}return r.attributesNum!==$||r.index!==ne}function v(F,Y,J,ne){const K={},Z=Y.attributes;let $=0;const ee=J.getAttributes();for(const se in ee)if(ee[se].location>=0){let he=Z[se];he===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(he=F.instanceColor));const me={};me.attribute=he,he&&he.data&&(me.data=he.data),K[se]=me,$++}r.attributes=K,r.attributesNum=$,r.index=ne}function E(){const F=r.newAttributes;for(let Y=0,J=F.length;Y<J;Y++)F[Y]=0}function _(F){g(F,0)}function g(F,Y){const J=r.newAttributes,ne=r.enabledAttributes,K=r.attributeDivisors;J[F]=1,ne[F]===0&&(i.enableVertexAttribArray(F),ne[F]=1),K[F]!==Y&&(i.vertexAttribDivisor(F,Y),K[F]=Y)}function S(){const F=r.newAttributes,Y=r.enabledAttributes;for(let J=0,ne=Y.length;J<ne;J++)Y[J]!==F[J]&&(i.disableVertexAttribArray(J),Y[J]=0)}function w(F,Y,J,ne,K,Z,$){$===!0?i.vertexAttribIPointer(F,Y,J,K,Z):i.vertexAttribPointer(F,Y,J,ne,K,Z)}function A(F,Y,J,ne){E();const K=ne.attributes,Z=J.getAttributes(),$=Y.defaultAttributeValues;for(const ee in Z){const se=Z[ee];if(se.location>=0){let pe=K[ee];if(pe===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(pe=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(pe=F.instanceColor)),pe!==void 0){const he=pe.normalized,me=pe.itemSize,We=e.get(pe);if(We===void 0)continue;const ut=We.buffer,ct=We.type,ae=We.bytesPerElement,ge=ct===i.INT||ct===i.UNSIGNED_INT||pe.gpuType===Lo;if(pe.isInterleavedBufferAttribute){const fe=pe.data,Xe=fe.stride,Ve=pe.offset;if(fe.isInstancedInterleavedBuffer){for(let $e=0;$e<se.locationSize;$e++)g(se.location+$e,fe.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let $e=0;$e<se.locationSize;$e++)_(se.location+$e);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let $e=0;$e<se.locationSize;$e++)w(se.location+$e,me/se.locationSize,ct,he,Xe*ae,(Ve+me/se.locationSize*$e)*ae,ge)}else{if(pe.isInstancedBufferAttribute){for(let fe=0;fe<se.locationSize;fe++)g(se.location+fe,pe.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let fe=0;fe<se.locationSize;fe++)_(se.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let fe=0;fe<se.locationSize;fe++)w(se.location+fe,me/se.locationSize,ct,he,me*ae,me/se.locationSize*fe*ae,ge)}}else if($!==void 0){const he=$[ee];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(se.location,he);break;case 3:i.vertexAttrib3fv(se.location,he);break;case 4:i.vertexAttrib4fv(se.location,he);break;default:i.vertexAttrib1fv(se.location,he)}}}}S()}function L(){R();for(const F in n){const Y=n[F];for(const J in Y){const ne=Y[J];for(const K in ne){const Z=ne[K];for(const $ in Z)d(Z[$].object),delete Z[$];delete ne[K]}}delete n[F]}}function I(F){if(n[F.id]===void 0)return;const Y=n[F.id];for(const J in Y){const ne=Y[J];for(const K in ne){const Z=ne[K];for(const $ in Z)d(Z[$].object),delete Z[$];delete ne[K]}}delete n[F.id]}function U(F){for(const Y in n){const J=n[Y];for(const ne in J){const K=J[ne];if(K[F.id]===void 0)continue;const Z=K[F.id];for(const $ in Z)d(Z[$].object),delete Z[$];delete K[F.id]}}}function x(F){for(const Y in n){const J=n[Y],ne=F.isInstancedMesh===!0?F.id:0,K=J[ne];if(K!==void 0){for(const Z in K){const $=K[Z];for(const ee in $)d($[ee].object),delete $[ee];delete K[Z]}delete J[ne],Object.keys(J).length===0&&delete n[Y]}}}function R(){Q(),a=!0,r!==s&&(r=s,h(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:Q,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfObject:x,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:_,disableUnusedAttributes:S}}function fm(i,e,t){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),t.update(d,n,1)}function a(h,d,m){m!==0&&(i.drawArraysInstanced(n,h,d,m),t.update(d,n,m))}function o(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,m);let p=0;for(let v=0;v<m;v++)p+=d[v];t.update(p,n,1)}function c(h,d,m,f){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h.length;v++)a(h[v],d[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,h,0,d,0,f,0,m);let v=0;for(let E=0;E<m;E++)v+=d[E]*f[E];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function pm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==mn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const x=U===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==sn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==En&&!x)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=c(h);d!==h&&(Ge("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const m=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:A,maxSamples:L,samples:I}}function mm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Vn,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const p=m.length!==0||f||n!==0||s;return s=f,n=m.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,f){t=d(m,f,0)},this.setState=function(m,f,p){const v=m.clippingPlanes,E=m.clipIntersection,_=m.clipShadows,g=i.get(m);if(!s||v===null||v.length===0||r&&!_)r?d(null):h();else{const S=r?0:n,w=S*4;let A=g.clippingState||null;c.value=A,A=d(v,f,w,p);for(let L=0;L!==w;++L)A[L]=t[L];g.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,f,p,v){const E=m!==null?m.length:0;let _=null;if(E!==0){if(_=c.value,v!==!0||_===null){const g=p+E*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(_===null||_.length<g)&&(_=new Float32Array(g));for(let w=0,A=p;w!==E;++w,A+=4)a.copy(m[w]).applyMatrix4(S,o),a.normal.toArray(_,A),_[A+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}const li=4,Zl=[.125,.215,.35,.446,.526,.582],Si=20,gm=256,us=new Yo,Kl=new it;let ga=null,_a=0,va=0,ya=!1;const _m=new z;class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=_m}=r;ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,_a,va),this._renderer.xr.enabled=ya,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Zn,format:mn,colorSpace:Qi,depthBuffer:!1},s=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vm(r)),this._blurMaterial=Mm(r,e,t),this._ggxMaterial=ym(r,e,t)}return s}_compileMaterial(e){const t=new $t(new qt,e);this._renderer.compile(t,us)}_sceneToCubeUV(e,t,n,s,r){const c=new jt(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,f=m.autoClear,p=m.toneMapping;m.getClearColor(Kl),m.toneMapping=An,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new Ci,new Es({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,_=E.material;let g=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,g=!0):(_.color.copy(Kl),g=!0);for(let w=0;w<6;w++){const A=w%3;A===0?(c.up.set(0,h[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):A===1?(c.up.set(0,0,h[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,h[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));const L=this._cubeSize;$i(s,A*L,w>2?L:0,L,L),m.setRenderTarget(s),g&&m.render(E,c),m.render(e,c)}m.toneMapping=p,m.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ti||e.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;$i(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,h=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-d*d),f=0+h*1.25,p=m*f,{_lodMax:v}=this,E=this._sizeLods[n],_=3*E*(n>v-li?n-v+li:0),g=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=v-t,$i(r,_,g,3*E,2*E),s.setRenderTarget(r),s.render(o,us),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,$i(e,_,g,3*E,2*E),s.setRenderTarget(e),s.render(o,us)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const d=3,m=this._lodMeshes[s];m.material=h;const f=h.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),E=r/v,_=isFinite(r)?1+Math.floor(d*E):Si;_>Si&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Si}`);const g=[];let S=0;for(let U=0;U<Si;++U){const x=U/E,R=Math.exp(-x*x/2);g.push(R),U===0?S+=R:U<_&&(S+=2*R)}for(let U=0;U<g.length;U++)g[U]=g[U]/S;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=v,f.mipInt.value=w-n;const A=this._sizeLods[s],L=3*A*(s>w-li?s-w+li:0),I=4*(this._cubeSize-A);$i(t,L,I,3*A,2*A),c.setRenderTarget(t),c.render(m,us)}}function vm(i){const e=[],t=[],n=[];let s=i;const r=i-li+1+Zl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-li?c=Zl[a-i+li-1]:a===0&&(c=0),t.push(c);const h=1/(o-2),d=-h,m=1+h,f=[d,d,m,d,m,m,d,d,m,m,d,m],p=6,v=6,E=3,_=2,g=1,S=new Float32Array(E*v*p),w=new Float32Array(_*v*p),A=new Float32Array(g*v*p);for(let I=0;I<p;I++){const U=I%3*2/3-1,x=I>2?0:-1,R=[U,x,0,U+2/3,x,0,U+2/3,x+1,0,U,x,0,U+2/3,x+1,0,U,x+1,0];S.set(R,E*v*I),w.set(f,_*v*I);const Q=[I,I,I,I,I,I];A.set(Q,g*v*I)}const L=new qt;L.setAttribute("position",new Cn(S,E)),L.setAttribute("uv",new Cn(w,_)),L.setAttribute("faceIndex",new Cn(A,g)),n.push(new $t(L,null)),s>li&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ql(i,e,t){const n=new Rn(i,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ym(i,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Mm(i,e,t){const n=new Float32Array(Si),s=new z(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ec(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function tc(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Fr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class hh extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ci(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:qn});r.uniforms.tEquirect.value=t;const a=new $t(s,r),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Xt),new wd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Sm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===Vr||p===Hr)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const E=new hh(v.height);return E.fromEquirectangularTexture(i,f),e.set(f,E),f.addEventListener("dispose",h),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,v=p===Vr||p===Hr,E=p===Ti||p===Ki;if(v||E){let _=t.get(f);const g=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Jl(i)),_=v?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return v&&S&&S.height>0||E&&S&&c(S)?(n===null&&(n=new Jl(i)),_=v?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",d),_.texture):null}}}return f}function o(f,p){return p===Vr?f.mapping=Ti:p===Hr&&(f.mapping=Ki),f}function c(f){let p=0;const v=6;for(let E=0;E<v;E++)f[E]!==void 0&&p++;return p===v}function h(f){const p=f.target;p.removeEventListener("dispose",h);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function xm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Sr("WebGLRenderer: "+n+" extension not supported."),s}}}function bm(i,e,t,n){const s={},r=new WeakMap;function a(m){const f=m.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(m,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(m){const f=m.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function h(m){const f=[],p=m.index,v=m.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const S=p.array;E=p.version;for(let w=0,A=S.length;w<A;w+=3){const L=S[w+0],I=S[w+1],U=S[w+2];f.push(L,I,I,U,U,L)}}else{const S=v.array;E=v.version;for(let w=0,A=S.length/3-1;w<A;w+=3){const L=w+0,I=w+1,U=w+2;f.push(L,I,I,U,U,L)}}const _=new(v.count>=65535?th:eh)(f,1);_.version=E;const g=r.get(m);g&&e.remove(g),r.set(m,_)}function d(m){const f=r.get(m);if(f){const p=m.index;p!==null&&f.version<p.version&&h(m)}else h(m);return r.get(m)}return{get:o,update:c,getWireframeAttribute:d}}function Em(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function h(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*a,v),t.update(p,n,v))}function d(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let _=0;for(let g=0;g<v;g++)_+=p[g];t.update(_,n,1)}function m(f,p,v,E){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f.length;g++)h(f[g]/a,p[g],E[g]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,E,0,v);let g=0;for(let S=0;S<v;S++)g+=p[S]*E[S];t.update(g,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Tm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wm(i,e,t){const n=new WeakMap,s=new wt;function r(a,o,c){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==m){let p=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",p)};f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let A=0;v===!0&&(A=1),E===!0&&(A=2),_===!0&&(A=3);let L=o.attributes.position.count*A,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const U=new Float32Array(L*I*4*m),x=new Jc(U,L,I,m);x.type=En,x.needsUpdate=!0;const R=A*4;for(let Q=0;Q<m;Q++){const F=g[Q],Y=S[Q],J=w[Q],ne=L*I*4*Q;for(let K=0;K<F.count;K++){const Z=K*R;v===!0&&(s.fromBufferAttribute(F,K),U[ne+Z+0]=s.x,U[ne+Z+1]=s.y,U[ne+Z+2]=s.z,U[ne+Z+3]=0),E===!0&&(s.fromBufferAttribute(Y,K),U[ne+Z+4]=s.x,U[ne+Z+5]=s.y,U[ne+Z+6]=s.z,U[ne+Z+7]=0),_===!0&&(s.fromBufferAttribute(J,K),U[ne+Z+8]=s.x,U[ne+Z+9]=s.y,U[ne+Z+10]=s.z,U[ne+Z+11]=J.itemSize===4?s.w:1)}}f={count:m,texture:x,size:new He(L,I)},n.set(o,f),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let E=0;E<h.length;E++)p+=h[E];const v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Am(i,e,t,n,s){let r=new WeakMap;function a(h){const d=s.render.frame,m=h.geometry,f=e.get(h,m);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const p=h.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return f}function o(){r=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Rm={[Fc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[kc]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[zc]:"CUSTOM_TONE_MAPPING"};function Cm(i,e,t,n,s){const r=new Rn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Rn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),o=new qt;o.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ut([0,2,0,0,2,0],2));const c=new gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new $t(o,c),d=new Yo(-1,1,1,-1,0,1);let m=null,f=null,p=!1,v,E=null,_=[],g=!1;this.setSize=function(S,w){r.setSize(S,w),a.setSize(S,w);for(let A=0;A<_.length;A++){const L=_[A];L.setSize&&L.setSize(S,w)}},this.setEffects=function(S){_=S,g=_.length>0&&_[0].isRenderPass===!0;const w=r.width,A=r.height;for(let L=0;L<_.length;L++){const I=_[L];I.setSize&&I.setSize(w,A)}},this.begin=function(S,w){if(p||S.toneMapping===An&&_.length===0)return!1;if(E=w,w!==null){const A=w.width,L=w.height;(r.width!==A||r.height!==L)&&this.setSize(A,L)}return g===!1&&S.setRenderTarget(r),v=S.toneMapping,S.toneMapping=An,!0},this.hasRenderPass=function(){return g},this.end=function(S,w){S.toneMapping=v,p=!0;let A=r,L=a;for(let I=0;I<_.length;I++){const U=_[I];if(U.enabled!==!1&&(U.render(S,L,A,w),U.needsSwap!==!1)){const x=A;A=L,L=x}}if(m!==S.outputColorSpace||f!==S.toneMapping){m=S.outputColorSpace,f=S.toneMapping,c.defines={},lt.getTransfer(m)===mt&&(c.defines.SRGB_TRANSFER="");const I=Rm[f];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(E),S.render(h,d),E=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const uh=new Zt,Mo=new Ts(1,1),dh=new Jc,fh=new Wu,ph=new nh,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),ac=new Float32Array(4);function is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=nc[s];if(r===void 0&&(r=new Float32Array(s),nc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Or(i,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),Lt(t,n)}}function Um(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),Lt(t,n)}}function Fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),Lt(t,n)}}function Om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Vm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function $m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mo.compareFunction=t.isReversedDepthBuffer()?zo:ko,r=Mo):r=uh,t.setTexture2D(e||r,s)}function Xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fh,s)}function qm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ph,s)}function Ym(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dh,s)}function jm(i){switch(i){case 5126:return Pm;case 35664:return Dm;case 35665:return Lm;case 35666:return Im;case 35674:return Nm;case 35675:return Um;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return km;case 35669:case 35673:return zm;case 5125:return Vm;case 36294:return Hm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}function Zm(i,e){i.uniform1fv(this.addr,e)}function Km(i,e){const t=is(e,this.size,2);i.uniform2fv(this.addr,t)}function Jm(i,e){const t=is(e,this.size,3);i.uniform3fv(this.addr,t)}function Qm(i,e){const t=is(e,this.size,4);i.uniform4fv(this.addr,t)}function eg(i,e){const t=is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tg(i,e){const t=is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ng(i,e){const t=is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ig(i,e){i.uniform1iv(this.addr,e)}function sg(i,e){i.uniform2iv(this.addr,e)}function rg(i,e){i.uniform3iv(this.addr,e)}function ag(i,e){i.uniform4iv(this.addr,e)}function og(i,e){i.uniform1uiv(this.addr,e)}function lg(i,e){i.uniform2uiv(this.addr,e)}function cg(i,e){i.uniform3uiv(this.addr,e)}function hg(i,e){i.uniform4uiv(this.addr,e)}function ug(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mo:a=uh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function dg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fh,r[a])}function fg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ph,r[a])}function pg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||dh,r[a])}function mg(i){switch(i){case 5126:return Zm;case 35664:return Km;case 35665:return Jm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}class gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jm(t.type)}}class _g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mg(t.type)}}class vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function oc(i,e){i.seq.push(e),i.map[e.id]=e}function yg(i,e,t){const n=i.name,s=n.length;for(Ma.lastIndex=0;;){const r=Ma.exec(n),a=Ma.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){oc(t,h===void 0?new gg(o,i,e):new _g(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new vg(o),oc(t,m)),t=m}}}class mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);yg(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Mg=37297;let Sg=0;function xg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const cc=new Ke;function bg(i){lt._getMatrix(cc,lt.workingColorSpace,i);const e=`mat3( ${cc.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case yr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xg(i.getShaderSource(e),o)}else return r}function Eg(i,e){const t=bg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Tg={[Fc]:"Linear",[Oc]:"Reinhard",[Bc]:"Cineon",[kc]:"ACESFilmic",[Vc]:"AgX",[Hc]:"Neutral",[zc]:"Custom"};function wg(i,e){const t=Tg[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const or=new z;function Ag(){lt.getLuminanceCoefficients(or);const i=or.x.toFixed(4),e=or.y.toFixed(4),t=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Cg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gs(i){return i!==""}function uc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(i){return i.replace(Dg,Ig)}const Lg=new Map;function Ig(i,e){let t=Qe[e];if(t===void 0){const n=Lg.get(e);if(n!==void 0)t=Qe[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return So(t)}const Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(i){return i.replace(Ng,Ug)}function Ug(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Fg={[hr]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function Og(i){return Fg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bg={[Ti]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function kg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Bg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const zg={[Ki]:"ENVMAP_MODE_REFRACTION"};function Vg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hg={[Dr]:"ENVMAP_BLENDING_MULTIPLY",[xu]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function Gg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Hg[i.combine]||"ENVMAP_BLENDING_NONE"}function Wg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $g(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Og(t),h=kg(t),d=Vg(t),m=Gg(t),f=Wg(t),p=Rg(t),v=Cg(r),E=s.createProgram();let _,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(gs).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(gs).join(`
`),g.length>0&&(g+=`
`)):(_=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),g=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Qe.tonemapping_pars_fragment:"",t.toneMapping!==An?wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Eg("linearToOutputTexel",t.outputColorSpace),Ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),a=So(a),a=uc(a,t),a=dc(a,t),o=So(o),o=uc(o,t),o=dc(o,t),a=fc(a),o=fc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=S+_+a,A=S+g+o,L=lc(s,s.VERTEX_SHADER,w),I=lc(s,s.FRAGMENT_SHADER,A);s.attachShader(E,L),s.attachShader(E,I),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function U(F){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(E)||"",J=s.getShaderInfoLog(L)||"",ne=s.getShaderInfoLog(I)||"",K=Y.trim(),Z=J.trim(),$=ne.trim();let ee=!0,se=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,L,I);else{const pe=hc(s,L,"vertex"),he=hc(s,I,"fragment");ot("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+K+`
`+pe+`
`+he)}else K!==""?Ge("WebGLProgram: Program Info Log:",K):(Z===""||$==="")&&(se=!1);se&&(F.diagnostics={runnable:ee,programLog:K,vertexShader:{log:Z,prefix:_},fragmentShader:{log:$,prefix:g}})}s.deleteShader(L),s.deleteShader(I),x=new mr(s,E),R=Pg(s,E)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=s.getProgramParameter(E,Mg)),Q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sg++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=I,this}let Xg=0;class qg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yg(e),t.set(e,n)),n}}class Yg{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}}function jg(i,e,t,n,s,r){const a=new Ho,o=new qg,c=new Set,h=[],d=new Map,m=n.logarithmicDepthBuffer;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function E(x,R,Q,F,Y){const J=F.fog,ne=Y.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||K,Z),ee=$&&$.mapping===Lr?$.image.height:null,se=p[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const pe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,he=pe!==void 0?pe.length:0;let me=0;ne.morphAttributes.position!==void 0&&(me=1),ne.morphAttributes.normal!==void 0&&(me=2),ne.morphAttributes.color!==void 0&&(me=3);let We,ut,ct,ae;if(se){const pt=bn[se];We=pt.vertexShader,ut=pt.fragmentShader}else We=x.vertexShader,ut=x.fragmentShader,o.update(x),ct=o.getVertexShaderID(x),ae=o.getFragmentShaderID(x);const ge=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Xe=Y.isInstancedMesh===!0,Ve=Y.isBatchedMesh===!0,$e=!!x.map,At=!!x.matcap,Je=!!$,rt=!!x.aoMap,ft=!!x.lightMap,Ze=!!x.bumpMap,xt=!!x.normalMap,B=!!x.displacementMap,Et=!!x.emissiveMap,at=!!x.metalnessMap,dt=!!x.roughnessMap,Re=x.anisotropy>0,C=x.clearcoat>0,M=x.dispersion>0,V=x.iridescence>0,le=x.sheen>0,y=x.transmission>0,l=Re&&!!x.anisotropyMap,u=C&&!!x.clearcoatMap,b=C&&!!x.clearcoatNormalMap,N=C&&!!x.clearcoatRoughnessMap,H=V&&!!x.iridescenceMap,k=V&&!!x.iridescenceThicknessMap,oe=le&&!!x.sheenColorMap,Me=le&&!!x.sheenRoughnessMap,_e=!!x.specularMap,ue=!!x.specularColorMap,Pe=!!x.specularIntensityMap,G=y&&!!x.transmissionMap,be=y&&!!x.thicknessMap,ve=!!x.gradientMap,Ie=!!x.alphaMap,de=x.alphaTest>0,re=!!x.alphaHash,Ue=!!x.extensions;let qe=An;x.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(qe=i.toneMapping);const Mt={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:ut,defines:x.defines,customVertexShaderID:ct,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&Y._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&Y.instanceColor!==null,instancingMorph:Xe&&Y.morphTexture!==null,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Qi,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:At,envMap:Je,envMapMode:Je&&$.mapping,envMapCubeUVHeight:ee,aoMap:rt,lightMap:ft,bumpMap:Ze,normalMap:xt,displacementMap:B,emissiveMap:Et,normalMapObjectSpace:xt&&x.normalMapType===wu,normalMapTangentSpace:xt&&x.normalMapType===Bo,metalnessMap:at,roughnessMap:dt,anisotropy:Re,anisotropyMap:l,clearcoat:C,clearcoatMap:u,clearcoatNormalMap:b,clearcoatRoughnessMap:N,dispersion:M,iridescence:V,iridescenceMap:H,iridescenceThicknessMap:k,sheen:le,sheenColorMap:oe,sheenRoughnessMap:Me,specularMap:_e,specularColorMap:ue,specularIntensityMap:Pe,transmission:y,transmissionMap:G,thicknessMap:be,gradientMap:ve,opaque:x.transparent===!1&&x.blending===qi&&x.alphaToCoverage===!1,alphaMap:Ie,alphaTest:de,alphaHash:re,combine:x.combine,mapUv:$e&&v(x.map.channel),aoMapUv:rt&&v(x.aoMap.channel),lightMapUv:ft&&v(x.lightMap.channel),bumpMapUv:Ze&&v(x.bumpMap.channel),normalMapUv:xt&&v(x.normalMap.channel),displacementMapUv:B&&v(x.displacementMap.channel),emissiveMapUv:Et&&v(x.emissiveMap.channel),metalnessMapUv:at&&v(x.metalnessMap.channel),roughnessMapUv:dt&&v(x.roughnessMap.channel),anisotropyMapUv:l&&v(x.anisotropyMap.channel),clearcoatMapUv:u&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:k&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(x.sheenRoughnessMap.channel),specularMapUv:_e&&v(x.specularMap.channel),specularColorMapUv:ue&&v(x.specularColorMap.channel),specularIntensityMapUv:Pe&&v(x.specularIntensityMap.channel),transmissionMapUv:G&&v(x.transmissionMap.channel),thicknessMapUv:be&&v(x.thicknessMap.channel),alphaMapUv:Ie&&v(x.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(xt||Re),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ne.attributes.uv&&($e||Ie),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||ne.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:fe,skinning:Y.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:me,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Et&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ue&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&x.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function _(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Q in x.defines)R.push(Q),R.push(x.defines[Q]);return x.isRawShaderMaterial===!1&&(g(R,x),S(R,x),R.push(i.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function g(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function S(x,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),x.push(a.mask)}function w(x){const R=p[x.type];let Q;if(R){const F=bn[R];Q=fd.clone(F.uniforms)}else Q=x.uniforms;return Q}function A(x,R){let Q=d.get(R);return Q!==void 0?++Q.usedTimes:(Q=new $g(i,R,x,s),h.push(Q),d.set(R,Q)),Q}function L(x){if(--x.usedTimes===0){const R=h.indexOf(x);h[R]=h[h.length-1],h.pop(),d.delete(x.cacheKey),x.destroy()}}function I(x){o.remove(x)}function U(){o.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:w,acquireProgram:A,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:U}}function Zg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,E,_,g){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:_,group:g},i[e]=S):(S.id=f.id,S.object=f,S.geometry=p,S.material=v,S.materialVariant=a(f),S.groupOrder=E,S.renderOrder=f.renderOrder,S.z=_,S.group=g),e++,S}function c(f,p,v,E,_,g){const S=o(f,p,v,E,_,g);v.transmission>0?n.push(S):v.transparent===!0?s.push(S):t.push(S)}function h(f,p,v,E,_,g){const S=o(f,p,v,E,_,g);v.transmission>0?n.unshift(S):v.transparent===!0?s.unshift(S):t.unshift(S)}function d(f,p){t.length>1&&t.sort(f||Kg),n.length>1&&n.sort(p||mc),s.length>1&&s.sort(p||mc)}function m(){for(let f=e,p=i.length;f<p;f++){const v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:m,sort:d}}function Jg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new gc,i.set(n,[a])):s>=r.length?(a=new gc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new it};break;case"SpotLight":t={position:new z,direction:new z,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function e_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let t_=0;function n_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i_(i){const e=new Qg,t=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new z);const s=new z,r=new St,a=new St;function o(h){let d=0,m=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let p=0,v=0,E=0,_=0,g=0,S=0,w=0,A=0,L=0,I=0,U=0;h.sort(n_);for(let R=0,Q=h.length;R<Q;R++){const F=h[R],Y=F.color,J=F.intensity,ne=F.distance;let K=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ji?K=F.shadow.map.texture:K=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=Y.r*J,m+=Y.g*J,f+=Y.b*J;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(F.sh.coefficients[Z],J);U++}else if(F.isDirectionalLight){const Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,ee=t.get(F);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=F.shadow.matrix,S++}n.directional[p]=Z,p++}else if(F.isSpotLight){const Z=e.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(Y).multiplyScalar(J),Z.distance=ne,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,n.spot[E]=Z;const $=F.shadow;if(F.map&&(n.spotLightMap[L]=F.map,L++,$.updateMatrices(F),F.castShadow&&I++),n.spotLightMatrix[E]=$.matrix,F.castShadow){const ee=t.get(F);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.spotShadow[E]=ee,n.spotShadowMap[E]=K,A++}E++}else if(F.isRectAreaLight){const Z=e.get(F);Z.color.copy(Y).multiplyScalar(J),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),n.rectArea[_]=Z,_++}else if(F.isPointLight){const Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){const $=F.shadow,ee=t.get(F);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,n.pointShadow[v]=ee,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=F.shadow.matrix,w++}n.point[v]=Z,v++}else if(F.isHemisphereLight){const Z=e.get(F);Z.skyColor.copy(F.color).multiplyScalar(J),Z.groundColor.copy(F.groundColor).multiplyScalar(J),n.hemi[g]=Z,g++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==E||x.rectAreaLength!==_||x.hemiLength!==g||x.numDirectionalShadows!==S||x.numPointShadows!==w||x.numSpotShadows!==A||x.numSpotMaps!==L||x.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=E,n.rectArea.length=_,n.point.length=v,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=A+L-I,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=U,x.directionalLength=p,x.pointLength=v,x.spotLength=E,x.rectAreaLength=_,x.hemiLength=g,x.numDirectionalShadows=S,x.numPointShadows=w,x.numSpotShadows=A,x.numSpotMaps=L,x.numLightProbes=U,n.version=t_++)}function c(h,d){let m=0,f=0,p=0,v=0,E=0;const _=d.matrixWorldInverse;for(let g=0,S=h.length;g<S;g++){const w=h[g];if(w.isDirectionalLight){const A=n.directional[m];A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),m++}else if(w.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),p++}else if(w.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(_),a.identity(),r.copy(w.matrixWorld),r.premultiply(_),a.extractRotation(r),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(_),f++}else if(w.isHemisphereLight){const A=n.hemi[E];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(_),E++}}}return{setup:o,setupView:c,state:n}}function _c(i){const e=new i_(i),t=[],n=[];function s(d){h.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function s_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new _c(i),e.set(s,[o])):r>=a.length?(o=new _c(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],l_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],vc=new St,ds=new z,Sa=new z;function c_(i,e,t){let n=new Wo;const s=new He,r=new He,a=new wt,o=new vd,c=new yd,h={},d=t.maxTextureSize,m={[hi]:Qt,[Qt]:hi,[Hn]:Hn},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:r_,fragmentShader:a_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new qt;v.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new $t(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let g=this.type;this.render=function(I,U,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;this.type===iu&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hr);const R=i.getRenderTarget(),Q=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(qn),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=g!==this.type;J&&U.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(K=>K.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,K=I.length;ne<K;ne++){const Z=I[ne],$=Z.shadow;if($===void 0){Ge("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ee=$.getFrameExtents();s.multiply(ee),r.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ee.x),s.x=r.x*ee.x,$.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ee.y),s.y=r.y*ee.y,$.mapSize.y=r.y));const se=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=se,$.map===null||J===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ps){if(Z.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Rn(s.x,s.y,{format:Ji,type:Zn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new Ts(s.x,s.y,En),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=Kn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Bt,$.map.depthTexture.magFilter=Bt}else Z.isPointLight?($.map=new hh(s.x),$.map.depthTexture=new ld(s.x,Ln)):($.map=new Rn(s.x,s.y),$.map.depthTexture=new Ts(s.x,s.y,Ln)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=Kn,this.type===hr?($.map.depthTexture.compareFunction=se?zo:ko,$.map.depthTexture.minFilter=Xt,$.map.depthTexture.magFilter=Xt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Bt,$.map.depthTexture.magFilter=Bt);$.camera.updateProjectionMatrix()}const pe=$.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<pe;he++){if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,he),i.clear();else{he===0&&(i.setRenderTarget($.map),i.clear());const me=$.getViewport(he);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),Y.viewport(a)}if(Z.isPointLight){const me=$.camera,We=$.matrix,ut=Z.distance||me.far;ut!==me.far&&(me.far=ut,me.updateProjectionMatrix()),ds.setFromMatrixPosition(Z.matrixWorld),me.position.copy(ds),Sa.copy(me.position),Sa.add(o_[he]),me.up.copy(l_[he]),me.lookAt(Sa),me.updateMatrixWorld(),We.makeTranslation(-ds.x,-ds.y,-ds.z),vc.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),$._frustum.setFromProjectionMatrix(vc,me.coordinateSystem,me.reversedDepth)}else $.updateMatrices(Z);n=$.getFrustum(),A(U,x,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===ps&&S($,x),$.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(R,Q,F)};function S(I,U){const x=e.update(E);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Rn(s.x,s.y,{format:Ji,type:Zn})),f.uniforms.shadow_pass.value=I.map.depthTexture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(U,null,x,f,E,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(U,null,x,p,E,null)}function w(I,U,x,R){let Q=null;const F=x.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)Q=F;else if(Q=x.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Y=Q.uuid,J=U.uuid;let ne=h[Y];ne===void 0&&(ne={},h[Y]=ne);let K=ne[J];K===void 0&&(K=Q.clone(),ne[J]=K,U.addEventListener("dispose",L)),Q=K}if(Q.visible=U.visible,Q.wireframe=U.wireframe,R===ps?Q.side=U.shadowSide!==null?U.shadowSide:U.side:Q.side=U.shadowSide!==null?U.shadowSide:m[U.side],Q.alphaMap=U.alphaMap,Q.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,Q.map=U.map,Q.clipShadows=U.clipShadows,Q.clippingPlanes=U.clippingPlanes,Q.clipIntersection=U.clipIntersection,Q.displacementMap=U.displacementMap,Q.displacementScale=U.displacementScale,Q.displacementBias=U.displacementBias,Q.wireframeLinewidth=U.wireframeLinewidth,Q.linewidth=U.linewidth,x.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const Y=i.properties.get(Q);Y.light=x}return Q}function A(I,U,x,R,Q){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Q===ps)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,I.matrixWorld);const J=e.update(I),ne=I.material;if(Array.isArray(ne)){const K=J.groups;for(let Z=0,$=K.length;Z<$;Z++){const ee=K[Z],se=ne[ee.materialIndex];if(se&&se.visible){const pe=w(I,se,R,Q);I.onBeforeShadow(i,I,U,x,J,pe,ee),i.renderBufferDirect(x,null,J,pe,I,ee),I.onAfterShadow(i,I,U,x,J,pe,ee)}}}else if(ne.visible){const K=w(I,ne,R,Q);I.onBeforeShadow(i,I,U,x,J,K,null),i.renderBufferDirect(x,null,J,K,I,null),I.onAfterShadow(i,I,U,x,J,K,null)}}const Y=I.children;for(let J=0,ne=Y.length;J<ne;J++)A(Y[J],U,x,R,Q)}function L(I){I.target.removeEventListener("dispose",L);for(const x in h){const R=h[x],Q=I.target.uuid;Q in R&&(R[Q].dispose(),delete R[Q])}}}function h_(i,e){function t(){let G=!1;const be=new wt;let ve=null;const Ie=new wt(0,0,0,0);return{setMask:function(de){ve!==de&&!G&&(i.colorMask(de,de,de,de),ve=de)},setLocked:function(de){G=de},setClear:function(de,re,Ue,qe,Mt){Mt===!0&&(de*=qe,re*=qe,Ue*=qe),be.set(de,re,Ue,qe),Ie.equals(be)===!1&&(i.clearColor(de,re,Ue,qe),Ie.copy(be))},reset:function(){G=!1,ve=null,Ie.set(-1,0,0,0)}}}function n(){let G=!1,be=!1,ve=null,Ie=null,de=null;return{setReversed:function(re){if(be!==re){const Ue=e.get("EXT_clip_control");re?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),be=re;const qe=de;de=null,this.setClear(qe)}},getReversed:function(){return be},setTest:function(re){re?ge(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(re){ve!==re&&!G&&(i.depthMask(re),ve=re)},setFunc:function(re){if(be&&(re=Fu[re]),Ie!==re){switch(re){case Pa:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Ua:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=re}},setLocked:function(re){G=re},setClear:function(re){de!==re&&(de=re,be&&(re=1-re),i.clearDepth(re))},reset:function(){G=!1,ve=null,Ie=null,de=null,be=!1}}}function s(){let G=!1,be=null,ve=null,Ie=null,de=null,re=null,Ue=null,qe=null,Mt=null;return{setTest:function(pt){G||(pt?ge(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(pt){be!==pt&&!G&&(i.stencilMask(pt),be=pt)},setFunc:function(pt,Nn,Un){(ve!==pt||Ie!==Nn||de!==Un)&&(i.stencilFunc(pt,Nn,Un),ve=pt,Ie=Nn,de=Un)},setOp:function(pt,Nn,Un){(re!==pt||Ue!==Nn||qe!==Un)&&(i.stencilOp(pt,Nn,Un),re=pt,Ue=Nn,qe=Un)},setLocked:function(pt){G=pt},setClear:function(pt){Mt!==pt&&(i.clearStencil(pt),Mt=pt)},reset:function(){G=!1,be=null,ve=null,Ie=null,de=null,re=null,Ue=null,qe=null,Mt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,h=new WeakMap;let d={},m={},f=new WeakMap,p=[],v=null,E=!1,_=null,g=null,S=null,w=null,A=null,L=null,I=null,U=new it(0,0,0),x=0,R=!1,Q=null,F=null,Y=null,J=null,ne=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,$=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=$>=2);let se=null,pe={};const he=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),We=new wt().fromArray(he),ut=new wt().fromArray(me);function ct(G,be,ve,Ie){const de=new Uint8Array(4),re=i.createTexture();i.bindTexture(G,re),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<ve;Ue++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(be+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return re}const ae={};ae[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(Zi),Ze(!1),xt(pl),ge(i.CULL_FACE),rt(qn);function ge(G){d[G]!==!0&&(i.enable(G),d[G]=!0)}function fe(G){d[G]!==!1&&(i.disable(G),d[G]=!1)}function Xe(G,be){return m[G]!==be?(i.bindFramebuffer(G,be),m[G]=be,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=be),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Ve(G,be){let ve=p,Ie=!1;if(G){ve=f.get(be),ve===void 0&&(ve=[],f.set(be,ve));const de=G.textures;if(ve.length!==de.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ue=de.length;re<Ue;re++)ve[re]=i.COLOR_ATTACHMENT0+re;ve.length=de.length,Ie=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ve)}function $e(G){return v!==G?(i.useProgram(G),v=G,!0):!1}const At={[Mi]:i.FUNC_ADD,[ru]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};At[ou]=i.MIN,At[lu]=i.MAX;const Je={[cu]:i.ZERO,[hu]:i.ONE,[uu]:i.SRC_COLOR,[Ra]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[du]:i.ONE_MINUS_SRC_COLOR,[Ca]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[yu]:i.ONE_MINUS_CONSTANT_COLOR,[Mu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(G,be,ve,Ie,de,re,Ue,qe,Mt,pt){if(G===qn){E===!0&&(fe(i.BLEND),E=!1);return}if(E===!1&&(ge(i.BLEND),E=!0),G!==su){if(G!==_||pt!==R){if((g!==Mi||A!==Mi)&&(i.blendEquation(i.FUNC_ADD),g=Mi,A=Mi),pt)switch(G){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",G);break}else switch(G){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",G);break}S=null,w=null,L=null,I=null,U.set(0,0,0),x=0,_=G,R=pt}return}de=de||be,re=re||ve,Ue=Ue||Ie,(be!==g||de!==A)&&(i.blendEquationSeparate(At[be],At[de]),g=be,A=de),(ve!==S||Ie!==w||re!==L||Ue!==I)&&(i.blendFuncSeparate(Je[ve],Je[Ie],Je[re],Je[Ue]),S=ve,w=Ie,L=re,I=Ue),(qe.equals(U)===!1||Mt!==x)&&(i.blendColor(qe.r,qe.g,qe.b,Mt),U.copy(qe),x=Mt),_=G,R=!1}function ft(G,be){G.side===Hn?fe(i.CULL_FACE):ge(i.CULL_FACE);let ve=G.side===Qt;be&&(ve=!ve),Ze(ve),G.blending===qi&&G.transparent===!1?rt(qn):rt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const Ie=G.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Et(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(G){Q!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),Q=G)}function xt(G){G!==tu?(ge(i.CULL_FACE),G!==F&&(G===pl?i.cullFace(i.BACK):G===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),F=G}function B(G){G!==Y&&(Z&&i.lineWidth(G),Y=G)}function Et(G,be,ve){G?(ge(i.POLYGON_OFFSET_FILL),(J!==be||ne!==ve)&&(J=be,ne=ve,a.getReversed()&&(be=-be),i.polygonOffset(be,ve))):fe(i.POLYGON_OFFSET_FILL)}function at(G){G?ge(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function dt(G){G===void 0&&(G=i.TEXTURE0+K-1),se!==G&&(i.activeTexture(G),se=G)}function Re(G,be,ve){ve===void 0&&(se===null?ve=i.TEXTURE0+K-1:ve=se);let Ie=pe[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},pe[ve]=Ie),(Ie.type!==G||Ie.texture!==be)&&(se!==ve&&(i.activeTexture(ve),se=ve),i.bindTexture(G,be||ae[G]),Ie.type=G,Ie.texture=be)}function C(){const G=pe[se];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function le(){try{i.texSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function y(){try{i.texSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function l(){try{i.compressedTexSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function u(){try{i.compressedTexSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function b(){try{i.texStorage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function N(){try{i.texStorage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function H(){try{i.texImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function k(){try{i.texImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function oe(G){We.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),We.copy(G))}function Me(G){ut.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ut.copy(G))}function _e(G,be){let ve=h.get(be);ve===void 0&&(ve=new WeakMap,h.set(be,ve));let Ie=ve.get(G);Ie===void 0&&(Ie=i.getUniformBlockIndex(be,G.name),ve.set(G,Ie))}function ue(G,be){const Ie=h.get(be).get(G);c.get(be)!==Ie&&(i.uniformBlockBinding(be,Ie,G.__bindingPointIndex),c.set(be,Ie))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},se=null,pe={},m={},f=new WeakMap,p=[],v=null,E=!1,_=null,g=null,S=null,w=null,A=null,L=null,I=null,U=new it(0,0,0),x=0,R=!1,Q=null,F=null,Y=null,J=null,ne=null,We.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:fe,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:$e,setBlending:rt,setMaterial:ft,setFlipSided:Ze,setCullFace:xt,setLineWidth:B,setPolygonOffset:Et,setScissorTest:at,activeTexture:dt,bindTexture:Re,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:H,texImage3D:k,updateUBOMapping:_e,uniformBlockBinding:ue,texStorage2D:b,texStorage3D:N,texSubImage2D:le,texSubImage3D:y,compressedTexSubImage2D:l,compressedTexSubImage3D:u,scissor:oe,viewport:Me,reset:Pe}}function u_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new He,d=new WeakMap;let m;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return p?new OffscreenCanvas(C,M):Mr("canvas")}function E(C,M,V){let le=1;const y=Re(C);if((y.width>V||y.height>V)&&(le=V/Math.max(y.width,y.height)),le<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const l=Math.floor(le*y.width),u=Math.floor(le*y.height);m===void 0&&(m=v(l,u));const b=M?v(l,u):m;return b.width=l,b.height=u,b.getContext("2d").drawImage(C,0,0,l,u),Ge("WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+l+"x"+u+")."),b}else return"data"in C&&Ge("WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),C;return C}function _(C){return C.generateMipmaps}function g(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,M,V,le,y=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let l=M;if(M===i.RED&&(V===i.FLOAT&&(l=i.R32F),V===i.HALF_FLOAT&&(l=i.R16F),V===i.UNSIGNED_BYTE&&(l=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(l=i.R8UI),V===i.UNSIGNED_SHORT&&(l=i.R16UI),V===i.UNSIGNED_INT&&(l=i.R32UI),V===i.BYTE&&(l=i.R8I),V===i.SHORT&&(l=i.R16I),V===i.INT&&(l=i.R32I)),M===i.RG&&(V===i.FLOAT&&(l=i.RG32F),V===i.HALF_FLOAT&&(l=i.RG16F),V===i.UNSIGNED_BYTE&&(l=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(l=i.RG8UI),V===i.UNSIGNED_SHORT&&(l=i.RG16UI),V===i.UNSIGNED_INT&&(l=i.RG32UI),V===i.BYTE&&(l=i.RG8I),V===i.SHORT&&(l=i.RG16I),V===i.INT&&(l=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(l=i.RGB8UI),V===i.UNSIGNED_SHORT&&(l=i.RGB16UI),V===i.UNSIGNED_INT&&(l=i.RGB32UI),V===i.BYTE&&(l=i.RGB8I),V===i.SHORT&&(l=i.RGB16I),V===i.INT&&(l=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(l=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(l=i.RGBA16UI),V===i.UNSIGNED_INT&&(l=i.RGBA32UI),V===i.BYTE&&(l=i.RGBA8I),V===i.SHORT&&(l=i.RGBA16I),V===i.INT&&(l=i.RGBA32I)),M===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(l=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(l=i.R11F_G11F_B10F)),M===i.RGBA){const u=y?yr:lt.getTransfer(le);V===i.FLOAT&&(l=i.RGBA32F),V===i.HALF_FLOAT&&(l=i.RGBA16F),V===i.UNSIGNED_BYTE&&(l=u===mt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(l=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(l=i.RGB5_A1)}return(l===i.R16F||l===i.R32F||l===i.RG16F||l===i.RG32F||l===i.RGBA16F||l===i.RGBA32F)&&e.get("EXT_color_buffer_float"),l}function A(C,M){let V;return C?M===null||M===Ln||M===xs?V=i.DEPTH24_STENCIL8:M===En?V=i.DEPTH32F_STENCIL8:M===Ss&&(V=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ln||M===xs?V=i.DEPTH_COMPONENT24:M===En?V=i.DEPTH_COMPONENT32F:M===Ss&&(V=i.DEPTH_COMPONENT16),V}function L(C,M){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){const M=C.target;M.removeEventListener("dispose",I),x(M),M.isVideoTexture&&d.delete(M)}function U(C){const M=C.target;M.removeEventListener("dispose",U),Q(M)}function x(C){const M=n.get(C);if(M.__webglInit===void 0)return;const V=C.source,le=f.get(V);if(le){const y=le[M.__cacheKey];y.usedTimes--,y.usedTimes===0&&R(C),Object.keys(le).length===0&&f.delete(V)}n.remove(C)}function R(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const V=C.source,le=f.get(V);delete le[M.__cacheKey],a.memory.textures--}function Q(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let y=0;y<M.__webglFramebuffer[le].length;y++)i.deleteFramebuffer(M.__webglFramebuffer[le][y]);else i.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)i.deleteFramebuffer(M.__webglFramebuffer[le]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let le=0,y=V.length;le<y;le++){const l=n.get(V[le]);l.__webglTexture&&(i.deleteTexture(l.__webglTexture),a.memory.textures--),n.remove(V[le])}n.remove(C)}let F=0;function Y(){F=0}function J(){const C=F;return C>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function ne(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function K(C,M){const V=n.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const le=C.image;if(le===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(V,C,M);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function Z(C,M){const V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ae(V,C,M);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function $(C,M){const V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ae(V,C,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function ee(C,M){const V=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){ge(V,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const se={[Oa]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},pe={[Bt]:i.NEAREST,[Eu]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},he={[Au]:i.NEVER,[Lu]:i.ALWAYS,[Ru]:i.LESS,[ko]:i.LEQUAL,[Cu]:i.EQUAL,[zo]:i.GEQUAL,[Pu]:i.GREATER,[Du]:i.NOTEQUAL};function me(C,M){if(M.type===En&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xt||M.magFilter===Gr||M.magFilter===Ns||M.magFilter===xi||M.minFilter===Xt||M.minFilter===Gr||M.minFilter===Ns||M.minFilter===xi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,se[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,se[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,se[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pe[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==Ns&&M.minFilter!==xi||M.type===En&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function We(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));const le=M.source;let y=f.get(le);y===void 0&&(y={},f.set(le,y));const l=ne(M);if(l!==C.__cacheKey){y[l]===void 0&&(y[l]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),y[l].usedTimes++;const u=y[C.__cacheKey];u!==void 0&&(y[C.__cacheKey].usedTimes--,u.usedTimes===0&&R(M)),C.__cacheKey=l,C.__webglTexture=y[l].texture}return V}function ut(C,M,V){return Math.floor(Math.floor(C/V)/M)}function ct(C,M,V,le){const l=C.updateRanges;if(l.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,V,le,M.data);else{l.sort((k,oe)=>k.start-oe.start);let u=0;for(let k=1;k<l.length;k++){const oe=l[u],Me=l[k],_e=oe.start+oe.count,ue=ut(Me.start,M.width,4),Pe=ut(oe.start,M.width,4);Me.start<=_e+1&&ue===Pe&&ut(Me.start+Me.count-1,M.width,4)===ue?oe.count=Math.max(oe.count,Me.start+Me.count-oe.start):(++u,l[u]=Me)}l.length=u+1;const b=i.getParameter(i.UNPACK_ROW_LENGTH),N=i.getParameter(i.UNPACK_SKIP_PIXELS),H=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let k=0,oe=l.length;k<oe;k++){const Me=l[k],_e=Math.floor(Me.start/4),ue=Math.ceil(Me.count/4),Pe=_e%M.width,G=Math.floor(_e/M.width),be=ue,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Pe,G,be,ve,V,le,M.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,b),i.pixelStorei(i.UNPACK_SKIP_PIXELS,N),i.pixelStorei(i.UNPACK_SKIP_ROWS,H)}}function ae(C,M,V){let le=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=i.TEXTURE_3D);const y=We(C,M),l=M.source;t.bindTexture(le,C.__webglTexture,i.TEXTURE0+V);const u=n.get(l);if(l.version!==u.__version||y===!0){t.activeTexture(i.TEXTURE0+V);const b=lt.getPrimaries(lt.workingColorSpace),N=M.colorSpace===oi?null:lt.getPrimaries(M.colorSpace),H=M.colorSpace===oi||b===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let k=E(M.image,!1,s.maxTextureSize);k=dt(M,k);const oe=r.convert(M.format,M.colorSpace),Me=r.convert(M.type);let _e=w(M.internalFormat,oe,Me,M.colorSpace,M.isVideoTexture);me(le,M);let ue;const Pe=M.mipmaps,G=M.isVideoTexture!==!0,be=u.__version===void 0||y===!0,ve=l.dataReady,Ie=L(M,k);if(M.isDepthTexture)_e=A(M.format===bi,M.type),be&&(G?t.texStorage2D(i.TEXTURE_2D,1,_e,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,_e,k.width,k.height,0,oe,Me,null));else if(M.isDataTexture)if(Pe.length>0){G&&be&&t.texStorage2D(i.TEXTURE_2D,Ie,_e,Pe[0].width,Pe[0].height);for(let de=0,re=Pe.length;de<re;de++)ue=Pe[de],G?ve&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ue.width,ue.height,oe,Me,ue.data):t.texImage2D(i.TEXTURE_2D,de,_e,ue.width,ue.height,0,oe,Me,ue.data);M.generateMipmaps=!1}else G?(be&&t.texStorage2D(i.TEXTURE_2D,Ie,_e,k.width,k.height),ve&&ct(M,k,oe,Me)):t.texImage2D(i.TEXTURE_2D,0,_e,k.width,k.height,0,oe,Me,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){G&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,_e,Pe[0].width,Pe[0].height,k.depth);for(let de=0,re=Pe.length;de<re;de++)if(ue=Pe[de],M.format!==mn)if(oe!==null)if(G){if(ve)if(M.layerUpdates.size>0){const Ue=jl(ue.width,ue.height,M.format,M.type);for(const qe of M.layerUpdates){const Mt=ue.data.subarray(qe*Ue/ue.data.BYTES_PER_ELEMENT,(qe+1)*Ue/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,qe,ue.width,ue.height,1,oe,Mt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ue.width,ue.height,k.depth,oe,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,_e,ue.width,ue.height,k.depth,0,ue.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ue.width,ue.height,k.depth,oe,Me,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,_e,ue.width,ue.height,k.depth,0,oe,Me,ue.data)}else{G&&be&&t.texStorage2D(i.TEXTURE_2D,Ie,_e,Pe[0].width,Pe[0].height);for(let de=0,re=Pe.length;de<re;de++)ue=Pe[de],M.format!==mn?oe!==null?G?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,ue.width,ue.height,oe,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,de,_e,ue.width,ue.height,0,ue.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?ve&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ue.width,ue.height,oe,Me,ue.data):t.texImage2D(i.TEXTURE_2D,de,_e,ue.width,ue.height,0,oe,Me,ue.data)}else if(M.isDataArrayTexture)if(G){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,_e,k.width,k.height,k.depth),ve)if(M.layerUpdates.size>0){const de=jl(k.width,k.height,M.format,M.type);for(const re of M.layerUpdates){const Ue=k.data.subarray(re*de/k.data.BYTES_PER_ELEMENT,(re+1)*de/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,k.width,k.height,1,oe,Me,Ue)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,oe,Me,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,k.width,k.height,k.depth,0,oe,Me,k.data);else if(M.isData3DTexture)G?(be&&t.texStorage3D(i.TEXTURE_3D,Ie,_e,k.width,k.height,k.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,oe,Me,k.data)):t.texImage3D(i.TEXTURE_3D,0,_e,k.width,k.height,k.depth,0,oe,Me,k.data);else if(M.isFramebufferTexture){if(be)if(G)t.texStorage2D(i.TEXTURE_2D,Ie,_e,k.width,k.height);else{let de=k.width,re=k.height;for(let Ue=0;Ue<Ie;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,_e,de,re,0,oe,Me,null),de>>=1,re>>=1}}else if(Pe.length>0){if(G&&be){const de=Re(Pe[0]);t.texStorage2D(i.TEXTURE_2D,Ie,_e,de.width,de.height)}for(let de=0,re=Pe.length;de<re;de++)ue=Pe[de],G?ve&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,oe,Me,ue):t.texImage2D(i.TEXTURE_2D,de,_e,oe,Me,ue);M.generateMipmaps=!1}else if(G){if(be){const de=Re(k);t.texStorage2D(i.TEXTURE_2D,Ie,_e,de.width,de.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Me,k)}else t.texImage2D(i.TEXTURE_2D,0,_e,oe,Me,k);_(M)&&g(le),u.__version=l.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ge(C,M,V){if(M.image.length!==6)return;const le=We(C,M),y=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);const l=n.get(y);if(y.version!==l.__version||le===!0){t.activeTexture(i.TEXTURE0+V);const u=lt.getPrimaries(lt.workingColorSpace),b=M.colorSpace===oi?null:lt.getPrimaries(M.colorSpace),N=M.colorSpace===oi||u===b?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const H=M.isCompressedTexture||M.image[0].isCompressedTexture,k=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let re=0;re<6;re++)!H&&!k?oe[re]=E(M.image[re],!0,s.maxCubemapSize):oe[re]=k?M.image[re].image:M.image[re],oe[re]=dt(M,oe[re]);const Me=oe[0],_e=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),Pe=w(M.internalFormat,_e,ue,M.colorSpace),G=M.isVideoTexture!==!0,be=l.__version===void 0||le===!0,ve=y.dataReady;let Ie=L(M,Me);me(i.TEXTURE_CUBE_MAP,M);let de;if(H){G&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Pe,Me.width,Me.height);for(let re=0;re<6;re++){de=oe[re].mipmaps;for(let Ue=0;Ue<de.length;Ue++){const qe=de[Ue];M.format!==mn?_e!==null?G?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,qe.width,qe.height,_e,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Pe,qe.width,qe.height,0,qe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,qe.width,qe.height,_e,ue,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Pe,qe.width,qe.height,0,_e,ue,qe.data)}}}else{if(de=M.mipmaps,G&&be){de.length>0&&Ie++;const re=Re(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Pe,re.width,re.height)}for(let re=0;re<6;re++)if(k){G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,oe[re].width,oe[re].height,_e,ue,oe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Pe,oe[re].width,oe[re].height,0,_e,ue,oe[re].data);for(let Ue=0;Ue<de.length;Ue++){const Mt=de[Ue].image[re].image;G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,Mt.width,Mt.height,_e,ue,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Pe,Mt.width,Mt.height,0,_e,ue,Mt.data)}}else{G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,_e,ue,oe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Pe,_e,ue,oe[re]);for(let Ue=0;Ue<de.length;Ue++){const qe=de[Ue];G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,_e,ue,qe.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Pe,_e,ue,qe.image[re])}}}_(M)&&g(i.TEXTURE_CUBE_MAP),l.__version=y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function fe(C,M,V,le,y,l){const u=r.convert(V.format,V.colorSpace),b=r.convert(V.type),N=w(V.internalFormat,u,b,V.colorSpace),H=n.get(M),k=n.get(V);if(k.__renderTarget=M,!H.__hasExternalTextures){const oe=Math.max(1,M.width>>l),Me=Math.max(1,M.height>>l);y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY?t.texImage3D(y,l,N,oe,Me,M.depth,0,u,b,null):t.texImage2D(y,l,N,oe,Me,0,u,b,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Et(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,y,k.__webglTexture,0,B(M)):(y===i.TEXTURE_2D||y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,y,k.__webglTexture,l),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(C,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){const le=M.depthTexture,y=le&&le.isDepthTexture?le.type:null,l=A(M.stencilBuffer,y),u=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Et(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(M),l,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(M),l,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,l,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,u,i.RENDERBUFFER,C)}else{const le=M.textures;for(let y=0;y<le.length;y++){const l=le[y],u=r.convert(l.format,l.colorSpace),b=r.convert(l.type),N=w(l.internalFormat,u,b,l.colorSpace);Et(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(M),N,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(M),N,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,N,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(C,M,V){const le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const y=n.get(M.depthTexture);if(y.__renderTarget=M,(!y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(y.__webglInit===void 0&&(y.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),y.__webglTexture===void 0){y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture),me(i.TEXTURE_CUBE_MAP,M.depthTexture);const H=r.convert(M.depthTexture.format),k=r.convert(M.depthTexture.type);let oe;M.depthTexture.format===Kn?oe=i.DEPTH_COMPONENT24:M.depthTexture.format===bi&&(oe=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,M.width,M.height,0,H,k,null)}}else K(M.depthTexture,0);const l=y.__webglTexture,u=B(M),b=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,N=M.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Kn)Et(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,b,l,0,u):i.framebufferTexture2D(i.FRAMEBUFFER,N,b,l,0);else if(M.depthTexture.format===bi)Et(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,b,l,0,u):i.framebufferTexture2D(i.FRAMEBUFFER,N,b,l,0);else throw new Error("Unknown depthTexture format")}function $e(C){const M=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const le=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",y)};le.addEventListener("dispose",y),M.__depthDisposeCallback=y}M.__boundDepthTexture=le}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let le=0;le<6;le++)Ve(M.__webglFramebuffer[le],C,le);else{const le=C.texture.mipmaps;le&&le.length>0?Ve(M.__webglFramebuffer[0],C,0):Ve(M.__webglFramebuffer,C,0)}else if(V){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=i.createRenderbuffer(),Xe(M.__webglDepthbuffer[le],C,!1);else{const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,l=M.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,l),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,l)}}else{const le=C.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Xe(M.__webglDepthbuffer,C,!1);else{const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,l=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,l),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,l)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(C,M,V){const le=n.get(C);M!==void 0&&fe(le.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&$e(C)}function Je(C){const M=C.texture,V=n.get(C),le=n.get(M);C.addEventListener("dispose",U);const y=C.textures,l=C.isWebGLCubeRenderTarget===!0,u=y.length>1;if(u||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=M.version,a.memory.textures++),l){V.__webglFramebuffer=[];for(let b=0;b<6;b++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[b]=[];for(let N=0;N<M.mipmaps.length;N++)V.__webglFramebuffer[b][N]=i.createFramebuffer()}else V.__webglFramebuffer[b]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let b=0;b<M.mipmaps.length;b++)V.__webglFramebuffer[b]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(u)for(let b=0,N=y.length;b<N;b++){const H=n.get(y[b]);H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Et(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let b=0;b<y.length;b++){const N=y[b];V.__webglColorRenderbuffer[b]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[b]);const H=r.convert(N.format,N.colorSpace),k=r.convert(N.type),oe=w(N.internalFormat,H,k,N.colorSpace,C.isXRRenderTarget===!0),Me=B(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,oe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+b,i.RENDERBUFFER,V.__webglColorRenderbuffer[b])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(l){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),me(i.TEXTURE_CUBE_MAP,M);for(let b=0;b<6;b++)if(M.mipmaps&&M.mipmaps.length>0)for(let N=0;N<M.mipmaps.length;N++)fe(V.__webglFramebuffer[b][N],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+b,N);else fe(V.__webglFramebuffer[b],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0);_(M)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(u){for(let b=0,N=y.length;b<N;b++){const H=y[b],k=n.get(H);let oe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,k.__webglTexture),me(oe,H),fe(V.__webglFramebuffer,C,H,i.COLOR_ATTACHMENT0+b,oe,0),_(H)&&g(oe)}t.unbindTexture()}else{let b=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(b=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(b,le.__webglTexture),me(b,M),M.mipmaps&&M.mipmaps.length>0)for(let N=0;N<M.mipmaps.length;N++)fe(V.__webglFramebuffer[N],C,M,i.COLOR_ATTACHMENT0,b,N);else fe(V.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,b,0);_(M)&&g(b),t.unbindTexture()}C.depthBuffer&&$e(C)}function rt(C){const M=C.textures;for(let V=0,le=M.length;V<le;V++){const y=M[V];if(_(y)){const l=S(C),u=n.get(y).__webglTexture;t.bindTexture(l,u),g(l),t.unbindTexture()}}}const ft=[],Ze=[];function xt(C){if(C.samples>0){if(Et(C)===!1){const M=C.textures,V=C.width,le=C.height;let y=i.COLOR_BUFFER_BIT;const l=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,u=n.get(C),b=M.length>1;if(b)for(let H=0;H<M.length;H++)t.bindFramebuffer(i.FRAMEBUFFER,u.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);const N=C.texture.mipmaps;N&&N.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let H=0;H<M.length;H++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(y|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(y|=i.STENCIL_BUFFER_BIT)),b){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,u.__webglColorRenderbuffer[H]);const k=n.get(M[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,V,le,0,0,V,le,y,i.NEAREST),c===!0&&(ft.length=0,Ze.length=0,ft.push(i.COLOR_ATTACHMENT0+H),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ft.push(l),Ze.push(l),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),b)for(let H=0;H<M.length;H++){t.bindFramebuffer(i.FRAMEBUFFER,u.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,u.__webglColorRenderbuffer[H]);const k=n.get(M[H]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,k,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function B(C){return Math.min(s.maxSamples,C.samples)}function Et(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(C){const M=a.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function dt(C,M){const V=C.colorSpace,le=C.format,y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Qi&&V!==oi&&(lt.getTransfer(V)===mt?(le!==mn||y!==sn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",V)),M}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=ee,this.rebindTextures=At,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function d_(i,e){function t(n,s=oi){let r;const a=lt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===$c)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===Lo)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===jc)return i.RGB;if(n===mn)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Uo)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===ur||n===dr||n===fr||n===pr)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===za||n===Va||n===Ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===$a||n===Xa||n===qa||n===Ya||n===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Wa)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return r.COMPRESSED_R11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ya)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===Ka||n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===so)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===uo||n===fo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===po||n===mo||n===go||n===_o)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ih(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g_ extends Ai{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,d=null,m=null,f=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",_=new m_,g={},S=t.getContextAttributes();let w=null,A=null;const L=[],I=[],U=new He;let x=null;const R=new jt;R.viewport=new wt;const Q=new jt;Q.viewport=new wt;const F=[R,Q],Y=new Ad;let J=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ge=L[ae];return ge===void 0&&(ge=new Zr,L[ae]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ae){let ge=L[ae];return ge===void 0&&(ge=new Zr,L[ae]=ge),ge.getGripSpace()},this.getHand=function(ae){let ge=L[ae];return ge===void 0&&(ge=new Zr,L[ae]=ge),ge.getHandSpace()};function K(ae){const ge=I.indexOf(ae.inputSource);if(ge===-1)return;const fe=L[ge];fe!==void 0&&(fe.update(ae.inputSource,ae.frame,h||a),fe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",$);for(let ae=0;ae<L.length;ae++){const ge=I[ae];ge!==null&&(I[ae]=null,L[ae].disconnect(ge))}J=null,ne=null,_.reset();for(const ae in g)delete g[ae];e.setRenderTarget(w),p=null,f=null,m=null,s=null,A=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(U),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Xe=null,Ve=null;S.depth&&(Ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?bi:Kn,Xe=S.stencil?xs:Ln);const $e={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:r};m=this.getBinding(),f=m.createProjectionLayer($e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Rn(f.textureWidth,f.textureHeight,{format:mn,type:sn,depthTexture:new Ts(f.textureWidth,f.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Rn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(ae){for(let ge=0;ge<ae.removed.length;ge++){const fe=ae.removed[ge],Xe=I.indexOf(fe);Xe>=0&&(I[Xe]=null,L[Xe].disconnect(fe))}for(let ge=0;ge<ae.added.length;ge++){const fe=ae.added[ge];let Xe=I.indexOf(fe);if(Xe===-1){for(let $e=0;$e<L.length;$e++)if($e>=I.length){I.push(fe),Xe=$e;break}else if(I[$e]===null){I[$e]=fe,Xe=$e;break}if(Xe===-1)break}const Ve=L[Xe];Ve&&Ve.connect(fe)}}const ee=new z,se=new z;function pe(ae,ge,fe){ee.setFromMatrixPosition(ge.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);const Xe=ee.distanceTo(se),Ve=ge.projectionMatrix.elements,$e=fe.projectionMatrix.elements,At=Ve[14]/(Ve[10]-1),Je=Ve[14]/(Ve[10]+1),rt=(Ve[9]+1)/Ve[5],ft=(Ve[9]-1)/Ve[5],Ze=(Ve[8]-1)/Ve[0],xt=($e[8]+1)/$e[0],B=At*Ze,Et=At*xt,at=Xe/(-Ze+xt),dt=at*-Ze;if(ge.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(dt),ae.translateZ(at),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ve[10]===-1)ae.projectionMatrix.copy(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Re=At+at,C=Je+at,M=B-dt,V=Et+(Xe-dt),le=rt*Je/C*Re,y=ft*Je/C*Re;ae.projectionMatrix.makePerspective(M,V,le,y,Re,C),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function he(ae,ge){ge===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ge.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let ge=ae.near,fe=ae.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),Y.near=Q.near=R.near=ge,Y.far=Q.far=R.far=fe,(J!==Y.near||ne!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),J=Y.near,ne=Y.far),Y.layers.mask=ae.layers.mask|6,R.layers.mask=Y.layers.mask&-5,Q.layers.mask=Y.layers.mask&-3;const Xe=ae.parent,Ve=Y.cameras;he(Y,Xe);for(let $e=0;$e<Ve.length;$e++)he(Ve[$e],Xe);Ve.length===2?pe(Y,R,Q):Y.projectionMatrix.copy(R.projectionMatrix),me(ae,Y,Xe)};function me(ae,ge,fe){fe===null?ae.matrix.copy(ge.matrixWorld):(ae.matrix.copy(fe.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ge.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=vo*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(ae){c=ae,f!==null&&(f.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Y)},this.getCameraTexture=function(ae){return g[ae]};let We=null;function ut(ae,ge){if(d=ge.getViewerPose(h||a),v=ge,d!==null){const fe=d.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Xe=!1;fe.length!==Y.cameras.length&&(Y.cameras.length=0,Xe=!0);for(let Je=0;Je<fe.length;Je++){const rt=fe[Je];let ft=null;if(p!==null)ft=p.getViewport(rt);else{const xt=m.getViewSubImage(f,rt);ft=xt.viewport,Je===0&&(e.setRenderTargetTextures(A,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(A))}let Ze=F[Je];Ze===void 0&&(Ze=new jt,Ze.layers.enable(Je),Ze.viewport=new wt,F[Je]=Ze),Ze.matrix.fromArray(rt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(rt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ft.x,ft.y,ft.width,ft.height),Je===0&&(Y.matrix.copy(Ze.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Xe===!0&&Y.cameras.push(Ze)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){m=n.getBinding();const Je=m.getDepthInformation(fe[0]);Je&&Je.isValid&&Je.texture&&_.init(Je,s.renderState)}if(Ve&&Ve.includes("camera-access")&&E){e.state.unbindTexture(),m=n.getBinding();for(let Je=0;Je<fe.length;Je++){const rt=fe[Je].camera;if(rt){let ft=g[rt];ft||(ft=new ih,g[rt]=ft);const Ze=m.getCameraImage(rt);ft.sourceTexture=Ze}}}}for(let fe=0;fe<L.length;fe++){const Xe=I[fe],Ve=L[fe];Xe!==null&&Ve!==void 0&&Ve.update(Xe,ge,h||a)}We&&We(ae,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),v=null}const ct=new ch;ct.setAnimationLoop(ut),this.setAnimationLoop=function(ae){We=ae},this.dispose=function(){}}}const yi=new vn,__=new St;function v_(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,sh(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,S,w,A){g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),m(_,g)):g.isMeshPhongMaterial?(r(_,g),d(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),f(_,g),g.isMeshPhysicalMaterial&&p(_,g,A)):g.isMeshMatcapMaterial?(r(_,g),v(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),E(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?c(_,g,S,w):g.isSpriteMaterial?h(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Qt&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Qt&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const S=e.get(g),w=S.envMap,A=S.envMapRotation;w&&(_.envMap.value=w,yi.copy(A),yi.x*=-1,yi.y*=-1,yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),_.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(yi)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,S,w){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*S,_.scale.value=w*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function d(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function m(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function p(_,g,S){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qt&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,g){g.matcap&&(_.matcap.value=g.matcap)}function E(_,g){const S=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const A=w.program;n.uniformBlockBinding(S,A)}function h(S,w){let A=s[S.id];A===void 0&&(v(S),A=d(S),s[S.id]=A,S.addEventListener("dispose",_));const L=w.program;n.updateUBOMapping(S,L);const I=e.render.frame;r[S.id]!==I&&(f(S),r[S.id]=I)}function d(S){const w=m();S.__bindingPointIndex=w;const A=i.createBuffer(),L=S.__size,I=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,L,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function m(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const w=s[S.id],A=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let I=0,U=A.length;I<U;I++){const x=Array.isArray(A[I])?A[I]:[A[I]];for(let R=0,Q=x.length;R<Q;R++){const F=x[R];if(p(F,I,R,L)===!0){const Y=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let ne=0;for(let K=0;K<J.length;K++){const Z=J[K],$=E(Z);typeof Z=="number"||typeof Z=="boolean"?(F.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Y+ne,F.__data)):Z.isMatrix3?(F.__data[0]=Z.elements[0],F.__data[1]=Z.elements[1],F.__data[2]=Z.elements[2],F.__data[3]=0,F.__data[4]=Z.elements[3],F.__data[5]=Z.elements[4],F.__data[6]=Z.elements[5],F.__data[7]=0,F.__data[8]=Z.elements[6],F.__data[9]=Z.elements[7],F.__data[10]=Z.elements[8],F.__data[11]=0):(Z.toArray(F.__data,ne),ne+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,w,A,L){const I=S.value,U=w+"_"+A;if(L[U]===void 0)return typeof I=="number"||typeof I=="boolean"?L[U]=I:L[U]=I.clone(),!0;{const x=L[U];if(typeof I=="number"||typeof I=="boolean"){if(x!==I)return L[U]=I,!0}else if(x.equals(I)===!1)return x.copy(I),!0}return!1}function v(S){const w=S.uniforms;let A=0;const L=16;for(let U=0,x=w.length;U<x;U++){const R=Array.isArray(w[U])?w[U]:[w[U]];for(let Q=0,F=R.length;Q<F;Q++){const Y=R[Q],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let ne=0,K=J.length;ne<K;ne++){const Z=J[ne],$=E(Z),ee=A%L,se=ee%$.boundary,pe=ee+se;A+=se,pe!==0&&L-pe<$.storage&&(A+=L-pe),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=$.storage}}}const I=A%L;return I>0&&(A+=L-I),S.__size=A,S.__cache={},this}function E(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",S),w}function _(S){const w=S.target;w.removeEventListener("dispose",_);const A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:h,dispose:g}}const M_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function S_(){return Sn===null&&(Sn=new id(M_,16,16,Ji,Zn),Sn.name="DFG_LUT",Sn.minFilter=Xt,Sn.magFilter=Xt,Sn.wrapS=Xn,Sn.wrapT=Xn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class jo{constructor(e={}){const{canvas:t=Nu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:p=sn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const E=p,_=new Set([Oo,Fo,Uo]),g=new Set([sn,Ln,Ss,xs,Io,No]),S=new Uint32Array(4),w=new Int32Array(4);let A=null,L=null;const I=[],U=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let Q=!1;this._outputColorSpace=on;let F=0,Y=0,J=null,ne=-1,K=null;const Z=new wt,$=new wt;let ee=null;const se=new it(0);let pe=0,he=t.width,me=t.height,We=1,ut=null,ct=null;const ae=new wt(0,0,he,me),ge=new wt(0,0,he,me);let fe=!1;const Xe=new Wo;let Ve=!1,$e=!1;const At=new St,Je=new z,rt=new wt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function xt(){return J===null?We:1}let B=n;function Et(T,X){return t.getContext(T,X)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),B===null){const X="webgl2";if(B=Et(X,T),B===null)throw Et(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw ot("WebGLRenderer: "+T.message),T}let at,dt,Re,C,M,V,le,y,l,u,b,N,H,k,oe,Me,_e,ue,Pe,G,be,ve,Ie;function de(){at=new xm(B),at.init(),be=new d_(B,at),dt=new pm(B,at,e,be),Re=new h_(B,at),dt.reversedDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),C=new Tm(B),M=new Zg,V=new u_(B,at,Re,M,dt,be,C),le=new Sm(R),y=new Cd(B),ve=new dm(B,y),l=new bm(B,y,C,ve),u=new Am(B,l,y,ve,C),ue=new wm(B,dt,V),oe=new mm(M),b=new jg(R,le,at,dt,ve,oe),N=new v_(R,M),H=new Jg,k=new s_(at),_e=new um(R,le,Re,u,v,c),Me=new c_(R,u,dt),Ie=new y_(B,C,dt,Re),Pe=new fm(B,at,C),G=new Em(B,at,C),C.programs=b.programs,R.capabilities=dt,R.extensions=at,R.properties=M,R.renderLists=H,R.shadowMap=Me,R.state=Re,R.info=C}de(),E!==sn&&(x=new Cm(E,t.width,t.height,s,r));const re=new g_(R,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(T){T!==void 0&&(We=T,this.setSize(he,me,!1))},this.getSize=function(T){return T.set(he,me)},this.setSize=function(T,X,te=!0){if(re.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}he=T,me=X,t.width=Math.floor(T*We),t.height=Math.floor(X*We),te===!0&&(t.style.width=T+"px",t.style.height=X+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(he*We,me*We).floor()},this.setDrawingBufferSize=function(T,X,te){he=T,me=X,We=te,t.width=Math.floor(T*te),t.height=Math.floor(X*te),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(E===sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Z)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,X,te,j){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,X,te,j),Re.viewport(Z.copy(ae).multiplyScalar(We).round())},this.getScissor=function(T){return T.copy(ge)},this.setScissor=function(T,X,te,j){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,X,te,j),Re.scissor($.copy(ge).multiplyScalar(We).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){Re.setScissorTest(fe=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,te=!0){let j=0;if(T){let q=!1;if(J!==null){const Te=J.texture.format;q=_.has(Te)}if(q){const Te=J.texture.type,Le=g.has(Te),we=_e.getClearColor(),Fe=_e.getClearAlpha(),Be=we.r,je=we.g,tt=we.b;Le?(S[0]=Be,S[1]=je,S[2]=tt,S[3]=Fe,B.clearBufferuiv(B.COLOR,0,S)):(w[0]=Be,w[1]=je,w[2]=tt,w[3]=Fe,B.clearBufferiv(B.COLOR,0,w))}else j|=B.COLOR_BUFFER_BIT}X&&(j|=B.DEPTH_BUFFER_BIT),te&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),_e.dispose(),H.dispose(),k.dispose(),M.dispose(),le.dispose(),u.dispose(),ve.dispose(),Ie.dispose(),b.dispose(),re.dispose(),re.removeEventListener("sessionstart",sl),re.removeEventListener("sessionend",rl),di.stop()};function Ue(T){T.preventDefault(),xl("WebGLRenderer: Context Lost."),Q=!0}function qe(){xl("WebGLRenderer: Context Restored."),Q=!1;const T=C.autoReset,X=Me.enabled,te=Me.autoUpdate,j=Me.needsUpdate,q=Me.type;de(),C.autoReset=T,Me.enabled=X,Me.autoUpdate=te,Me.needsUpdate=j,Me.type=q}function Mt(T){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pt(T){const X=T.target;X.removeEventListener("dispose",pt),Nn(X)}function Nn(T){Un(T),M.remove(T)}function Un(T){const X=M.get(T).programs;X!==void 0&&(X.forEach(function(te){b.releaseProgram(te)}),T.isShaderMaterial&&b.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,te,j,q,Te){X===null&&(X=ft);const Le=q.isMesh&&q.matrixWorld.determinant()<0,we=Ih(T,X,te,j,q);Re.setMaterial(j,Le);let Fe=te.index,Be=1;if(j.wireframe===!0){if(Fe=l.getWireframeAttribute(te),Fe===void 0)return;Be=2}const je=te.drawRange,tt=te.attributes.position;let ke=je.start*Be,gt=(je.start+je.count)*Be;Te!==null&&(ke=Math.max(ke,Te.start*Be),gt=Math.min(gt,(Te.start+Te.count)*Be)),Fe!==null?(ke=Math.max(ke,0),gt=Math.min(gt,Fe.count)):tt!=null&&(ke=Math.max(ke,0),gt=Math.min(gt,tt.count));const Rt=gt-ke;if(Rt<0||Rt===1/0)return;ve.setup(q,j,we,te,Fe);let Tt,_t=Pe;if(Fe!==null&&(Tt=y.get(Fe),_t=G,_t.setIndex(Tt)),q.isMesh)j.wireframe===!0?(Re.setLineWidth(j.wireframeLinewidth*xt()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(q.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),Re.setLineWidth(Vt*xt()),q.isLineSegments?_t.setMode(B.LINES):q.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else q.isPoints?_t.setMode(B.POINTS):q.isSprite&&_t.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))_t.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Vt=q._multiDrawStarts,Oe=q._multiDrawCounts,en=q._multiDrawCount,ht=Fe?y.get(Fe).bytesPerElement:1,hn=M.get(j).currentProgram.getUniforms();for(let yn=0;yn<en;yn++)hn.setValue(B,"_gl_DrawID",yn),_t.render(Vt[yn]/ht,Oe[yn])}else if(q.isInstancedMesh)_t.renderInstances(ke,Rt,q.count);else if(te.isInstancedBufferGeometry){const Vt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Oe=Math.min(te.instanceCount,Vt);_t.renderInstances(ke,Rt,Oe)}else _t.render(ke,Rt)};function il(T,X,te){T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=Qt,T.needsUpdate=!0,Is(T,X,te),T.side=hi,T.needsUpdate=!0,Is(T,X,te),T.side=Hn):Is(T,X,te)}this.compile=function(T,X,te=null){te===null&&(te=T),L=k.get(te),L.init(X),U.push(L),te.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(L.pushLight(q),q.castShadow&&L.pushShadow(q))}),T!==te&&T.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(L.pushLight(q),q.castShadow&&L.pushShadow(q))}),L.setupLights();const j=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const we=Te[Le];il(we,te,q),j.add(we)}else il(Te,te,q),j.add(Te)}),L=U.pop(),j},this.compileAsync=function(T,X,te=null){const j=this.compile(T,X,te);return new Promise(q=>{function Te(){if(j.forEach(function(Le){M.get(Le).currentProgram.isReady()&&j.delete(Le)}),j.size===0){q(T);return}setTimeout(Te,10)}at.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let kr=null;function Lh(T){kr&&kr(T)}function sl(){di.stop()}function rl(){di.start()}const di=new ch;di.setAnimationLoop(Lh),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(T){kr=T,re.setAnimationLoop(T),T===null?di.stop():di.start()},re.addEventListener("sessionstart",sl),re.addEventListener("sessionend",rl),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;const te=re.enabled===!0&&re.isPresenting===!0,j=x!==null&&(J===null||te)&&x.begin(R,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(X),X=re.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,X,J),L=k.get(T,U.length),L.init(X),U.push(L),At.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Xe.setFromProjectionMatrix(At,Tn,X.reversedDepth),$e=this.localClippingEnabled,Ve=oe.init(this.clippingPlanes,$e),A=H.get(T,I.length),A.init(),I.push(A),re.enabled===!0&&re.isPresenting===!0){const Le=R.xr.getDepthSensingMesh();Le!==null&&zr(Le,X,-1/0,R.sortObjects)}zr(T,X,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(ut,ct),Ze=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ze&&_e.addToRenderList(A,T),this.info.render.frame++,Ve===!0&&oe.beginShadows();const q=L.state.shadowsArray;if(Me.render(q,T,X),Ve===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&x.hasRenderPass())===!1){const Le=A.opaque,we=A.transmissive;if(L.setupLights(),X.isArrayCamera){const Fe=X.cameras;if(we.length>0)for(let Be=0,je=Fe.length;Be<je;Be++){const tt=Fe[Be];ol(Le,we,T,tt)}Ze&&_e.render(T);for(let Be=0,je=Fe.length;Be<je;Be++){const tt=Fe[Be];al(A,T,tt,tt.viewport)}}else we.length>0&&ol(Le,we,T,X),Ze&&_e.render(T),al(A,T,X)}J!==null&&Y===0&&(V.updateMultisampleRenderTarget(J),V.updateRenderTargetMipmap(J)),j&&x.end(R),T.isScene===!0&&T.onAfterRender(R,T,X),ve.resetDefaultState(),ne=-1,K=null,U.pop(),U.length>0?(L=U[U.length-1],Ve===!0&&oe.setGlobalState(R.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?A=I[I.length-1]:A=null};function zr(T,X,te,j){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)L.pushLight(T),T.castShadow&&L.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Xe.intersectsSprite(T)){j&&rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(At);const Le=u.update(T),we=T.material;we.visible&&A.push(T,Le,we,te,rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Xe.intersectsObject(T))){const Le=u.update(T),we=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),rt.copy(T.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),rt.copy(Le.boundingSphere.center)),rt.applyMatrix4(T.matrixWorld).applyMatrix4(At)),Array.isArray(we)){const Fe=Le.groups;for(let Be=0,je=Fe.length;Be<je;Be++){const tt=Fe[Be],ke=we[tt.materialIndex];ke&&ke.visible&&A.push(T,Le,ke,te,rt.z,tt)}}else we.visible&&A.push(T,Le,we,te,rt.z,null)}}const Te=T.children;for(let Le=0,we=Te.length;Le<we;Le++)zr(Te[Le],X,te,j)}function al(T,X,te,j){const{opaque:q,transmissive:Te,transparent:Le}=T;L.setupLightsView(te),Ve===!0&&oe.setGlobalState(R.clippingPlanes,te),j&&Re.viewport(Z.copy(j)),q.length>0&&Ls(q,X,te),Te.length>0&&Ls(Te,X,te),Le.length>0&&Ls(Le,X,te),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ol(T,X,te,j){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[j.id]===void 0){const ke=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[j.id]=new Rn(1,1,{generateMipmaps:!0,type:ke?Zn:sn,minFilter:xi,samples:dt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Te=L.state.transmissionRenderTarget[j.id],Le=j.viewport||Z;Te.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);const we=R.getRenderTarget(),Fe=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(Te),R.getClearColor(se),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),Ze&&_e.render(te);const je=R.toneMapping;R.toneMapping=An;const tt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),L.setupLightsView(j),Ve===!0&&oe.setGlobalState(R.clippingPlanes,j),Ls(T,te,j),V.updateMultisampleRenderTarget(Te),V.updateRenderTargetMipmap(Te),at.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let gt=0,Rt=X.length;gt<Rt;gt++){const Tt=X[gt],{object:_t,geometry:Vt,material:Oe,group:en}=Tt;if(Oe.side===Hn&&_t.layers.test(j.layers)){const ht=Oe.side;Oe.side=Qt,Oe.needsUpdate=!0,ll(_t,te,j,Vt,Oe,en),Oe.side=ht,Oe.needsUpdate=!0,ke=!0}}ke===!0&&(V.updateMultisampleRenderTarget(Te),V.updateRenderTargetMipmap(Te))}R.setRenderTarget(we,Fe,Be),R.setClearColor(se,pe),tt!==void 0&&(j.viewport=tt),R.toneMapping=je}function Ls(T,X,te){const j=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Te=T.length;q<Te;q++){const Le=T[q],{object:we,geometry:Fe,group:Be}=Le;let je=Le.material;je.allowOverride===!0&&j!==null&&(je=j),we.layers.test(te.layers)&&ll(we,X,te,Fe,je,Be)}}function ll(T,X,te,j,q,Te){T.onBeforeRender(R,X,te,j,q,Te),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(R,X,te,j,T,Te),q.transparent===!0&&q.side===Hn&&q.forceSinglePass===!1?(q.side=Qt,q.needsUpdate=!0,R.renderBufferDirect(te,X,j,q,T,Te),q.side=hi,q.needsUpdate=!0,R.renderBufferDirect(te,X,j,q,T,Te),q.side=Hn):R.renderBufferDirect(te,X,j,q,T,Te),T.onAfterRender(R,X,te,j,q,Te)}function Is(T,X,te){X.isScene!==!0&&(X=ft);const j=M.get(T),q=L.state.lights,Te=L.state.shadowsArray,Le=q.state.version,we=b.getParameters(T,q.state,Te,X,te),Fe=b.getProgramCacheKey(we);let Be=j.programs;j.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,j.fog=X.fog;const je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;j.envMap=le.get(T.envMap||j.environment,je),j.envMapRotation=j.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",pt),Be=new Map,j.programs=Be);let tt=Be.get(Fe);if(tt!==void 0){if(j.currentProgram===tt&&j.lightsStateVersion===Le)return hl(T,we),tt}else we.uniforms=b.getUniforms(T),T.onBeforeCompile(we,R),tt=b.acquireProgram(we,Fe),Be.set(Fe,tt),j.uniforms=we.uniforms;const ke=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=oe.uniform),hl(T,we),j.needsLights=Uh(T),j.lightsStateVersion=Le,j.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=tt,j.uniformsList=null,tt}function cl(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=mr.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function hl(T,X){const te=M.get(T);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Ih(T,X,te,j,q){X.isScene!==!0&&(X=ft),V.resetTextureUnits();const Te=X.fog,Le=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?X.environment:null,we=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Qi,Fe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Be=le.get(j.envMap||Le,Fe),je=j.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,tt=!!te.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!te.morphAttributes.position,gt=!!te.morphAttributes.normal,Rt=!!te.morphAttributes.color;let Tt=An;j.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Tt=R.toneMapping);const _t=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Vt=_t!==void 0?_t.length:0,Oe=M.get(j),en=L.state.lights;if(Ve===!0&&($e===!0||T!==K)){const It=T===K&&j.id===ne;oe.setState(j,T,It)}let ht=!1;j.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==en.state.version||Oe.outputColorSpace!==we||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==Be||j.fog===!0&&Oe.fog!==Te||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==je||Oe.vertexTangents!==tt||Oe.morphTargets!==ke||Oe.morphNormals!==gt||Oe.morphColors!==Rt||Oe.toneMapping!==Tt||Oe.morphTargetsCount!==Vt)&&(ht=!0):(ht=!0,Oe.__version=j.version);let hn=Oe.currentProgram;ht===!0&&(hn=Is(j,X,q));let yn=!1,fi=!1,Pi=!1;const yt=hn.getUniforms(),Ft=Oe.uniforms;if(Re.useProgram(hn.program)&&(yn=!0,fi=!0,Pi=!0),j.id!==ne&&(ne=j.id,fi=!0),yn||K!==T){Re.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(B,"projectionMatrix",T.projectionMatrix),yt.setValue(B,"viewMatrix",T.matrixWorldInverse);const ei=yt.map.cameraPosition;ei!==void 0&&ei.setValue(B,Je.setFromMatrixPosition(T.matrixWorld)),dt.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&yt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,fi=!0,Pi=!0)}if(Oe.needsLights&&(en.state.directionalShadowMap.length>0&&yt.setValue(B,"directionalShadowMap",en.state.directionalShadowMap,V),en.state.spotShadowMap.length>0&&yt.setValue(B,"spotShadowMap",en.state.spotShadowMap,V),en.state.pointShadowMap.length>0&&yt.setValue(B,"pointShadowMap",en.state.pointShadowMap,V)),q.isSkinnedMesh){yt.setOptional(B,q,"bindMatrix"),yt.setOptional(B,q,"bindMatrixInverse");const It=q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),yt.setValue(B,"boneTexture",It.boneTexture,V))}q.isBatchedMesh&&(yt.setOptional(B,q,"batchingTexture"),yt.setValue(B,"batchingTexture",q._matricesTexture,V),yt.setOptional(B,q,"batchingIdTexture"),yt.setValue(B,"batchingIdTexture",q._indirectTexture,V),yt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&yt.setValue(B,"batchingColorTexture",q._colorsTexture,V));const Qn=te.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&ue.update(q,te,hn),(fi||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,yt.setValue(B,"receiveShadow",q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&X.environment!==null&&(Ft.envMapIntensity.value=X.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=S_()),fi&&(yt.setValue(B,"toneMappingExposure",R.toneMappingExposure),Oe.needsLights&&Nh(Ft,Pi),Te&&j.fog===!0&&N.refreshFogUniforms(Ft,Te),N.refreshMaterialUniforms(Ft,j,We,me,L.state.transmissionRenderTarget[T.id]),mr.upload(B,cl(Oe),Ft,V)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(mr.upload(B,cl(Oe),Ft,V),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&yt.setValue(B,"center",q.center),yt.setValue(B,"modelViewMatrix",q.modelViewMatrix),yt.setValue(B,"normalMatrix",q.normalMatrix),yt.setValue(B,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const It=j.uniformsGroups;for(let ei=0,Di=It.length;ei<Di;ei++){const ul=It[ei];Ie.update(ul,hn),Ie.bind(ul,hn)}}return hn}function Nh(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Uh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,X,te){const j=M.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=X,M.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:te,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const te=M.get(T);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const Fh=B.createFramebuffer();this.setRenderTarget=function(T,X=0,te=0){J=T,F=X,Y=te;let j=null,q=!1,Te=!1;if(T){const we=M.get(T);if(we.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(B.FRAMEBUFFER,we.__webglFramebuffer),Z.copy(T.viewport),$.copy(T.scissor),ee=T.scissorTest,Re.viewport(Z),Re.scissor($),Re.setScissorTest(ee),ne=-1;return}else if(we.__webglFramebuffer===void 0)V.setupRenderTarget(T);else if(we.__hasExternalTextures)V.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(we.__boundDepthTexture!==je){if(je!==null&&M.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);const Be=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[X])?j=Be[X][te]:j=Be[X],q=!0):T.samples>0&&V.useMultisampledRTT(T)===!1?j=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?j=Be[te]:j=Be,Z.copy(T.viewport),$.copy(T.scissor),ee=T.scissorTest}else Z.copy(ae).multiplyScalar(We).floor(),$.copy(ge).multiplyScalar(We).floor(),ee=fe;if(te!==0&&(j=Fh),Re.bindFramebuffer(B.FRAMEBUFFER,j)&&Re.drawBuffers(T,j),Re.viewport(Z),Re.scissor($),Re.setScissorTest(ee),q){const we=M.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,we.__webglTexture,te)}else if(Te){const we=X;for(let Fe=0;Fe<T.textures.length;Fe++){const Be=M.get(T.textures[Fe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,te,we)}}else if(T!==null&&te!==0){const we=M.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,te)}ne=-1},this.readRenderTargetPixels=function(T,X,te,j,q,Te,Le,we=0){if(!(T&&T.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){Re.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const Be=T.textures[we],je=Be.format,tt=Be.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),!dt.textureFormatReadable(je)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(tt)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-j&&te>=0&&te<=T.height-q&&B.readPixels(X,te,j,q,be.convert(je),be.convert(tt),Te)}finally{const Be=J!==null?M.get(J).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,X,te,j,q,Te,Le,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(X>=0&&X<=T.width-j&&te>=0&&te<=T.height-q){Re.bindFramebuffer(B.FRAMEBUFFER,Fe);const Be=T.textures[we],je=Be.format,tt=Be.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we),!dt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ke),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(X,te,j,q,be.convert(je),be.convert(tt),0);const gt=J!==null?M.get(J).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,gt);const Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Uu(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ke),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te),B.deleteBuffer(ke),B.deleteSync(Rt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,te=0){const j=Math.pow(2,-te),q=Math.floor(T.image.width*j),Te=Math.floor(T.image.height*j),Le=X!==null?X.x:0,we=X!==null?X.y:0;V.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,Le,we,q,Te),Re.unbindTexture()};const Oh=B.createFramebuffer(),Bh=B.createFramebuffer();this.copyTextureToTexture=function(T,X,te=null,j=null,q=0,Te=0){let Le,we,Fe,Be,je,tt,ke,gt,Rt;const Tt=T.isCompressedTexture?T.mipmaps[Te]:T.image;if(te!==null)Le=te.max.x-te.min.x,we=te.max.y-te.min.y,Fe=te.isBox3?te.max.z-te.min.z:1,Be=te.min.x,je=te.min.y,tt=te.isBox3?te.min.z:0;else{const Ft=Math.pow(2,-q);Le=Math.floor(Tt.width*Ft),we=Math.floor(Tt.height*Ft),T.isDataArrayTexture?Fe=Tt.depth:T.isData3DTexture?Fe=Math.floor(Tt.depth*Ft):Fe=1,Be=0,je=0,tt=0}j!==null?(ke=j.x,gt=j.y,Rt=j.z):(ke=0,gt=0,Rt=0);const _t=be.convert(X.format),Vt=be.convert(X.type);let Oe;X.isData3DTexture?(V.setTexture3D(X,0),Oe=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(V.setTexture2DArray(X,0),Oe=B.TEXTURE_2D_ARRAY):(V.setTexture2D(X,0),Oe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const en=B.getParameter(B.UNPACK_ROW_LENGTH),ht=B.getParameter(B.UNPACK_IMAGE_HEIGHT),hn=B.getParameter(B.UNPACK_SKIP_PIXELS),yn=B.getParameter(B.UNPACK_SKIP_ROWS),fi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Tt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,tt);const Pi=T.isDataArrayTexture||T.isData3DTexture,yt=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const Ft=M.get(T),Qn=M.get(X),It=M.get(Ft.__renderTarget),ei=M.get(Qn.__renderTarget);Re.bindFramebuffer(B.READ_FRAMEBUFFER,It.__webglFramebuffer),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Di=0;Di<Fe;Di++)Pi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(T).__webglTexture,q,tt+Di),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(X).__webglTexture,Te,Rt+Di)),B.blitFramebuffer(Be,je,Le,we,ke,gt,Le,we,B.DEPTH_BUFFER_BIT,B.NEAREST);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||M.has(T)){const Ft=M.get(T),Qn=M.get(X);Re.bindFramebuffer(B.READ_FRAMEBUFFER,Oh),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,Bh);for(let It=0;It<Fe;It++)Pi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.__webglTexture,q,tt+It):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ft.__webglTexture,q),yt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qn.__webglTexture,Te,Rt+It):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qn.__webglTexture,Te),q!==0?B.blitFramebuffer(Be,je,Le,we,ke,gt,Le,we,B.COLOR_BUFFER_BIT,B.NEAREST):yt?B.copyTexSubImage3D(Oe,Te,ke,gt,Rt+It,Be,je,Le,we):B.copyTexSubImage2D(Oe,Te,ke,gt,Be,je,Le,we);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yt?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Oe,Te,ke,gt,Rt,Le,we,Fe,_t,Vt,Tt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,Te,ke,gt,Rt,Le,we,Fe,_t,Tt.data):B.texSubImage3D(Oe,Te,ke,gt,Rt,Le,we,Fe,_t,Vt,Tt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Te,ke,gt,Le,we,_t,Vt,Tt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Te,ke,gt,Tt.width,Tt.height,_t,Tt.data):B.texSubImage2D(B.TEXTURE_2D,Te,ke,gt,Le,we,_t,Vt,Tt);B.pixelStorei(B.UNPACK_ROW_LENGTH,en),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht),B.pixelStorei(B.UNPACK_SKIP_PIXELS,hn),B.pixelStorei(B.UNPACK_SKIP_ROWS,yn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,fi),Te===0&&X.generateMipmaps&&B.generateMipmap(Oe),Re.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&V.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?V.setTextureCube(T,0):T.isData3DTexture?V.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?V.setTexture2DArray(T,0):V.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){F=0,Y=0,J=null,Re.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const yc={type:"change"},Zo={type:"start"},mh={type:"end"},lr=new Nr,Mc=new Vn,x_=Math.cos(70*Bu.DEG2RAD),Pt=new z,Jt=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xa=1e-6;class b_ extends lh{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pn.ROTATE,MIDDLE:pn.DOLLY,RIGHT:pn.PAN},this.touches={ONE:$n.ROTATE,TWO:$n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new ui,this._lastTargetPosition=new z,this._quat=new ui().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yl,this._sphericalDelta=new Yl,this._scale=1,this._panOffset=new z,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new z,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T_.bind(this),this._onPointerDown=E_.bind(this),this._onPointerUp=w_.bind(this),this._onContextMenu=I_.bind(this),this._onMouseWheel=C_.bind(this),this._onKeyDown=P_.bind(this),this._onTouchStart=D_.bind(this),this._onTouchMove=L_.bind(this),this._onMouseDown=A_.bind(this),this._onMouseMove=R_.bind(this),this._interceptControlDown=N_.bind(this),this._interceptControlUp=U_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yc),this.update(),this.state=vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Jt:n>Math.PI&&(n-=Jt),s<-Math.PI?s+=Jt:s>Math.PI&&(s-=Jt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new z(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lr.origin.copy(this.object.position),lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lr.direction))<x_?this.object.lookAt(this.target):(Mc.setFromNormalAndCoplanarPoint(this.object.up,this.target),lr.intersectPlane(Mc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xa||this._lastTargetPosition.distanceToSquared(this.target)>xa?(this.dispatchEvent(yc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pt.copy(s).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function E_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function T_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function w_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mh),this.state=vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function A_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=vt.DOLLY;break;case pn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}break;case pn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Zo)}function R_(i){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function C_(i){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(i.preventDefault(),this.dispatchEvent(Zo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(mh))}function P_(i){this.enabled!==!1&&this._handleKeyDown(i)}function D_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case $n.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=vt.TOUCH_ROTATE;break;case $n.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case $n.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=vt.TOUCH_DOLLY_PAN;break;case $n.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Zo)}function L_(i){switch(this._trackPointer(i),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=vt.NONE}}function I_(i){this.enabled!==!1&&i.preventDefault()}function N_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ji=new Vn,Gn=new He,gh=new z,ba=new He,gr=new He,Tr=new z,xo=new z,_h=new St,vh=new z,yh=new z;let Wt=null,xn=null;const Wn=[],ci={NONE:-1,PAN:0,ROTATE:1};class F_ extends lh{constructor(e,t,n=null){super(t,n),this.objects=e,this.recursive=!0,this.transformGroup=!1,this.rotateSpeed=1,this.raycaster=new oh,this.mouseButtons={LEFT:pn.PAN,MIDDLE:pn.PAN,RIGHT:pn.ROTATE},this.touches={ONE:$n.PAN},this._onPointerMove=O_.bind(this),this._onPointerDown=B_.bind(this),this._onPointerCancel=k_.bind(this),this._onContextMenu=z_.bind(this),n!==null&&this.connect(n)}connect(e){super.connect(e),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointerup",this._onPointerCancel),this.domElement.addEventListener("pointerleave",this._onPointerCancel),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointerup",this._onPointerCancel),this.domElement.removeEventListener("pointerleave",this._onPointerCancel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto",this.domElement.style.cursor=""}dispose(){this.disconnect()}_updatePointer(e){const t=this.domElement.getBoundingClientRect();Gn.x=(e.clientX-t.left)/t.width*2-1,Gn.y=-(e.clientY-t.top)/t.height*2+1}_updateState(e){let t;if(e.pointerType==="touch")t=this.touches.ONE;else switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=null}switch(t){case pn.PAN:case $n.PAN:this.state=ci.PAN;break;case pn.ROTATE:case $n.ROTATE:this.state=ci.ROTATE;break;default:this.state=ci.NONE}}}function O_(i){const e=this.object,t=this.domElement,n=this.raycaster;if(this.enabled!==!1){if(this._updatePointer(i),n.setFromCamera(Gn,e),Wt)this.state===ci.PAN?n.ray.intersectPlane(ji,Tr)&&(Wt.position.copy(Tr.sub(gh).applyMatrix4(_h)),this.dispatchEvent({type:"drag",object:Wt})):this.state===ci.ROTATE&&(ba.subVectors(Gn,gr).multiplyScalar(this.rotateSpeed),Wt.rotateOnWorldAxis(vh,ba.x),Wt.rotateOnWorldAxis(yh.normalize(),-ba.y),this.dispatchEvent({type:"drag",object:Wt})),gr.copy(Gn);else if(i.pointerType==="mouse"||i.pointerType==="pen")if(Wn.length=0,n.setFromCamera(Gn,e),n.intersectObjects(this.objects,this.recursive,Wn),Wn.length>0){const s=Wn[0].object;ji.setFromNormalAndCoplanarPoint(e.getWorldDirection(ji.normal),xo.setFromMatrixPosition(s.matrixWorld)),xn!==s&&xn!==null&&(this.dispatchEvent({type:"hoveroff",object:xn}),t.style.cursor="auto",xn=null),xn!==s&&(this.dispatchEvent({type:"hoveron",object:s}),t.style.cursor="pointer",xn=s)}else xn!==null&&(this.dispatchEvent({type:"hoveroff",object:xn}),t.style.cursor="auto",xn=null);gr.copy(Gn)}}function B_(i){const e=this.object,t=this.domElement,n=this.raycaster;this.enabled!==!1&&(this._updatePointer(i),this._updateState(i),Wn.length=0,n.setFromCamera(Gn,e),n.intersectObjects(this.objects,this.recursive,Wn),Wn.length>0&&(this.transformGroup===!0?Wt=Mh(Wn[0].object):Wt=Wn[0].object,ji.setFromNormalAndCoplanarPoint(e.getWorldDirection(ji.normal),xo.setFromMatrixPosition(Wt.matrixWorld)),n.ray.intersectPlane(ji,Tr)&&(this.state===ci.PAN?(_h.copy(Wt.parent.matrixWorld).invert(),gh.copy(Tr).sub(xo.setFromMatrixPosition(Wt.matrixWorld)),t.style.cursor="move",this.dispatchEvent({type:"dragstart",object:Wt})):this.state===ci.ROTATE&&(vh.set(0,1,0).applyQuaternion(e.quaternion).normalize(),yh.set(1,0,0).applyQuaternion(e.quaternion).normalize(),t.style.cursor="move",this.dispatchEvent({type:"dragstart",object:Wt})))),gr.copy(Gn))}function k_(){this.enabled!==!1&&(Wt&&(this.dispatchEvent({type:"dragend",object:Wt}),Wt=null),this.domElement.style.cursor=xn?"pointer":"auto",this.state=ci.NONE)}function z_(i){this.enabled!==!1&&i.preventDefault()}function Mh(i,e=null){return i.isGroup&&(e=i),i.parent===null?e:Mh(i.parent,e)}function V_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _r={exports:{}},H_=_r.exports,Sc;function G_(){return Sc||(Sc=1,(function(i,e){(function(t,n){i.exports=n()})(H_,function(){var t=function(){function n(p){return a.appendChild(p.dom),p}function s(p){for(var v=0;v<a.children.length;v++)a.children[v].style.display=v===p?"block":"none";r=p}var r=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(p){p.preventDefault(),s(++r%a.children.length)},!1);var o=(performance||Date).now(),c=o,h=0,d=n(new t.Panel("FPS","#0ff","#002")),m=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new t.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:a,addPanel:n,showPanel:s,begin:function(){o=(performance||Date).now()},end:function(){h++;var p=(performance||Date).now();if(m.update(p-o,200),p>c+1e3&&(d.update(1e3*h/(p-c),100),c=p,h=0,f)){var v=performance.memory;f.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return p},update:function(){o=this.end()},domElement:a,setMode:s}};return t.Panel=function(n,s,r){var a=1/0,o=0,c=Math.round,h=c(window.devicePixelRatio||1),d=80*h,m=48*h,f=3*h,p=2*h,v=3*h,E=15*h,_=74*h,g=30*h,S=document.createElement("canvas");S.width=d,S.height=m,S.style.cssText="width:80px;height:48px";var w=S.getContext("2d");return w.font="bold "+9*h+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=r,w.fillRect(0,0,d,m),w.fillStyle=s,w.fillText(n,f,p),w.fillRect(v,E,_,g),w.fillStyle=r,w.globalAlpha=.9,w.fillRect(v,E,_,g),{dom:S,update:function(A,L){a=Math.min(a,A),o=Math.max(o,A),w.fillStyle=r,w.globalAlpha=1,w.fillRect(0,0,d,E),w.fillStyle=s,w.fillText(c(A)+" "+n+" ("+c(a)+"-"+c(o)+")",f,p),w.drawImage(S,v+h,E,_-h,g,v,E,_-h,g),w.fillRect(v+_-h,E,h,g),w.fillStyle=r,w.globalAlpha=.9,w.fillRect(v+_-h,E,h,c((1-A/L)*g))}}},t})})(_r)),_r.exports}var W_=G_();const $_=V_(W_);function Sh(){if(!(typeof window<"u"&&window.location.search.includes("debug")))return{begin:()=>{},end:()=>{},mount:()=>{},auto:()=>{}};const e=new $_;e.showPanel(0);let t;const n=()=>{const r=document.querySelector(".navbar-title");r&&!r.contains(e.dom)&&(e.dom.style.position="static",e.dom.style.display="inline-block",e.dom.style.verticalAlign="middle",e.dom.style.marginLeft="12px",e.dom.style.transform="scale(0.8)",e.dom.style.transformOrigin="left center",e.dom.style.pointerEvents="auto",r.appendChild(e.dom))},s=()=>{zt(()=>{n();const r=()=>{e.update(),t=requestAnimationFrame(r)};r()})};return ts(()=>{t&&cancelAnimationFrame(t),e.dom&&e.dom.parentNode&&e.dom.parentNode.removeChild(e.dom)}),{begin:()=>e.begin(),end:()=>e.end(),mount:n,auto:s}}const X_={class:"rigid-demo-container"},q_={class:"controls-panel"},Y_={class:"control-group"},j_={class:"control-group"},Z_={class:"toggle-label"},K_={key:0,class:"hint"},J_={key:1,class:"hint"},Q_=Se({__name:"RigidBodyLinkPoint",setup(i){Sh().auto();const e=ze(null),t=ze(3),n=ze(!1);let s,r,a,o,c,h,d,m,f,p=[],v=null,E=null,_=[],g=[],S=new z,w=new z,A=0;const L={fixed:new Ci(.15,.15,.15),moving:new vs(.12,16,16),ghost:new vs(.12,8,8)},I={fixed:new Vl({color:16729156}),moving:new Vl({color:4521796}),ghost:new Es({color:4521796,wireframe:!0,transparent:!0,opacity:.5}),body:new _d({color:4491519,transparent:!0,opacity:.15,flatShading:!0}),edge:new xr({color:8961023,transparent:!0,opacity:.5}),trajectory:new xr({color:4521796}),sphere:new Es({color:16729156,wireframe:!0,transparent:!0,opacity:.08}),axis:new Md({color:16777215,dashSize:.2,gapSize:.1})},U=()=>{if(!e.value)return;s=new Go,s.background=new it("#1e1e20");const $=e.value.clientWidth,ee=e.value.clientHeight;r=new jt(45,$/ee,.1,100),r.position.set(4,3,5),a=new jo({antialias:!0,alpha:!0}),a.setSize($,ee),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.value.appendChild(a.domElement),o=new b_(r,a.domElement),o.enableDamping=!0;const se=new Td(16777215,.6);s.add(se);const pe=new Ed(16777215,.8);pe.position.set(5,10,5),s.add(pe),c=new F_([],r,a.domElement),x(),F(),d=new ResizeObserver(()=>{e.value&&(r.aspect=e.value.clientWidth/e.value.clientHeight,r.updateProjectionMatrix(),a.setSize(e.value.clientWidth,e.value.clientHeight))}),d.observe(e.value),Z()},x=()=>{c.addEventListener("dragstart",()=>o.enabled=!1),c.addEventListener("dragend",()=>o.enabled=!0),c.addEventListener("drag",$=>{const ee=$.object;if(t.value===2){const se=p[0].position,pe=new z().subVectors(ee.position,se).normalize();ee.position.copy(se).add(pe.multiplyScalar(g[0]))}else if(t.value===3){const se=new z().subVectors(ee.position,S),pe=se.sub(w.clone().multiplyScalar(se.dot(w))).normalize();ee.position.copy(S).add(pe.multiplyScalar(A))}else if(t.value===4&&E){ee.position.distanceTo(v.position),ee.position.copy(E.position);const se=E.position.clone();E.position.copy(v.position),v.position.copy(se)}K()})},R=$=>{$.forEach(ee=>{s.remove(ee),(ee instanceof $t||ee instanceof ms)&&ee.geometry?.dispose()}),$.length=0},Q=()=>{const $=new z,ee=new oh,se=new z;for(let pe=0;pe<100;pe++){$.set((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*3),se.copy($).normalize(),ee.set(new z(0,0,0),se);const he=ee.intersectObject(m);if(he.length>0&&he[0].distance>=$.length())return $}return new z(0,0,0)},F=()=>{m&&(s.remove(m),m.geometry.dispose()),f&&(s.remove(f),f.geometry.dispose());const $=new Xo(1.5,0);m=new $t($,I.body),m.scale.set(.6+Math.random(),.6+Math.random(),.6+Math.random()),f=new od(new cd($),I.edge),m.add(f),s.add(m),Y()},Y=()=>{R(p),v&&(s.remove(v),v=null),E&&(s.remove(E),E=null);const $=t.value;for(let ee=0;ee<$-1;ee++){const se=new $t(L.fixed,I.fixed);se.position.copy(Q()),s.add(se),p.push(se)}v=new $t(L.moving,I.moving),v.position.copy(Q()),s.add(v),c.objects.length=0,v&&c.objects.push(v),J(),K()},J=()=>{if(!v)return;const $=v.position;if(g=p.map(ee=>ee.position.distanceTo($)),t.value===3){const ee=p[0].position,se=p[1].position;w.subVectors(se,ee).normalize();const he=new z().subVectors($,ee).dot(w);S.copy(ee).add(w.clone().multiplyScalar(he)),A=S.distanceTo($)}if(t.value===4){const ee=p[0].position,se=p[1].position,pe=p[2].position,he=new z().subVectors(se,ee),me=new z().subVectors(pe,ee),We=new z().crossVectors(he,me).normalize(),ut=new z().subVectors($,ee).dot(We),ct=$.clone().sub(We.multiplyScalar(2*ut));E=new $t(L.ghost,I.ghost),E.position.copy(ct),s.add(E)}},ne=$=>{t.value!==$&&(t.value=$,Y())},K=()=>{if(R(_),!v)return;const $=v.position;if(n.value&&p.forEach((ee,se)=>{const pe=g[se],he=new $t(new vs(pe,24,24),I.sphere);he.position.copy(ee.position),s.add(he),_.push(he)}),t.value===2){const ee=new qt().setFromPoints([p[0].position,$]),se=new ms(ee,I.trajectory);s.add(se),_.push(se)}else if(t.value===3){const ee=p[0].position,se=p[1].position,pe=w.clone().multiplyScalar(3),he=new qt().setFromPoints([ee.clone().sub(pe),se.clone().add(pe)]),me=new ms(he,I.axis);me.computeLineDistances(),s.add(me),_.push(me);const ut=new ud(0,0,A,A,0,2*Math.PI,!1,0).getPoints(50),ct=new qt().setFromPoints(ut.map(fe=>new z(fe.x,fe.y,0))),ae=new ms(ct,I.trajectory);ae.position.copy(S);const ge=S.clone().add(w);ae.lookAt(ge),s.add(ae),_.push(ae)}},Z=()=>{h=requestAnimationFrame(Z),o.update(),a.render(s,r)};return zt(()=>U()),Ar(()=>{cancelAnimationFrame(h),d?.disconnect(),R(p),R(_),m&&R([m]),v&&R([v]),E&&R([E]),a?.dispose()}),($,ee)=>(D(),W("div",X_,[P("div",q_,[P("div",Y_,[ee[4]||(ee[4]=P("span",{class:"label"},"约束维度:",-1)),P("button",{class:Ye({active:t.value===2}),onClick:ee[0]||(ee[0]=se=>ne(2))},"2点",2),P("button",{class:Ye({active:t.value===3}),onClick:ee[1]||(ee[1]=se=>ne(3))},"3点",2),P("button",{class:Ye({active:t.value===4}),onClick:ee[2]||(ee[2]=se=>ne(4))},"4点",2)]),P("div",{class:"control-group"},[ee[5]||(ee[5]=P("span",{class:"label"},"操作:",-1)),P("button",{class:"action-btn",onClick:F},"刷新外形"),P("button",{class:"action-btn",onClick:Y},"刷新点位")]),P("div",j_,[P("label",Z_,[Cc(P("input",{type:"checkbox","onUpdate:modelValue":ee[3]||(ee[3]=se=>n.value=se),onChange:K},null,544),[[kh,n.value]]),ee[6]||(ee[6]=jn(" 显示约束球面 ",-1))])]),t.value<4?(D(),W("div",K_,"💡 提示：尝试使用鼠标拖拽绿色的动点")):(D(),W("div",J_,"💡 提示：4点锁定状态，点击动点可在两个镜像解之间切换"))]),P("div",{ref_key:"canvasRef",ref:e,class:"canvas-wrapper"},null,512)]))}}),ev=ye(Q_,[["__scopeId","data-v-6f5edf98"]]),tv=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),nv={class:"switch_coordinate_systems"},iv=Se({__name:"SwitchCoordinateSystems",setup(i){Sh().auto();let e;const t=ze(null),n=()=>{if(!t.value)return;const s=t.value.clientWidth,r=t.value.clientHeight;new Go,new jt(60,s/r,1,1e3),e=new jo,e.setSize(s,r),t.value.appendChild(e.domElement)};return zt(()=>n()),Ar(()=>e.dispose()),(s,r)=>(D(),W("div",nv,[r[0]||(r[0]=zh('<div class="switcher" data-v-da09df8e><select name="switcher" id="switcher" data-v-da09df8e><option value="Catesian" data-v-da09df8e>直角坐标系</option><option value="Cylindrical" data-v-da09df8e>柱坐标系</option><option value="Spherical" data-v-da09df8e>球坐标系</option></select></div>',1)),P("div",{ref_key:"canvasRef",ref:t},null,512)]))}}),sv=ye(iv,[["__scopeId","data-v-da09df8e"]]),rv=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),av=Se({__name:"TestThree",setup(i){const e=ze(null);let t,n,s,r;return zt(()=>{if(!e.value)return;n=new Go,s=new jt(60,e.value.clientWidth/e.value.clientHeight,1,800),s.position.z=5,t=new jo,t.setSize(e.value.clientWidth,e.value.clientHeight),e.value.appendChild(t.domElement);const a=new Ci,o=new Es({wireframe:!0}),c=new $t(a,o);n.add(c);const h=new xd(16776960,100);h.position.set(5,5,5),n.add(h);const d=()=>{r=requestAnimationFrame(d),c.rotation.x+=.1,c.rotation.z+=.1,t.render(n,s)};d()}),Ar(()=>{cancelAnimationFrame(r),t.dispose()}),(a,o)=>(D(),W("div",{ref_key:"container",ref:e,class:"three-container"},null,512))}}),ov=ye(av,[["__scopeId","data-v-98d62b35"]]),lv=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"})),cv={class:"ig-base"},xh=Se({__name:"IGBase",props:{items:{},gallery:{}},setup(i){const e=i,t=ze(0),n=r=>{t.value=r},s=Ne(()=>e.gallery||`ig-group-${Math.random().toString(36).slice(2,7)}`);return(r,a)=>(D(),W("div",cv,[ie(r.$slots,"default",{activeIndex:t.value,activeItem:i.items[t.value],setIndex:n,galleryId:s.value})]))}}),hv=Object.freeze(Object.defineProperty({__proto__:null,default:xh},Symbol.toStringTag,{value:"Module"})),uv=["href","fill"],dv=Se({__name:"SvgIcon",props:{name:{},size:{default:"1em"},width:{},height:{},color:{default:"currentColor"},prefix:{default:"icon"}},setup(i){const e=i,t=Ne(()=>`#${e.prefix}-${e.name}`),n=Ne(()=>({width:e.width||e.size,height:e.height||e.size,color:e.color}));return(s,r)=>(D(),W("svg",{"aria-hidden":"true",class:"svg-icon",style:wi(n.value)},[P("use",{href:t.value,fill:i.color},null,8,uv)],4))}}),Pn=ye(dv,[["__scopeId","data-v-9bb24403"]]),xc={zh:{DOWNLOAD:"下载",ZOOM:"缩放",CLOSE:"关闭",PREV:"上一张",NEXT:"下一张"},en:{DOWNLOAD:"Download",ZOOM:"Zoom",CLOSE:"Close",PREV:"Previous",NEXT:"Next"},ja:{DOWNLOAD:"ダウンロード",ZOOM:"ズーム",CLOSE:"閉じる",PREV:"前へ",NEXT:"次へ"}},fv=()=>{const{lang:i}=rn();return{bind:async n=>{if(!n||typeof window>"u")return;const{Fancybox:s}=await wa(async()=>{const{Fancybox:h}=await import("./index.Dq_o35HK.js");return{Fancybox:h}},[]),r=`[data-fancybox="${n}"]`,a=i.value?.slice(0,2)||"en",c={l10n:xc[a]||xc.en,Hash:!1,Carousel:{Toolbar:{display:{left:["counter"],right:["zoomIn","autoplay","thumbs","download","close"]}}}};s.bind(r,c)},unbind:async n=>{if(typeof window>"u")return;const{Fancybox:s}=await wa(async()=>{const{Fancybox:r}=await import("./index.Dq_o35HK.js");return{Fancybox:r}},[]);s.unbind(`[data-fancybox="${n}"]`)}}},pv={class:"fancybox-wrapper"},mv=["href","data-fancybox"],gv=["alt","src","width","height"],_v={class:"meta"},vv=["title"],yv={class:"information"},Mv=20,Sv=Se({__name:"Image",props:{href:{},src:{},alt:{},width:{},height:{},filesize:{},gallery:{default:"default-gallery"},fancyboxOptions:{}},setup(i){const{lang:e}=rn(),{bind:t,unbind:n}=fv(),s=i,r=Ne(()=>s.href||s.src),a=Ne(()=>{if(s.alt&&s.alt.trim()!=="")return s.alt;try{const c=new URL(s.src,location.origin).pathname;return decodeURIComponent(c.split("/").at(-1)??"image")}catch{return"image"}}),o=Ne(()=>{if(s.alt&&s.alt.trim()!=="")return s.alt;const c=a.value;if(!c)return"image";const h=c.replace(/\.[^/.]+$/,"");return h.length>Mv?"image":h});return zt(()=>{t(s.gallery)}),Pc(()=>{n(s.gallery),t(s.gallery)}),ts(()=>{n(s.gallery)}),(c,h)=>(D(),W("div",pv,[P("a",{class:"fancybox",href:r.value,"data-fancybox":i.gallery},[P("img",{loading:"lazy",alt:a.value,src:i.src,width:i.width,height:i.height},null,8,gv),P("div",_v,[xe(Pn,{name:"image01",size:"20px"}),P("span",{class:"filename",title:a.value},De(o.value),9,vv),P("span",yv,De(i.width)+"×"+De(i.height)+" "+De(i.filesize),1)])],8,mv)]))}}),bh=ye(Sv,[["__scopeId","data-v-4b8b6685"]]),xv={class:"ig-style-a-container"},bv={class:"controls"},Ev=["onClick"],Tv={class:"image-display"},wv=Se({__name:"IGStyleA",props:{items:{},gallery:{}},setup(i){return(e,t)=>(D(),Ce(xh,{items:i.items,gallery:i.gallery},{default:ce(({activeIndex:n,setIndex:s,galleryId:r})=>[P("div",xv,[P("div",bv,[(D(!0),W(st,null,bt(i.items,(a,o)=>(D(),W("button",{key:o,class:Ye({active:n===o}),onClick:c=>s(o)},De(a.label),11,Ev))),128))]),P("div",Tv,[(D(!0),W(st,null,bt(i.items,(a,o)=>Cc((D(),W("div",{key:o},[xe(bh,{src:a.src,width:a.width,height:a.height,filesize:a.filesize,gallery:r},null,8,["src","width","height","filesize","gallery"])])),[[Vh,n===o]])),128))])])]),_:1},8,["items","gallery"]))}}),Av=ye(wv,[["__scopeId","data-v-5ee0e960"]]),Rv=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),Cv={class:"ex-label-group"},Pv={key:0,class:"ex-title"},Dv={key:1,class:"ex-tip"},Lv={class:"ex-inner"},Iv={class:"ex-content"},Nv=Se({__name:"ExampleCollapse",props:{title:{}},setup(i){const e=ze(!0),t=ze(null),n=ze(void 0);zt(async()=>{await ws(),t.value&&(n.value=`${t.value.scrollHeight}px`)});const s=()=>{t.value&&(e.value?(n.value==="auto"&&(n.value=`${t.value.scrollHeight}px`,t.value.offsetHeight),n.value="0px",e.value=!1):(n.value=`${t.value.scrollHeight}px`,e.value=!0,setTimeout(()=>{e.value&&(n.value="auto")},400)))};return(r,a)=>(D(),W("div",{class:Ye(["ex-wrapper",{"is-expanded":e.value}])},[P("div",{class:"ex-header",onClick:s},[P("div",Cv,[a[0]||(a[0]=P("span",{class:"ex-tag"},"EXAMPLE",-1)),i.title?(D(),W("span",Pv,De(i.title),1)):(D(),W("span",Dv,"点击收起/展开详情"))]),P("div",{class:Ye(["ex-icon",{"rotate-180":e.value}])},[xe(Pn,{name:"hero-side-down",size:"20px"})],2)]),P("div",{ref_key:"bodyRef",ref:t,class:"ex-body",style:wi({maxHeight:n.value})},[P("div",Lv,[P("div",Iv,[ie(r.$slots,"default",{},void 0,!0)])])],4)],2))}}),Uv=ye(Nv,[["__scopeId","data-v-8fd22329"]]),Fv=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),Ov=["href"],Bv=Se({__name:"FootnoteCite",props:{num:{}},setup(i){const e=i,t=ze(null),n=ze("#"),s=r=>{const a=n.value;a!=="#"&&(history.pushState(null,"",a),window.dispatchEvent(new HashChangeEvent("hashchange")))};return zt(()=>{if(t.value){const a=t.value.closest(".section-group")?.querySelector("h2");a?.id&&(n.value=`#ref-${a.id}-${e.num}`)}}),(r,a)=>(D(),W("a",{ref_key:"citeRef",ref:t,href:n.value,class:"ref-cite",onClick:Ro(s,["prevent"])},De(i.num),9,Ov))}}),kv=ye(Bv,[["__scopeId","data-v-78bd23b0"]]),zv=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),Vv=Se({__name:"ReferenceCollapse",setup(i){const e=ze(""),t=ze(!1),n=ze(!1),s=ze(0),r=ze(null),a=ze("76px"),o=()=>{r.value&&(a.value=`${r.value.scrollHeight}px`,t.value=!0)},c=()=>{r.value&&(t.value?(a.value=`${r.value.scrollHeight}px`,r.value.offsetHeight,a.value="76px",t.value=!1):o())},h=()=>{const d=decodeURIComponent(window.location.hash);if(!d||!r.value)return;const m=d.replace("#",""),f=r.value.querySelector(`[id="${CSS.escape(m)}"]`);f&&(t.value||o(),setTimeout(()=>{f.scrollIntoView({behavior:"smooth",block:"center"}),f.classList.add("ref-highlight"),setTimeout(()=>f.classList.remove("ref-highlight"),2e3)},350))};return zt(async()=>{await ws();const d=r.value?.closest(".section-group"),m=d?.querySelector("h2");m?.id&&d&&(e.value=m.id,d.querySelectorAll(".dynamic-ref-item").forEach(p=>{const v=p.getAttribute("data-num");p.id=`ref-${m.id}-${v}`,p.classList.remove("dynamic-ref-item")})),setTimeout(()=>{if(r.value){const f=r.value.querySelectorAll("li");s.value=f.length,s.value>2||r.value.scrollHeight>100?n.value=!0:a.value="auto"}},200),window.addEventListener("hashchange",h),h()}),ts(()=>{window.removeEventListener("hashchange",h)}),(d,m)=>(D(),W("div",{class:Ye(["ref-wrapper",{"is-expanded":t.value}])},[P("div",{ref_key:"contentRef",ref:r,class:"ref-content",style:wi({maxHeight:t.value?a.value:"76px"})},[ie(d.$slots,"default",{},void 0,!0)],4),n.value?(D(),W("div",{key:0,class:"ref-expand-ctrl",onClick:c},[P("span",null,De(t.value?"收起资料":`展开更多 (${s.value})`),1),P("div",{class:Ye(["icon-box",{"rotate-180":t.value}])},[xe(Pn,{name:"hero-side-down",size:"24px"})],2)])):Ae("",!0)],2))}}),Hv=ye(Vv,[["__scopeId","data-v-00954316"]]),Gv=Object.freeze(Object.defineProperty({__proto__:null,default:Hv},Symbol.toStringTag,{value:"Module"})),Wv={class:"body-content"},$v=Se({__name:"SectionGroup",setup(i){const e=ze(!1),t=ze(null),n=ze(null),s=ze("auto"),{hash:r}=Co().route,a=async()=>{n.value&&(s.value=`${n.value.scrollHeight}px`,await ws(),n.value.offsetHeight,e.value=!e.value,s.value=e.value?"0px":`${n.value.scrollHeight}px`)},o=()=>{if(!r)return;const c=decodeURIComponent(r).substring(1),h=t.value?.querySelector("h2");h&&h.id===c&&(e.value=!1,s.value="auto")};return zt(()=>{o()}),_n(()=>r,()=>o()),(c,h)=>(D(),W("div",{class:Ye(["section-group",{"is-collapsed":e.value}])},[P("div",{class:"section-header",ref_key:"titleRef",ref:t},[P("div",{class:"arrow-icon",onClick:Ro(a,["stop"])},[xe(Pn,{name:"hero-side-down",size:"24px"})]),ie(c.$slots,"title",{},void 0,!0)],512),P("div",{ref_key:"bodyRef",ref:n,class:"section-body",style:wi({maxHeight:e.value?"0px":s.value==="auto"?"none":s.value}),onTransitionend:h[0]||(h[0]=d=>!e.value&&(s.value="auto"))},[P("div",Wv,[ie(c.$slots,"content",{},void 0,!0)])],36)],2))}}),Xv=ye($v,[["__scopeId","data-v-457aafeb"]]),qv=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),Yv=["href"],jv=Se({__name:"SmartLink",props:{href:{}},setup(i){return(e,t)=>(D(),W("a",{href:i.href,class:"smart-link"},[ie(e.$slots,"default",{},void 0,!0)],8,Yv))}}),Zv=ye(jv,[["__scopeId","data-v-abff3f34"]]),Kv=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),Jv={},Qv={class:"ghost-note"},e0={class:"ghost-content"};function t0(i,e){return D(),W("aside",Qv,[P("div",e0,[ie(i.$slots,"default",{},void 0,!0)])])}const n0=ye(Jv,[["render",t0],["__scopeId","data-v-b4dfe3aa"]]),i0=Object.freeze(Object.defineProperty({__proto__:null,default:n0},Symbol.toStringTag,{value:"Module"})),ys=ze(!0),s0={key:0,class:"whisper-body"},r0={key:1,class:"whisper-placeholder"},a0=Se({__name:"Whisper",setup(i){const e=ze(ys.value);_n(ys,n=>{e.value=n});const t=n=>{n.ctrlKey||n.metaKey||n.button===1||(e.value=!e.value)};return(n,s)=>(D(),W("span",{class:Ye(["whisper-root",{"is-active":e.value}]),onClick:s[0]||(s[0]=r=>t(r))},[s[1]||(s[1]=P("span",{class:"whisper-bracket left"},"｢",-1)),xe(ns,{name:"whisper-fade"},{default:ce(()=>[e.value?(D(),W("span",s0,[ie(n.$slots,"default",{},void 0,!0)])):(D(),W("span",r0))]),_:3}),s[2]||(s[2]=P("span",{class:"whisper-bracket right"},"｣",-1))],2))}}),o0=ye(a0,[["__scopeId","data-v-f3b83d2f"]]),l0=Object.freeze(Object.defineProperty({__proto__:null,default:o0},Symbol.toStringTag,{value:"Module"})),c0={key:0,class:"VPBackdrop"},h0=Se({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(i){return(e,t)=>(D(),Ce(ns,{name:"fade"},{default:ce(()=>[i.show?(D(),W("div",c0)):Ae("",!0)]),_:1}))}}),u0=ye(h0,[["__scopeId","data-v-990b0f25"]]),et=rn;function d0(i,e){let t,n=!1;return()=>{t&&clearTimeout(t),n?t=setTimeout(i,e):(i(),(n=!0)&&setTimeout(()=>n=!1,e))}}function bo(i){return i.startsWith("/")?i:`/${i}`}function Ko(i){const{pathname:e,search:t,hash:n,protocol:s}=new URL(i,"http://a.com");if(Hh(i)||i.startsWith("#")||!s.startsWith("http")||!Gh(e))return i;const{site:r}=et(),a=e.endsWith("/")||e.endsWith(".html")?i:i.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${t}${n}`);return Ot(a)}function Ds({correspondingLink:i=!1}={}){const{site:e,localeIndex:t,page:n,theme:s,hash:r}=et(),a=Ne(()=>({label:e.value.locales[t.value]?.label,link:e.value.locales[t.value]?.link||(t.value==="root"?"/":`/${t.value}/`)}));return{localeLinks:Ne(()=>Object.entries(e.value.locales).flatMap(([c,h])=>a.value.label===h.label?[]:{text:h.label,link:f0(h.link||(c==="root"?"/":`/${c}/`),s.value.i18nRouting!==!1&&i,n.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+r.value,lang:h.lang,dir:h.dir})),currentLang:a}}function f0(i,e,t,n){return e?i.replace(/\/$/,"")+bo(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,n?".html":"")):i}const p0={class:"NotFound"},m0={class:"code"},g0={class:"title"},_0={class:"quote"},v0={class:"action"},y0=["href","aria-label"],M0=Se({__name:"NotFound",setup(i){const{theme:e}=et(),{currentLang:t}=Ds();return(n,s)=>(D(),W("div",p0,[P("p",m0,De(O(e).notFound?.code??"404"),1),P("h1",g0,De(O(e).notFound?.title??"PAGE NOT FOUND"),1),s[0]||(s[0]=P("div",{class:"divider"},null,-1)),P("blockquote",_0,De(O(e).notFound?.quote??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),P("div",v0,[P("a",{class:"link",href:O(Ot)(O(e).notFound?.link??O(t).link),"aria-label":O(e).notFound?.linkLabel??"go to home"},De(O(e).notFound?.linkText??"Take me home"),9,y0)])]))}}),S0=ye(M0,[["__scopeId","data-v-6bf3c4ae"]]);function Eh(i,e){if(Array.isArray(i))return vr(i);if(i==null)return[];e=bo(e);const t=Object.keys(i).sort((s,r)=>r.split("/").length-s.split("/").length).find(s=>e.startsWith(bo(s))),n=t?i[t]:[];return Array.isArray(n)?vr(n):vr(n.items,n.base)}function x0(i){const e=[];let t=0;for(const n in i){const s=i[n];if(s.items){t=e.push(s);continue}e[t]||e.push({items:[]}),e[t].items.push(s)}return e}function b0(i){const e=[];function t(n){for(const s of n)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(i),e}function Eo(i,e){return Array.isArray(e)?e.some(t=>Eo(i,t)):Ei(i,e.link)?!0:e.items?Eo(i,e.items):!1}function vr(i,e){return[...i].map(t=>{const n={...t},s=n.base||e;return s&&n.link&&(n.link=s+n.link.replace(/^\//,s.endsWith("/")?"":"/")),n.items&&(n.items=vr(n.items,s)),n})}function E0(){const{hasSidebar:i}=Jn(),e=dl("(min-width: 960px)"),t=dl("(min-width: 1280px)");return{isAsideEnabled:Ne(()=>!t.value&&!e.value?!1:i.value?t.value:e.value)}}const T0=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,To=[];function Th(i){return typeof i.outline=="object"&&!Array.isArray(i.outline)&&i.outline.label||i.outlineTitle||"On this page"}function w0(i){const e=[...document.querySelectorAll(".VPDoc h1, .VPDoc h2, .VPDoc h3, .VPDoc h4, .VPDoc h5, .VPDoc h6")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const n=Number(t.tagName[1]);return{element:t,title:A0(t),link:"#"+t.id,level:n}});return R0(e,i)}function A0(i){let e="";for(const t of i.childNodes)if(t.nodeType===1){if(T0.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function R0(i,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[n,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return D0(i,n,s)}function C0(i,e){const{isAsideEnabled:t}=E0(),n=d0(r,100);let s=null;zt(()=>{requestAnimationFrame(r),window.addEventListener("scroll",n)}),Pc(()=>{a(location.hash)}),ts(()=>{window.removeEventListener("scroll",n)});function r(){if(!t.value)return;const o=window.scrollY,c=window.innerHeight,h=document.body.offsetHeight,d=Math.abs(o+c-h)<1,m=To.map(({element:p,link:v})=>({link:v,top:P0(p)})).filter(({top:p})=>!Number.isNaN(p)).sort((p,v)=>p.top-v.top);if(!m.length){a(null);return}if(o<1){a(null);return}if(d){a(m[m.length-1].link);return}let f=null;for(const{link:p,top:v}of m){if(v>o+Wh()+4)break;f=p}a(f)}function a(o){s&&s.classList.remove("active"),o==null?s=null:s=i.value.querySelector(`a[href="${decodeURIComponent(o)}"]`);const c=s;c?(c.classList.add("active"),e.value.style.top=c.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function P0(i){let e=0;for(;i!==document.body;){if(i===null)return NaN;e+=i.offsetTop,i=i.offsetParent}return e}function D0(i,e,t){To.length=0;const n=[],s=[];return i.forEach(r=>{const a={...r,children:[]};let o=s[s.length-1];for(;o&&o.level>=a.level;)s.pop(),o=s[s.length-1];if(a.element.classList.contains("ignore-header")||o&&"shouldIgnore"in o){s.push({level:a.level,shouldIgnore:!0});return}a.level>t||a.level<e||(To.push({element:a.element,link:a.link}),o?o.children.push(a):n.push(a),s.push(a))}),n}const Xi=ze(!1);function L0(i){let e;Rr(()=>{e=Xi.value?document.activeElement:void 0}),zt(()=>{window.addEventListener("keyup",t)}),ts(()=>{window.removeEventListener("keyup",t)});function t(n){n.key==="Escape"&&Xi.value&&(i(),e?.focus())}}function I0(){function i(){Xi.value=!0}function e(){Xi.value=!1}function t(){Xi.value?e():i()}return{isOpen:Xi,open:i,close:e,toggle:t}}function N0(i){const{page:e,hash:t}=et(),n=ze(!1),s=Ne(()=>i.value.collapsed!=null),r=Ne(()=>!!i.value.link),a=ze(!1),o=()=>{a.value=Ei(e.value.relativePath,i.value.link)};_n([e,i,t],o),zt(o);const c=Ne(()=>a.value?!0:i.value.items?Eo(e.value.relativePath,i.value.items):!1),h=Ne(()=>!!(i.value.items&&i.value.items.length));Rr(()=>{n.value=!!(s.value&&i.value.collapsed)}),Po(()=>{(a.value||c.value)&&(n.value=!1)});function d(){s.value&&(n.value=!n.value)}return{collapsed:n,collapsible:s,isLink:r,isActiveLink:a,hasActiveLink:c,hasChildren:h,toggle:d}}const wo=Cr([]),Ms=Cr([]),Ao=Cr(!1);function Jn(){const{frontmatter:i,theme:e}=et(),t=Ne(()=>!!(i.value.isHome??i.value.layout==="home")),n=Ne(()=>i.value.sidebar!==!1&&Ms.value.length>0&&!t.value),s=Ne(()=>n.value&&Ao.value),r=Ne(()=>n.value?x0(Ms.value):[]),a=Ne(()=>t.value?!1:i.value.aside!=null?!!i.value.aside:e.value.aside!==!1),o=Ne(()=>a.value?i.value.aside==null?e.value.aside==="left":i.value.aside==="left":!1),c=Ne(()=>wo.value.length>0);return{isHome:t,sidebar:fl(Ms),sidebarGroups:r,hasSidebar:n,isSidebarEnabled:s,hasAside:a,leftAside:o,headers:fl(wo),hasLocalNav:c}}function U0({closeSidebar:i}){const{frontmatter:e,page:t,theme:n}=et();_n(()=>[t.value.relativePath,n.value.sidebar],([r,a])=>{const o=a?Eh(a,r):[];JSON.stringify(o)!==JSON.stringify(Ms.value)&&(Ms.value=o)},{immediate:!0,deep:!0,flush:"sync"}),Dc(()=>{wo.value=w0(e.value.outline??n.value.outline)}),As&&(Ao.value=window.innerWidth>=960,window.addEventListener("resize",()=>{Ao.value=window.innerWidth>=960},{passive:!0}));const s=Rs();_n(()=>s.path,i),L0(i)}const wh=Symbol("layout-info"),F0=["href","title"],O0=Se({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(i){return(e,t)=>{const n=cn("VPDocOutlineItem",!0);return D(),W("ul",{class:Ye(["VPDocOutlineItem",i.root?"root":"nested"])},[(D(!0),W(st,null,bt(i.headers,({children:s,link:r,title:a})=>(D(),W("li",null,[P("a",{class:"outline-link",href:r,title:a},De(a),9,F0),s?.length?(D(),Ce(n,{key:0,headers:s},null,8,["headers"])):Ae("",!0)]))),256))],2)}}}),Ah=ye(O0,[["__scopeId","data-v-3416b541"]]),B0={class:"content"},k0={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},z0=Se({__name:"VPDocAsideOutline",setup(i){const{theme:e}=et(),t=ze(),n=ze(),{headers:s,hasLocalNav:r}=Jn();return C0(t,n),(a,o)=>(D(),W("nav",{"aria-labelledby":"doc-outline-aria-label",class:Ye(["VPDocAsideOutline",{"has-outline":O(r)}]),ref_key:"container",ref:t},[P("div",B0,[P("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),P("div",k0,De(O(Th)(O(e))),1),xe(Ah,{headers:O(s),root:!0},null,8,["headers"])])],2))}}),V0=ye(z0,[["__scopeId","data-v-b31e0f11"]]),H0={class:"VPDocAsideCarbonAds"},G0=Se({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(i){const e=()=>null;return(t,n)=>(D(),W("div",H0,[xe(O(e),{"carbon-ads":i.carbonAds},null,8,["carbon-ads"])]))}}),W0={class:"VPDocAside"},$0=Se({__name:"VPDocAside",setup(i){const{theme:e}=et();return(t,n)=>(D(),W("div",W0,[ie(t.$slots,"aside-top",{},void 0,!0),ie(t.$slots,"aside-outline-before",{},void 0,!0),xe(V0),ie(t.$slots,"aside-outline-after",{},void 0,!0),n[0]||(n[0]=P("div",{class:"spacer"},null,-1)),ie(t.$slots,"aside-ads-before",{},void 0,!0),O(e).carbonAds?(D(),Ce(G0,{key:0,"carbon-ads":O(e).carbonAds},null,8,["carbon-ads"])):Ae("",!0),ie(t.$slots,"aside-ads-after",{},void 0,!0),ie(t.$slots,"aside-bottom",{},void 0,!0)]))}}),X0=ye($0,[["__scopeId","data-v-89231a51"]]);function q0(){const{theme:i,page:e}=et();return Ne(()=>{const{text:t="Edit this page",pattern:n=""}=i.value.editLink||{};let s;return typeof n=="function"?s=n(e.value):s=n.replace(/:path/g,e.value.filePath),{url:s,text:t}})}function Y0(){const{page:i,theme:e,frontmatter:t}=et();return Ne(()=>{const n=Eh(e.value.sidebar,i.value.relativePath),s=b0(n),r=j0(s,h=>h.link.replace(/[?#].*$/,"")),a=r.findIndex(h=>Ei(i.value.relativePath,h.link)),o=e.value.docFooter?.prev===!1&&!t.value.prev||t.value.prev===!1,c=e.value.docFooter?.next===!1&&!t.value.next||t.value.next===!1;return{prev:o?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??r[a-1]?.docFooterText??r[a-1]?.text,link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??r[a-1]?.link},next:c?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??r[a+1]?.docFooterText??r[a+1]?.text,link:(typeof t.value.next=="object"?t.value.next.link:void 0)??r[a+1]?.link}}})}function j0(i,e){const t=new Set;return i.filter(n=>{const s=e(n);return t.has(s)?!1:t.add(s)})}const Dn=Se({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(i){const e=i,t=Ne(()=>e.tag??(e.href?"a":"span")),n=Ne(()=>e.href&&Lc.test(e.href)||e.target==="_blank");return(s,r)=>(D(),Ce(wn(t.value),{class:Ye(["VPLink",{link:i.href,"vp-external-link-icon":n.value,"no-icon":i.noIcon}]),href:i.href?O(Ko)(i.href):void 0,target:i.target??(n.value?"_blank":void 0),rel:i.rel??(n.value?"noreferrer":void 0)},{default:ce(()=>[ie(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Z0={class:"VPLastUpdated"},K0=["datetime"],J0=Se({__name:"VPDocFooterLastUpdated",setup(i){const{theme:e,page:t,lang:n}=et(),{language:s}=Xh(),r=$h("timeRef"),a=Ne(()=>new Date(t.value.lastUpdated)),o=Ne(()=>a.value.toISOString()),c=Cr("");return zt(()=>{Rr(()=>{const h=e.value.lastUpdated?.formatOptions?.forceLocale?n.value:s.value;c.value=new Intl.DateTimeFormat(h,e.value.lastUpdated?.formatOptions??{dateStyle:"medium",timeStyle:"medium"}).format(a.value),h&&n.value!==h?r.value?.setAttribute("lang",h):r.value?.removeAttribute("lang")})}),(h,d)=>(D(),W("p",Z0,[jn(De(O(e).lastUpdated?.text||O(e).lastUpdatedText||"Last updated")+": ",1),P("time",{ref_key:"timeRef",ref:r,datetime:o.value},De(c.value),9,K0)]))}}),Q0=ye(J0,[["__scopeId","data-v-49107c58"]]),e1={key:0,class:"VPDocFooter"},t1={key:0,class:"edit-info"},n1={key:0,class:"edit-link"},i1={key:1,class:"last-updated"},s1={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},r1={class:"pager"},a1=["innerHTML"],o1=["innerHTML"],l1={class:"pager"},c1=["innerHTML"],h1=["innerHTML"],u1=Se({__name:"VPDocFooter",setup(i){const{theme:e,page:t,frontmatter:n}=et(),s=q0(),r=Y0(),a=Ne(()=>e.value.editLink&&n.value.editLink!==!1),o=Ne(()=>t.value.lastUpdated),c=Ne(()=>a.value||o.value||r.value.prev||r.value.next);return(h,d)=>c.value?(D(),W("footer",e1,[ie(h.$slots,"doc-footer-before",{},void 0,!0),a.value||o.value?(D(),W("div",t1,[a.value?(D(),W("div",n1,[xe(Dn,{class:"edit-link-button",href:O(s).url,"no-icon":!0},{default:ce(()=>[d[0]||(d[0]=P("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),jn(" "+De(O(s).text),1)]),_:1},8,["href"])])):Ae("",!0),o.value?(D(),W("div",i1,[xe(Q0)])):Ae("",!0)])):Ae("",!0),O(r).prev?.link||O(r).next?.link?(D(),W("nav",s1,[d[1]||(d[1]=P("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),P("div",r1,[O(r).prev?.link?(D(),Ce(Dn,{key:0,class:"pager-link prev",href:O(r).prev.link},{default:ce(()=>[P("span",{class:"desc",innerHTML:O(e).docFooter?.prev||"Previous page"},null,8,a1),P("span",{class:"title",innerHTML:O(r).prev.text},null,8,o1)]),_:1},8,["href"])):Ae("",!0)]),P("div",l1,[O(r).next?.link?(D(),Ce(Dn,{key:0,class:"pager-link next",href:O(r).next.link},{default:ce(()=>[P("span",{class:"desc",innerHTML:O(e).docFooter?.next||"Next page"},null,8,c1),P("span",{class:"title",innerHTML:O(r).next.text},null,8,h1)]),_:1},8,["href"])):Ae("",!0)])])):Ae("",!0)])):Ae("",!0)}}),d1=ye(u1,[["__scopeId","data-v-7bdc6e17"]]),f1={class:"container"},p1={class:"aside-container"},m1={class:"aside-content"},g1={class:"content"},_1={class:"content-container"},v1={class:"main"},y1=Se({__name:"VPDoc",setup(i){const{theme:e}=et(),t=Rs(),{hasSidebar:n,hasAside:s,leftAside:r}=Jn(),a=Ne(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(o,c)=>{const h=cn("Content");return D(),W("div",{class:Ye(["VPDoc",{"has-sidebar":O(n),"has-aside":O(s)}])},[ie(o.$slots,"doc-top",{},void 0,!0),P("div",f1,[O(s)?(D(),W("div",{key:0,class:Ye(["aside",{"left-aside":O(r)}])},[c[0]||(c[0]=P("div",{class:"aside-curtain"},null,-1)),P("div",p1,[P("div",m1,[xe(X0,null,{"aside-top":ce(()=>[ie(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":ce(()=>[ie(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":ce(()=>[ie(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":ce(()=>[ie(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":ce(()=>[ie(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":ce(()=>[ie(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):Ae("",!0),P("div",g1,[P("div",_1,[ie(o.$slots,"doc-before",{},void 0,!0),P("main",v1,[xe(h,{class:Ye(["vp-doc",[a.value,O(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),xe(d1,null,{"doc-footer-before":ce(()=>[ie(o.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),ie(o.$slots,"doc-after",{},void 0,!0)])])]),ie(o.$slots,"doc-bottom",{},void 0,!0)],2)}}}),M1=ye(y1,[["__scopeId","data-v-50c5188d"]]),S1=Se({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(i){const e=i,t=Ne(()=>e.href&&Lc.test(e.href)),n=Ne(()=>e.tag||(e.href?"a":"button"));return(s,r)=>(D(),Ce(wn(n.value),{class:Ye(["VPButton",[i.size,i.theme]]),href:i.href?O(Ko)(i.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:ce(()=>[ie(s.$slots,"default",{},()=>[jn(De(i.text),1)],!0)]),_:3},8,["class","href","target","rel"]))}}),x1=ye(S1,[["__scopeId","data-v-be77e19f"]]),b1=["src","alt"],E1=Se({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(i){return(e,t)=>{const n=cn("VPImage",!0);return i.image?(D(),W(st,{key:0},[typeof i.image=="string"||"src"in i.image?(D(),W("img",gn({key:0,class:"VPImage"},typeof i.image=="string"?e.$attrs:{...i.image,...e.$attrs},{src:O(Ot)(typeof i.image=="string"?i.image:i.image.src),alt:i.alt??(typeof i.image=="string"?"":i.image.alt||"")}),null,16,b1)):(D(),W(st,{key:1},[xe(n,gn({class:"dark",image:i.image.dark,alt:i.image.alt},e.$attrs),null,16,["image","alt"]),xe(n,gn({class:"light",image:i.image.light,alt:i.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):Ae("",!0)}}}),wr=ye(E1,[["__scopeId","data-v-29d3dc33"]]),T1={class:"container"},w1={class:"main"},A1={class:"heading"},R1=["innerHTML"],C1=["innerHTML"],P1=["innerHTML"],D1={key:0,class:"actions"},L1={key:0,class:"image"},I1={class:"image-container"},N1=Se({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(i){const{heroImageSlotExists:e}=Pr(wh);return(t,n)=>(D(),W("div",{class:Ye(["VPHero",{"has-image":i.image||O(e)}])},[P("div",T1,[P("div",w1,[ie(t.$slots,"home-hero-info-before",{},void 0,!0),ie(t.$slots,"home-hero-info",{},()=>[P("h1",A1,[i.name?(D(),W("span",{key:0,innerHTML:i.name,class:"name clip"},null,8,R1)):Ae("",!0),i.text?(D(),W("span",{key:1,innerHTML:i.text,class:"text"},null,8,C1)):Ae("",!0)]),i.tagline?(D(),W("p",{key:0,innerHTML:i.tagline,class:"tagline"},null,8,P1)):Ae("",!0)],!0),ie(t.$slots,"home-hero-info-after",{},void 0,!0),i.actions?(D(),W("div",D1,[(D(!0),W(st,null,bt(i.actions,s=>(D(),W("div",{key:s.link,class:"action"},[xe(x1,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):Ae("",!0),ie(t.$slots,"home-hero-actions-after",{},void 0,!0)]),i.image||O(e)?(D(),W("div",L1,[P("div",I1,[n[0]||(n[0]=P("div",{class:"image-bg"},null,-1)),ie(t.$slots,"home-hero-image",{},()=>[i.image?(D(),Ce(wr,{key:0,class:"image-src",image:i.image},null,8,["image"])):Ae("",!0)],!0)])])):Ae("",!0)])],2))}}),U1=ye(N1,[["__scopeId","data-v-838c7b39"]]),F1=Se({__name:"VPHomeHero",setup(i){const{frontmatter:e}=et();return(t,n)=>O(e).hero?(D(),Ce(U1,{key:0,class:"VPHomeHero",name:O(e).hero.name,text:O(e).hero.text,tagline:O(e).hero.tagline,image:O(e).hero.image,actions:O(e).hero.actions},{"home-hero-info-before":ce(()=>[ie(t.$slots,"home-hero-info-before")]),"home-hero-info":ce(()=>[ie(t.$slots,"home-hero-info")]),"home-hero-info-after":ce(()=>[ie(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":ce(()=>[ie(t.$slots,"home-hero-actions-after")]),"home-hero-image":ce(()=>[ie(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):Ae("",!0)}}),O1={class:"box"},B1={key:0,class:"icon"},k1=["innerHTML"],z1=["innerHTML"],V1=["innerHTML"],H1={key:4,class:"link-text"},G1={class:"link-text-value"},W1=Se({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(i){return(e,t)=>(D(),Ce(Dn,{class:"VPFeature",href:i.link,rel:i.rel,target:i.target,"no-icon":!0,tag:i.link?"a":"div"},{default:ce(()=>[P("article",O1,[typeof i.icon=="object"&&i.icon.wrap?(D(),W("div",B1,[xe(wr,{image:i.icon,alt:i.icon.alt,height:i.icon.height||48,width:i.icon.width||48},null,8,["image","alt","height","width"])])):typeof i.icon=="object"?(D(),Ce(wr,{key:1,image:i.icon,alt:i.icon.alt,height:i.icon.height||48,width:i.icon.width||48},null,8,["image","alt","height","width"])):i.icon?(D(),W("div",{key:2,class:"icon",innerHTML:i.icon},null,8,k1)):Ae("",!0),P("h2",{class:"title",innerHTML:i.title},null,8,z1),i.details?(D(),W("p",{key:3,class:"details",innerHTML:i.details},null,8,V1)):Ae("",!0),i.linkText?(D(),W("div",H1,[P("p",G1,[jn(De(i.linkText)+" ",1),t[0]||(t[0]=P("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):Ae("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),$1=ye(W1,[["__scopeId","data-v-70e069ce"]]),X1={key:0,class:"VPFeatures"},q1={class:"container"},Y1={class:"items"},j1=Se({__name:"VPFeatures",props:{features:{}},setup(i){const e=i,t=Ne(()=>{const n=e.features.length;if(n){if(n===2)return"grid-2";if(n===3)return"grid-3";if(n%3===0)return"grid-6";if(n>3)return"grid-4"}else return});return(n,s)=>i.features?(D(),W("div",X1,[P("div",q1,[P("div",Y1,[(D(!0),W(st,null,bt(i.features,r=>(D(),W("div",{key:r.title,class:Ye(["item",[t.value]])},[xe($1,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):Ae("",!0)}}),Z1=ye(j1,[["__scopeId","data-v-8a2e9da6"]]),K1=Se({__name:"VPHomeFeatures",setup(i){const{frontmatter:e}=et();return(t,n)=>O(e).features?(D(),Ce(Z1,{key:0,class:"VPHomeFeatures",features:O(e).features},null,8,["features"])):Ae("",!0)}}),J1=Se({__name:"VPHomeContent",setup(i){const{width:e}=qh({initialWidth:0,includeScrollbar:!1});return(t,n)=>(D(),W("div",{class:"vp-doc container",style:wi(O(e)?{"--vp-offset":`calc(50% - ${O(e)/2}px)`}:{})},[ie(t.$slots,"default",{},void 0,!0)],4))}}),Q1=ye(J1,[["__scopeId","data-v-c4f1c941"]]),ey=Se({__name:"VPHome",setup(i){const{frontmatter:e,theme:t}=et();return(n,s)=>{const r=cn("Content");return D(),W("div",{class:Ye(["VPHome",{"external-link-icon-enabled":O(t).externalLinkIcon}])},[ie(n.$slots,"home-hero-before",{},void 0,!0),xe(F1,null,{"home-hero-info-before":ce(()=>[ie(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":ce(()=>[ie(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":ce(()=>[ie(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":ce(()=>[ie(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":ce(()=>[ie(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),ie(n.$slots,"home-hero-after",{},void 0,!0),ie(n.$slots,"home-features-before",{},void 0,!0),xe(K1),ie(n.$slots,"home-features-after",{},void 0,!0),O(e).markdownStyles!==!1?(D(),Ce(Q1,{key:0},{default:ce(()=>[xe(r)]),_:1})):(D(),Ce(r,{key:1}))],2)}}}),ty=ye(ey,[["__scopeId","data-v-56ec5e9a"]]),ny={},iy={class:"VPPage"};function sy(i,e){const t=cn("Content");return D(),W("div",iy,[ie(i.$slots,"page-top"),xe(t),ie(i.$slots,"page-bottom")])}const ry=ye(ny,[["render",sy]]),ay=Se({__name:"VPContent",setup(i){const{page:e,frontmatter:t}=et(),{isHome:n,hasSidebar:s}=Jn();return(r,a)=>(D(),W("div",{class:Ye(["VPContent",{"has-sidebar":O(s),"is-home":O(n)}]),id:"VPContent"},[O(e).isNotFound?ie(r.$slots,"not-found",{key:0},()=>[xe(S0)],!0):O(t).layout==="page"?(D(),Ce(ry,{key:1},{"page-top":ce(()=>[ie(r.$slots,"page-top",{},void 0,!0)]),"page-bottom":ce(()=>[ie(r.$slots,"page-bottom",{},void 0,!0)]),_:3})):O(t).layout==="home"?(D(),Ce(ty,{key:2},{"home-hero-before":ce(()=>[ie(r.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":ce(()=>[ie(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":ce(()=>[ie(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":ce(()=>[ie(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":ce(()=>[ie(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":ce(()=>[ie(r.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":ce(()=>[ie(r.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":ce(()=>[ie(r.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":ce(()=>[ie(r.$slots,"home-features-after",{},void 0,!0)]),_:3})):O(t).layout&&O(t).layout!=="doc"?(D(),Ce(wn(O(t).layout),{key:3})):(D(),Ce(M1,{key:4},{"doc-top":ce(()=>[ie(r.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":ce(()=>[ie(r.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":ce(()=>[ie(r.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":ce(()=>[ie(r.$slots,"doc-before",{},void 0,!0)]),"doc-after":ce(()=>[ie(r.$slots,"doc-after",{},void 0,!0)]),"aside-top":ce(()=>[ie(r.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":ce(()=>[ie(r.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":ce(()=>[ie(r.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":ce(()=>[ie(r.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":ce(()=>[ie(r.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":ce(()=>[ie(r.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),oy=ye(ay,[["__scopeId","data-v-082bf9e5"]]),ly={class:"container"},cy=["innerHTML"],hy=["innerHTML"],uy=Se({__name:"VPFooter",setup(i){const{theme:e,frontmatter:t}=et(),{hasSidebar:n}=Jn();return(s,r)=>O(e).footer&&O(t).footer!==!1?(D(),W("footer",{key:0,class:Ye(["VPFooter",{"has-sidebar":O(n)}])},[P("div",ly,[O(e).footer.message?(D(),W("p",{key:0,class:"message",innerHTML:O(e).footer.message},null,8,cy)):Ae("",!0),O(e).footer.copyright?(D(),W("p",{key:1,class:"copyright",innerHTML:O(e).footer.copyright},null,8,hy)):Ae("",!0)])],2)):Ae("",!0)}}),dy=ye(uy,[["__scopeId","data-v-b582247f"]]),fy={class:"menu-text"},py={class:"header"},my={class:"outline"},gy=Se({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(i){const e=i,{theme:t}=et(),n=ze(!1),s=ze(0),r=ze(),a=ze();function o(m){r.value?.contains(m.target)||(n.value=!1)}_n(n,m=>{if(m){document.addEventListener("click",o);return}document.removeEventListener("click",o)}),Aa("Escape",()=>{n.value=!1}),Dc(()=>{n.value=!1});function c(){n.value=!n.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function h(m){m.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),ws(()=>{n.value=!1}))}function d(){n.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(m,f)=>(D(),W("div",{class:"VPLocalNavOutlineDropdown",style:wi({"--vp-vh":s.value+"px"}),ref_key:"main",ref:r},[i.headers.length>0?(D(),W("button",{key:0,onClick:c,class:Ye({open:n.value})},[P("span",fy,De(O(Th)(O(t))),1),f[0]||(f[0]=P("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(D(),W("button",{key:1,onClick:d},De(O(t).returnToTopLabel||"Return to top"),1)),xe(ns,{name:"flyout"},{default:ce(()=>[n.value?(D(),W("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:h},[P("div",py,[P("a",{class:"top-link",href:"#",onClick:d},De(O(t).returnToTopLabel||"Return to top"),1)]),P("div",my,[xe(Ah,{headers:i.headers},null,8,["headers"])])],512)):Ae("",!0)]),_:1})],4))}}),_y=ye(gy,[["__scopeId","data-v-faba22e4"]]),vy={class:"container"},yy=["aria-expanded"],My={class:"menu-text"},Sy=Se({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(i){const{theme:e}=et(),{isHome:t,hasSidebar:n,headers:s,hasLocalNav:r}=Jn(),{y:a}=Ic(),o=ze(0);zt(()=>{o.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))});const c=Ne(()=>({VPLocalNav:!0,"has-sidebar":n.value,empty:!r.value,fixed:!r.value&&!n.value}));return(h,d)=>!O(t)&&(O(r)||O(n)||O(a)>=o.value)?(D(),W("div",{key:0,class:Ye(c.value)},[P("div",vy,[O(n)?(D(),W("button",{key:0,class:"menu","aria-expanded":i.open,"aria-controls":"VPSidebarNav",onClick:d[0]||(d[0]=m=>h.$emit("open-menu"))},[d[1]||(d[1]=P("span",{class:"vpi-align-left menu-icon"},null,-1)),P("span",My,De(O(e).sidebarMenuLabel||"Menu"),1)],8,yy)):Ae("",!0),xe(_y,{headers:O(s),navHeight:o.value},null,8,["headers","navHeight"])])],2)):Ae("",!0)}}),xy=ye(Sy,[["__scopeId","data-v-2aaf8042"]]);function by(){const i=ze(!1);function e(){i.value=!0,window.addEventListener("resize",s)}function t(){i.value=!1,window.removeEventListener("resize",s)}function n(){i.value?t():e()}function s(){window.outerWidth>=768&&t()}const r=Rs();return _n(()=>r.path,t),{isScreenOpen:i,openScreen:e,closeScreen:t,toggleScreen:n}}const Jo=Symbol("nav"),Ey={},Ty={class:"VPSwitch",type:"button",role:"switch"},wy={class:"check"},Ay={key:0,class:"icon"};function Ry(i,e){return D(),W("button",Ty,[P("span",wy,[i.$slots.default?(D(),W("span",Ay,[ie(i.$slots,"default",{},void 0,!0)])):Ae("",!0)])])}const Cy=ye(Ey,[["render",Ry],["__scopeId","data-v-de783836"]]),Py=Se({__name:"VPSwitchAppearance",setup(i){const{isDark:e,theme:t}=et(),n=Pr("toggle-appearance",()=>{e.value=!e.value}),s=ze("");return Po(()=>{s.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(r,a)=>(D(),Ce(Cy,{title:s.value,class:"VPSwitchAppearance","aria-checked":O(e),onClick:O(n)},{default:ce(()=>[...a[0]||(a[0]=[P("span",{class:"vpi-sun sun"},null,-1),P("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Qo=ye(Py,[["__scopeId","data-v-f5400087"]]),Dy={key:0,class:"VPNavBarAppearance"},Ly=Se({__name:"VPNavBarAppearance",setup(i){const{site:e}=et();return(t,n)=>O(e).appearance&&O(e).appearance!=="force-dark"&&O(e).appearance!=="force-auto"?(D(),W("div",Dy,[xe(Qo)])):Ae("",!0)}}),Iy=ye(Ly,[["__scopeId","data-v-6128c95b"]]),el=ze();let Rh=!1,Ea=0;function Ny(i){const e=ze(!1);if(As){!Rh&&Uy(),Ea++;const t=_n(el,n=>{n===i.el.value||i.el.value?.contains(n)?(e.value=!0,i.onFocus?.()):(e.value=!1,i.onBlur?.())});ts(()=>{t(),Ea--,Ea||Fy()})}return Yh(e)}function Uy(){document.addEventListener("focusin",Ch),Rh=!0,el.value=document.activeElement}function Fy(){document.removeEventListener("focusin",Ch)}function Ch(){el.value=document.activeElement}const Oy={class:"VPMenuLink"},By=["innerHTML"],ky=Se({inheritAttrs:!1,__name:"VPMenuLink",props:{item:{}},setup(i){const e=i,{page:t}=et(),n=Ne(()=>typeof e.item.link=="function"?e.item.link(t.value):e.item.link);return(s,r)=>(D(),W("div",Oy,[xe(Dn,gn(s.$attrs,{class:{active:O(Ei)(O(t).relativePath,i.item.activeMatch||n.value,!!i.item.activeMatch)},href:n.value,target:i.item.target,rel:i.item.rel,"no-icon":i.item.noIcon}),{default:ce(()=>[P("span",{innerHTML:i.item.text},null,8,By)]),_:1},16,["class","href","target","rel","no-icon"])]))}}),Br=ye(ky,[["__scopeId","data-v-cd322b78"]]),zy={class:"VPMenuGroup"},Vy={key:0,class:"title"},Hy=Se({__name:"VPMenuGroup",props:{text:{},items:{}},setup(i){return(e,t)=>(D(),W("div",zy,[i.text?(D(),W("p",Vy,De(i.text),1)):Ae("",!0),(D(!0),W(st,null,bt(i.items,n=>(D(),W(st,{key:JSON.stringify(n)},["link"in n?(D(),Ce(Br,{key:0,item:n},null,8,["item"])):Ae("",!0)],64))),128))]))}}),Gy=ye(Hy,[["__scopeId","data-v-f304c34e"]]),Wy={class:"VPMenu"},$y={key:0,class:"items"},Xy=Se({__name:"VPMenu",props:{items:{}},setup(i){return(e,t)=>(D(),W("div",Wy,[i.items?(D(),W("div",$y,[(D(!0),W(st,null,bt(i.items,n=>(D(),W(st,{key:JSON.stringify(n)},["link"in n?(D(),Ce(Br,{key:0,item:n},null,8,["item"])):"component"in n?(D(),Ce(wn(n.component),gn({key:1,ref_for:!0},n.props),null,16)):(D(),Ce(Gy,{key:2,text:n.text,items:n.items},null,8,["text","items"]))],64))),128))])):Ae("",!0),ie(e.$slots,"default",{},void 0,!0)]))}}),qy=ye(Xy,[["__scopeId","data-v-4ffee639"]]),Yy=["aria-expanded","aria-label"],jy={key:0,class:"text"},Zy=["innerHTML"],Ky={key:1,class:"vpi-more-horizontal icon"},Jy={class:"menu"},Qy=Se({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(i){const e=ze(!1),t=ze();Ny({el:t,onBlur:n});function n(){e.value=!1}return(s,r)=>(D(),W("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:r[1]||(r[1]=a=>e.value=!0),onMouseleave:r[2]||(r[2]=a=>e.value=!1)},[P("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":i.label,onClick:r[0]||(r[0]=a=>e.value=!e.value)},[i.button||i.icon?(D(),W("span",jy,[i.icon?(D(),W("span",{key:0,class:Ye([i.icon,"option-icon"])},null,2)):Ae("",!0),i.button?(D(),W("span",{key:1,innerHTML:i.button},null,8,Zy)):Ae("",!0),r[3]||(r[3]=P("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(D(),W("span",Ky))],8,Yy),P("div",Jy,[xe(qy,{items:i.items},{default:ce(()=>[ie(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),tl=ye(Qy,[["__scopeId","data-v-232f0cc6"]]),eM=["href","aria-label","rel","innerHTML"],tM=Se({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{},me:{type:Boolean}},setup(i){const e=i,t=ze();zt(async()=>{await ws();const s=t.value?.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const n=Ne(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,r)=>(D(),W("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:i.link,"aria-label":i.ariaLabel??(typeof i.icon=="string"?i.icon:""),target:"_blank",rel:i.me?"me noopener":"noopener",innerHTML:n.value},null,8,eM))}}),nM=ye(tM,[["__scopeId","data-v-e337075e"]]),iM={class:"VPSocialLinks"},sM=Se({__name:"VPSocialLinks",props:{links:{},me:{type:Boolean,default:!0}},setup(i){return(e,t)=>(D(),W("div",iM,[(D(!0),W(st,null,bt(i.links,({link:n,icon:s,ariaLabel:r})=>(D(),Ce(nM,{key:n,icon:s,link:n,ariaLabel:r,me:i.me},null,8,["icon","link","ariaLabel","me"]))),128))]))}}),nl=ye(sM,[["__scopeId","data-v-1e9ab6b8"]]),rM={key:0,class:"group translations"},aM={class:"trans-title"},oM={key:1,class:"group"},lM={class:"item appearance"},cM={class:"label"},hM={class:"appearance-action"},uM={key:2,class:"group"},dM={class:"item social-links"},fM=Se({__name:"VPNavBarExtra",setup(i){const{site:e,theme:t}=et(),{localeLinks:n,currentLang:s}=Ds({correspondingLink:!0}),r=Ne(()=>n.value.length&&s.value.label||e.value.appearance||t.value.socialLinks);return(a,o)=>r.value?(D(),Ce(tl,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:ce(()=>[O(n).length&&O(s).label?(D(),W("div",rM,[P("p",aM,De(O(s).label),1),(D(!0),W(st,null,bt(O(n),c=>(D(),Ce(Br,{key:c.link,item:c,lang:c.lang,dir:c.dir},null,8,["item","lang","dir"]))),128))])):Ae("",!0),O(e).appearance&&O(e).appearance!=="force-dark"&&O(e).appearance!=="force-auto"?(D(),W("div",oM,[P("div",lM,[P("p",cM,De(O(t).darkModeSwitchLabel||"Appearance"),1),P("div",hM,[xe(Qo)])])])):Ae("",!0),O(t).socialLinks?(D(),W("div",uM,[P("div",dM,[xe(nl,{class:"social-links-list",links:O(t).socialLinks},null,8,["links"])])])):Ae("",!0)]),_:1})):Ae("",!0)}}),pM=ye(fM,[["__scopeId","data-v-aec8031e"]]),mM=["aria-expanded"],gM=Se({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(i){return(e,t)=>(D(),W("button",{type:"button",class:Ye(["VPNavBarHamburger",{active:i.active}]),"aria-label":"mobile navigation","aria-expanded":i.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=n=>e.$emit("click"))},[...t[1]||(t[1]=[P("span",{class:"container"},[P("span",{class:"top"}),P("span",{class:"middle"}),P("span",{class:"bottom"})],-1)])],10,mM))}}),_M=ye(gM,[["__scopeId","data-v-58453ba5"]]),vM=["innerHTML"],yM=Se({__name:"VPNavBarMenuLink",props:{item:{}},setup(i){const e=i,{page:t}=et(),n=Ne(()=>typeof e.item.link=="function"?e.item.link(t.value):e.item.link);return(s,r)=>(D(),Ce(Dn,{class:Ye({VPNavBarMenuLink:!0,active:O(Ei)(O(t).relativePath,i.item.activeMatch||n.value,!!i.item.activeMatch)}),href:n.value,target:i.item.target,rel:i.item.rel,"no-icon":i.item.noIcon,tabindex:"0"},{default:ce(()=>[P("span",{innerHTML:i.item.text},null,8,vM)]),_:1},8,["class","href","target","rel","no-icon"]))}}),MM=ye(yM,[["__scopeId","data-v-7b1a344d"]]),SM=Se({__name:"VPNavBarMenuGroup",props:{item:{}},setup(i){const e=i,{page:t}=et(),n=r=>"component"in r?!1:"link"in r?Ei(t.value.relativePath,typeof r.link=="function"?r.link(t.value):r.link,!!e.item.activeMatch):r.items.some(n),s=Ne(()=>n(e.item));return(r,a)=>(D(),Ce(tl,{class:Ye({VPNavBarMenuGroup:!0,active:O(Ei)(O(t).relativePath,i.item.activeMatch,!!i.item.activeMatch)||s.value}),button:i.item.text,items:i.item.items},null,8,["class","button","items"]))}}),xM={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},bM=Se({__name:"VPNavBarMenu",setup(i){const{theme:e}=et();return(t,n)=>O(e).nav?(D(),W("nav",xM,[n[0]||(n[0]=P("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(D(!0),W(st,null,bt(O(e).nav,s=>(D(),W(st,{key:JSON.stringify(s)},["link"in s?(D(),Ce(MM,{key:0,item:s},null,8,["item"])):"component"in s?(D(),Ce(wn(s.component),gn({key:1,ref_for:!0},s.props),null,16)):(D(),Ce(SM,{key:2,item:s},null,8,["item"]))],64))),128))])):Ae("",!0)}}),EM=ye(bM,[["__scopeId","data-v-3dcedc15"]]);function TM(i){const{localeIndex:e,theme:t}=et();function n(s){const r=s.split("."),a=t.value.search?.options,o=a&&typeof a=="object",c=o&&a.locales?.[e.value]?.translations||null,h=o&&a.translations||null;let d=c,m=h,f=i;const p=r.pop();for(const v of r){let E=null;const _=f?.[v];_&&(E=f=_);const g=m?.[v];g&&(E=m=g);const S=d?.[v];S&&(E=d=S),_||(f=E),g||(m=E),S||(d=E)}return d?.[p]??m?.[p]??f?.[p]??""}return n}const wM=["aria-label"],AM={class:"DocSearch-Button-Container"},RM={class:"DocSearch-Button-Placeholder"},bc=Se({__name:"VPNavBarSearchButton",setup(i){const t=TM({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(n,s)=>(D(),W("button",{type:"button","aria-label":O(t)("button.buttonAriaLabel"),"aria-keyshortcuts":"/ control+k meta+k",class:"DocSearch DocSearch-Button"},[P("span",AM,[s[0]||(s[0]=P("span",{class:"vpi-search DocSearch-Search-Icon"},null,-1)),P("span",RM,De(O(t)("button.buttonText")),1)]),s[1]||(s[1]=P("span",{class:"DocSearch-Button-Keys"},[P("kbd",{class:"DocSearch-Button-Key"}),P("kbd",{class:"DocSearch-Button-Key"})],-1))],8,wM))}}),CM={class:"VPNavBarSearch"},PM={id:"local-search"},DM={key:1,id:"docsearch"},LM=Se({__name:"VPNavBarSearch",setup(i){const e=jh(()=>wa(()=>import("./VPLocalSearchBox.LQxJK8l7.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:n}=et(),s=ze(!1),r=ze(!1);zt(()=>{});function a(){s.value||(s.value=!0,setTimeout(o,16))}function o(){const m=new Event("keydown");m.key="k",m.metaKey=!0,window.dispatchEvent(m),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||o()},16)}function c(m){const f=m.target,p=f.tagName;return f.isContentEditable||p==="INPUT"||p==="SELECT"||p==="TEXTAREA"}const h=ze(!1);Aa("k",m=>{(m.ctrlKey||m.metaKey)&&(m.preventDefault(),h.value=!0)}),Aa("/",m=>{c(m)||(m.preventDefault(),h.value=!0)});const d="local";return(m,f)=>(D(),W("div",CM,[O(d)==="local"?(D(),W(st,{key:0},[h.value?(D(),Ce(O(e),{key:0,onClose:f[0]||(f[0]=p=>h.value=!1)})):Ae("",!0),P("div",PM,[xe(bc,{onClick:f[1]||(f[1]=p=>h.value=!0)})])],64)):O(d)==="algolia"?(D(),W(st,{key:1},[s.value?(D(),Ce(O(t),{key:0,algolia:O(n).search?.options??O(n).algolia,onVnodeBeforeMount:f[2]||(f[2]=p=>r.value=!0)},null,8,["algolia"])):Ae("",!0),r.value?Ae("",!0):(D(),W("div",DM,[xe(bc,{onClick:a})]))],64)):Ae("",!0)]))}}),IM=Se({__name:"VPNavBarSocialLinks",setup(i){const{theme:e}=et();return(t,n)=>O(e).socialLinks?(D(),Ce(nl,{key:0,class:"VPNavBarSocialLinks",links:O(e).socialLinks},null,8,["links"])):Ae("",!0)}}),NM=ye(IM,[["__scopeId","data-v-51c27cb1"]]),UM=["href","rel","target"],FM=["innerHTML"],OM={key:2},BM=Se({__name:"VPNavBarTitle",setup(i){const{site:e,theme:t}=et(),{hasSidebar:n}=Jn(),{currentLang:s}=Ds(),r=Ne(()=>typeof t.value.logoLink=="string"?t.value.logoLink:t.value.logoLink?.link),a=Ne(()=>typeof t.value.logoLink=="string"?void 0:t.value.logoLink?.rel),o=Ne(()=>typeof t.value.logoLink=="string"?void 0:t.value.logoLink?.target);return(c,h)=>(D(),W("div",{class:Ye(["VPNavBarTitle",{"has-sidebar":O(n)}])},[P("a",{class:"title",href:r.value??O(Ko)(O(s).link),rel:a.value,target:o.value},[ie(c.$slots,"nav-bar-title-before",{},void 0,!0),O(t).logo?(D(),Ce(wr,{key:0,class:"logo",image:O(t).logo},null,8,["image"])):Ae("",!0),O(t).siteTitle?(D(),W("span",{key:1,innerHTML:O(t).siteTitle},null,8,FM)):O(t).siteTitle===void 0?(D(),W("span",OM,De(O(e).title),1)):Ae("",!0),ie(c.$slots,"nav-bar-title-after",{},void 0,!0)],8,UM)],2))}}),kM=ye(BM,[["__scopeId","data-v-628ec8ba"]]),zM={class:"items"},VM={class:"title"},HM=Se({__name:"VPNavBarTranslations",setup(i){const{theme:e}=et(),{localeLinks:t,currentLang:n}=Ds({correspondingLink:!0});return(s,r)=>O(t).length&&O(n).label?(D(),Ce(tl,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:O(e).langMenuLabel||"Change language"},{default:ce(()=>[P("div",zM,[P("p",VM,De(O(n).label),1),(D(!0),W(st,null,bt(O(t),a=>(D(),Ce(Br,{key:a.link,item:a,lang:a.lang,dir:a.dir},null,8,["item","lang","dir"]))),128))])]),_:1},8,["label"])):Ae("",!0)}}),GM=ye(HM,[["__scopeId","data-v-050c2844"]]),WM={class:"wrapper"},$M={class:"container"},XM={class:"title"},qM={class:"content"},YM={class:"content-body"},jM=Se({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(i){const e=i,{y:t}=Ic(),{isHome:n,hasSidebar:s}=Jn(),r=ze({});return Po(()=>{r.value={"has-sidebar":s.value,home:n.value,top:t.value===0,"screen-open":e.isScreenOpen}}),(a,o)=>(D(),W("div",{class:Ye(["VPNavBar",r.value])},[P("div",WM,[P("div",$M,[P("div",XM,[xe(kM,null,{"nav-bar-title-before":ce(()=>[ie(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":ce(()=>[ie(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),P("div",qM,[P("div",YM,[ie(a.$slots,"nav-bar-content-before",{},void 0,!0),xe(LM,{class:"search"}),xe(EM,{class:"menu"}),xe(GM,{class:"translations"}),xe(Iy,{class:"appearance"}),xe(NM,{class:"social-links"}),xe(pM,{class:"extra"}),ie(a.$slots,"nav-bar-content-after",{},void 0,!0),xe(_M,{class:"hamburger",active:i.isScreenOpen,onClick:o[0]||(o[0]=c=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),o[1]||(o[1]=P("div",{class:"divider"},[P("div",{class:"divider-line"})],-1))],2))}}),ZM=ye(jM,[["__scopeId","data-v-42909467"]]),KM={key:0,class:"VPNavScreenAppearance"},JM={class:"text"},QM=Se({__name:"VPNavScreenAppearance",setup(i){const{site:e,theme:t}=et();return(n,s)=>O(e).appearance&&O(e).appearance!=="force-dark"&&O(e).appearance!=="force-auto"?(D(),W("div",KM,[P("p",JM,De(O(t).darkModeSwitchLabel||"Appearance"),1),xe(Qo)])):Ae("",!0)}}),eS=ye(QM,[["__scopeId","data-v-931f2812"]]),tS=["innerHTML"],nS=Se({__name:"VPNavScreenMenuLink",props:{item:{}},setup(i){const e=i,{page:t}=et(),n=Ne(()=>typeof e.item.link=="function"?e.item.link(t.value):e.item.link),{closeScreen:s}=Pr(Jo);return(r,a)=>(D(),Ce(Dn,{class:"VPNavScreenMenuLink",href:n.value,target:i.item.target,rel:i.item.rel,"no-icon":i.item.noIcon,onClick:O(s)},{default:ce(()=>[P("span",{innerHTML:i.item.text},null,8,tS)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),iS=ye(nS,[["__scopeId","data-v-22b6493a"]]),sS=["innerHTML"],rS=Se({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(i){const e=i,{page:t}=et(),n=Ne(()=>typeof e.item.link=="function"?e.item.link(t.value):e.item.link),{closeScreen:s}=Pr(Jo);return(r,a)=>(D(),Ce(Dn,{class:"VPNavScreenMenuGroupLink",href:n.value,target:i.item.target,rel:i.item.rel,"no-icon":i.item.noIcon,onClick:O(s)},{default:ce(()=>[P("span",{innerHTML:i.item.text},null,8,sS)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ph=ye(rS,[["__scopeId","data-v-5c9baed3"]]),aS={class:"VPNavScreenMenuGroupSection"},oS={key:0,class:"title"},lS=Se({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(i){return(e,t)=>(D(),W("div",aS,[i.text?(D(),W("p",oS,De(i.text),1)):Ae("",!0),(D(!0),W(st,null,bt(i.items,n=>(D(),Ce(Ph,{key:n.text,item:n},null,8,["item"]))),128))]))}}),cS=ye(lS,[["__scopeId","data-v-eae74b5a"]]),hS=["aria-controls","aria-expanded"],uS=["innerHTML"],dS=["id"],fS={key:0,class:"item"},pS={key:1,class:"item"},mS={key:2,class:"group"},gS=Se({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(i){const e=i,t=ze(!1),n=Ne(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(r,a)=>(D(),W("div",{class:Ye(["VPNavScreenMenuGroup",{open:t.value}])},[P("button",{class:"button","aria-controls":n.value,"aria-expanded":t.value,onClick:s},[P("span",{class:"button-text",innerHTML:i.text},null,8,uS),a[0]||(a[0]=P("span",{class:"vpi-plus button-icon"},null,-1))],8,hS),P("div",{id:n.value,class:"items"},[(D(!0),W(st,null,bt(i.items,o=>(D(),W(st,{key:JSON.stringify(o)},["link"in o?(D(),W("div",fS,[xe(Ph,{item:o},null,8,["item"])])):"component"in o?(D(),W("div",pS,[(D(),Ce(wn(o.component),gn({ref_for:!0},o.props,{"screen-menu":""}),null,16))])):(D(),W("div",mS,[xe(cS,{text:o.text,items:o.items},null,8,["text","items"])]))],64))),128))],8,dS)],2))}}),_S=ye(gS,[["__scopeId","data-v-cf146444"]]),vS={key:0,class:"VPNavScreenMenu"},yS=Se({__name:"VPNavScreenMenu",setup(i){const{theme:e}=et();return(t,n)=>O(e).nav?(D(),W("nav",vS,[(D(!0),W(st,null,bt(O(e).nav,s=>(D(),W(st,{key:JSON.stringify(s)},["link"in s?(D(),Ce(iS,{key:0,item:s},null,8,["item"])):"component"in s?(D(),Ce(wn(s.component),gn({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(D(),Ce(_S,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):Ae("",!0)}}),MS=Se({__name:"VPNavScreenSocialLinks",setup(i){const{theme:e}=et();return(t,n)=>O(e).socialLinks?(D(),Ce(nl,{key:0,class:"VPNavScreenSocialLinks",links:O(e).socialLinks},null,8,["links"])):Ae("",!0)}}),SS={class:"list"},xS=Se({__name:"VPNavScreenTranslations",setup(i){const{localeLinks:e,currentLang:t}=Ds({correspondingLink:!0}),n=ze(!1);function s(){n.value=!n.value}return(r,a)=>O(e).length&&O(t).label?(D(),W("div",{key:0,class:Ye(["VPNavScreenTranslations",{open:n.value}])},[P("button",{class:"title",onClick:s},[a[0]||(a[0]=P("span",{class:"vpi-languages icon lang"},null,-1)),jn(" "+De(O(t).label)+" ",1),a[1]||(a[1]=P("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),P("ul",SS,[(D(!0),W(st,null,bt(O(e),o=>(D(),W("li",{key:o.link,class:"item"},[xe(Dn,{class:"link",href:o.link,lang:o.lang,dir:o.dir},{default:ce(()=>[jn(De(o.text),1)]),_:2},1032,["href","lang","dir"])]))),128))])],2)):Ae("",!0)}}),bS=ye(xS,[["__scopeId","data-v-54d4d781"]]),ES={class:"container"},TS=Se({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(i){const e=ze(null),t=Nc(As?document.body:null);return(n,s)=>(D(),Ce(ns,{name:"fade",onEnter:s[0]||(s[0]=r=>t.value=!0),onAfterLeave:s[1]||(s[1]=r=>t.value=!1)},{default:ce(()=>[i.open?(D(),W("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[P("div",ES,[ie(n.$slots,"nav-screen-content-before",{},void 0,!0),xe(yS,{class:"menu"}),xe(bS,{class:"translations"}),xe(eS,{class:"appearance"}),xe(MS,{class:"social-links"}),ie(n.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):Ae("",!0)]),_:3}))}}),wS=ye(TS,[["__scopeId","data-v-51ae21ea"]]),AS={key:0,class:"VPNav"},RS=Se({__name:"VPNav",setup(i){const{isScreenOpen:e,closeScreen:t,toggleScreen:n}=by(),{frontmatter:s}=et(),r=Ne(()=>s.value.navbar!==!1);return Uc(Jo,{closeScreen:t}),Rr(()=>{As&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(a,o)=>r.value?(D(),W("header",AS,[xe(ZM,{"is-screen-open":O(e),onToggleScreen:O(n)},{"nav-bar-title-before":ce(()=>[ie(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":ce(()=>[ie(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":ce(()=>[ie(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":ce(()=>[ie(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),xe(wS,{open:O(e)},{"nav-screen-content-before":ce(()=>[ie(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":ce(()=>[ie(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):Ae("",!0)}}),CS=ye(RS,[["__scopeId","data-v-8d5eb4b9"]]),PS=["role","tabindex"],DS={key:1,class:"items"},LS=Se({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(i){const e=i,{collapsed:t,collapsible:n,isLink:s,isActiveLink:r,hasActiveLink:a,hasChildren:o,toggle:c}=N0(Ne(()=>e.item)),h=Ne(()=>o.value?"section":"div"),d=Ne(()=>s.value?"a":"div"),m=Ne(()=>o.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),f=Ne(()=>s.value?void 0:"button"),p=Ne(()=>[[`level-${e.depth}`],{collapsible:n.value},{collapsed:t.value},{"is-link":s.value},{"is-active":r.value},{"has-active":a.value}]);function v(_){"key"in _&&_.key!=="Enter"||!e.item.link&&c()}function E(){e.item.link&&c()}return(_,g)=>{const S=cn("VPSidebarItem",!0);return D(),Ce(wn(h.value),{class:Ye(["VPSidebarItem",p.value])},{default:ce(()=>[i.item.text?(D(),W("div",gn({key:0,class:"item",role:f.value},Zh(i.item.items?{click:v,keydown:v}:{},!0),{tabindex:i.item.items&&0}),[g[1]||(g[1]=P("div",{class:"indicator"},null,-1)),i.item.link?(D(),Ce(Dn,{key:0,tag:d.value,class:"link",href:i.item.link,rel:i.item.rel,target:i.item.target},{default:ce(()=>[(D(),Ce(wn(m.value),{class:"text",innerHTML:i.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(D(),Ce(wn(m.value),{key:1,class:"text",innerHTML:i.item.text},null,8,["innerHTML"])),i.item.collapsed!=null&&i.item.items&&i.item.items.length?(D(),W("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:E,onKeydown:Kh(E,["enter"]),tabindex:"0"},[...g[0]||(g[0]=[P("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):Ae("",!0)],16,PS)):Ae("",!0),i.item.items&&i.item.items.length?(D(),W("div",DS,[i.depth<5?(D(!0),W(st,{key:0},bt(i.item.items,w=>(D(),Ce(S,{key:w.text,item:w,depth:i.depth+1},null,8,["item","depth"]))),128)):Ae("",!0)])):Ae("",!0)]),_:1},8,["class"])}}}),IS=ye(LS,[["__scopeId","data-v-835289d8"]]),NS=Se({__name:"VPSidebarGroup",props:{items:{}},setup(i){const e=ze(!0);let t=null;return zt(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),Ar(()=>{t!=null&&(clearTimeout(t),t=null)}),(n,s)=>(D(!0),W(st,null,bt(i.items,r=>(D(),W("div",{key:r.text,class:Ye(["group",{"no-transition":e.value}])},[xe(IS,{item:r,depth:0},null,8,["item"])],2))),128))}}),US=ye(NS,[["__scopeId","data-v-060c1327"]]),FS={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},OS=Se({__name:"VPSidebar",props:{open:{type:Boolean}},setup(i){const{sidebarGroups:e,hasSidebar:t}=Jn(),n=i,s=ze(null),r=Nc(As?document.body:null);_n([n,s],()=>{n.open?(r.value=!0,s.value?.focus()):r.value=!1},{immediate:!0,flush:"post"});const a=ze(0);return _n(e,()=>{a.value+=1},{deep:!0}),(o,c)=>O(t)?(D(),W("aside",{key:0,class:Ye(["VPSidebar",{open:i.open}]),ref_key:"navEl",ref:s,onClick:c[0]||(c[0]=Ro(()=>{},["stop"]))},[c[2]||(c[2]=P("div",{class:"curtain"},null,-1)),P("nav",FS,[c[1]||(c[1]=P("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),ie(o.$slots,"sidebar-nav-before",{},void 0,!0),(D(),Ce(US,{items:O(e),key:a.value},null,8,["items"])),ie(o.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):Ae("",!0)}}),BS=ye(OS,[["__scopeId","data-v-4a4ad1d2"]]),kS={href:"#VPContent",class:"VPSkipLink visually-hidden"},zS=Se({__name:"VPSkipLink",setup(i){const{theme:e}=et(),t=Rs(),n=ze();return _n(()=>t.path,()=>n.value.focus()),(s,r)=>(D(),W(st,null,[P("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),P("a",kS,De(O(e).skipToContentLabel||"Skip to content"),1)],64))}}),VS=ye(zS,[["__scopeId","data-v-598f6180"]]),HS=Se({__name:"Layout",setup(i){const{isOpen:e,open:t,close:n}=I0();U0({closeSidebar:n});const{frontmatter:s}=et(),r=Jh(),a=Ne(()=>!!r["home-hero-image"]);return Uc(wh,{heroImageSlotExists:a}),(o,c)=>{const h=cn("Content");return O(s).layout!==!1?(D(),W("div",{key:0,class:Ye(["Layout",O(s).pageClass])},[ie(o.$slots,"layout-top",{},void 0,!0),xe(VS),xe(u0,{class:"backdrop",show:O(e),onClick:O(n)},null,8,["show","onClick"]),xe(CS,null,{"nav-bar-title-before":ce(()=>[ie(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":ce(()=>[ie(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":ce(()=>[ie(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":ce(()=>[ie(o.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":ce(()=>[ie(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":ce(()=>[ie(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),xe(xy,{open:O(e),onOpenMenu:O(t)},null,8,["open","onOpenMenu"]),xe(BS,{open:O(e)},{"sidebar-nav-before":ce(()=>[ie(o.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":ce(()=>[ie(o.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),xe(oy,null,{"page-top":ce(()=>[ie(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":ce(()=>[ie(o.$slots,"page-bottom",{},void 0,!0)]),"not-found":ce(()=>[ie(o.$slots,"not-found",{},void 0,!0)]),"home-hero-before":ce(()=>[ie(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":ce(()=>[ie(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":ce(()=>[ie(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":ce(()=>[ie(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":ce(()=>[ie(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":ce(()=>[ie(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":ce(()=>[ie(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":ce(()=>[ie(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":ce(()=>[ie(o.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":ce(()=>[ie(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":ce(()=>[ie(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":ce(()=>[ie(o.$slots,"doc-after",{},void 0,!0)]),"doc-top":ce(()=>[ie(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":ce(()=>[ie(o.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":ce(()=>[ie(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":ce(()=>[ie(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":ce(()=>[ie(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":ce(()=>[ie(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":ce(()=>[ie(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":ce(()=>[ie(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),xe(dy),ie(o.$slots,"layout-bottom",{},void 0,!0)],2)):(D(),Ce(h,{key:1}))}}}),GS=ye(HS,[["__scopeId","data-v-7a40ef3f"]]),WS={Layout:GS},$S={},XS={class:"blog-intro"};function qS(i,e){const t=cn("Content");return D(),W("div",XS,[xe(t)])}const YS=ye($S,[["render",qS],["__scopeId","data-v-fb3d4f15"]]),jS={};function ZS(i,e){return null}const KS=ye(jS,[["render",ZS]]),JS={Portal:{zh:{recommended:"推荐阅读",latest:"最近更新",more:"查看更多"},en:{recommended:"Recommended",latest:"Latest Updates",more:"View More"},ja:{recommended:"おすすめ",latest:"最新投稿",more:"もっと見る"}},PortalHero:{zh:{h1:"欢迎来到博客首页"},en:{h1:"Welcome to the blog homepage"},ja:{h1:"ブログのトップページへようこそ"}},MySidebar:{zh:{title:"目录索引",math:"数学",physics:"物理",computer:"计算机",essays:"杂谈"},en:{title:"Catalog",math:"MATH",physics:"PHYSICS",computer:"COMPUTER",essays:"ESSAYS"},ja:{title:"目録",math:"数学",physics:"物理",computer:"コンピュータ",essays:"随筆"}},BlogPost:{zh:{download:"下载",zoom:"缩放（单击）",close:"关闭（Esc）",prev:"上一张",next:"下一张"},en:{download:"Download",zoom:"Zoom (Click)",close:"Close (Esc)",prev:"Previous",next:"Next"},ja:{download:"ダウンロード",zoom:"ズーム（クリック）",close:"閉じる（Esc）",prev:"前へ",next:"次へ"}},BlogTop:{zh:{date:"最后修改日期"},en:{date:"最后修改日期"},ja:{date:"最后修改日期"}},MyNavbar:{zh:{title:"一风园",home:"主页",blog:"博客",origami:"折纸",showcase:"展示"},en:{title:"Balson's Garden",home:"Home",blog:"Blog",origami:"Origami",showcase:"Showcase"},ja:{title:"ほのにわ",home:"ホーム",blog:"ブログ",origami:"折り紙",showcase:"作品"}}},Ec=JSON.parse('[{"title":"纪念第一次MC1.16全成就","href":"/zh/blog/essays/my_first_MCAA.html","displayDate":"2026-07-02","allDates":["2026-07-02"],"abstract":"我能在患有痴呆症的情况下写完这篇博文吗?","tags":["MC","游戏"],"category":"essays","cover":"https://ghproxy.net/https://raw.githubusercontent.com/Orisnow/Images/refs/heads/main/covers/%E7%AC%AC%E4%B8%80%E6%AC%A1AA.png","recommend":1161,"version":"v0.0.0"},{"title":"梯度","href":"/zh/blog/math/gradient.html","displayDate":"2026-04-30","allDates":["2026-04-30"],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"概率","href":"/zh/blog/math/probability.html","displayDate":"2026-04-23","allDates":["2026-04-23"],"abstract":"暂无摘要","tags":["概率论"],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"随机变量","href":"/zh/blog/math/random_variable.html","displayDate":"2026-04-23","allDates":["2026-04-23"],"abstract":"暂无摘要","tags":["概率论"],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"系统","href":"/zh/blog/physics/physical_system.html","displayDate":"2026-04-18","allDates":["2026-04-18"],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"品质因数","href":"/zh/blog/physics/quality_factor.html","displayDate":"2026-04-11","allDates":["2026-04-11"],"abstract":"暂无摘要","tags":["力学","电学","声学"],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"质量","href":"/zh/blog/physics/mass.html","displayDate":"2026-04-10","allDates":["2026-04-10"],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"力","href":"/zh/blog/physics/force.html","displayDate":"2026-04-07","allDates":["2026-02-16","2026-04-07"],"abstract":"随便写点对力的理解","tags":["力学",null],"category":"physics","cover":null,"recommend":3,"version":"v0.2.1"},{"title":"量纲","href":"/zh/blog/physics/dimension.html","displayDate":"2026-03-31","allDates":["2026-03-22","2026-03-31"],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"微分","href":"/zh/blog/math/differential.html","displayDate":"2026-03-30","allDates":["2026-03-27","2026-03-30"],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":1234567890,"version":"v0.0.2"},{"title":"极限","href":"/zh/blog/math/limit.html","displayDate":"2026-03-28","allDates":["2026-03-28"],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"导数","href":"/zh/blog/math/derivative.html","displayDate":"2026-03-27","allDates":["2026-03-27"],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"矩阵","href":"/zh/blog/math/matrix.html","displayDate":"2026-03-24","allDates":["2026-03-24"],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"张量","href":"/zh/blog/math/tensor.html","displayDate":"2026-03-24","allDates":["2026-03-24"],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"方程","href":"/zh/blog/math/equation.html","displayDate":"2026-03-23","allDates":["2026-03-23"],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"线性方程组","href":"/zh/blog/math/linear_equations.html","displayDate":"2026-03-23","allDates":["2026-03-23"],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"函数","href":"/zh/blog/math/function.html","displayDate":"2026-03-18","allDates":["2026-03-18"],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"场","href":"/zh/blog/physics/field.html","displayDate":"2026-03-16","allDates":["2026-03-16"],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":"场是现代物理的核心概念","version":"v0.0.0"},{"title":"质点","href":"/zh/blog/physics/point_mass.html","displayDate":"2026-03-16","allDates":["2026-03-16"],"abstract":"暂无摘要","tags":["力学"],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"声","href":"/zh/blog/physics/sound.html","displayDate":"2026-03-16","allDates":["2026-03-16"],"abstract":"暂无摘要","tags":["声学"],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"振动","href":"/zh/blog/physics/vibration.html","displayDate":"2026-03-16","allDates":["2026-03-16"],"abstract":"振动是物体的一种特殊的周期性运动","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.1.1"},{"title":"点","href":"/zh/blog/math/point.html","displayDate":"2026-03-15","allDates":["2026-02-19","2026-03-15"],"abstract":"随便写点对点的理解","tags":["几何"],"category":"math","cover":null,"recommend":0,"version":"v0.1.2"},{"title":"向量","href":"/zh/blog/math/vector.html","displayDate":"2026-03-14","allDates":["2026-03-10","2026-03-14"],"abstract":"向量是连接几何与代数的桥梁","tags":["几何","代数"],"category":"math","cover":null,"recommend":666,"version":"v0.7.2"},{"title":"曲线","href":"/zh/blog/math/curve.html","displayDate":"2026-03-12","allDates":["2026-03-03","2026-03-05","2026-03-06","2026-03-08","2026-03-12"],"abstract":"暂无摘要","tags":["几何"],"category":"math","cover":null,"recommend":8888,"version":"v0.4.5"},{"title":"时间","href":"/zh/blog/physics/time.html","displayDate":"2026-03-02","allDates":["2026-03-02"],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.1"},{"title":"桁架","href":"/zh/blog/physics/truss.html","displayDate":"2026-03-01","allDates":["2026-03-01"],"abstract":"暂无摘要","tags":["力学","模型"],"category":"physics","cover":null,"recommend":0,"version":"v0.0.0"},{"title":"刚体","href":"/zh/blog/physics/rigid_body.html","displayDate":"2026-02-28","allDates":["2026-02-19","2026-02-28"],"abstract":"随便写点对刚体的理解","tags":["力学","模型"],"category":"physics","cover":null,"recommend":3,"version":"v0.1.1"},{"title":"坐标","href":"/zh/blog/math/coordinate.html","displayDate":"2026-02-19","allDates":["2026-02-19"],"abstract":"随便写点对坐标的理解","tags":["几何"],"category":"math","cover":null,"recommend":0,"version":"v0.0.0"},{"title":"我的第一篇博客(测试)","href":"/zh/blog/essays/test.html","displayDate":"2026-02-03","allDates":["2026-01-30","2026-02-03"],"abstract":"我能在患有痴呆症的情况下写完这篇博文吗?","tags":["测试","梗","游戏","MC"],"category":"essays","cover":"https://ghproxy.net/https://raw.githubusercontent.com/Orisnow/Images/refs/heads/main/sana/%E6%89%AB%E6%8F%8F%E5%9B%BE.jpg","recommend":114514,"version":"v1.5.2"},{"title":"无标题","href":"/zh/blog/archives.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[],"category":"archives.html","version":"v0.0.0"},{"title":"数组","href":"/zh/blog/computer/array.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"computer","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"无标题","href":"/zh/blog/computer/game_of_life.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[],"category":"computer","version":"v0.0.0"},{"title":"无标题","href":"/zh/blog/computer/","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[],"category":"computer","version":"v0.0.0"},{"title":"FEA软件对比","href":"/zh/blog/essays/FEA_comparison.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"essays","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"无标题","href":"/zh/blog/essays/","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[],"category":"essays","version":"v0.0.0"},{"title":"无标题","href":"/zh/blog/","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[],"category":"无","version":"v0.0.0"},{"title":"聚点","href":"/zh/blog/math/accumulation_point.html","displayDate":"","allDates":[],"abstract":"聚点以静态的视角处理了等式中一方对象为动态的情况","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"中心极限定理","href":"/zh/blog/math/central_limit_theorem.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"复数","href":"/zh/blog/math/complex_number.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"连续性","href":"/zh/blog/math/continuity.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"收敛","href":"/zh/blog/math/convergence.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"卷积","href":"/zh/blog/math/convolution.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"累积分布函数","href":"/zh/blog/math/cumulative_distribution_function.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"旋度","href":"/zh/blog/math/curl.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"行列式","href":"/zh/blog/math/determinant.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"微分方程","href":"/zh/blog/math/differential_equation.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"维度","href":"/zh/blog/math/dimension.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"散度","href":"/zh/blog/math/divergence.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"泛函","href":"/zh/blog/math/functional.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"群","href":"/zh/blog/math/group.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"同态","href":"/zh/blog/math/homomorphism.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":["代数"],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"无标题","href":"/zh/blog/math/","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[],"category":"math","version":"v0.0.0"},{"title":"数学归纳法","href":"/zh/blog/math/induction.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"无穷","href":"/zh/blog/math/infinity.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"积分","href":"/zh/blog/math/integral.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"同构","href":"/zh/blog/math/isomorphism.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"拉普拉斯变换","href":"/zh/blog/math/laplace_transform.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"拉普拉斯算子","href":"/zh/blog/math/laplacian.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"大数定律","href":"/zh/blog/math/law_of_large_numbers.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"映射","href":"/zh/blog/math/map.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"测度","href":"/zh/blog/math/measure.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"度量","href":"/zh/blog/math/metric.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"自然数","href":"/zh/blog/math/natural_number.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"概率密度函数","href":"/zh/blog/math/probability_density_function.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"级数","href":"/zh/blog/math/series.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"向量空间","href":"/zh/blog/math/vector_space.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"math","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"键合图","href":"/zh/blog/physics/bond_graph.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"连续体","href":"/zh/blog/physics/contunuum.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"密度","href":"/zh/blog/physics/density.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"效率","href":"/zh/blog/physics/efficiency.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"弹性","href":"/zh/blog/physics/elasticity.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"能量","href":"/zh/blog/physics/energy.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"流体","href":"/zh/blog/physics/fluid.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"频率","href":"/zh/blog/physics/frequency.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"阻抗","href":"/zh/blog/physics/impedance.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"无标题","href":"/zh/blog/physics/","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[],"category":"physics","version":"v0.0.0"},{"title":"麦克斯韦方程组","href":"/zh/blog/physics/maxwell-equation.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"介质","href":"/zh/blog/physics/medium.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"动量","href":"/zh/blog/physics/momentum.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"噪声","href":"/zh/blog/physics/noise.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"物理量","href":"/zh/blog/physics/physics_quantity.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"功率","href":"/zh/blog/physics/power.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"压强","href":"/zh/blog/physics/pressure.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"标量","href":"/zh/blog/physics/scalar.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"旋量 (Screw Theory)","href":"/zh/blog/physics/screw.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"灵敏度","href":"/zh/blog/physics/sensitivity.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"固体","href":"/zh/blog/physics/solid.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"旋量 (Spinor)","href":"/zh/blog/physics/spinor.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"应变","href":"/zh/blog/physics/strain.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"应力","href":"/zh/blog/physics/stress.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"温度","href":"/zh/blog/physics/temperature.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"力矩","href":"/zh/blog/physics/torque.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"波","href":"/zh/blog/physics/wave.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"physics","cover":null,"recommend":null,"version":"v0.0.0"},{"title":"无标题","href":"/zh/blog/template.html","displayDate":"","allDates":[],"abstract":"暂无摘要","tags":[null],"category":"template.html","cover":null,"recommend":null,"version":"v0.0.0"}]'),QS=JSON.parse('[{"title":"My First Blog Post (For Testing)","href":"/en/blog/essays/test.html","displayDate":"2026-02-03","allDates":["2026-01-30","2026-02-03"],"abstract":"Can I finish writing this blog post while suffering from dementia?","tags":["test","mems"],"category":"essays","cover":"https://ghproxy.net/https://raw.githubusercontent.com/Orisnow/Images/refs/heads/main/sana/%E6%89%AB%E6%8F%8F%E5%9B%BE.jpg","recommend":114514,"version":"v0.0.0"},{"title":"No title","href":"/en/blog/archives.html","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"archives.html","version":"v0.0.0"},{"title":"No title","href":"/en/blog/computer/game_of_life.html","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"computer","version":"v0.0.0"},{"title":"No title","href":"/en/blog/computer/","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"computer","version":"v0.0.0"},{"title":"No title","href":"/en/blog/essays/","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"essays","version":"v0.0.0"},{"title":"No title","href":"/en/blog/","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"nothing","version":"v0.0.0"},{"title":"No title","href":"/en/blog/math/gamma.html","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"math","version":"v0.0.0"},{"title":"No title","href":"/en/blog/math/","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"math","version":"v0.0.0"},{"title":"No title","href":"/en/blog/math/laplacian.html","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"math","version":"v0.0.0"},{"title":"No title","href":"/en/blog/physics/","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"physics","version":"v0.0.0"},{"title":"No title","href":"/en/blog/physics/maxwell-equation.html","displayDate":"","allDates":[],"abstract":"No abstract","tags":[],"category":"physics","version":"v0.0.0"}]'),ex=JSON.parse('[{"title":"私の最初のブログ（テスト用）","href":"/ja/blog/essays/test.html","displayDate":"2026-02-03","allDates":["2026-01-30","2026-02-03"],"abstract":"認知症を患いながらこのブログを書き終えられるだろうか？","tags":["测试","梗"],"category":"essays","cover":"https://ghproxy.net/https://raw.githubusercontent.com/Orisnow/Images/refs/heads/main/sana/%E6%89%AB%E6%8F%8F%E5%9B%BE.jpg","recommend":114514,"version":"v0.0.0"},{"title":"無題","href":"/ja/blog/archives.html","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"archives.html","version":"v0.0.0"},{"title":"無題","href":"/ja/blog/computer/game_of_life.html","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"computer","version":"v0.0.0"},{"title":"無題","href":"/ja/blog/computer/","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"computer","version":"v0.0.0"},{"title":"無題","href":"/ja/blog/essays/","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"essays","version":"v0.0.0"},{"title":"無題","href":"/ja/blog/","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"無","version":"v0.0.0"},{"title":"無題","href":"/ja/blog/math/gamma.html","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"math","version":"v0.0.0"},{"title":"無題","href":"/ja/blog/math/","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"math","version":"v0.0.0"},{"title":"無題","href":"/ja/blog/math/laplacian.html","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"math","version":"v0.0.0"},{"title":"無題","href":"/ja/blog/physics/","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"physics","version":"v0.0.0"},{"title":"無題","href":"/ja/blog/physics/maxwell-equation.html","displayDate":"","allDates":[],"abstract":"無","tags":[],"category":"physics","version":"v0.0.0"}]');function ss(i){const{localeIndex:e,lang:t}=rn(),n=Ne(()=>t.value.split("-")[0]||"zh"),s=Ne(()=>JS[i][n.value]),r=Ne(()=>({zh:Ec,en:QS,ja:ex})[e.value]||Ec);return{t:s,blogData:r,langKey:n}}const tx={class:"blog-post"},nx={class:"markdown-body markdown"},ix=Se({__name:"BlogPost",setup(i){const{lang:e}=rn();return ss("BlogPost"),(t,n)=>{const s=cn("Content");return D(),W("div",tx,[P("article",nx,[xe(s)])])}}}),sx=ye(ix,[["__scopeId","data-v-eead28cb"]]),rx={key:0,class:"blog-top"},ax={class:"blog-title-row"},ox={class:"blog-title"},lx={key:0,class:"title-meta-group"},cx={class:"blog-tags"},hx={class:"blog-meta-bottom"},ux={class:"blog-latest-date"},dx={class:"date-label"},fx={class:"date-value"},px={key:0,class:"blog-version"},mx={class:"version-value"},gx=Se({__name:"BlogTop",setup(i){const{page:e}=rn(),{t,blogData:n}=ss("BlogTop"),s=Ne(()=>{const r=e.value.relativePath.replace(/\.md$/,"");return n.value.find(a=>a.href.includes(r))});return(r,a)=>s.value?(D(),W("div",rx,[P("div",ax,[P("h1",ox,De(s.value.title),1),s.value.tags&&s.value.tags.length?(D(),W("div",lx,[a[0]||(a[0]=P("div",{class:"title-divider"},null,-1)),P("div",cx,[(D(!0),W(st,null,bt(s.value.tags,o=>(D(),W("span",{key:o,class:"tag-item"}," #"+De(o),1))),128))])])):Ae("",!0)]),P("div",hx,[P("div",ux,[P("span",dx,De(O(t).date)+": ",1),P("time",fx,De(s.value.displayDate||"-----"),1)]),s.value.version?(D(),W("div",px,[P("span",mx,De(s.value.version),1)])):Ae("",!0)]),a[1]||(a[1]=P("div",{class:"bottom-divider"},null,-1))])):Ae("",!0)}}),_x=ye(gx,[["__scopeId","data-v-46c43e5f"]]),vx={class:"sidebar-wrapper"},yx={class:"catalog-tabs"},Mx=["href"],Sx={class:"catalog-panel"},xx={key:0,class:"panel-content"},bx=["href"],Ex=Se({__name:"MySidebar",setup(i){const{page:e}=rn(),{t,blogData:n,langKey:s}=ss("MySidebar"),r=["math","physics","computer","essays"],a=Ne(()=>{const c={math:[],physics:[],computer:[],essays:[]};return(n.value||[]).forEach(d=>{if(!d?.href||d.href.endsWith("/")||d.href.endsWith("index.html")||d.href.endsWith("index"))return;const f=d.href.split("/").filter(Boolean),p=f.indexOf("blog");if(p!==-1&&f[p+1]){const v=f[p+1];c[v]&&c[v].push(d)}}),Object.keys(c).forEach(d=>{c[d].sort((m,f)=>m.title.localeCompare(f.title,s.value))}),c}),o=Ne(()=>e.value.relativePath.split("/")[2]);return(c,h)=>(D(),W("aside",vx,[P("nav",yx,[(D(),W(st,null,bt(r,d=>P("div",{key:d,class:"tab-item"},[P("a",{class:Ye(["catalog-title",{"is-active":d===o.value}]),href:O(Ot)(`/${O(s)}/blog/${d}/`)},De(O(t)[d]),11,Mx)])),64))]),P("main",Sx,[o.value&&a.value[o.value]?(D(),W("div",xx,[P("ol",null,[(D(!0),W(st,null,bt(a.value[o.value],d=>(D(),W("li",{key:d.href},[P("a",{href:O(Ot)(d.href),class:Ye({"active-link":O(e).relativePath===d.href})},De(d.title),11,bx)]))),128))])])):Ae("",!0)])]))}}),Dh=ye(Ex,[["__scopeId","data-v-9fb9fcef"]]),Tx={class:"fixed-tool"},wx=Se({__name:"FixedTool",setup(i){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(t,n)=>(D(),W("div",Tx,[P("button",{class:"default-whisper-controller",onClick:n[0]||(n[0]=s=>ys.value=!O(ys))},[xe(Pn,{name:O(ys)?"eye-on":"eye-off",size:"24px"},null,8,["name"])]),P("button",{class:"back-to-top",type:"button",onClick:e,title:"Back to Top"},[xe(Pn,{name:"back-to-top",size:"24px"})])]))}}),Ax=ye(wx,[["__scopeId","data-v-fd548243"]]),Rx={class:"menu-bar"},Cx={class:"icon"},Px={key:0,class:"dropdown-wrapper"},Dx=Se({__name:"Menubar",setup(i){const e=ze(!1),t=n=>{n.target.tagName==="A"&&(e.value=!1)};return(n,s)=>(D(),W("div",Rx,[P("button",{class:Ye(["hamburger-btn",{"is-active":e.value}]),onClick:s[0]||(s[0]=r=>e.value=!e.value)},[P("span",Cx,De(e.value?"✕":"☰"),1)],2),xe(ns,{name:"dropdown"},{default:ce(()=>[e.value?(D(),W("div",Px,[P("div",{class:"dropdown-content",onClick:t},[xe(Dh)]),P("div",{class:"dropdown-mask",onClick:s[1]||(s[1]=r=>e.value=!1)})])):Ae("",!0)]),_:1})]))}}),Lx=ye(Dx,[["__scopeId","data-v-9e0d200c"]]),Ix={class:"blog-page"},Nx={class:"top-area"},Ux={class:"left-area"},Fx={class:"left-sidebar-aera"},Ox={class:"middle-area"},Bx={key:0,class:"blog-intro"},kx={key:1,class:"blog-content"},zx={class:"blog-top-area"},Vx={class:"blog-post-area"},Hx={class:"blog-buttom-area"},Gx={class:"right-area"},Wx={class:"right-bottom-area"},$x={class:"fixed-tool-aera"},Xx=Se({__name:"Blog",setup(i){const{page:e}=rn(),t=Ne(()=>{const n=e.value.relativePath;return n.includes("/blog/")&&(n.endsWith("/index.md")||n.endsWith("/index")||n.endsWith("/"))});return(n,s)=>(D(),W("main",Ix,[P("div",Nx,[xe(Lx)]),P("div",Ux,[P("section",Fx,[xe(Dh)]),s[0]||(s[0]=P("section",{class:"left-bottom-area"},null,-1))]),P("div",Ox,[t.value?(D(),W("div",Bx,[xe(YS)])):(D(),W("div",kx,[P("section",zx,[xe(_x)]),P("section",Vx,[xe(sx)]),P("section",Hx,[xe(KS)])]))]),P("div",Gx,[s[1]||(s[1]=P("section",{class:"right-outline-arae"},null,-1)),P("section",Wx,[P("div",$x,[xe(Ax)])])])]))}}),qx=ye(Xx,[["__scopeId","data-v-27a66bee"]]),Yx={class:"category-card"},jx=["href"],Zx={class:"card-left-part"},Kx={class:"card-header"},Jx={class:"card-icon"},Qx={class:"category-card-title"},eb={class:"category-card-content"},tb={class:"category-card-image"},nb=Se({__name:"CategoryCard",props:{href:{}},setup(i){return(e,t)=>(D(),W("div",Yx,[P("a",{class:"category-card-link",href:O(Ot)(i.href)},[P("div",Zx,[P("div",Kx,[P("div",Jx,[ie(e.$slots,"category-card-icon",{},void 0,!0)]),P("h3",Qx,[ie(e.$slots,"category-card-title",{},void 0,!0)])]),P("div",eb,[ie(e.$slots,"category-card-content",{},void 0,!0)])]),P("div",tb,[ie(e.$slots,"category-card-image",{},void 0,!0)])],8,jx)]))}}),ib=ye(nb,[["__scopeId","data-v-a1cfa0b0"]]),sb={class:"hero"},rb={class:"category-cards"},ab=["src"],ob={class:"arrow-wrapper"},lb=Se({__name:"PortalHero",setup(i){const{t:e}=ss("PortalHero"),{frontmatter:t}=rn(),n=()=>{window.scrollTo({top:window.innerHeight-64,behavior:"smooth"})};return(s,r)=>(D(),W("header",sb,[P("h1",null,De(O(e).h1),1),P("section",rb,[(D(!0),W(st,null,bt(O(t).categories,a=>(D(),Ce(ib,{key:a.id,href:a.href},{"category-card-icon":ce(()=>[xe(Pn,{name:a.icon,size:"24px"},null,8,["name"])]),"category-card-title":ce(()=>[jn(De(a.title),1)]),"category-card-content":ce(()=>[jn(De(a.content),1)]),"category-card-image":ce(()=>[P("img",{src:a.src},null,8,ab)]),_:2},1032,["href"]))),128))]),P("button",{type:"button",class:"hero-slide-down-button",onClick:n,"aria-label":"Slide Down"},[P("div",ob,[xe(Pn,{name:"hero-side-down",size:"30px"}),xe(Pn,{name:"hero-side-down",size:"40px",class:"second-arrow"})])])]))}}),cb=ye(lb,[["__scopeId","data-v-9cbe1679"]]),hb={class:"blog-card"},ub=["href"],db={key:0,class:"image-container"},fb=["src"],pb={class:"blog-card-content"},mb={class:"blog-card-title"},gb={key:0,class:"blog-card-abstract"},_b={class:"blog-card-meta"},vb={class:"edit-date"},yb={key:0,class:"tag-list"},Mb=Se({__name:"BlogCard",props:{title:{},href:{},displayDate:{},abstract:{},tags:{},cover:{}},setup(i){return(e,t)=>(D(),W("article",hb,[P("a",{class:"blog-card-link",href:O(Ot)(i.href)},[i.cover?(D(),W("div",db,[P("img",{src:i.cover,class:"blog-card-image",loading:"lazy"},null,8,fb)])):Ae("",!0),P("div",pb,[P("h3",mb,De(i.title),1),i.abstract?(D(),W("p",gb,De(i.abstract),1)):Ae("",!0),P("div",_b,[P("time",vb,De(i.displayDate),1),i.tags?.length?(D(),W("div",yb,[(D(!0),W(st,null,bt(i.tags,n=>(D(),W("span",{key:n,class:"tag-item"},"#"+De(n),1))),128))])):Ae("",!0)])])],8,ub)]))}}),Tc=ye(Mb,[["__scopeId","data-v-e378ae6a"]]);function Sb(){const i=Rs(),e=Co();return{goToArchives:n=>{const a=`/${i.path.split("/")[1]||"zh"}/blog/archives`,o=n?`${a}?filter=${n}`:a;e.go(o)}}}const xb={};function bb(i,e){return D(),W("footer",null,[...e[0]||(e[0]=[P("p",null,"我是页脚",-1)])])}const Eb=ye(xb,[["render",bb]]),Tb={class:"portal-layout"},wb={class:"portal-hero hero-fullscreen"},Ab={class:"recommended-blogs"},Rb={class:"blog-grid"},Cb={class:"latest-blogs"},Pb={class:"blog-grid"},Db={class:"portal-footer"},Lb=Se({__name:"Portal",setup(i){const{goToArchives:e}=Sb(),{t,blogData:n}=ss("Portal"),s=Ne(()=>n.value.slice(0,6)),r=Ne(()=>[...n.value].filter(a=>a.recommend).sort((a,o)=>{const c=Number(a.recommend);return Number(o.recommend)-c}).slice(0,3));return(a,o)=>(D(),W("div",Tb,[P("section",wb,[xe(cb)]),P("section",Ab,[P("h2",null,De(O(t).recommended),1),P("button",{onClick:o[0]||(o[0]=c=>O(e)("recommend"))},De(O(t).more),1),P("div",Rb,[(D(!0),W(st,null,bt(r.value,c=>(D(),Ce(Tc,gn({key:c.href},{ref_for:!0},c),null,16))),128))])]),P("section",Cb,[P("h2",null,De(O(t).latest),1),P("button",{onClick:o[1]||(o[1]=c=>O(e)("latest"))},De(O(t).more),1),P("div",Pb,[(D(!0),W(st,null,bt(s.value,c=>(D(),Ce(Tc,gn({key:c.href},{ref_for:!0},c),null,16))),128))])]),P("section",Db,[xe(Eb)])]))}}),Ib=ye(Lb,[["__scopeId","data-v-d5f81189"]]),Nb={},Ub={class:"NF-i18n"},Fb={class:"content"};function Ob(i,e){return D(),W("div",Ub,[P("div",Fb,[ie(i.$slots,"default",{},void 0,!0)]),e[0]||(e[0]=P("div",{class:"NF-image"},[P("img",{src:Qh})],-1))])}const Bb=ye(Nb,[["render",Ob],["__scopeId","data-v-59403086"]]),kb={class:"custom-404"},zb=Se({__name:"404",setup(i){const{lang:e}=rn();return(t,n)=>{const s=cn("NotFoundContent");return D(),W("div",kb,[O(e)==="zh-CN"?(D(),Ce(Bb,{key:0},{default:ce(()=>[...n[0]||(n[0]=[P("h1",null,"施工中",-1),P("p",null,"你来到了一片荒原",-1),P("a",{href:"/zh/"},"返回首页",-1)])]),_:1})):O(e)==="ja-JP"?(D(),Ce(s,{key:1},{default:ce(()=>[...n[1]||(n[1]=[P("h1",null,"工事中",-1),P("p",null,"あなたは荒れ地に来たのです",-1),P("a",{href:"/ja"},"トップページに戻ります",-1)])]),_:1})):(D(),Ce(s,{key:2},{default:ce(()=>[...n[2]||(n[2]=[P("h1",null,"under construction",-1),P("p",null,"You have arrived in a desolate wilderness",-1),P("a",{href:"/en"},"Go Home",-1)])]),_:1}))])}}}),Vb=ye(zb,[["__scopeId","data-v-ea12de35"]]),Hb={};function Gb(i,e){return null}const Wb=ye(Hb,[["render",Gb]]),$b={class:"navbar"},Xb={class:"navbar-title"},qb=["href"],Yb={class:"site-name"},jb={class:"navbar-content desktop-only"},Zb=["href"],Kb=["href"],Jb=["href"],Qb=["href"],eE={class:"navbar-right"},tE={class:"lang-switcher desktop-only"},nE={key:0},iE={key:1},sE={key:0,class:"mobile-menu-wrapper"},rE={class:"mobile-nav"},aE=["href"],oE=["href"],lE=["href"],cE=["href"],hE={class:"mobile-utils"},uE={class:"mobile-langs"},dE=["onClick"],fE=Se({__name:"MyNavbar",setup(i){const e=ze(!1),{page:t,isDark:n}=rn(),{go:s}=Co(),{t:r,langKey:a}=ss("MyNavbar"),o=h=>{const m=t.value.relativePath.replace(/^(zh|en|ja)\//,`${h}/`);s(Ot(`/${m.replace(/\.md$/,".html")}`))},c=()=>{n.value=!n.value};return(h,d)=>(D(),W("header",$b,[P("div",Xb,[P("a",{class:"title",href:O(Ot)(`/${O(a)}/`)},[d[8]||(d[8]=P("img",{src:eu,height:"25",width:"25",alt:"logo"},null,-1)),P("span",Yb,De(O(r).title),1)],8,qb)]),P("div",jb,[P("a",{href:O(Ot)(`/${O(a)}/`)},De(O(r).home),9,Zb),P("a",{href:O(Ot)(`/${O(a)}/blog`)},De(O(r).blog),9,Kb),P("a",{href:O(Ot)(`/${O(a)}/origami`)},De(O(r).origami),9,Jb),P("a",{href:O(Ot)(`/${O(a)}/showcase`)},De(O(r).showcase),9,Qb)]),P("div",eE,[P("div",tE,[P("button",{onClick:d[0]||(d[0]=m=>o("zh")),class:Ye({active:O(a)==="zh"})},"ZH",2),P("button",{onClick:d[1]||(d[1]=m=>o("en")),class:Ye({active:O(a)==="en"})},"EN",2),P("button",{onClick:d[2]||(d[2]=m=>o("ja")),class:Ye({active:O(a)==="ja"})},"JA",2)]),P("button",{class:"theme-toggle desktop-only",onClick:c},[O(n)?(D(),W("span",nE,"🌙")):(D(),W("span",iE,"☀️"))]),P("button",{class:"hamburger-btn mobile-only",onClick:d[3]||(d[3]=m=>e.value=!e.value)},De(e.value?"✕":"☰"),1)]),xe(ns,{name:"nav-drop"},{default:ce(()=>[e.value?(D(),W("div",sE,[P("div",rE,[P("a",{href:O(Ot)(`/${O(a)}/`),onClick:d[4]||(d[4]=m=>e.value=!1)},De(O(r).home),9,aE),P("a",{href:O(Ot)(`/${O(a)}/blog`),onClick:d[5]||(d[5]=m=>e.value=!1)},De(O(r).blog),9,oE),P("a",{href:O(Ot)(`/${O(a)}/origami`),onClick:d[6]||(d[6]=m=>e.value=!1)},De(O(r).origami),9,lE),P("a",{href:O(Ot)(`/${O(a)}/showcase`),onClick:d[7]||(d[7]=m=>e.value=!1)},De(O(r).showcase),9,cE)]),d[9]||(d[9]=P("hr",{class:"mobile-divider"},null,-1)),P("div",hE,[P("div",uE,[(D(),W(st,null,bt(["zh","en","ja"],m=>P("button",{key:m,onClick:f=>{o(m),e.value=!1},class:Ye({active:O(a)===m})},De(m.toUpperCase()),11,dE)),64))]),P("button",{class:"mobile-theme-toggle",onClick:c},[P("span",null,De(O(n)?"🌙 Dark Mode":"☀️ Light Mode"),1)])])])):Ae("",!0)]),_:1})]))}}),pE=ye(fE,[["__scopeId","data-v-00c6ba51"]]),mE={class:"home"},gE={class:"status-card"},_E={class:"schedule"},vE={class:"value"},yE={class:"progress-bar"},ME={class:"build-tips"},SE=Se({__name:"Home",setup(i){const{frontmatter:e}=rn();return(t,n)=>(D(),W("div",mE,[n[1]||(n[1]=P("div",{class:"hero-section"},[P("h1",{class:"title"},"Balson 的花园"),P("p",{class:"subtitle"},"这里是正在生长的数字园地")],-1)),P("div",gE,[P("h2",_E,[n[0]||(n[0]=P("span",{class:"label"},"预估站点建设进度：",-1)),P("span",vE,De(O(e).rate||"0%"),1)]),P("div",yE,[P("div",{class:"progress-fill",style:wi({width:O(e).rate})},null,4)]),P("p",ME,"🚧 正在构建："+De(O(e).building||"内容填充中..."),1)])]))}}),xE=ye(SE,[["__scopeId","data-v-faa465d0"]]),bE={};function EE(i,e){const t=cn("Content");return D(),W(st,null,[e[0]||(e[0]=P("div",{class:"c"},null,-1)),xe(t)],64)}const TE=ye(bE,[["render",EE],["__scopeId","data-v-37aaa737"]]),wE={};function AE(i,e){const t=cn("Content");return D(),Ce(t)}const RE=ye(wE,[["render",AE]]),CE={key:0},PE={key:1,class:"app-container"},DE={class:"main-stage"},LE=Se({__name:"MyLayout",setup(i){const{Layout:e}=WS,{page:t}=rn(),n=Ne(()=>{const r=t.value.relativePath.match(/^([a-z]{2})\/(.*)$/);if(!r)return{type:"default"};const[a,o,c]=r;return c==="index.md"||c===""?{type:"home"}:c.startsWith("blog/")?c==="blog/archives.md"?{type:"archives"}:c==="blog/index.md"?{type:"portal"}:{type:"blog"}:c.startsWith("origami")?{type:"origami"}:c.startsWith("showcase")?{type:"showcase"}:{type:"default"}});return(s,r)=>O(t).isNotFound?(D(),W("div",CE,[xe(Vb)])):(D(),W("div",PE,[xe(pE),P("main",DE,[n.value.type==="home"?(D(),Ce(xE,{key:0})):n.value.type==="blog"?(D(),Ce(qx,{key:1})):n.value.type==="origami"?(D(),Ce(TE,{key:2})):n.value.type==="showcase"?(D(),Ce(RE,{key:3})):n.value.type==="portal"?(D(),Ce(Ib,{key:4})):n.value.type==="archives"?(D(),Ce(Wb,{key:5})):(D(),Ce(O(e),{key:6}))])]))}}),IE=ye(LE,[["__scopeId","data-v-9538aadd"]]);if(typeof window<"u"){let i=function(){var e=document.body,t=document.getElementById("__svg__icons__dom__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__",t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),t.innerHTML='<symbol  viewBox="0 0 24 24" id="icon-atom"><circle cx="12" cy="12" r="2.197" fill="currentColor"></circle><path fill="currentColor" d="M21.634 6.437c-.709-1.228-2.411-1.732-4.796-1.424-.302.04-.613.094-.93.158C15.009 2.619 13.608 1 12 1c-1.61 0-3.013 1.624-3.913 4.183-2.738-.542-4.907-.156-5.722 1.254-.812 1.407-.07 3.47 1.757 5.563-1.827 2.094-2.57 4.156-1.757 5.563.582 1.008 1.85 1.496 3.525 1.496a11.475 11.475 0 0 0 2.197-.243C8.987 21.376 10.39 23 12 23c1.607 0 3.009-1.619 3.909-4.17.316.063.627.117.93.157a10.182 10.182 0 0 0 1.296.088c1.705 0 2.927-.52 3.5-1.512.812-1.407.07-3.47-1.757-5.563 1.827-2.094 2.569-4.156 1.756-5.563Zm-4.649-.297a9.08 9.08 0 0 1 1.16-.08c1.26 0 2.15.327 2.507.945.504.874-.067 2.442-1.552 4.168a20.506 20.506 0 0 0-2.302-1.953 19.975 19.975 0 0 0-.547-2.936c.244-.047.5-.114.734-.144Zm-3.072 9.174c-.647.373-1.284.703-1.907.993a24.552 24.552 0 0 1-1.92-.993 24.472 24.472 0 0 1-1.819-1.16 23.827 23.827 0 0 1 0-4.309 24.472 24.472 0 0 1 3.73-2.149c.627.292 1.265.615 1.916.99.649.375 1.255.764 1.82 1.16a23.845 23.845 0 0 1 0 4.308c-.565.396-1.171.785-1.82 1.16Zm1.628.335a17.876 17.876 0 0 1-.392 1.824 18.464 18.464 0 0 1-1.76-.583c.363-.187.727-.383 1.092-.594.365-.21.717-.427 1.06-.647Zm-4.924 1.244a18.413 18.413 0 0 1-1.766.581 17.86 17.86 0 0 1-.392-1.825c.344.22.696.437 1.06.647.365.21.73.407 1.098.597ZM7.074 13.25A18.386 18.386 0 0 1 5.675 12a18.389 18.389 0 0 1 1.4-1.25c-.02.41-.033.826-.033 1.25s.012.84.032 1.25ZM8.46 8.352a17.867 17.867 0 0 1 .391-1.823 18.222 18.222 0 0 1 1.77.577c-.368.19-.735.387-1.1.598-.365.21-.717.427-1.06.647Zm4.93-1.242a18.488 18.488 0 0 1 1.76-.583 17.876 17.876 0 0 1 .392 1.824A26.075 26.075 0 0 0 13.39 7.11Zm3.537 3.64A18.401 18.401 0 0 1 18.324 12a18.388 18.388 0 0 1-1.398 1.25c.02-.41.032-.826.032-1.25s-.012-.84-.032-1.25ZM12 2.129c.998 0 2.056 1.234 2.807 3.31a20.802 20.802 0 0 0-2.809 1.011 20.52 20.52 0 0 0-2.807-1.005C9.942 3.365 11 2.129 12 2.129ZM3.348 7.005c.351-.608 1.252-.934 2.52-.934a10.262 10.262 0 0 1 1.884.201 19.968 19.968 0 0 0-.55 2.948A20.489 20.489 0 0 0 4.9 11.173C3.414 9.447 2.843 7.88 3.348 7.005Zm0 9.99c-.505-.874.066-2.442 1.552-4.168A20.501 20.501 0 0 0 7.2 14.78a19.944 19.944 0 0 0 .552 2.953c-2.247.429-3.898.14-4.405-.738ZM12 21.87c-.999 0-2.058-1.237-2.81-3.317A20.448 20.448 0 0 0 12 17.55a20.802 20.802 0 0 0 2.806 1.01c-.75 2.076-1.81 3.31-2.807 3.31Zm8.652-4.876c-.46.792-1.793 1.109-3.667.865-.235-.03-.49-.097-.734-.144a19.976 19.976 0 0 0 .547-2.936 20.504 20.504 0 0 0 2.302-1.953c1.485 1.726 2.056 3.294 1.552 4.168Z" /><circle cx="-.5" cy="2" r="1.5" fill="currentColor"><animateMotion dur="4s" path="M14.75 14.1471C12.2277 15.6034 9.69019 16.4332 7.6407 16.6145C5.54599 16.7998 4.15833 16.3018 3.62324 15.375C3.08815 14.4482 3.35067 12.9974 4.55852 11.276C5.74031 9.59178 7.72768 7.80915 10.25 6.35289C12.7723 4.89662 15.3098 4.06682 17.3593 3.88549C19.454 3.70016 20.8417 4.1982 21.3768 5.125C21.9118 6.0518 21.6493 7.50256 20.4415 9.22397C19.2597 10.9082 17.2723 12.6909 14.75 14.1471Z" repeatCount="indefinite"></animateMotion></circle></symbol><symbol  viewBox="0 0 27.6 28.6" id="icon-back-to-top"><path d="M26.4 13.4 14 1.3v-.1.1L1.6 13.4v12L14 12.9l12.4 12.5c-.1 0 0-12 0-12z" style="fill:#fff" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-eye-off"><path d="M874.045 149.955a30.72 30.72 0 0 1 0 43.458L193.413 874.045a30.72 30.72 0 1 1-43.458-43.458l680.632-680.632a30.72 30.72 0 0 1 43.458 0zM859.75 315.843c76.8 57.466 123.29 128.84 123.29 196.157 0 153.313-228.106 307.2-471.04 307.2-43.95 0-87.47-4.751-129.761-13.947a30.72 30.72 0 1 1 13.066-60.047A549.094 549.094 0 0 0 512 757.76c212.951 0 409.6-132.67 409.6-245.76 0-44.892-35.901-100.004-98.652-146.964a30.72 30.72 0 0 1 36.802-49.193zM512 204.8c44.34 0 88.269 4.854 130.908 14.213a30.72 30.72 0 0 1-13.168 60.007A549.663 549.663 0 0 0 512 266.24c-212.951 0-409.6 132.67-409.6 245.76 0 45.384 36.7 101.192 100.66 148.439a30.72 30.72 0 1 1-36.517 49.418C88.392 652.104 40.96 580.014 40.96 512c0-153.313 228.106-307.2 471.04-307.2zm172.421 283.095A174.08 174.08 0 0 1 487.404 684.36a30.72 30.72 0 1 1 8.601-60.826 112.64 112.64 0 0 0 127.55-127.18 30.72 30.72 0 1 1 60.866-8.459zM512 337.92c8.356 0 16.63.594 24.822 1.761a30.72 30.72 0 1 1-8.704 60.826 112.64 112.64 0 0 0-127.57 128.02 30.72 30.72 0 1 1-60.785 8.91A174.08 174.08 0 0 1 512 337.92z" fill="#9918e2" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-eye-on"><path d="M512 204.8c242.934 0 471.04 153.887 471.04 307.2S754.934 819.2 512 819.2 40.96 665.313 40.96 512 269.066 204.8 512 204.8zm0 61.44c-212.951 0-409.6 132.67-409.6 245.76S299.049 757.76 512 757.76 921.6 625.09 921.6 512 724.951 266.24 512 266.24zm0 71.68a174.08 174.08 0 1 1 0 348.16 174.08 174.08 0 0 1 0-348.16zm0 61.44a112.64 112.64 0 1 0 0 225.28 112.64 112.64 0 0 0 0-225.28z" fill="#9918e2" /></symbol><symbol  viewBox="0 0 24 24" id="icon-hero-side-down"><path fill="currentColor" fill-rule="evenodd" d="M16.707 9.293a1 1 0 0 1 0 1.414L12 15.414l-4.707-4.707a1 1 0 0 1 1.414-1.414L12 12.586l3.293-3.293a1 1 0 0 1 1.414 0" clip-rule="evenodd" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-housenka"><path d="M783.831 704.333a60.052 60.052 0 0 0 8.125 11.346c18.192-59.715 23.184-164.972 11.459-256.758-21.473-168.095-121.912-436.608-266-403.855-67.962 15.436-110.975 243.538-87.121 407.644 161.991 48.845 289.7 161.198 333.537 241.623zm149.688-187.879C905.457 634.066 810.132 715.68 810.132 715.68s30.086-86.134 40.602-210.417c10.2-120.489 23.603-154.967 47.78-154.337 24.187.624 67.215 30.607 35.005 165.53z" fill="#9918e2" /><path d="M315.878 765.563c86.38 17.782 108.432 22.86 216.75 3.123 39.993-7.296 84.85-34.104 225.02-51.538-46.439-79.662-215.312-221.86-394.691-246.815C187.35 445.906 41.185 467.584 73.22 577.321c31.534 108.047 130.632 165.15 242.657 188.242z" fill="#9918e2" /><path d="M90.906 729.452s108.426 89.093 227.706 99.901c148.777 13.476 146.479-3.645 324.112-56.371 138.102-40.991 181.995-40.53 231.577 17.31 39.895 46.552 22.339 160.779-7.628 170.03 0 0-8.566-137.062-125.855-125.916-83.087 7.9-129.495 61.753-226.227 101.566-39.665 16.322-180.188 68.06-294.277 10.69-89.467-44.989-109.492-100.9-121.662-144.522-12.836-45.957-6.866-75.376-7.746-72.688zM889.59 736c-47.56-21.888-79.447-3.953-79.447-3.953s23.588.349 53.499 13.384c28.702 12.513 33.116 39.311 43.689 38.881 11.622-.47 19.369-31.216-17.741-48.312z" fill="#9918e2" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-image01"><path d="M238.933 102.4h546.134q136.533 0 136.533 136.533v546.134q0 136.533-136.533 136.533H238.933Q102.4 921.6 102.4 785.067V238.933q0-136.533 136.533-136.533Z" fill="#8053FF" /><path d="M512 102.4h273.067A136.533 136.533 0 0 1 921.6 238.933v546.134A136.533 136.533 0 0 1 785.067 921.6H238.933A136.533 136.533 0 0 1 102.4 785.067V512c0-226.202 183.398-409.6 409.6-409.6z" fill="#A784FF" /><path d="M648.533 324.267a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill="#FFF" /><path d="M620.169 475.921 506.709 676.25a34.133 34.133 0 0 0 29.696 50.927h176.367A68.267 68.267 0 0 0 770.8 622.933l-91.921-148.138a34.133 34.133 0 0 0-58.71 1.126z" fill="#CCBCFB" /><path d="M398.746 407.313 268.015 622.08a68.267 68.267 0 0 0 58.266 103.765h320.41L457.25 407.62a34.133 34.133 0 0 0-58.505-.341z" fill="#FFF" /></symbol>',e.insertBefore(t,e.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()}var Ta={},fs={},wc;function NE(){if(wc)return fs;wc=1,fs.byteLength=o,fs.toByteArray=h,fs.fromByteArray=f;for(var i=[],e=[],t=typeof Uint8Array<"u"?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,r=n.length;s<r;++s)i[s]=n[s],e[n.charCodeAt(s)]=s;e[45]=62,e[95]=63;function a(p){var v=p.length;if(v%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var E=p.indexOf("=");E===-1&&(E=v);var _=E===v?0:4-E%4;return[E,_]}function o(p){var v=a(p),E=v[0],_=v[1];return(E+_)*3/4-_}function c(p,v,E){return(v+E)*3/4-E}function h(p){var v,E=a(p),_=E[0],g=E[1],S=new t(c(p,_,g)),w=0,A=g>0?_-4:_,L;for(L=0;L<A;L+=4)v=e[p.charCodeAt(L)]<<18|e[p.charCodeAt(L+1)]<<12|e[p.charCodeAt(L+2)]<<6|e[p.charCodeAt(L+3)],S[w++]=v>>16&255,S[w++]=v>>8&255,S[w++]=v&255;return g===2&&(v=e[p.charCodeAt(L)]<<2|e[p.charCodeAt(L+1)]>>4,S[w++]=v&255),g===1&&(v=e[p.charCodeAt(L)]<<10|e[p.charCodeAt(L+1)]<<4|e[p.charCodeAt(L+2)]>>2,S[w++]=v>>8&255,S[w++]=v&255),S}function d(p){return i[p>>18&63]+i[p>>12&63]+i[p>>6&63]+i[p&63]}function m(p,v,E){for(var _,g=[],S=v;S<E;S+=3)_=(p[S]<<16&16711680)+(p[S+1]<<8&65280)+(p[S+2]&255),g.push(d(_));return g.join("")}function f(p){for(var v,E=p.length,_=E%3,g=[],S=16383,w=0,A=E-_;w<A;w+=S)g.push(m(p,w,w+S>A?A:w+S));return _===1?(v=p[E-1],g.push(i[v>>2]+i[v<<4&63]+"==")):_===2&&(v=(p[E-2]<<8)+p[E-1],g.push(i[v>>10]+i[v>>4&63]+i[v<<2&63]+"=")),g.join("")}return fs}var cr={};var Ac;function UE(){return Ac||(Ac=1,cr.read=function(i,e,t,n,s){var r,a,o=s*8-n-1,c=(1<<o)-1,h=c>>1,d=-7,m=t?s-1:0,f=t?-1:1,p=i[e+m];for(m+=f,r=p&(1<<-d)-1,p>>=-d,d+=o;d>0;r=r*256+i[e+m],m+=f,d-=8);for(a=r&(1<<-d)-1,r>>=-d,d+=n;d>0;a=a*256+i[e+m],m+=f,d-=8);if(r===0)r=1-h;else{if(r===c)return a?NaN:(p?-1:1)*(1/0);a=a+Math.pow(2,n),r=r-h}return(p?-1:1)*a*Math.pow(2,r-n)},cr.write=function(i,e,t,n,s,r){var a,o,c,h=r*8-s-1,d=(1<<h)-1,m=d>>1,f=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:r-1,v=n?1:-1,E=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,a=d):(a=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),a+m>=1?e+=f/c:e+=f*Math.pow(2,1-m),e*c>=2&&(a++,c/=2),a+m>=d?(o=0,a=d):a+m>=1?(o=(e*c-1)*Math.pow(2,s),a=a+m):(o=e*Math.pow(2,m-1)*Math.pow(2,s),a=0));s>=8;i[t+p]=o&255,p+=v,o/=256,s-=8);for(a=a<<s|o,h+=s;h>0;i[t+p]=a&255,p+=v,a/=256,h-=8);i[t+p-v]|=E*128}),cr}var Rc;function FE(){return Rc||(Rc=1,(function(i){const e=NE(),t=UE(),n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=o,i.SlowBuffer=S,i.INSPECT_MAX_BYTES=50;const s=2147483647;i.kMaxLength=s,o.TYPED_ARRAY_SUPPORT=r(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function r(){try{const y=new Uint8Array(1),l={foo:function(){return 42}};return Object.setPrototypeOf(l,Uint8Array.prototype),Object.setPrototypeOf(y,l),y.foo()===42}catch{return!1}}Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}});function a(y){if(y>s)throw new RangeError('The value "'+y+'" is invalid for option "size"');const l=new Uint8Array(y);return Object.setPrototypeOf(l,o.prototype),l}function o(y,l,u){if(typeof y=="number"){if(typeof l=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return m(y)}return c(y,l,u)}o.poolSize=8192;function c(y,l,u){if(typeof y=="string")return f(y,l);if(ArrayBuffer.isView(y))return v(y);if(y==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y);if(Re(y,ArrayBuffer)||y&&Re(y.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Re(y,SharedArrayBuffer)||y&&Re(y.buffer,SharedArrayBuffer)))return E(y,l,u);if(typeof y=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const b=y.valueOf&&y.valueOf();if(b!=null&&b!==y)return o.from(b,l,u);const N=_(y);if(N)return N;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof y[Symbol.toPrimitive]=="function")return o.from(y[Symbol.toPrimitive]("string"),l,u);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y)}o.from=function(y,l,u){return c(y,l,u)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array);function h(y){if(typeof y!="number")throw new TypeError('"size" argument must be of type number');if(y<0)throw new RangeError('The value "'+y+'" is invalid for option "size"')}function d(y,l,u){return h(y),y<=0?a(y):l!==void 0?typeof u=="string"?a(y).fill(l,u):a(y).fill(l):a(y)}o.alloc=function(y,l,u){return d(y,l,u)};function m(y){return h(y),a(y<0?0:g(y)|0)}o.allocUnsafe=function(y){return m(y)},o.allocUnsafeSlow=function(y){return m(y)};function f(y,l){if((typeof l!="string"||l==="")&&(l="utf8"),!o.isEncoding(l))throw new TypeError("Unknown encoding: "+l);const u=w(y,l)|0;let b=a(u);const N=b.write(y,l);return N!==u&&(b=b.slice(0,N)),b}function p(y){const l=y.length<0?0:g(y.length)|0,u=a(l);for(let b=0;b<l;b+=1)u[b]=y[b]&255;return u}function v(y){if(Re(y,Uint8Array)){const l=new Uint8Array(y);return E(l.buffer,l.byteOffset,l.byteLength)}return p(y)}function E(y,l,u){if(l<0||y.byteLength<l)throw new RangeError('"offset" is outside of buffer bounds');if(y.byteLength<l+(u||0))throw new RangeError('"length" is outside of buffer bounds');let b;return l===void 0&&u===void 0?b=new Uint8Array(y):u===void 0?b=new Uint8Array(y,l):b=new Uint8Array(y,l,u),Object.setPrototypeOf(b,o.prototype),b}function _(y){if(o.isBuffer(y)){const l=g(y.length)|0,u=a(l);return u.length===0||y.copy(u,0,0,l),u}if(y.length!==void 0)return typeof y.length!="number"||C(y.length)?a(0):p(y);if(y.type==="Buffer"&&Array.isArray(y.data))return p(y.data)}function g(y){if(y>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return y|0}function S(y){return+y!=y&&(y=0),o.alloc(+y)}o.isBuffer=function(l){return l!=null&&l._isBuffer===!0&&l!==o.prototype},o.compare=function(l,u){if(Re(l,Uint8Array)&&(l=o.from(l,l.offset,l.byteLength)),Re(u,Uint8Array)&&(u=o.from(u,u.offset,u.byteLength)),!o.isBuffer(l)||!o.isBuffer(u))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(l===u)return 0;let b=l.length,N=u.length;for(let H=0,k=Math.min(b,N);H<k;++H)if(l[H]!==u[H]){b=l[H],N=u[H];break}return b<N?-1:N<b?1:0},o.isEncoding=function(l){switch(String(l).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(l,u){if(!Array.isArray(l))throw new TypeError('"list" argument must be an Array of Buffers');if(l.length===0)return o.alloc(0);let b;if(u===void 0)for(u=0,b=0;b<l.length;++b)u+=l[b].length;const N=o.allocUnsafe(u);let H=0;for(b=0;b<l.length;++b){let k=l[b];if(Re(k,Uint8Array))H+k.length>N.length?(o.isBuffer(k)||(k=o.from(k)),k.copy(N,H)):Uint8Array.prototype.set.call(N,k,H);else if(o.isBuffer(k))k.copy(N,H);else throw new TypeError('"list" argument must be an Array of Buffers');H+=k.length}return N};function w(y,l){if(o.isBuffer(y))return y.length;if(ArrayBuffer.isView(y)||Re(y,ArrayBuffer))return y.byteLength;if(typeof y!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof y);const u=y.length,b=arguments.length>2&&arguments[2]===!0;if(!b&&u===0)return 0;let N=!1;for(;;)switch(l){case"ascii":case"latin1":case"binary":return u;case"utf8":case"utf-8":return xt(y).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u*2;case"hex":return u>>>1;case"base64":return at(y).length;default:if(N)return b?-1:xt(y).length;l=(""+l).toLowerCase(),N=!0}}o.byteLength=w;function A(y,l,u){let b=!1;if((l===void 0||l<0)&&(l=0),l>this.length||((u===void 0||u>this.length)&&(u=this.length),u<=0)||(u>>>=0,l>>>=0,u<=l))return"";for(y||(y="utf8");;)switch(y){case"hex":return se(this,l,u);case"utf8":case"utf-8":return ne(this,l,u);case"ascii":return $(this,l,u);case"latin1":case"binary":return ee(this,l,u);case"base64":return J(this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,l,u);default:if(b)throw new TypeError("Unknown encoding: "+y);y=(y+"").toLowerCase(),b=!0}}o.prototype._isBuffer=!0;function L(y,l,u){const b=y[l];y[l]=y[u],y[u]=b}o.prototype.swap16=function(){const l=this.length;if(l%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let u=0;u<l;u+=2)L(this,u,u+1);return this},o.prototype.swap32=function(){const l=this.length;if(l%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let u=0;u<l;u+=4)L(this,u,u+3),L(this,u+1,u+2);return this},o.prototype.swap64=function(){const l=this.length;if(l%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let u=0;u<l;u+=8)L(this,u,u+7),L(this,u+1,u+6),L(this,u+2,u+5),L(this,u+3,u+4);return this},o.prototype.toString=function(){const l=this.length;return l===0?"":arguments.length===0?ne(this,0,l):A.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(l){if(!o.isBuffer(l))throw new TypeError("Argument must be a Buffer");return this===l?!0:o.compare(this,l)===0},o.prototype.inspect=function(){let l="";const u=i.INSPECT_MAX_BYTES;return l=this.toString("hex",0,u).replace(/(.{2})/g,"$1 ").trim(),this.length>u&&(l+=" ... "),"<Buffer "+l+">"},n&&(o.prototype[n]=o.prototype.inspect),o.prototype.compare=function(l,u,b,N,H){if(Re(l,Uint8Array)&&(l=o.from(l,l.offset,l.byteLength)),!o.isBuffer(l))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof l);if(u===void 0&&(u=0),b===void 0&&(b=l?l.length:0),N===void 0&&(N=0),H===void 0&&(H=this.length),u<0||b>l.length||N<0||H>this.length)throw new RangeError("out of range index");if(N>=H&&u>=b)return 0;if(N>=H)return-1;if(u>=b)return 1;if(u>>>=0,b>>>=0,N>>>=0,H>>>=0,this===l)return 0;let k=H-N,oe=b-u;const Me=Math.min(k,oe),_e=this.slice(N,H),ue=l.slice(u,b);for(let Pe=0;Pe<Me;++Pe)if(_e[Pe]!==ue[Pe]){k=_e[Pe],oe=ue[Pe];break}return k<oe?-1:oe<k?1:0};function I(y,l,u,b,N){if(y.length===0)return-1;if(typeof u=="string"?(b=u,u=0):u>2147483647?u=2147483647:u<-2147483648&&(u=-2147483648),u=+u,C(u)&&(u=N?0:y.length-1),u<0&&(u=y.length+u),u>=y.length){if(N)return-1;u=y.length-1}else if(u<0)if(N)u=0;else return-1;if(typeof l=="string"&&(l=o.from(l,b)),o.isBuffer(l))return l.length===0?-1:U(y,l,u,b,N);if(typeof l=="number")return l=l&255,typeof Uint8Array.prototype.indexOf=="function"?N?Uint8Array.prototype.indexOf.call(y,l,u):Uint8Array.prototype.lastIndexOf.call(y,l,u):U(y,[l],u,b,N);throw new TypeError("val must be string, number or Buffer")}function U(y,l,u,b,N){let H=1,k=y.length,oe=l.length;if(b!==void 0&&(b=String(b).toLowerCase(),b==="ucs2"||b==="ucs-2"||b==="utf16le"||b==="utf-16le")){if(y.length<2||l.length<2)return-1;H=2,k/=2,oe/=2,u/=2}function Me(ue,Pe){return H===1?ue[Pe]:ue.readUInt16BE(Pe*H)}let _e;if(N){let ue=-1;for(_e=u;_e<k;_e++)if(Me(y,_e)===Me(l,ue===-1?0:_e-ue)){if(ue===-1&&(ue=_e),_e-ue+1===oe)return ue*H}else ue!==-1&&(_e-=_e-ue),ue=-1}else for(u+oe>k&&(u=k-oe),_e=u;_e>=0;_e--){let ue=!0;for(let Pe=0;Pe<oe;Pe++)if(Me(y,_e+Pe)!==Me(l,Pe)){ue=!1;break}if(ue)return _e}return-1}o.prototype.includes=function(l,u,b){return this.indexOf(l,u,b)!==-1},o.prototype.indexOf=function(l,u,b){return I(this,l,u,b,!0)},o.prototype.lastIndexOf=function(l,u,b){return I(this,l,u,b,!1)};function x(y,l,u,b){u=Number(u)||0;const N=y.length-u;b?(b=Number(b),b>N&&(b=N)):b=N;const H=l.length;b>H/2&&(b=H/2);let k;for(k=0;k<b;++k){const oe=parseInt(l.substr(k*2,2),16);if(C(oe))return k;y[u+k]=oe}return k}function R(y,l,u,b){return dt(xt(l,y.length-u),y,u,b)}function Q(y,l,u,b){return dt(B(l),y,u,b)}function F(y,l,u,b){return dt(at(l),y,u,b)}function Y(y,l,u,b){return dt(Et(l,y.length-u),y,u,b)}o.prototype.write=function(l,u,b,N){if(u===void 0)N="utf8",b=this.length,u=0;else if(b===void 0&&typeof u=="string")N=u,b=this.length,u=0;else if(isFinite(u))u=u>>>0,isFinite(b)?(b=b>>>0,N===void 0&&(N="utf8")):(N=b,b=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const H=this.length-u;if((b===void 0||b>H)&&(b=H),l.length>0&&(b<0||u<0)||u>this.length)throw new RangeError("Attempt to write outside buffer bounds");N||(N="utf8");let k=!1;for(;;)switch(N){case"hex":return x(this,l,u,b);case"utf8":case"utf-8":return R(this,l,u,b);case"ascii":case"latin1":case"binary":return Q(this,l,u,b);case"base64":return F(this,l,u,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,l,u,b);default:if(k)throw new TypeError("Unknown encoding: "+N);N=(""+N).toLowerCase(),k=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function J(y,l,u){return l===0&&u===y.length?e.fromByteArray(y):e.fromByteArray(y.slice(l,u))}function ne(y,l,u){u=Math.min(y.length,u);const b=[];let N=l;for(;N<u;){const H=y[N];let k=null,oe=H>239?4:H>223?3:H>191?2:1;if(N+oe<=u){let Me,_e,ue,Pe;switch(oe){case 1:H<128&&(k=H);break;case 2:Me=y[N+1],(Me&192)===128&&(Pe=(H&31)<<6|Me&63,Pe>127&&(k=Pe));break;case 3:Me=y[N+1],_e=y[N+2],(Me&192)===128&&(_e&192)===128&&(Pe=(H&15)<<12|(Me&63)<<6|_e&63,Pe>2047&&(Pe<55296||Pe>57343)&&(k=Pe));break;case 4:Me=y[N+1],_e=y[N+2],ue=y[N+3],(Me&192)===128&&(_e&192)===128&&(ue&192)===128&&(Pe=(H&15)<<18|(Me&63)<<12|(_e&63)<<6|ue&63,Pe>65535&&Pe<1114112&&(k=Pe))}}k===null?(k=65533,oe=1):k>65535&&(k-=65536,b.push(k>>>10&1023|55296),k=56320|k&1023),b.push(k),N+=oe}return Z(b)}const K=4096;function Z(y){const l=y.length;if(l<=K)return String.fromCharCode.apply(String,y);let u="",b=0;for(;b<l;)u+=String.fromCharCode.apply(String,y.slice(b,b+=K));return u}function $(y,l,u){let b="";u=Math.min(y.length,u);for(let N=l;N<u;++N)b+=String.fromCharCode(y[N]&127);return b}function ee(y,l,u){let b="";u=Math.min(y.length,u);for(let N=l;N<u;++N)b+=String.fromCharCode(y[N]);return b}function se(y,l,u){const b=y.length;(!l||l<0)&&(l=0),(!u||u<0||u>b)&&(u=b);let N="";for(let H=l;H<u;++H)N+=M[y[H]];return N}function pe(y,l,u){const b=y.slice(l,u);let N="";for(let H=0;H<b.length-1;H+=2)N+=String.fromCharCode(b[H]+b[H+1]*256);return N}o.prototype.slice=function(l,u){const b=this.length;l=~~l,u=u===void 0?b:~~u,l<0?(l+=b,l<0&&(l=0)):l>b&&(l=b),u<0?(u+=b,u<0&&(u=0)):u>b&&(u=b),u<l&&(u=l);const N=this.subarray(l,u);return Object.setPrototypeOf(N,o.prototype),N};function he(y,l,u){if(y%1!==0||y<0)throw new RangeError("offset is not uint");if(y+l>u)throw new RangeError("Trying to access beyond buffer length")}o.prototype.readUintLE=o.prototype.readUIntLE=function(l,u,b){l=l>>>0,u=u>>>0,b||he(l,u,this.length);let N=this[l],H=1,k=0;for(;++k<u&&(H*=256);)N+=this[l+k]*H;return N},o.prototype.readUintBE=o.prototype.readUIntBE=function(l,u,b){l=l>>>0,u=u>>>0,b||he(l,u,this.length);let N=this[l+--u],H=1;for(;u>0&&(H*=256);)N+=this[l+--u]*H;return N},o.prototype.readUint8=o.prototype.readUInt8=function(l,u){return l=l>>>0,u||he(l,1,this.length),this[l]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(l,u){return l=l>>>0,u||he(l,2,this.length),this[l]|this[l+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(l,u){return l=l>>>0,u||he(l,2,this.length),this[l]<<8|this[l+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(l,u){return l=l>>>0,u||he(l,4,this.length),(this[l]|this[l+1]<<8|this[l+2]<<16)+this[l+3]*16777216},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(l,u){return l=l>>>0,u||he(l,4,this.length),this[l]*16777216+(this[l+1]<<16|this[l+2]<<8|this[l+3])},o.prototype.readBigUInt64LE=V(function(l){l=l>>>0,Je(l,"offset");const u=this[l],b=this[l+7];(u===void 0||b===void 0)&&rt(l,this.length-8);const N=u+this[++l]*2**8+this[++l]*2**16+this[++l]*2**24,H=this[++l]+this[++l]*2**8+this[++l]*2**16+b*2**24;return BigInt(N)+(BigInt(H)<<BigInt(32))}),o.prototype.readBigUInt64BE=V(function(l){l=l>>>0,Je(l,"offset");const u=this[l],b=this[l+7];(u===void 0||b===void 0)&&rt(l,this.length-8);const N=u*2**24+this[++l]*2**16+this[++l]*2**8+this[++l],H=this[++l]*2**24+this[++l]*2**16+this[++l]*2**8+b;return(BigInt(N)<<BigInt(32))+BigInt(H)}),o.prototype.readIntLE=function(l,u,b){l=l>>>0,u=u>>>0,b||he(l,u,this.length);let N=this[l],H=1,k=0;for(;++k<u&&(H*=256);)N+=this[l+k]*H;return H*=128,N>=H&&(N-=Math.pow(2,8*u)),N},o.prototype.readIntBE=function(l,u,b){l=l>>>0,u=u>>>0,b||he(l,u,this.length);let N=u,H=1,k=this[l+--N];for(;N>0&&(H*=256);)k+=this[l+--N]*H;return H*=128,k>=H&&(k-=Math.pow(2,8*u)),k},o.prototype.readInt8=function(l,u){return l=l>>>0,u||he(l,1,this.length),this[l]&128?(255-this[l]+1)*-1:this[l]},o.prototype.readInt16LE=function(l,u){l=l>>>0,u||he(l,2,this.length);const b=this[l]|this[l+1]<<8;return b&32768?b|4294901760:b},o.prototype.readInt16BE=function(l,u){l=l>>>0,u||he(l,2,this.length);const b=this[l+1]|this[l]<<8;return b&32768?b|4294901760:b},o.prototype.readInt32LE=function(l,u){return l=l>>>0,u||he(l,4,this.length),this[l]|this[l+1]<<8|this[l+2]<<16|this[l+3]<<24},o.prototype.readInt32BE=function(l,u){return l=l>>>0,u||he(l,4,this.length),this[l]<<24|this[l+1]<<16|this[l+2]<<8|this[l+3]},o.prototype.readBigInt64LE=V(function(l){l=l>>>0,Je(l,"offset");const u=this[l],b=this[l+7];(u===void 0||b===void 0)&&rt(l,this.length-8);const N=this[l+4]+this[l+5]*2**8+this[l+6]*2**16+(b<<24);return(BigInt(N)<<BigInt(32))+BigInt(u+this[++l]*2**8+this[++l]*2**16+this[++l]*2**24)}),o.prototype.readBigInt64BE=V(function(l){l=l>>>0,Je(l,"offset");const u=this[l],b=this[l+7];(u===void 0||b===void 0)&&rt(l,this.length-8);const N=(u<<24)+this[++l]*2**16+this[++l]*2**8+this[++l];return(BigInt(N)<<BigInt(32))+BigInt(this[++l]*2**24+this[++l]*2**16+this[++l]*2**8+b)}),o.prototype.readFloatLE=function(l,u){return l=l>>>0,u||he(l,4,this.length),t.read(this,l,!0,23,4)},o.prototype.readFloatBE=function(l,u){return l=l>>>0,u||he(l,4,this.length),t.read(this,l,!1,23,4)},o.prototype.readDoubleLE=function(l,u){return l=l>>>0,u||he(l,8,this.length),t.read(this,l,!0,52,8)},o.prototype.readDoubleBE=function(l,u){return l=l>>>0,u||he(l,8,this.length),t.read(this,l,!1,52,8)};function me(y,l,u,b,N,H){if(!o.isBuffer(y))throw new TypeError('"buffer" argument must be a Buffer instance');if(l>N||l<H)throw new RangeError('"value" argument is out of bounds');if(u+b>y.length)throw new RangeError("Index out of range")}o.prototype.writeUintLE=o.prototype.writeUIntLE=function(l,u,b,N){if(l=+l,u=u>>>0,b=b>>>0,!N){const oe=Math.pow(2,8*b)-1;me(this,l,u,b,oe,0)}let H=1,k=0;for(this[u]=l&255;++k<b&&(H*=256);)this[u+k]=l/H&255;return u+b},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(l,u,b,N){if(l=+l,u=u>>>0,b=b>>>0,!N){const oe=Math.pow(2,8*b)-1;me(this,l,u,b,oe,0)}let H=b-1,k=1;for(this[u+H]=l&255;--H>=0&&(k*=256);)this[u+H]=l/k&255;return u+b},o.prototype.writeUint8=o.prototype.writeUInt8=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,1,255,0),this[u]=l&255,u+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,2,65535,0),this[u]=l&255,this[u+1]=l>>>8,u+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,2,65535,0),this[u]=l>>>8,this[u+1]=l&255,u+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,4,4294967295,0),this[u+3]=l>>>24,this[u+2]=l>>>16,this[u+1]=l>>>8,this[u]=l&255,u+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,4,4294967295,0),this[u]=l>>>24,this[u+1]=l>>>16,this[u+2]=l>>>8,this[u+3]=l&255,u+4};function We(y,l,u,b,N){At(l,b,N,y,u,7);let H=Number(l&BigInt(4294967295));y[u++]=H,H=H>>8,y[u++]=H,H=H>>8,y[u++]=H,H=H>>8,y[u++]=H;let k=Number(l>>BigInt(32)&BigInt(4294967295));return y[u++]=k,k=k>>8,y[u++]=k,k=k>>8,y[u++]=k,k=k>>8,y[u++]=k,u}function ut(y,l,u,b,N){At(l,b,N,y,u,7);let H=Number(l&BigInt(4294967295));y[u+7]=H,H=H>>8,y[u+6]=H,H=H>>8,y[u+5]=H,H=H>>8,y[u+4]=H;let k=Number(l>>BigInt(32)&BigInt(4294967295));return y[u+3]=k,k=k>>8,y[u+2]=k,k=k>>8,y[u+1]=k,k=k>>8,y[u]=k,u+8}o.prototype.writeBigUInt64LE=V(function(l,u=0){return We(this,l,u,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeBigUInt64BE=V(function(l,u=0){return ut(this,l,u,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeIntLE=function(l,u,b,N){if(l=+l,u=u>>>0,!N){const Me=Math.pow(2,8*b-1);me(this,l,u,b,Me-1,-Me)}let H=0,k=1,oe=0;for(this[u]=l&255;++H<b&&(k*=256);)l<0&&oe===0&&this[u+H-1]!==0&&(oe=1),this[u+H]=(l/k>>0)-oe&255;return u+b},o.prototype.writeIntBE=function(l,u,b,N){if(l=+l,u=u>>>0,!N){const Me=Math.pow(2,8*b-1);me(this,l,u,b,Me-1,-Me)}let H=b-1,k=1,oe=0;for(this[u+H]=l&255;--H>=0&&(k*=256);)l<0&&oe===0&&this[u+H+1]!==0&&(oe=1),this[u+H]=(l/k>>0)-oe&255;return u+b},o.prototype.writeInt8=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,1,127,-128),l<0&&(l=255+l+1),this[u]=l&255,u+1},o.prototype.writeInt16LE=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,2,32767,-32768),this[u]=l&255,this[u+1]=l>>>8,u+2},o.prototype.writeInt16BE=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,2,32767,-32768),this[u]=l>>>8,this[u+1]=l&255,u+2},o.prototype.writeInt32LE=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,4,2147483647,-2147483648),this[u]=l&255,this[u+1]=l>>>8,this[u+2]=l>>>16,this[u+3]=l>>>24,u+4},o.prototype.writeInt32BE=function(l,u,b){return l=+l,u=u>>>0,b||me(this,l,u,4,2147483647,-2147483648),l<0&&(l=4294967295+l+1),this[u]=l>>>24,this[u+1]=l>>>16,this[u+2]=l>>>8,this[u+3]=l&255,u+4},o.prototype.writeBigInt64LE=V(function(l,u=0){return We(this,l,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),o.prototype.writeBigInt64BE=V(function(l,u=0){return ut(this,l,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ct(y,l,u,b,N,H){if(u+b>y.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("Index out of range")}function ae(y,l,u,b,N){return l=+l,u=u>>>0,N||ct(y,l,u,4),t.write(y,l,u,b,23,4),u+4}o.prototype.writeFloatLE=function(l,u,b){return ae(this,l,u,!0,b)},o.prototype.writeFloatBE=function(l,u,b){return ae(this,l,u,!1,b)};function ge(y,l,u,b,N){return l=+l,u=u>>>0,N||ct(y,l,u,8),t.write(y,l,u,b,52,8),u+8}o.prototype.writeDoubleLE=function(l,u,b){return ge(this,l,u,!0,b)},o.prototype.writeDoubleBE=function(l,u,b){return ge(this,l,u,!1,b)},o.prototype.copy=function(l,u,b,N){if(!o.isBuffer(l))throw new TypeError("argument should be a Buffer");if(b||(b=0),!N&&N!==0&&(N=this.length),u>=l.length&&(u=l.length),u||(u=0),N>0&&N<b&&(N=b),N===b||l.length===0||this.length===0)return 0;if(u<0)throw new RangeError("targetStart out of bounds");if(b<0||b>=this.length)throw new RangeError("Index out of range");if(N<0)throw new RangeError("sourceEnd out of bounds");N>this.length&&(N=this.length),l.length-u<N-b&&(N=l.length-u+b);const H=N-b;return this===l&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(u,b,N):Uint8Array.prototype.set.call(l,this.subarray(b,N),u),H},o.prototype.fill=function(l,u,b,N){if(typeof l=="string"){if(typeof u=="string"?(N=u,u=0,b=this.length):typeof b=="string"&&(N=b,b=this.length),N!==void 0&&typeof N!="string")throw new TypeError("encoding must be a string");if(typeof N=="string"&&!o.isEncoding(N))throw new TypeError("Unknown encoding: "+N);if(l.length===1){const k=l.charCodeAt(0);(N==="utf8"&&k<128||N==="latin1")&&(l=k)}}else typeof l=="number"?l=l&255:typeof l=="boolean"&&(l=Number(l));if(u<0||this.length<u||this.length<b)throw new RangeError("Out of range index");if(b<=u)return this;u=u>>>0,b=b===void 0?this.length:b>>>0,l||(l=0);let H;if(typeof l=="number")for(H=u;H<b;++H)this[H]=l;else{const k=o.isBuffer(l)?l:o.from(l,N),oe=k.length;if(oe===0)throw new TypeError('The value "'+l+'" is invalid for argument "value"');for(H=0;H<b-u;++H)this[H+u]=k[H%oe]}return this};const fe={};function Xe(y,l,u){fe[y]=class extends u{constructor(){super(),Object.defineProperty(this,"message",{value:l.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${y}]`,this.stack,delete this.name}get code(){return y}set code(N){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:N,writable:!0})}toString(){return`${this.name} [${y}]: ${this.message}`}}}Xe("ERR_BUFFER_OUT_OF_BOUNDS",function(y){return y?`${y} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Xe("ERR_INVALID_ARG_TYPE",function(y,l){return`The "${y}" argument must be of type number. Received type ${typeof l}`},TypeError),Xe("ERR_OUT_OF_RANGE",function(y,l,u){let b=`The value of "${y}" is out of range.`,N=u;return Number.isInteger(u)&&Math.abs(u)>2**32?N=Ve(String(u)):typeof u=="bigint"&&(N=String(u),(u>BigInt(2)**BigInt(32)||u<-(BigInt(2)**BigInt(32)))&&(N=Ve(N)),N+="n"),b+=` It must be ${l}. Received ${N}`,b},RangeError);function Ve(y){let l="",u=y.length;const b=y[0]==="-"?1:0;for(;u>=b+4;u-=3)l=`_${y.slice(u-3,u)}${l}`;return`${y.slice(0,u)}${l}`}function $e(y,l,u){Je(l,"offset"),(y[l]===void 0||y[l+u]===void 0)&&rt(l,y.length-(u+1))}function At(y,l,u,b,N,H){if(y>u||y<l){const k=typeof l=="bigint"?"n":"";let oe;throw l===0||l===BigInt(0)?oe=`>= 0${k} and < 2${k} ** ${(H+1)*8}${k}`:oe=`>= -(2${k} ** ${(H+1)*8-1}${k}) and < 2 ** ${(H+1)*8-1}${k}`,new fe.ERR_OUT_OF_RANGE("value",oe,y)}$e(b,N,H)}function Je(y,l){if(typeof y!="number")throw new fe.ERR_INVALID_ARG_TYPE(l,"number",y)}function rt(y,l,u){throw Math.floor(y)!==y?(Je(y,u),new fe.ERR_OUT_OF_RANGE("offset","an integer",y)):l<0?new fe.ERR_BUFFER_OUT_OF_BOUNDS:new fe.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${l}`,y)}const ft=/[^+/0-9A-Za-z-_]/g;function Ze(y){if(y=y.split("=")[0],y=y.trim().replace(ft,""),y.length<2)return"";for(;y.length%4!==0;)y=y+"=";return y}function xt(y,l){l=l||1/0;let u;const b=y.length;let N=null;const H=[];for(let k=0;k<b;++k){if(u=y.charCodeAt(k),u>55295&&u<57344){if(!N){if(u>56319){(l-=3)>-1&&H.push(239,191,189);continue}else if(k+1===b){(l-=3)>-1&&H.push(239,191,189);continue}N=u;continue}if(u<56320){(l-=3)>-1&&H.push(239,191,189),N=u;continue}u=(N-55296<<10|u-56320)+65536}else N&&(l-=3)>-1&&H.push(239,191,189);if(N=null,u<128){if((l-=1)<0)break;H.push(u)}else if(u<2048){if((l-=2)<0)break;H.push(u>>6|192,u&63|128)}else if(u<65536){if((l-=3)<0)break;H.push(u>>12|224,u>>6&63|128,u&63|128)}else if(u<1114112){if((l-=4)<0)break;H.push(u>>18|240,u>>12&63|128,u>>6&63|128,u&63|128)}else throw new Error("Invalid code point")}return H}function B(y){const l=[];for(let u=0;u<y.length;++u)l.push(y.charCodeAt(u)&255);return l}function Et(y,l){let u,b,N;const H=[];for(let k=0;k<y.length&&!((l-=2)<0);++k)u=y.charCodeAt(k),b=u>>8,N=u%256,H.push(N),H.push(b);return H}function at(y){return e.toByteArray(Ze(y))}function dt(y,l,u,b){let N;for(N=0;N<b&&!(N+u>=l.length||N>=y.length);++N)l[N+u]=y[N];return N}function Re(y,l){return y instanceof l||y!=null&&y.constructor!=null&&y.constructor.name!=null&&y.constructor.name===l.name}function C(y){return y!==y}const M=(function(){const y="0123456789abcdef",l=new Array(256);for(let u=0;u<16;++u){const b=u*16;for(let N=0;N<16;++N)l[b+N]=y[u]+y[N]}return l})();function V(y){return typeof BigInt>"u"?le:y}function le(){throw new Error("BigInt not supported")}})(Ta)),Ta}var OE=FE();const BE={};function kE(i,e){return null}const zE=ye(BE,[["render",kE]]);typeof window<"u"&&(window.Buffer=OE.Buffer);const GE={Layout:IE,enhanceApp({app:i,router:e,siteData:t}){i.component("Test",zE),i.component("Image",bh),i.component("SvgIcon",Pn);const n=Object.assign({"./components/Three/RigidBodyLinkPoint.vue":tv,"./components/Three/SwitchCoordinateSystems.vue":rv,"./components/Three/TestThree.vue":lv});for(const a in n){const c=n[a].default,h=a.split("/").pop()?.replace(/\.vue$/,"");h&&c&&i.component(h,c)}const s=Object.assign({"./components/Pages/Blog/Content/ImageGroup/IGBase.vue":hv,"./components/Pages/Blog/Content/ImageGroup/IGStyleA.vue":Rv});for(const a in s){const c=s[a].default,h=a.split("/").pop()?.replace(/\.vue$/,"");h&&c&&i.component(h,c)}const r=Object.assign({"./components/Pages/Blog/Content/Renderer/ExampleCollapse.vue":Fv,"./components/Pages/Blog/Content/Renderer/FootnoteCite.vue":zv,"./components/Pages/Blog/Content/Renderer/ReferenceCollapse.vue":Gv,"./components/Pages/Blog/Content/Renderer/SectionGroup.vue":qv,"./components/Pages/Blog/Content/Renderer/SmartLink.vue":Kv,"./components/Pages/Blog/Content/Renderer/Tips.vue":i0,"./components/Pages/Blog/Content/Renderer/Whisper.vue":l0});for(const a in r){const c=r[a].default,h=a.split("/").pop()?.replace(/\.vue$/,"");h&&c&&i.component(h,c)}}};export{GE as R,TM as c,et as u};
