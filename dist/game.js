(()=>{var Hf=0,ch=1,Vf=2;var mu=1,rl=2,Zn=3,Dn=0,qe=1,nn=2,gi=0,ds=1,lh=2,hh=3,uh=4,Gf=5,Li=100,Wf=101,Xf=102,qf=103,Yf=104,Zf=200,$f=201,Jf=202,Kf=203,Va=204,Ga=205,Qf=206,jf=207,td=208,ed=209,nd=210,id=211,sd=212,rd=213,od=214,Wa=0,Xa=1,qa=2,xs=3,Ya=4,Za=5,$a=6,Ja=7,gu=0,ad=1,cd=2,xi=0,ld=1,hd=2,ud=3,ol=4,fd=5,dd=6,pd=7;var xu=300,_s=301,ys=302,Ka=303,Qa=304,Uo=306,nr=1e3,Ui=1001,ja=1002,ln=1003,md=1004;var Lr=1005;var Pn=1006,fa=1007;var Ni=1008;var jn=1009,_u=1010,yu=1011,ir=1012,al=1013,zi=1014,Ln=1015,ur=1016,cl=1017,ll=1018,vs=1020,vu=35902,Mu=1021,bu=1022,wn=1023,Su=1024,Eu=1025,ps=1026,Ms=1027,hl=1028,ul=1029,Tu=1030,fl=1031;var dl=1033,so=33776,ro=33777,oo=33778,ao=33779,tc=35840,ec=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,cc=37809,lc=37810,hc=37811,uc=37812,fc=37813,dc=37814,pc=37815,mc=37816,gc=37817,xc=37818,_c=37819,yc=37820,vc=37821,co=36492,Mc=36494,bc=36495,wu=36283,Sc=36284,Ec=36285,Tc=36286;var lo=2300,wc=2301,da=2302,fh=2400,dh=2401,ph=2402;var gd=3200,xd=3201;var Au=0,_d=1,pi="",en="srgb",ws="srgb-linear",No="linear",de="srgb";var Yi=7680;var mh=519,yd=512,vd=513,Md=514,Ru=515,bd=516,Sd=517,Ed=518,Td=519,Ac=35044;var gh="300 es",Jn=2e3,ho=2001,_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=1234567,js=Math.PI/180,sr=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function pl(i,t){return(i%t+t)%t}function wd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ad(i,t,e){return i!==t?(e-i)/(t-i):0}function tr(i,t,e){return(1-e)*i+e*t}function Rd(i,t,e,n){return tr(i,t,1-Math.exp(-e*n))}function Cd(i,t=1){return t-Math.abs(pl(i,t*2)-t)}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ld(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dd(i,t){return i+Math.random()*(t-i)}function Ud(i){return i*(.5-Math.random())}function Nd(i){i!==void 0&&(xh=i);let t=xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zd(i){return i*js}function Fd(i){return i*sr}function Od(i){return(i&i-1)===0&&i!==0}function Bd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),l=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*l,c*u,c*f,o*h);break;case"YZY":i.set(c*f,o*l,c*u,o*h);break;case"ZXZ":i.set(c*u,c*f,o*l,o*h);break;case"XZX":i.set(o*l,c*g,c*d,o*h);break;case"YXY":i.set(c*d,o*l,c*g,o*h);break;case"ZYZ":i.set(c*g,c*d,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ml={DEG2RAD:js,RAD2DEG:sr,generateUUID:Kn,clamp:$e,euclideanModulo:pl,mapLinear:wd,inverseLerp:Ad,lerp:tr,damp:Rd,pingpong:Cd,smoothstep:Id,smootherstep:Pd,randInt:Ld,randFloat:Dd,randFloatSpread:Ud,seededRandom:Nd,degToRad:zd,radToDeg:Fd,isPowerOfTwo:Od,ceilPowerOfTwo:Bd,floorPowerOfTwo:kd,setQuaternionFromProperEuler:Hd,normalize:he,denormalize:Tn},Xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,a,o,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],b=s[4],y=s[7],A=s[2],w=s[5],R=s[8];return r[0]=a*_+o*S+c*A,r[3]=a*m+o*b+c*w,r[6]=a*p+o*y+c*R,r[1]=h*_+l*S+u*A,r[4]=h*m+l*b+u*w,r[7]=h*p+l*y+u*R,r[2]=f*_+d*S+g*A,r[5]=f*m+d*b+g*w,r[8]=f*p+d*y+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-n*r*l+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=l*a-o*h,f=o*c-l*r,d=h*r-a*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*h-l*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(l*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*c-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pa=new $t;function Cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=uo("canvas");return i.style.display="block",i}var _h={};function Ks(i){i in _h||(_h[i]=!0,console.warn(i))}function Gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?No:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yh=[.64,.33,.3,.6,.15,.06],vh=[.2126,.7152,.0722],Mh=[.3127,.329],bh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[ws]:{primaries:yh,whitePoint:Mh,transfer:No,toXYZ:bh,fromXYZ:Sh,luminanceCoefficients:vh,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:yh,whitePoint:Mh,transfer:de,toXYZ:bh,fromXYZ:Sh,luminanceCoefficients:vh,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});var Zi,Rc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=uo("canvas")),Zi.width=t.width,Zi.height=t.height;let n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qd=0,fo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ma(s[a].image)):r.push(ma(s[a]))}else r=ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yd=0,sn=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ui,s=Ui,r=Pn,a=Ni,o=wn,c=jn,h=i.DEFAULT_ANISOTROPY,l=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Kn(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nr:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nr:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=xu;sn.DEFAULT_ANISOTROPY=1;var Ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],l=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(l-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(h+1)/2,y=(d+1)/2,A=(p+1)/2,w=(l+f)/4,R=(u+_)/4,C=(g+m)/4;return b>y&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=R/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-l)*(f-l));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-l)/S,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cc=class extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},po=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],l=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||h!==d||l!==g){let m=1-o,p=c*f+h*d+l*g+u*_,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let A=Math.sqrt(b),w=Math.atan2(A,p*S);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let y=o*S;if(c=c*m+f*y,h=h*m+d*y,l=l*m+g*y,u=u*m+_*y,m===1-o){let A=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=A,h*=A,l*=A,u*=A}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],l=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+l*u+c*d-h*f,t[e+1]=c*g+l*f+h*u-o*d,t[e+2]=h*g+l*d+o*f-c*u,t[e+3]=l*g-o*u-c*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*l*u+h*d*g,this._y=h*d*u-f*l*g,this._z=h*l*g+f*d*u,this._w=h*l*u-f*d*g;break;case"YXZ":this._x=f*l*u+h*d*g,this._y=h*d*u-f*l*g,this._z=h*l*g-f*d*u,this._w=h*l*u+f*d*g;break;case"ZXY":this._x=f*l*u-h*d*g,this._y=h*d*u+f*l*g,this._z=h*l*g+f*d*u,this._w=h*l*u-f*d*g;break;case"ZYX":this._x=f*l*u-h*d*g,this._y=h*d*u+f*l*g,this._z=h*l*g-f*d*u,this._w=h*l*u+f*d*g;break;case"YZX":this._x=f*l*u+h*d*g,this._y=h*d*u+f*l*g,this._z=h*l*g-f*d*u,this._w=h*l*u-f*d*g;break;case"XZY":this._x=f*l*u-h*d*g,this._y=h*d*u-f*l*g,this._z=h*l*g+f*d*u,this._w=h*l*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-c)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(l-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+l)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-s*o,this._w=a*l-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,o),u=Math.sin((1-e)*l)/h,f=Math.sin(e*l)/h;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),l=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*h+a*u-o*l,this.y=n+c*l+o*h-r*u,this.z=s+c*u+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ga=new F,Eh=new Un,ei=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Ur.subVectors(this.max,Vs),$i.subVectors(t.a,Vs),Ji.subVectors(t.b,Vs),Ki.subVectors(t.c,Vs),ci.subVectors(Ji,$i),li.subVectors(Ki,Ji),Ti.subVectors($i,Ki);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ti.z,Ti.y,ci.z,0,-ci.x,li.z,0,-li.x,Ti.z,0,-Ti.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ti.y,Ti.x,0];return!xa(e,$i,Ji,Ki,Ur)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,$i,Ji,Ki,Ur))?!1:(Nr.crossVectors(ci,li),e=[Nr.x,Nr.y,Nr.z],xa(e,$i,Ji,Ki,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new F,new F,new F,new F,new F,new F,new F,new F],bn=new F,Dr=new ei,$i=new F,Ji=new F,Ki=new F,ci=new F,li=new F,Ti=new F,Vs=new F,Ur=new F,Nr=new F,wi=new F;function xa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=t.dot(wi),h=e.dot(wi),l=n.dot(wi);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var Zd=new ei,Gs=new F,_a=new F,Fi=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(_a)),this.expandByPoint(Gs.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new F,ya=new F,zr=new F,hi=new F,va=new F,Fr=new F,Ma=new F,Pc=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ya.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(ya);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zr),o=hi.dot(this.direction),c=-hi.dot(zr),h=hi.lengthSq(),l=Math.abs(1-a*a),u,f,d,g;if(l>0)if(u=a*c-o,f=a*o-c,g=r*l,u>=0)if(f>=-g)if(f<=g){let _=1/l;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+h}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+h;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+h;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+h):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ya).addScaledVector(zr,f),d}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),l>=0?(r=(t.min.y-f.y)*l,a=(t.max.y-f.y)*l):(r=(t.max.y-f.y)*l,a=(t.min.y-f.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){va.subVectors(e,t),Fr.subVectors(n,t),Ma.crossVectors(va,Fr);let a=this.direction.dot(Ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,t);let c=o*this.direction.dot(Fr.crossVectors(hi,Fr));if(c<0)return null;let h=o*this.direction.dot(va.cross(hi));if(h<0||c+h>a)return null;let l=-o*hi.dot(Ma);return l<0?null:this.at(l/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,a,o,c,h,l,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,l,u,f,d,g,_,m)}set(t,e,n,s,r,a,o,c,h,l,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*l,d=a*u,g=o*l,_=o*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=d+g*h,e[5]=f-_*h,e[9]=-o*c,e[2]=_-f*h,e[6]=g+d*h,e[10]=a*c}else if(t.order==="YXZ"){let f=c*l,d=c*u,g=h*l,_=h*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*h,e[1]=a*u,e[5]=a*l,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*l,d=c*u,g=h*l,_=h*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*l,e[9]=_-f*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*l,d=a*u,g=o*l,_=o*u;e[0]=c*l,e[4]=g*h-d,e[8]=f*h+_,e[1]=c*u,e[5]=_*h+f,e[9]=d*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*h,g=o*c,_=o*h;e[0]=c*l,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*c,d=a*h,g=o*c,_=o*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=f*u+_,e[5]=a*l,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*l,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($d,t,Jd)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ui.crossVectors(n,an),ui.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ui.crossVectors(n,an)),ui.normalize(),Or.crossVectors(an,ui),s[0]=ui.x,s[4]=Or.x,s[8]=an.x,s[1]=ui.y,s[5]=Or.y,s[9]=an.y,s[2]=ui.z,s[6]=Or.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],b=n[7],y=n[11],A=n[15],w=s[0],R=s[4],C=s[8],M=s[12],v=s[1],I=s[5],k=s[9],V=s[13],K=s[2],rt=s[6],Q=s[10],lt=s[14],Z=s[3],yt=s[7],xt=s[11],Pt=s[15];return r[0]=a*w+o*v+c*K+h*Z,r[4]=a*R+o*I+c*rt+h*yt,r[8]=a*C+o*k+c*Q+h*xt,r[12]=a*M+o*V+c*lt+h*Pt,r[1]=l*w+u*v+f*K+d*Z,r[5]=l*R+u*I+f*rt+d*yt,r[9]=l*C+u*k+f*Q+d*xt,r[13]=l*M+u*V+f*lt+d*Pt,r[2]=g*w+_*v+m*K+p*Z,r[6]=g*R+_*I+m*rt+p*yt,r[10]=g*C+_*k+m*Q+p*xt,r[14]=g*M+_*V+m*lt+p*Pt,r[3]=S*w+b*v+y*K+A*Z,r[7]=S*R+b*I+y*rt+A*yt,r[11]=S*C+b*k+y*Q+A*xt,r[15]=S*M+b*V+y*lt+A*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*h*u-r*o*f+n*h*f+s*o*d-n*c*d)+_*(+e*c*d-e*h*f+r*a*f-s*a*d+s*h*l-r*c*l)+m*(+e*h*u-e*o*d-r*a*u+n*a*d+r*o*l-n*h*l)+p*(-s*o*l-e*c*u+e*o*f+s*a*u-n*a*f+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*h-_*f*h+_*c*d-o*m*d-u*c*p+o*f*p,b=g*f*h-l*m*h-g*c*d+a*m*d+l*c*p-a*f*p,y=l*_*h-g*u*h+g*o*d-a*_*d-l*o*p+a*u*p,A=g*u*c-l*_*c-g*o*f+a*_*f+l*o*m-a*u*m,w=e*S+n*b+s*y+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=S*R,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*R,t[2]=(o*m*r-_*c*r+_*s*h-n*m*h-o*s*p+n*c*p)*R,t[3]=(u*c*r-o*f*r-u*s*h+n*f*h+o*s*d-n*c*d)*R,t[4]=b*R,t[5]=(l*m*r-g*f*r+g*s*d-e*m*d-l*s*p+e*f*p)*R,t[6]=(g*c*r-a*m*r-g*s*h+e*m*h+a*s*p-e*c*p)*R,t[7]=(a*f*r-l*c*r+l*s*h-e*f*h-a*s*d+e*c*d)*R,t[8]=y*R,t[9]=(g*u*r-l*_*r-g*n*d+e*_*d+l*n*p-e*u*p)*R,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*p+e*o*p)*R,t[11]=(l*o*r-a*u*r-l*n*h+e*u*h+a*n*d-e*o*d)*R,t[12]=A*R,t[13]=(l*_*s-g*u*s+g*n*f-e*_*f-l*n*m+e*u*m)*R,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*R,t[15]=(a*u*s-l*o*s+l*n*c-e*u*c-a*n*f+e*o*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+n,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,u=o+o,f=r*h,d=r*l,g=r*u,_=a*l,m=a*u,p=o*u,S=c*h,b=c*l,y=c*u,A=n.x,w=n.y,R=n.z;return s[0]=(1-(_+p))*A,s[1]=(d+y)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(f+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+b)*R,s[9]=(m-S)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Qi.set(s[0],s[1],s[2]).length(),a=Qi.set(s[4],s[5],s[6]).length(),o=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);let h=1/r,l=1/a,u=1/o;return Sn.elements[0]*=h,Sn.elements[1]*=h,Sn.elements[2]*=h,Sn.elements[4]*=l,Sn.elements[5]*=l,Sn.elements[6]*=l,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Jn){let c=this.elements,h=2*r/(e-t),l=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(o===Jn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ho)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Jn){let c=this.elements,h=1/(e-t),l=1/(n-s),u=1/(a-r),f=(e+t)*h,d=(n+s)*l,g,_;if(o===Jn)g=(a+r)*u,_=-2*u;else if(o===ho)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qi=new F,Sn=new ue,$d=new F(0,0,0),Jd=new F(1,1,1),ui=new F,Or=new F,an=new F,Th=new ue,wh=new Un,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wh.setFromEuler(this),this.setFromQuaternion(wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kd=0,Ah=new F,ji=new Un,Xn=new ue,Br=new F,Ws=new F,Qd=new F,jd=new Un,Rh=new F(1,0,0),Ch=new F(0,1,0),Ih=new F(0,0,1),Ph={type:"added"},tp={type:"removed"},ts={type:"childadded",child:null},ba={type:"childremoved",child:null},Re=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new pn,n=new Un,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new $t}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Ah.copy(t).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ws,Br,this.up):Xn.lookAt(Br,Ws,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Xn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ph),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tp),ba.child=t,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ph),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new F(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new F,qn=new F,Sa=new F,Yn=new F,es=new F,ns=new F,Lh=new F,Ea=new F,Ta=new F,wa=new F,Aa=new Ae,Ra=new Ae,Ca=new Ae,mi=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),qn.subVectors(n,e),Sa.subVectors(t,e);let a=En.dot(En),o=En.dot(qn),c=En.dot(Sa),h=qn.dot(qn),l=qn.dot(Sa),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(h*c-o*l)*f,g=(a*l-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Aa,r.x),a.addScaledVector(Ra,r.y),a.addScaledVector(Ca,r.z),a}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),qn.subVectors(t,e),En.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;es.subVectors(s,n),ns.subVectors(r,n),Ea.subVectors(t,n);let c=es.dot(Ea),h=ns.dot(Ea);if(c<=0&&h<=0)return e.copy(n);Ta.subVectors(t,s);let l=es.dot(Ta),u=ns.dot(Ta);if(l>=0&&u<=l)return e.copy(s);let f=c*u-l*h;if(f<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(es,a);wa.subVectors(t,r);let d=es.dot(wa),g=ns.dot(wa);if(g>=0&&d<=g)return e.copy(r);let _=d*h-c*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(ns,o);let m=l*g-d*u;if(m<=0&&u-l>=0&&d-g>=0)return Lh.subVectors(r,s),o=(u-l)/(u-l+(d-g)),e.copy(s).addScaledVector(Lh,o);let p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(es,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=pl(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ia(a,r,t+1/3),this.g=Ia(a,r,t),this.b=Ia(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let n=Iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ne.fromWorkingColorSpace(Xe.copy(this),t),Math.round($e(Xe.r*255,0,255))*65536+Math.round($e(Xe.g*255,0,255))*256+Math.round($e(Xe.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,l=(o+a)/2;if(o===a)c=0,h=0;else{let u=a-o;switch(h=l<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=en){ne.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(kr);let n=tr(fi.h,kr.h,e),s=tr(fi.s,kr.s,e),r=tr(fi.l,kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Nt;Nt.NAMES=Iu;var ep=0,yi=class extends _i{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Kn(),this.name="",this.blending=ds,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ye=class extends yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new F,Hr=new Xt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ac&&(t.usage=this.usage),t}};var go=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xo=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},np=0,dn=new ue,Pa=new Re,is=new F,cn=new ei,Xs=new ei,Fe=new F,Ke=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?xo:go)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(cn.min,Xs.min),cn.expandByPoint(Fe),Fe.addVectors(cn.max,Xs.max),cn.expandByPoint(Fe)):(cn.expandByPoint(Xs.min),cn.expandByPoint(Xs.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Fe.fromBufferAttribute(o,h),c&&(is.fromBufferAttribute(t,h),Fe.add(is)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new F,c[C]=new F;let h=new F,l=new F,u=new F,f=new Xt,d=new Xt,g=new Xt,_=new F,m=new F;function p(C,M,v){h.fromBufferAttribute(n,C),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),l.sub(h),u.sub(h),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(l,-g.x).multiplyScalar(I),o[C].add(_),o[M].add(_),o[v].add(_),c[C].add(m),c[M].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,M=S.length;C<M;++C){let v=S[C],I=v.start,k=v.count;for(let V=I,K=I+k;V<K;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let b=new F,y=new F,A=new F,w=new F;function R(C){A.fromBufferAttribute(s,C),w.copy(A);let M=o[C];b.copy(M),b.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(w,M);let I=y.dot(c[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,I)}for(let C=0,M=S.length;C<M;++C){let v=S[C],I=v.start,k=v.count;for(let V=I,K=I+k;V<K;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,h=new F,l=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),o.add(l),c.add(l),h.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,c){let h=o.array,l=o.itemSize,u=o.normalized,f=new h.constructor(c.length*l),d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*l;for(let p=0;p<l;p++)f[g++]=h[d++]}return new Ie(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let l=0,u=h.length;l<u;l++){let f=h[l],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let u=0,f=h.length;u<f;u++){let d=h[u];l.push(d.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let l=s[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],u=r[h];for(let f=0,d=u.length;f<d;f++)l.push(u[f].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,l=a.length;h<l;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dh=new ue,Ai=new Pc,Vr=new Fi,Uh=new F,Gr=new F,Wr=new F,Xr=new F,La=new F,qr=new F,Nh=new F,Yr=new F,Tt=class extends Re{constructor(t=new Ke,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){qr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=o[c],u=r[c];l!==0&&(La.fromBufferAttribute(u,t),a?qr.addScaledVector(La,l):qr.addScaledVector(La.sub(e),l))}e.add(qr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Vr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Vr,Uh)===null||Ai.origin.distanceToSquared(Uh)>(t.far-t.near)**2))&&(Dh.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,A=b;y<A;y+=3){let w=o.getX(y),R=o.getX(y+1),C=o.getX(y+2);s=Zr(this,p,t,n,h,l,u,w,R,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=Zr(this,a,t,n,h,l,u,S,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,A=b;y<A;y+=3){let w=y,R=y+1,C=y+2;s=Zr(this,p,t,n,h,l,u,w,R,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=m,b=m+1,y=m+2;s=Zr(this,a,t,n,h,l,u,S,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ip(i,t,e,n,s,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Dn,o),c===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Yr);return h<e.near||h>e.far?null:{distance:h,point:Yr.clone(),object:i}}function Zr(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,Gr),i.getVertexPosition(c,Wr),i.getVertexPosition(h,Xr);let l=ip(i,t,e,n,Gr,Wr,Xr,Nh);if(l){let u=new F;mi.getBarycoord(Nh,Gr,Wr,Xr,u),s&&(l.uv=mi.getInterpolatedAttribute(s,o,c,h,u,new Xt)),r&&(l.uv1=mi.getInterpolatedAttribute(r,o,c,h,u,new Xt)),a&&(l.normal=mi.getInterpolatedAttribute(a,o,c,h,u,new F),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new F,materialIndex:0};mi.getNormal(Gr,Wr,Xr,f.normal),l.face=f,l.barycoord=u}return l}var le=class i extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],l=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(u,2));function g(_,m,p,S,b,y,A,w,R,C,M){let v=y/R,I=A/C,k=y/2,V=A/2,K=w/2,rt=R+1,Q=C+1,lt=0,Z=0,yt=new F;for(let xt=0;xt<Q;xt++){let Pt=xt*I-V;for(let Wt=0;Wt<rt;Wt++){let re=Wt*v-k;yt[_]=re*S,yt[m]=Pt*b,yt[p]=K,h.push(yt.x,yt.y,yt.z),yt[_]=0,yt[m]=0,yt[p]=w>0?1:-1,l.push(yt.x,yt.y,yt.z),u.push(Wt/R),u.push(1-xt/C),lt+=1}}for(let xt=0;xt<C;xt++)for(let Pt=0;Pt<R;Pt++){let Wt=f+Pt+rt*xt,re=f+Pt+rt*(xt+1),$=f+(Pt+1)+rt*(xt+1),ut=f+(Pt+1)+rt*xt;c.push(Wt,re,ut),c.push(re,$,ut),Z+=6}o.addGroup(d,Z,M),d+=Z,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function sp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var gl={clone:bs,merge:Ze},rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},_o=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new F,zh=new Xt,Fh=new Xt,Je=class extends _o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,zh,Fh),e.subVectors(Fh,zh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ss=-90,rs=1,Lc=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(ss,rs,t,e);s.layers=this.layers,this.add(s);let r=new Je(ss,rs,t,e);r.layers=this.layers,this.add(r);let a=new Je(ss,rs,t,e);a.layers=this.layers,this.add(a);let o=new Je(ss,rs,t,e);o.layers=this.layers,this.add(o);let c=new Je(ss,rs,t,e);c.layers=this.layers,this.add(c);let h=new Je(ss,rs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,l]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},yo=class extends sn{constructor(t,e,n,s,r,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dc=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:gi});r.uniforms.tEquirect.value=e;let a=new Tt(s,r),o=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Pn),new Lc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Da=new F,ap=new F,cp=new $t,$n=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Da.subVectors(n,e).cross(ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cp.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new Fi,$r=new F,rr=class{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],l=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],b=s[14],y=s[15];if(n[0].setComponents(c-r,f-h,m-d,y-p).normalize(),n[1].setComponents(c+r,f+h,m+d,y+p).normalize(),n[2].setComponents(c+a,f+l,m+g,y+S).normalize(),n[3].setComponents(c-a,f-l,m-g,y-S).normalize(),n[4].setComponents(c-o,f-u,m-_,y-b).normalize(),e===Jn)n[5].setComponents(c+o,f+u,m+_,y+b).normalize();else if(e===ho)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lp(i){let t=new WeakMap;function e(o,c){let h=o.array,l=o.usage,u=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,l),o.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,h){let l=c.array,u=c.updateRanges;if(i.bindBuffer(h,o),u.length===0)i.bufferSubData(h,0,l);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var ve=class i extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,l=c+1,u=t/o,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<l;p++){let S=p*f-a;for(let b=0;b<h;b++){let y=b*u-r;g.push(y,-S,0),_.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let b=S+h*p,y=S+h*(p+1),A=S+1+h*(p+1),w=S+1+h*p;d.push(b,y,w),d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
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
#endif`,c0=`struct PhysicalMaterial {
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
}`,l0=`
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
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
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z0=`float getShadowMask() {
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
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,_m=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Pm=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,zm=`#define TOON
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
}`,Fm=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:hp,alphahash_pars_fragment:up,alphamap_fragment:fp,alphamap_pars_fragment:dp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:xp,batching_pars_vertex:_p,batching_vertex:yp,begin_vertex:vp,beginnormal_vertex:Mp,bsdfs:bp,iridescence_fragment:Sp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Rp,color_fragment:Cp,color_pars_fragment:Ip,color_pars_vertex:Pp,color_vertex:Lp,common:Dp,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:zp,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:kp,colorspace_pars_fragment:Hp,envmap_fragment:Vp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Wp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:n0,envmap_vertex:qp,fog_vertex:Yp,fog_pars_vertex:Zp,fog_fragment:$p,fog_pars_fragment:Jp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Qp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:t0,lights_pars_begin:e0,lights_toon_fragment:i0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:o0,lights_physical_fragment:a0,lights_physical_pars_fragment:c0,lights_fragment_begin:l0,lights_fragment_maps:h0,lights_fragment_end:u0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:m0,map_fragment:g0,map_pars_fragment:x0,map_particle_fragment:_0,map_particle_pars_fragment:y0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:M0,morphinstance_vertex:b0,morphcolor_vertex:S0,morphnormal_vertex:E0,morphtarget_pars_vertex:T0,morphtarget_vertex:w0,normal_fragment_begin:A0,normal_fragment_maps:R0,normal_pars_fragment:C0,normal_pars_vertex:I0,normal_vertex:P0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:z0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:k0,dithering_fragment:H0,dithering_pars_fragment:V0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:W0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:q0,shadowmap_vertex:Y0,shadowmask_pars_fragment:Z0,skinbase_vertex:$0,skinning_pars_vertex:J0,skinning_vertex:K0,skinnormal_vertex:Q0,specularmap_fragment:j0,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:cm,background_vert:lm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:fm,cube_vert:dm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:xm,distanceRGBA_frag:_m,equirect_vert:ym,equirect_frag:vm,linedashed_vert:Mm,linedashed_frag:bm,meshbasic_vert:Sm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Im,meshphong_vert:Pm,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Um,meshtoon_vert:Nm,meshtoon_frag:zm,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:km,sprite_vert:Hm,sprite_frag:Vm},St={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},In={basic:{uniforms:Ze([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ze([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ze([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ze([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ze([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ze([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ze([St.points,St.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ze([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ze([St.common,St.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ze([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ze([St.sprite,St.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ze([St.common,St.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ze([St.lights,St.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};In.physical={uniforms:Ze([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Jr={r:0,b:0,g:0},Ci=new pn,Gm=new ue;function Wm(i,t,e,n,s,r,a){let o=new Nt(0),c=r===!0?0:1,h,l,u=null,f=0,d=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function _(S){let b=!1,y=g(S);y===null?p(o,c):y&&y.isColor&&(p(y,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,b){let y=g(b);y&&(y.isCubeTexture||y.mapping===Uo)?(l===void 0&&(l=new Tt(new le(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:bs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Ci.copy(b.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(Ci)),l.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,(u!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Tt(new ve(2,2),new mn({name:"BackgroundMaterial",uniforms:bs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function p(S,b){S.getRGB(Jr,Pu(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(o,c)},render:_,addToRenderList:m}}function Xm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,I,k,V,K){let rt=!1,Q=u(V,k,I);r!==Q&&(r=Q,h(r.object)),rt=d(v,V,k,K),rt&&g(v,V,k,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(rt||a)&&(a=!1,y(v,I,k,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function h(v){return i.bindVertexArray(v)}function l(v){return i.deleteVertexArray(v)}function u(v,I,k){let V=k.wireframe===!0,K=n[v.id];K===void 0&&(K={},n[v.id]=K);let rt=K[I.id];rt===void 0&&(rt={},K[I.id]=rt);let Q=rt[V];return Q===void 0&&(Q=f(c()),rt[V]=Q),Q}function f(v){let I=[],k=[],V=[];for(let K=0;K<e;K++)I[K]=0,k[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:V,object:v,attributes:{},index:null}}function d(v,I,k,V){let K=r.attributes,rt=I.attributes,Q=0,lt=k.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let xt=K[Z],Pt=rt[Z];if(Pt===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(Pt=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(Pt=v.instanceColor)),xt===void 0||xt.attribute!==Pt||Pt&&xt.data!==Pt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==V}function g(v,I,k,V){let K={},rt=I.attributes,Q=0,lt=k.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let xt=rt[Z];xt===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor));let Pt={};Pt.attribute=xt,xt&&xt.data&&(Pt.data=xt.data),K[Z]=Pt,Q++}r.attributes=K,r.attributesNum=Q,r.index=V}function _(){let v=r.newAttributes;for(let I=0,k=v.length;I<k;I++)v[I]=0}function m(v){p(v,0)}function p(v,I){let k=r.newAttributes,V=r.enabledAttributes,K=r.attributeDivisors;k[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),K[v]!==I&&(i.vertexAttribDivisor(v,I),K[v]=I)}function S(){let v=r.newAttributes,I=r.enabledAttributes;for(let k=0,V=I.length;k<V;k++)I[k]!==v[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function b(v,I,k,V,K,rt,Q){Q===!0?i.vertexAttribIPointer(v,I,k,K,rt):i.vertexAttribPointer(v,I,k,V,K,rt)}function y(v,I,k,V){_();let K=V.attributes,rt=k.getAttributes(),Q=I.defaultAttributeValues;for(let lt in rt){let Z=rt[lt];if(Z.location>=0){let yt=K[lt];if(yt===void 0&&(lt==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),lt==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor)),yt!==void 0){let xt=yt.normalized,Pt=yt.itemSize,Wt=t.get(yt);if(Wt===void 0)continue;let re=Wt.buffer,$=Wt.type,ut=Wt.bytesPerElement,It=$===i.INT||$===i.UNSIGNED_INT||yt.gpuType===al;if(yt.isInterleavedBufferAttribute){let bt=yt.data,Ft=bt.stride,Y=yt.offset;if(bt.isInstancedInterleavedBuffer){for(let pt=0;pt<Z.locationSize;pt++)p(Z.location+pt,bt.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let pt=0;pt<Z.locationSize;pt++)m(Z.location+pt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let pt=0;pt<Z.locationSize;pt++)b(Z.location+pt,Pt/Z.locationSize,$,xt,Ft*ut,(Y+Pt/Z.locationSize*pt)*ut,It)}else{if(yt.isInstancedBufferAttribute){for(let bt=0;bt<Z.locationSize;bt++)p(Z.location+bt,yt.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let bt=0;bt<Z.locationSize;bt++)m(Z.location+bt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let bt=0;bt<Z.locationSize;bt++)b(Z.location+bt,Pt/Z.locationSize,$,xt,Pt*ut,Pt/Z.locationSize*bt*ut,It)}}else if(Q!==void 0){let xt=Q[lt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(Z.location,xt);break;case 3:i.vertexAttrib3fv(Z.location,xt);break;case 4:i.vertexAttrib4fv(Z.location,xt);break;default:i.vertexAttrib1fv(Z.location,xt)}}}}S()}function A(){C();for(let v in n){let I=n[v];for(let k in I){let V=I[k];for(let K in V)l(V[K].object),delete V[K];delete I[k]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let k in I){let V=I[k];for(let K in V)l(V[K].object),delete V[K];delete I[k]}delete n[v.id]}function R(v){for(let I in n){let k=n[I];if(k[v.id]===void 0)continue;let V=k[v.id];for(let K in V)l(V[K].object),delete V[K];delete k[v.id]}}function C(){M(),a=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function qm(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),e.update(l,n,u))}function o(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let d=0;for(let g=0;g<u;g++)d+=l[g];e.update(d,n,1)}function c(h,l,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h.length;g++)a(h[g],l[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,l,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=l[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ym(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let C=R===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==jn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ln&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:A,maxSamples:w}}function Zm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new $n,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=l(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?l(null):h();else{let S=r?0:n,b=S*4,y=p.clippingState||null;c.value=y,y=l(g,f,b,d);for(let A=0;A!==b;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=d;b!==_;++b,y+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function $m(i){let t=new WeakMap;function e(a,o){return o===Ka?a.mapping=_s:o===Qa&&(a.mapping=ys),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ka||o===Qa)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new Dc(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var vo=class extends _o{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fs=4,Oh=[.125,.215,.35,.446,.526,.582],Di=20,Ua=new vo,Bh=new Nt,Na=null,za=0,Fa=0,Oa=!1,Pi=(1+Math.sqrt(5))/2,os=1/Pi,kh=[new F(-Pi,os,0),new F(Pi,os,0),new F(-os,0,Pi),new F(os,0,Pi),new F(0,Pi,-os),new F(0,Pi,os),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Mo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Na=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,za,Fa),this._renderer.xr.enabled=Oa,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ur,format:wn,colorSpace:ws,depthBuffer:!1},s=Hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=Km(r,t,e)}return s}_compileMaterial(t){let e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,s){let o=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(Bh),l.toneMapping=xi,l.autoClear=!1;let d=new ye({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new Tt(new le,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Bh),_=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));let b=this._cubeSize;Kr(s,S*b,p>2?b:0,b,b),l.setRenderTarget(s),_&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_s||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ua)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kh[(s-r-1)%kh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new Tt(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Di-1),_=r/g,m=isFinite(r)?1+Math.floor(l*_):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);let p=[],S=0;for(let R=0;R<Di;++R){let C=R/_,M=Math.exp(-C*C/2);p.push(M),R===0?S+=M:R<m&&(S+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let y=this._sizeLods[s],A=3*y*(s>b-fs?s-b+fs:0),w=4*(this._cubeSize-y);Kr(e,A,w,3*y,2*y),c.setRenderTarget(e),c.render(u,Ua)}};function Jm(i){let t=[],e=[],n=[],s=i,r=i-fs+1+Oh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-fs?c=Oh[a-i+fs-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),l=-h,u=1+h,f=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),b=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let w=0;w<d;w++){let R=w%3*2/3-1,C=w>2?0:-1,M=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];S.set(M,_*g*w),b.set(f,m*g*w);let v=[w,w,w,w,w,w];y.set(v,p*g*w)}let A=new Ke;A.setAttribute("position",new Ie(S,_)),A.setAttribute("uv",new Ie(b,m)),A.setAttribute("faceIndex",new Ie(y,p)),t.push(A),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hh(i,t,e){let n=new ti(i,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Km(i,t,e){let n=new Float32Array(Di),s=new F(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Vh(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Gh(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function xl(){return`

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
	`}function Qm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===Ka||c===Qa,l=c===_s||c===ys;if(h||l){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Mo(i)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return h&&d&&d.height>0||l&&d&&s(d)?(e===null&&(e=new Mo(i)),u=h?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tg(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function h(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let S=d.array;_=d.version;for(let b=0,y=S.length;b<y;b+=3){let A=S[b+0],w=S[b+1],R=S[b+2];f.push(A,w,w,R,R,A)}}else if(g!==void 0){let S=g.array;_=g.version;for(let b=0,y=S.length/3-1;b<y;b+=3){let A=b+0,w=b+1,R=b+2;f.push(A,w,w,R,R,A)}}else return;let m=new(Cu(f)?xo:go)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function l(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function eg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function h(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function l(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function ng(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ig(i,t,e){let n=new WeakMap,s=new Ae;function r(a,o,c){let h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l!==void 0?l.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*A*4*u),R=new po(w,y,A,u);R.type=Ln,R.needsUpdate=!0;let C=b*4;for(let v=0;v<u;v++){let I=m[v],k=p[v],V=S[v],K=y*A*4*v;for(let rt=0;rt<I.count;rt++){let Q=rt*C;d===!0&&(s.fromBufferAttribute(I,rt),w[K+Q+0]=s.x,w[K+Q+1]=s.y,w[K+Q+2]=s.z,w[K+Q+3]=0),g===!0&&(s.fromBufferAttribute(k,rt),w[K+Q+4]=s.x,w[K+Q+5]=s.y,w[K+Q+6]=s.z,w[K+Q+7]=0),_===!0&&(s.fromBufferAttribute(V,rt),w[K+Q+8]=s.x,w[K+Q+9]=s.y,w[K+Q+10]=s.z,w[K+Q+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new Xt(y,A)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<h.length;_++)d+=h[_];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function sg(i,t,e,n){let s=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,u=t.get(c,l);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var bo=class extends sn{constructor(t,e,n,s,r,a,o,c,h,l=ps){if(l!==ps&&l!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ps&&(n=zi),n===void 0&&l===Ms&&(n=vs),super(null,s,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Du=new sn,Wh=new bo(1,1),Uu=new po,Nu=new Ic,zu=new yo,Xh=[],qh=[],Yh=new Float32Array(16),Zh=new Float32Array(9),$h=new Float32Array(4);function As(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xh[s];if(r===void 0&&(r=new Float32Array(s),Xh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zo(i,t){let e=qh[t];e===void 0&&(e=new Int32Array(t),qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;$h.set(n),i.uniformMatrix2fv(this.addr,!1,$h),Ne(e,n)}}function hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),Ne(e,n)}}function ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Yh.set(n),i.uniformMatrix4fv(this.addr,!1,Yh),Ne(e,n)}}function fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wh.compareFunction=Ru,r=Wh):r=Du,e.setTexture2D(t||r,s)}function Mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nu,s)}function bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zu,s)}function Sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uu,s)}function Eg(i){switch(i){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return cg;case 35674:return lg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return _g;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Sg}}function Tg(i,t){i.uniform1fv(this.addr,t)}function wg(i,t){let e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function Ag(i,t){let e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function Rg(i,t){let e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function Cg(i,t){let e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ig(i,t){let e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){let e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lg(i,t){i.uniform1iv(this.addr,t)}function Dg(i,t){i.uniform2iv(this.addr,t)}function Ug(i,t){i.uniform3iv(this.addr,t)}function Ng(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function kg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Du,r[a])}function Hg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nu,r[a])}function Vg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zu,r[a])}function Gg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uu,r[a])}function Wg(i){switch(i){case 5126:return Tg;case 35664:return wg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Ig;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Dg;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return zg;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}var Uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}},Nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wg(e.type)}},zc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ba=/(\w+)(\])?(\[|\.)?/g;function Jh(i,t){i.seq.push(t),i.map[t.id]=t}function Xg(i,t,e){let n=i.name,s=n.length;for(Ba.lastIndex=0;;){let r=Ba.exec(n),a=Ba.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Jh(e,h===void 0?new Uc(o,i,t):new Nc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new zc(o),Jh(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Xg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var qg=37297,Yg=0;function Zg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Qh=new $t;function $g(i){ne._getMatrix(Qh,ne.workingColorSpace,i);let t=`mat3( ${Qh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case No:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zg(i.getShaderSource(t),a)}else return s}function Jg(i,t){let e=$g(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kg(i,t){let e;switch(t){case ld:e="Linear";break;case hd:e="Reinhard";break;case ud:e="Cineon";break;case ol:e="ACESFilmic";break;case dd:e="AgX";break;case pd:e="Neutral";break;case fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qr=new F;function Qg(){ne.getLuminanceCoefficients(Qr);let i=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function tx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ex(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qs(i){return i!==""}function tu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(i){return i.replace(nx,sx)}var ix=new Map;function sx(i,t){let e=Jt[t];if(e===void 0){let n=ix.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}var rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(i){return i.replace(rx,ox)}function ox(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ax(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function cx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case ys:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ys&&(t="ENVMAP_MODE_REFRACTION"),t}function hx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gu:t="ENVMAP_BLENDING_MULTIPLY";break;case ad:t="ENVMAP_BLENDING_MIX";break;case cd:t="ENVMAP_BLENDING_ADD";break}return t}function ux(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ax(e),h=cx(e),l=lx(e),u=hx(e),f=ux(e),d=jg(e),g=tx(r),_=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==xi?Kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Jg("linearToOutputTexel",e.outputColorSpace),Qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Fc(a),a=tu(a,e),a=eu(a,e),o=Fc(o),o=tu(o,e),o=eu(o,e),a=nu(a),o=nu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+a,y=S+p+o,A=Kh(s,s.VERTEX_SHADER,b),w=Kh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(I){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(A).trim(),K=s.getShaderInfoLog(w).trim(),rt=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,w);else{let lt=jh(s,A,"vertex"),Z=jh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+lt+`
`+Z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||K==="")&&(Q=!1);Q&&(I.diagnostics={runnable:rt,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(A),s.deleteShader(w),C=new gs(s,_),M=ex(s,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,qg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}var dx=0,Oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bc(t),e.set(t,n)),n}},Bc=class{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}};function px(i,t,e,n,s,r,a){let o=new mo,c=new Oc,h=new Set,l=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,v,I,k,V){let K=k.fog,rt=V.geometry,Q=M.isMeshStandardMaterial?k.environment:null,lt=(M.isMeshStandardMaterial?e:t).get(M.envMap||Q),Z=lt&&lt.mapping===Uo?lt.image.height:null,yt=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let xt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pt=xt!==void 0?xt.length:0,Wt=0;rt.morphAttributes.position!==void 0&&(Wt=1),rt.morphAttributes.normal!==void 0&&(Wt=2),rt.morphAttributes.color!==void 0&&(Wt=3);let re,$,ut,It;if(yt){let te=In[yt];re=te.vertexShader,$=te.fragmentShader}else re=M.vertexShader,$=M.fragmentShader,c.update(M),ut=c.getVertexShaderID(M),It=c.getFragmentShaderID(M);let bt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Y=V.isInstancedMesh===!0,pt=V.isBatchedMesh===!0,Bt=!!M.map,_t=!!M.matcap,ee=!!lt,D=!!M.aoMap,we=!!M.lightMap,jt=!!M.bumpMap,Kt=!!M.normalMap,U=!!M.displacementMap,nt=!!M.emissiveMap,it=!!M.metalnessMap,E=!!M.roughnessMap,x=M.anisotropy>0,P=M.clearcoat>0,O=M.dispersion>0,G=M.iridescence>0,X=M.sheen>0,ft=M.transmission>0,ct=x&&!!M.anisotropyMap,j=P&&!!M.clearcoatMap,Et=P&&!!M.clearcoatNormalMap,tt=P&&!!M.clearcoatRoughnessMap,st=G&&!!M.iridescenceMap,wt=G&&!!M.iridescenceThicknessMap,Ct=X&&!!M.sheenColorMap,mt=X&&!!M.sheenRoughnessMap,Ot=!!M.specularMap,Rt=!!M.specularColorMap,Yt=!!M.specularIntensityMap,L=ft&&!!M.transmissionMap,vt=ft&&!!M.thicknessMap,J=!!M.gradientMap,et=!!M.alphaMap,ot=M.alphaTest>0,gt=!!M.alphaHash,kt=!!M.extensions,ie=xi;M.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ie=i.toneMapping);let fe={shaderID:yt,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:$,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:It,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:pt,batchingColor:pt&&V._colorsTexture!==null,instancing:Y,instancingColor:Y&&V.instanceColor!==null,instancingMorph:Y&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ws,alphaToCoverage:!!M.alphaToCoverage,map:Bt,matcap:_t,envMap:ee,envMapMode:ee&&lt.mapping,envMapCubeUVHeight:Z,aoMap:D,lightMap:we,bumpMap:jt,normalMap:Kt,displacementMap:f&&U,emissiveMap:nt,normalMapObjectSpace:Kt&&M.normalMapType===_d,normalMapTangentSpace:Kt&&M.normalMapType===Au,metalnessMap:it,roughnessMap:E,anisotropy:x,anisotropyMap:ct,clearcoat:P,clearcoatMap:j,clearcoatNormalMap:Et,clearcoatRoughnessMap:tt,dispersion:O,iridescence:G,iridescenceMap:st,iridescenceThicknessMap:wt,sheen:X,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Ot,specularColorMap:Rt,specularIntensityMap:Yt,transmission:ft,transmissionMap:L,thicknessMap:vt,gradientMap:J,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:ot,alphaHash:gt,combine:M.combine,mapUv:Bt&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:we&&_(M.lightMap.channel),bumpMapUv:jt&&_(M.bumpMap.channel),normalMapUv:Kt&&_(M.normalMap.channel),displacementMapUv:U&&_(M.displacementMap.channel),emissiveMapUv:nt&&_(M.emissiveMap.channel),metalnessMapUv:it&&_(M.metalnessMap.channel),roughnessMapUv:E&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:j&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(M.sheenRoughnessMap.channel),specularMapUv:Ot&&_(M.specularMap.channel),specularColorMapUv:Rt&&_(M.specularColorMap.channel),specularIntensityMapUv:Yt&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:vt&&_(M.thicknessMap.channel),alphaMapUv:et&&_(M.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Kt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!rt.attributes.uv&&(Bt||et),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:V.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Wt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Bt&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:nt&&M.emissiveMap.isVideoTexture===!0&&ne.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&M.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return fe.vertexUv1s=h.has(1),fe.vertexUv2s=h.has(2),fe.vertexUv3s=h.has(3),h.clear(),fe}function p(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)v.push(I),v.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(S(v,M),b(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function S(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function b(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let v=g[M.type],I;if(v){let k=In[v];I=gl.clone(k.uniforms)}else I=M.uniforms;return I}function A(M,v){let I;for(let k=0,V=l.length;k<V;k++){let K=l[k];if(K.cacheKey===v){I=K,++I.usedTimes;break}}return I===void 0&&(I=new fx(i,v,M,r),l.push(I)),I}function w(M){if(--M.usedTimes===0){let v=l.indexOf(M);l[v]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:l,dispose:C}}function mx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function su(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ru(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){let p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){let p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,f){e.length>1&&e.sort(u||gx),n.length>1&&n.sort(f||su),s.length>1&&s.sort(f||su)}function l(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:l,sort:h}}function xx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ru,i.set(n,[a])):s>=r.length?(a=new ru,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Nt};break;case"SpotLight":e={position:new F,direction:new F,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vx=0;function Mx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bx(i){let t=new _x,e=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);let s=new F,r=new ue,a=new ue;function o(h){let l=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,b=0,y=0,A=0,w=0,R=0;h.sort(Mx);for(let M=0,v=h.length;M<v;M++){let I=h[M],k=I.color,V=I.intensity,K=I.distance,rt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)l+=k.r*V,u+=k.g*V,f+=k.b*V;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(I.sh.coefficients[Q],V);R++}else if(I.isDirectionalLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let lt=I.shadow,Z=e.get(I);Z.shadowIntensity=lt.intensity,Z.shadowBias=lt.bias,Z.shadowNormalBias=lt.normalBias,Z.shadowRadius=lt.radius,Z.shadowMapSize=lt.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=rt,n.directionalShadowMatrix[d]=I.shadow.matrix,S++}n.directional[d]=Q,d++}else if(I.isSpotLight){let Q=t.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(k).multiplyScalar(V),Q.distance=K,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,n.spot[_]=Q;let lt=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,lt.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=lt.matrix,I.castShadow){let Z=e.get(I);Z.shadowIntensity=lt.intensity,Z.shadowBias=lt.bias,Z.shadowNormalBias=lt.normalBias,Z.shadowRadius=lt.radius,Z.shadowMapSize=lt.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=rt,y++}_++}else if(I.isRectAreaLight){let Q=t.get(I);Q.color.copy(k).multiplyScalar(V),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Q,m++}else if(I.isPointLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){let lt=I.shadow,Z=e.get(I);Z.shadowIntensity=lt.intensity,Z.shadowBias=lt.bias,Z.shadowNormalBias=lt.normalBias,Z.shadowRadius=lt.radius,Z.shadowMapSize=lt.mapSize,Z.shadowCameraNear=lt.camera.near,Z.shadowCameraFar=lt.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=Q,g++}else if(I.isHemisphereLight){let Q=t.get(I);Q.skyColor.copy(I.color).multiplyScalar(V),Q.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=Q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==b||C.numSpotShadows!==y||C.numSpotMaps!==A||C.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=b,C.numSpotShadows=y,C.numSpotMaps=A,C.numLightProbes=R,n.version=vx++)}function c(h,l){let u=0,f=0,d=0,g=0,_=0,m=l.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){let b=h[p];if(b.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(b.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function ou(i){let t=new bx(i),e=[],n=[];function s(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Sx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ou(i),t.set(s,[o])):r>=a.length?(o=new ou(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var kc=class extends yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hc=class extends yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
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
}`;function wx(i,t,e){let n=new rr,s=new Xt,r=new Xt,a=new Ae,o=new kc({depthPacking:xd}),c=new Hc,h={},l=e.maxTextureSize,u={[Dn]:qe,[qe]:Dn,[nn]:nn},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Ex,fragmentShader:Tx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ke;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let p=this.type;this.render=function(w,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(gi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=p!==Zn&&this.type===Zn,K=p===Zn&&this.type!==Zn;for(let rt=0,Q=w.length;rt<Q;rt++){let lt=w[rt],Z=lt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let yt=Z.getFrameExtents();if(s.multiply(yt),r.copy(Z.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/yt.x),s.x=r.x*yt.x,Z.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/yt.y),s.y=r.y*yt.y,Z.mapSize.y=r.y)),Z.map===null||V===!0||K===!0){let Pt=this.type!==Zn?{minFilter:ln,magFilter:ln}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ti(s.x,s.y,Pt),Z.map.texture.name=lt.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let xt=Z.getViewportCount();for(let Pt=0;Pt<xt;Pt++){let Wt=Z.getViewport(Pt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),k.viewport(a),Z.updateMatrices(lt,Pt),n=Z.getFrustum(),y(R,C,Z.camera,lt,this.type)}Z.isPointLightShadow!==!0&&this.type===Zn&&S(Z,C),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,I)};function S(w,R){let C=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ti(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,C,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,C,d,_,null)}function b(w,R,C,M){let v=null,I=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)v=I;else if(v=C.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=v.uuid,V=R.uuid,K=h[k];K===void 0&&(K={},h[k]=K);let rt=K[V];rt===void 0&&(rt=v.clone(),K[V]=rt,R.addEventListener("dispose",A)),v=rt}if(v.visible=R.visible,v.wireframe=R.wireframe,M===Zn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let k=i.properties.get(v);k.light=C}return v}function y(w,R,C,M,v){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let V=t.update(w),K=w.material;if(Array.isArray(K)){let rt=V.groups;for(let Q=0,lt=rt.length;Q<lt;Q++){let Z=rt[Q],yt=K[Z.materialIndex];if(yt&&yt.visible){let xt=b(w,yt,M,v);w.onBeforeShadow(i,w,R,C,V,xt,Z),i.renderBufferDirect(C,null,V,xt,w,Z),w.onAfterShadow(i,w,R,C,V,xt,Z)}}}else if(K.visible){let rt=b(w,K,M,v);w.onBeforeShadow(i,w,R,C,V,rt,null),i.renderBufferDirect(C,null,V,rt,w,null),w.onAfterShadow(i,w,R,C,V,rt,null)}}let k=w.children;for(let V=0,K=k.length;V<K;V++)y(k[V],R,C,M,v)}function A(w){w.target.removeEventListener("dispose",A);for(let C in h){let M=h[C],v=w.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var Ax={[Wa]:Xa,[qa]:$a,[Ya]:Ja,[xs]:Za,[Xa]:Wa,[$a]:qa,[Ja]:Ya,[Za]:xs};function Rx(i,t){function e(){let L=!1,vt=new Ae,J=null,et=new Ae(0,0,0,0);return{setMask:function(ot){J!==ot&&!L&&(i.colorMask(ot,ot,ot,ot),J=ot)},setLocked:function(ot){L=ot},setClear:function(ot,gt,kt,ie,fe){fe===!0&&(ot*=ie,gt*=ie,kt*=ie),vt.set(ot,gt,kt,ie),et.equals(vt)===!1&&(i.clearColor(ot,gt,kt,ie),et.copy(vt))},reset:function(){L=!1,J=null,et.set(-1,0,0,0)}}}function n(){let L=!1,vt=!1,J=null,et=null,ot=null;return{setReversed:function(gt){if(vt!==gt){let kt=t.get("EXT_clip_control");vt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let ie=ot;ot=null,this.setClear(ie)}vt=gt},getReversed:function(){return vt},setTest:function(gt){gt?bt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(gt){J!==gt&&!L&&(i.depthMask(gt),J=gt)},setFunc:function(gt){if(vt&&(gt=Ax[gt]),et!==gt){switch(gt){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=gt}},setLocked:function(gt){L=gt},setClear:function(gt){ot!==gt&&(vt&&(gt=1-gt),i.clearDepth(gt),ot=gt)},reset:function(){L=!1,J=null,et=null,ot=null,vt=!1}}}function s(){let L=!1,vt=null,J=null,et=null,ot=null,gt=null,kt=null,ie=null,fe=null;return{setTest:function(te){L||(te?bt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(te){vt!==te&&!L&&(i.stencilMask(te),vt=te)},setFunc:function(te,He,Ge){(J!==te||et!==He||ot!==Ge)&&(i.stencilFunc(te,He,Ge),J=te,et=He,ot=Ge)},setOp:function(te,He,Ge){(gt!==te||kt!==He||ie!==Ge)&&(i.stencilOp(te,He,Ge),gt=te,kt=He,ie=Ge)},setLocked:function(te){L=te},setClear:function(te){fe!==te&&(i.clearStencil(te),fe=te)},reset:function(){L=!1,vt=null,J=null,et=null,ot=null,gt=null,kt=null,ie=null,fe=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,l={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,b=null,y=null,A=null,w=null,R=new Nt(0,0,0),C=0,M=!1,v=null,I=null,k=null,V=null,K=null,rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,lt=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=lt>=1):Z.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=lt>=2);let yt=null,xt={},Pt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),re=new Ae().fromArray(Pt),$=new Ae().fromArray(Wt);function ut(L,vt,J,et){let ot=new Uint8Array(4),gt=i.createTexture();i.bindTexture(L,gt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<J;kt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(vt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return gt}let It={};It[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(i.DEPTH_TEST),a.setFunc(xs),jt(!1),Kt(ch),bt(i.CULL_FACE),D(gi);function bt(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function Ft(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function Y(L,vt){return u[L]!==vt?(i.bindFramebuffer(L,vt),u[L]=vt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function pt(L,vt){let J=d,et=!1;if(L){J=f.get(vt),J===void 0&&(J=[],f.set(vt,J));let ot=L.textures;if(J.length!==ot.length||J[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,kt=ot.length;gt<kt;gt++)J[gt]=i.COLOR_ATTACHMENT0+gt;J.length=ot.length,et=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,et=!0);et&&i.drawBuffers(J)}function Bt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let _t={[Li]:i.FUNC_ADD,[Wf]:i.FUNC_SUBTRACT,[Xf]:i.FUNC_REVERSE_SUBTRACT};_t[qf]=i.MIN,_t[Yf]=i.MAX;let ee={[Zf]:i.ZERO,[$f]:i.ONE,[Jf]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[nd]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[Qf]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[ed]:i.ONE_MINUS_DST_COLOR,[jf]:i.ONE_MINUS_DST_ALPHA,[id]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[rd]:i.CONSTANT_ALPHA,[od]:i.ONE_MINUS_CONSTANT_ALPHA};function D(L,vt,J,et,ot,gt,kt,ie,fe,te){if(L===gi){_===!0&&(Ft(i.BLEND),_=!1);return}if(_===!1&&(bt(i.BLEND),_=!0),L!==Gf){if(L!==m||te!==M){if((p!==Li||y!==Li)&&(i.blendEquation(i.FUNC_ADD),p=Li,y=Li),te)switch(L){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lh:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,b=null,A=null,w=null,R.set(0,0,0),C=0,m=L,M=te}return}ot=ot||vt,gt=gt||J,kt=kt||et,(vt!==p||ot!==y)&&(i.blendEquationSeparate(_t[vt],_t[ot]),p=vt,y=ot),(J!==S||et!==b||gt!==A||kt!==w)&&(i.blendFuncSeparate(ee[J],ee[et],ee[gt],ee[kt]),S=J,b=et,A=gt,w=kt),(ie.equals(R)===!1||fe!==C)&&(i.blendColor(ie.r,ie.g,ie.b,fe),R.copy(ie),C=fe),m=L,M=!1}function we(L,vt){L.side===nn?Ft(i.CULL_FACE):bt(i.CULL_FACE);let J=L.side===qe;vt&&(J=!J),jt(J),L.blending===ds&&L.transparent===!1?D(gi):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let et=L.stencilWrite;o.setTest(et),et&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(L){v!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),v=L)}function Kt(L){L!==Hf?(bt(i.CULL_FACE),L!==I&&(L===ch?i.cullFace(i.BACK):L===Vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),I=L}function U(L){L!==k&&(Q&&i.lineWidth(L),k=L)}function nt(L,vt,J){L?(bt(i.POLYGON_OFFSET_FILL),(V!==vt||K!==J)&&(i.polygonOffset(vt,J),V=vt,K=J)):Ft(i.POLYGON_OFFSET_FILL)}function it(L){L?bt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+rt-1),yt!==L&&(i.activeTexture(L),yt=L)}function x(L,vt,J){J===void 0&&(yt===null?J=i.TEXTURE0+rt-1:J=yt);let et=xt[J];et===void 0&&(et={type:void 0,texture:void 0},xt[J]=et),(et.type!==L||et.texture!==vt)&&(yt!==J&&(i.activeTexture(J),yt=J),i.bindTexture(L,vt||It[L]),et.type=L,et.texture=vt)}function P(){let L=xt[yt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function O(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){re.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),re.copy(L))}function mt(L){$.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function Ot(L,vt){let J=h.get(vt);J===void 0&&(J=new WeakMap,h.set(vt,J));let et=J.get(L);et===void 0&&(et=i.getUniformBlockIndex(vt,L.name),J.set(L,et))}function Rt(L,vt){let et=h.get(vt).get(L);c.get(vt)!==et&&(i.uniformBlockBinding(vt,et,L.__bindingPointIndex),c.set(vt,et))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},yt=null,xt={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,b=null,y=null,A=null,w=null,R=new Nt(0,0,0),C=0,M=!1,v=null,I=null,k=null,V=null,K=null,re.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:Ft,bindFramebuffer:Y,drawBuffers:pt,useProgram:Bt,setBlending:D,setMaterial:we,setFlipSided:jt,setCullFace:Kt,setLineWidth:U,setPolygonOffset:nt,setScissorTest:it,activeTexture:E,bindTexture:x,unbindTexture:P,compressedTexImage2D:O,compressedTexImage3D:G,texImage2D:st,texImage3D:wt,updateUBOMapping:Ot,uniformBlockBinding:Rt,texStorage2D:Et,texStorage3D:tt,texSubImage2D:X,texSubImage3D:ft,compressedTexSubImage2D:ct,compressedTexSubImage3D:j,scissor:Ct,viewport:mt,reset:Yt}}function au(i,t,e,n){let s=Cx(n);switch(e){case Mu:return i*t;case Su:return i*t;case Eu:return i*t*2;case hl:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case Tu:return i*t*2/s.components*s.byteLength;case fl:return i*t*2/s.components*s.byteLength;case bu:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case dl:return i*t*4/s.components*s.byteLength;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(i,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(i,8)*Math.max(t,8)/2;case sc:case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case co:case Mc:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wu:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cx(i){switch(i){case jn:case _u:return{byteLength:1,components:1};case ir:case yu:case ur:return{byteLength:2,components:1};case cl:case ll:return{byteLength:2,components:4};case zi:case al:case Ln:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ix(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xt,l=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return d?new OffscreenCanvas(E,x):uo("canvas")}function _(E,x,P){let O=1,G=it(E);if((G.width>P||G.height>P)&&(O=P/Math.max(G.width,G.height)),O<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let X=Math.floor(O*G.width),ft=Math.floor(O*G.height);u===void 0&&(u=g(X,ft));let ct=x?g(X,ft):u;return ct.width=X,ct.height=ft,ct.getContext("2d").drawImage(E,0,0,X,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+X+"x"+ft+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,x,P,O,G=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=x;if(x===i.RED&&(P===i.FLOAT&&(X=i.R32F),P===i.HALF_FLOAT&&(X=i.R16F),P===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.R8UI),P===i.UNSIGNED_SHORT&&(X=i.R16UI),P===i.UNSIGNED_INT&&(X=i.R32UI),P===i.BYTE&&(X=i.R8I),P===i.SHORT&&(X=i.R16I),P===i.INT&&(X=i.R32I)),x===i.RG&&(P===i.FLOAT&&(X=i.RG32F),P===i.HALF_FLOAT&&(X=i.RG16F),P===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.RG8UI),P===i.UNSIGNED_SHORT&&(X=i.RG16UI),P===i.UNSIGNED_INT&&(X=i.RG32UI),P===i.BYTE&&(X=i.RG8I),P===i.SHORT&&(X=i.RG16I),P===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.RGB8UI),P===i.UNSIGNED_SHORT&&(X=i.RGB16UI),P===i.UNSIGNED_INT&&(X=i.RGB32UI),P===i.BYTE&&(X=i.RGB8I),P===i.SHORT&&(X=i.RGB16I),P===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),P===i.UNSIGNED_INT&&(X=i.RGBA32UI),P===i.BYTE&&(X=i.RGBA8I),P===i.SHORT&&(X=i.RGBA16I),P===i.INT&&(X=i.RGBA32I)),x===i.RGB&&P===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){let ft=G?No:ne.getTransfer(O);P===i.FLOAT&&(X=i.RGBA32F),P===i.HALF_FLOAT&&(X=i.RGBA16F),P===i.UNSIGNED_BYTE&&(X=ft===de?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(E,x){let P;return E?x===null||x===zi||x===vs?P=i.DEPTH24_STENCIL8:x===Ln?P=i.DEPTH32F_STENCIL8:x===ir&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zi||x===vs?P=i.DEPTH_COMPONENT24:x===Ln?P=i.DEPTH_COMPONENT32F:x===ir&&(P=i.DEPTH_COMPONENT16),P}function A(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==ln&&E.minFilter!==Pn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){let x=E.target;x.removeEventListener("dispose",w),C(x),x.isVideoTexture&&l.delete(x)}function R(E){let x=E.target;x.removeEventListener("dispose",R),v(x)}function C(E){let x=n.get(E);if(x.__webglInit===void 0)return;let P=E.source,O=f.get(P);if(O){let G=O[x.__cacheKey];G.usedTimes--,G.usedTimes===0&&M(E),Object.keys(O).length===0&&f.delete(P)}n.remove(E)}function M(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let P=E.source,O=f.get(P);delete O[x.__cacheKey],a.memory.textures--}function v(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(x.__webglFramebuffer[O]))for(let G=0;G<x.__webglFramebuffer[O].length;G++)i.deleteFramebuffer(x.__webglFramebuffer[O][G]);else i.deleteFramebuffer(x.__webglFramebuffer[O]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[O])}else{if(Array.isArray(x.__webglFramebuffer))for(let O=0;O<x.__webglFramebuffer.length;O++)i.deleteFramebuffer(x.__webglFramebuffer[O]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let O=0;O<x.__webglColorRenderbuffer.length;O++)x.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[O]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let P=E.textures;for(let O=0,G=P.length;O<G;O++){let X=n.get(P[O]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(P[O])}n.remove(E)}let I=0;function k(){I=0}function V(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function K(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function rt(E,x){let P=n.get(E);if(E.isVideoTexture&&U(E),E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){let O=E.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(P,E,x);return}}e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+x)}function Q(E,x){let P=n.get(E);if(E.version>0&&P.__version!==E.version){$(P,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+x)}function lt(E,x){let P=n.get(E);if(E.version>0&&P.__version!==E.version){$(P,E,x);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+x)}function Z(E,x){let P=n.get(E);if(E.version>0&&P.__version!==E.version){ut(P,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+x)}let yt={[nr]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},xt={[ln]:i.NEAREST,[md]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},Pt={[yd]:i.NEVER,[Td]:i.ALWAYS,[vd]:i.LESS,[Ru]:i.LEQUAL,[Md]:i.EQUAL,[Ed]:i.GEQUAL,[bd]:i.GREATER,[Sd]:i.NOTEQUAL};function Wt(E,x){if(x.type===Ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Pn||x.magFilter===fa||x.magFilter===Lr||x.magFilter===Ni||x.minFilter===Pn||x.minFilter===fa||x.minFilter===Lr||x.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,yt[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,yt[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,yt[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,xt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,xt[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==Lr&&x.minFilter!==Ni||x.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function re(E,x){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",w));let O=x.source,G=f.get(O);G===void 0&&(G={},f.set(O,G));let X=K(x);if(X!==E.__cacheKey){G[X]===void 0&&(G[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,P=!0),G[X].usedTimes++;let ft=G[E.__cacheKey];ft!==void 0&&(G[E.__cacheKey].usedTimes--,ft.usedTimes===0&&M(x)),E.__cacheKey=X,E.__webglTexture=G[X].texture}return P}function $(E,x,P){let O=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=i.TEXTURE_3D);let G=re(E,x),X=x.source;e.bindTexture(O,E.__webglTexture,i.TEXTURE0+P);let ft=n.get(X);if(X.version!==ft.__version||G===!0){e.activeTexture(i.TEXTURE0+P);let ct=ne.getPrimaries(ne.workingColorSpace),j=x.colorSpace===pi?null:ne.getPrimaries(x.colorSpace),Et=x.colorSpace===pi||ct===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let tt=_(x.image,!1,s.maxTextureSize);tt=nt(x,tt);let st=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),Ct=b(x.internalFormat,st,wt,x.colorSpace,x.isVideoTexture);Wt(O,x);let mt,Ot=x.mipmaps,Rt=x.isVideoTexture!==!0,Yt=ft.__version===void 0||G===!0,L=X.dataReady,vt=A(x,tt);if(x.isDepthTexture)Ct=y(x.format===Ms,x.type),Yt&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,st,wt,null));else if(x.isDataTexture)if(Ot.length>0){Rt&&Yt&&e.texStorage2D(i.TEXTURE_2D,vt,Ct,Ot[0].width,Ot[0].height);for(let J=0,et=Ot.length;J<et;J++)mt=Ot[J],Rt?L&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,mt.width,mt.height,st,wt,mt.data):e.texImage2D(i.TEXTURE_2D,J,Ct,mt.width,mt.height,0,st,wt,mt.data);x.generateMipmaps=!1}else Rt?(Yt&&e.texStorage2D(i.TEXTURE_2D,vt,Ct,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,st,wt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,st,wt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Rt&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ct,Ot[0].width,Ot[0].height,tt.depth);for(let J=0,et=Ot.length;J<et;J++)if(mt=Ot[J],x.format!==wn)if(st!==null)if(Rt){if(L)if(x.layerUpdates.size>0){let ot=au(mt.width,mt.height,x.format,x.type);for(let gt of x.layerUpdates){let kt=mt.data.subarray(gt*ot/mt.data.BYTES_PER_ELEMENT,(gt+1)*ot/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,gt,mt.width,mt.height,1,st,kt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,mt.width,mt.height,tt.depth,st,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ct,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,mt.width,mt.height,tt.depth,st,wt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Ct,mt.width,mt.height,tt.depth,0,st,wt,mt.data)}else{Rt&&Yt&&e.texStorage2D(i.TEXTURE_2D,vt,Ct,Ot[0].width,Ot[0].height);for(let J=0,et=Ot.length;J<et;J++)mt=Ot[J],x.format!==wn?st!==null?Rt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,mt.width,mt.height,st,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?L&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,mt.width,mt.height,st,wt,mt.data):e.texImage2D(i.TEXTURE_2D,J,Ct,mt.width,mt.height,0,st,wt,mt.data)}else if(x.isDataArrayTexture)if(Rt){if(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ct,tt.width,tt.height,tt.depth),L)if(x.layerUpdates.size>0){let J=au(tt.width,tt.height,x.format,x.type);for(let et of x.layerUpdates){let ot=tt.data.subarray(et*J/tt.data.BYTES_PER_ELEMENT,(et+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,st,wt,ot)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,st,wt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,st,wt,tt.data);else if(x.isData3DTexture)Rt?(Yt&&e.texStorage3D(i.TEXTURE_3D,vt,Ct,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,st,wt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,st,wt,tt.data);else if(x.isFramebufferTexture){if(Yt)if(Rt)e.texStorage2D(i.TEXTURE_2D,vt,Ct,tt.width,tt.height);else{let J=tt.width,et=tt.height;for(let ot=0;ot<vt;ot++)e.texImage2D(i.TEXTURE_2D,ot,Ct,J,et,0,st,wt,null),J>>=1,et>>=1}}else if(Ot.length>0){if(Rt&&Yt){let J=it(Ot[0]);e.texStorage2D(i.TEXTURE_2D,vt,Ct,J.width,J.height)}for(let J=0,et=Ot.length;J<et;J++)mt=Ot[J],Rt?L&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,st,wt,mt):e.texImage2D(i.TEXTURE_2D,J,Ct,st,wt,mt);x.generateMipmaps=!1}else if(Rt){if(Yt){let J=it(tt);e.texStorage2D(i.TEXTURE_2D,vt,Ct,J.width,J.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st,wt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,st,wt,tt);m(x)&&p(O),ft.__version=X.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ut(E,x,P){if(x.image.length!==6)return;let O=re(E,x),G=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+P);let X=n.get(G);if(G.version!==X.__version||O===!0){e.activeTexture(i.TEXTURE0+P);let ft=ne.getPrimaries(ne.workingColorSpace),ct=x.colorSpace===pi?null:ne.getPrimaries(x.colorSpace),j=x.colorSpace===pi||ft===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let Et=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,st=[];for(let et=0;et<6;et++)!Et&&!tt?st[et]=_(x.image[et],!0,s.maxCubemapSize):st[et]=tt?x.image[et].image:x.image[et],st[et]=nt(x,st[et]);let wt=st[0],Ct=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),Ot=b(x.internalFormat,Ct,mt,x.colorSpace),Rt=x.isVideoTexture!==!0,Yt=X.__version===void 0||O===!0,L=G.dataReady,vt=A(x,wt);Wt(i.TEXTURE_CUBE_MAP,x);let J;if(Et){Rt&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Ot,wt.width,wt.height);for(let et=0;et<6;et++){J=st[et].mipmaps;for(let ot=0;ot<J.length;ot++){let gt=J[ot];x.format!==wn?Ct!==null?Rt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot,0,0,gt.width,gt.height,Ct,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot,Ot,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot,0,0,gt.width,gt.height,Ct,mt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot,Ot,gt.width,gt.height,0,Ct,mt,gt.data)}}}else{if(J=x.mipmaps,Rt&&Yt){J.length>0&&vt++;let et=it(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Ot,et.width,et.height)}for(let et=0;et<6;et++)if(tt){Rt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,st[et].width,st[et].height,Ct,mt,st[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ot,st[et].width,st[et].height,0,Ct,mt,st[et].data);for(let ot=0;ot<J.length;ot++){let kt=J[ot].image[et].image;Rt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot+1,0,0,kt.width,kt.height,Ct,mt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot+1,Ot,kt.width,kt.height,0,Ct,mt,kt.data)}}else{Rt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ct,mt,st[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ot,Ct,mt,st[et]);for(let ot=0;ot<J.length;ot++){let gt=J[ot];Rt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot+1,0,0,Ct,mt,gt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot+1,Ot,Ct,mt,gt.image[et])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),X.__version=G.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function It(E,x,P,O,G,X){let ft=r.convert(P.format,P.colorSpace),ct=r.convert(P.type),j=b(P.internalFormat,ft,ct,P.colorSpace),Et=n.get(x),tt=n.get(P);if(tt.__renderTarget=x,!Et.__hasExternalTextures){let st=Math.max(1,x.width>>X),wt=Math.max(1,x.height>>X);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?e.texImage3D(G,X,j,st,wt,x.depth,0,ft,ct,null):e.texImage2D(G,X,j,st,wt,0,ft,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,G,tt.__webglTexture,0,jt(x)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,G,tt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(E,x,P){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let O=x.depthTexture,G=O&&O.isDepthTexture?O.type:null,X=y(x.stencilBuffer,G),ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=jt(x);Kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,X,x.width,x.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,E)}else{let O=x.textures;for(let G=0;G<O.length;G++){let X=O[G],ft=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),j=b(X.internalFormat,ft,ct,X.colorSpace),Et=jt(x);P&&Kt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,j,x.width,x.height):Kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(x.depthTexture);O.__renderTarget=x,(!O.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),rt(x.depthTexture,0);let G=O.__webglTexture,X=jt(x);if(x.depthTexture.format===ps)Kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(x.depthTexture.format===Ms)Kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Y(E){let x=n.get(E),P=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let O=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){let G=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",G)};O.addEventListener("dispose",G),x.__depthDisposeCallback=G}x.__boundDepthTexture=O}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Ft(x.__webglFramebuffer,E)}else if(P){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=i.createRenderbuffer(),bt(x.__webglDepthbuffer[O],E,!1);else{let G=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),bt(x.__webglDepthbuffer,E,!1);else{let O=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,G)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(E,x,P){let O=n.get(E);x!==void 0&&It(O.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Y(E)}function Bt(E){let x=E.texture,P=n.get(E),O=n.get(x);E.addEventListener("dispose",R);let G=E.textures,X=E.isWebGLCubeRenderTarget===!0,ft=G.length>1;if(ft||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=x.version,a.memory.textures++),X){P.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[ct]=[];for(let j=0;j<x.mipmaps.length;j++)P.__webglFramebuffer[ct][j]=i.createFramebuffer()}else P.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)P.__webglFramebuffer[ct]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ft)for(let ct=0,j=G.length;ct<j;ct++){let Et=n.get(G[ct]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Kt(E)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ct=0;ct<G.length;ct++){let j=G[ct];P.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[ct]);let Et=r.convert(j.format,j.colorSpace),tt=r.convert(j.type),st=b(j.internalFormat,Et,tt,j.colorSpace,E.isXRRenderTarget===!0),wt=jt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,st,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,P.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(P.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)It(P.__webglFramebuffer[ct][j],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,j);else It(P.__webglFramebuffer[ct],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ct=0,j=G.length;ct<j;ct++){let Et=G[ct],tt=n.get(Et);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Wt(i.TEXTURE_2D,Et),It(P.__webglFramebuffer,E,Et,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Et)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,O.__webglTexture),Wt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)It(P.__webglFramebuffer[j],E,x,i.COLOR_ATTACHMENT0,ct,j);else It(P.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ct,0);m(x)&&p(ct),e.unbindTexture()}E.depthBuffer&&Y(E)}function _t(E){let x=E.textures;for(let P=0,O=x.length;P<O;P++){let G=x[P];if(m(G)){let X=S(E),ft=n.get(G).__webglTexture;e.bindTexture(X,ft),p(X),e.unbindTexture()}}}let ee=[],D=[];function we(E){if(E.samples>0){if(Kt(E)===!1){let x=E.textures,P=E.width,O=E.height,G=i.COLOR_BUFFER_BIT,X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(E),ct=x.length>1;if(ct)for(let j=0;j<x.length;j++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let j=0;j<x.length;j++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[j]);let Et=n.get(x[j]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,P,O,0,0,P,O,G,i.NEAREST),c===!0&&(ee.length=0,D.length=0,ee.push(i.COLOR_ATTACHMENT0+j),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ee.push(X),D.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let j=0;j<x.length;j++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,ft.__webglColorRenderbuffer[j]);let Et=n.get(x[j]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function jt(E){return Math.min(s.maxSamples,E.samples)}function Kt(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(E){let x=a.render.frame;l.get(E)!==x&&(l.set(E,x),E.update())}function nt(E,x){let P=E.colorSpace,O=E.format,G=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==ws&&P!==pi&&(ne.getTransfer(P)===de?(O!==wn||G!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),x}function it(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=rt,this.setTexture2DArray=Q,this.setTexture3D=lt,this.setTextureCube=Z,this.rebindTextures=pt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Kt}function Px(i,t){function e(n,s=pi){let r,a=ne.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return i.BYTE;if(n===yu)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===Mu)return i.ALPHA;if(n===bu)return i.RGB;if(n===wn)return i.RGBA;if(n===Su)return i.LUMINANCE;if(n===Eu)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===Tu)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===_c||n===yc||n===vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===Mc||n===bc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===Sc||n===Ec||n===Tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Vc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ce=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lx={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=l.position.distanceTo(u.position),d=.02,g=.005;h.inputState.pinching&&f>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:Dx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,u=null,f=null,d=null,g=null,_=new Gc,m=e.getContextAttributes(),p=null,S=null,b=[],y=[],A=new Xt,w=null,R=new Je;R.viewport=new Ae;let C=new Je;C.viewport=new Ae;let M=[R,C],v=new Vc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ut=b[$];return ut===void 0&&(ut=new er,b[$]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function($){let ut=b[$];return ut===void 0&&(ut=new er,b[$]=ut),ut.getGripSpace()},this.getHand=function($){let ut=b[$];return ut===void 0&&(ut=new er,b[$]=ut),ut.getHandSpace()};function V($){let ut=y.indexOf($.inputSource);if(ut===-1)return;let It=b[ut];It!==void 0&&(It.update($.inputSource,$.frame,h||a),It.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",rt);for(let $=0;$<b.length;$++){let ut=y[$];ut!==null&&(y[$]=null,b[$].disconnect(ut))}I=null,k=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,S=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",K),s.addEventListener("inputsourceschange",rt),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ti(d.framebufferWidth,d.framebufferHeight,{format:wn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,It=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?Ms:ps,It=m.stencil?vs:zi);let Ft={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new ti(f.textureWidth,f.textureHeight,{format:wn,type:jn,depthTexture:new bo(f.textureWidth,f.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt($){for(let ut=0;ut<$.removed.length;ut++){let It=$.removed[ut],bt=y.indexOf(It);bt>=0&&(y[bt]=null,b[bt].disconnect(It))}for(let ut=0;ut<$.added.length;ut++){let It=$.added[ut],bt=y.indexOf(It);if(bt===-1){for(let Y=0;Y<b.length;Y++)if(Y>=y.length){y.push(It),bt=Y;break}else if(y[Y]===null){y[Y]=It,bt=Y;break}if(bt===-1)break}let Ft=b[bt];Ft&&Ft.connect(It)}}let Q=new F,lt=new F;function Z($,ut,It){Q.setFromMatrixPosition(ut.matrixWorld),lt.setFromMatrixPosition(It.matrixWorld);let bt=Q.distanceTo(lt),Ft=ut.projectionMatrix.elements,Y=It.projectionMatrix.elements,pt=Ft[14]/(Ft[10]-1),Bt=Ft[14]/(Ft[10]+1),_t=(Ft[9]+1)/Ft[5],ee=(Ft[9]-1)/Ft[5],D=(Ft[8]-1)/Ft[0],we=(Y[8]+1)/Y[0],jt=pt*D,Kt=pt*we,U=bt/(-D+we),nt=U*-D;if(ut.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nt),$.translateZ(U),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let it=pt+U,E=Bt+U,x=jt-nt,P=Kt+(bt-nt),O=_t*Bt/E*it,G=ee*Bt/E*it;$.projectionMatrix.makePerspective(x,P,O,G,it,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function yt($,ut){ut===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ut.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ut=$.near,It=$.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(It=_.depthFar)),v.near=C.near=R.near=ut,v.far=C.far=R.far=It,(I!==v.near||k!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,k=v.far),R.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,v.layers.mask=R.layers.mask|C.layers.mask;let bt=$.parent,Ft=v.cameras;yt(v,bt);for(let Y=0;Y<Ft.length;Y++)yt(Ft[Y],bt);Ft.length===2?Z(v,R,C):v.projectionMatrix.copy(R.projectionMatrix),xt($,v,bt)};function xt($,ut,It){It===null?$.matrix.copy(ut.matrixWorld):($.matrix.copy(It.matrixWorld),$.matrix.invert(),$.matrix.multiply(ut.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=sr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Pt=null;function Wt($,ut){if(l=ut.getViewerPose(h||a),g=ut,l!==null){let It=l.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let bt=!1;It.length!==v.cameras.length&&(v.cameras.length=0,bt=!0);for(let Y=0;Y<It.length;Y++){let pt=It[Y],Bt=null;if(d!==null)Bt=d.getViewport(pt);else{let ee=u.getViewSubImage(f,pt);Bt=ee.viewport,Y===0&&(t.setRenderTargetTextures(S,ee.colorTexture,f.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(S))}let _t=M[Y];_t===void 0&&(_t=new Je,_t.layers.enable(Y),_t.viewport=new Ae,M[Y]=_t),_t.matrix.fromArray(pt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(pt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Y===0&&(v.matrix.copy(_t.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),bt===!0&&v.cameras.push(_t)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let Y=u.getDepthInformation(It[0]);Y&&Y.isValid&&Y.texture&&_.init(t,Y,s.renderState)}}for(let It=0;It<b.length;It++){let bt=y[It],Ft=b[It];bt!==null&&Ft!==void 0&&Ft.update(bt,ut,h||a)}Pt&&Pt($,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}let re=new Lu;re.setAnimationLoop(Wt),this.setAnimationLoop=function($){Pt=$},this.dispose=function(){}}},Ii=new pn,Nx=new ue;function zx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,b):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),b=S.envMap,y=S.envMapRotation;b&&(m.envMap.value=b,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Ii)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let y=b.program;n.uniformBlockBinding(S,y)}function h(S,b){let y=s[S.id];y===void 0&&(g(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",m));let A=b.program;n.updateUBOMapping(S,A);let w=t.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function l(S){let b=u();S.__bindingPointIndex=b;let y=i.createBuffer(),A=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let b=s[S.id],y=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,R=y.length;w<R;w++){let C=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,v=C.length;M<v;M++){let I=C[M];if(d(I,w,M,A)===!0){let k=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],K=0;for(let rt=0;rt<V.length;rt++){let Q=V[rt],lt=_(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,k+K,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,K),K+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,b,y,A){let w=S.value,R=b+"_"+y;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{let C=A[R];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[R]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(S){let b=S.uniforms,y=0,A=16;for(let R=0,C=b.length;R<C;R++){let M=Array.isArray(b[R])?b[R]:[b[R]];for(let v=0,I=M.length;v<I;v++){let k=M[v],V=Array.isArray(k.value)?k.value:[k.value];for(let K=0,rt=V.length;K<rt;K++){let Q=V[K],lt=_(Q),Z=y%A,yt=Z%lt.boundary,xt=Z+yt;y+=yt,xt!==0&&A-xt<lt.storage&&(y+=A-xt),k.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=lt.storage}}}let w=y%A;return w>0&&(y+=A-w),S.__size=y,S.__cache={},this}function _(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:h,dispose:p}}var So=class{constructor(t={}){let{canvas:e=Vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=xi,this.toneMappingExposure=1;let y=this,A=!1,w=0,R=0,C=null,M=-1,v=null,I=new Ae,k=new Ae,V=null,K=new Nt(0),rt=0,Q=e.width,lt=e.height,Z=1,yt=null,xt=null,Pt=new Ae(0,0,Q,lt),Wt=new Ae(0,0,Q,lt),re=!1,$=new rr,ut=!1,It=!1,bt=new ue,Ft=new ue,Y=new F,pt=new Ae,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function ee(){return C===null?Z:1}let D=n;function we(T,N){return e.getContext(T,N)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){let N="webgl2";if(D=we(N,T),D===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let jt,Kt,U,nt,it,E,x,P,O,G,X,ft,ct,j,Et,tt,st,wt,Ct,mt,Ot,Rt,Yt,L;function vt(){jt=new jm(D),jt.init(),Rt=new Px(D,jt),Kt=new Ym(D,jt,t,Rt),U=new Rx(D,jt),Kt.reverseDepthBuffer&&f&&U.buffers.depth.setReversed(!0),nt=new ng(D),it=new mx,E=new Ix(D,jt,U,it,Kt,Rt,nt),x=new $m(y),P=new Qm(y),O=new lp(D),Yt=new Xm(D,O),G=new tg(D,O,nt,Yt),X=new sg(D,G,O,nt),Ct=new ig(D,Kt,E),tt=new Zm(it),ft=new px(y,x,P,jt,Kt,Yt,tt),ct=new zx(y,it),j=new xx,Et=new Sx(jt),wt=new Wm(y,x,P,U,X,d,c),st=new wx(y,X,Kt),L=new Fx(D,nt,Kt,U),mt=new qm(D,jt,nt),Ot=new eg(D,jt,nt),nt.programs=ft.programs,y.capabilities=Kt,y.extensions=jt,y.properties=it,y.renderLists=j,y.shadowMap=st,y.state=U,y.info=nt}vt();let J=new Wc(y,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(Q,lt,!1))},this.getSize=function(T){return T.set(Q,lt)},this.setSize=function(T,N,W=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,lt=N,e.width=Math.floor(T*Z),e.height=Math.floor(N*Z),W===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Q*Z,lt*Z).floor()},this.setDrawingBufferSize=function(T,N,W){Q=T,lt=N,Z=W,e.width=Math.floor(T*W),e.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Pt)},this.setViewport=function(T,N,W,q){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,N,W,q),U.viewport(I.copy(Pt).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,N,W,q){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,N,W,q),U.scissor(k.copy(Wt).multiplyScalar(Z).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){U.setScissorTest(re=T)},this.setOpaqueSort=function(T){yt=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(T=!0,N=!0,W=!0){let q=0;if(T){let z=!1;if(C!==null){let dt=C.texture.format;z=dt===dl||dt===fl||dt===ul}if(z){let dt=C.texture.type,At=dt===jn||dt===zi||dt===ir||dt===vs||dt===cl||dt===ll,Lt=wt.getClearColor(),Dt=wt.getClearAlpha(),Gt=Lt.r,Zt=Lt.g,Ut=Lt.b;At?(g[0]=Gt,g[1]=Zt,g[2]=Ut,g[3]=Dt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Gt,_[1]=Zt,_[2]=Ut,_[3]=Dt,D.clearBufferiv(D.COLOR,0,_))}else q|=D.COLOR_BUFFER_BIT}N&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),j.dispose(),Et.dispose(),it.dispose(),x.dispose(),P.dispose(),X.dispose(),Yt.dispose(),L.dispose(),ft.dispose(),J.dispose(),J.removeEventListener("sessionstart",yn),J.removeEventListener("sessionend",Xi),vn.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=nt.autoReset,N=st.enabled,W=st.autoUpdate,q=st.needsUpdate,z=st.type;vt(),nt.autoReset=T,st.enabled=N,st.autoUpdate=W,st.needsUpdate=q,st.type=z}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function kt(T){let N=T.target;N.removeEventListener("dispose",kt),ie(N)}function ie(T){fe(T),it.remove(T)}function fe(T){let N=it.get(T).programs;N!==void 0&&(N.forEach(function(W){ft.releaseProgram(W)}),T.isShaderMaterial&&ft.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,W,q,z,dt){N===null&&(N=Bt);let At=z.isMesh&&z.matrixWorld.determinant()<0,Lt=Of(T,N,W,q,z);U.setMaterial(q,At);let Dt=W.index,Gt=1;if(q.wireframe===!0){if(Dt=G.getWireframeAttribute(W),Dt===void 0)return;Gt=2}let Zt=W.drawRange,Ut=W.attributes.position,se=Zt.start*Gt,pe=(Zt.start+Zt.count)*Gt;dt!==null&&(se=Math.max(se,dt.start*Gt),pe=Math.min(pe,(dt.start+dt.count)*Gt)),Dt!==null?(se=Math.max(se,0),pe=Math.min(pe,Dt.count)):Ut!=null&&(se=Math.max(se,0),pe=Math.min(pe,Ut.count));let ge=pe-se;if(ge<0||ge===1/0)return;Yt.setup(z,q,Lt,W,Dt);let tn,oe=mt;if(Dt!==null&&(tn=O.get(Dt),oe=Ot,oe.setIndex(tn)),z.isMesh)q.wireframe===!0?(U.setLineWidth(q.wireframeLinewidth*ee()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(z.isLine){let zt=q.linewidth;zt===void 0&&(zt=1),U.setLineWidth(zt*ee()),z.isLineSegments?oe.setMode(D.LINES):z.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else z.isPoints?oe.setMode(D.POINTS):z.isSprite&&oe.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)oe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let zt=z._multiDrawStarts,Vn=z._multiDrawCounts,ae=z._multiDrawCount,Mn=Dt?O.get(Dt).bytesPerElement:1,qi=it.get(q).currentProgram.getUniforms();for(let on=0;on<ae;on++)qi.setValue(D,"_gl_DrawID",on),oe.render(zt[on]/Mn,Vn[on])}else if(z.isInstancedMesh)oe.renderInstances(se,ge,z.count);else if(W.isInstancedBufferGeometry){let zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Vn=Math.min(W.instanceCount,zt);oe.renderInstances(se,ge,Vn)}else oe.render(se,ge)};function te(T,N,W){T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=qe,T.needsUpdate=!0,Pr(T,N,W),T.side=Dn,T.needsUpdate=!0,Pr(T,N,W),T.side=nn):Pr(T,N,W)}this.compile=function(T,N,W=null){W===null&&(W=T),p=Et.get(W),p.init(N),b.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let q=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let dt=z.material;if(dt)if(Array.isArray(dt))for(let At=0;At<dt.length;At++){let Lt=dt[At];te(Lt,W,z),q.add(Lt)}else te(dt,W,z),q.add(dt)}),b.pop(),p=null,q},this.compileAsync=function(T,N,W=null){let q=this.compile(T,N,W);return new Promise(z=>{function dt(){if(q.forEach(function(At){it.get(At).currentProgram.isReady()&&q.delete(At)}),q.size===0){z(T);return}setTimeout(dt,10)}jt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let He=null;function Ge(T){He&&He(T)}function yn(){vn.stop()}function Xi(){vn.start()}let vn=new Lu;vn.setAnimationLoop(Ge),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(T){He=T,J.setAnimationLoop(T),T===null?vn.stop():vn.start()},J.addEventListener("sessionstart",yn),J.addEventListener("sessionend",Xi),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,N,C),p=Et.get(T,b.length),p.init(N),b.push(p),Ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Ft),It=this.localClippingEnabled,ut=tt.init(this.clippingPlanes,It),m=j.get(T,S.length),m.init(),S.push(m),J.enabled===!0&&J.isPresenting===!0){let dt=y.xr.getDepthSensingMesh();dt!==null&&Hn(dt,N,-1/0,y.sortObjects)}Hn(T,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(yt,xt),_t=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,_t&&wt.addToRenderList(m,T),this.info.render.frame++,ut===!0&&tt.beginShadows();let W=p.state.shadowsArray;st.render(W,T,N),ut===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,z=m.transmissive;if(p.setupLights(),N.isArrayCamera){let dt=N.cameras;if(z.length>0)for(let At=0,Lt=dt.length;At<Lt;At++){let Dt=dt[At];ih(q,z,T,Dt)}_t&&wt.render(T);for(let At=0,Lt=dt.length;At<Lt;At++){let Dt=dt[At];nh(m,T,Dt,Dt.viewport)}}else z.length>0&&ih(q,z,T,N),_t&&wt.render(T),nh(m,T,N);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,N),Yt.resetDefaultState(),M=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],ut===!0&&tt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Hn(T,N,W,q){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){q&&pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ft);let At=X.update(T),Lt=T.material;Lt.visible&&m.push(T,At,Lt,W,pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){let At=X.update(T),Lt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pt.copy(T.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),pt.copy(At.boundingSphere.center)),pt.applyMatrix4(T.matrixWorld).applyMatrix4(Ft)),Array.isArray(Lt)){let Dt=At.groups;for(let Gt=0,Zt=Dt.length;Gt<Zt;Gt++){let Ut=Dt[Gt],se=Lt[Ut.materialIndex];se&&se.visible&&m.push(T,At,se,W,pt.z,Ut)}}else Lt.visible&&m.push(T,At,Lt,W,pt.z,null)}}let dt=T.children;for(let At=0,Lt=dt.length;At<Lt;At++)Hn(dt[At],N,W,q)}function nh(T,N,W,q){let z=T.opaque,dt=T.transmissive,At=T.transparent;p.setupLightsView(W),ut===!0&&tt.setGlobalState(y.clippingPlanes,W),q&&U.viewport(I.copy(q)),z.length>0&&Ir(z,N,W),dt.length>0&&Ir(dt,N,W),At.length>0&&Ir(At,N,W),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function ih(T,N,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ti(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?ur:jn,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let dt=p.state.transmissionRenderTarget[q.id],At=q.viewport||I;dt.setSize(At.z,At.w);let Lt=y.getRenderTarget();y.setRenderTarget(dt),y.getClearColor(K),rt=y.getClearAlpha(),rt<1&&y.setClearColor(16777215,.5),y.clear(),_t&&wt.render(W);let Dt=y.toneMapping;y.toneMapping=xi;let Gt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ut===!0&&tt.setGlobalState(y.clippingPlanes,q),Ir(T,W,q),E.updateMultisampleRenderTarget(dt),E.updateRenderTargetMipmap(dt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ut=0,se=N.length;Ut<se;Ut++){let pe=N[Ut],ge=pe.object,tn=pe.geometry,oe=pe.material,zt=pe.group;if(oe.side===nn&&ge.layers.test(q.layers)){let Vn=oe.side;oe.side=qe,oe.needsUpdate=!0,sh(ge,W,q,tn,oe,zt),oe.side=Vn,oe.needsUpdate=!0,Zt=!0}}Zt===!0&&(E.updateMultisampleRenderTarget(dt),E.updateRenderTargetMipmap(dt))}y.setRenderTarget(Lt),y.setClearColor(K,rt),Gt!==void 0&&(q.viewport=Gt),y.toneMapping=Dt}function Ir(T,N,W){let q=N.isScene===!0?N.overrideMaterial:null;for(let z=0,dt=T.length;z<dt;z++){let At=T[z],Lt=At.object,Dt=At.geometry,Gt=q===null?At.material:q,Zt=At.group;Lt.layers.test(W.layers)&&sh(Lt,N,W,Dt,Gt,Zt)}}function sh(T,N,W,q,z,dt){T.onBeforeRender(y,N,W,q,z,dt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(y,N,W,q,T,dt),z.transparent===!0&&z.side===nn&&z.forceSinglePass===!1?(z.side=qe,z.needsUpdate=!0,y.renderBufferDirect(W,N,q,z,T,dt),z.side=Dn,z.needsUpdate=!0,y.renderBufferDirect(W,N,q,z,T,dt),z.side=nn):y.renderBufferDirect(W,N,q,z,T,dt),T.onAfterRender(y,N,W,q,z,dt)}function Pr(T,N,W){N.isScene!==!0&&(N=Bt);let q=it.get(T),z=p.state.lights,dt=p.state.shadowsArray,At=z.state.version,Lt=ft.getParameters(T,z.state,dt,N,W),Dt=ft.getProgramCacheKey(Lt),Gt=q.programs;q.environment=T.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(T.isMeshStandardMaterial?P:x).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",kt),Gt=new Map,q.programs=Gt);let Zt=Gt.get(Dt);if(Zt!==void 0){if(q.currentProgram===Zt&&q.lightsStateVersion===At)return oh(T,Lt),Zt}else Lt.uniforms=ft.getUniforms(T),T.onBeforeCompile(Lt,y),Zt=ft.acquireProgram(Lt,Dt),Gt.set(Dt,Zt),q.uniforms=Lt.uniforms;let Ut=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=tt.uniform),oh(T,Lt),q.needsLights=kf(T),q.lightsStateVersion=At,q.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Zt,q.uniformsList=null,Zt}function rh(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=gs.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function oh(T,N){let W=it.get(T);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Of(T,N,W,q,z){N.isScene!==!0&&(N=Bt),E.resetTextureUnits();let dt=N.fog,At=q.isMeshStandardMaterial?N.environment:null,Lt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ws,Dt=(q.isMeshStandardMaterial?P:x).get(q.envMap||At),Gt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Zt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ut=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,pe=!!W.morphAttributes.color,ge=xi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ge=y.toneMapping);let tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oe=tn!==void 0?tn.length:0,zt=it.get(q),Vn=p.state.lights;if(ut===!0&&(It===!0||T!==v)){let fn=T===v&&q.id===M;tt.setState(q,T,fn)}let ae=!1;q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Vn.state.version||zt.outputColorSpace!==Lt||z.isBatchedMesh&&zt.batching===!1||!z.isBatchedMesh&&zt.batching===!0||z.isBatchedMesh&&zt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&zt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&zt.instancing===!1||!z.isInstancedMesh&&zt.instancing===!0||z.isSkinnedMesh&&zt.skinning===!1||!z.isSkinnedMesh&&zt.skinning===!0||z.isInstancedMesh&&zt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&zt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&zt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&zt.instancingMorph===!1&&z.morphTexture!==null||zt.envMap!==Dt||q.fog===!0&&zt.fog!==dt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==tt.numPlanes||zt.numIntersection!==tt.numIntersection)||zt.vertexAlphas!==Gt||zt.vertexTangents!==Zt||zt.morphTargets!==Ut||zt.morphNormals!==se||zt.morphColors!==pe||zt.toneMapping!==ge||zt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,zt.__version=q.version);let Mn=zt.currentProgram;ae===!0&&(Mn=Pr(q,N,z));let qi=!1,on=!1,ks=!1,xe=Mn.getUniforms(),Cn=zt.uniforms;if(U.useProgram(Mn.program)&&(qi=!0,on=!0,ks=!0),q.id!==M&&(M=q.id,on=!0),qi||v!==T){U.buffers.depth.getReversed()?(bt.copy(T.projectionMatrix),Wd(bt),Xd(bt),xe.setValue(D,"projectionMatrix",bt)):xe.setValue(D,"projectionMatrix",T.projectionMatrix),xe.setValue(D,"viewMatrix",T.matrixWorldInverse);let oi=xe.map.cameraPosition;oi!==void 0&&oi.setValue(D,Y.setFromMatrixPosition(T.matrixWorld)),Kt.logarithmicDepthBuffer&&xe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,on=!0,ks=!0)}if(z.isSkinnedMesh){xe.setOptional(D,z,"bindMatrix"),xe.setOptional(D,z,"bindMatrixInverse");let fn=z.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),xe.setValue(D,"boneTexture",fn.boneTexture,E))}z.isBatchedMesh&&(xe.setOptional(D,z,"batchingTexture"),xe.setValue(D,"batchingTexture",z._matricesTexture,E),xe.setOptional(D,z,"batchingIdTexture"),xe.setValue(D,"batchingIdTexture",z._indirectTexture,E),xe.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&xe.setValue(D,"batchingColorTexture",z._colorsTexture,E));let Hs=W.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Ct.update(z,W,Mn),(on||zt.receiveShadow!==z.receiveShadow)&&(zt.receiveShadow=z.receiveShadow,xe.setValue(D,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Cn.envMap.value=Dt,Cn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(Cn.envMapIntensity.value=N.environmentIntensity),on&&(xe.setValue(D,"toneMappingExposure",y.toneMappingExposure),zt.needsLights&&Bf(Cn,ks),dt&&q.fog===!0&&ct.refreshFogUniforms(Cn,dt),ct.refreshMaterialUniforms(Cn,q,Z,lt,p.state.transmissionRenderTarget[T.id]),gs.upload(D,rh(zt),Cn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(gs.upload(D,rh(zt),Cn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xe.setValue(D,"center",z.center),xe.setValue(D,"modelViewMatrix",z.modelViewMatrix),xe.setValue(D,"normalMatrix",z.normalMatrix),xe.setValue(D,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let fn=q.uniformsGroups;for(let oi=0,ai=fn.length;oi<ai;oi++){let ah=fn[oi];L.update(ah,Mn),L.bind(ah,Mn)}}return Mn}function Bf(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function kf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,N,W){it.get(T.texture).__webglTexture=N,it.get(T.depthTexture).__webglTexture=W;let q=it.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){let W=it.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,W=0){C=T,w=N,R=W;let q=!0,z=null,dt=!1,At=!1;if(T){let Dt=it.get(T);if(Dt.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Dt.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Dt.__hasExternalTextures)E.rebindTextures(T,it.get(T.texture).__webglTexture,it.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ut=T.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&it.has(Ut)&&(T.width!==Ut.image.width||T.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}let Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(At=!0);let Zt=it.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[N])?z=Zt[N][W]:z=Zt[N],dt=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?z=it.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?z=Zt[W]:z=Zt,I.copy(T.viewport),k.copy(T.scissor),V=T.scissorTest}else I.copy(Pt).multiplyScalar(Z).floor(),k.copy(Wt).multiplyScalar(Z).floor(),V=re;if(U.bindFramebuffer(D.FRAMEBUFFER,z)&&q&&U.drawBuffers(T,z),U.viewport(I),U.scissor(k),U.setScissorTest(V),dt){let Dt=it.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Dt.__webglTexture,W)}else if(At){let Dt=it.get(T.texture),Gt=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,W||0,Gt)}M=-1},this.readRenderTargetPixels=function(T,N,W,q,z,dt,At){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=it.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){U.bindFramebuffer(D.FRAMEBUFFER,Lt);try{let Dt=T.texture,Gt=Dt.format,Zt=Dt.type;if(!Kt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-q&&W>=0&&W<=T.height-z&&D.readPixels(N,W,q,z,Rt.convert(Gt),Rt.convert(Zt),dt)}finally{let Dt=C!==null?it.get(C).__webglFramebuffer:null;U.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,N,W,q,z,dt,At){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=it.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){let Dt=T.texture,Gt=Dt.format,Zt=Dt.type;if(!Kt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-q&&W>=0&&W<=T.height-z){U.bindFramebuffer(D.FRAMEBUFFER,Lt);let Ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.bufferData(D.PIXEL_PACK_BUFFER,dt.byteLength,D.STREAM_READ),D.readPixels(N,W,q,z,Rt.convert(Gt),Rt.convert(Zt),0);let se=C!==null?it.get(C).__webglFramebuffer:null;U.bindFramebuffer(D.FRAMEBUFFER,se);let pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gd(D,pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,dt),D.deleteBuffer(Ut),D.deleteSync(pe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,W=0){T.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);let q=Math.pow(2,-W),z=Math.floor(T.image.width*q),dt=Math.floor(T.image.height*q),At=N!==null?N.x:0,Lt=N!==null?N.y:0;E.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,At,Lt,z,dt),U.unbindTexture()},this.copyTextureToTexture=function(T,N,W=null,q=null,z=0){T.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],N=arguments[2],z=arguments[3]||0,W=null);let dt,At,Lt,Dt,Gt,Zt,Ut,se,pe,ge=T.isCompressedTexture?T.mipmaps[z]:T.image;W!==null?(dt=W.max.x-W.min.x,At=W.max.y-W.min.y,Lt=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,Gt=W.min.y,Zt=W.isBox3?W.min.z:0):(dt=ge.width,At=ge.height,Lt=ge.depth||1,Dt=0,Gt=0,Zt=0),q!==null?(Ut=q.x,se=q.y,pe=q.z):(Ut=0,se=0,pe=0);let tn=Rt.convert(N.format),oe=Rt.convert(N.type),zt;N.isData3DTexture?(E.setTexture3D(N,0),zt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),zt=D.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),zt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let Vn=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Mn=D.getParameter(D.UNPACK_SKIP_PIXELS),qi=D.getParameter(D.UNPACK_SKIP_ROWS),on=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt);let ks=T.isDataArrayTexture||T.isData3DTexture,xe=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Cn=it.get(T),Hs=it.get(N),fn=it.get(Cn.__renderTarget),oi=it.get(Hs.__renderTarget);U.bindFramebuffer(D.READ_FRAMEBUFFER,fn.__webglFramebuffer),U.bindFramebuffer(D.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let ai=0;ai<Lt;ai++)ks&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,it.get(T).__webglTexture,z,Zt+ai),T.isDepthTexture?(xe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,it.get(N).__webglTexture,z,pe+ai),D.blitFramebuffer(Dt,Gt,dt,At,Ut,se,dt,At,D.DEPTH_BUFFER_BIT,D.NEAREST)):xe?D.copyTexSubImage3D(zt,z,Ut,se,pe+ai,Dt,Gt,dt,At):D.copyTexSubImage2D(zt,z,Ut,se,pe+ai,Dt,Gt,dt,At);U.bindFramebuffer(D.READ_FRAMEBUFFER,null),U.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xe?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(zt,z,Ut,se,pe,dt,At,Lt,tn,oe,ge.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(zt,z,Ut,se,pe,dt,At,Lt,tn,ge.data):D.texSubImage3D(zt,z,Ut,se,pe,dt,At,Lt,tn,oe,ge):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Ut,se,dt,At,tn,oe,ge.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Ut,se,ge.width,ge.height,tn,ge.data):D.texSubImage2D(D.TEXTURE_2D,z,Ut,se,dt,At,tn,oe,ge);D.pixelStorei(D.UNPACK_ROW_LENGTH,Vn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,qi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,on),z===0&&N.generateMipmaps&&D.generateMipmap(zt),U.unbindTexture()},this.copyTextureToTexture3D=function(T,N,W=null,q=null,z=0){return T.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,T=arguments[2],N=arguments[3],z=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,W,q,z)},this.initRenderTarget=function(T){it.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),U.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,U.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var or=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Eo=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},To=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new F,ar=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cr=class extends yi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},as,qs=new F,cs=new F,ls=new F,hs=new Xt,Ys=new Xt,Fu=new ue,jr=new F,Zs=new F,to=new F,cu=new Xt,ka=new Xt,lu=new Xt,wo=class extends Re{constructor(t=new cr){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new To(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new ar(n,3,0,!1)),as.setAttribute("uv",new ar(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;eo(jr.set(-.5,-.5,0),ls,a,cs,s,r),eo(Zs.set(.5,-.5,0),ls,a,cs,s,r),eo(to.set(.5,.5,0),ls,a,cs,s,r),cu.set(0,0),ka.set(1,0),lu.set(1,1);let o=t.ray.intersectTriangle(jr,Zs,to,!1,qs);if(o===null&&(eo(Zs.set(-.5,.5,0),ls,a,cs,s,r),ka.set(0,1),o=t.ray.intersectTriangle(jr,to,Zs,!1,qs),o===null))return;let c=t.ray.origin.distanceTo(qs);c<t.near||c>t.far||e.push({distance:c,point:qs.clone(),uv:mi.getInterpolation(qs,jr,Zs,to,cu,ka,lu,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function eo(i,t,e,n,s,r){hs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ys.x=r*hs.x-s*hs.y,Ys.y=s*hs.x+r*hs.y):Ys.copy(hs),i.copy(t),i.x+=Ys.x,i.y+=Ys.y,i.applyMatrix4(Fu)}var Xc=class extends sn{constructor(t=null,e=1,n=1,s,r,a,o,c,h=ln,l=ln,u,f){super(null,a,o,c,h,l,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new ue,hu=new ue,no=[],uu=new ei,Ox=new ue,$s=new Tt,Js=new Fi,An=class extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ox)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),uu.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Js.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),hu.multiplyMatrices(n,us),$s.matrixWorld=hu,$s.raycast(t,no);for(let a=0,o=no.length;a<o;a++){let c=no[a];c.instanceId=r,c.object=this,e.push(c)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xc(new Float32Array(s*this.count),s,this.count,hl,Ln));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ao=class extends sn{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ss=class i extends Ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],h=new F,l=new Xt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[f]/t+1)/2,l.y=(a[f+1]/t+1)/2,c.push(l.x,l.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qe=class i extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let l=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;S(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(l),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(d,2));function S(){let y=new F,A=new F,w=0,R=(e-t)/n;for(let C=0;C<=r;C++){let M=[],v=C/r,I=v*(e-t)+t;for(let k=0;k<=s;k++){let V=k/s,K=V*c+o,rt=Math.sin(K),Q=Math.cos(K);A.x=I*rt,A.y=-v*n+m,A.z=I*Q,u.push(A.x,A.y,A.z),y.set(rt,R,Q).normalize(),f.push(y.x,y.y,y.z),d.push(V,1-v),M.push(g++)}_.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let v=_[M][C],I=_[M+1][C],k=_[M+1][C+1],V=_[M][C+1];(t>0||M!==0)&&(l.push(v,I,V),w+=3),(e>0||M!==r-1)&&(l.push(I,k,V),w+=3)}h.addGroup(p,w,0),p+=w}function b(y){let A=g,w=new Xt,R=new F,C=0,M=y===!0?t:e,v=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;let I=g;for(let k=0;k<=s;k++){let K=k/s*c+o,rt=Math.cos(K),Q=Math.sin(K);R.x=M*Q,R.y=m*v,R.z=M*rt,u.push(R.x,R.y,R.z),f.push(0,v,0),w.x=rt*.5+.5,w.y=Q*.5*v+.5,d.push(w.x,w.y),g++}for(let k=0;k<s;k++){let V=A+k,K=I+k;y===!0?l.push(K,K+1,V):l.push(K+1,K,V),C+=3}h.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Es=class i extends Qe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qc=class i extends Ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),h(n),l(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let b=new F,y=new F,A=new F;for(let w=0;w<e.length;w+=3)d(e[w+0],b),d(e[w+1],y),d(e[w+2],A),c(b,y,A,S)}function c(S,b,y,A){let w=A+1,R=[];for(let C=0;C<=w;C++){R[C]=[];let M=S.clone().lerp(y,C/w),v=b.clone().lerp(y,C/w),I=w-C;for(let k=0;k<=I;k++)k===0&&C===w?R[C][k]=M:R[C][k]=M.clone().lerp(v,k/I)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){let v=Math.floor(M/2);M%2===0?(f(R[C][v+1]),f(R[C+1][v]),f(R[C][v])):(f(R[C][v+1]),f(R[C+1][v+1]),f(R[C+1][v]))}}function h(S){let b=new F;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(S),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function l(){let S=new F;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];let y=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;a.push(y,1-A)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let b=a[S+0],y=a[S+2],A=a[S+4],w=Math.max(b,y,A),R=Math.min(b,y,A);w>.9&&R<.1&&(b<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,b){let y=S*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function g(){let S=new F,b=new F,y=new F,A=new F,w=new Xt,R=new Xt,C=new Xt;for(let M=0,v=0;M<r.length;M+=9,v+=6){S.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),w.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),A.copy(S).add(b).add(y).divideScalar(3);let I=m(A);_(w,v+0,S,I),_(R,v+2,b,I),_(C,v+4,y,I)}}function _(S,b,y,A){A<0&&S.x===1&&(a[b]=S.x-1),y.x===0&&y.z===0&&(a[b]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ro=class i extends qc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Nn=class i extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,l=[],u=new F,f=new F,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],b=p/n,y=0;p===0&&a===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+y,1-b),S.push(h++)}l.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let b=l[p][S+1],y=l[p][S],A=l[p+1][S],w=l[p+1][S+1];(p!==0||a>0)&&d.push(b,y,w),(p!==n-1||c<Math.PI)&&d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var hr=class i extends Ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],h=[],l=new F,u=new F,f=new F;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),l.x=t*Math.cos(_),l.y=t*Math.sin(_),f.subVectors(u,l).normalize(),c.push(f.x,f.y,f.z),h.push(g/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;a.push(_,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ht=class extends yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function io(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dh:r=t,o=2*e-n;break;case ph:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dh:a=t,c=2*n-e;break;case ph:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let A=0;A!==o;++A)r[A]=p*a[l+A]+S*a[h+A]+b*a[c+A]+y*a[u+A];return r}},Zc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=(n-e)/(s-e),u=1-l;for(let f=0;f!==o;++f)r[f]=a[h+f]*u+a[c+f]*l;return r}},$c=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=io(e,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:io(t.times,Array),values:io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lo:e=this.InterpolantFactoryMethodDiscrete;break;case wc:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return wc;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Bx(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],l=t[o+1];if(h!==l&&(o!==1||h!==t[0]))if(s)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=wc;var Oi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=lo;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Rn{};Jc.prototype.ValueTypeName="color";var Kc=class extends Rn{};Kc.prototype.ValueTypeName="number";var Qc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let l=h+o;h!==l;h+=4)Un.slerpFlat(r,0,a,h-o,a,h,c);return r}},Co=class extends Rn{InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=lo;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Rn{};jc.prototype.ValueTypeName="vector";var tl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){let u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,f=h.length;u<f;u+=2){let d=h[u],g=h[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return g}return null}}},kx=new tl,el=class{constructor(t){this.manager=t!==void 0?t:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";var Io=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Po=class extends Io{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ha=new ue,fu=new F,du=new F,nl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var il=class extends nl{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends Io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new il}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Do=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=pu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function pu(){return performance.now()}var _l="\\[\\]\\.:\\/",Hx=new RegExp("["+_l+"]","g"),yl="[^"+_l+"]",Vx="[^"+_l.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",yl),Wx=/(WCOD+)?/.source.replace("WCOD",Vx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),Yx=new RegExp("^"+Gx+Wx+Xx+qx+"$"),Zx=["material","materials","bones","map"],sl=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(t){let e=Yx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=sl;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var fr=class i extends Tt{constructor(){let t=i.SkyShader,e=new mn({name:t.name,uniforms:gl.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:qe,depthWrite:!1});super(new le(1,1,1),e),this.isSky=!0}};fr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},up:{value:new F(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var je=i=>(i-2)*66,Ce=i=>(i-2.5)*66,Rs=["10th Ave","9th Ave","8th Ave","7th Ave","6th Ave","5th Ave"],Cs=["W 46th St","W 45th St","W 44th St","W 43rd St","W 42nd St","W 41st St"];function $x(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ht=$x(20261020),at=(i,t)=>i+(t-i)*ht(),qt=i=>i[Math.floor(ht()*i.length)],Vt=(i,t,e)=>Math.max(t,Math.min(e,i));function dr(i,t,e){return Math.abs(t-i)<=e?t:i+Math.sign(t-i)*e}function gn(i,t,e){let n=(t-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*e}function Bu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ke,h=0;for(let l=0;l<i.length;++l){let u=i[l],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,d,l),h+=d}}if(e){let l=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+l);l+=i[f].attributes.position.count}c.setIndex(u)}for(let l in r){let u=Ou(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(let l in a){let u=a[l][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<a[l].length;++_)d.push(a[l][_][f]);let g=Ou(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Ou(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let l=i[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let a=new t(r),o=new Ie(a,e,n),c=0;for(let h=0;h<i.length;++h){let l=i[h];if(l.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=l.count;f<d;f++)for(let g=0;g<e;g++){let _=l.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(l.array,c);c+=l.count*e}return s!==void 0&&(o.gpuType=s),o}var B={sphere:new Nn(1,14,10),box:new le(1,1,1),cyl:new Qe(1,1,1,12),cone:new Es(1,1,12),torus:new hr(1,.25,6,16),arc:new hr(1,.12,6,14,Math.PI),hemi:new Nn(1,14,8,0,Math.PI*2,0,Math.PI/2)},Fo=new ue,Oo=new Un,Bo=new pn,ku=new F,Hu=new F;function H(i,t,e=[0,0,0],n=[1,1,1],s=[0,0,0]){let r=i.clone();Bo.set(s[0],s[1],s[2]),Oo.setFromEuler(Bo),Fo.compose(ku.set(e[0],e[1],e[2]),Oo,Hu.set(n[0],n[1],n[2])),r.applyMatrix4(Fo);let a=new Nt(t),o=r.attributes.position.count,c=new Float32Array(o*3);for(let h=0;h<o;h++)c[h*3]=a.r,c[h*3+1]=a.g,c[h*3+2]=a.b;return r.setAttribute("color",new Ie(c,3)),r}function vl(i,t,e=[0,0,0],n=[1,1,1],s=[0,0,0]){let r=i.clone(),a=r.attributes.position,o=a.count,c=new Float32Array(o*3),h=new Nt;for(let l=0;l<o;l++)t(h,a.getX(l),a.getY(l),a.getZ(l)),c[l*3]=h.r,c[l*3+1]=h.g,c[l*3+2]=h.b;return Bo.set(s[0],s[1],s[2]),Oo.setFromEuler(Bo),Fo.compose(ku.set(e[0],e[1],e[2]),Oo,Hu.set(n[0],n[1],n[2])),r.applyMatrix4(Fo),r.setAttribute("color",new Ie(c,3)),r}function De(i){let t=Bu(i,!1);return i.forEach(e=>e.dispose()),t}function rn(i={}){return new Ht({vertexColors:!0,roughness:.8,metalness:0,...i})}var Vu=new ye({vertexColors:!0});function ze(i,t,e,{repeat:n=!0,aniso:s=8}={}){let r=document.createElement("canvas");r.width=i,r.height=t;let a=r.getContext("2d");e(a,i,t);let o=new Ao(r);return o.colorSpace=en,n&&(o.wrapS=o.wrapT=nr),o.anisotropy=s,o}function ii(i,t,e,n,s=.025){let r=Math.floor(t*e*s);for(let a=0;a<r;a++){let o=ht()<.5?0:255;i.fillStyle=`rgba(${o},${o},${o},${n*ht()})`,i.fillRect(ht()*t,ht()*e,2,2)}}var Al=[{id:"brick",style:"punched",wall:"#9c4f3b",trim:"#e4d6bf",glass:"#222c38",lit:"#f4d58c",fire:!0},{id:"darkbrick",style:"punched",wall:"#6a382d",trim:"#c9b79c",glass:"#1c2430",lit:"#f1cf84",fire:!0},{id:"brownstone",style:"punched",wall:"#6d4b3b",trim:"#b79d84",glass:"#1f2733",lit:"#f4d58c",fire:!1},{id:"limestone",style:"punched",wall:"#cfc3a6",trim:"#f1e9d6",glass:"#27323f",lit:"#f6dd9a",fire:!1},{id:"gray",style:"punched",wall:"#a1a5aa",trim:"#d8dadc",glass:"#243040",lit:"#f4d58c",fire:!1},{id:"tan",style:"punched",wall:"#c7a77c",trim:"#ead9b8",glass:"#26303d",lit:"#f4d58c",fire:!0},{id:"glassblue",style:"glass",wall:"#2f5f8c",trim:"#1b3a58",glass:"#6aa8d8",lit:"#bfe3ff"},{id:"glassdark",style:"glass",wall:"#27323e",trim:"#141b23",glass:"#4d6a85",lit:"#9fc4e6"},{id:"white",style:"ribbon",wall:"#e6e3dc",trim:"#bdb9b0",glass:"#37506b",lit:"#c8e0f5"}],Gu=14.4,Wu=14.4;function Jx(i,t){if(i.fillStyle=t.wall,i.fillRect(0,0,512,512),ii(i,512,512,t.style==="glass"?.035:.09),t.style==="punched"){i.strokeStyle="rgba(0,0,0,0.07)",i.lineWidth=1;for(let r=0;r<512;r+=8)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<4;r++)for(let a=0;a<4;a++){let o=a*128,c=512-(r+1)*128,h=o+36,l=c+30,u=56,f=76;i.fillStyle=t.trim,i.fillRect(h-7,l-11,u+14,9),i.fillRect(h-7,l+f,u+14,7),i.fillRect(h-3,l-3,u+6,f+6);let d=ht()<.13,g=i.createLinearGradient(h,l,h+u,l+f);d?(g.addColorStop(0,t.lit),g.addColorStop(1,"#d9a85a")):(g.addColorStop(0,t.glass),g.addColorStop(.55,"#10151c"),g.addColorStop(1,t.glass)),i.fillStyle=g,i.fillRect(h,l,u,f),i.fillStyle=t.trim,i.fillRect(h+u/2-1.5,l,3,f),i.fillRect(h,l+f*.42,u,3),!d&&ht()<.25&&(i.fillStyle="rgba(232,226,208,0.55)",i.fillRect(h,l,u,f*(.2+ht()*.4)))}if(t.fire){i.fillStyle="#14171a",i.strokeStyle="#14171a";for(let r=0;r<4;r++){let o=512-(r+1)*128;i.fillRect(266,o+100,108,5),i.fillRect(266,o+80,3,22),i.fillRect(371,o+80,3,22),i.fillRect(266,o+80,108,3),i.lineWidth=2;for(let c=0;c<9;c++)i.beginPath(),i.moveTo(270+c*12,o+83),i.lineTo(270+c*12,o+100),i.stroke();i.lineWidth=3,i.beginPath(),i.moveTo(352,o+105),i.lineTo(296,o+128+98>512?512:o+128+98),i.stroke()}}}else if(t.style==="glass")for(let r=0;r<4;r++)for(let a=0;a<4;a++){let o=a*128,c=512-(r+1)*128,h=ht()<.1,l=i.createLinearGradient(o,c,o+128,c+128);l.addColorStop(0,h?t.lit:t.glass),l.addColorStop(1,h?"#8fb7d6":t.wall),i.fillStyle=l,i.fillRect(o+2,c+2,124,102),i.fillStyle="rgba(255,255,255,0.10)",i.beginPath(),i.moveTo(o+2,c+128-26),i.lineTo(o+60,c+2),i.lineTo(o+90,c+2),i.lineTo(o+32,c+128-26),i.fill(),i.fillStyle=t.wall,i.fillRect(o+2,c+128-24,124,22),i.fillStyle=t.trim,i.fillRect(o,c,3,128),i.fillRect(o,c+128-3,128,3)}else for(let r=0;r<4;r++){let a=512-(r+1)*128,o=i.createLinearGradient(0,a,0,a+128);o.addColorStop(0,t.glass),o.addColorStop(1,"#15202c"),i.fillStyle=o,i.fillRect(0,a+28,512,72),i.fillStyle=t.trim;for(let c=0;c<512;c+=64)i.fillRect(c,a+28,4,72);i.fillRect(0,a+24,512,5),i.fillRect(0,a+100,512,5);for(let c=0;c<512;c+=64)ht()<.12&&(i.fillStyle=t.lit,i.fillRect(c+6,a+31,56,66))}let s=i.createLinearGradient(0,452,0,512);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.12)"),i.fillStyle=s,i.fillRect(0,452,512,60)}var Ml=new Map;function Xu(i){return Ml.has(i.id)||Ml.set(i.id,ze(512,512,t=>Jx(t,i))),Ml.get(i.id)}function qu(){return ze(1024,328,(i,t,e)=>{i.fillStyle="#4b4e53",i.fillRect(0,0,t,e),ii(i,t,e,.12,.05);let n=t/50,s=e/16,r=e/2;i.fillStyle="rgba(0,0,0,0.10)";for(let a of[-1,1])i.fillRect(0,r+a*2.3*s-.5*s-.6*s,t,.5*s),i.fillRect(0,r+a*2.3*s+.6*s,t,.5*s);i.fillStyle="#d8a91c",i.fillRect(0,r-.28*s,t,.14*s),i.fillRect(0,r+.14*s,t,.14*s),i.fillStyle="rgba(225,225,225,0.85)";for(let a of[-1,1])i.fillRect(0,r+a*4.4*s-.07*s,t,.14*s);i.fillStyle="rgba(240,240,240,0.9)";for(let a=-7.5;a<7.5;a+=1){let o=r+a*s;i.fillRect(.8*n,o,3*n,.5*s),i.fillRect(t-3.8*n,o,3*n,.5*s)}i.fillStyle="rgba(240,240,240,0.92)",i.fillRect(4.8*n,r-4.4*s,.45*n,4.4*s),i.fillRect(t-5.25*n,r,.45*n,4.4*s),ii(i,t,e,.07,.02)},{repeat:!1})}function Yu(){return ze(256,256,(i,t,e)=>{i.fillStyle="#4b4e53",i.fillRect(0,0,t,e),ii(i,t,e,.14,.06)})}function Zu(){return ze(256,256,(i,t,e)=>{i.fillStyle="#bab7af",i.fillRect(0,0,t,e),ii(i,t,e,.14,.05),i.strokeStyle="rgba(70,68,64,0.55)",i.lineWidth=3,i.strokeRect(1,1,t-2,e-2),i.lineWidth=2,i.beginPath(),i.moveTo(t/2,0),i.lineTo(t/2,e),i.moveTo(0,e/2),i.lineTo(t,e/2),i.stroke();for(let n=0;n<14;n++)i.fillStyle="rgba(60,58,55,0.35)",i.beginPath(),i.arc(ht()*t,ht()*e,1.5+ht()*2,0,7),i.fill()})}var vi=[{text:"DELI",bg:"#1f5f3a",fg:"#ffffff"},{text:"PIZZA",bg:"#b3261e",fg:"#fff3d6"},{text:"BAGELS",bg:"#2a4d8f",fg:"#ffe9a8"},{text:"CAFE",bg:"#4a2f22",fg:"#f6e7c9"},{text:"PHARMACY",bg:"#0f6b55",fg:"#ffffff"},{text:"BAR & GRILL",bg:"#171717",fg:"#f2c14e"},{text:"24 HR LAUNDRY",bg:"#2e6f9e",fg:"#ffffff"},{text:"FLOWERS",bg:"#7a2e63",fg:"#ffe3f1"},{text:"BOOKS",bg:"#5b3a1e",fg:"#f4e2b8"},{text:"NOODLES",bg:"#a8321c",fg:"#ffe9b0"},{text:"GROCERY",bg:"#2f6b2a",fg:"#fff7c2"},{text:"BARBER",bg:"#1d3557",fg:"#ffffff"}],bl=new Map;function $u(i){let t=vi[i%vi.length];return bl.has(i)||bl.set(i,ze(1024,340,(e,n,s)=>{e.fillStyle="#16181b",e.fillRect(0,0,n,s),e.fillStyle=t.bg,e.fillRect(10,8,n-20,98),e.strokeStyle=t.fg,e.lineWidth=4,e.strokeRect(20,16,n-40,82),e.fillStyle=t.fg,e.font='bold 66px "Arial Black", Impact, Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(t.text,n/2,58);let r=e.createLinearGradient(0,120,0,s);r.addColorStop(0,"#f0d9a3"),r.addColorStop(1,"#6f5b3b");for(let[a,o]of[[26,400],[620,998]]){e.fillStyle="#0b0c0e",e.fillRect(a-6,118,o-a+12,s-128),e.fillStyle=r,e.fillRect(a,124,o-a,s-140),e.fillStyle="rgba(255,255,255,0.14)",e.beginPath(),e.moveTo(a,124),e.lineTo(a+120,124),e.lineTo(a+40,s-16),e.lineTo(a,s-16),e.fill(),e.fillStyle="rgba(0,0,0,0.25)";for(let c=0;c<6;c++)e.fillRect(a+14+c*58,190+c%2*40,34,60)}e.fillStyle="#0b0c0e",e.fillRect(430,118,160,s-118),e.fillStyle="#c9d6de",e.fillRect(440,126,140,s-142),e.fillStyle="rgba(30,40,50,0.35)",e.fillRect(440,126,140,s-142),e.fillStyle="#d8d8d8",e.fillRect(556,210,8,48),e.fillStyle="#ffd24a",e.fillRect(468,150,84,22),e.fillStyle="#111",e.font="bold 18px Arial",e.fillText("OPEN",510,162)},{aniso:8})),bl.get(i)}var Sl=new Map;function Rl(i){return Sl.has(i)||Sl.set(i,ze(512,112,(t,e,n)=>{t.fillStyle="#0d6b3b",t.fillRect(0,0,e,n),t.strokeStyle="#f2f2f2",t.lineWidth=6,t.strokeRect(8,8,e-16,n-16),t.fillStyle="#f2f2f2",t.font="bold 58px Arial, Helvetica, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,e/2,n/2+3)},{repeat:!1})),Sl.get(i)}var Ju={1:"#ee352e",2:"#ee352e",3:"#ee352e",4:"#00933c",5:"#00933c",6:"#00933c",A:"#0039a6",C:"#0039a6",E:"#0039a6",B:"#ff6319",D:"#ff6319",F:"#ff6319",M:"#ff6319",N:"#fccc0a",Q:"#fccc0a",R:"#fccc0a",W:"#fccc0a",7:"#b933ad",L:"#a7a9ac",G:"#6cbe45",J:"#996633",Z:"#996633"};function Ku(i,t){return ze(256,512,(e,n,s)=>{e.fillStyle="#101214",e.fillRect(0,0,n,s),e.fillStyle="#0d7a45",e.fillRect(0,0,n,96),e.fillStyle="#ffffff",e.font="bold 54px Arial, Helvetica, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("SUBWAY",n/2,50);let r=Math.min(t.length,3);t.forEach((c,h)=>{let l=n/2+(h%3-(r-1)/2)*72,u=170+Math.floor(h/3)*76;e.fillStyle=Ju[c]||"#888",e.beginPath(),e.arc(l,u,31,0,Math.PI*2),e.fill(),e.fillStyle=c==="N"||c==="Q"||c==="R"||c==="W"?"#111":"#fff",e.font="bold 40px Arial, Helvetica, sans-serif",e.fillText(c,l,u+2)}),e.fillStyle="#f0f0f0",e.font="bold 34px Arial, Helvetica, sans-serif";let a=i.split(" "),o=Math.ceil(a.length/2);e.fillText(a.slice(0,o).join(" "),n/2,372),a.length>1&&e.fillText(a.slice(o).join(" "),n/2,414),e.fillStyle="#0d7a45",e.fillRect(0,s-22,n,22)},{repeat:!1})}function Qu(){return ze(128,128,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"#2a2c2f"),n.addColorStop(1,"#030304"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(0,0,0,0.55)";for(let s=0;s<t;s+=16)i.fillRect(s,0,6,e)},{repeat:!1})}var El=new Map;function ju(i){let t=i.name+i.color;return El.has(t)||El.set(t,ze(1200,500,(e,n,s)=>{e.fillStyle=i.color,e.fillRect(0,0,n,s),e.fillStyle="rgba(0,0,0,0.22)",e.fillRect(0,s-90,n,90),e.fillStyle=i.accent,e.fillRect(0,s-105,n,16),e.fillStyle="#101113",e.fillRect(610,140,460,240);let r=e.createLinearGradient(0,150,0,370);r.addColorStop(0,"#3a3128"),r.addColorStop(1,"#a98456"),e.fillStyle=r,e.fillRect(622,152,436,216),e.fillStyle="#d9d9d6",e.fillRect(600,360,480,26),e.fillStyle="rgba(0,0,0,0.5)",e.beginPath(),e.arc(840,250,36,0,7),e.fill(),e.fillRect(804,280,72,80);for(let a=0;a<12;a++)e.fillStyle=a%2?"#ffffff":i.accent,e.fillRect(590+a*41,100,41,44);e.fillStyle=i.text,e.font='bold 92px "Arial Black", Impact, Arial, sans-serif',e.textAlign="left",e.textBaseline="alphabetic",i.name.split(`
`).forEach((a,o)=>e.fillText(a,50,190+o*100)),e.font="bold 40px Arial, sans-serif",e.fillText(i.tag,54,400),e.fillStyle="#1b1b1b",e.fillRect(1090,150,90,200),e.fillStyle="#f5f5f5";for(let a=0;a<6;a++)e.fillRect(1100,168+a*28,70,5)})),El.get(t)}function Cl(i,t){return ze(128,16,(e,n,s)=>{for(let a=0;a<8;a++)e.fillStyle=a%2?i:t,e.fillRect(a*n/8,0,n/8,s)})}function tf(){return ze(64,64,(i,t,e)=>{let n=i.createRadialGradient(32,32,2,32,32,30);n.addColorStop(0,"rgba(255,255,255,0.85)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)},{repeat:!1})}function ef(i){return ze(256,96,(t,e,n)=>{t.fillStyle="#d6291d",t.fillRect(0,0,e,n),t.fillStyle="#ffd23f",t.fillRect(0,0,e,8),t.fillRect(0,n-8,e,8),t.fillStyle="#fff",t.font='bold 48px "Arial Black", Impact, Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(i,e/2,n/2+2)},{repeat:!1})}var Tl=new Map;function Il(i,t=8,e=6){Tl.has(i)||Tl.set(i,ze(256,256,(s,r,a)=>{let o=(c,h,l)=>{let u=r/l;for(let f=0;f<l;f++)for(let d=0;d<l;d++)s.fillStyle=(d+f)%2?c:h,s.fillRect(d*u,f*u,u,u)};if(i==="checker")o("#ece8dd","#26282b",4);else if(i==="checkerRed")o("#f4efe4","#b3261e",4);else if(i==="checkerGreen")o("#f1ede0","#2f6b3f",4);else if(i==="tile"){s.fillStyle="#d9dcdc",s.fillRect(0,0,r,a),s.strokeStyle="#a9aeb0",s.lineWidth=3;for(let c=0;c<=4;c++)s.beginPath(),s.moveTo(c*r/4,0),s.lineTo(c*r/4,a),s.moveTo(0,c*a/4),s.lineTo(r,c*a/4),s.stroke();ii(s,r,a,.08,.03)}else if(i==="carpet")s.fillStyle="#6b2430",s.fillRect(0,0,r,a),ii(s,r,a,.25,.25);else{let c=i==="darkwood"?[74,46,30]:[176,128,82];for(let h=0;h<8;h++){let l=(ht()-.5)*24;s.fillStyle=`rgb(${c[0]+l},${c[1]+l*.8},${c[2]+l*.6})`,s.fillRect(0,h*a/8,r,a/8),s.fillStyle="rgba(0,0,0,0.35)",s.fillRect(0,h*a/8,r,2);let u=ht()*r;s.fillRect(u,h*a/8,2,a/8)}ii(s,r,a,.06,.03)}}));let n=Tl.get(i).clone();return n.needsUpdate=!0,n.repeat.set(t,e),n}function nf(i,t="#ffd24a"){return ze(1024,256,(e,n,s)=>{e.clearRect(0,0,n,s),e.textAlign="center",e.textBaseline="middle",e.font='bold 120px "Arial Black", Impact, Arial, sans-serif';let r=120;for(;e.measureText(i).width>n-80&&r>40;)r-=6,e.font=`bold ${r}px "Arial Black", Impact, Arial, sans-serif`;e.shadowColor=t,e.shadowBlur=36,e.fillStyle=t,e.fillText(i,n/2,s/2+6),e.shadowBlur=12,e.fillStyle="#ffffff",e.globalAlpha=.85,e.fillText(i,n/2,s/2+6)},{repeat:!1})}function Pl(){return ze(256,256,(i,t,e)=>{i.fillStyle="#e9e6dc",i.fillRect(0,0,t,e),i.strokeStyle="rgba(80,78,70,0.35)",i.lineWidth=2;for(let n=0;n<e;n+=32)i.beginPath(),i.moveTo(0,n),i.lineTo(t,n),i.stroke();for(let n=0,s=0;n<e;n+=32,s++)for(let r=s%2*32;r<t;r+=64)i.beginPath(),i.moveTo(r,n),i.lineTo(r,n+32),i.stroke();ii(i,t,e,.07,.02)})}function Ll(i,t){return ze(768,160,(e,n,s)=>{e.fillStyle="#f4f2ea",e.fillRect(0,0,n,s),e.fillStyle="#111",e.fillRect(0,0,n,10),e.fillRect(0,s-10,n,10),e.fillStyle="#111",e.font="bold 62px Arial, Helvetica, sans-serif",e.textAlign="left",e.textBaseline="middle",e.fillText(i.toUpperCase(),28,s/2+2),t.slice(0,5).forEach((a,o)=>{let c=n-54-o*60,h=s/2;e.fillStyle=Ju[a]||"#777",e.beginPath(),e.arc(c,h,24,0,Math.PI*2),e.fill(),e.fillStyle=["N","Q","R","W"].includes(a)?"#111":"#fff",e.font="bold 30px Arial",e.textAlign="center",e.fillText(a,c,h+2)})},{repeat:!1})}function Dl(){return ze(256,96,(i,t,e)=>{i.fillStyle="#0d6b3b",i.fillRect(0,0,t,e),i.fillStyle="#fff",i.font="bold 56px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText("EXIT",t/2,e/2+3)},{repeat:!1})}var wl=new Map;function sf(i){return wl.has(i)||wl.set(i,ze(1024,256,(t,e,n)=>{let s=t.createLinearGradient(0,0,0,n);s.addColorStop(0,"#cfd3d8"),s.addColorStop(.5,"#aeb3ba"),s.addColorStop(1,"#8d939a"),t.fillStyle=s,t.fillRect(0,0,e,n);for(let r=0;r<e;r+=6)t.fillStyle=`rgba(0,0,0,${.03+ht()*.04})`,t.fillRect(r,0,2,n);t.fillStyle=i,t.fillRect(0,n*.64,e,14);for(let r=0;r<4;r++){let a=(r*.25+.125)*e;if(t.fillStyle="#9ea4ab",t.fillRect(a-62,20,124,n-60),t.fillStyle="#2b3b4b",t.fillRect(a-52,36,46,100),t.fillRect(a+6,36,46,100),t.fillStyle="rgba(0,0,0,0.5)",t.fillRect(a-2,20,4,n-60),r<3){let o=(r*.25+.25)*e;for(let c of[-52,8])t.fillStyle="#22303e",t.fillRect(o+c-18,44,82,96),t.fillStyle="rgba(255,255,255,0.10)",t.beginPath(),t.moveTo(o+c-18,44),t.lineTo(o+c+20,44),t.lineTo(o+c-6,140),t.lineTo(o+c-18,140),t.fill()}}t.fillStyle="#222",t.fillRect(0,n-28,e,28)})),wl.get(i)}function rf(){return ze(128,256,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#fff3cf"),n.addColorStop(1,"#bfa56d"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="#c8cdd2",i.fillRect(t/2-4,0,8,e),i.fillStyle="#e07a1f",i.fillRect(0,e*.55,t,e*.2)},{repeat:!1})}var Qx=rn({roughness:.5,metalness:0}),jx=[13224396,3885660,9117214,2968186,15263976,3824192,7040886,8019002,10264486],pr=2767695,Ul=1382170;function Fl(i,t){let e=[],n=[],s,r;if(i==="bus"){s=11.5,r=2.55,e.push(H(B.box,15856110,[0,1.55,0],[s,2.5,r])),e.push(H(B.box,1920913,[0,.75,0],[s+.02,.5,r+.02])),e.push(H(B.box,15909376,[0,1.12,0],[s+.03,.12,r+.03])),e.push(H(B.box,pr,[-.2,1.95,0],[s*.92,.85,r+.03])),e.push(H(B.box,pr,[s/2-.02,1.85,0],[.06,1.1,r*.86])),e.push(H(B.box,2764081,[s/2,.45,0],[.18,.3,r])),e.push(H(B.box,2764081,[-s/2,.45,0],[.18,.3,r]));for(let c of[s*.3,-s*.3])for(let h of[-1,1])e.push(H(B.cyl,Ul,[c,.5,h*(r/2-.05)],[.5,.36,.5],[Math.PI/2,0,0]));n.push(H(B.box,16765562,[s/2+.01,2.65,0],[.05,.3,1.5])),n.push(H(B.box,16773828,[s/2+.01,.75,r*.36],[.05,.16,.3])),n.push(H(B.box,16773828,[s/2+.01,.75,-r*.36],[.05,.16,.3])),n.push(H(B.box,16722474,[-s/2-.01,.8,r*.38],[.05,.2,.3])),n.push(H(B.box,16722474,[-s/2-.01,.8,-r*.38],[.05,.2,.3]))}else if(i==="van"){s=5.4,r=2,e.push(H(B.box,t,[0,1.15,0],[s,1.7,r])),e.push(H(B.box,pr,[s/2-.02,1.55,0],[.06,.62,r*.88])),e.push(H(B.box,pr,[s*.3,1.5,0],[s*.22,.5,r+.02])),e.push(H(B.box,2764081,[s/2,.45,0],[.16,.25,r])),e.push(H(B.box,2764081,[-s/2,.45,0],[.16,.25,r]));for(let c of[s*.3,-s*.3])for(let h of[-1,1])e.push(H(B.cyl,Ul,[c,.38,h*(r/2-.05)],[.38,.26,.38],[Math.PI/2,0,0]));n.push(H(B.box,16773828,[s/2+.01,.8,r*.34],[.05,.16,.3])),n.push(H(B.box,16773828,[s/2+.01,.8,-r*.34],[.05,.16,.3])),n.push(H(B.box,16722474,[-s/2-.01,.85,r*.38],[.05,.22,.3])),n.push(H(B.box,16722474,[-s/2-.01,.85,-r*.38],[.05,.22,.3]))}else{let c=i==="suv",h=i==="taxi";s=c?4.8:h?4.7:4.5,r=c?1.95:1.88;let l=c?.8:.62,u=c?.66:.5,f=c?.66:.5,d=.32+l/2;e.push(H(B.box,t,[0,d,0],[s,l,r]));let g=.32+l+u/2;e.push(H(B.box,pr,[c?-.1:-.25,g,0],[s*f,u,r*.92])),e.push(H(B.box,t,[c?-.1:-.25,g+u/2+.03,0],[s*f-.06,.07,r*.9])),e.push(H(B.box,2764081,[s/2,.42,0],[.14,.22,r*.96])),e.push(H(B.box,2764081,[-s/2,.42,0],[.14,.22,r*.96]));for(let _ of[s*.3,-s*.3])for(let m of[-1,1])e.push(H(B.cyl,Ul,[_,.34,m*(r/2-.03)],[.34,.25,.34],[Math.PI/2,0,0]));h&&(e.push(H(B.box,1776411,[0,.62,0],[s*.7,.07,r+.02])),n.push(H(B.box,16773288,[-.25,g+u/2+.2,0],[.55,.2,.22]))),n.push(H(B.box,16773828,[s/2+.01,.65,r*.33],[.05,.14,.3])),n.push(H(B.box,16773828,[s/2+.01,.65,-r*.33],[.05,.14,.3])),n.push(H(B.box,16722474,[-s/2-.01,.68,r*.36],[.05,.16,.3])),n.push(H(B.box,16722474,[-s/2-.01,.68,-r*.36],[.05,.16,.3]))}let a=new ce,o=new Tt(De([...e,...n]),Qx);return o.castShadow=!0,o.receiveShadow=!0,a.add(o),a.userData={L:s,W:r,type:i,color:t},a}function t_(){let i=ht();return i<.56?"taxi":i<.77?"sedan":i<.9?"suv":i<.96?"van":"bus"}var Ol=()=>qt(jx),Bl=16106496,Nl=27,e_=8;function af(i){return i<10?["green","red"]:i<12?["yellow","red"]:i<13.5?["red","red"]:i<23.5?["red","green"]:i<25.5?["red","yellow"]:["red","red"]}var zl={red:new Nt(16724774),yellow:new Nt(16761370),green:new Nt(3014522)},Ps={red:new Nt(2886152),yellow:new Nt(2892293),green:new Nt(468250)},Ho=class{constructor(t){this.scene=t,this.group=new ce,t.add(this.group),this.vehicles=[],this.lanes=new Map,this.obstacles=[],this.hooks={honk:null},this.buildSignals(),this.buildVehicles()}buildSignals(){let t=36;this.sigOffset=new Float32Array(t),this.sigState=new Array(t).fill(null);let e=t*4,n=new Qe(.1,.12,5.2,8);n.translate(0,2.6,0);let s=new le(.55,1.35,.42),r=new Ss(.15,10),a=new An(n,new Ht({color:2833203,roughness:.7}),e),o=new An(s,new Ht({color:1382426,roughness:.6}),e),c=()=>new An(r,new ye({color:16777215}),e);this.lampR=c(),this.lampY=c(),this.lampG=c();for(let f of[a,o])f.castShadow=!0;let h=new Re,l=new ue,u=[[1,-1,"x",Math.PI/2],[-1,-1,"z",Math.PI],[-1,1,"x",-Math.PI/2],[1,1,"z",0]];this.headAxis=[];for(let f=0;f<=5;f++)for(let d=0;d<=5;d++){let g=f*6+d;this.sigOffset[g]=ht()*Nl;for(let _=0;_<4;_++){let m=g*4+_,[p,S,b,y]=u[_],A=Ce(d)+p*8.7,w=Ce(f)+S*8.7;h.position.set(A,.15,w),h.rotation.set(0,0,0),h.updateMatrix(),a.setMatrixAt(m,h.matrix),h.position.set(A,.15+5.1,w),h.rotation.set(0,y,0),h.updateMatrix(),o.setMatrixAt(m,h.matrix);let R=h.matrix.clone();for(let[C,M]of[[this.lampR,.42],[this.lampY,0],[this.lampG,-.42]])l.makeTranslation(0,M,.215).premultiply(R),C.setMatrixAt(m,l);this.headAxis[m]=b}}for(let f of[this.lampR,this.lampY,this.lampG])f.instanceColor=null,f.frustumCulled=!1;a.frustumCulled=!1,o.frustumCulled=!1,this.group.add(a,o,this.lampR,this.lampY,this.lampG);for(let f=0;f<e;f++)this.lampR.setColorAt(f,Ps.red),this.lampY.setColorAt(f,Ps.yellow),this.lampG.setColorAt(f,Ps.green)}signal(t,e,n,s){let r=e*6+t,[a,o]=af((s+this.sigOffset[r])%Nl);return n==="x"?a:o}updateSignals(t){for(let e=0;e<=5;e++)for(let n=0;n<=5;n++){let s=e*6+n,[r,a]=af((t+this.sigOffset[s])%Nl),o=r+a;if(this.sigState[s]!==o){this.sigState[s]=o;for(let c=0;c<4;c++){let h=s*4+c,l=this.headAxis[h]==="x"?r:a;this.lampR.setColorAt(h,l==="red"?zl.red:Ps.red),this.lampY.setColorAt(h,l==="yellow"?zl.yellow:Ps.yellow),this.lampG.setColorAt(h,l==="green"?zl.green:Ps.green)}this.lampR.instanceColor.needsUpdate=!0,this.lampY.instanceColor.needsUpdate=!0,this.lampG.instanceColor.needsUpdate=!0}}}buildVehicles(){for(let t of["x","z"])for(let e=0;e<=5;e++)for(let n of[1,-1]){let s=e_,r=2*371/s,a=`${t}${e}${n}`,o=[];for(let c=0;c<s;c++){let h=t_(),l=h==="taxi"?Bl:Ol(),u=Fl(h,l),{L:f,W:d}=u.userData,g=t==="x"?n>0?2.3:-2.3:n>0?-2.3:2.3,_={mesh:u,axis:t,k:e,dir:n,L:f,W:d,lane:Ce(e)+g,s:-371+(c+at(.2,.8))*r,v:0,vmax:h==="bus"?at(8,10):at(10.5,13.5),x:0,z:0,key:a,type:h,color:l,honkT:at(10,h==="taxi"?45:90),stuckT:0,abandoned:!1};_.v=_.vmax*.8,u.rotation.y=t==="x"?n>0?0:Math.PI:n>0?-Math.PI/2:Math.PI/2,this.group.add(u),this.vehicles.push(_),o.push(_),this.place(_)}this.lanes.set(a,o)}}place(t){t.axis==="x"?(t.x=t.s,t.z=t.lane):(t.x=t.lane,t.z=t.s),t.mesh.position.set(t.x,.01,t.z)}removeVehicle(t){let e=this.lanes.get(t.key),n=e.indexOf(t);n>=0&&e.splice(n,1);let s=this.vehicles.indexOf(t);s>=0&&this.vehicles.splice(s,1),t.v=0,t.stuckT=0}canReinsert(t){let e=this.lanes.get(t.key),n=-371*t.dir;return e.every(s=>Math.abs(s.s-n)>35)}reinsert(t){let e=this.lanes.get(t.key);t.s=-371*t.dir,t.v=t.vmax*.8,t.stuckT=0,t.abandoned=!1,t.mesh.rotation.y=t.axis==="x"?t.dir>0?0:Math.PI:t.dir>0?-Math.PI/2:Math.PI/2,e.push(t),this.vehicles.push(t),this.place(t)}update(t,e,n){this.updateSignals(e);let s=3.2,r=this.obstacles;for(let[a,o]of this.lanes){if(!o.length)continue;let c=this.laneDir(a);o.sort((h,l)=>h.s*c-l.s*c);for(let h=0;h<o.length;h++){let l=o[h],u=l.vmax,f=!1,d=l.s+c*l.L/2,g=l.axis==="x"?c:0,_=l.axis==="z"?c:0,m=1/0,p=-1;for(let b=0;b<=5;b++){let A=(Ce(b)-d)*c-13.6;A>=-.35&&A<m&&(m=A,p=b)}if(p>=0&&m<120){let b=l.axis==="x"?this.signal(p,l.k,"x",e):this.signal(l.k,p,"z",e),y=b==="red";b==="yellow"&&(y=m>l.v*l.v/(2*5.5)),y&&(u=Math.min(u,Math.sqrt(2*s*Math.max(m,0))))}let S=o[h+1];if(S){let b=(S.s-l.s)*c-(S.L+l.L)/2,y=Math.sqrt(2*s*Math.max(b-2.4,0))+.4*S.v;y<u&&(u=y,y<1.5&&(f=!0))}if(n&&n.y<2.2){let b=n.x-l.x,y=n.z-l.z,A=b*g+y*_-l.L/2,w=Math.abs(-b*_+y*g);A>-.4&&A<20&&w<2.1&&(u=Math.min(u,Math.sqrt(2*s*Math.max(A-1.2,0))))}for(let b=0;b<r.length;b++){let y=r[b],A=y.x-l.x,w=y.z-l.z;if(Math.abs(A)+Math.abs(w)>48)continue;let R=A*g+w*_-l.L/2-y.r,C=Math.abs(-A*_+w*g);if(R>-.5&&R<24&&C<l.W/2+y.r*.9+.3){let M=Math.sqrt(2*s*Math.max(R-1.4,0))+.3*Math.max(y.v,0);M<u&&(u=M,M<1.5&&(f=!0))}}l.v+=Vt(u-l.v,-9*t,2.8*t),l.v<.02&&u<.05&&(l.v=0),l.s+=c*l.v*t,l.s*c>371&&(l.s-=2*371*c),this.place(l),l.stuckT=f&&l.v<.3?l.stuckT+t:0,l.honkT-=t,this.hooks.honk&&(l.stuckT>3&&l.honkT>3&&(l.honkT=0),l.honkT<=0&&(this.hooks.honk(l),l.honkT=l.stuckT>3?at(2.5,5):at(25,l.type==="taxi"?60:120)))}}}laneDir(t){return t.endsWith("-1")?-1:1}};var kl=[{body:9410982,belly:10134704,wing:8029329,bar:2830134,tail:4869975},{body:5791078,belly:6449007,wing:4672596,bar:1777186,tail:3422270},{body:13817563,belly:14672614,wing:11844290,bar:7106938,tail:10133672},{body:10776666,belly:11567207,wing:9067080,bar:4860962,tail:6043692},{body:8095122,belly:12172740,wing:6713469,bar:2237996,tail:4014666}],n_=[2369067,1845828,3815999,3023904,3885658,4857642],i_=[12597547,2450344,14725934,3050327,8207512],mr=[14172986,3122080,14853675,8280002,15921906,15232933,3835606,5025616,16742973],s_=[1381653,7031343,5001045,2899536],cf=De([H(B.cyl,12868722,[0,-.15,0],[.022,.3,.022]),H(B.box,12868722,[0,-.295,.04],[.07,.02,.14]),H(B.box,12868722,[0,-.295,0],[.02,.02,.2])]),Ls=rn({roughness:.85});function r_(i){let t=kl[i.plumage%kl.length],e=[],n=[],s=[],r=[];e.push(H(B.sphere,t.body,[0,.1,-.02],[.2,.2,.34])),i.outfit!=="suit"&&e.push(H(B.sphere,t.belly,[0,.11,.15],[.185,.18,.2])),e.push(H(B.sphere,t.body,[0,.07,-.25],[.13,.12,.14])),e.push(H(B.box,t.tail,[0,.065,-.42],[.17,.025,.24],[-.2,0,0])),e.push(H(B.box,t.bar,[0,.055,-.53],[.17,.027,.05],[-.2,0,0]));let a=new Nt(t.body),o=new Nt(t.belly),c=new Nt(8214184),h=new Nt(3514756),l=(A,w,R)=>{let C=Math.min(1,Math.max(0,(R-A)/(w-A)));return C*C*(3-2*C)},u=(A,w,R,C)=>{A.copy(a),A.lerp(c,l(-.85,-.35,R)*(1-l(-.1,.35,R))),A.lerp(h,l(-.3,.2,R)*(1-l(.45,.95,R))),A.lerp(o,l(.15,.85,C)*.9)};n.push(vl(B.sphere,u,[0,0,-.012],[.105,.118,.1])),n.push(vl(B.sphere,u,[0,.066,.03],[.086,.1,.086])),n.push(H(B.sphere,t.body,[0,.125,.062],[.093,.093,.098])),n.push(H(B.cone,3815998,[0,.115,.16],[.022,.09,.022],[Math.PI/2,0,0])),n.push(H(B.sphere,15921906,[0,.125,.125],[.024,.02,.024]));for(let A of[-1,1])n.push(H(B.sphere,14909995,[A*.072,.14,.09],[.022,.022,.022])),n.push(H(B.sphere,1052688,[A*.083,.14,.096],[.012,.012,.012]));for(let[A,w]of[[s,1],[r,-1]])A.push(H(B.sphere,t.wing,[w*.03,-.09,-.1],[.04,.12,.27])),A.push(H(B.box,t.bar,[w*.062,-.17,-.14],[.012,.022,.22],[.12,0,0]));let f=i.outfit;if(f==="suit"){let A=qt(n_);e.push(H(B.sphere,A,[0,.105,-.06],[.224,.212,.31])),e.push(H(B.sphere,16053488,[0,.115,.15],[.165,.175,.2])),e.push(H(B.box,qt(i_),[0,.1,.343],[.036,.17,.014],[-.18,0,0]));for(let C of[-1,1])e.push(H(B.box,A,[C*.085,.14,.31],[.07,.17,.02],[-.25,C*.3,C*.25]));for(let C of[s,r])C.push(H(B.sphere,A,[C===s?.03:-.03,-.09,-.1],[.046,.125,.275]));let w=ht(),R=qt(s_);w<.3?(n.push(H(B.hemi,R,[0,.185,.06],[.082,.085,.082])),n.push(H(B.cyl,R,[0,.18,.06],[.125,.012,.125]))):w<.55&&(n.push(H(B.cyl,R,[0,.225,.06],[.07,.08,.07])),n.push(H(B.cyl,R,[0,.185,.06],[.145,.012,.145])),n.push(H(B.cyl,11545130,[0,.198,.06],[.073,.016,.073]))),ht()<.2&&n.push(H(B.box,1118481,[0,.14,.12],[.17,.028,.02]))}else if(f==="casual"){let A=qt(mr),w=qt(mr),R=qt(["hoodie","tee","vest"]);R==="hoodie"?(e.push(H(B.sphere,A,[0,.11,-.04],[.222,.21,.31])),e.push(H(B.sphere,A,[0,.2,-.08],[.1,.07,.1])),e.push(H(B.box,0,[0,.03,.2],[.12,.002,.003]))):R==="tee"?(e.push(H(B.sphere,A,[0,.105,-.03],[.208,.2,.28])),e.push(H(B.sphere,w,[0,.105,0],[.212,.06,.285]))):(e.push(H(B.sphere,A,[0,.11,-.05],[.218,.205,.26])),e.push(H(B.box,16777215,[0,.16,.2],[.02,.1,.01])));for(let M of[s,r])R==="hoodie"&&M.push(H(B.sphere,A,[M===s?.03:-.03,-.09,-.1],[.046,.125,.275]));ht()<.45&&n.push(H(B.torus,w,[0,0,0],[.115,.115,.115],[Math.PI/2,0,0]));let C=ht();if(C<.22){let M=qt(mr);n.push(H(B.hemi,M,[0,.17,.055],[.1,.09,.1])),n.push(H(B.torus,M,[0,.172,.055],[.099,.099,.099],[Math.PI/2,0,0])),n.push(H(B.sphere,16777215,[0,.265,.055],[.026,.026,.026]))}else if(C<.42){let M=qt(mr);n.push(H(B.hemi,M,[0,.17,.055],[.1,.085,.1])),n.push(H(B.box,M,[0,.165,.15],[.12,.012,.09]))}else if(C<.57){n.push(H(B.arc,2105893,[0,.12,.06],[.108,.108,.108]));for(let M of[-1,1])n.push(H(B.cyl,14172986,[M*.105,.12,.06],[.04,.03,.04],[0,0,Math.PI/2]))}ht()<.2&&n.push(H(B.box,1118481,[0,.14,.12],[.17,.028,.02])),ht()<.3&&(e.push(H(B.box,qt(mr),[0,.13,-.16],[.14,.17,.08])),e.push(H(B.box,2236962,[0,.13,-.2],[.12,.05,.02])))}else if(f==="vendor"){let w=i.apron??14034984;e.push(H(B.sphere,16184558,[0,.105,-.04],[.226,.214,.31])),e.push(H(B.sphere,16184558,[0,.115,.15],[.17,.176,.2])),e.push(H(B.box,w,[0,.11,.335],[.15,.2,.014],[-.12,0,0]));for(let R of[s,r])R.push(H(B.sphere,16184558,[R===s?.03:-.03,-.09,-.1],[.047,.126,.276]));n.push(H(B.torus,w,[0,0,0],[.108,.108,.108],[Math.PI/2,0,0])),n.push(H(B.cyl,16777215,[0,.215,.062],[.07,.09,.07])),n.push(H(B.sphere,16777215,[0,.285,.062],[.098,.065,.098]))}i.bandana&&(n.push(H(B.torus,14168362,[0,0,0],[.118,.118,.118],[Math.PI/2,0,0])),n.push(H(B.box,14168362,[0,-.03,.115],[.07,.07,.01],[.2,0,Math.PI/4])));let d=new ce,g=new ce;g.position.set(0,.36,0),d.add(g);let _=new Tt(De(e),Ls);g.add(_);let m=new ce;m.position.set(0,.24,.2),m.add(new Tt(De(n),Ls)),g.add(m);let p=new ce;p.position.set(.17,.2,-.02);let S=new ce;S.position.set(-.17,.2,-.02),p.add(new Tt(De(s),Ls)),S.add(new Tt(De(r),Ls)),g.add(p,S);let b=new ce;b.position.set(-.08,.34,.02);let y=new ce;return y.position.set(.08,.34,.02),b.add(new Tt(cf,Ls)),y.add(new Tt(cf,Ls)),d.add(b,y),d.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),{root:d,upper:g,head:m,wR:p,wL:S,legL:b,legR:y,bodyMesh:_}}var zn=class{constructor(t={}){let e={plumage:t.plumage??Math.floor(ht()*kl.length),outfit:t.outfit??"bare",bandana:!!t.bandana,apron:t.apron};Object.assign(this,r_(e)),this.outfit=e.outfit,this.phase=ht()*6,this.time=ht()*10,this.peck=0,this.peckT=-1,this.root.scale.setScalar(t.scale??1),this.lookSeed=ht()*100}startPeck(){this.peckT<0&&(this.peckT=0)}get steps(){return Math.floor(this.phase/Math.PI)}update(t,e,n=null){this.time+=t;let s=e>.15;if(s&&(this.phase+=t*(6+e*1)),this.peckT>=0){this.peckT+=t;let a=this.peckT/.55;this.peck=a>=1?0:Math.sin(a*Math.PI),a>=1&&(this.peckT=-1)}if(n&&n.airborne){let a=n.flap?1:.55,o=.75+Math.sin(this.time*(n.flap?34:26))*.65*a;this.wR.rotation.z=o,this.wL.rotation.z=-o,this.legL.rotation.x=-.6,this.legR.rotation.x=-.3,this.upper.rotation.x=Vt(-n.vy*.03,-.35,.3),this.upper.position.y=.36,this.head.position.z=.2,this.head.rotation.x=0,this.head.rotation.y=0;return}if(this.wR.rotation.z*=.7,this.wL.rotation.z*=.7,s){let a=Math.sin(this.phase)*.75;this.legL.rotation.x=a,this.legR.rotation.x=-a;let o=this.phase/Math.PI%1,c=o<.7?.05-.1*(o/.7):-.05+.1*((o-.7)/.3);this.head.position.z=.2+c,this.upper.position.y=.36+Math.abs(Math.sin(this.phase))*.018,this.upper.rotation.x=.05+this.peck*0,this.head.rotation.y*=.85,this.head.rotation.x=this.peck*.5}else this.legL.rotation.x*=.8,this.legR.rotation.x*=.8,this.upper.position.y=.36,this.upper.rotation.x=this.peck*.85,this.head.rotation.x=this.peck*.55,this.head.position.z=.2+this.peck*.02,this.head.rotation.y=Math.sin(this.time*.8+this.lookSeed)*.5*(1-this.peck)}};var Hi=-3,gr=7,Go=[{n:[0,-1],t:[1,0]},{n:[0,1],t:[1,0]},{n:[1,0],t:[0,1]},{n:[-1,0],t:[0,1]}],xr=(i,t,e,n,s)=>[i+e.n[0]*n+e.t[0]*s,t+e.n[1]*n+e.t[1]*s],Vl=[{name:`TACO
TIME`,tag:"Tacos  -  Burritos",color:"#f26b21",accent:"#1f8a70",text:"#ffffff"},{name:`HOT
DOGS`,tag:"Fresh off the cart",color:"#d62828",accent:"#fcbf49",text:"#ffffff"},{name:`FALAFEL
KING`,tag:"Wraps & Platters",color:"#2a9d8f",accent:"#f4a261",text:"#ffffff"},{name:`DUMPLING
WAGON`,tag:"Steamed or Fried",color:"#f4d35e",accent:"#c1272d",text:"#7a1417"},{name:`COFFEE &
DONUTS`,tag:"Open all night",color:"#6b4226",accent:"#f6a6c1",text:"#fff1dd"},{name:`CHICKEN
& RICE`,tag:"Extra white sauce",color:"#3a6ea5",accent:"#ffd166",text:"#ffffff"},{name:`ICE
CREAM`,tag:"Soft serve",color:"#f7a8c4",accent:"#4cc9f0",text:"#5b1a3c"},{name:`PRETZELS
& NUTS`,tag:"Warm & salty",color:"#9b5de5",accent:"#fee440",text:"#ffffff"}],lf=[["42 St Port Authority",["A","C","E"]],["34 St Herald Sq",["B","D","F","M","N","Q","R","W"]],["Times Sq 42 St",["1","2","3","7","N","Q","R","W"]],["50 St",["1"]],["Columbus Circle",["A","B","C","D","1"]],["Bryant Park",["B","D","F","M","7"]],["Grand Central",["4","5","6","7"]],["Union Sq",["L","N","Q","R","4","5","6"]]],_r=new Re;function xn(i,t,e,{shadow:n=!0,colors:s=!1}={}){let r=new An(i,t,Math.max(1,e.length));return e.forEach((a,o)=>{_r.position.set(a.x,a.y??0,a.z),_r.rotation.set(0,a.rot??0,0),_r.scale.set(a.sx??1,a.sy??1,a.sz??1),_r.updateMatrix(),r.setMatrixAt(o,_r.matrix),s&&r.setColorAt(o,new Nt(a.color))}),r.count=e.length,r.castShadow=n,r.receiveShadow=!0,r.frustumCulled=!1,r}function c_(i,t,e,n,s){let r=new le(i,t,e),a=r.attributes.uv,o=[e,e,0,0,i,i];for(let u=0;u<6;u++)if(!(u===2||u===3))for(let f=0;f<4;f++){let d=u*4+f;a.setXY(d,a.getX(d)*o[u]/Gu+n,a.getY(d)*t/Wu+s)}let c=r.index.array,h=new c.constructor(c.length-6),l=0;for(let u of[0,1,4,5,2])for(let f=0;f<6;f++)h[l++]=c[u*6+f];return r.setIndex(new Ie(h,1)),r.clearGroups(),r.addGroup(0,24,0),r.addGroup(24,6,1),r.translate(0,t/2,0),r}function l_(){let i=40/2,t=ht();if(t<.16)return[{x0:-i,x1:i,z0:-i,z1:i}];if(t<.42){let s=at(-7,7);return ht()<.5?[{x0:-i,x1:s,z0:-i,z1:i},{x0:s,x1:i,z0:-i,z1:i}]:[{x0:-i,x1:i,z0:-i,z1:s},{x0:-i,x1:i,z0:s,z1:i}]}if(t<.7){let s=at(-9,-3),r=at(3,9);return ht()<.5?[{x0:-i,x1:s,z0:-i,z1:i},{x0:s,x1:r,z0:-i,z1:i},{x0:r,x1:i,z0:-i,z1:i}]:[{x0:-i,x1:i,z0:-i,z1:s},{x0:-i,x1:i,z0:s,z1:r},{x0:-i,x1:i,z0:r,z1:i}]}let e=at(-8,8),n=at(-8,8);return[{x0:-i,x1:e,z0:-i,z1:n},{x0:e,x1:i,z0:-i,z1:n},{x0:-i,x1:e,z0:n,z1:i},{x0:e,x1:i,z0:n,z1:i}]}var h_=["brick","darkbrick","brownstone","tan"],u_=["limestone","brick","gray","tan","white","darkbrick"],f_=["glassblue","glassdark","gray","white","limestone","glassblue"];function uf(i){let t={boxes:[],circles:[]},e={colliders:t,subways:[],trucks:[],carts:[],vents:[],blocks:[],shopDoors:[],parked:[],vendors:[]},n=new ce;i.add(n),e.group=n;let s=new Ht({color:4540491,roughness:1}),r=new Tt(new ve(3e3,3e3).rotateX(-Math.PI/2),s);r.position.y=-.05,r.receiveShadow=!0,n.add(r);let a=qu(),o=new Ht({map:a,roughness:.95}),c=new ve(50,16).rotateX(-Math.PI/2),h=[],l=[],u=[],f=[];for(let U=Hi;U<=8;U++){for(let nt=Hi;nt<=gr;nt++)h.push({x:je(nt),y:.01,z:Ce(U)}),l.push({x:Ce(U),y:.01,z:je(nt),rot:Math.PI/2});for(let nt=Hi;nt<=8;nt++)u.push({x:Ce(nt),y:.012,z:Ce(U)})}for(let U=Hi;U<=gr;U++)for(let nt=Hi;nt<=gr;nt++)f.push({x:je(U),y:.15/2,z:je(nt)});n.add(xn(c,o,h,{shadow:!1})),n.add(xn(c,o,l,{shadow:!1}));let d=Yu();d.repeat.set(4,4),n.add(xn(new ve(16,16).rotateX(-Math.PI/2),new Ht({map:d,roughness:.95}),u,{shadow:!1}));let g=Zu();g.repeat.set(50/2.5,50/2.5),n.add(xn(new le(50,.15,50),new Ht({map:g,roughness:.95}),f,{shadow:!1}));let _={},m={};for(let U of Al)_[U.id]=new Ht({map:Xu(U),roughness:U.style==="glass"?.35:.9,metalness:U.style==="glass"?.25:0}),m[U.id]=new Ht({color:U.trim,roughness:.9});let p=new Ht({color:5066836,roughness:1}),S=vi.map((U,nt)=>{let it=$u(nt);return new Ht({map:it,emissiveMap:it,emissive:16777215,emissiveIntensity:.32,roughness:.6})}),b=[11740702,2055994,1914199,14711327,7023964],y=new ve(1,1),A=De([H(B.cyl,8016432,[0,2.9,0],[1.5,2.4,1.5]),H(B.cone,4862752,[0,4.6,0],[1.7,1.2,1.7]),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([U,nt])=>H(B.box,3815994,[U*1,.8,nt*1],[.12,1.7,.12])),H(B.box,3815994,[0,1.65,0],[2.4,.1,2.4])]),w=rn({roughness:.9}),R=new Ht({color:8422794,roughness:.9}),C=(U,nt,it,E,x,P)=>{let O=it.x1-it.x0,G=it.z1-it.z0,X=U+(it.x0+it.x1)/2,ft=nt+(it.z0+it.z1)/2,ct=O*G,j,Et=ht(),tt=ct<260?.02:.1+.4*P;Et<tt?j="tower":Et<tt+.42?j="mid":j="low",j==="low"&&ct>800&&(j="mid");let st;j==="low"?st=4+Math.floor(ht()*4):j==="mid"?st=8+Math.floor(ht()*9):st=Math.round(at(20,32)+P*16);let wt=qt(j==="low"?h_:j==="mid"?u_:f_),Ct=Al.find(et=>et.id===wt),mt;if(j==="tower"&&st>30){let et=Math.round(st*.45),ot=Math.round(st*.3);mt=[{s:1,f:et},{s:.72,f:ot},{s:.48,f:st-et-ot}]}else if(j==="tower"||j==="mid"&&st>11){let et=Math.round(st*(j==="tower"?.6:.78));mt=[{s:1,f:et},{s:j==="tower"?.74:.86,f:st-et}]}else mt=[{s:1,f:st}];let Ot=.15,Rt=Ot,Yt=X,L=ft,vt=O,J=G;if(mt.forEach((et,ot)=>{let gt=O*et.s-.1,kt=G*et.s-.1,ie=et.f*3.6,fe=ot===0?X:X+at(-1,1)*(O-gt)/2,te=ot===0?ft:ft+at(-1,1)*(G-kt)/2,He=c_(gt,ie,kt,ht(),Math.floor(ht()*4)*.25),Ge=new Tt(He,[_[wt],p]);if(Ge.position.set(fe,Ot,te),Ge.castShadow=!0,Ge.receiveShadow=E,n.add(Ge),Ct.style!=="glass"){let yn=new Tt(new le(gt+.7,.55,kt+.7),m[wt]);yn.position.set(fe,Ot+ie-.2,te),yn.castShadow=!0,n.add(yn)}Ot+=ie,Rt=Ot,Yt=fe,L=te,vt=gt,J=kt}),E){if(t.boxes.push({minX:X-O/2,maxX:X+O/2,minZ:ft-G/2,maxZ:ft+G/2,h:Rt}),(j==="low"||j==="mid")&&ht()<.55){let ot=new Tt(A,w);ot.position.set(Yt+at(-1,1)*(vt/2-3),Rt,L+at(-1,1)*(J/2-3)),ot.scale.setScalar(at(.8,1.15)),ot.castShadow=!0,n.add(ot)}let et=1+Math.floor(ht()*3);for(let ot=0;ot<et;ot++){let gt=at(2.5,5),kt=at(1.5,3),ie=at(2.5,5),fe=new Tt(new le(gt,kt,ie),R);fe.position.set(Yt+at(-1,1)*Math.max(vt/2-4,0),Rt+kt/2,L+at(-1,1)*Math.max(J/2-4,0)),fe.castShadow=!0,n.add(fe)}if(j==="tower"&&ht()<.6){let ot=at(10,24),gt=new Tt(new Qe(.1,.35,ot,6),R);gt.position.set(Yt,Rt+ot/2,L),n.add(gt)}for(let ot of x){let gt=ot.len,kt=Math.max(1,Math.round(gt/9.5)),ie=gt/kt;for(let fe=0;fe<kt;fe++){let te=-gt/2+ie*(fe+.5),He=Math.floor(ht()*S.length),Ge=S[He],yn=new Tt(y,Ge);yn.scale.set(ie-.4,3.3,1);let Xi=ot.cx+ot.tx*te+ot.nx*.05,vn=ot.cz+ot.tz*te+ot.nz*.05;if(yn.position.set(Xi,.15+1.65,vn),yn.rotation.y=Math.atan2(ot.nx,ot.nz),n.add(yn),e.shopDoors.push({x:Xi+ot.nx*.95,z:vn+ot.nz*.95,nx:ot.nx,nz:ot.nz,kind:He,label:vi[He].text,seed:e.shopDoors.length}),ht()<.4){let Hn=new Tt(new le(ie*.86,.07,1.3),new Ht({color:qt(b),roughness:.8}));Hn.position.set(Xi+ot.nx*.65,.15+3,vn+ot.nz*.65),Hn.rotation.y=Math.atan2(ot.nx,ot.nz),Hn.rotateX(.28),Hn.castShadow=!0,n.add(Hn)}}}}},M=40/2;for(let U=Hi;U<=gr;U++)for(let nt=Hi;nt<=gr;nt++){let it=je(U),E=je(nt),x=U>=0&&U<5&&nt>=0&&nt<5,P=Vt(1-Math.hypot(it,E)/(165*1.2),0,1);for(let O of l_()){let G=[],X=O.x1-O.x0,ft=O.z1-O.z0,ct=(O.x0+O.x1)/2,j=(O.z0+O.z1)/2;O.z0<=-M+.01&&G.push({len:X,cx:it+ct,cz:E+O.z0-.05,tx:1,tz:0,nx:0,nz:-1}),O.z1>=M-.01&&G.push({len:X,cx:it+ct,cz:E+O.z1+.05,tx:1,tz:0,nx:0,nz:1}),O.x0<=-M+.01&&G.push({len:ft,cx:it+O.x0-.05,cz:E+j,tx:0,tz:1,nx:-1,nz:0}),O.x1>=M-.01&&G.push({len:ft,cx:it+O.x1+.05,cz:E+j,tx:0,tz:1,nx:1,nz:0}),C(it,E,O,x,G,P)}}let v=[],I=[],k=[],V=[],K=[],rt={},Q=(U,nt,it)=>`${U},${nt},${it}`,lt=(U,nt,it,E,x)=>(rt[Q(U,nt,it)]||[]).every(([P,O])=>E+x<P||E-x>O),Z=(U,nt,it,E,x)=>{(rt[Q(U,nt,it)]=rt[Q(U,nt,it)]||[]).push([E-x,E+x])},yt=[],xt=Math.floor(4/2);Z(xt,xt,0,-17,5.5),Z(xt,xt,0,0,3);let Pt={i:xt,j:xt,side:0,off:10},Wt={i:xt,j:xt,side:0,off:-10};Z(xt,xt,0,10,4.2),Z(xt,xt,0,-10,2.2);for(let U=0;U<5;U++)for(let nt=0;nt<5;nt++){let it=je(U),E=je(nt),x=U===xt&&nt===xt;if(x||ht()<.38){let O=x?0:Math.floor(ht()*4),G=x?Pt.off:at(-12,12);(x||lt(U,nt,O,G,4.2))&&(x||Z(U,nt,O,G,4.2),yt.push({cx:it,cz:E,side:Go[O],off:G}))}if(x)e.carts.push({cx:it,cz:E,side:Go[0],off:Wt.off});else{let O=ht()<.55?2:1;for(let G=0,X=0;G<6&&X<O;G++){let ft=Math.floor(ht()*4),ct=at(-15,15);lt(U,nt,ft,ct,2.4)&&(Z(U,nt,ft,ct,2.4),e.carts.push({cx:it,cz:E,side:Go[ft],off:ct}),X++)}}for(let O=0;O<4;O++){let G=Go[O],X=Math.atan2(G.n[0],G.n[1]);for(let ct of[-12.5,12.5])if(lt(U,nt,O,ct,.8)){Z(U,nt,O,ct,.8);let[j,Et]=xr(it,E,G,24.3,ct);v.push({x:j,y:.15,z:Et,rot:X}),t.circles.push({x:j,z:Et,r:.22})}let ft=[-18,-6.5,6.5,18].sort(()=>ht()-.5).slice(0,3);for(let ct of ft){let j=ct+at(-1,1);if(!lt(U,nt,O,j,1.6))continue;Z(U,nt,O,j,1.6);let[Et,tt]=xr(it,E,G,24.2,j);I.push({x:Et,y:.15,z:tt,color:qt([4160058,5016129,3500853,5937736,6989903]),sy:at(.9,1.2)}),t.circles.push({x:Et,z:tt,r:.38})}for(let[ct,j,Et,tt]of[[k,.4,.24,.6],[V,.5,.34,.7],[K,.28,.42,.8]]){if(ht()>j)continue;let st=at(-20,20);if(!lt(U,nt,O,st,tt+.3))continue;Z(U,nt,O,st,tt+.3);let[wt,Ct]=xr(it,E,G,24.2,st);ct.push({x:wt,y:.15,z:Ct,rot:X}),t.circles.push({x:wt,z:Ct,r:Et})}}}let re=new Qe(.09,.13,1,8).translate(0,.5,0),$=new Ht({color:2765872,roughness:.7});n.add(xn(re,$,v.map(U=>({...U,sy:6.4}))));let ut=new le(.4,.16,1.2).translate(0,0,.45);n.add(xn(ut,new Ht({color:13620946,roughness:.5}),v.map(U=>({...U,y:.15+6.4}))));let It=new Qe(.2,.28,1,7).translate(0,.5,0);n.add(xn(It,new Ht({color:4863526,roughness:1}),I.map(U=>({...U,sy:3.4}))));let bt=new Ro(2.4,1);n.add(xn(bt,new Ht({roughness:.9,flatShading:!0}),I.map(U=>({...U,y:.15+4.9,sy:.85*U.sy})),{colors:!0})),n.add(xn(new Qe(.16,.2,.62,8).translate(0,.31,0),new Ht({color:12986408,roughness:.6}),k)),n.add(xn(new Nn(.17,8,6).translate(0,.7,0),new Ht({color:12986408,roughness:.6}),k)),n.add(xn(new Qe(.3,.26,.9,10).translate(0,.45,0),new Ht({color:3099194,roughness:.8}),V)),n.add(xn(new le(.55,1.2,.62).translate(0,.6,0),new Ht({color:2051740,roughness:.5}),K));let Ft=2050616,Y=U=>lf[U%lf.length];yt.forEach((U,nt)=>{let[it,E]=Y(nt+Math.floor(ht()*3)),x=4.2,P=2.4,O=new ce,G=[];G.push(H(B.box,4474955,[0,.12,P/2-.1],[x,.24,.2])),G.push(H(B.box,4474955,[0,.12,-P/2+.1],[x,.24,.2])),G.push(H(B.box,4474955,[-x/2+.1,.12,0],[.2,.24,P]));for(let Rt of[-P/2+.1,P/2-.1]){G.push(H(B.box,Ft,[0,1.05,Rt],[x,.07,.07])),G.push(H(B.box,Ft,[0,.62,Rt],[x,.05,.05]));for(let Yt=-x/2+.1;Yt<=x/2;Yt+=.7)G.push(H(B.box,Ft,[Yt,.6,Rt],[.05,1,.05]))}G.push(H(B.box,Ft,[-x/2+.1,1.05,0],[.07,.07,P]));for(let Rt=-P/2+.1;Rt<=P/2;Rt+=.55)G.push(H(B.box,Ft,[-x/2+.1,.6,Rt],[.05,1,.05]));for(let Rt of[-P/2+.1,P/2-.1])G.push(H(B.cyl,1711391,[x/2+.05,1.6,Rt],[.06,3.2,.06]));O.add(new Tt(De(G),rn({roughness:.6})));for(let Rt of[-P/2+.1,P/2-.1]){let Yt=new Tt(new Nn(.28,12,10),new ye({color:6750102}));Yt.position.set(x/2+.05,3.4,Rt),O.add(Yt)}let X=new Tt(new ve(x-.55,P-.55).rotateX(-Math.PI/2),new ye({map:Qu()}));X.position.y=.04,O.add(X);let ft=new Tt(new ve(.95,1.9),new ye({map:Ku(it,E),side:nn}));ft.rotation.y=Math.PI/2,ft.position.set(x/2+.75,2,0),O.add(ft);let ct=new Tt(new Qe(.05,.05,1.1,6),new Ht({color:1711391}));ct.position.set(x/2+.75,.55,0),O.add(ct);let[j,Et]=xr(U.cx,U.cz,U.side,23.1,U.off);O.position.set(j,.15,Et),O.rotation.y=Math.atan2(U.side.n[0],U.side.n[1]),O.traverse(Rt=>{Rt.isMesh&&(Rt.castShadow=!0)}),n.add(O);let tt=U.side.n[0]!==0,st=tt?P/2:x/2,wt=tt?x/2:P/2;t.boxes.push({minX:j-st,maxX:j+st,minZ:Et-wt,maxZ:Et+wt,h:1.3});let Ct=Math.atan2(U.side.n[0],U.side.n[1]),mt=Math.cos(Ct),Ot=-Math.sin(Ct);e.subways.push({x:j,z:Et,station:it,lines:E,openX:mt,openZ:Ot,exitX:j+mt*(x/2+1.6),exitZ:Et+Ot*(x/2+1.6),exitYaw:Math.atan2(mt,Ot),id:e.subways.length})});let pt=["HOT DOGS","HOT DOGS","PRETZELS","GYROS"].map(U=>ef(U)),Bt=Cl("#f3c623","#d6291d");e.carts.forEach(U=>{let[nt,it]=xr(U.cx,U.cz,U.side,23.2,U.off),E=new ce;E.add(new Tt(De([H(B.box,12172995,[0,.95,0],[1.6,.9,.8]),H(B.box,9212568,[0,1.45,0],[1.5,.1,.75]),H(B.box,9212568,[0,.45,0],[1.4,.3,.7]),H(B.cyl,2236962,[-.55,.3,.45],[.3,.08,.3],[0,0,Math.PI/2]),H(B.cyl,2236962,[.55,.3,.45],[.3,.08,.3],[0,0,Math.PI/2]),H(B.cyl,15263976,[0,2,-.2],[.04,1.2,.04])]),rn({roughness:.5,metalness:.2})));let x=new Tt(new Es(1.4,.55,16,1,!0),new Ht({map:Bt,side:nn,roughness:.8}));x.position.set(0,2.55,-.2),E.add(x);let P=new Tt(new ve(1.2,.45),new ye({map:qt(pt)}));P.position.set(0,.95,.41),E.add(P),E.position.set(nt,.15,it),E.rotation.y=Math.atan2(U.side.n[0],U.side.n[1]),E.traverse(ft=>{ft.isMesh&&(ft.castShadow=!0)}),n.add(E),t.circles.push({x:nt,z:it,r:.95}),U.x=nt,U.z=it,U.nx=U.side.n[0],U.nz=U.side.n[1],U.cd=0;let O=nt-U.nx*1.35,G=it-U.nz*1.35,X=new zn({outfit:"vendor",scale:1.2});X.root.position.set(O,.15,G),X.root.rotation.y=Math.atan2(U.nx,U.nz),n.add(X.root),t.circles.push({x:O,z:G,r:.38}),e.vendors.push({pigeon:X,x:O,z:G,t:at(1,6)})});let _t={},ee=U=>{let nt=new ce,it=ju(U),E=new Nt(U.color),x=new Ht({color:E,roughness:.55}),P=new Ht({map:it,roughness:.55}),O=new Ht({color:2435116,roughness:.6}),G=new Tt(new le(4.6,2.4,2.3),[x,x,x,O,P,P]);G.position.set(-.9,1.85,0),nt.add(G);let X=new Tt(new le(1.8,1.45,2.3),x);X.position.set(2.3,1.375,0),nt.add(X);let ft=new Ht({color:1317926,roughness:.2,metalness:.3}),ct=new Tt(new le(.06,.65,2),ft);ct.position.set(3.2,1.55,0);let j=new Tt(new le(.95,.6,2.34),ft);j.position.set(2.25,1.6,0);let Et=new Tt(new le(.22,.3,2.3),O);Et.position.set(3.2,.62,0),nt.add(ct,j,Et);let tt=new Tt(new le(3,.06,1),new Ht({map:Cl("#ffffff",U.accent),roughness:.8}));tt.position.set(.55,2.55,1.6),tt.rotation.x=.28,nt.add(tt);let st=new Tt(new le(.9,.3,.7),new Ht({color:11185842}));st.position.set(-1.5,3.2,0),nt.add(st);let wt=new Qe(.46,.46,.32,14).rotateX(Math.PI/2);for(let mt of[2.2,-2])for(let Ot of[-1,1]){let Rt=new Tt(wt,new Ht({color:1382170}));Rt.position.set(mt,.46,Ot*1.05),nt.add(Rt)}let Ct=new ye({color:16773828});for(let mt of[-1,1]){let Ot=new Tt(new le(.05,.16,.3),Ct);Ot.position.set(3.22,.85,mt*.8),nt.add(Ot)}return nt.traverse(mt=>{mt.isMesh&&(mt.castShadow=!0)}),nt},D=tf(),we=rn({roughness:.6}),jt=De([H(B.cyl,15234090,[0,.25,0],[.34,.5,.34]),H(B.cyl,15921906,[0,.6,0],[.3,.2,.3]),H(B.cyl,15234090,[0,.9,0],[.26,.4,.26]),H(B.cyl,15921906,[0,1.2,0],[.22,.2,.22]),H(B.cyl,15234090,[0,1.45,0],[.18,.3,.18])]),Kt=0;for(let U of["x","z"])for(let nt=0;nt<=5;nt++)for(let it=0;it<5;it++)for(let E of[1,-1]){let x=U==="x"&&nt===2&&it===xt&&E===1,P=U==="x"?[E>0?1:-1,0]:[0,E>0?-1:1],O=Math.atan2(-P[1],P[0]),G=Ce(nt),X=je(it),ft=(j,Et)=>U==="x"?[X+j,G+E*Et]:[G+E*Et,X+j],ct=ht();if(x){let j=Vl[1],[Et,tt]=ft(-5,6.2),st=ee(j);st.position.set(Et,.01,tt),st.rotation.y=O,n.add(st),t.boxes.push({minX:Et-(U==="x"?3.2:1.2),maxX:Et+(U==="x"?3.2:1.2),minZ:tt-(U==="x"?1.2:3.2),maxZ:tt+(U==="x"?1.2:3.2),h:3.3}),e.trucks.push({x:Et,z:tt,name:j.name.replace(`
`," ")}),Kt++;continue}if(ct<.14){let j=Vl[Kt%Vl.length],Et=at(-11,11),[tt,st]=ft(Et,6.2),wt=ee(j);wt.position.set(tt,.01,st),wt.rotation.y=O,n.add(wt),t.boxes.push({minX:tt-(U==="x"?3.2:1.2),maxX:tt+(U==="x"?3.2:1.2),minZ:st-(U==="x"?1.2:3.2),maxZ:st+(U==="x"?1.2:3.2),h:3.3}),e.trucks.push({x:tt,z:st,name:j.name.replace(`
`," ")}),Kt++}else if(ct<.72){let j=ht()<.4?2:1;for(let Et=0;Et<j;Et++){let tt=qt(["taxi","taxi","taxi","sedan","sedan","suv","van"]),st=Fl(tt,tt==="taxi"?Bl:Ol()),wt=j===2?(Et===0?-9:9)+at(-2,2):at(-13,13),[Ct,mt]=ft(wt,6.2+.2);st.position.set(Ct,.01,mt),st.rotation.y=O,n.add(st);let Ot=st.userData.L/2,Rt=st.userData.W/2,Yt={minX:Ct-(U==="x"?Ot:Rt),maxX:Ct+(U==="x"?Ot:Rt),minZ:mt-(U==="x"?Rt:Ot),maxZ:mt+(U==="x"?Rt:Ot),h:1.7};t.boxes.push(Yt),e.parked.push({mesh:st,type:tt,L:st.userData.L,W:st.userData.W,x:Ct,z:mt,rot:O,box:Yt,kind:"parked"})}}else if(ct<.8){let[j,Et]=ft(at(-10,10),6.2-.6),tt=new Tt(jt,we);tt.position.set(j,.01,Et),tt.castShadow=!0,n.add(tt),t.circles.push({x:j,z:Et,r:.38});let st=[];for(let wt=0;wt<7;wt++){let Ct=new wo(new cr({map:D,transparent:!0,depthWrite:!1,opacity:0}));Ct.position.set(j,1.6,Et),n.add(Ct),st.push({sp:Ct,t:wt/7,drift:[at(-.4,.4),at(-.4,.4)]})}e.vents.push({x:j,z:Et,puffs:st})}}for(let U=0;U<=5;U++)for(let nt=0;nt<=5;nt++){let it=Ce(nt)+8.7,E=Ce(U)-8.7,x=new Tt(new ve(1.7,.4),new ye({map:Rl(Cs[U]),side:nn}));x.position.set(it,.15+5.55,E-.9),x.rotation.y=Math.PI/2;let P=new Tt(new ve(1.7,.4),new ye({map:Rl(Rs[nt]),side:nn}));P.position.set(it+.9,.15+5,E),n.add(x,P),t.circles.push({x:it,z:E,r:.16}),t.circles.push({x:Ce(nt)-8.7,z:Ce(U)-8.7,r:.16}),t.circles.push({x:Ce(nt)-8.7,z:Ce(U)+8.7,r:.16}),t.circles.push({x:Ce(nt)+8.7,z:Ce(U)+8.7,r:.16})}return n.updateMatrixWorld(!0),n.traverse(U=>{U!==n&&!U.isSprite&&(U.matrixAutoUpdate=!1)}),e.groundHeight=(U,nt)=>{let it=Math.round(U/66+4/2),E=Math.round(nt/66+4/2);return it<0||it>=5||E<0||E>=5?0:Math.abs(U-je(it))<=50/2&&Math.abs(nt-je(E))<=50/2?.15:0},e.spawn={x:-14,z:-22.6,yaw:Math.PI/2},e.update=(U,nt=0,it=0)=>{for(let E of e.vendors)(E.x-nt)**2+(E.z-it)**2>4900||(E.t-=U,E.t<0&&(E.pigeon.startPeck(),E.t=at(3,9)),E.pigeon.update(U,0));for(let E of e.vents)for(let x of E.puffs){x.t+=U*.28,x.t>1&&(x.t-=1);let P=x.t;x.sp.position.set(E.x+x.drift[0]*P*2.5,1.6+P*4.2,E.z+x.drift[1]*P*2.5),x.sp.scale.setScalar(.9+P*3.6),x.sp.material.opacity=Math.sin(Math.min(P,1)*Math.PI)*.55}},e}var d_=[1.3,1.7,2.1,2.6],df=115;function pf(i,t,e,n){let s=2*e;return n=(n%(4*s)+4*s)%(4*s),n<s?[i-e+n,t-e]:n<2*s?[i+e,t-e+(n-s)]:n<3*s?[i+e-(n-2*s),t+e]:[i-e,t+e-(n-3*s)]}var Xo=class{constructor(t,e=220){this.group=new ce,t.add(this.group),this.list=[];let n=Math.floor(4/2);for(let s=0;s<e;s++){let r,a,o=null;s<16?(r=n,a=n,o=21.2+at(-22,22)):s<e*.55?(r=n+Math.floor(ht()*3)-1,a=n+Math.floor(ht()*3)-1):(r=Math.floor(ht()*5),a=Math.floor(ht()*5));let c=s%5===0||s%5===1?"suit":s%5===4?"bare":"casual",h=new zn({outfit:c,scale:at(1.12,1.32)}),l=21.2+at(-.3,.7),u={pigeon:h,cx:je(r),cz:je(a),r:l,p:o??ht()*8*l,dir:ht()<.5?1:-1,speed:qt(d_),state:ht()<.3?"pause":"walk",timer:at(1,5),yaw:0,v:0,x:0,z:0,shown:!0,cooT:at(8,40)};this.group.add(h.root),this.list.push(u),this.place(u,1)}}place(t,e=.2){let[n,s]=pf(t.cx,t.cz,t.r,t.p),[r,a]=pf(t.cx,t.cz,t.r,t.p+t.dir*.5);t.x=n,t.z=s,t.pigeon.root.position.set(n,.15,s);let o=Math.atan2(r-n,a-s);t.yaw=e>=1?o:gn(t.yaw,o,e),t.pigeon.root.rotation.y=t.yaw}nearest(t,e,n){let s=null,r=n*n;for(let a of this.list){if(!a.shown)continue;let o=(a.x-t)**2+(a.z-e)**2;o<r&&(r=o,s=a)}return s}update(t,e){let n=df*df;for(let s of this.list){s.timer-=t,s.state==="walk"?(s.v=Math.min(s.speed,s.v+t*5),s.p+=s.dir*s.v*t,s.timer<=0&&(s.state="pause",s.timer=at(1.5,5))):(s.v=Math.max(0,s.v-t*8),s.p+=s.dir*s.v*t,s.v<.05&&ht()<t*.9&&s.pigeon.startPeck(),s.timer<=0&&(s.state="walk",s.timer=at(4,14),ht()<.3&&(s.dir*=-1)));let r=s.x-e.x,a=s.z-e.z,o=r*r+a*a;o<2.6*2.6&&e.speed>8&&(s.state="walk",s.timer=3,s.v=s.speed*2.2);let c=o<n;c!==s.shown&&(s.shown=c,s.pigeon.root.visible=c),c?(this.place(s,Math.min(1,t*8)),s.pigeon.update(t,s.v)):this.place(s,1)}}};var si=.32,p_=4.2,m_=9.5,g_=20,x_=6.2,qo=class{constructor(t,e,n,s){this.world=n,this.camera=e,this.pigeon=new zn({plumage:0,outfit:"bare",bandana:!0,scale:1.25}),t.add(this.pigeon.root),this.outdoor={colliders:n.colliders,groundHeight:n.groundHeight,bounds:{minX:-171.5,maxX:171.5,minZ:-171.5,maxZ:171.5},camMaxY:1e9},this.ctx=this.outdoor,this.x=n.spawn.x,this.z=n.spawn.z,this.y=this.ctx.groundHeight(this.x,this.z),this.vx=0,this.vz=0,this.vy=0,this.yaw=n.spawn.yaw,this.speed=0,this.grounded=!0,this.flapping=!1,this.driving=!1,this.camYaw=n.spawn.yaw+Math.PI,this.camPitch=.28,this.camDist=5.2,this.camDistCur=5.2,this.lastLook=0,this.keys=Object.create(null),this.locked=!1,this.dom=s,this.touchMove=null,this.frozen=!1,addEventListener("keydown",r=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(r.code)&&r.preventDefault(),this.keys[r.code]=!0}),addEventListener("keyup",r=>{this.keys[r.code]=!1}),addEventListener("blur",()=>{this.keys=Object.create(null)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===s}),addEventListener("mousemove",r=>{!this.locked&&!this.dragging||(this.camYaw-=r.movementX*.0026,this.camPitch=Vt(this.camPitch+r.movementY*.0026,-.15,1.15),this.lastLook=performance.now())}),s.addEventListener("mousedown",()=>{this.locked||(this.dragging=!0)}),addEventListener("mouseup",()=>{this.dragging=!1}),this.snapCamera()}get active(){return this.locked||this.dragging}setContext(t){this.ctx=t}teleport(t,e,n,s=null){this.x=t,this.z=e,this.y=s??this.ctx.groundHeight(t,e),this.vx=this.vz=this.vy=0,this.yaw=n,this.camYaw=n+Math.PI,this.grounded=!0,this.speed=0,this.camPitch=.28,this.camDist=5.2,this.pigeon.root.position.set(t,this.y,e),this.pigeon.root.rotation.y=n,this.snapCamera()}inputAxes(){let t=this.keys,e=(t.KeyW||t.ArrowUp?1:0)-(t.KeyS||t.ArrowDown?1:0),n=(t.KeyD||t.ArrowRight?1:0)-(t.KeyA||t.ArrowLeft?1:0);this.touchMove&&(e+=-this.touchMove.y,n+=this.touchMove.x);let s=Math.hypot(e,n);return s>1&&(e/=s,n/=s),[e,n]}collide(){let t=this.ctx.colliders,e=this.y;for(let s of t.boxes){if(s.disabled||e>s.h)continue;let r=Vt(this.x,s.minX,s.maxX),a=Vt(this.z,s.minZ,s.maxZ),o=this.x-r,c=this.z-a,h=o*o+c*c;if(!(h>=si*si))if(h>1e-8){let l=Math.sqrt(h);this.x=r+o/l*si,this.z=a+c/l*si}else{let l=this.x-s.minX,u=s.maxX-this.x,f=this.z-s.minZ,d=s.maxZ-this.z,g=Math.min(l,u,f,d);g===l?this.x=s.minX-si:g===u?this.x=s.maxX+si:g===f?this.z=s.minZ-si:this.z=s.maxZ+si}}for(let s of t.circles){if(e>(s.h??1.2))continue;let r=this.x-s.x,a=this.z-s.z,o=s.r+si,c=r*r+a*a;if(c>=o*o||c<1e-10)continue;let h=Math.sqrt(c);this.x=s.x+r/h*o,this.z=s.z+a/h*o}let n=this.ctx.bounds;this.x=Vt(this.x,n.minX,n.maxX),this.z=Vt(this.z,n.minZ,n.maxZ)}update(t){if(t=Math.min(t,.05),this.driving){this.flapping=!1,this.updateCamera(t);return}let[e,n]=this.frozen?[0,0]:this.inputAxes(),s=e,r=n,a=!this.frozen&&!!(this.keys.ShiftLeft||this.keys.ShiftRight),o=a?m_:p_,c=Math.sin(this.camYaw),h=Math.cos(this.camYaw),l=-c,u=-h,f=h,d=-c,g=l*s+f*r,_=u*s+d*r,m=Math.hypot(g,_),p=this.grounded?40:14;if(m>.01)g/=m,_/=m,this.vx=dr(this.vx,g*o*Math.min(1,m),p*t),this.vz=dr(this.vz,_*o*Math.min(1,m),p*t),this.yaw=gn(this.yaw,Math.atan2(g,_),Math.min(1,t*12));else{let A=this.grounded?50:4;this.vx=dr(this.vx,0,A*t),this.vz=dr(this.vz,0,A*t)}let S=!this.frozen&&this.keys.Space;S&&this.grounded&&!this.jumpHeld&&(this.vy=x_,this.grounded=!1),this.jumpHeld=!!S,this.flapping=!1,this.grounded||(this.vy-=g_*t,S&&this.vy<0&&(this.vy=Math.max(this.vy,-2.2),this.flapping=!0,this.vy+=14*t)),this.x+=this.vx*t,this.z+=this.vz*t,this.y+=this.vy*t,this.collide();let b=this.ctx.groundHeight(this.x,this.z);this.y<=b?(this.y=b,this.vy=0,this.grounded=!0):this.grounded&&this.y-b<.3?this.y=b:this.grounded=!1,this.y=Math.min(this.y,25),this.speed=Math.hypot(this.vx,this.vz);let y=this.pigeon;y.root.position.set(this.x,this.y,this.z),y.root.rotation.y=this.yaw,y.update(t,this.speed*(a?.8:1),{airborne:!this.grounded,vy:this.vy,flap:this.flapping}),this.updateCamera(t)}snapCamera(){this.camDistCur=this.camDist,this.updateCamera(.016,!0)}updateCamera(t,e=!1){let n=this.x,s=this.y+(this.driving?1:.75),r=this.z,a=Math.sin(this.camYaw),o=Math.cos(this.camYaw),c=Math.cos(this.camPitch),h=Math.sin(this.camPitch),l=this.camDist,u=this.ctx.colliders.boxes,f=l;for(let d=l;d>.8;d-=.4){let g=n+a*c*d,_=s+h*d,m=r+o*c*d,p=_<.25||_>this.ctx.camMaxY;if(!p){for(let S of u)if(!S.disabled&&_<S.h&&g>S.minX-.3&&g<S.maxX+.3&&m>S.minZ-.3&&m<S.maxZ+.3){p=!0;break}}if(!p){f=d;break}f=.8}this.camDistCur=e||f<this.camDistCur?f:this.camDistCur+(f-this.camDistCur)*Math.min(1,t*3),l=this.camDistCur,this.camera.position.set(n+a*c*l,Vt(s+h*l,.3,this.ctx.camMaxY),r+o*c*l),this.camera.lookAt(n,s+.1,r)}};var __=2.6,y_=30,Yo=class{constructor(t,e,n,s={}){this.world=t,this.traffic=e,this.player=n,this.hooks=s,this.d=null,this.abandoned=[],this.obs={x:0,z:0,r:2,v:0},this.input={throttle:0,slip:0,handbrake:!1}}get active(){return!!this.d}get car(){return this.d?this.d.car:null}get speed(){return this.d?this.d.speed:0}candidates(){return[...this.world.parked,...this.traffic.vehicles,...this.abandoned]}distTo(t,e,n){let s=t.mesh.rotation.y,r=Math.cos(s),a=-Math.sin(s),o=e-t.x,c=n-t.z,h=o*r+c*a,l=o*a-c*r,u=Math.max(Math.abs(h)-t.L/2,0),f=Math.max(Math.abs(l)-t.W/2,0);return Math.hypot(u,f)}nearest(t,e){let n=null,s=__;for(let r of this.candidates()){if(Math.abs(r.x-t)>8||Math.abs(r.z-e)>8)continue;let a=this.distTo(r,t,e);a<s&&(s=a,n=r)}return n}label(t){return{taxi:"taxi",sedan:"car",suv:"SUV",van:"van",bus:"bus"}[t.type]||"car"}releaseStatic(t){if(t.circles){let n=this.world.colliders.circles;for(let s of t.circles){let r=n.indexOf(s);r>=0&&n.splice(r,1)}t.circles=null}if(t.obs){let n=this.traffic.obstacles.indexOf(t.obs);n>=0&&this.traffic.obstacles.splice(n,1),t.obs=null}let e=this.abandoned.indexOf(t);e>=0&&this.abandoned.splice(e,1)}enter(t){let e=this.player;t.kind==="parked"?t.box.disabled=!0:this.traffic.vehicles.includes(t)&&this.traffic.removeVehicle(t),this.releaseStatic(t),t.kind=t.kind||"traffic",this.d={car:t,x:t.x,z:t.z,rot:t.mesh.rotation.y,speed:t.v||0,steer:0,crashT:0},this.traffic.obstacles.push(this.obs),e.driving=!0,e.pigeon.root.visible=!1,e.camDist=8.8,e.camPitch=.3,this.syncPlayer(!0),e.camYaw=this.behindYaw(),e.snapCamera(),this.hooks.entered?.(t)}behindYaw(){let t=this.d.rot;return Math.atan2(-Math.cos(t),Math.sin(t))}isFree(t,e,n=.45){let s=this.world.colliders;if(Math.abs(t)>171.5||Math.abs(e)>171.5)return!1;for(let r of s.boxes)if(!(r.disabled||r.h<.3)&&t>r.minX-n&&t<r.maxX+n&&e>r.minZ-n&&e<r.maxZ+n)return!1;for(let r of s.circles)if(Math.hypot(t-r.x,e-r.z)<r.r+n)return!1;return!0}exit(){let t=this.d;if(!t||Math.abs(t.speed)>4)return!1;let{car:e}=t,n=this.player,s=Math.cos(t.rot),r=-Math.sin(t.rot),a=r,o=-s,c=e.W/2+1,h=[[a*c,o*c],[-a*c,-o*c],[-s*(e.L/2+1),-r*(e.L/2+1)],[s*(e.L/2+1),r*(e.L/2+1)],[a*(c+1.5),o*(c+1.5)],[-a*(c+1.5),-o*(c+1.5)]],l=null;for(let[g,_]of h)if(this.isFree(t.x+g,t.z+_,.45)){l=[g,_];break}if(!l)return!1;let u=e.W/2+.05;e.circles=[-.32,0,.32].map(g=>({x:t.x+s*e.L*g,z:t.z+r*e.L*g,r:u,h:2.2})),this.world.colliders.circles.push(...e.circles),e.x=t.x,e.z=t.z,e.v=0,e.kind!=="parked"&&(e.abandoned=!0,e.abT=0,e.obs={x:e.x,z:e.z,r:(e.L+e.W)/4+.3,v:0},this.traffic.obstacles.push(e.obs),this.abandoned.push(e));let f=this.traffic.obstacles.indexOf(this.obs);f>=0&&this.traffic.obstacles.splice(f,1),this.d=null,n.driving=!1,n.pigeon.root.visible=!0;let d=Math.atan2(l[0],l[1]);return n.teleport(t.x+l[0],t.z+l[1],d),this.input.throttle=0,this.input.slip=0,this.hooks.exited?.(e),!0}syncPlayer(t=!1){let e=this.d,n=this.player,s=n.ctx.groundHeight(e.x,e.z);n.x=e.x,n.z=e.z,n.y=s,n.speed=Math.abs(e.speed),e.car.x=e.x,e.car.z=e.z,e.car.mesh.position.set(e.x,s+.01,e.z),e.car.mesh.rotation.y=e.rot,this.obs.x=e.x,this.obs.z=e.z,this.obs.v=e.speed,this.obs.r=(e.car.L+e.car.W)/4+.3,n.pigeon.root.position.set(e.x,s,e.z)}update(t,e){this.updateAbandoned(t);let n=this.d;if(!n)return;t=Math.min(t,.05);let s=this.player,r=n.car,a=e.KeyW||e.ArrowUp,o=e.KeyS||e.ArrowDown,c=e.KeyA||e.ArrowLeft,h=e.KeyD||e.ArrowRight,l=!!e.Space,u=(a?1:0)-(o?1:0)+(s.touchMove?-s.touchMove.y:0),f=(c?1:0)-(h?1:0)+(s.touchMove?-s.touchMove.x:0);f=Vt(f,-1,1);let d=Vt(u,-1,1),g=0;d>.05?g=(n.speed<-.5?20:n.speed>14?5.5:9.5)*d:d<-.05&&(g=(n.speed>.5?-18:-7)*-d);let _=n.speed;n.speed+=g*t,Math.abs(d)<.05&&(n.speed-=Math.sign(n.speed)*Math.min(Math.abs(n.speed),2.8*t)),l&&(n.speed-=Math.sign(n.speed)*Math.min(Math.abs(n.speed),26*t)),_>0&&d<-.05&&n.speed<0&&_>.5&&(n.speed=Math.max(n.speed,0)),n.speed=Vt(n.speed,-7,23),n.steer+=Vt(f-n.steer,-7*t,7*t);let m=Math.abs(n.speed),p=n.steer*2.2*(m/(m+3.2))/(1+m*.045)*(n.speed>=0?1:-1)*(l?1.6:1);n.rot+=p*t;let S=Math.cos(n.rot),b=-Math.sin(n.rot);n.x+=S*n.speed*t,n.z+=b*n.speed*t,this.collide(n,t),n.x=Vt(n.x,-171.5,171.5),n.z=Vt(n.z,-171.5,171.5),this.input.throttle=d,this.input.handbrake=l,this.input.slip=Math.abs(n.steer)*m/11+(l?.8*Vt(m/8,0,1):0)+(g>8&&m<4?.3:0),this.syncPlayer();let y=performance.now()-s.lastLook>1500;y&&m>1.2&&(s.camYaw=gn(s.camYaw,this.behindYaw(),Math.min(1,t*(n.speed>=0?2.4:.8)))),y&&(s.camPitch+=(.3-s.camPitch)*Math.min(1,t*1.5)),s.camDist=8.2+m*.12}collide(t,e){let n=t.car,s=this.world.colliders,r=n.W/2+.05,a=0,o=0,c=0;for(let h=0;h<2;h++){let l=Math.cos(t.rot),u=-Math.sin(t.rot);for(let f of[-.32,0,.32]){let d=t.x+l*n.L*f,g=t.z+u*n.L*f,_=0,m=0;for(let p of s.boxes){if(p.disabled||p.h<.3||d<p.minX-r||d>p.maxX+r||g<p.minZ-r||g>p.maxZ+r)continue;let S=Vt(d,p.minX,p.maxX),b=Vt(g,p.minZ,p.maxZ),y=d-S,A=g-b,w=Math.hypot(y,A);if(!(w>=r))if(w<1e-6){let R=d-p.minX,C=p.maxX-d,M=g-p.minZ,v=p.maxZ-g,I=Math.min(R,C,M,v);I===R?(y=-1,A=0,w=-R):I===C?(y=1,A=0,w=-C):I===M?(y=0,A=-1,w=-M):(y=0,A=1,w=-v);let k=r-w;_+=y*k,m+=A*k,a=Math.max(a,k),o=y,c=A}else{let R=r-w;_+=y/w*R,m+=A/w*R,a=Math.max(a,R),o=y/w,c=A/w}}for(let p of s.circles){if(p.h!==void 0&&p.h<.3)continue;let S=d-p.x,b=g-p.z,y=r+p.r;if(Math.abs(S)>y||Math.abs(b)>y)continue;let A=Math.hypot(S,b);if(A>=y||A<1e-6)continue;let w=y-A;_+=S/A*w,m+=b/A*w,a=Math.max(a,w),o=S/A,c=b/A}for(let p of this.traffic.vehicles){if(Math.abs(p.x-d)>9||Math.abs(p.z-g)>9)continue;let S=p.axis==="x"?p.dir:0,b=p.axis==="z"?p.dir:0;for(let y of[-.32,0,.32]){let A=p.x+S*p.L*y,w=p.z+b*p.L*y,R=d-A,C=g-w,M=r+p.W/2+.05,v=Math.hypot(R,C);if(v>=M||v<1e-6)continue;let I=M-v;_+=R/v*I*.7,m+=C/v*I*.7,a=Math.max(a,I*.7),o=R/v,c=C/v,p.v*=.9}}t.x+=_*.6,t.z+=m*.6}}if(t.crashT-=e,a>.015){let h=Math.cos(t.rot),l=-Math.sin(t.rot),u=-(h*o+l*c)*t.speed;if(u>.5){let f=u;t.speed-=Math.sign(t.speed)*Math.min(Math.abs(t.speed),f*.8+1),f>2.5&&t.crashT<=0&&(this.hooks.crash?.(f/14),t.crashT=.35)}}}updateAbandoned(t){if(!this.abandoned.length)return;let e=this.player;for(let n of[...this.abandoned])n.abT+=t,!(n.abT<y_)&&(Math.hypot(n.x-e.x,n.z-e.z)<60||this.traffic.canReinsert(n)&&(this.releaseStatic(n),this.traffic.reinsert(n)))}};var Mi=[14172986,14853675,3835606,5025616,15921906,15232933,8280002,16742973],vr=9067061,Jo=4861470,$o=12172996,v_=15986662,Ko=class{constructor(t){this.ox=t,this.parts=[],this.glass=[],this.lights=[],this.colliders={boxes:[],circles:[]},this.group=new ce,this.group.position.x=t,this.extra=[]}box(t,e,n,s,r,a,o=0,c=!1){this.parts.push(H(B.box,a,[t,o+r/2,e],[n,r,s])),c&&this.colliders.boxes.push({minX:this.ox+t-n/2,maxX:this.ox+t+n/2,minZ:e-s/2,maxZ:e+s/2,h:o+r})}cyl(t,e,n,s,r,a=0,o=!1){this.parts.push(H(B.cyl,r,[t,a+s/2,e],[n,s,n])),o&&this.colliders.circles.push({x:this.ox+t,z:e,r:n,h:a+s})}sph(t,e,n,s,r,a=1){this.parts.push(H(B.sphere,r,[t,e,n],[s,s*a,s]))}raw(t){this.parts.push(t)}glassBox(t,e,n,s,r,a){this.glass.push(H(B.box,12576501,[t,a+r/2,e],[n,r,s]))}lightBox(t,e,n,s,r,a,o){this.lights.push(H(B.box,a,[t,o+r/2,e],[n,r,s]))}lightSph(t,e,n,s,r){this.lights.push(H(B.sphere,r,[t,e,n],[s,s,s]))}finish(){let t=new Tt(De(this.parts),rn({roughness:.85}));t.castShadow=!1,t.receiveShadow=!1,this.group.add(t),this.glass.length&&this.group.add(new Tt(De(this.glass),new Ht({vertexColors:!0,transparent:!0,opacity:.28,roughness:.1}))),this.lights.length&&this.group.add(new Tt(De(this.lights),Vu));for(let e of this.extra)this.group.add(e)}};function Fn(i,t,e,n,{depth:s=.9,color:r=15328991,top:a=11580600,h:o=1.05}={}){let c=(t+e)/2,h=e-t;i.box(c,n,h,s,o,r,0,!0),i.box(c,n,h+.12,s+.16,.07,a,o,!1)}function ri(i,t,e,n=1.12){i.box(t,e,.42,.34,.22,2435116,n),i.lightBox(t,e+0,.3,.04,.14,10478591,n+.24)}function bi(i,t,e,n,s,r,a,o=!0,c=!0){let l=o?n:.55,u=o?.55:n;i.box(t,e,o?n:.06,o?.06:n,r,$o,0);for(let f=0;f<=s;f++){let d=.12+f*(r-.2)/s;if(i.box(t,e,l,u,.045,14277855,d),f===s||!a||!a.length)continue;let g=.34;for(let _=-n/2+.25;_<n/2-.15;_+=g){if(ht()<.12)continue;let m=at(.18,.34),p=o?t+_:t+at(-.12,.12),S=o?e+at(-.12,.12):e+_;i.box(p,S,.22,.2,m,qt(a),d+.045)}}c&&i.colliders.boxes.push({minX:i.ox+t-l/2,maxX:i.ox+t+l/2,minZ:e-u/2,maxZ:e+u/2,h:r})}function On(i,t,e,n,s,r=2,a=2763306){i.cyl(t,e,.07,.72,a,0,!1),i.cyl(t,e,n,.05,s,.72,!1),i.colliders.circles.push({x:i.ox+t,z:e,r:n*.9,h:.78});for(let o=0;o<r;o++){let c=o/r*Math.PI*2+.6;i.cyl(t+Math.cos(c)*(n+.32),e+Math.sin(c)*(n+.32),.17,.45,9182493,0,!0)}}function Ds(i,t,e,n=1){i.cyl(t,e,.3*n,.5*n,10504748,0,!0);for(let s=0;s<5;s++)i.sph(t+at(-.15,.15),.8*n+at(0,.5)*n,e+at(-.15,.15),.27*n,qt([3111482,4168266,2779701]))}function Mr(i,t,e,n,s=!0,r=2.4){i.box(t,e,s?n:.05,s?.05:n,r,Jo,0);let o=s?n:.45,c=s?.45:n;for(let h=0;h<=5;h++){let l=.1+h*(r-.15)/5;if(i.box(t,e,o,c,.04,Jo,l),h!==5)for(let u=-n/2+.1;u<n/2-.1;u+=.12){if(ht()<.06)continue;let f=at(.28,.4);i.box(s?t+u:t+at(-.04,.04),s?e+at(-.04,.04):e+u,s?.09:.26,s?.26:.09,f,qt([9182493,2051705,3107647,13214247,5978654,6962572,15261904,2236962]),l+.04)}}i.colliders.boxes.push({minX:i.ox+t-o/2,maxX:i.ox+t+o/2,minZ:e-c/2,maxZ:e+c/2,h:r})}function Zo(i,t,e,n,s=1.12){i.glassBox((t+e)/2,n,e-t,.75,.55,s)}var mf=[i=>{bi(i,0,-5.15,13,5,2.4,Mi),Fn(i,-6.8,1.6,-2.6),Zo(i,-6.5,.9,-2.6);for(let t=0;t<6;t++)i.box(-6+t*1.1,-2.6,.5,.3,.16,qt([11745578,13666906,15257498]),1.19);ri(i,2.4,-2.6);for(let t=0;t<6;t++)i.cyl(-5.4+t*1.3,-2.6,.09,.55,8007202,2.55);for(let t of[-4.2,-2.9,-1.6,-.3,1]){i.box(7.55,t,.8,1.2,2.1,16053492,0,!0),i.box(7.13,t,.05,1,1.8,2837098,.15);for(let e=0;e<4;e++)for(let n=0;n<4;n++)i.box(7.1,t-.4+n*.27,.05,.14,.26,qt(Mi),.3+e*.42)}return bi(i,-4,.1,4.6,4,1.9,Mi),{floor:"checkerGreen",wall:15327955,accent:3107647,neon:["DELI","#7CFFB0"],keepers:[{x0:-6,x1:1,z:-3.85}],zone:[-5.5,5.5,1.6,3.8],crumbs:[-2.5,-1.3],apron:3107647}},i=>{Fn(i,-3.5,3.5,-2.4,{color:11740702,top:15327696}),Zo(i,-3,3,-2.4);for(let t=0;t<3;t++)i.cyl(-2+t*2,-2.4,.42,.04,15315530,1.2),i.cyl(-2+t*2,-2.4,.3,.05,12597547,1.22);ri(i,3,-2.4),i.box(-5.2,-4.5,3.2,1.8,2,9190186,0,!0),i.sph(-5.2,2,-4.5,1.55,9190186,.55),i.box(-5.2,-3.57,1,.1,.75,1313542,.45),i.lightBox(-5.2,-3.6,.8,.05,.5,16742938,.55);for(let t=0;t<4;t++)i.box(5.6,-4.6,.95,.95,.22,15326400,t*.22,!1);i.colliders.boxes.push({minX:i.ox+5.1,maxX:i.ox+6.1,minZ:-5.1,maxZ:-4.1,h:.9}),i.box(1.6,-5.4,4.4,.08,1.7,1907997,1.3);for(let t=0;t<6;t++)i.lightBox(1.6,-5.34,3.6-t%2*1,.03,.05,t%3===0?16765514:16777215,2.5-t*.22);return On(i,-6.2,0,.55,11740702,2),On(i,6.2,0,.55,11740702,2),On(i,-6.3,-2.2,.55,15327696,2),On(i,6.3,-2.2,.55,15327696,2),{floor:"checkerRed",wall:15786184,accent:11740702,neon:["PIZZA","#ff6a4a"],keepers:[{x0:-3,x1:3,z:-3.7}],zone:[-4.2,4.2,1.5,3.8],crumbs:[0,-1.1],apron:11740702}},i=>{bi(i,0,-5.15,13,4,2.3,null);for(let t=0;t<4;t++)for(let e=0;e<9;e++){let n=-5.6+e*1.4,s=.2+t*.52;i.cyl(n,-5.1,.34,.2,11895886,s+.04);for(let r=0;r<3;r++)i.sph(n+(r-1)*.16,s+.3,-5.1+at(-.08,.08),.15,qt([14133358,15123855,12882778]),.5)}Fn(i,-6.2,2.2,-2.6,{color:14205856,top:6964784}),Zo(i,-5.8,-1,-2.6),ri(i,1.4,-2.6),i.box(5.4,-2.6,3,.9,1.1,16053492,0,!0);for(let t=0;t<6;t++)i.box(4.4+t*.4,-2.6,.3,.3,.12,qt(Mi),1.1);return On(i,-6.2,.3,.55,14205856,2),On(i,6.2,.3,.55,14205856,2),Ds(i,7.2,3.6),{floor:"wood",wall:15392712,accent:2772367,neon:["BAGELS","#ffe29a"],keepers:[{x0:-5.5,x1:1.5,z:-3.9}],zone:[-5,5.5,1.6,3.8],crumbs:[-2,-1.3],apron:2772367}},i=>{bi(i,0,-5.15,13,4,2.2,[15921906,14140064,4861730]),Fn(i,-3.5,3.5,-2.8,{color:4861730,top:14275784}),i.box(0,-2.9,.9,.5,.55,$o,1.12),i.cyl(-.5,-2.9,.12,.25,2763306,1.12),i.cyl(.5,-2.9,.12,.25,13224393,1.12),Zo(i,-3.2,-1.2,-2.8);for(let t=0;t<5;t++)i.cyl(-3+t*.4,-2.8,.13,.08,qt([15317114,15902401,14267276]),1.14);ri(i,2.8,-2.8),On(i,-5.6,-1.4,.5,15327696,2),On(i,5.6,-1.4,.5,15327696,2),On(i,-6.4,.5,.5,15327696,2),On(i,6.4,.5,.5,15327696,2),i.box(7.4,-4.2,1.3,2.6,.5,9059131,0,!0),i.box(7.85,-4.2,.4,2.6,.5,9059131,.5,!0),Ds(i,-7.2,3.8),Ds(i,7.2,3.8,1.2);for(let t of[-4,-1.3,1.3,4])i.cyl(t,0,.015,.7,2236962,2.7),i.lightSph(t,2.55,0,.22,16767114);return{floor:"wood",wall:15062717,accent:4861730,neon:["CAFE","#ffcf8a"],keepers:[{x0:-3,x1:3,z:-4}],zone:[-4.4,4.4,1.6,3.8],crumbs:[0,-1.4],apron:4861730}},i=>{bi(i,-1.5,-.9,9,4,1.9,[16777215,3122080,14172986,3835606]),bi(i,-1.5,-3,9,4,1.9,[16777215,3122080,14853675,8280002]),Fn(i,3.6,7.6,-4.3,{color:15856113,top:3122080}),ri(i,4.6,-4.3),i.box(0,-5.4,13,.1,1.6,15135985,.9);for(let t=0;t<10;t++)i.lightBox(-5.6+t*1.25,-5.34,.9,.03,.5,t%2?12577250:16777215,1.2+t%3*.4);return i.box(-7.55,-3,.8,3.8,1.8,15856113,0,!0),i.box(-7.15,-3,.05,3.6,1.5,2837098,.15),i.cyl(7.2,3.6,.35,.9,14212316,0,!0),i.lightBox(0,-5.4,.7,.03,.7,3326602,2.5),i.lightBox(0,-5.4,.2,.03,.7,3326602,2.5),{floor:"tile",wall:15791604,accent:3122080,neon:["PHARMACY","#7CFFD6"],keepers:[{x0:4.2,x1:7,z:-5.1}],zone:[-5,5.5,1.6,3.8],crumbs:[5.6,-3.2],apron:3122080}},i=>{Fn(i,-6.5,6.5,-3.4,{depth:1,color:3875864,top:6964784});for(let t=0;t<9;t++)i.cyl(-6+t*1.5,-2.35,.22,.72,9182493,0,!0);for(let t=0;t<3;t++){i.box(0,-5.2,13,.4,.07,3875864,1.1+t*.55);for(let e=0;e<24;e++)i.cyl(-6.3+e*.55,-5.2,.08,.34,qt([3107647,9198110,14209208,2051705,9182493]),1.17+t*.55)}return i.box(-7.4,.2,1.1,2.4,.5,9182493,0,!0),i.box(-7.85,.2,.3,2.4,.5,9182493,.5,!0),i.box(7.4,.2,1.1,2.4,.5,9182493,0,!0),i.box(7.85,.2,.3,2.4,.5,9182493,.5,!0),i.box(-6.2,.2,.9,1.4,.05,3875864,.75),i.box(6.2,.2,.9,1.4,.05,3875864,.75),i.lightBox(5.2,-5.38,2.2,.05,1.2,9417215,1.7),i.lightBox(-5.2,-5.38,1.6,.05,.5,16730698,2.5),{floor:"darkwood",wall:7031348,accent:9182493,neon:["BAR & GRILL","#ffc247"],keepers:[{x0:-6,x1:6,z:-4.4}],zone:[-5,5,1.6,3.8],crumbs:[0,-1.9],apron:1907997}},i=>{for(let t=0;t<6;t++)for(let e of[-1,1]){let n=7.3*e,s=-4.2+t*1.4;i.box(n,s,.9,1.15,1.05,15856113,0,!0),i.raw(H(B.cyl,2042680,[n-e*.46,.55,s],[.34,.06,.34],[0,0,Math.PI/2])),i.raw(H(B.cyl,13226972,[n-e*.45,.55,s],[.4,.04,.4],[0,0,Math.PI/2])),i.box(n,s,.9,1.15,.12,qt([3835606,14172986,5025616]),1.05)}i.box(0,-.8,5,1.2,.9,13620182,0,!0);for(let t=0;t<4;t++)i.box(-3+t*2,-4.9,.55,.55,.45,3835606,0,!0),i.box(-3+t*2,-5.15,.55,.08,.4,3835606,.45);i.box(4.2,-2.9,3.4,.7,1,vr,0,!0),ri(i,5,-2.9,1),i.box(-3.5,-5.1,.9,.7,1.7,2051705,0,!0),i.lightBox(-3.5,-4.74,.5,.03,.3,10478591,1.2);for(let t=0;t<4;t++)i.box(-1.5+t*.9,-.8,.5,.35,.2,qt(Mi),.9);return{floor:"tile",wall:14937844,accent:3043230,neon:["24 HR LAUNDRY","#8fd8ff"],keepers:[{x0:3,x1:6,z:-3.8}],zone:[-5.2,5.2,.8,3.8],crumbs:[4.2,-1.8],apron:3043230}},i=>{let t=[[-4.7,1.6,.45],[-5,1.1,.85],[-5.2,.6,1.25]];for(let[e,n,s]of t)i.box(0,e,13,n,s,vr,0,!0);t.forEach(([e,n,s],r)=>{for(let a=0;a<12;a++){let o=-5.6+a*1.02;i.cyl(o,e+(r===0?.3:0),.22,.35,12107460,s);let c=qt([15222123,16765503,16316664,11561688,16747069,16740261]);for(let h=0;h<6;h++)i.sph(o+at(-.15,.15),s+.5+at(0,.25),e+(r===0?.3:0)+at(-.15,.15),.13,ht()<.7?c:qt([15222123,16765503,16316664]));i.cyl(o,e+(r===0?.3:0),.025,.4,4164159,s+.35)}}),i.box(0,-.8,3,1.4,.8,vr,0,!0);for(let e=0;e<4;e++){i.cyl(-1+e*.67,-.8,.2,.3,12107460,.8);for(let n=0;n<5;n++)i.sph(-1+e*.67+at(-.12,.12),1.3+at(0,.2),-.8+at(-.12,.12),.12,qt([15222123,16765503,11561688,16747069]))}return Fn(i,4,7.6,-1.8,{color:vr,top:15327696}),ri(i,4.8,-1.8),Ds(i,-7.2,3.6,1.3),Ds(i,7.2,3.8),{floor:"wood",wall:15655894,accent:8007267,neon:["FLOWERS","#ff9bd0"],keepers:[{x0:4.2,x1:7.2,z:-2.9}],zone:[-5,3.5,1.2,3.8],crumbs:[5.6,-.8],apron:8007267}},i=>{Mr(i,0,-5.2,13,!0),Mr(i,-2.5,-1.2,9,!0),Mr(i,-2.5,-3.2,9,!0),Mr(i,-7.7,.5,4.5,!1),Mr(i,7.7,-3.4,4,!1),Fn(i,3.8,7.4,-.2,{depth:.8,color:Jo,top:6964784}),ri(i,4.5,-.2),i.box(6.3,-2.4,1.1,1,.45,9182493,0,!0),i.box(6.3,-2.85,1.1,.2,.55,9182493,.45,!0),i.cyl(7.3,-1.6,.05,1.7,2236962,0),i.lightSph(7.3,1.85,-1.6,.25,16769696);for(let t=0;t<4;t++)i.box(4+t*.7,-.2,.4,.3,.1+t*.03,qt([9182493,2051705,3107647]),1.12);return Ds(i,-7.2,3.8),{floor:"carpet",wall:14206893,accent:5978654,neon:["BOOKS","#ffd89a"],keepers:[{x0:4.2,x1:7,z:-1.3}],zone:[-5.2,3,1.5,3.8],crumbs:[5.6,.8],apron:5978654}},i=>{Fn(i,-7,1.2,-2.6,{color:11022876,top:15129803});for(let t=0;t<4;t++)i.cyl(-6+t*1.8,-2.6,.38,.4,9080724,1.12),i.cyl(-6+t*1.8,-2.6,.3,.02,15249994,1.52);i.box(-3.5,-5,8,.8,.9,$o,0,!0),i.box(-3.5,-4.95,6,1,.45,9080724,2.3);for(let t=0;t<5;t++)i.cyl(-5.4+t*1.5,-5,.2,.3,15263976,.9);i.box(3,-5.4,4,.08,1.5,1907997,1.4);for(let t=0;t<5;t++)i.lightBox(3,-5.34,3.2-t%2*.8,.03,.05,t%2?16765514:16777215,2.5-t*.22);for(let t of[-3.6,-1.6,.4]){i.box(5.8,t,1.5,.85,.05,6964784,.75),i.box(5.8,t,.12,.12,.72,2236962,0),i.colliders.boxes.push({minX:i.ox+5.05,maxX:i.ox+6.55,minZ:t-.43,maxZ:t+.43,h:.8});for(let e of[-.4,.4])i.cyl(5.8+e,t,.16,.07,qt([15921906,11740702]),.8);i.box(5.8,t+.7,1.5,.3,.45,4861470,0,!0)}for(let[t,e]of[[-4,.8],[-1.5,1.2],[1.5,.6],[3.4,1.4]])i.cyl(t,e,.015,.7,2236962,2.65),i.lightSph(t,2.5,e,.27,14692383);return{floor:"darkwood",wall:12076333,accent:11022876,neon:["NOODLES","#ffb26a"],keepers:[{x0:-6,x1:0,z:-3.95}],zone:[-5,3.5,2,3.8],crumbs:[-2.5,-1.4],apron:11022876}},i=>{i.box(0,-5.2,13,.7,2.1,16053492,0,!0),i.box(0,-4.83,12.6,.04,1.8,2837098,.15);for(let t=0;t<4;t++)for(let e=0;e<28;e++)i.box(-6.3+e*.45,-4.78,.28,.1,.3,qt(Mi),.3+t*.42);bi(i,-2.2,-1,9,4,1.9,Mi),bi(i,-2.2,-3,9,4,1.9,Mi),i.box(7,-2,1.2,3.4,.8,vr,0,!0);for(let t=0;t<18;t++)i.sph(6.7+at(0,.6),.95+at(0,.15),-3.5+t%9*.38,.14,qt([14172986,14853675,5025616,16742973,8280002]));return Fn(i,3.6,6.2,-.2,{depth:.8,color:3043130,top:2435116}),ri(i,4.4,-.2,1.15),i.box(5.6,1.1,1,.7,.04,$o,.9),i.colliders.circles.push({x:i.ox+5.6,z:1.1,r:.5,h:.95}),{floor:"tile",wall:15659748,accent:3107626,neon:["GROCERY","#b6ff8a"],keepers:[{x0:4,x1:6,z:-1.3}],zone:[-5.5,2.5,1.5,3.8],crumbs:[4.8,1],apron:3107626}},i=>{i.box(0,-5.42,13,.05,1.7,10335942,1),i.box(0,-5.44,13.3,.05,.12,2763306,.9),i.box(0,-5.44,13.3,.05,.12,2763306,2.7),i.box(0,-5.2,13,.5,.9,2763306,0,!0);for(let t=0;t<18;t++)i.cyl(-6.3+t*.75,-5.2,.07,.22,qt([14172986,3835606,15263976,5025616]),.9);for(let t of[-4.5,0,4.5]){i.cyl(t,-4,.35,.5,1776411,0,!0),i.box(t,-4,.85,.85,.22,11740702,.5),i.box(t,-3.55,.85,.15,.2,11740702,.35),i.box(t,-4.4,.85,.16,.75,11740702,.7);for(let e of[-1,1])i.box(t+e*.5,-4,.1,.55,.12,1776411,.78)}i.box(7.2,.4,.7,3.4,.48,Jo,0,!0);for(let t=0;t<6;t++)i.cyl(-7,4.4,.17,.27,t%3===0?14034984:t%3===1?15921906:2772367,.1+t*.27,!1);return i.colliders.circles.push({x:i.ox-7,z:4.4,r:.2,h:1.9}),{floor:"checker",wall:14672872,accent:1914199,neon:["BARBER","#9fc6ff"],keepers:[{x0:-5.2,x1:-.5,z:-2.7},{x0:.5,x1:5.2,z:-2.7}],zone:[-4.8,5.5,1.5,3.8],crumbs:[0,-1.2],apron:1914199}}],br=class{constructor(t,e,n,s){this.p=new zn(e),t.add(this.p.root),this.zone=n,this.line=s,this.x=s?at(s.x0,s.x1):at(n[0],n[1]),this.z=s?s.z:at(n[2],n[3]),this.tx=this.x,this.tz=this.z,this.speed=at(.9,1.5),this.v=0,this.yaw=ht()*6,this.state="pause",this.timer=at(.5,4),this.p.root.position.set(this.x,0,this.z),this.p.root.rotation.y=this.yaw}pickTarget(){this.line?(this.tx=at(this.line.x0,this.line.x1),this.tz=this.line.z):(this.tx=at(this.zone[0],this.zone[1]),this.tz=at(this.zone[2],this.zone[3]))}update(t){if(this.state==="walk"){let e=this.tx-this.x,n=this.tz-this.z,s=Math.hypot(e,n);s<.15?(this.state="pause",this.timer=at(1.5,5),this.v=0):(this.v=Math.min(this.speed,this.v+t*4),this.x+=e/s*this.v*t,this.z+=n/s*this.v*t,this.yaw=gn(this.yaw,Math.atan2(e,n),Math.min(1,t*8)))}else this.v=Math.max(0,this.v-t*6),this.timer-=t,this.v<.05&&ht()<t*.8&&this.p.startPeck(),this.line&&this.v<.05&&(this.yaw=gn(this.yaw,0,Math.min(1,t*3))),this.timer<=0&&(this.pickTarget(),this.state="walk");this.p.root.position.set(this.x,0,this.z),this.p.root.rotation.y=this.yaw,this.p.update(t,this.v)}},hn=16,be=11,Vi=3.4;function M_(i,t){let e=new Ko(t),n=mf[i%mf.length](e),s=vi[i%vi.length].text,r=n.wall;e.box(0,-be/2-.15,hn+.6,.3,Vi,r,0,!0),e.box(0,be/2+.15,hn+.6,.3,Vi,r,0,!0),e.box(-hn/2-.15,0,.3,be+.6,Vi,r,0,!0),e.box(hn/2+.15,0,.3,be+.6,Vi,r,0,!0),e.box(0,0,hn+.6,be+.6,.2,v_,Vi,!1),e.box(0,-be/2+.03,hn,.06,.95,n.accent,0),e.box(0,be/2-.03,hn,.06,.95,n.accent,0),e.box(-hn/2+.03,0,.06,be,.95,n.accent,0),e.box(hn/2-.03,0,.06,be,.95,n.accent,0);for(let d of[-1,1])e.lightBox(d*4.9,be/2-.03,4.4,.05,1.9,13231359,.9),e.box(d*4.9,be/2-.05,4.6,.04,.1,2763306,.82),e.box(d*4.9,be/2-.05,4.6,.04,.1,2763306,2.8);e.box(0,be/2-.08,1.7,.1,2.5,2106924,0),e.lightBox(0,be/2-.15,1.3,.05,2.1,12179950,.1),e.box(.55,be/2-.2,.06,.06,.6,14079702,1),e.box(0,be/2-.12,1.9,.06,.12,2106924,2.5);for(let d of[-5,0,5])for(let g of[-3,1,4])e.lightBox(d,g,1.8,.45,.05,16774096,Vi-.06);e.finish();let a=Il(n.floor,hn/2.2,be/2.2),o=new Tt(new ve(hn,be).rotateX(-Math.PI/2),new Ht({map:a,roughness:.75}));o.position.y=.002,e.group.add(o);let c=new Tt(new ve(5.6,1.4),new ye({map:nf(n.neon[0],n.neon[1]),transparent:!0,depthWrite:!1}));c.position.set(0,2.95,-be/2+.07),i===5&&(c.position.y=3),e.group.add(c);let h=new Tt(new ve(.9,.34),new ye({map:Dl()}));h.position.set(0,2.75,be/2-.2),h.rotation.y=Math.PI,e.group.add(h);let l=[];for(let d of n.keepers)l.push(new br(e.group,{outfit:"vendor",apron:n.apron,scale:1.3},n.zone,d));let u=2+Math.floor(ht()*3);for(let d=0;d<u;d++)l.push(new br(e.group,{outfit:ht()<.4?"suit":"casual",scale:1.25},n.zone,null));let f=(d,g)=>[t+d,g];return{id:`shop${i}`,type:"shop",kind:i,label:s,group:e.group,ctx:{colliders:e.colliders,groundHeight:()=>0,bounds:{minX:t-hn/2+.2,maxX:t+hn/2-.2,minZ:-be/2+.2,maxZ:be/2-.2},camMaxY:Vi-.35},spawn:{x:t,z:be/2-1.5,yaw:Math.PI},interacts:[{id:"leave",x:t,z:be/2-.9,r:1.7,text:`Leave ${s.toLowerCase()}`},{id:"crumbs",x:t+n.crumbs[0],z:n.crumbs[1],r:2,text:"Ask for crumbs"}],dynamicInteract:null,fog:null,background:1709586,hemi:{intensity:2.3,color:16773596,ground:12166540},update(d){for(let g of l)g.update(d)}}}function b_(){let i=new ce,t=[H(B.sphere,7036758,[0,.13,0],[.12,.1,.21]),H(B.sphere,8023394,[0,.12,.19],[.075,.07,.11]),H(B.sphere,14263968,[0,.11,.29],[.025,.025,.03]),H(B.sphere,14263968,[.05,.19,.15],[.035,.04,.012]),H(B.sphere,14263968,[-.05,.19,.15],[.035,.04,.012]),H(B.sphere,1118481,[.04,.15,.25],[.014,.014,.014]),H(B.sphere,1118481,[-.04,.15,.25],[.014,.014,.014]),H(B.cyl,13608094,[0,.08,-.38],[.012,.42,.012],[Math.PI/2-.15,0,0]),...[[-.07,.1],[.07,.1],[-.07,-.1],[.07,-.1]].map(([e,n])=>H(B.box,5063742,[e,.03,n],[.04,.06,.07]))];return i.add(new Tt(De(t),rn({roughness:.9}))),i.scale.setScalar(1.7),i}function S_(i,t={}){let r=new Ko(i),a=(Y,pt,Bt,_t,ee)=>r.colliders.boxes.push({minX:i+Y-Bt/2,maxX:i+Y+Bt/2,minZ:pt-_t/2,maxZ:pt+_t/2,h:ee}),o=-3.3,c=9;r.box(0,o+.05,92,.1,1.1,8290694,-1.1),r.box(0,-2.95,92,.6,.02,14924032,0);for(let Y=0;Y<46;Y++)r.box(-45+Y*2,-2.95,.5,.45,.025,12096512,.02);a(0,-2.7,92,.9,4),r.box(-46-.15,(o+c)/2,.3,c-o,4.6+1.1,13223352,-1.1),r.box(46+.15,(o+c)/2,.3,c-o,4.6+1.1,13223352,-1.1),r.box(0,(o+c)/2,92+.6,c-o+.3,.2,15196884,4.6),r.box(0,-6.3,300,5.8,.2,2961203,4.6),r.box(0,-9.15,300,.3,4.6+1.3,4869458,-1.1),r.box(0,c+.15,92+.6,.3,4.6+1.1,14275780,-1.1),r.box(-150,-6.15,.3,6,4.6+1.3,328966,-1.1),r.box(150,-6.15,.3,6,4.6+1.3,328966,-1.1),r.box(0,-6.15,300,5.7,.05,2828840,-1.12);for(let Y of[-6.07,-4.63])r.box(0,Y,300,.12,.14,10396584,-1.05);r.box(0,-3.95,300,.14,.1,5914410,-1);for(let Y=0;Y<12;Y++){let pt=-41.25+Y*7.5;r.cyl(pt,1.5,.38,4.6,4156237,0,!0),r.cyl(pt,1.5,.42,.35,15196884,0,!1),r.cyl(pt,1.5,.42,.3,15196884,4.6-.4,!1)}for(let Y=-44;Y<=44;Y+=5)for(let pt of[-.5,5.5])r.lightBox(Y,pt,1.8,.4,.06,16775138,4.6-.07);for(let Y=-145;Y<150;Y+=12)r.lightBox(Y,-6.2,.5,.5,.06,Y>-50&&Y<50?16771512:6969914,4.6-.07);for(let Y of[-34,-16,2,19,36.2-8])r.box(Y,8.2,2.6,.6,.08,9067061,.46,!1),r.box(Y,8.5,2.6,.08,.5,9067061,.5,!1),r.box(Y-1.1,8.2,.08,.5,.46,2236962,0),r.box(Y+1.1,8.2,.08,.5,.46,2236962,0),a(Y,8.25,2.7,.7,.55);for(let Y of[-24,-6,12,28])r.cyl(Y,8.4,.3,.9,3099194,0,!0),r.cyl(Y,8.4,.32,.06,1911330,.9);for(let Y of[-38,-10,22])r.box(Y,8.5,1.3,.8,2,12986408,0,!0),r.lightBox(Y,8.08,.95,.04,1.4,qt([16769162,10478591,16757697]),.4);for(let Y=0;Y<9;Y++){let pt=-40+Y*10+at(-1.5,1.5);r.box(pt,8.88,2.1,.04,1.5,qt([15222123,16765503,3835606,5025616,16747069,11561688]),1.2)}r.box(0,8.9,92,.05,.22,883269,2.3);for(let Y=0;Y<10;Y++){let pt=(Y+1)*.36;r.box(36.4+Y*.85,6.4,.85,5.2,pt,Y%2?9276034:10131085,0),a(36.4+Y*.85,6.4,.85,5.2,pt)}r.box(46-.3,6.4,1.2,5.2,4.6,1710618,0),r.lightBox(35.2,6.4,.05,2,.5,16773312,2.9),r.finish();let h=new An(new le(.28,.1,3),new Ht({color:4863526,roughness:1}),400),l=new Re;for(let Y=0;Y<400;Y++)l.position.set(-150+Y*.75,-1.05,-5.35),l.updateMatrix(),h.setMatrixAt(Y,l.matrix);r.group.add(h);let u=Pl();u.repeat.set(46,3.4);let f=new Tt(new ve(92,4.6+.3),new Ht({map:u,roughness:.5}));f.position.set(0,(4.6-.3)/2+0,c-.02),f.rotation.y=Math.PI,r.group.add(f);let d=Pl();d.repeat.set(150,3.4);let g=new Tt(new ve(300,4.6+1.1),new Ht({map:d,color:8027780,roughness:.6}));g.position.set(0,(4.6-1.1)/2,-9),r.group.add(g);let _=new Tt(new ve(92,c-o).rotateX(-Math.PI/2),new Ht({map:Il("tile",46/2,(c-o)/2),roughness:.7,color:13619151}));_.position.set(0,.002,(o+c)/2),r.group.add(_);let m=[],p=Ll("Times Sq 42 St",["1","2","3"]),S=(Y,pt,Bt,_t,ee)=>{let D=new ye({map:p,side:Dn});m.push(D);let we=new Tt(new ve(_t,_t*160/768),D);we.position.set(Y,Bt,pt),we.rotation.y=ee,r.group.add(we)};for(let Y of[-36,-18,0,18,36])S(Y,8.9,3,5.2,Math.PI),S(Y,-8.9,2.6,5.2,0);for(let Y=0;Y<12;Y++){let pt=-41.25+Y*7.5;S(pt,1.5+.43,2.9,1.7,0),S(pt,1.5-.43,2.9,1.7,Math.PI)}let b=new Tt(new ve(1.5,.56),new ye({map:Dl()}));b.position.set(35,3.5,6.4),b.rotation.y=-Math.PI/2,r.group.add(b);let y=8,A=10.6,w=.35,R=3.4,C=-5.35,M=new ce,I=sf("#ee352e"),k=new Ht({color:2895667,roughness:.6}),V=new Ht({color:9146518,roughness:.6}),K=new Ht({map:I,roughness:.4,metalness:.2}),rt=new Ht({color:10133670,roughness:.5}),Q=new le(A,3.9,R);for(let Y=0;Y<y;Y++){let pt=new Tt(Q,[k,k,V,k,K,rt]);pt.position.set((Y-(y-1)/2)*(A+w),1.15,C),M.add(pt)}let lt=new ve(1,2.25),Z=new An(lt,new ye({map:rf()}),y*4);Z.frustumCulled=!1,M.add(Z);let yt=[];for(let Y=0;Y<y;Y++)for(let pt=0;pt<4;pt++)yt.push((Y-(y-1)/2)*(A+w)+(pt*.25+.125-.5)*A);let xt=Y=>{for(let pt=0;pt<yt.length;pt++)l.position.set(yt[pt],1.12,C+R/2+.01),l.scale.set(Math.max(.001,Y*1.25),1,1),l.rotation.set(0,0,0),l.updateMatrix(),Z.setMatrixAt(pt,l.matrix);Z.instanceMatrix.needsUpdate=!0};xt(0),l.scale.set(1,1,1);for(let Y of[-1,1]){let pt=new Tt(new ve(.9,.4),new ye({color:16774864}));pt.position.set(Y*(y*(A+w)/2-.1),1.6,C),pt.rotation.y=Y>0?Math.PI/2:-Math.PI/2,M.add(pt)}r.group.add(M);let Pt=[];for(let Y=0;Y<4;Y++){let pt=b_();r.group.add(pt),Pt.push({m:pt,x:at(-25,25),z:at(-8.4,-4.2),tx:0,tz:0,v:0,state:"pause",timer:at(0,3),yaw:0})}let Wt=[];for(let Y=0;Y<7;Y++)Wt.push(new br(r.group,{outfit:Y%2?"suit":"casual",scale:1.25},[-38,38,2.5,4.6],null));let re=48,$={clock:43,open:0,x:999,events:{arrive:!1,chime1:!1,chime2:!1,depart:!1},stopped:!1},ut=Y=>1-Math.pow(1-Vt(Y,0,1),2.2),It=Y=>{let pt=$.clock;$.clock=($.clock+Y)%re;let Bt=$.clock;Bt<pt&&($.events={arrive:!1,chime1:!1,chime2:!1,depart:!1});let _t=(ee,D)=>{$.events[ee]||($.events[ee]=!0,t.train?.(D))};Bt<9?(_t("arrive","arrive"),$.x=-150+150*ut(Bt/9),$.open=0):Bt<24?($.x=0,Bt>=10&&_t("chime1","chime"),$.open=Bt<10?0:Bt<11.2?(Bt-10)/1.2:Bt<22.5?1:Bt<23.7?1-(Bt-22.5)/1.2:0,Bt>=22.5&&_t("chime2","chime")):Bt<32?(_t("depart","depart"),$.open=0,$.x=150*Math.pow(Vt((Bt-24)/8,0,1),2.2)):($.x=999,$.open=0),M.position.x=$.x,M.visible=$.x<400,xt($.open)},bt=(Y,pt)=>{It(Y);for(let _t of Wt)_t.update(Y);let Bt=Math.abs($.x)<75;for(let _t of Pt)if(_t.m.visible=!Bt,!Bt){if(_t.timer-=Y,_t.state==="walk"){let ee=_t.tx-_t.x,D=_t.tz-_t.z,we=Math.hypot(ee,D);we<.2?(_t.state="pause",_t.timer=at(.6,3),_t.v=0):(_t.v=Math.min(3.2,_t.v+Y*14),_t.x+=ee/we*_t.v*Y,_t.z+=D/we*_t.v*Y,_t.yaw=gn(_t.yaw,Math.atan2(ee,D),Math.min(1,Y*12)))}else _t.timer<=0&&(_t.tx=Vt(_t.x+at(-9,9),-45,45),_t.tz=at(-8.4,-4.2),_t.state="walk");_t.m.position.set(_t.x,-1.05+Math.abs(Math.sin(_t.x*9))*.03*(_t.v>.1?1:0),_t.z),_t.m.rotation.y=_t.yaw}},Ft=()=>$.open<.85?null:yt;return{id:"subway",type:"subway",kind:-1,label:"subway",group:r.group,ctx:{colliders:r.colliders,groundHeight:()=>0,bounds:{minX:i-45.3,maxX:i+45.3,minZ:-2.4,maxZ:8.6},camMaxY:4.6-.35},spawn:{x:i+32.5,z:5.2,yaw:-Math.PI/2},interacts:[{id:"leave",x:i+34.6,z:6.4,r:3,text:"Go up to the street"}],dynamicInteract(Y,pt){let Bt=Ft();if(!Bt||pt>2.2)return null;for(let _t of Bt)if(Math.abs(Y-(i+$.x+_t))<1.9)return{id:"board",text:"Board the train (ride to another station)"};return null},setStation(Y,pt){let Bt=Ll(Y,pt);for(let _t of m)_t.map=Bt},fog:{color:855568,near:50,far:190},background:855568,hemi:{intensity:1.9,color:15132906,ground:8027520},update:bt,state:$}}var Qo=class{constructor(t,e={}){this.scene=t,this.hooks=e,this.shops=new Map,this.subway=null}shop(t){if(t=(t%12+12)%12,!this.shops.has(t)){let e=M_(t,6e3+t*100);e.group.visible=!1,this.scene.add(e.group),this.shops.set(t,e)}return this.shops.get(t)}getSubway(){return this.subway||(this.subway=S_(5e3,this.hooks),this.subway.group.visible=!1,this.scene.add(this.subway.group)),this.subway}hideAll(){for(let t of this.shops.values())t.group.visible=!1;this.subway&&(this.subway.group.visible=!1)}};var gf=8,jo=class{constructor(){this.ctx=null,this.ready=!1,this.muted=!1,this.L={x:0,z:0,yaw:0},this.mode="street",this.shopKind=0,this.sirenT=at(12,25),this.chatT=0,this.hornT=1,this.jackT=at(25,60),this.brakeT=at(10,30),this.babT=0,this.coT=0,this.t=0,this.trainSrc=null}start(){if(this.ready){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.85;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.analyser=e.createAnalyser(),this.analyser.fftSize=1024,this.master.connect(n),n.connect(this.analyser),this.analyser.connect(e.destination);let s=e.sampleRate,r=s*3;this.white=e.createBuffer(1,r,s),this.brown=e.createBuffer(1,r,s);let a=this.white.getChannelData(0),o=this.brown.getChannelData(0),c=0;for(let f=0;f<r;f++){let d=Math.random()*2-1;a[f]=d,c=(c+.02*d)/1.02,o[f]=c*3.5}let h=Math.floor(s*2.4),l=e.createBuffer(2,h,s);for(let f=0;f<2;f++){let d=l.getChannelData(f);for(let g=0;g<h;g++)d[g]=(Math.random()*2-1)*Math.pow(1-g/h,2.6)}this.rev=e.createConvolver(),this.rev.buffer=l;let u=e.createGain();u.gain.value=.55,this.rev.connect(u),u.connect(this.master),this.revSend=e.createGain(),this.revSend.gain.value=.35,this.revSend.connect(this.rev),this.buildBeds(),this.buildVoices(),this.ready=!0,e.resume?.()}setMuted(t){this.muted=t,this.ready&&this.master.gain.setTargetAtTime(t?0:.85,this.ctx.currentTime,.05)}toggleMute(){return this.setMuted(!this.muted),this.muted}noise(t=this.white){let e=this.ctx.createBufferSource();return e.buffer=t,e.loop=!0,e.start(0,Math.random()*2),e}layer(t,e,n,s,r=this.master){let a=this.ctx,o=this.noise(t),c=a.createBiquadFilter();c.type=e,c.frequency.value=n,c.Q.value=s;let h=a.createGain();return h.gain.value=0,o.connect(c),c.connect(h),h.connect(r),{gain:h,filter:c,src:o}}osc(t,e,n){let s=this.ctx.createOscillator();return s.type=t,s.frequency.value=e,s.start(),n&&s.connect(n),s}buildBeds(){let t=this.ctx;this.bed={rumble:this.layer(this.brown,"lowpass",190,.7),wash:this.layer(this.white,"bandpass",750,.35),hiss:this.layer(this.white,"highpass",5200,.5),sizzle:this.layer(this.white,"bandpass",5200,1.2),steam:this.layer(this.white,"highpass",2600,.7),subRumble:this.layer(this.brown,"lowpass",110,.7),subWhoosh:this.layer(this.white,"bandpass",380,.6),room:this.layer(this.brown,"lowpass",260,.6),roomHiss:this.layer(this.white,"bandpass",4300,1),roomThump:this.layer(this.brown,"lowpass",160,1.5),muffled:this.layer(this.white,"lowpass",420,.5),tunnel:this.layer(this.brown,"lowpass",130,.8),tunnelHiss:this.layer(this.white,"bandpass",1600,.5)},this.babble=[[430,.034],[880,.04],[1550,.03],[2700,.015]].map(([a,o])=>{let c=this.layer(this.white,"bandpass",a,2.2);return c.base=o,c.f0=a,c}),this.hum=this.ctx.createGain(),this.hum.gain.value=0,this.hum.connect(this.master),this.humOsc=this.osc("sine",60,this.hum),this.humOsc2=this.osc("sine",120,this.hum),this.buzzGain=t.createGain(),this.buzzGain.gain.value=0,this.buzzGain.connect(this.master);let e=this.osc("sawtooth",96),n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=900,e.connect(n),n.connect(this.buzzGain);let s=t.createGain();s.gain.value=.5,this.osc("square",.35).connect(s),s.connect(this.buzzGain.gain),this.engine=this.makeVoice(),this.skid=this.layer(this.white,"bandpass",1900,6),this.bed.skid=this.skid}makeVoice(){let t=this.ctx,e=this.osc("sawtooth",40),n=this.osc("square",20),s=t.createGain();s.gain.value=.6;let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=500,r.Q.value=1.2;let a=t.createGain();a.gain.value=0;let o=t.createStereoPanner();return e.connect(r),n.connect(s),s.connect(r),r.connect(a),a.connect(o),o.connect(this.master),{o1:e,o2:n,f:r,g:a,p:o}}buildVoices(){this.carVoices=[];for(let t=0;t<gf;t++)this.carVoices.push(this.makeVoice())}spatial(t,e,n=9){let s=t-this.L.x,r=e-this.L.z,a=Math.hypot(s,r),o=Math.cos(this.L.yaw),c=-Math.sin(this.L.yaw),h=Vt((s*o+r*c)/Math.max(a,2),-1,1)*.9,l=1/Math.pow(1+a/n,1.35),u=400+6e3/(1+a/30);return{d:a,pan:h,gain:l,cutoff:u}}update(t,e){if(!this.ready)return;let n=this.ctx,s=n.currentTime;this.t+=t,this.L.x=e.lx,this.L.z=e.lz,this.L.yaw=e.lyaw,this.mode=e.mode;let r=e.mode==="street"||e.mode==="driving",a=e.mode==="shop",o=e.mode==="subway",c=(b,y,A=.25)=>b.setTargetAtTime(y,s,A),h=this.bed,l=e.busy??.5,u=e.mode==="driving";c(h.rumble.gain.gain,r?.15+.07*l:0,.4),c(h.wash.gain.gain,r?.035+.04*l:0,.4),c(h.hiss.gain.gain,r?.004:0,.4),c(this.revSend.gain,r?.4:o?.7:.12,.5);let f=a&&[0,1,2,3,5,9,10].includes(this.shopKind),d=r?(u?.4:1)*(.7+.5*l):f?.5:o?.35:0;if(this.babT-=t,this.babT<=0){this.babT=.1+Math.random()*.2;let b=.3+Math.random()*.9;for(let y of this.babble)y.gain.gain.setTargetAtTime(y.base*d*b*(.7+Math.random()*.6),s,.07),y.filter.frequency.setTargetAtTime(y.f0*(.78+Math.random()*.5),s,.08)}h.wash.filter.frequency.setTargetAtTime(600+400*Math.sin(this.t*.17)+200*l,s,.5),c(h.sizzle.gain.gain,r?.075*Vt(1-(e.cartD??99)/14,0,1):0),c(h.steam.gain.gain,r?.07*Vt(1-(e.ventD??99)/12,0,1):0);let g=Vt(1-(e.subwayD??99)/24,0,1),_=Math.max(0,Math.sin(this.t%28/28*Math.PI*2-1.2))**3;c(h.subRumble.gain.gain,r?.12*g*(.3+_):0),c(h.subWhoosh.gain.gain,r?.1*g*_:0),h.subWhoosh.filter.frequency.setTargetAtTime(250+500*_,s,.2),c(h.muffled.gain.gain,a?.05:0,.4),c(h.room.gain.gain,a?.16:0,.4);let m=this.shopKind,p=[0,1,2,5,9].includes(m);c(h.roomHiss.gain.gain,a?p?.03:.006:0),c(h.roomThump.gain.gain,a&&m===6?.22*(.55+.45*Math.sin(this.t*7.5)):0,.05),c(this.hum.gain,a?[0,4,10].includes(m)?.035:.014:o?.02:0),this.humOsc.frequency.setTargetAtTime(m===4?100:60,s,.1),this.buzzGain.gain.value=a&&m===11?.02:0,(f||o)&&!r&&(this.chatT-=t,this.chatT<=0&&(this.chatT=at(1.2,3.5),this.chatter())),c(h.tunnel.gain.gain,o?.3:0,.4),c(h.tunnelHiss.gain.gain,o?.012:0,.4),this.updateCars(e,s,r);let S=e.drive;if(S&&e.mode==="driving"){let b=Math.abs(S.speed),y=[7,12,17,24],A=0;for(;A<3&&b>y[A];)A++;let w=A===0?0:y[A-1],R=Vt((b-w)/(y[A]-w),0,1),C=38+R*52+A*6+(S.throttle>0?6:0);this.engine.o1.frequency.setTargetAtTime(C,s,.04),this.engine.o2.frequency.setTargetAtTime(C*.5,s,.04),this.engine.f.frequency.setTargetAtTime(380+R*650+(S.throttle>0?450:0),s,.06),this.engine.g.gain.setTargetAtTime(.12+.06*Math.abs(S.throttle)+.02*R,s,.08),c(h.skid.gain.gain,S.slip>.5?.09*Vt(S.slip-.5,0,1)*Vt(b/8,0,1):0,.05),c(h.wash.gain.gain,.05+.1*Vt(b/20,0,1),.2)}else this.engine.g.gain.setTargetAtTime(0,s,.08),c(h.skid.gain.gain,0,.05);r&&(this.sirenT-=t,this.sirenT<=0&&(this.siren(),this.sirenT=at(28,60)),this.chatT-=t,this.chatT<=0&&(this.chatT=at(.3,1.1),(!u||Math.random()<.4)&&this.chatter()),this.hornT-=t,this.hornT<=0&&(this.hornT=at(1.2,4.5)/(.5+l),this.cityHonk()),this.jackT-=t,this.jackT<=0&&(this.jackT=at(50,110),this.jackhammer()),this.brakeT-=t,this.brakeT<=0&&(this.brakeT=at(18,45),this.busBrake()),this.coT-=t,this.coT<=0&&e.nearNpc&&(this.coo(e.nearNpc.x,e.nearNpc.z),this.coT=at(6,20)))}updateCars(t,e,n){let s=t.cars||[],r=[];if(n)for(let a=0;a<s.length;a++){let o=s[a],c=o.x-this.L.x,h=o.z-this.L.z,l=c*c+h*h;l>6400||(r.length<gf?(r.push([l,o]),r.sort((u,f)=>u[0]-f[0])):l<r[r.length-1][0]&&(r[r.length-1]=[l,o],r.sort((u,f)=>u[0]-f[0])))}for(let a=0;a<this.carVoices.length;a++){let o=this.carVoices[a],c=r[a];if(!c){o.g.gain.setTargetAtTime(0,e,.1);continue}let h=c[1],l=this.spatial(h.x,h.z,7),u=h.type==="bus"||h.type==="van",d=(u?26:34)+h.v*(u?2.4:3)+Math.sin(this.t*9+a)*.6;o.o1.frequency.setTargetAtTime(d,e,.1),o.o2.frequency.setTargetAtTime(d*.5,e,.1),o.f.frequency.setTargetAtTime(Math.min(l.cutoff,380+h.v*22),e,.1),o.g.gain.setTargetAtTime(.03*l.gain*(u?1.5:1)*(.5+Math.min(1,h.v/6)*.5),e,.1),o.p.pan.setTargetAtTime(l.pan,e,.1)}}shot(t,e,n=9,s=1){let r=this.ctx,a=r.createGain();a.gain.value=0;let o=r.createStereoPanner(),c=s;if(t!=null){let h=this.spatial(t,e,n);c=s*h.gain,o.pan.value=h.pan}return c<.004?null:(a.connect(o),o.connect(this.master),o.connect(this.revSend),{g:a,gain:c,p:o,end:()=>{setTimeout(()=>{try{a.disconnect(),o.disconnect()}catch{}},4e3)}})}honk(t,e,n="sedan",s=null){if(!this.ready)return;let r=this.ctx,a=r.currentTime;if(t!=null){if(this.honkLog=(this.honkLog||[]).filter(d=>a-d<1.5),this.honkLog.length>=3)return;this.honkLog.push(a)}let o=this.shot(t,e,16,.9);if(!o)return;let c={taxi:[466,587],sedan:[415,523],suv:[370,466],van:[330,415],bus:[250,311]},[h,l]=c[n]||c.sedan,u=s??(n==="bus"?.75:t==null?.35:.3+ht()*.4),f=r.createBiquadFilter();f.type="lowpass",f.frequency.value=t==null?2400:Math.min(2400,this.spatial(t,e,16).cutoff*1.4),f.connect(o.g);for(let d of[h,l]){let g=r.createOscillator();g.type="square",g.frequency.value=d,g.connect(f),g.start(a),g.stop(a+u+.1)}o.g.gain.setValueAtTime(0,a),o.g.gain.linearRampToValueAtTime(.16*o.gain,a+.015),o.g.gain.setValueAtTime(.16*o.gain,a+u),o.g.gain.linearRampToValueAtTime(0,a+u+.05),o.end()}coo(t=null,e=null){if(!this.ready)return;let n=this.ctx,s=n.currentTime,r=this.shot(t,e,6,t==null?.7:.5);if(!r)return;let a=n.createOscillator();a.type="triangle";let o=n.createOscillator();o.frequency.value=22;let c=n.createGain();c.gain.value=9,o.connect(c),c.connect(a.frequency);let h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=900,a.connect(h),h.connect(r.g);let l=270+ht()*40,u=[[0,.16,l,l*1.35],[.22,.34,l*1.3,l*1.55],[.4,.28,l*1.5,l*1.05]];a.frequency.setValueAtTime(l,s);let f=0;for(let[d,g,_,m]of u)a.frequency.setValueAtTime(_,s+d),a.frequency.linearRampToValueAtTime(m,s+d+g),r.g.gain.setValueAtTime(0,s+d),r.g.gain.linearRampToValueAtTime(.2*r.gain,s+d+.04),r.g.gain.linearRampToValueAtTime(0,s+d+g),f=d+g;a.start(s),o.start(s),a.stop(s+f+.05),o.stop(s+f+.05),r.end()}burst(t,e,{dur:n=.03,type:s="highpass",freq:r=2500,q:a=.7,vol:o=.05,ref:c=6}={}){if(!this.ready)return;let h=this.ctx,l=h.currentTime,u=this.shot(t,e,c,o);if(!u)return;let f=h.createBufferSource();f.buffer=this.white;let d=h.createBiquadFilter();d.type=s,d.frequency.value=r,d.Q.value=a,f.connect(d),d.connect(u.g),u.g.gain.setValueAtTime(u.gain,l),u.g.gain.exponentialRampToValueAtTime(1e-4,l+n),f.start(l,Math.random()*2,n+.02),u.end()}step(t=.05){this.burst(null,null,{dur:.03,freq:2600+ht()*1200,vol:t})}flap(){this.burst(null,null,{dur:.09,type:"bandpass",freq:550,q:.8,vol:.12})}pop(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,n=this.shot(null,null,1,.25),s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(520,e),s.frequency.exponentialRampToValueAtTime(1040,e+.09),s.connect(n.g),n.g.gain.setValueAtTime(n.gain,e),n.g.gain.exponentialRampToValueAtTime(1e-4,e+.14),s.start(e),s.stop(e+.16),n.end()}bell(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,n=this.shot(null,null,1,.22);for(let[s,r]of[[1568,0],[2093,.16]]){let a=t.createOscillator();a.type="sine",a.frequency.value=s,a.connect(n.g),a.start(e+r),a.stop(e+r+.9)}n.g.gain.setValueAtTime(n.gain,e),n.g.gain.setValueAtTime(n.gain,e+.16),n.g.gain.exponentialRampToValueAtTime(1e-4,e+1),n.end()}crash(t=1){this.burst(null,null,{dur:.35,type:"lowpass",freq:700,q:.7,vol:.5*Vt(t,.2,1.2)}),this.burst(null,null,{dur:.12,type:"bandpass",freq:2200,q:1.5,vol:.18*Vt(t,.2,1)})}door(){this.burst(null,null,{dur:.18,type:"lowpass",freq:400,q:.6,vol:.35})}siren(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,n=this.shot(null,null,1,1),s=n.p,r=t.createOscillator();r.type="sawtooth",r.frequency.value=900;let a=t.createOscillator();a.type="sine",a.frequency.value=.9;let o=t.createGain();o.gain.value=330,a.connect(o),o.connect(r.frequency);let c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=1100,r.connect(c),c.connect(n.g);let h=11;n.g.gain.setValueAtTime(0,e),n.g.gain.linearRampToValueAtTime(.045,e+4),n.g.gain.linearRampToValueAtTime(.06,e+6),n.g.gain.linearRampToValueAtTime(0,e+h),s.pan.setValueAtTime(-.8,e),s.pan.linearRampToValueAtTime(.8,e+h),r.start(e),a.start(e),r.stop(e+h+.1),a.stop(e+h+.1),n.end()}chirp(t,e,{f0:n,f1:s,dur:r=.09,vol:a=.18,type:o="triangle",vib:c=0,ref:h=10,lp:l=6e3}={}){if(!this.ready)return;let u=this.ctx,f=u.currentTime,d=this.shot(t,e,h,1);if(!d)return;let g=u.createOscillator();if(g.type=o,g.frequency.setValueAtTime(n,f),g.frequency.exponentialRampToValueAtTime(s,f+r),c){let m=u.createOscillator(),p=u.createGain();m.frequency.value=38,p.gain.value=c,m.connect(p),p.connect(g.frequency),m.start(f),m.stop(f+r+.05)}let _=u.createBiquadFilter();_.type="lowpass",_.frequency.value=l,g.connect(_),_.connect(d.g),d.g.gain.setValueAtTime(0,f),d.g.gain.linearRampToValueAtTime(a*d.gain,f+.01),d.g.gain.linearRampToValueAtTime(0,f+r),g.start(f),g.stop(f+r+.05),d.end()}ratSqueak(t,e,n=!1){n?this.chirp(t,e,{f0:2600,f1:1300,dur:.16,vol:.3,vib:140}):(this.chirp(t,e,{f0:2400,f1:3800,dur:.07,vol:.28}),setTimeout(()=>this.chirp(t,e,{f0:2700,f1:4200,dur:.07,vol:.24}),110))}ratDie(t,e){this.chirp(t,e,{f0:3200,f1:600,dur:.3,vol:.32,vib:220})}hurt(){this.chirp(null,null,{f0:760,f1:360,dur:.22,vol:.2,type:"sawtooth",vib:60,lp:1800}),this.burst(null,null,{dur:.1,type:"lowpass",freq:300,q:.7,vol:.4})}splat(t,e){this.burst(t,e,{dur:.14,type:"lowpass",freq:800,q:.7,vol:.55,ref:10}),this.burst(t,e,{dur:.05,type:"bandpass",freq:1800,q:1.2,vol:.3,ref:10})}plop(){this.chirp(null,null,{f0:460,f1:150,dur:.12,vol:.28,type:"sine"})}chatter(){if(!this.ready)return;let t=this.ctx,e=t.currentTime,n=Math.random()*Math.PI*2,s=3+Math.random()*20,r=this.shot(this.L.x+Math.cos(n)*s,this.L.z+Math.sin(n)*s,7,1);if(!r)return;let a=Math.random()<.45,o=a?1.14:1,c=a?185+Math.random()*70:92+Math.random()*40,h=[[800,1200],[550,1800],[320,2300],[500,900],[360,750],[650,1500]],l=t.createOscillator();l.type="sawtooth";let u=t.createBiquadFilter(),f=t.createBiquadFilter();u.type=f.type="bandpass",u.Q.value=6,f.Q.value=7;let d=t.createGain(),g=t.createGain();d.gain.value=1,g.gain.value=.55,l.connect(u),l.connect(f),u.connect(d),f.connect(g),d.connect(r.g),g.connect(r.g);let _=3+Math.floor(Math.random()*6),m=0,p=c;for(let S=0;S<_;S++){let b=.1+Math.random()*.16,y=h[Math.floor(Math.random()*h.length)];p=c*(.9+Math.random()*.25-(S>_-3?.08:0)),u.frequency.setValueAtTime(y[0]*o,e+m),f.frequency.setValueAtTime(y[1]*o,e+m),l.frequency.setValueAtTime(p,e+m),l.frequency.linearRampToValueAtTime(p*(.94+Math.random()*.12),e+m+b),r.g.gain.setValueAtTime(0,e+m),r.g.gain.linearRampToValueAtTime(.3*r.gain*(.6+Math.random()*.4),e+m+.03),r.g.gain.linearRampToValueAtTime(0,e+m+b),m+=b+.02+Math.random()*.05+(Math.random()<.15?.18:0)}l.start(e),l.stop(e+m+.05),r.end()}cityHonk(){let t=Math.random()*Math.PI*2,e=16+Math.random()*75,n=this.L.x+Math.cos(t)*e,s=this.L.z+Math.sin(t)*e,r=["taxi","taxi","taxi","sedan","suv","van","bus"][Math.floor(Math.random()*7)],a=Math.random(),o=a<.12?3:a<.4?2:1;for(let c=0;c<o;c++)setTimeout(()=>this.honk(n,s,r,o===3?.18:o===2?.2:.35+Math.random()*.6),c*(o===3?260:340))}jackhammer(){let t=Math.random()*Math.PI*2,e=35+Math.random()*55,n=this.L.x+Math.cos(t)*e,s=this.L.z+Math.sin(t)*e,r=30+Math.floor(Math.random()*40);for(let a=0;a<r;a++)setTimeout(()=>{this.burst(n,s,{dur:.05,type:"bandpass",freq:900+Math.random()*400,q:1,vol:.5,ref:18}),this.burst(n,s,{dur:.04,type:"lowpass",freq:180,q:.8,vol:.5,ref:18})},a*(66+Math.random()*16))}busBrake(){let t=Math.random()*Math.PI*2,e=8+Math.random()*22;this.burst(this.L.x+Math.cos(t)*e,this.L.z+Math.sin(t)*e,{dur:.8,type:"highpass",freq:3200,q:.5,vol:.5,ref:12})}train(t){if(!this.ready)return;let e=this.ctx,n=e.currentTime;if(t==="arrive"||t==="depart"){let s=t==="arrive"?8:7,r=this.shot(null,null,1,1),a=e.createBufferSource();a.buffer=this.brown,a.loop=!0;let o=e.createBiquadFilter();o.type="lowpass",a.connect(o),o.connect(r.g);let c=t==="depart";if(o.frequency.setValueAtTime(c?120:160,n),o.frequency.linearRampToValueAtTime(c?700:900,n+s*(c?.9:.35)),c||o.frequency.linearRampToValueAtTime(220,n+s),r.g.gain.setValueAtTime(0,n),r.g.gain.linearRampToValueAtTime(c?.7:.8,n+(c?1.5:s*.4)),r.g.gain.linearRampToValueAtTime(0,n+s),a.start(n,0,s+.1),!c){let h=e.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(2300,n+s*.45),h.frequency.exponentialRampToValueAtTime(700,n+s);let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=1700,l.Q.value=3,h.connect(l),l.connect(r.g),h.start(n+s*.45),h.stop(n+s)}r.end()}else if(t==="chime"){let s=this.shot(null,null,1,.3);for(let[r,a]of[[880,0],[659,.28]]){let o=e.createOscillator();o.type="triangle",o.frequency.value=r,o.connect(s.g),o.start(n+a),o.stop(n+a+.5)}s.g.gain.setValueAtTime(s.gain,n),s.g.gain.exponentialRampToValueAtTime(1e-4,n+.9),s.end()}}setContext(t,e=0){this.mode=t,this.shopKind=e}level(){if(!this.ready)return 0;let t=new Float32Array(this.analyser.fftSize);this.analyser.getFloatTimeDomainData(t);let e=0;for(let n of t)e+=n*n;return Math.sqrt(e/t.length)}};var E_=12,T_=26,w_=48,Gl=1.8,xf=1,A_=8,R_=.85,C_=55,I_=30,P_=.45,L_=22,_f=16,Us=.34;function D_(){let n=[H(B.sphere,6444621,[0,.17,0],[.15,.14,.3]),H(B.sphere,6444621,[0,.2,.3],[.1,.1,.14]),H(B.cone,4273967,[0,.19,.47],[.05,.15,.05],[Math.PI/2,0,0]),H(B.sphere,14853541,[0,.19,.55],[.025,.025,.025]),H(B.sphere,14853541,[.075,.3,.25],[.055,.065,.016],[0,.4,0]),H(B.sphere,14853541,[-.075,.3,.25],[.055,.065,.016],[0,-.4,0]),H(B.sphere,16722474,[.05,.235,.38],[.022,.022,.022]),H(B.sphere,16722474,[-.05,.235,.38],[.022,.022,.022]),H(B.box,16052196,[.012,.145,.505],[.016,.03,.01]),H(B.box,16052196,[-.012,.145,.505],[.016,.03,.01]),H(B.cyl,14853541,[0,.12,-.6],[.017,.6,.017],[Math.PI/2-.12,0,0])];for(let s of[-1,1])for(let r of[-.14,.14])n.push(H(B.box,4273967,[s*.1,.04,r],[.045,.09,.07]));return De(n)}var ta=class{constructor(t,e,n,s){this.world=e,this.player=n,this.hooks=s,this.group=new ce,t.add(this.group),this.geo=D_(),this.mat=rn({roughness:.9}),this.rats=[],this.walls=e.colliders.boxes.filter(c=>c.h>4),this.spawnT=0,this.bombCD=0,this.hp=100,this.maxHp=100,this.sinceHit=99,this.kills=0,this.alerted=!1;let r=new Nn(.1,10,8),a=new Ht({color:16184296,roughness:.5,emissive:6978133,emissiveIntensity:.35});this.bombs=[];for(let c=0;c<10;c++){let h=new Tt(r,a);h.visible=!1,h.castShadow=!0,this.group.add(h),this.bombs.push({m:h,live:!1,vx:0,vy:0,vz:0,t:0})}let o=new Ss(.5,14);o.rotateX(-Math.PI/2),this.splats=[];for(let c=0;c<24;c++){let h=new ye({color:15921122,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),l=new Tt(o,h);l.visible=!1,this.group.add(l),this.splats.push({m:l,t:99})}this.splatI=0;for(let c=0;c<8;c++)this.spawnRat(!0)}blocked(t,e,n=.25){for(let s of this.world.colliders.boxes)if(!(s.disabled||s.h<.5)&&t>s.minX-n&&t<s.maxX+n&&e>s.minZ-n&&e<s.maxZ+n)return!0;for(let s of this.world.colliders.circles){let r=t-s.x,a=e-s.z,o=s.r+n;if(r*r+a*a<o*o)return!0}return!1}sees(t,e,n,s){let r=Math.hypot(n-t,s-e),a=Math.max(2,Math.ceil(r/2));for(let o=1;o<a;o++){let c=t+(n-t)*(o/a),h=e+(s-e)*(o/a);for(let l of this.walls)if(c>l.minX&&c<l.maxX&&h>l.minZ&&h<l.maxZ)return!1}return!0}push(t){let e=this.world.colliders;for(let n of e.boxes){if(n.disabled||n.h<.5)continue;let s=Vt(t.x,n.minX,n.maxX),r=Vt(t.z,n.minZ,n.maxZ),a=t.x-s,o=t.z-r,c=a*a+o*o;if(!(c>=Us*Us))if(c>1e-8){let h=Math.sqrt(c);t.x=s+a/h*Us,t.z=r+o/h*Us}else t.x=n.minX-Us}for(let n of e.circles){let s=t.x-n.x,r=t.z-n.z,a=n.r+Us,o=s*s+r*r;if(o>=a*a||o<1e-10)continue;let c=Math.sqrt(o);t.x=n.x+s/c*a,t.z=n.z+r/c*a}t.x=Vt(t.x,-171.5,171.5),t.z=Vt(t.z,-171.5,171.5)}spawnRat(t=!1){let e=this.player;for(let n=0;n<24;n++){let s,r,a=this.world.subways;if(a.length&&ht()<.4){let l=a[Math.floor(ht()*a.length)];s=l.x+at(-5,5),r=l.z+at(-5,5)}else{let l=ht()*Math.PI*2,u=t?at(35,95):at(32,70);s=e.x+Math.cos(l)*u,r=e.z+Math.sin(l)*u}if(Math.abs(s)>171.5-2||Math.abs(r)>171.5-2)continue;let o=Math.hypot(s-e.x,r-e.z);if(o<(t?35:30)||o>100||this.blocked(s,r,.5))continue;let c=new Tt(this.geo,this.mat);c.scale.setScalar(1.9),c.castShadow=!0,this.group.add(c);let h={mesh:c,x:s,z:r,y:this.world.groundHeight(s,r),yaw:ht()*6.28,hp:C_,state:"roam",t:at(.5,2),turn:at(-1,1),biteCD:.3,wob:ht()*10,spd:at(5.8,6.9),sightT:ht()*.3,kx:0,kz:0,vy:0,lunge:0,dead:0,shown:!0};return this.rats.push(h),h}return null}spawnAt(t,e){let n=this.spawnRat(!0);return n&&(n.x=t,n.z=e,n.y=this.world.groundHeight(t,e)),n}damageRat(t,e,n,s){if(t.state==="dead")return;t.hp-=e;let r=t.x-n,a=t.z-s,o=Math.hypot(r,a)||1;t.kx=r/o*5,t.kz=a/o*5,t.vy=2.5,this.hooks.audio.ratSqueak(t.x,t.z,!0),t.state==="roam"&&(t.state="chase"),t.hp<=0&&this.killRat(t)}killRat(t){t.state="dead",t.dead=0,this.kills++;let e=1+(ht()<.4?1:0);this.hooks.crumbs?.(e),this.hooks.killed?.(t),this.hooks.audio.ratDie(t.x,t.z)}fire(t,e){if(this.bombCD>0)return!1;let n=this.bombs.find(d=>!d.live);if(!n)return!1;let s=this.player,r=t,a=e,o=3.4,c=L_,h=Math.atan2(t,e),l=null,u=1e9;for(let d of this.rats){if(d.state==="dead")continue;let g=d.x-s.x,_=d.z-s.z,m=Math.hypot(g,_);if(m>30||m<.6)continue;let p=Math.abs((Math.atan2(g,_)-h+Math.PI*3)%(Math.PI*2)-Math.PI);if(p>.72)continue;let S=m+p*20;S<u&&(u=S,l=d)}let f=s.y+.7;if(l){let d=l.x-s.x,g=l.z-s.z,_=Math.hypot(d,g),m=Math.max(.12,_/c),p=l.state==="chase"?-Math.sin(l.yaw)*0:0;r=(d+p)/_,a=g/_,o=(l.y+.25-f+.5*_f*m*m)/m}return n.live=!0,n.t=0,n.m.visible=!0,n.m.position.set(s.x+r*.3,f,s.z+a*.3),n.vx=r*c,n.vz=a*c,n.vy=o,this.bombCD=P_,!0}splat(t,e,n,s=1){let r=this.splats[this.splatI++%this.splats.length];r.t=0,r.m.visible=!0,r.m.position.set(t,e+.03,n),r.m.scale.set((.8+ht()*.6)*s,1,(.8+ht()*.6)*s),r.m.rotation.y=ht()*6.28,r.m.material.opacity=.95,this.hooks.audio.splat(t,n)}update(t,e){this.bombCD=Math.max(0,this.bombCD-t),this.sinceHit+=t;let n=this.player;if(this.sinceHit>7&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+4*t)),e.active){this.spawnT-=t;let a=this.rats.filter(o=>o.state!=="dead").length;this.spawnT<=0&&a<E_&&(this.spawnT=1.2,this.spawnRat())}for(let a of this.bombs){if(!a.live)continue;a.t+=t,a.vy-=_f*t;let o=a.m.position;o.x+=a.vx*t,o.y+=a.vy*t,o.z+=a.vz*t;let c=!1;for(let l of this.rats){if(l.state==="dead")continue;let u=l.x-o.x,f=l.z-o.z;if(u*u+f*f<.8*.8&&Math.abs(o.y-(l.y+.3))<.7){this.damageRat(l,I_,o.x-a.vx,o.z-a.vz),this.splat(l.x,l.y,l.z,1.2),c=!0;break}}let h=this.world.groundHeight(o.x,o.z);!c&&o.y<=h+.06&&(this.splat(o.x,h,o.z),c=!0),!c&&(a.t>3||this.walls.some(l=>o.x>l.minX&&o.x<l.maxX&&o.z>l.minZ&&o.z<l.maxZ&&o.y<l.h))&&(c=!0,this.hooks.audio.splat(o.x,o.z)),c&&(a.live=!1,a.m.visible=!1)}for(let a of this.splats)a.m.visible&&(a.t+=t,a.t>7&&(a.m.material.opacity=Math.max(0,.95*(1-(a.t-7)/3))),a.t>10&&(a.m.visible=!1));let s=n.x,r=n.z;for(let a=this.rats.length-1;a>=0;a--){let o=this.rats[a],c=s-o.x,h=r-o.z,l=Math.hypot(c,h);if(o.state==="dead"){o.dead+=t,o.mesh.rotation.z=Math.min(Math.PI,o.dead*12),o.mesh.position.set(o.x,o.y+.12*Math.min(1,o.dead*6),o.z),o.dead>1.4&&o.mesh.scale.multiplyScalar(Math.max(.01,1-t*3)),o.dead>2.2&&(this.group.remove(o.mesh),this.rats.splice(a,1));continue}if(l>120){this.group.remove(o.mesh),this.rats.splice(a,1);continue}let u=l<150;if(u!==o.shown&&(o.shown=u,o.mesh.visible=u),e.car&&e.car.speed>4&&(o.x-e.car.x)**2+(o.z-e.car.z)**2<2.1*2.1){this.splat(o.x,o.y,o.z,1.6),this.killRat(o);continue}o.sightT-=t,o.sightT<=0&&(o.sightT=.25,o.state==="roam"&&e.hunted&&l<T_&&this.sees(o.x,o.z,s,r)?(o.state="chase",o.vy=3,this.hooks.audio.ratSqueak(o.x,o.z,!1),this.alerted||(this.alerted=!0,this.hooks.alert?.())):o.state==="chase"&&(!e.hunted||l>w_)&&(o.state="roam"));let f=0;if(o.state==="chase"){let _=Math.atan2(c,h);if(o.yaw=gn(o.yaw,_,Math.min(1,t*10)),l>xf*.8&&o.lunge<=0){let m=o.spd*(l>12?1.08:1);o.x+=Math.sin(o.yaw)*m*t,o.z+=Math.cos(o.yaw)*m*t,f=m}o.biteCD-=t,l<xf&&o.biteCD<=0&&e.hunted&&(o.biteCD=R_,o.lunge=.22,!n.grounded&&n.y-this.world.groundHeight(n.x,n.z)>.45?this.hooks.audio.ratSqueak(o.x,o.z,!1):this.hooks.damage(A_,o))}else o.t-=t,o.t<=0&&(o.t=at(1,3),o.turn=at(-1.6,1.6),ht()<.25&&(o.yaw+=Math.PI)),o.yaw+=o.turn*t*.6,o.x+=Math.sin(o.yaw)*Gl*t,o.z+=Math.cos(o.yaw)*Gl*t,f=Gl;if(o.lunge>0){o.lunge-=t;let _=Math.sin(o.lunge/.22*Math.PI)*.35;o.x+=Math.sin(o.yaw)*_*t*14,o.z+=Math.cos(o.yaw)*_*t*14}(o.kx||o.kz)&&(o.x+=o.kx*t,o.z+=o.kz*t,o.kx*=Math.max(0,1-t*7),o.kz*=Math.max(0,1-t*7),Math.abs(o.kx)+Math.abs(o.kz)<.1&&(o.kx=o.kz=0));for(let _ of this.rats){if(_===o||_.state==="dead")continue;let m=o.x-_.x,p=o.z-_.z,S=m*m+p*p;if(S<.45*.45&&S>1e-6){let b=Math.sqrt(S);o.x+=m/b*t*1.5,o.z+=p/b*t*1.5}}this.push(o);let d=this.world.groundHeight(o.x,o.z);o.vy-=18*t,o.y+=o.vy*t,o.y<=d&&(o.y=d,o.vy=0),o.wob+=t*(f?9+f*.9:1);let g=o.y<=d+.001&&f?Math.abs(Math.sin(o.wob))*.03:0;o.mesh.position.set(o.x,o.y+g,o.z),o.mesh.rotation.set(0,o.yaw,0),o.mesh.rotation.z=f?Math.sin(o.wob*.5)*.06:0}}calm(){for(let t of this.rats)t.state==="chase"&&(t.state="roam")}heal(){this.hp=this.maxHp,this.sinceHit=99}};var Si=new URLSearchParams(location.search),kn=document.getElementById("game"),Ei=new So({canvas:kn,antialias:!0,powerPreference:"high-performance"});Ei.setPixelRatio(Math.min(devicePixelRatio,1.75));Ei.shadowMap.enabled=!0;Ei.shadowMap.type=rl;Ei.toneMapping=ol;Ei.toneMappingExposure=1;var Ve=new Eo,Sf=new Nt(11126756),U_=new Nt(13030367),Ef=new or(U_,120,520);Ve.fog=Ef;Ve.background=Sf;var Sr=new Je(62,1,.1,1500),wr=new fr;wr.scale.setScalar(1200);var Ar=wr.material.uniforms;Ar.turbidity.value=4;Ar.rayleigh.value=1.4;Ar.mieCoefficient.value=.004;Ar.mieDirectionalG.value=.8;var Tf=new F().setFromSphericalCoords(1,ml.degToRad(58),ml.degToRad(150));Ar.sunPosition.value.copy(Tf);Ve.add(wr);var zs={intensity:1.9,color:13624311,ground:10129280},Gi=new Po(zs.color,zs.ground,zs.intensity);Ve.add(Gi);var _n=new Lo(16773336,2.8);_n.castShadow=!0;_n.shadow.mapSize.set(2048,2048);var Bs=_n.shadow.camera;Bs.left=-70;Bs.right=70;Bs.top=70;Bs.bottom=-70;Bs.near=1;Bs.far=400;_n.shadow.bias=-6e-4;_n.shadow.normalBias=.6;Ve.add(_n,_n.target);var Wl=Tf.clone(),Se=new jo,ke=uf(Ve),Wi=new Ho(Ve),Mt=new qo(Ve,Sr,ke,kn),aa=new Xo(Ve,220),ca=new Qo(Ve,{train:i=>Se.train(i)}),un=new Yo(ke,Wi,Mt,{crash:i=>Se.crash(i)});Wi.hooks.honk=i=>{Math.abs(i.x-Mt.x)<120&&Math.abs(i.z-Mt.z)<120&&Se.honk(i.x,i.z,i.type)};var Be=new ta(Ve,ke,Mt,{audio:Se,damage:i=>k_(i),crumbs:i=>{ha(Rr+i)},alert:()=>Er("Rats! Press F or click to throw a poop bomb",3.5)}),N_=[ke.group,Wi.group,aa.group,wr,Be.group],Te=i=>document.getElementById(i),la=Te("overlay"),z_=Te("loc"),Ns=Te("hint"),ea=Te("prompt"),yf=Te("fade"),F_=Te("crumbs"),$l=Te("toast");function wf(){la.classList.add("hidden"),Se.start(),Si.has("nolock")||kn.requestPointerLock?.()}Te("play").addEventListener("click",wf);kn.addEventListener("click",()=>{!Mt.locked&&la.classList.contains("hidden")&&!Si.has("nolock")&&kn.requestPointerLock?.()});document.addEventListener("pointerlockchange",()=>{!Mt.locked&&!Si.has("nolock")&&(la.classList.remove("hidden"),Te("play").textContent="Resume")});Te("mute").addEventListener("click",()=>Ql());kn.addEventListener("mousedown",i=>{i.button===0&&Mt.locked&&ua()});function Ql(){let i=Se.toggleMute();Te("mute").textContent=i?"Sound off":"Sound on",Te("mute").classList.toggle("off",i)}var sa=0;function Er(i,t=2){$l.textContent=i,$l.style.opacity=1,sa=t}var O_=matchMedia("(pointer: coarse)").matches;if(O_){document.body.classList.add("touch");let i=Te("pad"),t=Te("nub"),e=null,n=0,s=0;i.addEventListener("touchstart",h=>{e=h.changedTouches[0].identifier;let u=i.getBoundingClientRect();n=u.left+u.width/2,s=u.top+u.height/2,h.preventDefault()},{passive:!1}),i.addEventListener("touchmove",h=>{for(let l of h.changedTouches)if(l.identifier===e){let u=(l.clientX-n)/50,f=(l.clientY-s)/50,d=Math.hypot(u,f);d>1&&(u/=d,f/=d),Mt.touchMove={x:u,y:f},t.style.transform=`translate(${u*40}px, ${f*40}px)`}h.preventDefault()},{passive:!1});let r=()=>{e=null,Mt.touchMove=null,t.style.transform=""};i.addEventListener("touchend",r),i.addEventListener("touchcancel",r);let a=null,o=0,c=0;kn.addEventListener("touchstart",h=>{let l=h.changedTouches[0];a=l.identifier,o=l.clientX,c=l.clientY}),kn.addEventListener("touchmove",h=>{for(let l of h.changedTouches)l.identifier===a&&(Mt.camYaw-=(l.clientX-o)*.006,Mt.camPitch=Vt(Mt.camPitch+(l.clientY-c)*.006,-.15,1.15),Mt.lastLook=performance.now(),o=l.clientX,c=l.clientY)}),Te("jump").addEventListener("touchstart",h=>{Mt.keys.Space=!0,h.preventDefault()},{passive:!1}),Te("jump").addEventListener("touchend",()=>{Mt.keys.Space=!1}),Te("act").addEventListener("touchstart",h=>{eh(),h.preventDefault()},{passive:!1}),Te("fire").addEventListener("touchstart",h=>{ua(),h.preventDefault()},{passive:!1}),Te("horn").addEventListener("touchstart",h=>{jl(),h.preventDefault()},{passive:!1})}var me="street",Ee=null,Af=null,Tr=0,Rr=0,Fs=!1,Bn=null,Rf=0,Jl=Si.has("nofade")?0:260;function ha(i){Rr=i,F_.textContent=`Crumbs ${i}`}var B_=document.querySelector("#hp i"),ra=Te("hurt"),Xl=Te("kills"),oa=0,Os=!1;function k_(i){Os||me!=="street"||(Be.hp=Math.max(0,Be.hp-i),Be.sinceHit=0,Se.hurt(),ra.style.opacity=1,oa=.25,Be.hp<=0&&H_())}function H_(){Os=!0,Er("The rats got you! You wake up back where you started.",3),Cr(()=>{Mt.teleport(ke.spawn.x,ke.spawn.z,ke.spawn.yaw),ha(Math.floor(Rr/2)),Be.heal(),Be.calm(),Os=!1}),Jl===0&&(Os=!1)}function ua(){if(me!=="street"||Fs||Os)return;let i=-Math.sin(Mt.camYaw),t=-Math.cos(Mt.camYaw);Be.fire(i,t)&&(Se.plop(),Mt.yaw=Math.atan2(i,t),Mt.pigeon.startPeck())}ha(0);function Cf(i){let t=i==="street"||i==="driving";for(let e of N_)e.visible=t;_n.visible=t,ca.hideAll(),t?(Ve.fog=Ef,Ve.background=Sf,Gi.intensity=zs.intensity,Gi.color.setHex(zs.color),Gi.groundColor.setHex(zs.ground),Mt.setContext(Mt.outdoor)):(Ee.group.visible=!0,Ve.fog=Ee.fog?new or(Ee.fog.color,Ee.fog.near,Ee.fog.far):null,Ve.background=new Nt(Ee.background),Gi.intensity=Ee.hemi.intensity,Gi.color.setHex(Ee.hemi.color),Gi.groundColor.setHex(Ee.hemi.ground),Mt.setContext(Ee.ctx))}function Cr(i){if(!Fs){if(Jl===0){i();return}Fs=!0,Mt.frozen=!0,yf.classList.add("on"),setTimeout(()=>{i(),setTimeout(()=>{yf.classList.remove("on"),Fs=!1,Mt.frozen=!1},140)},Jl)}}function If(i,t){Be.calm(),Ee=i,Af=t,me=i.type,Cf(me),Mt.teleport(i.spawn.x,i.spawn.z,i.spawn.yaw),Mt.camDist=i.type==="shop"?3.7:5.2,Mt.snapCamera(),Se.setContext(i.type,i.kind),i.type==="shop"?Se.bell():Se.door()}function Pf(i){Ee=null,me="street",Cf("street"),Mt.teleport(i.x,i.z,i.yaw),Se.setContext("street"),Se.door()}function Lf(i){Cr(()=>If(ca.shop(i.kind),{x:i.x,z:i.z,yaw:Math.atan2(i.nx,i.nz)}))}function Df(i){Cr(()=>{let t=ca.getSubway();t.setStation(i.station,i.lines),Rf=i.id,If(t,{x:i.exitX,z:i.exitZ,yaw:i.exitYaw})})}function V_(){let i=ke.subways.filter(e=>e.id!==Rf);if(!i.length)return;let t=i[Math.floor(Math.random()*i.length)];Cr(()=>{Pf({x:t.exitX,z:t.exitZ,yaw:t.exitYaw}),Er(`Arrived at ${t.station}`,3)}),Se.train("chime")}function jl(){me==="driving"&&Se.honk(null,null,un.car.type)}function Uf(){Se.coo(),Mt.pigeon.startPeck()}function th(){if(Fs)return null;let i=Mt.x,t=Mt.z;if(me==="driving"){let n=Math.abs(un.speed)<=4;return{id:"exit",text:n?"Get out":"Slow down to get out",enabled:n}}if(me==="street"){let n=null,s=(a,o)=>{(!n||a<n.d)&&(n={d:a,...o,enabled:o.enabled!==!1})},r=un.nearest(i,t);r&&s(un.distTo(r,i,t),{id:"car",car:r,text:`Drive this ${un.label(r)}`});for(let a of ke.shopDoors){if(Math.abs(a.x-i)>2.2||Math.abs(a.z-t)>2.2)continue;let o=Math.hypot(a.x-i,a.z-t);o<2&&s(o,{id:"shop",door:a,text:`Enter ${a.label.toLowerCase()}`})}for(let a of ke.subways){let o=Math.hypot(a.x-i,a.z-t);o<3.6&&s(o-1.5,{id:"subway",sw:a,text:"Take the stairs down to the subway"})}for(let a of ke.carts){let o=Math.hypot(a.x-i,a.z-t);if(o<2.8){let c=Tr>=(a.nextT??0);s(o,{id:"crumbs",cart:a,enabled:c,text:c?"Beg the vendor for crumbs":"The vendor is out of crumbs for now"})}}return n}if(Ee.dynamicInteract){let n=Ee.dynamicInteract(i,t);if(n)return{...n,enabled:!0}}let e=null;for(let n of Ee.interacts){let s=Math.hypot(n.x-i,n.z-t);s<n.r&&(!e||s<e.d)&&(e={d:s,...n,enabled:n.id!=="crumbs"||(Ee.cd?.crumbs??0)<=performance.now()})}return e&&e.id==="crumbs"&&!e.enabled&&(e.text="Out of crumbs for now"),e}function eh(){let i=th();if(!(!i||!i.enabled))switch(i.id){case"car":un.enter(i.car),me="driving",Se.door();break;case"exit":un.exit()?(me="street",Se.door()):Er("Can't get out here: no room",1.8);break;case"shop":Lf(i.door);break;case"subway":Df(i.sw);break;case"leave":{let t=Af;Cr(()=>Pf(t));break}case"board":V_();break;case"crumbs":{let t=1+Math.floor(Math.random()*3);ha(Rr+t),Se.pop(),Er(`+${t} crumb${t>1?"s":""}!`,1.5),Mt.pigeon.startPeck(),i.cart?i.cart.nextT=Tr+20:(Ee.cd=Ee.cd||{},Ee.cd.crumbs=performance.now()+15e3);break}default:break}}addEventListener("keydown",i=>{i.repeat||(i.code==="KeyE"?eh():i.code==="KeyF"?ua():i.code==="KeyH"?jl():i.code==="KeyC"?Uf():i.code==="KeyM"&&Ql())});function G_(i,t){let e=Vt(Math.round(i/66+5/2),0,5),n=Vt(Math.round(t/66+5/2),0,5),s=Math.abs(i-Ce(e)),r=Math.abs(t-Ce(n));return s<9&&r<9?`${Rs[e]} & ${Cs[n]}`:s<9?Rs[e]:r<9?Cs[n]:`${Rs[e]} & ${Cs[n]}`}function ql(i,t,e){let n=1e9;for(let s of i){let r=Math.hypot(s.x-t,s.z-e);r<n&&(n=r)}return n}var vf="",Mf="";function W_(i){let t;if(me==="shop"?t=Ee.label[0]+Ee.label.slice(1).toLowerCase():me==="subway"?t="Subway station":t=G_(Mt.x,Mt.z),me==="driving"&&(t+="  -  driving"),t!==vf&&(z_.textContent=t,vf=t),me==="street"){let n=ke.subways.find(a=>(a.x-Mt.x)**2+(a.z-Mt.z)**2<196),s=n?null:ke.trucks.find(a=>(a.x-Mt.x)**2+(a.z-Mt.z)**2<144),r=n?`Subway: ${n.station}  (${n.lines.join(" ")})`:s?`Food truck: ${s.name}`:"";r!==Ns.textContent&&(Ns.textContent=r,Ns.style.opacity=r?1:0)}else Ns.textContent&&(Ns.textContent="",Ns.style.opacity=0);Bn=th();let e=Bn?Bn.text+Bn.enabled:"";e!==Mf&&(Mf=e,Bn?(ea.innerHTML=`<b>${Bn.enabled?"E":"..."}</b> ${Bn.text}`,ea.classList.toggle("dim",!Bn.enabled),ea.style.opacity=1):ea.style.opacity=0,document.body.classList.toggle("canact",!!(Bn&&Bn.enabled))),document.body.classList.toggle("driving",me==="driving"),sa>0&&(sa-=i,sa<=0&&($l.style.opacity=0))}function Nf(){let i=kn.clientWidth,t=kn.clientHeight;Ei.setSize(i,t,!1),Sr.aspect=i/t,Sr.updateProjectionMatrix()}addEventListener("resize",Nf);Nf();var bf=0,na=0,Yl=0,X_={lx:0,lz:0,lyaw:0,mode:"street",cars:[],busy:.5,cartD:99,ventD:99,subwayD:99,nearNpc:null,drive:null};function zf(i){let t=me==="street"||me==="driving";if(t?(Tr+=i,un.update(i,Mt.keys),Mt.update(i),Wi.update(i,Tr,me==="driving"?null:{x:Mt.x,y:Mt.y,z:Mt.z}),aa.update(i,Mt),ke.update(i,Mt.x,Mt.z),Be.update(i,{active:!0,hunted:me==="street"&&!Os&&!Fs,car:me==="driving"?{x:Mt.x,z:Mt.z,speed:Math.abs(un.speed)}:null}),_n.position.set(Mt.x+Wl.x*160,Wl.y*160,Mt.z+Wl.z*160),_n.target.position.set(Mt.x,0,Mt.z),_n.target.updateMatrixWorld(),wr.position.set(Mt.x,0,Mt.z)):(Mt.update(i),Ee.update(i,Mt)),me!=="driving"){let n=Mt.pigeon.steps;n!==bf&&Mt.grounded&&Mt.speed>.8&&Se.step(.025+.03*Math.min(1,Mt.speed/9)),bf=n,Mt.flapping?(na-=i,na<=0&&(Se.flap(),na=.13)):na=0}Yl-=i;let e=X_;if(e.lx=Mt.x,e.lz=Mt.z,e.lyaw=Mt.camYaw,e.mode=me==="driving"?"driving":me==="street"?"street":me,e.cars=t?Wi.vehicles:null,e.drive=me==="driving"?{speed:un.speed,throttle:un.input.throttle,slip:un.input.slip}:null,t&&Yl<=0){Yl=.2,e.cartD=ql(ke.carts,Mt.x,Mt.z),e.ventD=ql(ke.vents,Mt.x,Mt.z),e.subwayD=ql(ke.subways,Mt.x,Mt.z),e.nearNpc=aa.nearest(Mt.x,Mt.z,22);let n=0;for(let s of Wi.vehicles)Math.abs(s.x-Mt.x)<70&&Math.abs(s.z-Mt.z)<70&&n++;e.busy=Vt(n/16,0,1)}Se.update(i,e),B_.style.width=(100*Be.hp/Be.maxHp).toFixed(1)+"%",Xl.dataset.k!==String(Be.kills)&&(Xl.dataset.k=Be.kills,Xl.textContent=`Rats beaten ${Be.kills}`),oa>0?(oa-=i,oa<=0&&(ra.style.opacity=Be.hp<35?.45:0)):Be.hp<35&&ra.style.opacity==="0"&&(ra.style.opacity=.45),W_(i)}var q_=new Do,ia=0,Zl=0,Kl=0;function Ff(){let i=Math.min(q_.getDelta(),.1);zf(i),Ei.render(Ve,Sr),ia+=i,Zl++,ia>=1&&(Kl=Zl/ia,ia=0,Zl=0,Si.has("fps")&&(Te("fps").textContent=Kl.toFixed(0)+" fps")),requestAnimationFrame(Ff)}window.__game={scene:Ve,camera:Sr,renderer:Ei,player:Mt,world:ke,traffic:Wi,npcs:aa,vehicles:un,interiors:ca,audio:Se,dir:_n,combat:Be,fireBomb:ua,get fps(){return Kl},get mode(){return me},get crumbs(){return Rr},get current(){return Ee},startPlay:wf,update:zf,interact:eh,currentPrompt:th,enterShop:Lf,enterSubway:Df,toggleMute:Ql,honk:jl,coo:Uf,get time(){return Tr}};Si.has("autostart")&&(la.classList.add("hidden"),Si.has("audio")&&Se.start());Te("loading").classList.add("hidden");Si.has("manual")||requestAnimationFrame(Ff);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
