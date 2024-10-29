import './polyfills.server.mjs';
import{c as i}from"./chunk-U6SOWFWD.mjs";import{B as h,I as m,J as l,Q as c,ba as d,xa as u}from"./chunk-Z3LXDDOH.mjs";var x=[{id:"brand",text:"I\u2019m a Brand",icon:"/assets/svg/brand.svg"},{id:"influencer",text:"I\u2019m a Influencer",icon:"/assets/svg/influencer.svg"}],y=[{id:"google",text:"Google"},{id:"facebook",text:"Facebook"}],I=[{id:"auto",text:"Auto"},{id:"books",text:"Books"},{id:"beauty",text:"Beauty"},{id:"entertainments",text:"Entertainments"},{id:"lifestyle",text:"Lifestyle"},{id:"mom",text:"Mom"},{id:"travel",text:"Travel"},{id:"restaurants",text:"Restaurants"},{id:"gaming",text:"Gaming"},{id:"fitness",text:"Fitness"},{id:"vlog",text:"Vlog"},{id:"comedy",text:"Comedy"},{id:"education",text:"Education"},{id:"finance",text:"Finance"},{id:"food",text:"Food"},{id:"investment",text:"Investment"},{id:"mens-fasion",text:"Men\u2019s Fasion"},{id:"parenting",text:"Parenting"},{id:"photography",text:"Photography"},{id:"technology",text:"Technology"}],b=[{id:"blog",text:"Blog"},{id:"facebook",text:"Facebook"},{id:"twitter",text:"Twitter"},{id:"instagram",text:"Instagram"},{id:"youtube",text:"YouTube"},{id:"roposo",text:"Roposo"}],w=["key1","key2","key3","key4","key5"],k={title:"Welcome Back, Shasha K!",subtitle:"Welcome back, please enter your detail",sections:["socials","or","signUp","remember"],inputs:[{value:"",inputId:"email",inputType:"text",icon:"/assets/svg/email.svg",placeholder:"Email",validators:[i.required,i.email]},{value:"",inputId:"password",inputType:"password",placeholder:"Password",validators:[i.required,i.minLength(6)],icon:"/assets/svg/password.svg",show:!1,showIcon:"/assets/svg/eye-show.svg",hideIcon:"/assets/svg/eye-hide.svg"}],buttons:[{id:"signIn",text:"SIGN IN"}]},E={title:"Create your account",subtitle:"Let's create an account and start a wonderful journey",sections:["agreement","userRoles","or","socials","signIn"],inputs:[{value:"",inputId:"username",inputType:"text",placeholder:"Username",validators:[i.required,i.minLength(5)],icon:"/assets/svg/username.svg"},{value:"",inputId:"email",inputType:"text",placeholder:"Email",validators:[i.required,i.email],icon:"/assets/svg/email.svg"},{value:"",inputId:"phoneNumber",inputType:"tel",placeholder:"Mobile Number",validators:[i.required,i.minLength(19)],icon:"/assets/svg/phone.svg"},{value:"",inputId:"password",inputType:"password",placeholder:"Password",validators:[i.required,i.minLength(6)],icon:"/assets/svg/password.svg",showIcon:"/assets/svg/eye-show.svg",hideIcon:"/assets/svg/eye-hide.svg"}],checkboxes:[{checkboxId:"userRoles",checkboxValue:!1,label:"components.auth.checkboxes.agreement",validators:[i.required,i.requiredTrue]}],buttons:[{id:"signUp",text:"SIGN UP"}]},T={titleRecovery:"Enter OTP",subtitleRecovery:{part1:"We have shared a code to your registered",part2:"Mobile Number"},sections:["back"],inputs:[{value:"",inputId:"phoneNumber",inputType:"tel",placeholder:"Mobile Number",validators:[i.required,i.minLength(19)],icon:"/assets/svg/phone.svg"}],buttons:[{id:"verify",text:"Send code"}]},S={titleRecovery:"Enter OTP",subtitleRecovery:{part1:"We have shared a code to your registered",part2:"Mobile Number"},sections:["back","resetForm"],inputs:[],buttons:[{id:"verify",text:"VERIFY"}]},B={titleRecovery:"Enter OTP",subtitleRecovery:{part1:"We have shared a code to your registered",part2:"Mobile Number"},sections:["back"],inputs:[{value:"",inputId:"password",inputType:"password",placeholder:"Password",validators:[i.required,i.minLength(6)],icon:"/assets/svg/password.svg",showIcon:"/assets/svg/eye-show.svg",hideIcon:"/assets/svg/eye-hide.svg"},{value:"",inputId:"repeatPassword",inputType:"password",placeholder:"Repeat password",validators:[i.required,i.minLength(6)],icon:"/assets/svg/password.svg",showIcon:"/assets/svg/eye-show.svg",hideIcon:"/assets/svg/eye-hide.svg"}],buttons:[{id:"save",text:"Save"}]};var R=(()=>{let e=class e{constructor(s){this.el=s}onInputChange(s){let t=this.el.nativeElement.value;if(t.trim()===""){this.el.nativeElement.value="";return}t=t.replace(/[^0-9]*/g,""),this.el.nativeElement.value=t}};e.\u0275fac=function(t){return new(t||e)(d(c))},e.\u0275dir=l({type:e,selectors:[["","onlyInteger",""]],hostBindings:function(t,n){t&1&&u("input",function(r){return n.onInputChange(r)})}});let o=e;return o})();var H=(()=>{let e=class e{constructor(s){this.el=s}onInput(s){if(!s){this.el.nativeElement.value="";return}let t=s.replace(/\D/g,""),n="",a=0,r="+(___) __-___-__-__";for(let g=0;g<r.length;g++)if(r.charAt(g)==="_")if(a<t.length)n+=t.charAt(a++);else break;else n+=r.charAt(g);let p=n.charAt(n.length-1);(p==="("||p===")"||p==="-")&&(n=n.slice(0,-1)),p===" "&&(n=n.slice(0,-2)),this.el.nativeElement.value=n}};e.\u0275fac=function(t){return new(t||e)(d(c))},e.\u0275dir=l({type:e,selectors:[["","phoneMask",""]],hostBindings:function(t,n){t&1&&u("input",function(r){return n.onInput(r.target.value)})}});let o=e;return o})();var N=(()=>{let e=class e{constructor(s){this.el=s}onInputChange(s){let a=this.el.nativeElement.value.replace(/\D/g,"").slice(0,1);if(a!==""){this.el.nativeElement.value=a;let r=this.el.nativeElement.nextElementSibling;r&&r.focus()}else this.el.nativeElement.value=""}};e.\u0275fac=function(t){return new(t||e)(d(c))},e.\u0275dir=l({type:e,selectors:[["","singleDigitInput",""]],hostBindings:function(t,n){t&1&&u("input",function(r){return n.onInputChange(r)})}});let o=e;return o})();var j=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m({type:e}),e.\u0275inj=h({});let o=e;return o})();export{x as a,y as b,I as c,b as d,w as e,k as f,E as g,T as h,S as i,B as j,R as k,H as l,N as m,j as n};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
