(()=>{var fo="170";var pl=0,Uo=1,ml=2;var zc=1,gl=2,ln=3,In=0,be=1,Ee=2,Cn=0,pi=1,Bo=2,No=3,Fo=4,xl=5,kn=100,_l=101,vl=102,yl=103,Ml=104,Sl=200,Al=201,wl=202,El=203,Wr=204,Xr=205,bl=206,Tl=207,Cl=208,Rl=209,Il=210,Pl=211,Dl=212,Ll=213,Ul=214,Qr=0,Yr=1,Jr=2,_i=3,qr=4,Kr=5,Zr=6,jr=7,kc=0,Bl=1,Nl=2,Rn=0,Fl=1,Ol=2,zl=3,rr=4,kl=5,Gl=6,Hl=7;var Gc=300,vi=301,yi=302,$r=303,ta=304,ar=306,Mi=1e3,Vn=1001,ea=1002,Pe=1003,Vl=1004;var as=1005;var Ke=1006,hr=1007;var Wn=1008;var fn=1009,Hc=1010,Vc=1011,Xi=1012,po=1013,Xn=1014,Ze=1015,es=1016,mo=1017,go=1018,Si=1020,Wc=35902,Xc=1021,Qc=1022,Xe=1023,Yc=1024,Jc=1025,mi=1026,Ai=1027,xo=1028,_o=1029,qc=1030,vo=1031;var yo=1033,Is=33776,Ps=33777,Ds=33778,Ls=33779,na=35840,ia=35841,sa=35842,ra=35843,aa=36196,oa=37492,ca=37496,la=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,xa=37816,_a=37817,va=37818,ya=37819,Ma=37820,Sa=37821,Us=36492,Aa=36494,wa=36495,Kc=36283,Ea=36284,ba=36285,Ta=36286;var Bs=2300,Ca=2301,ur=2302,Oo=2400,zo=2401,ko=2402;var Wl=3200,Xl=3201;var Zc=0,Ql=1,Tn="",pe="srgb",Ti="srgb-linear",or="linear",Kt="srgb";var jn=7680;var Go=519,Yl=512,Jl=513,ql=514,jc=515,Kl=516,Zl=517,jl=518,$l=519,Ho=35044;var Vo="300 es",un=2e3,Ns=2001,Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},_e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dr=Math.PI/180,Ra=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function th(i,t){return(i%t+t)%t}function fr(i,t,e){return(1-e)*i+e*t}function Li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],w=s[1],A=s[4],v=s[7],B=s[2],b=s[5],T=s[8];return r[0]=a*_+o*w+c*B,r[3]=a*m+o*A+c*b,r[6]=a*d+o*v+c*T,r[1]=l*_+h*w+u*B,r[4]=l*m+h*A+u*b,r[7]=l*d+h*v+u*T,r[2]=f*_+p*w+g*B,r[5]=f*m+p*A+g*b,r[8]=f*d+p*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(pr.makeScale(t,e)),this}rotate(t){return this.premultiply(pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pr=new Ft;function $c(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eh(){let i=Fs("canvas");return i.style.display="block",i}var Wo={};function ki(i){i in Wo||(Wo[i]=!0,console.warn(i))}function nh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ih(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(i.r=dn(i.r),i.g=dn(i.g),i.b=dn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tn?or:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xo=[.64,.33,.3,.6,.15,.06],Qo=[.2126,.7152,.0722],Yo=[.3127,.329],Jo=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qo=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Ti]:{primaries:Xo,whitePoint:Yo,transfer:or,toXYZ:Jo,fromXYZ:qo,luminanceCoefficients:Qo,workingColorSpaceConfig:{unpackColorSpace:pe},outputColorSpaceConfig:{drawingBufferColorSpace:pe}},[pe]:{primaries:Xo,whitePoint:Yo,transfer:Kt,toXYZ:Jo,fromXYZ:qo,luminanceCoefficients:Qo,outputColorSpaceConfig:{drawingBufferColorSpace:pe}}});var $n,Ia=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=Fs("canvas")),$n.width=t.width,$n.height=t.height;let n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=dn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rh=0,Os=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mr(s[a].image)):r.push(mr(s[a]))}else r=mr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ah=0,Te=class i extends Pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=Ke,a=Wn,o=Xe,c=fn,l=i.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=ns(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Gc;Te.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,v=(p+1)/2,B=(d+1)/2,b=(h+f)/4,T=(u+_)/4,R=(g+m)/4;return A>v&&A>B?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=T/n):v>B?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=R/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=T/r,s=R/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(f-h)/w,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pa=class extends Pn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Os(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zs=class extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-o,d=c*f+l*p+h*g+u*_,w=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){let B=Math.sqrt(A),b=Math.atan2(B,d*w);m=Math.sin(m*b)/B,o=Math.sin(o*b)/B}let v=o*w;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){let B=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=B,l*=B,h*=B,u*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-o*p,t[e+2]=l*g+h*p+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ko.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gr.copy(this).projectOnVector(t),this.sub(gr)}reflect(t){return this.sub(gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gr=new I,Ko=new Fe,mn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),cs.subVectors(this.max,Ui),ti.subVectors(t.a,Ui),ei.subVectors(t.b,Ui),ni.subVectors(t.c,Ui),Mn.subVectors(ei,ti),Sn.subVectors(ni,ei),Ln.subVectors(ti,ni);let e=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Ln.z,Ln.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Ln.z,0,-Ln.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Ln.y,Ln.x,0];return!xr(e,ti,ei,ni,cs)||(e=[1,0,0,0,1,0,0,0,1],!xr(e,ti,ei,ni,cs))?!1:(ls.crossVectors(Mn,Sn),e=[ls.x,ls.y,ls.z],xr(e,ti,ei,ni,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},sn=[new I,new I,new I,new I,new I,new I,new I,new I],He=new I,os=new mn,ti=new I,ei=new I,ni=new I,Mn=new I,Sn=new I,Ln=new I,Ui=new I,cs=new I,ls=new I,Un=new I;function xr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Un.fromArray(i,r);let o=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),c=t.dot(Un),l=e.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var oh=new mn,Bi=new I,_r=new I,Qn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):oh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);let e=Bi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(_r)),this.expandByPoint(Bi.copy(t.center).sub(_r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},rn=new I,vr=new I,hs=new I,An=new I,yr=new I,us=new I,Mr=new I,La=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vr.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),An.copy(this.origin).sub(vr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(hs),o=An.dot(this.direction),c=-An.dot(hs),l=An.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vr).addScaledVector(hs,f),p}intersectSphere(t,e){rn.subVectors(t.center,this.origin);let n=rn.dot(this.direction),s=rn.dot(rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,n,s,r){yr.subVectors(e,t),us.subVectors(n,t),Mr.crossVectors(yr,us);let a=this.direction.dot(Mr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,t);let c=o*this.direction.dot(us.crossVectors(An,us));if(c<0)return null;let l=o*this.direction.dot(yr.cross(An));if(l<0||c+l>a)return null;let h=-o*An.dot(Mr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,p,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,f,p,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ch,t,lh)}lookAt(t,e,n){let s=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),wn.crossVectors(n,Re),wn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),wn.crossVectors(n,Re)),wn.normalize(),ds.crossVectors(Re,wn),s[0]=wn.x,s[4]=ds.x,s[8]=Re.x,s[1]=wn.y,s[5]=ds.y,s[9]=Re.y,s[2]=wn.z,s[6]=ds.z,s[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],w=n[3],A=n[7],v=n[11],B=n[15],b=s[0],T=s[4],R=s[8],S=s[12],M=s[1],C=s[5],H=s[9],F=s[13],V=s[2],Q=s[6],W=s[10],j=s[14],z=s[3],rt=s[7],at=s[11],pt=s[15];return r[0]=a*b+o*M+c*V+l*z,r[4]=a*T+o*C+c*Q+l*rt,r[8]=a*R+o*H+c*W+l*at,r[12]=a*S+o*F+c*j+l*pt,r[1]=h*b+u*M+f*V+p*z,r[5]=h*T+u*C+f*Q+p*rt,r[9]=h*R+u*H+f*W+p*at,r[13]=h*S+u*F+f*j+p*pt,r[2]=g*b+_*M+m*V+d*z,r[6]=g*T+_*C+m*Q+d*rt,r[10]=g*R+_*H+m*W+d*at,r[14]=g*S+_*F+m*j+d*pt,r[3]=w*b+A*M+v*V+B*z,r[7]=w*T+A*C+v*Q+B*rt,r[11]=w*R+A*H+v*W+B*at,r[15]=w*S+A*F+v*j+B*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+_*(+e*c*p-e*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],w=u*m*l-_*f*l+_*c*p-o*m*p-u*c*d+o*f*d,A=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,v=h*_*l-g*u*l+g*o*p-a*_*p-h*o*d+a*u*d,B=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,b=e*w+n*A+s*v+r*B;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return t[0]=w*T,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*T,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*d+n*c*d)*T,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*T,t[4]=A*T,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*T,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*d-e*c*d)*T,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*p+e*c*p)*T,t[8]=v*T,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*T,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*d+e*o*d)*T,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*T,t[12]=B*T,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*T,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*T,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,w=c*l,A=c*h,v=c*u,B=n.x,b=n.y,T=n.z;return s[0]=(1-(_+d))*B,s[1]=(p+v)*B,s[2]=(g-A)*B,s[3]=0,s[4]=(p-v)*b,s[5]=(1-(f+d))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(g+A)*T,s[9]=(m-w)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ii.set(s[0],s[1],s[2]).length(),a=ii.set(s[4],s[5],s[6]).length(),o=ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ve.copy(this);let l=1/r,h=1/a,u=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=u,Ve.elements[9]*=u,Ve.elements[10]*=u,e.setFromRotationMatrix(Ve),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=un){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(o===un)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ns)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*l,p=(n+s)*h,g,_;if(o===un)g=(a+r)*u,_=-2*u;else if(o===Ns)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ii=new I,Ve=new ie,ch=new I(0,0,0),lh=new I(1,1,1),wn=new I,ds=new I,Re=new I,Zo=new ie,jo=new Fe,je=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jo.setFromEuler(this),this.setFromQuaternion(jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};je.DEFAULT_ORDER="XYZ";var ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hh=0,$o=new I,si=new Fe,an=new ie,fs=new I,Ni=new I,uh=new I,dh=new Fe,tc=new I(1,0,0),ec=new I(0,1,0),nc=new I(0,0,1),ic={type:"added"},fh={type:"removed"},ri={type:"childadded",child:null},Sr={type:"childremoved",child:null},he=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new je,n=new Fe,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ft}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return $o.copy(t).applyQuaternion(this.quaternion),this.position.add($o.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fs.copy(t):fs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ni,fs,this.up):an.lookAt(fs,Ni,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),si.setFromRotationMatrix(an),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fh),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,dh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};he.DEFAULT_UP=new I(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var We=new I,on=new I,Ar=new I,cn=new I,ai=new I,oi=new I,sc=new I,wr=new I,Er=new I,br=new I,Tr=new ae,Cr=new ae,Rr=new ae,Gn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),We.subVectors(t,e),s.cross(We);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){We.subVectors(s,e),on.subVectors(n,e),Ar.subVectors(t,e);let a=We.dot(We),o=We.dot(on),c=We.dot(Ar),l=on.dot(on),h=on.dot(Ar),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cn.x),c.addScaledVector(a,cn.y),c.addScaledVector(o,cn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Tr.setScalar(0),Cr.setScalar(0),Rr.setScalar(0),Tr.fromBufferAttribute(t,e),Cr.fromBufferAttribute(t,n),Rr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Tr,r.x),a.addScaledVector(Cr,r.y),a.addScaledVector(Rr,r.z),a}static isFrontFacing(t,e,n,s){return We.subVectors(n,e),on.subVectors(t,e),We.cross(on).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),on.subVectors(this.a,this.b),We.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ai.subVectors(s,n),oi.subVectors(r,n),wr.subVectors(t,n);let c=ai.dot(wr),l=oi.dot(wr);if(c<=0&&l<=0)return e.copy(n);Er.subVectors(t,s);let h=ai.dot(Er),u=oi.dot(Er);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ai,a);br.subVectors(t,r);let p=ai.dot(br),g=oi.dot(br);if(g>=0&&p<=g)return e.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(oi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return sc.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(sc,o);let d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Ir(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=th(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ir(a,r,t+1/3),this.g=Ir(a,r,t),this.b=Ir(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=tl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return Wt.fromWorkingColorSpace(ve.copy(this),t),Math.round(me(ve.r*255,0,255))*65536+Math.round(me(ve.g*255,0,255))*256+Math.round(me(ve.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(ve.copy(this),e);let n=ve.r,s=ve.g,r=ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=pe){Wt.fromWorkingColorSpace(ve.copy(this),t);let e=ve.r,n=ve.g,s=ve.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(ps);let n=fr(En.h,ps.h,e),s=fr(En.s,ps.s,e),r=fr(En.l,ps.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ve=new Gt;Gt.NAMES=tl;var ph=0,Yn=class extends Pn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ns(),this.name="",this.blending=pi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Le=class extends Yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ce=new I,ms=new vt,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ho,this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Li(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Li(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Li(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ho&&(t.usage=this.usage),t}};var Gs=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hs=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},mh=0,Ne=new ie,Pr=new he,ci=new I,Ie=new mn,Fi=new mn,fe=new I,Ue=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($c(t)?Hs:Gs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return Pr.lookAt(t),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(Ie.min,Fi.min),Ie.expandByPoint(fe),fe.addVectors(Ie.max,Fi.max),Ie.expandByPoint(fe)):(Ie.expandByPoint(Fi.min),Ie.expandByPoint(Fi.max))}Ie.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)fe.fromBufferAttribute(o,l),c&&(ci.fromBufferAttribute(t,l),fe.add(ci)),s=Math.max(s,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new I,c[R]=new I;let l=new I,h=new I,u=new I,f=new vt,p=new vt,g=new vt,_=new I,m=new I;function d(R,S,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[R].add(_),o[S].add(_),o[M].add(_),c[R].add(m),c[S].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,S=w.length;R<S;++R){let M=w[R],C=M.start,H=M.count;for(let F=C,V=C+H;F<V;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let A=new I,v=new I,B=new I,b=new I;function T(R){B.fromBufferAttribute(s,R),b.copy(B);let S=o[R];A.copy(S),A.sub(B.multiplyScalar(B.dot(S))).normalize(),v.crossVectors(b,S);let C=v.dot(c[R])<0?-1:1;a.setXYZW(R,A.x,A.y,A.z,C)}for(let R=0,S=w.length;R<S;++R){let M=w[R],C=M.start,H=M.count;for(let F=C,V=C+H;F<V;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new De(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rc=new ie,Bn=new La,gs=new Qn,ac=new I,xs=new I,_s=new I,vs=new I,Dr=new I,ys=new I,oc=new I,Ms=new I,Ct=class extends he{constructor(t=new Ue,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ys.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Dr.fromBufferAttribute(u,t),a?ys.addScaledVector(Dr,h):ys.addScaledVector(Dr.sub(e),h))}e.add(ys)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(gs.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(gs,ac)===null||Bn.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,B=A;v<B;v+=3){let b=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);s=Ss(this,d,t,n,l,h,u,b,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let w=o.getX(m),A=o.getX(m+1),v=o.getX(m+2);s=Ss(this,a,t,n,l,h,u,w,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,B=A;v<B;v+=3){let b=v,T=v+1,R=v+2;s=Ss(this,d,t,n,l,h,u,b,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let w=m,A=m+1,v=m+2;s=Ss(this,a,t,n,l,h,u,w,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function gh(i,t,e,n,s,r,a,o){let c;if(t.side===be?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===In,o),c===null)return null;Ms.copy(o),Ms.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ms);return l<e.near||l>e.far?null:{distance:l,point:Ms.clone(),object:i}}function Ss(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,xs),i.getVertexPosition(c,_s),i.getVertexPosition(l,vs);let h=gh(i,t,e,n,xs,_s,vs,oc);if(h){let u=new I;Gn.getBarycoord(oc,xs,_s,vs,u),s&&(h.uv=Gn.getInterpolatedAttribute(s,o,c,l,u,new vt)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,o,c,l,u,new vt)),a&&(h.normal=Gn.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new I,materialIndex:0};Gn.getNormal(xs,_s,vs,f.normal),h.face=f,h.barycoord=u}return h}var gn=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(_,m,d,w,A,v,B,b,T,R,S){let M=v/T,C=B/R,H=v/2,F=B/2,V=b/2,Q=T+1,W=R+1,j=0,z=0,rt=new I;for(let at=0;at<W;at++){let pt=at*C-F;for(let $=0;$<Q;$++){let tt=$*M-H;rt[_]=tt*w,rt[m]=pt*A,rt[d]=V,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[d]=b>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push($/T),u.push(1-at/R),j+=1}}for(let at=0;at<R;at++)for(let pt=0;pt<T;pt++){let $=f+pt+Q*at,tt=f+pt+Q*(at+1),G=f+(pt+1)+Q*(at+1),J=f+(pt+1)+Q*at;c.push($,tt,J),c.push(tt,G,J),z+=6}o.addGroup(p,z,S),p+=z,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(i){let t={};for(let e=0;e<i.length;e++){let n=wi(i[e]);for(let s in n)t[s]=n[s]}return t}function xh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function el(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var _h={clone:wi,merge:Se},vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Vs=class extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bn=new I,cc=new vt,lc=new vt,ye=class extends Vs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,cc,lc),e.subVectors(lc,cc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},li=-90,hi=1,Ua=class extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ye(li,hi,t,e);s.layers=this.layers,this.add(s);let r=new ye(li,hi,t,e);r.layers=this.layers,this.add(r);let a=new ye(li,hi,t,e);a.layers=this.layers,this.add(a);let o=new ye(li,hi,t,e);o.layers=this.layers,this.add(o);let c=new ye(li,hi,t,e);c.layers=this.layers,this.add(c);let l=new ye(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ws=class extends Te{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ba=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ws(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:Cn});r.uniforms.tEquirect.value=e;let a=new Ct(s,r),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=Ke),new Ua(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Lr=new I,Mh=new I,Sh=new Ft,hn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Lr.subVectors(n,e).cross(Mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Lr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sh.getNormalMatrix(t),s=this.coplanarPoint(Lr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nn=new Qn,As=new I,Qi=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],w=s[13],A=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-p,v-d).normalize(),n[1].setComponents(c+r,f+l,m+p,v+d).normalize(),n[2].setComponents(c+a,f+h,m+g,v+w).normalize(),n[3].setComponents(c-a,f-h,m-g,v-w).normalize(),n[4].setComponents(c-o,f-u,m-_,v-A).normalize(),e===un)n[5].setComponents(c+o,f+u,m+_,v+A).normalize();else if(e===Ns)n[5].setComponents(o,u,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(As.x=s.normal.x>0?t.max.x:t.min.x,As.y=s.normal.y>0?t.max.y:t.min.y,As.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ah(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Xs=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let w=d*f-a;for(let A=0;A<l;A++){let v=A*u-r;g.push(v,-w,0),_.push(0,0,1),m.push(A/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<o;w++){let A=w+l*d,v=w+l*(d+1),B=w+1+l*(d+1),b=w+1+l*d;p.push(A,v,b),p.push(v,B,b)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
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
#endif`,bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ih=`#ifdef USE_AOMAP
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
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
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
#endif`,Oh=`#ifdef USE_BUMPMAP
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yh=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Jh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qh=`vec3 transformedNormal = objectNormal;
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
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nu=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uu=`#ifdef USE_GRADIENTMAP
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
}`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
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
#endif`,gu=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Su=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Au=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lu=`#if defined( USE_POINTS_UV )
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
#endif`,Uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zu=`#ifdef USE_MORPHTARGETS
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
#endif`,ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qu=`#ifdef USE_NORMALMAP
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
#endif`,Yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cd=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
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
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
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
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
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
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
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
}`,Id=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pd=`#define DISTANCE
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
}`,Dd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`uniform float scale;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Fd=`#include <common>
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
}`,Od=`uniform vec3 diffuse;
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
}`,zd=`#define LAMBERT
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
}`,kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Gd=`#define MATCAP
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
}`,Hd=`#define MATCAP
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
}`,Vd=`#define NORMAL
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
}`,Wd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xd=`#define PHONG
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
}`,Qd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Yd=`#define STANDARD
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
}`,Jd=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,qd=`#define TOON
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
}`,Kd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Zd=`uniform float size;
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
}`,jd=`uniform vec3 diffuse;
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
}`,$d=`#include <common>
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
}`,tf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ef=`uniform float rotation;
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
}`,nf=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:wh,alphahash_pars_fragment:Eh,alphamap_fragment:bh,alphamap_pars_fragment:Th,alphatest_fragment:Ch,alphatest_pars_fragment:Rh,aomap_fragment:Ih,aomap_pars_fragment:Ph,batching_pars_vertex:Dh,batching_vertex:Lh,begin_vertex:Uh,beginnormal_vertex:Bh,bsdfs:Nh,iridescence_fragment:Fh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Gh,clipping_planes_vertex:Hh,color_fragment:Vh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:Qh,common:Yh,cube_uv_reflection_fragment:Jh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Kh,displacementmap_vertex:Zh,emissivemap_fragment:jh,emissivemap_pars_fragment:$h,colorspace_fragment:tu,colorspace_pars_fragment:eu,envmap_fragment:nu,envmap_common_pars_fragment:iu,envmap_pars_fragment:su,envmap_pars_vertex:ru,envmap_physical_pars_fragment:gu,envmap_vertex:au,fog_vertex:ou,fog_pars_vertex:cu,fog_fragment:lu,fog_pars_fragment:hu,gradientmap_pars_fragment:uu,lightmap_pars_fragment:du,lights_lambert_fragment:fu,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:xu,lights_toon_pars_fragment:_u,lights_phong_fragment:vu,lights_phong_pars_fragment:yu,lights_physical_fragment:Mu,lights_physical_pars_fragment:Su,lights_fragment_begin:Au,lights_fragment_maps:wu,lights_fragment_end:Eu,logdepthbuf_fragment:bu,logdepthbuf_pars_fragment:Tu,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:Ru,map_fragment:Iu,map_pars_fragment:Pu,map_particle_fragment:Du,map_particle_pars_fragment:Lu,metalnessmap_fragment:Uu,metalnessmap_pars_fragment:Bu,morphinstance_vertex:Nu,morphcolor_vertex:Fu,morphnormal_vertex:Ou,morphtarget_pars_vertex:zu,morphtarget_vertex:ku,normal_fragment_begin:Gu,normal_fragment_maps:Hu,normal_pars_fragment:Vu,normal_pars_vertex:Wu,normal_vertex:Xu,normalmap_pars_fragment:Qu,clearcoat_normal_fragment_begin:Yu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:qu,iridescence_pars_fragment:Ku,opaque_fragment:Zu,packing:ju,premultiplied_alpha_fragment:$u,project_vertex:td,dithering_fragment:ed,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:ad,shadowmap_vertex:od,shadowmask_pars_fragment:cd,skinbase_vertex:ld,skinning_pars_vertex:hd,skinning_vertex:ud,skinnormal_vertex:dd,specularmap_fragment:fd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:xd,transmission_pars_fragment:_d,uv_pars_fragment:vd,uv_pars_vertex:yd,uv_vertex:Md,worldpos_vertex:Sd,background_vert:Ad,background_frag:wd,backgroundCube_vert:Ed,backgroundCube_frag:bd,cube_vert:Td,cube_frag:Cd,depth_vert:Rd,depth_frag:Id,distanceRGBA_vert:Pd,distanceRGBA_frag:Dd,equirect_vert:Ld,equirect_frag:Ud,linedashed_vert:Bd,linedashed_frag:Nd,meshbasic_vert:Fd,meshbasic_frag:Od,meshlambert_vert:zd,meshlambert_frag:kd,meshmatcap_vert:Gd,meshmatcap_frag:Hd,meshnormal_vert:Vd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:Qd,meshphysical_vert:Yd,meshphysical_frag:Jd,meshtoon_vert:qd,meshtoon_frag:Kd,points_vert:Zd,points_frag:jd,shadow_vert:$d,shadow_frag:tf,sprite_vert:ef,sprite_frag:nf},ot={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},qe={basic:{uniforms:Se([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Se([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Gt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Se([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Se([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Se([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Gt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Se([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Se([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Se([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Se([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Se([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Se([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Se([ot.common,ot.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Se([ot.lights,ot.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};qe.physical={uniforms:Se([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var ws={r:0,b:0,g:0},Fn=new je,sf=new ie;function rf(i,t,e,n,s,r,a){let o=new Gt(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?e:t).get(A)),A}function _(w){let A=!1,v=g(w);v===null?d(o,c):v&&v.isColor&&(d(v,1),A=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,A){let v=g(A);v&&(v.isCubeTexture||v.mapping===ar)?(h===void 0&&(h=new Ct(new gn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:wi(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fn.copy(A.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sf.makeRotationFromEuler(Fn)),h.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Kt,(u!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ct(new Xs(2,2),new $e({name:"BackgroundMaterial",uniforms:wi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,A){w.getRGB(ws,el(i)),n.buffers.color.setClear(ws.r,ws.g,ws.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(w,A=1){o.set(w),c=A,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(o,c)},render:_,addToRenderList:m}}function af(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,C,H,F,V){let Q=!1,W=u(F,H,C);r!==W&&(r=W,l(r.object)),Q=p(M,F,H,V),Q&&g(M,F,H,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(M,C,H,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,H){let F=H.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let Q=V[C.id];Q===void 0&&(Q={},V[C.id]=Q);let W=Q[F];return W===void 0&&(W=f(c()),Q[F]=W),W}function f(M){let C=[],H=[],F=[];for(let V=0;V<e;V++)C[V]=0,H[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,C,H,F){let V=r.attributes,Q=C.attributes,W=0,j=H.getAttributes();for(let z in j)if(j[z].location>=0){let at=V[z],pt=Q[z];if(pt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),at===void 0||at.attribute!==pt||pt&&at.data!==pt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(M,C,H,F){let V={},Q=C.attributes,W=0,j=H.getAttributes();for(let z in j)if(j[z].location>=0){let at=Q[z];at===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));let pt={};pt.attribute=at,at&&at.data&&(pt.data=at.data),V[z]=pt,W++}r.attributes=V,r.attributesNum=W,r.index=F}function _(){let M=r.newAttributes;for(let C=0,H=M.length;C<H;C++)M[C]=0}function m(M){d(M,0)}function d(M,C){let H=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;H[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),V[M]!==C&&(i.vertexAttribDivisor(M,C),V[M]=C)}function w(){let M=r.newAttributes,C=r.enabledAttributes;for(let H=0,F=C.length;H<F;H++)C[H]!==M[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function A(M,C,H,F,V,Q,W){W===!0?i.vertexAttribIPointer(M,C,H,V,Q):i.vertexAttribPointer(M,C,H,F,V,Q)}function v(M,C,H,F){_();let V=F.attributes,Q=H.getAttributes(),W=C.defaultAttributeValues;for(let j in Q){let z=Q[j];if(z.location>=0){let rt=V[j];if(rt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let at=rt.normalized,pt=rt.itemSize,$=t.get(rt);if($===void 0)continue;let tt=$.buffer,G=$.type,J=$.bytesPerElement,lt=G===i.INT||G===i.UNSIGNED_INT||rt.gpuType===po;if(rt.isInterleavedBufferAttribute){let st=rt.data,Tt=st.stride,it=rt.offset;if(st.isInstancedInterleavedBuffer){for(let mt=0;mt<z.locationSize;mt++)d(z.location+mt,st.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let mt=0;mt<z.locationSize;mt++)m(z.location+mt);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let mt=0;mt<z.locationSize;mt++)A(z.location+mt,pt/z.locationSize,G,at,Tt*J,(it+pt/z.locationSize*mt)*J,lt)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<z.locationSize;st++)d(z.location+st,rt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<z.locationSize;st++)m(z.location+st);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let st=0;st<z.locationSize;st++)A(z.location+st,pt/z.locationSize,G,at,pt*J,pt/z.locationSize*st*J,lt)}}else if(W!==void 0){let at=W[j];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(z.location,at);break;case 3:i.vertexAttrib3fv(z.location,at);break;case 4:i.vertexAttrib4fv(z.location,at);break;default:i.vertexAttrib1fv(z.location,at)}}}}w()}function B(){R();for(let M in n){let C=n[M];for(let H in C){let F=C[H];for(let V in F)h(F[V].object),delete F[V];delete C[H]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let H in C){let F=C[H];for(let V in F)h(F[V].object),delete F[V];delete C[H]}delete n[M.id]}function T(M){for(let C in n){let H=n[C];if(H[M.id]===void 0)continue;let F=H[M.id];for(let V in F)h(F[V].object),delete F[V];delete H[M.id]}}function R(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function of(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function cf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Xe&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let R=T===es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ze&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:v,vertexTextures:B,maxSamples:b}}function lf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let w=r?0:n,A=w*4,v=d.clippingState||null;c.value=v,v=h(g,f,A,p);for(let B=0;B!==A;++B)v[B]=e[B];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=p+_*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,v=p;A!==_;++A,v+=4)a.copy(u[A]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function hf(i){let t=new WeakMap;function e(a,o){return o===$r?a.mapping=vi:o===ta&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===$r||o===ta)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ba(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Qs=class extends Vs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fi=4,hc=[.125,.215,.35,.446,.526,.582],Hn=20,Ur=new Qs,uc=new Gt,Br=null,Nr=0,Fr=0,Or=!1,zn=(1+Math.sqrt(5))/2,ui=1/zn,dc=[new I(-zn,ui,0),new I(zn,ui,0),new I(-ui,0,zn),new I(ui,0,zn),new I(0,zn,-ui),new I(0,zn,ui),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ys=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Br=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Br,Nr,Fr),this._renderer.xr.enabled=Or,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Br=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:es,format:Xe,colorSpace:Ti,depthBuffer:!1},s=fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uf(r)),this._blurMaterial=df(r,t,e)}return s}_compileMaterial(t){let e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,Ur)}_sceneToCubeUV(t,e,n,s){let o=new ye(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(uc),h.toneMapping=Rn,h.autoClear=!1;let p=new Le({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new Ct(new gn,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(uc),_=!0);for(let d=0;d<6;d++){let w=d%3;w===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):w===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let A=this._cubeSize;Es(s,w*A,d>2?A:0,A,A),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===vi||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Es(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ur)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dc[(s-r-1)%dc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ct(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Hn;m>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);let d=[],w=0;for(let T=0;T<Hn;++T){let R=T/_,S=Math.exp(-R*R/2);d.push(S),T===0?w+=S:T<m&&(w+=2*S)}for(let T=0;T<d.length;T++)d[T]=d[T]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-n;let v=this._sizeLods[s],B=3*v*(s>A-fi?s-A+fi:0),b=4*(this._cubeSize-v);Es(e,B,b,3*v,2*v),c.setRenderTarget(e),c.render(u,Ur)}};function uf(i){let t=[],e=[],n=[],s=i,r=i-fi+1+hc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-fi?c=hc[a-i+fi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,w=new Float32Array(_*g*p),A=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let b=0;b<p;b++){let T=b%3*2/3-1,R=b>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];w.set(S,_*g*b),A.set(f,m*g*b);let M=[b,b,b,b,b,b];v.set(M,d*g*b)}let B=new Ue;B.setAttribute("position",new De(w,_)),B.setAttribute("uv",new De(A,m)),B.setAttribute("faceIndex",new De(v,d)),t.push(B),s>fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fc(i,t,e){let n=new pn(i,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function df(i,t,e){let n=new Float32Array(Hn),s=new I(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function pc(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function mc(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function ff(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===$r||c===ta,h=c===vi||c===yi;if(l||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ys(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ys(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function pf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mf(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let w=p.array;_=p.version;for(let A=0,v=w.length;A<v;A+=3){let B=w[A+0],b=w[A+1],T=w[A+2];f.push(B,b,b,T,T,B)}}else if(g!==void 0){let w=g.array;_=g.version;for(let A=0,v=w.length/3-1;A<v;A+=3){let B=A+0,b=A+1,T=A+2;f.push(B,b,b,T,T,B)}}else return;let m=new($c(f)?Hs:Gs)(f,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function gf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let w=0;w<g;w++)d+=p[w]*_[w];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _f(i,t,e){let n=new WeakMap,s=new ae;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let S=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],A=0;p===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let v=o.attributes.position.count*A,B=1;v>t.maxTextureSize&&(B=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*B*4*u),T=new zs(b,v,B,u);T.type=Ze,T.needsUpdate=!0;let R=A*4;for(let M=0;M<u;M++){let C=m[M],H=d[M],F=w[M],V=v*B*4*M;for(let Q=0;Q<C.count;Q++){let W=Q*R;p===!0&&(s.fromBufferAttribute(C,Q),b[V+W+0]=s.x,b[V+W+1]=s.y,b[V+W+2]=s.z,b[V+W+3]=0),g===!0&&(s.fromBufferAttribute(H,Q),b[V+W+4]=s.x,b[V+W+5]=s.y,b[V+W+6]=s.z,b[V+W+7]=0),_===!0&&(s.fromBufferAttribute(F,Q),b[V+W+8]=s.x,b[V+W+9]=s.y,b[V+W+10]=s.z,b[V+W+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new vt(v,B)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vf(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Js=class extends Te{constructor(t,e,n,s,r,a,o,c,l,h=mi){if(h!==mi&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mi&&(n=Xn),n===void 0&&h===Ai&&(n=Si),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=c!==void 0?c:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},il=new Te,gc=new Js(1,1),sl=new zs,rl=new Da,al=new Ws,xc=[],_c=[],vc=new Float32Array(16),yc=new Float32Array(9),Mc=new Float32Array(4);function Ci(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xc[s];if(r===void 0&&(r=new Float32Array(s),xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cr(i,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function Sf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function Af(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function wf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),de(e,n)}}function Ef(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),de(e,n)}}function bf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),de(e,n)}}function Tf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function Rf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function If(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function Pf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Df(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function Lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function Uf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function Bf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=jc,r=gc):r=il,e.setTexture2D(t||r,s)}function Nf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rl,s)}function Ff(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||al,s)}function Of(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sl,s)}function zf(i){switch(i){case 5126:return yf;case 35664:return Mf;case 35665:return Sf;case 35666:return Af;case 35674:return wf;case 35675:return Ef;case 35676:return bf;case 5124:case 35670:return Tf;case 35667:case 35671:return Cf;case 35668:case 35672:return Rf;case 35669:case 35673:return If;case 5125:return Pf;case 36294:return Df;case 36295:return Lf;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}function kf(i,t){i.uniform1fv(this.addr,t)}function Gf(i,t){let e=Ci(t,this.size,2);i.uniform2fv(this.addr,e)}function Hf(i,t){let e=Ci(t,this.size,3);i.uniform3fv(this.addr,e)}function Vf(i,t){let e=Ci(t,this.size,4);i.uniform4fv(this.addr,e)}function Wf(i,t){let e=Ci(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xf(i,t){let e=Ci(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qf(i,t){let e=Ci(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yf(i,t){i.uniform1iv(this.addr,t)}function Jf(i,t){i.uniform2iv(this.addr,t)}function qf(i,t){i.uniform3iv(this.addr,t)}function Kf(i,t){i.uniform4iv(this.addr,t)}function Zf(i,t){i.uniform1uiv(this.addr,t)}function jf(i,t){i.uniform2uiv(this.addr,t)}function $f(i,t){i.uniform3uiv(this.addr,t)}function tp(i,t){i.uniform4uiv(this.addr,t)}function ep(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||il,r[a])}function np(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rl,r[a])}function ip(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||al,r[a])}function sp(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sl,r[a])}function rp(i){switch(i){case 5126:return kf;case 35664:return Gf;case 35665:return Hf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return Qf;case 5124:case 35670:return Yf;case 35667:case 35671:return Jf;case 35668:case 35672:return qf;case 35669:case 35673:return Kf;case 5125:return Zf;case 36294:return jf;case 36295:return $f;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return sp}}var Na=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zf(e.type)}},Fa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rp(e.type)}},Oa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},zr=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function ap(i,t,e){let n=i.name,s=n.length;for(zr.lastIndex=0;;){let r=zr.exec(n),a=zr.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Sc(e,l===void 0?new Na(o,i,t):new Fa(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Oa(o),Sc(e,u)),e=u}}}var xi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ap(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ac(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var op=37297,cp=0;function lp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var wc=new Ft;function hp(i){Wt._getMatrix(wc,Wt.workingColorSpace,i);let t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ec(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lp(i.getShaderSource(t),a)}else return s}function up(i,t){let e=hp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dp(i,t){let e;switch(t){case Fl:e="Linear";break;case Ol:e="Reinhard";break;case zl:e="Cineon";break;case rr:e="ACESFilmic";break;case Gl:e="AgX";break;case Hl:e="Neutral";break;case kl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bs=new I;function fp(){Wt.getLuminanceCoefficients(bs);let i=bs.x.toFixed(4),t=bs.y.toFixed(4),e=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function mp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gi(i){return i!==""}function bc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(xp,vp)}var _p=new Map;function vp(i,t){let e=kt[t];if(e===void 0){let n=_p.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return za(e)}var yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(i){return i.replace(yp,Mp)}function Mp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Ap(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vi:case yi:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ep(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kc:t="ENVMAP_BLENDING_MULTIPLY";break;case Bl:t="ENVMAP_BLENDING_MIX";break;case Nl:t="ENVMAP_BLENDING_ADD";break}return t}function bp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Tp(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Sp(e),l=Ap(e),h=wp(e),u=Ep(e),f=bp(e),p=pp(e),g=mp(r),_=s.createProgram(),m,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),d.length>0&&(d+=`
`)):(m=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),d=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?dp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,up("linearToOutputTexel",e.outputColorSpace),fp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),a=za(a),a=bc(a,e),a=Tc(a,e),o=za(o),o=bc(o,e),o=Tc(o,e),a=Cc(a),o=Cc(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=w+m+a,v=w+d+o,B=Ac(s,s.VERTEX_SHADER,A),b=Ac(s,s.FRAGMENT_SHADER,v);s.attachShader(_,B),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(B).trim(),V=s.getShaderInfoLog(b).trim(),Q=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,b);else{let j=Ec(s,B,"vertex"),z=Ec(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+j+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||V==="")&&(W=!1);W&&(C.diagnostics={runnable:Q,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:d}})}s.deleteShader(B),s.deleteShader(b),R=new xi(s,_),S=gp(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,op)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=b,this}var Cp=0,ka=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ga(t),e.set(t,n)),n}},Ga=class{constructor(t){this.id=Cp++,this.code=t,this.usedTimes=0}};function Rp(i,t,e,n,s,r,a){let o=new ks,c=new ka,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,H,F){let V=H.fog,Q=F.geometry,W=S.isMeshStandardMaterial?H.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),z=j&&j.mapping===ar?j.image.height:null,rt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let at=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,pt=at!==void 0?at.length:0,$=0;Q.morphAttributes.position!==void 0&&($=1),Q.morphAttributes.normal!==void 0&&($=2),Q.morphAttributes.color!==void 0&&($=3);let tt,G,J,lt;if(rt){let qt=qe[rt];tt=qt.vertexShader,G=qt.fragmentShader}else tt=S.vertexShader,G=S.fragmentShader,c.update(S),J=c.getVertexShaderID(S),lt=c.getFragmentShaderID(S);let st=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),it=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,Ot=!!S.map,yt=!!S.matcap,Xt=!!j,P=!!S.aoMap,oe=!!S.lightMap,Pt=!!S.bumpMap,Dt=!!S.normalMap,wt=!!S.displacementMap,te=!!S.emissiveMap,Rt=!!S.metalnessMap,E=!!S.roughnessMap,x=S.anisotropy>0,N=S.clearcoat>0,q=S.dispersion>0,Z=S.iridescence>0,Y=S.sheen>0,Et=S.transmission>0,ht=x&&!!S.anisotropyMap,gt=N&&!!S.clearcoatMap,Vt=N&&!!S.clearcoatNormalMap,et=N&&!!S.clearcoatRoughnessMap,xt=Z&&!!S.iridescenceMap,It=Z&&!!S.iridescenceThicknessMap,Lt=Y&&!!S.sheenColorMap,_t=Y&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,zt=!!S.specularColorMap,jt=!!S.specularIntensityMap,D=Et&&!!S.transmissionMap,ct=Et&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,ft=S.alphaTest>0,ut=!!S.alphaHash,Bt=!!S.extensions,re=Rn;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(re=i.toneMapping);let xe={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:tt,fragmentShader:G,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:it,instancingColor:it&&F.instanceColor!==null,instancingMorph:it&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ti,alphaToCoverage:!!S.alphaToCoverage,map:Ot,matcap:yt,envMap:Xt,envMapMode:Xt&&j.mapping,envMapCubeUVHeight:z,aoMap:P,lightMap:oe,bumpMap:Pt,normalMap:Dt,displacementMap:f&&wt,emissiveMap:te,normalMapObjectSpace:Dt&&S.normalMapType===Ql,normalMapTangentSpace:Dt&&S.normalMapType===Zc,metalnessMap:Rt,roughnessMap:E,anisotropy:x,anisotropyMap:ht,clearcoat:N,clearcoatMap:gt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:et,dispersion:q,iridescence:Z,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:Y,sheenColorMap:Lt,sheenRoughnessMap:_t,specularMap:Ht,specularColorMap:zt,specularIntensityMap:jt,transmission:Et,transmissionMap:D,thicknessMap:ct,gradientMap:X,opaque:S.transparent===!1&&S.blending===pi&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ut,combine:S.combine,mapUv:Ot&&_(S.map.channel),aoMapUv:P&&_(S.aoMap.channel),lightMapUv:oe&&_(S.lightMap.channel),bumpMapUv:Pt&&_(S.bumpMap.channel),normalMapUv:Dt&&_(S.normalMap.channel),displacementMapUv:wt&&_(S.displacementMap.channel),emissiveMapUv:te&&_(S.emissiveMap.channel),metalnessMapUv:Rt&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:gt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:It&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(S.sheenRoughnessMap.channel),specularMapUv:Ht&&_(S.specularMap.channel),specularColorMapUv:zt&&_(S.specularColorMap.channel),specularIntensityMapUv:jt&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Dt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(Ot||K),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:Ot&&S.map.isVideoTexture===!0&&Wt.getTransfer(S.map.colorSpace)===Kt,decodeVideoTextureEmissive:te&&S.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(S.emissiveMap.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ee,flipSided:S.side===be,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Bt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&S.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function d(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(w(M,S),A(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function A(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){let M=g[S.type],C;if(M){let H=qe[M];C=_h.clone(H.uniforms)}else C=S.uniforms;return C}function B(S,M){let C;for(let H=0,F=h.length;H<F;H++){let V=h[H];if(V.cacheKey===M){C=V,++C.usedTimes;break}}return C===void 0&&(C=new Tp(i,M,S,r),h.push(C)),C}function b(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:B,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:R}}function Ip(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Pp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ic(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){let d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,_,m){let d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Pp),n.length>1&&n.sort(f||Ic),s.length>1&&s.sort(f||Ic)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Dp(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Pc,i.set(n,[a])):s>=r.length?(a=new Pc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Up(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Bp=0;function Np(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fp(i){let t=new Lp,e=Up(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new ie,a=new ie;function o(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,w=0,A=0,v=0,B=0,b=0,T=0;l.sort(Np);for(let S=0,M=l.length;S<M;S++){let C=l[S],H=C.color,F=C.intensity,V=C.distance,Q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*F,u+=H.g*F,f+=H.b*F;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],F);T++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,z=e.get(C);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=W,p++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(H).multiplyScalar(F),W.distance=V,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[_]=W;let j=C.shadow;if(C.map&&(n.spotLightMap[B]=C.map,B++,j.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=j.matrix,C.castShadow){let z=e.get(C);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Q,v++}_++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(H).multiplyScalar(F),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let j=C.shadow,z=e.get(C);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=C.shadow.matrix,A++}n.point[g]=W,g++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(F),W.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==w||R.numPointShadows!==A||R.numSpotShadows!==v||R.numSpotMaps!==B||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=v+B-b,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=w,R.numPointShadows=A,R.numSpotShadows=v,R.numSpotMaps=B,R.numLightProbes=T,n.version=Bp++)}function c(l,h){let u=0,f=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let d=0,w=l.length;d<w;d++){let A=l[d];if(A.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(A.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(A.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(A.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(A.width*.5,0,0),v.halfHeight.set(0,A.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(A.matrixWorld),v.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(A.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Dc(i){let t=new Fp(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Op(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Dc(i),t.set(s,[o])):r>=a.length?(o=new Dc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ha=class extends Yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Va=class extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gp(i,t,e){let n=new Qi,s=new vt,r=new vt,a=new ae,o=new Ha({depthPacking:Xl}),c=new Va,l={},h=e.maxTextureSize,u={[In]:be,[be]:In,[Ee]:Ee},f=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:zp,fragmentShader:kp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ct(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let d=this.type;this.render=function(b,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Cn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let F=d!==ln&&this.type===ln,V=d===ln&&this.type!==ln;for(let Q=0,W=b.length;Q<W;Q++){let j=b[Q],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let rt=z.getFrameExtents();if(s.multiply(rt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,z.mapSize.y=r.y)),z.map===null||F===!0||V===!0){let pt=this.type!==ln?{minFilter:Pe,magFilter:Pe}:{};z.map!==null&&z.map.dispose(),z.map=new pn(s.x,s.y,pt),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let at=z.getViewportCount();for(let pt=0;pt<at;pt++){let $=z.getViewport(pt);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),H.viewport(a),z.updateMatrices(j,pt),n=z.getFrustum(),v(T,R,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===ln&&w(z,R),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,C)};function w(b,T){let R=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new pn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,R,p,_,null)}function A(b,T,R,S){let M=null,C=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=M.uuid,F=T.uuid,V=l[H];V===void 0&&(V={},l[H]=V);let Q=V[F];Q===void 0&&(Q=M.clone(),V[F]=Q,T.addEventListener("dispose",B)),M=Q}if(M.visible=T.visible,M.wireframe=T.wireframe,S===ln?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=i.properties.get(M);H.light=R}return M}function v(b,T,R,S,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===ln)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let F=t.update(b),V=b.material;if(Array.isArray(V)){let Q=F.groups;for(let W=0,j=Q.length;W<j;W++){let z=Q[W],rt=V[z.materialIndex];if(rt&&rt.visible){let at=A(b,rt,S,M);b.onBeforeShadow(i,b,T,R,F,at,z),i.renderBufferDirect(R,null,F,at,b,z),b.onAfterShadow(i,b,T,R,F,at,z)}}}else if(V.visible){let Q=A(b,V,S,M);b.onBeforeShadow(i,b,T,R,F,Q,null),i.renderBufferDirect(R,null,F,Q,b,null),b.onAfterShadow(i,b,T,R,F,Q,null)}}let H=b.children;for(let F=0,V=H.length;F<V;F++)v(H[F],T,R,S,M)}function B(b){b.target.removeEventListener("dispose",B);for(let R in l){let S=l[R],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Hp={[Qr]:Yr,[Jr]:Zr,[qr]:jr,[_i]:Kr,[Yr]:Qr,[Zr]:Jr,[jr]:qr,[Kr]:_i};function Vp(i,t){function e(){let D=!1,ct=new ae,X=null,K=new ae(0,0,0,0);return{setMask:function(ft){X!==ft&&!D&&(i.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ut,Bt,re,xe){xe===!0&&(ft*=re,ut*=re,Bt*=re),ct.set(ft,ut,Bt,re),K.equals(ct)===!1&&(i.clearColor(ft,ut,Bt,re),K.copy(ct))},reset:function(){D=!1,X=null,K.set(-1,0,0,0)}}}function n(){let D=!1,ct=!1,X=null,K=null,ft=null;return{setReversed:function(ut){if(ct!==ut){let Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);let re=ft;ft=null,this.setClear(re)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?st(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ut){X!==ut&&!D&&(i.depthMask(ut),X=ut)},setFunc:function(ut){if(ct&&(ut=Hp[ut]),K!==ut){switch(ut){case Qr:i.depthFunc(i.NEVER);break;case Yr:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case qr:i.depthFunc(i.EQUAL);break;case Kr:i.depthFunc(i.GEQUAL);break;case Zr:i.depthFunc(i.GREATER);break;case jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){D=!1,X=null,K=null,ft=null,ct=!1}}}function s(){let D=!1,ct=null,X=null,K=null,ft=null,ut=null,Bt=null,re=null,xe=null;return{setTest:function(qt){D||(qt?st(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(qt){ct!==qt&&!D&&(i.stencilMask(qt),ct=qt)},setFunc:function(qt,ke,en){(X!==qt||K!==ke||ft!==en)&&(i.stencilFunc(qt,ke,en),X=qt,K=ke,ft=en)},setOp:function(qt,ke,en){(ut!==qt||Bt!==ke||re!==en)&&(i.stencilOp(qt,ke,en),ut=qt,Bt=ke,re=en)},setLocked:function(qt){D=qt},setClear:function(qt){xe!==qt&&(i.clearStencil(qt),xe=qt)},reset:function(){D=!1,ct=null,X=null,K=null,ft=null,ut=null,Bt=null,re=null,xe=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,w=null,A=null,v=null,B=null,b=null,T=new Gt(0,0,0),R=0,S=!1,M=null,C=null,H=null,F=null,V=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=j>=2);let rt=null,at={},pt=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),tt=new ae().fromArray(pt),G=new ae().fromArray($);function J(D,ct,X,K){let ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(D,ut),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<X;Bt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ct+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}let lt={};lt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(_i),Pt(!1),Dt(Uo),st(i.CULL_FACE),P(Cn);function st(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function it(D,ct){return u[D]!==ct?(i.bindFramebuffer(D,ct),u[D]=ct,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function mt(D,ct){let X=p,K=!1;if(D){X=f.get(ct),X===void 0&&(X=[],f.set(ct,X));let ft=D.textures;if(X.length!==ft.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Bt=ft.length;ut<Bt;ut++)X[ut]=i.COLOR_ATTACHMENT0+ut;X.length=ft.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function Ot(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let yt={[kn]:i.FUNC_ADD,[_l]:i.FUNC_SUBTRACT,[vl]:i.FUNC_REVERSE_SUBTRACT};yt[yl]=i.MIN,yt[Ml]=i.MAX;let Xt={[Sl]:i.ZERO,[Al]:i.ONE,[wl]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[Il]:i.SRC_ALPHA_SATURATE,[Cl]:i.DST_COLOR,[bl]:i.DST_ALPHA,[El]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[Rl]:i.ONE_MINUS_DST_COLOR,[Tl]:i.ONE_MINUS_DST_ALPHA,[Pl]:i.CONSTANT_COLOR,[Dl]:i.ONE_MINUS_CONSTANT_COLOR,[Ll]:i.CONSTANT_ALPHA,[Ul]:i.ONE_MINUS_CONSTANT_ALPHA};function P(D,ct,X,K,ft,ut,Bt,re,xe,qt){if(D===Cn){_===!0&&(Tt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),D!==xl){if(D!==m||qt!==S){if((d!==kn||v!==kn)&&(i.blendEquation(i.FUNC_ADD),d=kn,v=kn),qt)switch(D){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.ONE,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,A=null,B=null,b=null,T.set(0,0,0),R=0,m=D,S=qt}return}ft=ft||ct,ut=ut||X,Bt=Bt||K,(ct!==d||ft!==v)&&(i.blendEquationSeparate(yt[ct],yt[ft]),d=ct,v=ft),(X!==w||K!==A||ut!==B||Bt!==b)&&(i.blendFuncSeparate(Xt[X],Xt[K],Xt[ut],Xt[Bt]),w=X,A=K,B=ut,b=Bt),(re.equals(T)===!1||xe!==R)&&(i.blendColor(re.r,re.g,re.b,xe),T.copy(re),R=xe),m=D,S=!1}function oe(D,ct){D.side===Ee?Tt(i.CULL_FACE):st(i.CULL_FACE);let X=D.side===be;ct&&(X=!X),Pt(X),D.blending===pi&&D.transparent===!1?P(Cn):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Dt(D){D!==pl?(st(i.CULL_FACE),D!==C&&(D===Uo?i.cullFace(i.BACK):D===ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),C=D}function wt(D){D!==H&&(W&&i.lineWidth(D),H=D)}function te(D,ct,X){D?(st(i.POLYGON_OFFSET_FILL),(F!==ct||V!==X)&&(i.polygonOffset(ct,X),F=ct,V=X)):Tt(i.POLYGON_OFFSET_FILL)}function Rt(D){D?st(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+Q-1),rt!==D&&(i.activeTexture(D),rt=D)}function x(D,ct,X){X===void 0&&(rt===null?X=i.TEXTURE0+Q-1:X=rt);let K=at[X];K===void 0&&(K={type:void 0,texture:void 0},at[X]=K),(K.type!==D||K.texture!==ct)&&(rt!==X&&(i.activeTexture(X),rt=X),i.bindTexture(D,ct||lt[D]),K.type=D,K.texture=ct)}function N(){let D=at[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){tt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function _t(D){G.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function Ht(D,ct){let X=l.get(ct);X===void 0&&(X=new WeakMap,l.set(ct,X));let K=X.get(D);K===void 0&&(K=i.getUniformBlockIndex(ct,D.name),X.set(D,K))}function zt(D,ct){let K=l.get(ct).get(D);c.get(ct)!==K&&(i.uniformBlockBinding(ct,K,D.__bindingPointIndex),c.set(ct,K))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,at={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,w=null,A=null,v=null,B=null,b=null,T=new Gt(0,0,0),R=0,S=!1,M=null,C=null,H=null,F=null,V=null,tt.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Tt,bindFramebuffer:it,drawBuffers:mt,useProgram:Ot,setBlending:P,setMaterial:oe,setFlipSided:Pt,setCullFace:Dt,setLineWidth:wt,setPolygonOffset:te,setScissorTest:Rt,activeTexture:E,bindTexture:x,unbindTexture:N,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:xt,texImage3D:It,updateUBOMapping:Ht,uniformBlockBinding:zt,texStorage2D:Vt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Lt,viewport:_t,reset:jt}}function Lc(i,t,e,n){let s=Wp(n);switch(e){case Xc:return i*t;case Yc:return i*t;case Jc:return i*t*2;case xo:return i*t/s.components*s.byteLength;case _o:return i*t/s.components*s.byteLength;case qc:return i*t*2/s.components*s.byteLength;case vo:return i*t*2/s.components*s.byteLength;case Qc:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case yo:return i*t*4/s.components*s.byteLength;case Is:case Ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:case ra:return Math.max(i,16)*Math.max(t,8)/4;case na:case sa:return Math.max(i,8)*Math.max(t,8)/2;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Us:case Aa:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kc:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ba:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(i){switch(i){case fn:case Hc:return{byteLength:1,components:1};case Xi:case Vc:case es:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case Xn:case po:case Ze:return{byteLength:4,components:1};case Wc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xp(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):Fs("canvas")}function _(E,x,N){let q=1,Z=Rt(E);if((Z.width>N||Z.height>N)&&(q=N/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(q*Z.width),Et=Math.floor(q*Z.height);u===void 0&&(u=g(Y,Et));let ht=x?g(Y,Et):u;return ht.width=Y,ht.height=Et,ht.getContext("2d").drawImage(E,0,0,Y,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Et+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(E,x,N,q,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=x;if(x===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),x===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){let Et=Z?or:Wt.getTransfer(q);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=Et===Kt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(E,x){let N;return E?x===null||x===Xn||x===Si?N=i.DEPTH24_STENCIL8:x===Ze?N=i.DEPTH32F_STENCIL8:x===Xi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===Si?N=i.DEPTH_COMPONENT24:x===Ze?N=i.DEPTH_COMPONENT32F:x===Xi&&(N=i.DEPTH_COMPONENT16),N}function B(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Pe&&E.minFilter!==Ke?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function b(E){let x=E.target;x.removeEventListener("dispose",b),R(x),x.isVideoTexture&&h.delete(x)}function T(E){let x=E.target;x.removeEventListener("dispose",T),M(x)}function R(E){let x=n.get(E);if(x.__webglInit===void 0)return;let N=E.source,q=f.get(N);if(q){let Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(E),Object.keys(q).length===0&&f.delete(N)}n.remove(E)}function S(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let N=E.source,q=f.get(N);delete q[x.__cacheKey],a.memory.textures--}function M(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=E.textures;for(let q=0,Z=N.length;q<Z;q++){let Y=n.get(N[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(N[q])}n.remove(E)}let C=0;function H(){C=0}function F(){let E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function V(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function Q(E,x){let N=n.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){let q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(N,E,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function W(E,x){let N=n.get(E);if(E.version>0&&N.__version!==E.version){G(N,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function j(E,x){let N=n.get(E);if(E.version>0&&N.__version!==E.version){G(N,E,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function z(E,x){let N=n.get(E);if(E.version>0&&N.__version!==E.version){J(N,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let rt={[Mi]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},at={[Pe]:i.NEAREST,[Vl]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},pt={[Yl]:i.NEVER,[$l]:i.ALWAYS,[Jl]:i.LESS,[jc]:i.LEQUAL,[ql]:i.EQUAL,[jl]:i.GEQUAL,[Kl]:i.GREATER,[Zl]:i.NOTEQUAL};function $(E,x){if(x.type===Ze&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ke||x.magFilter===hr||x.magFilter===as||x.magFilter===Wn||x.minFilter===Ke||x.minFilter===hr||x.minFilter===as||x.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,rt[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,rt[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,rt[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,at[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pe||x.minFilter!==as&&x.minFilter!==Wn||x.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function tt(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",b));let q=x.source,Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));let Y=V(x);if(Y!==E.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[Y].usedTimes++;let Et=Z[E.__cacheKey];Et!==void 0&&(Z[E.__cacheKey].usedTimes--,Et.usedTimes===0&&S(x)),E.__cacheKey=Y,E.__webglTexture=Z[Y].texture}return N}function G(E,x,N){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);let Z=tt(E,x),Y=x.source;e.bindTexture(q,E.__webglTexture,i.TEXTURE0+N);let Et=n.get(Y);if(Y.version!==Et.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);let ht=Wt.getPrimaries(Wt.workingColorSpace),gt=x.colorSpace===Tn?null:Wt.getPrimaries(x.colorSpace),Vt=x.colorSpace===Tn||ht===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let et=_(x.image,!1,s.maxTextureSize);et=te(x,et);let xt=r.convert(x.format,x.colorSpace),It=r.convert(x.type),Lt=A(x.internalFormat,xt,It,x.colorSpace,x.isVideoTexture);$(q,x);let _t,Ht=x.mipmaps,zt=x.isVideoTexture!==!0,jt=Et.__version===void 0||Z===!0,D=Y.dataReady,ct=B(x,et);if(x.isDepthTexture)Lt=v(x.format===Ai,x.type),jt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,xt,It,null));else if(x.isDataTexture)if(Ht.length>0){zt&&jt&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,Ht[0].width,Ht[0].height);for(let X=0,K=Ht.length;X<K;X++)_t=Ht[X],zt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,xt,It,_t.data):e.texImage2D(i.TEXTURE_2D,X,Lt,_t.width,_t.height,0,xt,It,_t.data);x.generateMipmaps=!1}else zt?(jt&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,et.width,et.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,xt,It,et.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,xt,It,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,Ht[0].width,Ht[0].height,et.depth);for(let X=0,K=Ht.length;X<K;X++)if(_t=Ht[X],x.format!==Xe)if(xt!==null)if(zt){if(D)if(x.layerUpdates.size>0){let ft=Lc(_t.width,_t.height,x.format,x.type);for(let ut of x.layerUpdates){let Bt=_t.data.subarray(ut*ft/_t.data.BYTES_PER_ELEMENT,(ut+1)*ft/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ut,_t.width,_t.height,1,xt,Bt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,et.depth,xt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Lt,_t.width,_t.height,et.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,et.depth,xt,It,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Lt,_t.width,_t.height,et.depth,0,xt,It,_t.data)}else{zt&&jt&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,Ht[0].width,Ht[0].height);for(let X=0,K=Ht.length;X<K;X++)_t=Ht[X],x.format!==Xe?xt!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Lt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,xt,It,_t.data):e.texImage2D(i.TEXTURE_2D,X,Lt,_t.width,_t.height,0,xt,It,_t.data)}else if(x.isDataArrayTexture)if(zt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,et.width,et.height,et.depth),D)if(x.layerUpdates.size>0){let X=Lc(et.width,et.height,x.format,x.type);for(let K of x.layerUpdates){let ft=et.data.subarray(K*X/et.data.BYTES_PER_ELEMENT,(K+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,xt,It,ft)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,It,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,xt,It,et.data);else if(x.isData3DTexture)zt?(jt&&e.texStorage3D(i.TEXTURE_3D,ct,Lt,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,It,et.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,xt,It,et.data);else if(x.isFramebufferTexture){if(jt)if(zt)e.texStorage2D(i.TEXTURE_2D,ct,Lt,et.width,et.height);else{let X=et.width,K=et.height;for(let ft=0;ft<ct;ft++)e.texImage2D(i.TEXTURE_2D,ft,Lt,X,K,0,xt,It,null),X>>=1,K>>=1}}else if(Ht.length>0){if(zt&&jt){let X=Rt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,ct,Lt,X.width,X.height)}for(let X=0,K=Ht.length;X<K;X++)_t=Ht[X],zt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt,It,_t):e.texImage2D(i.TEXTURE_2D,X,Lt,xt,It,_t);x.generateMipmaps=!1}else if(zt){if(jt){let X=Rt(et);e.texStorage2D(i.TEXTURE_2D,ct,Lt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,It,et)}else e.texImage2D(i.TEXTURE_2D,0,Lt,xt,It,et);m(x)&&d(q),Et.__version=Y.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function J(E,x,N){if(x.image.length!==6)return;let q=tt(E,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);let Y=n.get(Z);if(Z.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+N);let Et=Wt.getPrimaries(Wt.workingColorSpace),ht=x.colorSpace===Tn?null:Wt.getPrimaries(x.colorSpace),gt=x.colorSpace===Tn||Et===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Vt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let K=0;K<6;K++)!Vt&&!et?xt[K]=_(x.image[K],!0,s.maxCubemapSize):xt[K]=et?x.image[K].image:x.image[K],xt[K]=te(x,xt[K]);let It=xt[0],Lt=r.convert(x.format,x.colorSpace),_t=r.convert(x.type),Ht=A(x.internalFormat,Lt,_t,x.colorSpace),zt=x.isVideoTexture!==!0,jt=Y.__version===void 0||q===!0,D=Z.dataReady,ct=B(x,It);$(i.TEXTURE_CUBE_MAP,x);let X;if(Vt){zt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ht,It.width,It.height);for(let K=0;K<6;K++){X=xt[K].mipmaps;for(let ft=0;ft<X.length;ft++){let ut=X[ft];x.format!==Xe?Lt!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,Lt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Ht,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,Lt,_t,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Ht,ut.width,ut.height,0,Lt,_t,ut.data)}}}else{if(X=x.mipmaps,zt&&jt){X.length>0&&ct++;let K=Rt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(et){zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xt[K].width,xt[K].height,Lt,_t,xt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,xt[K].width,xt[K].height,0,Lt,_t,xt[K].data);for(let ft=0;ft<X.length;ft++){let Bt=X[ft].image[K].image;zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Bt.width,Bt.height,Lt,_t,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Ht,Bt.width,Bt.height,0,Lt,_t,Bt.data)}}else{zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Lt,_t,xt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Lt,_t,xt[K]);for(let ft=0;ft<X.length;ft++){let ut=X[ft];zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Lt,_t,ut.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Ht,Lt,_t,ut.image[K])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function lt(E,x,N,q,Z,Y){let Et=r.convert(N.format,N.colorSpace),ht=r.convert(N.type),gt=A(N.internalFormat,Et,ht,N.colorSpace),Vt=n.get(x),et=n.get(N);if(et.__renderTarget=x,!Vt.__hasExternalTextures){let xt=Math.max(1,x.width>>Y),It=Math.max(1,x.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,gt,xt,It,x.depth,0,Et,ht,null):e.texImage2D(Z,Y,gt,xt,It,0,Et,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,et.__webglTexture,0,Pt(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=v(x.stencilBuffer,Z),Et=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Pt(x);Dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Y,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,E)}else{let q=x.textures;for(let Z=0;Z<q.length;Z++){let Y=q[Z],Et=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),gt=A(Y.internalFormat,Et,ht,Y.colorSpace),Vt=Pt(x);N&&Dt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,gt,x.width,x.height):Dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,gt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,gt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);let Z=q.__webglTexture,Y=Pt(x);if(x.depthTexture.format===mi)Dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Ai)Dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function it(E){let x=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Tt(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),st(x.__webglDepthbuffer[q],E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,E,!1);else{let q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(E,x,N){let q=n.get(E);x!==void 0&&lt(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&it(E)}function Ot(E){let x=E.texture,N=n.get(E),q=n.get(x);E.addEventListener("dispose",T);let Z=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Et=Z.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ht]=[];for(let gt=0;gt<x.mipmaps.length;gt++)N.__webglFramebuffer[ht][gt]=i.createFramebuffer()}else N.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)N.__webglFramebuffer[ht]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ht=0,gt=Z.length;ht<gt;ht++){let Vt=n.get(Z[ht]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Dt(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ht=0;ht<Z.length;ht++){let gt=Z[ht];N.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ht]);let Vt=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),xt=A(gt.internalFormat,Vt,et,gt.colorSpace,E.isXRRenderTarget===!0),It=Pt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,N.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),st(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),$(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)lt(N.__webglFramebuffer[ht][gt],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else lt(N.__webglFramebuffer[ht],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,gt=Z.length;ht<gt;ht++){let Vt=Z[ht],et=n.get(Vt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),$(i.TEXTURE_2D,Vt),lt(N.__webglFramebuffer,E,Vt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(Vt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),$(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)lt(N.__webglFramebuffer[gt],E,x,i.COLOR_ATTACHMENT0,ht,gt);else lt(N.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ht,0);m(x)&&d(ht),e.unbindTexture()}E.depthBuffer&&it(E)}function yt(E){let x=E.textures;for(let N=0,q=x.length;N<q;N++){let Z=x[N];if(m(Z)){let Y=w(E),Et=n.get(Z).__webglTexture;e.bindTexture(Y,Et),d(Y),e.unbindTexture()}}}let Xt=[],P=[];function oe(E){if(E.samples>0){if(Dt(E)===!1){let x=E.textures,N=E.width,q=E.height,Z=i.COLOR_BUFFER_BIT,Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(E),ht=x.length>1;if(ht)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Vt=n.get(x[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,N,q,0,0,N,q,Z,i.NEAREST),c===!0&&(Xt.length=0,P.length=0,Xt.push(i.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Xt.push(Y),P.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Vt=n.get(x[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Pt(E){return Math.min(s.maxSamples,E.samples)}function Dt(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function te(E,x){let N=E.colorSpace,q=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Ti&&N!==Tn&&(Wt.getTransfer(N)===Kt?(q!==Xe||Z!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Rt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=mt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Dt}function Qp(i,t){function e(n,s=Tn){let r,a=Wt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===Ze)return i.FLOAT;if(n===es)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===Xe)return i.RGBA;if(n===Yc)return i.LUMINANCE;if(n===Jc)return i.LUMINANCE_ALPHA;if(n===mi)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===qc)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===Is||n===Ps||n===Ds||n===Ls)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===oa||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===oa)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===xa||n===_a||n===va||n===ya||n===Ma||n===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===la)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===Aa||n===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Us)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Ea||n===ba||n===Ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Wa=class extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yp={type:"move"},Hi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qp=`
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

}`,Xa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:Jp,fragmentShader:qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qa=class extends Pn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,_=new Xa,m=e.getContextAttributes(),d=null,w=null,A=[],v=[],B=new vt,b=null,T=new ye;T.viewport=new ae;let R=new ye;R.viewport=new ae;let S=[T,R],M=new Wa,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=A[G];return J===void 0&&(J=new Hi,A[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=A[G];return J===void 0&&(J=new Hi,A[G]=J),J.getGripSpace()},this.getHand=function(G){let J=A[G];return J===void 0&&(J=new Hi,A[G]=J),J.getHandSpace()};function F(G){let J=v.indexOf(G.inputSource);if(J===-1)return;let lt=A[J];lt!==void 0&&(lt.update(G.inputSource,G.frame,l||a),lt.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let G=0;G<A.length;G++){let J=v[G];J!==null&&(v[G]=null,A[G].disconnect(J))}C=null,H=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,w=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new pn(p.framebufferWidth,p.framebufferHeight,{format:Xe,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,lt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Ai:mi,lt=m.stencil?Si:Xn);let Tt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new pn(f.textureWidth,f.textureHeight,{format:Xe,type:fn,depthTexture:new Js(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(G){for(let J=0;J<G.removed.length;J++){let lt=G.removed[J],st=v.indexOf(lt);st>=0&&(v[st]=null,A[st].disconnect(lt))}for(let J=0;J<G.added.length;J++){let lt=G.added[J],st=v.indexOf(lt);if(st===-1){for(let it=0;it<A.length;it++)if(it>=v.length){v.push(lt),st=it;break}else if(v[it]===null){v[it]=lt,st=it;break}if(st===-1)break}let Tt=A[st];Tt&&Tt.connect(lt)}}let W=new I,j=new I;function z(G,J,lt){W.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(lt.matrixWorld);let st=W.distanceTo(j),Tt=J.projectionMatrix.elements,it=lt.projectionMatrix.elements,mt=Tt[14]/(Tt[10]-1),Ot=Tt[14]/(Tt[10]+1),yt=(Tt[9]+1)/Tt[5],Xt=(Tt[9]-1)/Tt[5],P=(Tt[8]-1)/Tt[0],oe=(it[8]+1)/it[0],Pt=mt*P,Dt=mt*oe,wt=st/(-P+oe),te=wt*-P;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(te),G.translateZ(wt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Tt[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Rt=mt+wt,E=Ot+wt,x=Pt-te,N=Dt+(st-te),q=yt*Ot/E*Rt,Z=Xt*Ot/E*Rt;G.projectionMatrix.makePerspective(x,N,q,Z,Rt,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function rt(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let J=G.near,lt=G.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),M.near=R.near=T.near=J,M.far=R.far=T.far=lt,(C!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far),T.layers.mask=G.layers.mask|2,R.layers.mask=G.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;let st=G.parent,Tt=M.cameras;rt(M,st);for(let it=0;it<Tt.length;it++)rt(Tt[it],st);Tt.length===2?z(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),at(G,M,st)};function at(G,J,lt){lt===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(lt.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ra*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let pt=null;function $(G,J){if(h=J.getViewerPose(l||a),g=J,h!==null){let lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let st=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let it=0;it<lt.length;it++){let mt=lt[it],Ot=null;if(p!==null)Ot=p.getViewport(mt);else{let Xt=u.getViewSubImage(f,mt);Ot=Xt.viewport,it===0&&(t.setRenderTargetTextures(w,Xt.colorTexture,f.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(w))}let yt=S[it];yt===void 0&&(yt=new ye,yt.layers.enable(it),yt.viewport=new ae,S[it]=yt),yt.matrix.fromArray(mt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(mt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),it===0&&(M.matrix.copy(yt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(yt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let it=u.getDepthInformation(lt[0]);it&&it.isValid&&it.texture&&_.init(t,it,s.renderState)}}for(let lt=0;lt<A.length;lt++){let st=v[lt],Tt=A[lt];st!==null&&Tt!==void 0&&Tt.update(st,J,l||a)}pt&&pt(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let tt=new nl;tt.setAnimationLoop($),this.setAnimationLoop=function(G){pt=G},this.dispose=function(){}}},On=new je,Kp=new ie;function Zp(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,el(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,w,A,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,w,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===be&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===be&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w=t.get(d),A=w.envMap,v=w.envMapRotation;A&&(m.envMap.value=A,On.copy(v),On.x*=-1,On.y*=-1,On.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(On)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,w,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=A*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===be&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let w=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jp(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,A){let v=A.program;n.uniformBlockBinding(w,v)}function l(w,A){let v=s[w.id];v===void 0&&(g(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",m));let B=A.program;n.updateUBOMapping(w,B);let b=t.render.frame;r[w.id]!==b&&(f(w),r[w.id]=b)}function h(w){let A=u();w.__bindingPointIndex=A;let v=i.createBuffer(),B=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,B,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,v),v}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let A=s[w.id],v=w.uniforms,B=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,T=v.length;b<T;b++){let R=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,M=R.length;S<M;S++){let C=R[S];if(p(C,b,S,B)===!0){let H=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],V=0;for(let Q=0;Q<F.length;Q++){let W=F[Q],j=_(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+V,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,A,v,B){let b=w.value,T=A+"_"+v;if(B[T]===void 0)return typeof b=="number"||typeof b=="boolean"?B[T]=b:B[T]=b.clone(),!0;{let R=B[T];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return B[T]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(w){let A=w.uniforms,v=0,B=16;for(let T=0,R=A.length;T<R;T++){let S=Array.isArray(A[T])?A[T]:[A[T]];for(let M=0,C=S.length;M<C;M++){let H=S[M],F=Array.isArray(H.value)?H.value:[H.value];for(let V=0,Q=F.length;V<Q;V++){let W=F[V],j=_(W),z=v%B,rt=z%j.boundary,at=z+rt;v+=rt,at!==0&&B-at<j.storage&&(v+=B-at),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=j.storage}}}let b=v%B;return b>0&&(v+=B-b),w.__size=v,w.__cache={},this}function _(w){let A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function m(w){let A=w.target;A.removeEventListener("dispose",m);let v=a.indexOf(A.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Yi=class{constructor(t={}){let{canvas:e=eh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,w=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this.toneMapping=Rn,this.toneMappingExposure=1;let v=this,B=!1,b=0,T=0,R=null,S=-1,M=null,C=new ae,H=new ae,F=null,V=new Gt(0),Q=0,W=e.width,j=e.height,z=1,rt=null,at=null,pt=new ae(0,0,W,j),$=new ae(0,0,W,j),tt=!1,G=new Qi,J=!1,lt=!1,st=new ie,Tt=new ie,it=new I,mt=new ae,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function Xt(){return R===null?z:1}let P=n;function oe(y,L){return e.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),P===null){let L="webgl2";if(P=oe(L,y),P===null)throw oe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Pt,Dt,wt,te,Rt,E,x,N,q,Z,Y,Et,ht,gt,Vt,et,xt,It,Lt,_t,Ht,zt,jt,D;function ct(){Pt=new pf(P),Pt.init(),zt=new Qp(P,Pt),Dt=new cf(P,Pt,t,zt),wt=new Vp(P,Pt),Dt.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),te=new xf(P),Rt=new Ip,E=new Xp(P,Pt,wt,Rt,Dt,zt,te),x=new hf(v),N=new ff(v),q=new Ah(P),jt=new af(P,q),Z=new mf(P,q,te,jt),Y=new vf(P,Z,q,te),Lt=new _f(P,Dt,E),et=new lf(Rt),Et=new Rp(v,x,N,Pt,Dt,jt,et),ht=new Zp(v,Rt),gt=new Dp,Vt=new Op(Pt),It=new rf(v,x,N,wt,Y,p,c),xt=new Gp(v,Y,Dt),D=new jp(P,te,Dt,wt),_t=new of(P,Pt,te),Ht=new gf(P,Pt,te),te.programs=Et.programs,v.capabilities=Dt,v.extensions=Pt,v.properties=Rt,v.renderLists=gt,v.shadowMap=xt,v.state=wt,v.info=te}ct();let X=new Qa(v,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=Pt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Pt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(W,j,!1))},this.getSize=function(y){return y.set(W,j)},this.setSize=function(y,L,O=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,j=L,e.width=Math.floor(y*z),e.height=Math.floor(L*z),O===!0&&(e.style.width=y+"px",e.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(W*z,j*z).floor()},this.setDrawingBufferSize=function(y,L,O){W=y,j=L,z=O,e.width=Math.floor(y*O),e.height=Math.floor(L*O),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(pt)},this.setViewport=function(y,L,O,k){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,L,O,k),wt.viewport(C.copy(pt).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy($)},this.setScissor=function(y,L,O,k){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,L,O,k),wt.scissor(H.copy($).multiplyScalar(z).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(y){wt.setScissorTest(tt=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){at=y},this.getClearColor=function(y){return y.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(y=!0,L=!0,O=!0){let k=0;if(y){let U=!1;if(R!==null){let nt=R.texture.format;U=nt===yo||nt===vo||nt===_o}if(U){let nt=R.texture.type,dt=nt===fn||nt===Xn||nt===Xi||nt===Si||nt===mo||nt===go,Mt=It.getClearColor(),St=It.getClearAlpha(),Ut=Mt.r,Nt=Mt.g,At=Mt.b;dt?(g[0]=Ut,g[1]=Nt,g[2]=At,g[3]=St,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ut,_[1]=Nt,_[2]=At,_[3]=St,P.clearBufferiv(P.COLOR,0,_))}else k|=P.COLOR_BUFFER_BIT}L&&(k|=P.DEPTH_BUFFER_BIT),O&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),Vt.dispose(),Rt.dispose(),x.dispose(),N.dispose(),Y.dispose(),jt.dispose(),D.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",bo),X.removeEventListener("sessionend",To),Dn.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let y=te.autoReset,L=xt.enabled,O=xt.autoUpdate,k=xt.needsUpdate,U=xt.type;ct(),te.autoReset=y,xt.enabled=L,xt.autoUpdate=O,xt.needsUpdate=k,xt.type=U}function ut(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Bt(y){let L=y.target;L.removeEventListener("dispose",Bt),re(L)}function re(y){xe(y),Rt.remove(y)}function xe(y){let L=Rt.get(y).programs;L!==void 0&&(L.forEach(function(O){Et.releaseProgram(O)}),y.isShaderMaterial&&Et.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,O,k,U,nt){L===null&&(L=Ot);let dt=U.isMesh&&U.matrixWorld.determinant()<0,Mt=ul(y,L,O,k,U);wt.setMaterial(k,dt);let St=O.index,Ut=1;if(k.wireframe===!0){if(St=Z.getWireframeAttribute(O),St===void 0)return;Ut=2}let Nt=O.drawRange,At=O.attributes.position,Qt=Nt.start*Ut,$t=(Nt.start+Nt.count)*Ut;nt!==null&&(Qt=Math.max(Qt,nt.start*Ut),$t=Math.min($t,(nt.start+nt.count)*Ut)),St!==null?(Qt=Math.max(Qt,0),$t=Math.min($t,St.count)):At!=null&&(Qt=Math.max(Qt,0),$t=Math.min($t,At.count));let ee=$t-Qt;if(ee<0||ee===1/0)return;jt.setup(U,k,Mt,O,St);let Ae,Yt=_t;if(St!==null&&(Ae=q.get(St),Yt=Ht,Yt.setIndex(Ae)),U.isMesh)k.wireframe===!0?(wt.setLineWidth(k.wireframeLinewidth*Xt()),Yt.setMode(P.LINES)):Yt.setMode(P.TRIANGLES);else if(U.isLine){let bt=k.linewidth;bt===void 0&&(bt=1),wt.setLineWidth(bt*Xt()),U.isLineSegments?Yt.setMode(P.LINES):U.isLineLoop?Yt.setMode(P.LINE_LOOP):Yt.setMode(P.LINE_STRIP)}else U.isPoints?Yt.setMode(P.POINTS):U.isSprite&&Yt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let bt=U._multiDrawStarts,nn=U._multiDrawCounts,Jt=U._multiDrawCount,Ge=St?q.get(St).bytesPerElement:1,Zn=Rt.get(k).currentProgram.getUniforms();for(let Ce=0;Ce<Jt;Ce++)Zn.setValue(P,"_gl_DrawID",Ce),Yt.render(bt[Ce]/Ge,nn[Ce])}else if(U.isInstancedMesh)Yt.renderInstances(Qt,ee,U.count);else if(O.isInstancedBufferGeometry){let bt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,nn=Math.min(O.instanceCount,bt);Yt.renderInstances(Qt,ee,nn)}else Yt.render(Qt,ee)};function qt(y,L,O){y.transparent===!0&&y.side===Ee&&y.forceSinglePass===!1?(y.side=be,y.needsUpdate=!0,rs(y,L,O),y.side=In,y.needsUpdate=!0,rs(y,L,O),y.side=Ee):rs(y,L,O)}this.compile=function(y,L,O=null){O===null&&(O=y),d=Vt.get(O),d.init(L),A.push(d),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),y!==O&&y.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let k=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let nt=U.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){let Mt=nt[dt];qt(Mt,O,U),k.add(Mt)}else qt(nt,O,U),k.add(nt)}),A.pop(),d=null,k},this.compileAsync=function(y,L,O=null){let k=this.compile(y,L,O);return new Promise(U=>{function nt(){if(k.forEach(function(dt){Rt.get(dt).currentProgram.isReady()&&k.delete(dt)}),k.size===0){U(y);return}setTimeout(nt,10)}Pt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ke=null;function en(y){ke&&ke(y)}function bo(){Dn.stop()}function To(){Dn.start()}let Dn=new nl;Dn.setAnimationLoop(en),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(y){ke=y,X.setAnimationLoop(y),y===null?Dn.stop():Dn.start()},X.addEventListener("sessionstart",bo),X.addEventListener("sessionend",To),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(L),L=X.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,L,R),d=Vt.get(y,A.length),d.init(L),A.push(d),Tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G.setFromProjectionMatrix(Tt),lt=this.localClippingEnabled,J=et.init(this.clippingPlanes,lt),m=gt.get(y,w.length),m.init(),w.push(m),X.enabled===!0&&X.isPresenting===!0){let nt=v.xr.getDepthSensingMesh();nt!==null&&lr(nt,L,-1/0,v.sortObjects)}lr(y,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,at),yt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,yt&&It.addToRenderList(m,y),this.info.render.frame++,J===!0&&et.beginShadows();let O=d.state.shadowsArray;xt.render(O,y,L),J===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,U=m.transmissive;if(d.setupLights(),L.isArrayCamera){let nt=L.cameras;if(U.length>0)for(let dt=0,Mt=nt.length;dt<Mt;dt++){let St=nt[dt];Ro(k,U,y,St)}yt&&It.render(y);for(let dt=0,Mt=nt.length;dt<Mt;dt++){let St=nt[dt];Co(m,y,St,St.viewport)}}else U.length>0&&Ro(k,U,y,L),yt&&It.render(y),Co(m,y,L);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(v,y,L),jt.resetDefaultState(),S=-1,M=null,A.pop(),A.length>0?(d=A[A.length-1],J===!0&&et.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function lr(y,L,O,k){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||G.intersectsSprite(y)){k&&mt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Tt);let dt=Y.update(y),Mt=y.material;Mt.visible&&m.push(y,dt,Mt,O,mt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||G.intersectsObject(y))){let dt=Y.update(y),Mt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),mt.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),mt.copy(dt.boundingSphere.center)),mt.applyMatrix4(y.matrixWorld).applyMatrix4(Tt)),Array.isArray(Mt)){let St=dt.groups;for(let Ut=0,Nt=St.length;Ut<Nt;Ut++){let At=St[Ut],Qt=Mt[At.materialIndex];Qt&&Qt.visible&&m.push(y,dt,Qt,O,mt.z,At)}}else Mt.visible&&m.push(y,dt,Mt,O,mt.z,null)}}let nt=y.children;for(let dt=0,Mt=nt.length;dt<Mt;dt++)lr(nt[dt],L,O,k)}function Co(y,L,O,k){let U=y.opaque,nt=y.transmissive,dt=y.transparent;d.setupLightsView(O),J===!0&&et.setGlobalState(v.clippingPlanes,O),k&&wt.viewport(C.copy(k)),U.length>0&&ss(U,L,O),nt.length>0&&ss(nt,L,O),dt.length>0&&ss(dt,L,O),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ro(y,L,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new pn(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?es:fn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let nt=d.state.transmissionRenderTarget[k.id],dt=k.viewport||C;nt.setSize(dt.z,dt.w);let Mt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(V),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),yt&&It.render(O);let St=v.toneMapping;v.toneMapping=Rn;let Ut=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),J===!0&&et.setGlobalState(v.clippingPlanes,k),ss(y,O,k),E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let At=0,Qt=L.length;At<Qt;At++){let $t=L[At],ee=$t.object,Ae=$t.geometry,Yt=$t.material,bt=$t.group;if(Yt.side===Ee&&ee.layers.test(k.layers)){let nn=Yt.side;Yt.side=be,Yt.needsUpdate=!0,Io(ee,O,k,Ae,Yt,bt),Yt.side=nn,Yt.needsUpdate=!0,Nt=!0}}Nt===!0&&(E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt))}v.setRenderTarget(Mt),v.setClearColor(V,Q),Ut!==void 0&&(k.viewport=Ut),v.toneMapping=St}function ss(y,L,O){let k=L.isScene===!0?L.overrideMaterial:null;for(let U=0,nt=y.length;U<nt;U++){let dt=y[U],Mt=dt.object,St=dt.geometry,Ut=k===null?dt.material:k,Nt=dt.group;Mt.layers.test(O.layers)&&Io(Mt,L,O,St,Ut,Nt)}}function Io(y,L,O,k,U,nt){y.onBeforeRender(v,L,O,k,U,nt),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,L,O,k,y,nt),U.transparent===!0&&U.side===Ee&&U.forceSinglePass===!1?(U.side=be,U.needsUpdate=!0,v.renderBufferDirect(O,L,k,U,y,nt),U.side=In,U.needsUpdate=!0,v.renderBufferDirect(O,L,k,U,y,nt),U.side=Ee):v.renderBufferDirect(O,L,k,U,y,nt),y.onAfterRender(v,L,O,k,U,nt)}function rs(y,L,O){L.isScene!==!0&&(L=Ot);let k=Rt.get(y),U=d.state.lights,nt=d.state.shadowsArray,dt=U.state.version,Mt=Et.getParameters(y,U.state,nt,L,O),St=Et.getProgramCacheKey(Mt),Ut=k.programs;k.environment=y.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(y.isMeshStandardMaterial?N:x).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",Bt),Ut=new Map,k.programs=Ut);let Nt=Ut.get(St);if(Nt!==void 0){if(k.currentProgram===Nt&&k.lightsStateVersion===dt)return Do(y,Mt),Nt}else Mt.uniforms=Et.getUniforms(y),y.onBeforeCompile(Mt,v),Nt=Et.acquireProgram(Mt,St),Ut.set(St,Nt),k.uniforms=Mt.uniforms;let At=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=et.uniform),Do(y,Mt),k.needsLights=fl(y),k.lightsStateVersion=dt,k.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Nt,k.uniformsList=null,Nt}function Po(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=xi.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Do(y,L){let O=Rt.get(y);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function ul(y,L,O,k,U){L.isScene!==!0&&(L=Ot),E.resetTextureUnits();let nt=L.fog,dt=k.isMeshStandardMaterial?L.environment:null,Mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ti,St=(k.isMeshStandardMaterial?N:x).get(k.envMap||dt),Ut=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Nt=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!O.morphAttributes.position,Qt=!!O.morphAttributes.normal,$t=!!O.morphAttributes.color,ee=Rn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ee=v.toneMapping);let Ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Yt=Ae!==void 0?Ae.length:0,bt=Rt.get(k),nn=d.state.lights;if(J===!0&&(lt===!0||y!==M)){let Be=y===M&&k.id===S;et.setState(k,y,Be)}let Jt=!1;k.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==nn.state.version||bt.outputColorSpace!==Mt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==St||k.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==et.numPlanes||bt.numIntersection!==et.numIntersection)||bt.vertexAlphas!==Ut||bt.vertexTangents!==Nt||bt.morphTargets!==At||bt.morphNormals!==Qt||bt.morphColors!==$t||bt.toneMapping!==ee||bt.morphTargetsCount!==Yt)&&(Jt=!0):(Jt=!0,bt.__version=k.version);let Ge=bt.currentProgram;Jt===!0&&(Ge=rs(k,L,U));let Zn=!1,Ce=!1,Pi=!1,ne=Ge.getUniforms(),Je=bt.uniforms;if(wt.useProgram(Ge.program)&&(Zn=!0,Ce=!0,Pi=!0),k.id!==S&&(S=k.id,Ce=!0),Zn||M!==y){wt.buffers.depth.getReversed()?(st.copy(y.projectionMatrix),ih(st),sh(st),ne.setValue(P,"projectionMatrix",st)):ne.setValue(P,"projectionMatrix",y.projectionMatrix),ne.setValue(P,"viewMatrix",y.matrixWorldInverse);let vn=ne.map.cameraPosition;vn!==void 0&&vn.setValue(P,it.setFromMatrixPosition(y.matrixWorld)),Dt.logarithmicDepthBuffer&&ne.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ne.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ce=!0,Pi=!0)}if(U.isSkinnedMesh){ne.setOptional(P,U,"bindMatrix"),ne.setOptional(P,U,"bindMatrixInverse");let Be=U.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ne.setValue(P,"boneTexture",Be.boneTexture,E))}U.isBatchedMesh&&(ne.setOptional(P,U,"batchingTexture"),ne.setValue(P,"batchingTexture",U._matricesTexture,E),ne.setOptional(P,U,"batchingIdTexture"),ne.setValue(P,"batchingIdTexture",U._indirectTexture,E),ne.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ne.setValue(P,"batchingColorTexture",U._colorsTexture,E));let Di=O.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&Lt.update(U,O,Ge),(Ce||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,ne.setValue(P,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Je.envMap.value=St,Je.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Je.envMapIntensity.value=L.environmentIntensity),Ce&&(ne.setValue(P,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&dl(Je,Pi),nt&&k.fog===!0&&ht.refreshFogUniforms(Je,nt),ht.refreshMaterialUniforms(Je,k,z,j,d.state.transmissionRenderTarget[y.id]),xi.upload(P,Po(bt),Je,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xi.upload(P,Po(bt),Je,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ne.setValue(P,"center",U.center),ne.setValue(P,"modelViewMatrix",U.modelViewMatrix),ne.setValue(P,"normalMatrix",U.normalMatrix),ne.setValue(P,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Be=k.uniformsGroups;for(let vn=0,yn=Be.length;vn<yn;vn++){let Lo=Be[vn];D.update(Lo,Ge),D.bind(Lo,Ge)}}return Ge}function dl(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function fl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,L,O){Rt.get(y.texture).__webglTexture=L,Rt.get(y.depthTexture).__webglTexture=O;let k=Rt.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){let O=Rt.get(y);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,O=0){R=y,b=L,T=O;let k=!0,U=null,nt=!1,dt=!1;if(y){let St=Rt.get(y);if(St.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(St.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(St.__hasExternalTextures)E.rebindTextures(y,Rt.get(y.texture).__webglTexture,Rt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let At=y.depthTexture;if(St.__boundDepthTexture!==At){if(At!==null&&Rt.has(At)&&(y.width!==At.image.width||y.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}let Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(dt=!0);let Nt=Rt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[L])?U=Nt[L][O]:U=Nt[L],nt=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?U=Rt.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?U=Nt[O]:U=Nt,C.copy(y.viewport),H.copy(y.scissor),F=y.scissorTest}else C.copy(pt).multiplyScalar(z).floor(),H.copy($).multiplyScalar(z).floor(),F=tt;if(wt.bindFramebuffer(P.FRAMEBUFFER,U)&&k&&wt.drawBuffers(y,U),wt.viewport(C),wt.scissor(H),wt.setScissorTest(F),nt){let St=Rt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,St.__webglTexture,O)}else if(dt){let St=Rt.get(y.texture),Ut=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.__webglTexture,O||0,Ut)}S=-1},this.readRenderTargetPixels=function(y,L,O,k,U,nt,dt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){wt.bindFramebuffer(P.FRAMEBUFFER,Mt);try{let St=y.texture,Ut=St.format,Nt=St.type;if(!Dt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-k&&O>=0&&O<=y.height-U&&P.readPixels(L,O,k,U,zt.convert(Ut),zt.convert(Nt),nt)}finally{let St=R!==null?Rt.get(R).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(y,L,O,k,U,nt,dt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){let St=y.texture,Ut=St.format,Nt=St.type;if(!Dt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-k&&O>=0&&O<=y.height-U){wt.bindFramebuffer(P.FRAMEBUFFER,Mt);let At=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,At),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(L,O,k,U,zt.convert(Ut),zt.convert(Nt),0);let Qt=R!==null?Rt.get(R).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,Qt);let $t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await nh(P,$t,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,At),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(At),P.deleteSync($t),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,O=0){y.isTexture!==!0&&(ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);let k=Math.pow(2,-O),U=Math.floor(y.image.width*k),nt=Math.floor(y.image.height*k),dt=L!==null?L.x:0,Mt=L!==null?L.y:0;E.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,dt,Mt,U,nt),wt.unbindTexture()},this.copyTextureToTexture=function(y,L,O=null,k=null,U=0){y.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],L=arguments[2],U=arguments[3]||0,O=null);let nt,dt,Mt,St,Ut,Nt,At,Qt,$t,ee=y.isCompressedTexture?y.mipmaps[U]:y.image;O!==null?(nt=O.max.x-O.min.x,dt=O.max.y-O.min.y,Mt=O.isBox3?O.max.z-O.min.z:1,St=O.min.x,Ut=O.min.y,Nt=O.isBox3?O.min.z:0):(nt=ee.width,dt=ee.height,Mt=ee.depth||1,St=0,Ut=0,Nt=0),k!==null?(At=k.x,Qt=k.y,$t=k.z):(At=0,Qt=0,$t=0);let Ae=zt.convert(L.format),Yt=zt.convert(L.type),bt;L.isData3DTexture?(E.setTexture3D(L,0),bt=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),bt=P.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),bt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let nn=P.getParameter(P.UNPACK_ROW_LENGTH),Jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ge=P.getParameter(P.UNPACK_SKIP_PIXELS),Zn=P.getParameter(P.UNPACK_SKIP_ROWS),Ce=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ee.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,St),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Nt);let Pi=y.isDataArrayTexture||y.isData3DTexture,ne=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let Je=Rt.get(y),Di=Rt.get(L),Be=Rt.get(Je.__renderTarget),vn=Rt.get(Di.__renderTarget);wt.bindFramebuffer(P.READ_FRAMEBUFFER,Be.__webglFramebuffer),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let yn=0;yn<Mt;yn++)Pi&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.get(y).__webglTexture,U,Nt+yn),y.isDepthTexture?(ne&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.get(L).__webglTexture,U,$t+yn),P.blitFramebuffer(St,Ut,nt,dt,At,Qt,nt,dt,P.DEPTH_BUFFER_BIT,P.NEAREST)):ne?P.copyTexSubImage3D(bt,U,At,Qt,$t+yn,St,Ut,nt,dt):P.copyTexSubImage2D(bt,U,At,Qt,$t+yn,St,Ut,nt,dt);wt.bindFramebuffer(P.READ_FRAMEBUFFER,null),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ne?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(bt,U,At,Qt,$t,nt,dt,Mt,Ae,Yt,ee.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(bt,U,At,Qt,$t,nt,dt,Mt,Ae,ee.data):P.texSubImage3D(bt,U,At,Qt,$t,nt,dt,Mt,Ae,Yt,ee):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,At,Qt,nt,dt,Ae,Yt,ee.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,At,Qt,ee.width,ee.height,Ae,ee.data):P.texSubImage2D(P.TEXTURE_2D,U,At,Qt,nt,dt,Ae,Yt,ee);P.pixelStorei(P.UNPACK_ROW_LENGTH,nn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,Zn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce),U===0&&L.generateMipmaps&&P.generateMipmap(bt),wt.unbindTexture()},this.copyTextureToTexture3D=function(y,L,O=null,k=null,U=0){return y.isTexture!==!0&&(ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,y=arguments[2],L=arguments[3],U=arguments[4]||0),ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,O,k,U)},this.initRenderTarget=function(y){Rt.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),wt.unbindTexture()},this.resetState=function(){b=0,T=0,R=null,wt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var Ji=class extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ya=class extends Te{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Pe,h=Pe,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qs=class extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},di=new ie,Uc=new ie,Ts=[],Bc=new mn,$p=new ie,Oi=new Ct,zi=new Qn,Ei=class extends Ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$p)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),Bc.copy(t.boundingBox).applyMatrix4(di),this.boundingBox.union(Bc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,di),zi.copy(t.boundingSphere).applyMatrix4(di),this.boundingSphere.union(zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(n),t.ray.intersectsSphere(zi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,di),Uc.multiplyMatrices(n,di),Oi.matrixWorld=Uc,Oi.raycast(t,Ts);for(let a=0,o=Ts.length;a<o;a++){let c=Ts[a];c.instanceId=r,c.object=this,e.push(c)}Ts.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ya(new Float32Array(s*this.count),s,this.count,xo,Ze));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qi=class extends Te{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new vt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],a=[],o=new I,c=new ie;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(me(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(me(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ki=class extends Oe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ja=class extends Ki{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function So(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Cs=new I,kr=new So,Gr=new So,Hr=new So,Zi=class extends Oe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Cs.subVectors(s[0],s[1]).add(s[0]),l=Cs);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Cs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),kr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Gr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Hr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(kr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Gr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Hr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(kr.calc(c),Gr.calc(c),Hr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function tm(i,t){let e=1-i;return e*e*t}function em(i,t){return 2*(1-i)*i*t}function nm(i,t){return i*i*t}function Vi(i,t,e,n){return tm(i,t)+em(i,e)+nm(i,n)}function im(i,t){let e=1-i;return e*e*e*t}function sm(i,t){let e=1-i;return 3*e*e*i*t}function rm(i,t){return 3*(1-i)*i*i*t}function am(i,t){return i*i*i*t}function Wi(i,t,e,n,s){return im(i,t)+sm(i,e)+rm(i,n)+am(i,s)}var Ks=class extends Oe{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wi(t,s.x,r.x,a.x,o.x),Wi(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends Oe{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wi(t,s.x,r.x,a.x,o.x),Wi(t,s.y,r.y,a.y,o.y),Wi(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zs=class extends Oe{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends Oe{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},js=class extends Oe{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vi(t,s.x,r.x,a.x),Vi(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$s=class extends Oe{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vi(t,s.x,r.x,a.x),Vi(t,s.y,r.y,a.y),Vi(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tr=class extends Oe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Nc(o,c.x,l.x,h.x,u.x),Nc(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},Za=Object.freeze({__proto__:null,ArcCurve:Ja,CatmullRomCurve3:Zi,CubicBezierCurve:Ks,CubicBezierCurve3:qa,EllipseCurve:Ki,LineCurve:Zs,LineCurve3:Ka,QuadraticBezierCurve:js,QuadraticBezierCurve3:$s,SplineCurve:tr}),ja=class extends Oe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Za[s.type]().fromJSON(s))}return this}},$a=class extends ja{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zs(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new js(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ks(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new tr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Ki(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ji=class i extends Ue{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new I,f=new vt,p=new I,g=new I,_=new I,m=0,d=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,d=t[w+1].y-t[w].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[w+1].x-t[w].x,d=t[w+1].y-t[w].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let w=0;w<=e;w++){let A=n+w*h*s,v=Math.sin(A),B=Math.cos(A);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*v,u.y=t[b].y,u.z=t[b].x*B,a.push(u.x,u.y,u.z),f.x=w/e,f.y=b/(t.length-1),o.push(f.x,f.y);let T=c[3*b+0]*v,R=c[3*b+1],S=c[3*b+0]*B;l.push(T,R,S)}}for(let w=0;w<e;w++)for(let A=0;A<t.length-1;A++){let v=A+w*t.length,B=v,b=v+t.length,T=v+t.length+1,R=v+1;r.push(B,b,R),r.push(T,R,b)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(o,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},xn=class i extends ji{constructor(t=1,e=1,n=4,s=8){let r=new $a;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Jn=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new I,h=new vt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_n=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,_=[],m=n/2,d=0;w(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(p,2));function w(){let v=new I,B=new I,b=0,T=(e-t)/n;for(let R=0;R<=r;R++){let S=[],M=R/r,C=M*(e-t)+t;for(let H=0;H<=s;H++){let F=H/s,V=F*c+o,Q=Math.sin(V),W=Math.cos(V);B.x=C*Q,B.y=-M*n+m,B.z=C*W,u.push(B.x,B.y,B.z),v.set(Q,T,W).normalize(),f.push(v.x,v.y,v.z),p.push(F,1-M),S.push(g++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let M=_[S][R],C=_[S+1][R],H=_[S+1][R+1],F=_[S][R+1];(t>0||S!==0)&&(h.push(M,C,F),b+=3),(e>0||S!==r-1)&&(h.push(C,H,F),b+=3)}l.addGroup(d,b,0),d+=b}function A(v){let B=g,b=new vt,T=new I,R=0,S=v===!0?t:e,M=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let C=g;for(let H=0;H<=s;H++){let V=H/s*c+o,Q=Math.cos(V),W=Math.sin(V);T.x=S*W,T.y=m*M,T.z=S*Q,u.push(T.x,T.y,T.z),f.push(0,M,0),b.x=Q*.5+.5,b.y=W*.5*M+.5,p.push(b.x,b.y),g++}for(let H=0;H<s;H++){let F=B+H,V=C+H;v===!0?h.push(V,V+1,F):h.push(V+1,V,F),R+=3}l.addGroup(d,R,v===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},er=class i extends _n{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Me=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,f=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let w=[],A=d/n,v=0;d===0&&a===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let B=0;B<=e;B++){let b=B/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+A*o),u.y=t*Math.cos(a+A*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+A*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(b+v,1-A),w.push(l++)}h.push(w)}for(let d=0;d<n;d++)for(let w=0;w<e;w++){let A=h[d][w+1],v=h[d][w],B=h[d+1][w],b=h[d+1][w+1];(d!==0||a>0)&&p.push(A,v,b),(d!==n-1||c<Math.PI)&&p.push(v,B,b)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qe=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new I,u=new I,f=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,w=(s+1)*p+g;a.push(_,m,w),a.push(m,d,w)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var nr=class i extends Ue{constructor(t=new $s(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,l=new vt,h=new I,u=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(p,2));function _(){for(let A=0;A<e;A++)m(A);m(r===!1?e:0),w(),d()}function m(A){h=t.getPointAt(A/e,h);let v=a.normals[A],B=a.binormals[A];for(let b=0;b<=s;b++){let T=b/s*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);c.x=S*v.x+R*B.x,c.y=S*v.y+R*B.y,c.z=S*v.z+R*B.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function d(){for(let A=1;A<=e;A++)for(let v=1;v<=s;v++){let B=(s+1)*(A-1)+(v-1),b=(s+1)*A+(v-1),T=(s+1)*A+v,R=(s+1)*(A-1)+v;g.push(B,b,R),g.push(b,T,R)}}function w(){for(let A=0;A<=e;A++)for(let v=0;v<=s;v++)l.x=A/e,l.y=v/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Za[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var tn=class extends Yn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Rs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function om(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},to=class extends bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oo,endingEnd:Oo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zo:r=t,o=2*e-n;break;case ko:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zo:a=t,c=2*n-e;break;case ko:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,w=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,A=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let B=0;B!==o;++B)r[B]=d*a[h+B]+w*a[l+B]+A*a[c+B]+v*a[u+B];return r}},eo=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},no=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ye=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new to(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Bs:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case ur:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return ur}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&om(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ur,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=Ca;var qn=class extends Ye{constructor(t,e,n){super(t,e,n)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Bs;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends Ye{};io.prototype.ValueTypeName="color";var so=class extends Ye{};so.prototype.ValueTypeName="number";var ro=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Fe.slerpFlat(r,0,a,l-o,a,l,c);return r}},ir=class extends Ye{InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends Ye{constructor(t,e,n){super(t,e,n)}};Kn.prototype.ValueTypeName="string";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=Bs;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends Ye{};ao.prototype.ValueTypeName="vector";var oo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},cm=new oo,co=class{constructor(t){this.manager=t!==void 0?t:cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};co.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},$i=class extends sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Vr=new ie,Fc=new I,Oc=new I,lo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),Vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ho=class extends lo{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new ho}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ao="\\[\\]\\.:\\/",lm=new RegExp("["+Ao+"]","g"),wo="[^"+Ao+"]",hm="[^"+Ao.replace("\\.","")+"]",um=/((?:WC+[\/:])*)/.source.replace("WC",wo),dm=/(WCOD+)?/.source.replace("WCOD",hm),fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wo),pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wo),mm=new RegExp("^"+um+dm+fm+pm+"$"),gm=["material","materials","bones","map"],uo=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lm,"")}static parseTrackName(t){let e=mm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=uo;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vm=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);var ze={pelle:"#e0b291",pelleOmbra:"#c98f6f",capelli:"#2a1b16",occhi:"#2b1a12",labbra:"#b8585b",jeans:"#5d7fae",jeansScuro:"#4a6893",scarpe:"#f3efe6",suola:"#d9d2c4",borsa:"#1d1a19",oro:"#d7b56d"};function xm(){let i=document.createElement("canvas");i.width=64,i.height=64;let t=i.getContext("2d");t.fillStyle="#f7f4ee",t.fillRect(0,0,64,64),t.fillStyle="#1e2a46";for(let n=0;n<64;n+=16)t.fillRect(0,n,64,7);let e=new qi(i);return e.colorSpace=pe,e.wrapS=e.wrapT=Mi,e}function _m(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d");t.fillStyle=ze.jeans,t.fillRect(0,0,128,128);for(let n=0;n<1400;n++)t.fillStyle=Math.random()<.5?"rgba(255,255,255,.07)":"rgba(0,0,30,.08)",t.fillRect(Math.random()*128,Math.random()*128,1,2+Math.random()*3);let e=new qi(i);return e.colorSpace=pe,e.wrapS=e.wrapT=Mi,e}var ge=(i,t={})=>new tn({color:i,roughness:.75,metalness:0,...t});function Eo(){let i=new le,t=new le;i.add(t);let e=ge(ze.pelle,{roughness:.6}),n=ge(ze.capelli,{roughness:.45,side:Ee}),s=xm(),r=ge("#ffffff",{map:s}),a=ge("#ffffff",{map:_m(),roughness:.95}),o=[-1,1].map($=>{let tt=new le;tt.position.set($*.16,1.18,0);let G=new Ct(new _n(.15,.235,1.02,22),a);G.position.y=-.51,tt.add(G);let J=new Ct(new Qe(.228,.022,8,24),ge(ze.jeansScuro));J.rotation.x=Math.PI/2,J.position.y=-1,tt.add(J);let lt=new Ct(new xn(.11,.2,6,12),ge(ze.scarpe,{roughness:.5}));lt.rotation.x=Math.PI/2,lt.position.set(0,-1.08,.07),lt.scale.set(1.05,1,.75),tt.add(lt);let st=new Ct(new gn(.22,.04,.44),ge(ze.suola));return st.position.set(0,-1.15,.07),tt.add(st),t.add(tt),tt}),c=new Ct(new _n(.33,.35,.24,26),a);c.position.y=1.22,t.add(c);let l=new Ct(new Qe(.335,.018,8,30),ge("#3b2a22"));l.rotation.x=Math.PI/2,l.position.y=1.32,t.add(l);let h=new le;h.position.y=1.32,t.add(h);let u=new Ct(new xn(.31,.36,8,24),r);s.repeat.set(3,3.2),u.position.y=.33,u.scale.set(1,1,.78),h.add(u);let f=[-1,1].map($=>{let tt=new le;tt.position.set($*.36,.66,0);let G=new Ct(new xn(.085,.56,6,14),r);G.position.y=-.34,tt.add(G);let J=new Ct(new Me(.085,16,12),e);return J.position.y=-.7,J.scale.set(.9,1.1,.8),tt.add(J),tt.rotation.z=$*.16,h.add(tt),tt}),p=new Ct(new gn(.12,.22,.02),ge("#16161a",{roughness:.3}));p.position.set(0,-.74,.08),p.rotation.x=-.4,f[0].add(p);let g=new Ct(new Qe(.42,.016,6,40),ge(ze.borsa));g.position.set(0,.36,0),g.rotation.set(Math.PI/2,.9,0),g.scale.set(.95,.72,1),h.add(g);let _=new Ct(new gn(.26,.2,.09),ge(ze.borsa,{roughness:.4}));_.position.set(.3,.02,.15),_.rotation.z=-.25,h.add(_);let m=new Ct(new _n(.085,.1,.2,14),e);m.position.y=.76,h.add(m);let d=new Ei(new Me(.022,8,6),new tn({roughness:.35}),26),w=new he,A=["#c3333b","#f4efe8","#c3333b","#2d3e74","#f4efe8"];for(let $=0;$<26;$++){let tt=$/26*Math.PI*2;w.position.set(Math.sin(tt)*.125,.72-Math.max(0,Math.cos(tt))*.05,Math.cos(tt)*.11),w.updateMatrix(),d.setMatrixAt($,w.matrix),d.setColorAt($,new Gt(A[$%A.length]))}h.add(d);let v=new le;v.position.y=1.27,h.add(v);let B=new Ct(new Me(.46,40,32),e);B.scale.set(.96,1.06,.98),v.add(B);let b=[-1,1].map($=>{let tt=new le;tt.position.set($*.16,0,.405);let G=new Ct(new Me(.062,18,14),ge(ze.occhi,{roughness:.2}));G.scale.set(1,1.22,.55);let J=new Ct(new Me(.018,10,8),new Le({color:"#ffffff"}));return J.position.set($*-.018+.012,.03,.035),tt.add(G,J),tt.rotation.y=$*.32,v.add(tt),tt});[-1,1].forEach($=>{let tt=new Ct(new Qe(.068,.011,6,16,Math.PI*.9),ge(ze.capelli));tt.position.set($*.16,.02,.412),tt.rotation.set(0,$*.32,Math.PI*.05),v.add(tt);let G=new Ct(new xn(.014,.1,4,8),ge("#3a2620"));G.position.set($*.165,.15,.4),G.rotation.set(0,$*.35,$*(Math.PI/2-.12)),v.add(G);let J=new Ct(new Jn(.06,20),new Le({color:"#e88a80",transparent:!0,opacity:.35,depthWrite:!1}));J.position.set($*.25,-.1,.38),J.rotation.y=$*.6,v.add(J);let lt=new Ct(new Qe(.035,.007,6,18),ge(ze.oro,{metalness:.9,roughness:.25}));lt.position.set($*.43,-.12,.02),lt.rotation.y=Math.PI/2,v.add(lt)});let T=new Ct(new Me(.032,12,10),ge(ze.pelleOmbra,{roughness:.6}));T.position.set(0,-.08,.45),v.add(T);let R=new Ct(new Qe(.055,.011,8,20,Math.PI),ge("#9c3f45",{roughness:.4}));R.position.set(0,-.19,.42),R.rotation.set(.15,0,Math.PI),v.add(R);let S=new le;v.add(S),[-1,1].forEach($=>{let tt=new Ct(new Me(.49,32,16,$<0?-Math.PI/2+.025:Math.PI/2+.025,Math.PI-.05,0,Math.PI*.36),n);tt.scale.set(.99,1.07,1),tt.rotation.z=$<0?.1:-.1,v.add(tt)});let M=new Ct(new Me(.49,32,16,Math.PI,Math.PI,0,Math.PI*.66),n);M.scale.set(.99,1.07,1),v.add(M),[-1,1].forEach($=>{let tt=new Ct(new Me(.495,20,16,$<0?-Math.PI*.05:Math.PI*.75,Math.PI*.3,Math.PI*.2,Math.PI*.42),n);tt.scale.set(.99,1.07,1),v.add(tt)});let C=[];for(let $=0;$<=12;$++){let tt=$/12;C.push(new vt(.47+Math.sin(tt*Math.PI)*.035-tt*.06,.05-tt*1.32))}let H=new Ct(new ji(C,40,Math.PI*.36,Math.PI*1.28),n);S.add(H);let F=[-1,1].map($=>{let tt=new le;tt.position.set($*.36,-.05,.12);let G=new Ct(new xn(.075,.85,6,10),n);return G.position.y=-.5,G.scale.set(1.15,1,.6),tt.add(G),tt.rotation.z=$*.12,S.add(tt),tt});[-1,1].forEach($=>{let tt=new Ct(new xn(.06,.5,6,10),n);tt.position.set($*.36,-.12,.24),tt.rotation.z=$*.08,tt.scale.set(1,1,.6),v.add(tt)});let V=new Ct(new Jn(.6,32),new Le({color:"#3a1d17",transparent:!0,opacity:.18,depthWrite:!1}));V.rotation.x=-Math.PI/2,V.position.y=.005,i.add(V);let Q=0,W=2.5,j=0,z=0,rt=0,at=0;function pt($,tt={}){Q+=$,at+=((tt.cammina?1:0)-at)*Math.min($*4,1),rt+=$*7*at;let G=Math.sin(rt)*at;o[0].rotation.x=G*.55,o[1].rotation.x=-G*.55,t.position.y=Math.abs(Math.cos(rt))*.05*at+Math.sin(Q*2)*.008,u.scale.y=1+Math.sin(Q*2)*.012,tt.saluta?z=Math.min(z+$*3,1):z=Math.max(z-$*2.5,0),f[0].rotation.x=-G*.45,f[1].rotation.x=G*.45*(1-z)-z*.35,f[1].rotation.z=.16+z*2.05+Math.sin(Q*9)*.22*z,f[0].rotation.z=-.16-Math.sin(Q*1.3)*.02;let J=tt.guardaX||0,lt=tt.guardaY||0;v.rotation.y+=(J*.6+Math.sin(Q*.7)*.06-v.rotation.y)*Math.min($*5,1),v.rotation.x+=(lt*.3-v.rotation.x)*Math.min($*5,1),v.rotation.z=Math.sin(Q*.9)*.03+z*.08,S.rotation.x=Math.sin(Q*1.6)*.02+G*.04-v.rotation.x*.6,F.forEach((Tt,it)=>{Tt.rotation.x=Math.sin(Q*1.8+it)*.04+at*.08}),W-=$,W<=0&&(j=.16,W=2.5+Math.random()*3),j=Math.max(0,j-$);let st=j>0?Math.sin(j/.16*Math.PI):0;b.forEach(Tt=>{Tt.scale.y=1-st*.9})}return{gruppo:i,aggiorna:pt,testa:v}}var ol="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";var Ri=2,is=(i,t,e=1)=>{let n=i*Math.PI/180,s=t*Math.PI/180;return new I(Math.cos(n)*Math.sin(s),Math.sin(n),Math.cos(n)*Math.cos(s)).multiplyScalar(e)},Ii={lat:45.46,lon:9.19};async function cl(i,t={}){let e=i.dataset.globo||"racconto",n=JSON.parse(i.dataset.mete||"[]"),s=new Yi({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,innerWidth<760?1.5:2)),s.outputColorSpace=pe,s.toneMapping=rr;let r=new Ji,a=new ye(30,1,.1,100);r.add(new $i("#fff8ee","#c79b84",1.7));let o=new ts("#ffffff",2.1);o.position.set(3,6,5),r.add(o);let c=new le;r.add(c);let l=new le;c.add(l),l.add(new Ct(new Me(Ri,64,48),new tn({color:"#f4e8d8",roughness:1})));let h=new Ct(new Me(Ri*1.035,48,32),new Le({color:"#e9c9a8",transparent:!0,opacity:.18,side:Ee,depthWrite:!1}));l.add(h);let u=Uint8Array.from(atob(ol),it=>it.charCodeAt(0)),f=new Int16Array(u.buffer),p=f.length/2,g=new Ei(new Jn(.021,6),new Le({color:"#ffffff",side:Ee}),p),_=new he,m=new Gt("#7a2b24"),d=new Gt("#a5463a");for(let it=0;it<p;it++){let mt=is(f[it*2]/100,f[it*2+1]/100,Ri*1.002);_.position.copy(mt),_.lookAt(mt.clone().multiplyScalar(2)),_.updateMatrix(),g.setMatrixAt(it,_.matrix),g.setColorAt(it,Math.random()<.82?m:d)}l.add(g);let w=new tn({color:"#f2b53a",roughness:.3,metalness:.3}),A=new tn({color:"#6e2a24",roughness:.5}),v=(it,mt,Ot=w)=>{let yt=new le,Xt=is(it,mt);yt.position.copy(Xt.clone().multiplyScalar(Ri)),yt.quaternion.setFromUnitVectors(new I(0,1,0),Xt);let P=new Ct(new _n(.008,.008,.16,6),A);P.position.y=.08;let oe=new Ct(new Me(.045,16,12),Ot);oe.position.y=.17;let Pt=new Ct(new Qe(.07,.008,6,28),new Le({color:"#f2b53a",transparent:!0,opacity:.8}));return Pt.rotation.x=Math.PI/2,Pt.position.y=.003,yt.add(P,oe,Pt),yt.userData.anello=Pt,l.add(yt),yt};v(Ii.lat,Ii.lon,A);let B=n.map(it=>v(it.lat,it.lon)),b=is(Ii.lat,Ii.lon),T=n.map(it=>{let mt=is(it.lat,it.lon),Ot=b.angleTo(mt),yt=[];for(let Pt=0;Pt<=48;Pt++){let Dt=Pt/48,wt=new I().copy(b).lerp(mt,Dt).normalize();yt.push(wt.multiplyScalar(Ri*(1.005+Math.sin(Math.PI*Dt)*(.12+Ot*.28))))}let Xt=new Zi(yt),P=new nr(Xt,96,.011,6,!1),oe=new Ct(P,new Le({color:"#b6452f"}));return P.setDrawRange(0,0),l.add(oe),{tubo:oe,curva:Xt,totale:P.index.count,fatto:e==="libero"?1:0,bersaglio:e==="libero"?1:0}}),R=new Ct(new er(.035,.12,4),new tn({color:"#ffffff",roughness:.4}));R.visible=!1,l.add(R);let S=Eo();S.gruppo.scale.setScalar(.46),S.gruppo.position.y=Ri-.005,S.gruppo.rotation.y=.35,c.add(S.gruppo);let M=new I(0,1,0),C=(it,mt)=>{let Ot=new Fe().setFromUnitVectors(is(it,mt),M);return new Fe().setFromAxisAngle(M,-.5).multiply(Ot)},H=[C(Ii.lat,Ii.lon),...n.map(it=>C(it.lat,it.lon))];l.quaternion.copy(H[0]);let F=()=>{let it=i.clientWidth,mt=i.clientHeight;if(!it||!mt)return;s.setSize(it,mt,!1),a.aspect=it/mt;let Ot=it/mt<.9,yt=it/mt>1.25&&e==="racconto";c.position.set(yt?Math.min(2.6,it/mt*1.45):0,Ot&&e==="racconto"?1.5:0,0),a.position.set(0,3.2,Ot?17:e==="racconto"?11.6:12.2),a.lookAt(0,Ot&&e==="racconto"?1.9:.85,0),a.updateProjectionMatrix()};new ResizeObserver(F).observe(i),F();let V={x:0,y:0};addEventListener("pointermove",it=>{V.x=(it.clientX/innerWidth-.5)*2,V.y=(it.clientY/innerHeight-.5)*2},{passive:!0});let Q=null,W=0,j=0;if(e==="libero"){i.addEventListener("pointerdown",mt=>{Q=mt.clientX,i.setPointerCapture(mt.pointerId)}),i.addEventListener("pointermove",mt=>{Q!==null&&(j=(mt.clientX-Q)*.006,Q=mt.clientX)});let it=()=>{Q=null};i.addEventListener("pointerup",it),i.addEventListener("pointercancel",it)}let z=i.closest("[data-globo-racconto]"),rt=z?[...z.querySelectorAll("[data-passo]")]:[],at=z?z.querySelector("[data-etichetta]"):null,pt=-1,$=!1,tt=!1,G=performance.now(),J=0,lt=3;new IntersectionObserver(([it])=>{$=it.isIntersecting,$&&!tt&&(tt=!0,G=performance.now(),requestAnimationFrame(Tt))},{rootMargin:"150px"}).observe(i);let st=new I;function Tt(it){if(!$){tt=!1;return}let mt=Math.min((it-G)/1e3,.05);G=it,J+=mt;let Ot=!1;if(e==="racconto"&&z){let yt=z.getBoundingClientRect(),Xt=Math.min(Math.max(-yt.top/(yt.height-innerHeight),0),.9999),P=Math.floor(Xt*H.length);P!==pt&&(pt=P,rt.forEach((Dt,wt)=>Dt.classList.toggle("attivo",wt===pt)),pt>0&&(T[pt-1].bersaglio=1),lt=J+2.6);let oe=H[pt],Pt=l.quaternion.angleTo(oe);if(l.quaternion.rotateTowards(oe,mt*(.5+Pt*1.6)),Ot=Pt>.04,pt>0&&Ot){let Dt=T[pt-1],wt=1-Math.min(Pt/1.2,1);Dt.curva.getPointAt(wt,R.position),Dt.curva.getPointAt(Math.min(wt+.02,1),st),R.lookAt(st.applyMatrix4(l.matrixWorld)),R.rotateX(Math.PI/2),R.visible=!0}else R.visible=!1;if(at){let Dt=pt>0?B[pt-1]:null;Dt&&!Ot?(Dt.getWorldPosition(st),st.project(a),at.style.transform=`translate(${(st.x+1)/2*i.clientWidth}px, ${(1-st.y)/2*i.clientHeight}px)`,at.textContent=n[pt-1].nome,at.classList.add("visibile")):at.classList.remove("visibile")}}else Q===null&&(j+=(.0025-j)*Math.min(mt*1.5,1)),W+=j,l.quaternion.copy(H[0]).premultiply(new Fe().setFromAxisAngle(M,W)),Ot=Math.abs(j)>.004;T.forEach(yt=>{yt.fatto+=(yt.bersaglio-yt.fatto)*Math.min(mt*1.8,1),yt.tubo.geometry.setDrawRange(0,Math.floor(yt.totale*yt.fatto/3)*3)}),B.forEach((yt,Xt)=>{let P=1+(J*.8+Xt*.3)%1*1.6;yt.userData.anello.scale.setScalar(P),yt.userData.anello.material.opacity=.8*(1-(J*.8+Xt*.3)%1)}),S.aggiorna(mt,{cammina:Ot,saluta:!Ot&&(J<lt||J%9<1.8),guardaX:V.x*.6,guardaY:V.y*.4}),s.render(r,a),requestAnimationFrame(Tt)}}function ll(i){let t=new Yi({canvas:i,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,innerWidth<760?1.5:2)),t.outputColorSpace=pe,t.toneMapping=rr;let e=new Ji,n=new ye(26,1,.1,100);e.add(new $i("#fff8ee","#c79b84",1.7));let s=new ts("#ffffff",2.2);s.position.set(2,5,4),e.add(s);let r=Eo();e.add(r.gruppo);let a=()=>{let w=i.clientWidth,A=i.clientHeight;!w||!A||(t.setSize(w,A,!1),n.aspect=w/A,n.position.set(0,1.9,w/A<.8?10.5:8.6),n.lookAt(0,1.5,0),n.updateProjectionMatrix())};new ResizeObserver(a).observe(i),a();let o={x:0,y:0},c=3,l=.25,h=0,u=null,f=0,p=performance.now(),g=!1,_=!1;addEventListener("pointermove",w=>{let A=i.getBoundingClientRect();o.x=Math.max(-1,Math.min(1,((w.clientX-A.left)/A.width-.5)*2)),o.y=Math.max(-1,Math.min(1,((w.clientY-A.top)/A.height-.35)*2))},{passive:!0}),i.addEventListener("pointerdown",w=>{u=w.clientX,c=f+2.4,i.setPointerCapture(w.pointerId)}),i.addEventListener("pointermove",w=>{u!==null&&(h=(w.clientX-u)*.01,u=w.clientX)});let m=()=>{u=null};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),new IntersectionObserver(([w])=>{g=w.isIntersecting,g&&!_&&(_=!0,p=performance.now(),requestAnimationFrame(d))}).observe(i);function d(w){if(!g){_=!1;return}let A=Math.min((w-p)/1e3,.05);p=w,f+=A,l+=h,h*=.92,u===null&&(l+=(.25+Math.sin(f*.4)*.12-l)*Math.min(A*.8,1)),r.gruppo.rotation.y=l,r.aggiorna(A,{saluta:f<c||f%8<1.6,guardaX:o.x-l*.8,guardaY:o.y}),t.render(e,n),requestAnimationFrame(d)}}var hl=async(i,t)=>{try{await t()}catch(e){console.warn(i+" non disponibile",e)}};document.querySelectorAll("[data-globo]").forEach(i=>hl("Mappamondo",()=>cl(i)));document.querySelectorAll("[data-asia-3d]").forEach(i=>hl("Avatar",()=>ll(i)));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
