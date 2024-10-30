import{c as J,d as Q,k as Y,n as Z}from"./chunk-3MVZIPMK.js";import{G as _,b as M,c as s,d as k,e as y,f as C,g as m,h as I,i as X,j as F,k as H,p as T}from"./chunk-EEATIPFZ.js";import{Aa as G,Ca as P,D as v,Da as q,Ga as A,I as h,J as w,M as S,N as O,Oa as z,Pa as U,Ta as W,W as l,ca as b,cb as K,ea as p,f as R,fa as $,gb as L,ha as c,ia as a,ja as f,ka as N,la as B,ma as j,na as V,pa as x,qa as d,xa as D,ya as u}from"./chunk-R4RVY2NK.js";var ee=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h({type:e,selectors:[["app-auth-step"]],decls:1,vars:0,template:function(t,o){t&1&&f(0,"router-outlet")},dependencies:[K]});let n=e;return n})();var te=(()=>{let e=class e{constructor(){this.form=new C({businessName:new m("",[s.required,s.minLength(3)]),businessWebsite:new m("",[s.minLength(3)]),businessAddress:new m("",[s.required,s.minLength(3)]),gstNumber:new m("",[s.minLength(3)])})}getForm(){console.log("getUserData - Role: brand",this.form.value)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h({type:e,selectors:[["app-register-brand"]],standalone:!0,features:[P],decls:20,vars:2,consts:[[1,"card"],[1,"text-container","m-b-20","d-flex","flex-d-col","justify-center"],[1,"title","p-l-24"],[1,"subtitle","p-l-24"],[3,"formGroup"],[1,"inputs","p-lr-30","align-center","d-flex","flex-d-col","justify-center"],[1,"input","p-l-10","m-b-20","align-center","d-flex"],["formControlName","businessName","placeholder","Business Name","type","text ",1,"m-b-10"],["formControlName","businessWebsite","placeholder","Business Website (Optional)","type","text",1,"m-b-10"],["formControlName","gstNumber","placeholder","GST Number (Optional)","type","text","onlyInteger","",1,"m-b-10"],[1,"input","p-l-10","m-b-40","align-center","d-flex"],["formControlName","businessAddress","placeholder","Business Address","type","text",1,"m-b-10"],[1,"buttons","d-flex","justify-center"],["type","submit",1,"general",3,"click","disabled"]],template:function(t,o){t&1&&(c(0,"app-auth-step-layout")(1,"div",0)(2,"div",1)(3,"span",2),u(4,"A Few More Details"),a(),c(5,"span",3),u(6,"Fill the below detilas and submit"),a()(),c(7,"form",4)(8,"div",5)(9,"div",6),f(10,"input",7),a(),c(11,"div",6),f(12,"input",8),a(),c(13,"div",6),f(14,"input",9),a(),c(15,"div",10),f(16,"input",11),a()(),c(17,"div",12)(18,"button",13),x("click",function(){return o.getForm()}),u(19," SUBMIT "),a()()()()()),t&2&&(l(7),p("formGroup",o.form),l(11),p("disabled",o.form.invalid))},dependencies:[_,I,M,k,y,F,H,T,Z,Y],styles:[".card[_ngcontent-%COMP%]{border-radius:10px;width:auto;min-height:490px;background-color:var(--white)}.card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{border-top-left-radius:10px;border-top-right-radius:10px;height:90px;width:100%;background-color:var(--light-red)}.card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:700;font-size:16px;line-height:1.35;letter-spacing:-.02em;color:var(--white)}.card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Manrope,sans-serif;font-weight:600;font-size:14px;line-height:1.8;color:var(--white)}.card[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:460px}.card[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]{width:136px;height:50px;font-family:Inter,sans-serif;font-weight:600;font-size:14px;letter-spacing:.05em;color:var(--white)}@media (max-width: 576px){.card[_ngcontent-%COMP%]{width:100%;border-radius:0;height:100%}.card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}.card[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%}}"]});let n=e;return n})();var ae=n=>({form:n});function se(n,e){if(n&1&&(c(0,"form",4),j(1,5),a()),n&2){let i=d(2),r=D(3);p("formGroup",i.formSocialInputs),l(),p("ngTemplateOutlet",r)("ngTemplateOutletContext",q(3,ae,i.formSocialInputs))}}function le(n,e){if(n&1&&(N(0),b(1,se,2,5,"form",3),B()),n&2){let i=d();l(),p("ngIf",i.formSocialInputs)}}function pe(n,e){if(n&1&&(c(0,"div",20),f(1,"img",21)(2,"input",22),a()),n&2){let i=d().$implicit,r=d().form;l(2),p("placeholder",i.text+" url")("formControl",r==null?null:r.get(i.id+"url"))}}function me(n,e){if(n&1){let i=V();N(0),c(1,"div",15)(2,"input",16),x("change",function(){let t=S(i).$implicit,o=d(2);return O(o.toggleCheckbox(t.id,o.currentStep))}),a(),c(3,"label",17),u(4),a(),c(5,"div",18),b(6,pe,3,2,"div",19),a()(),B()}if(n&2){let i,r,t=e.$implicit,o=d(2);l(),$("width",o.checkBoxes===o.checkBoxesStepTwo?"100%":"30%"),l(),p("id",t.id)("name",t.id)("checked",o.formPart==null||(i=o.formPart.get(o.currentStep))==null?null:i.value.includes(t.id)),l(),p("for",t.id),l(),G(" ",t.text," "),l(2),p("ngIf",o.currentStep==="two"&&(o.formPart==null||(r=o.formPart.get(o.currentStep))==null?null:r.value.includes(t.id)))}}function de(n,e){if(n&1){let i=V();c(0,"div",6)(1,"div",7)(2,"span",8),u(3,"Primary Interest:"),a(),c(4,"span",9),u(5,"Select Up to 3 categories"),a()(),c(6,"div",10),b(7,me,7,8,"ng-container",11),a(),c(8,"div",12)(9,"button",13),x("click",function(){S(i);let t=d();return O(t.prev())}),u(10," BACK "),a(),c(11,"button",14),x("click",function(){S(i);let t=d();return O(t.next())}),u(12," NEX STEP "),a()()()}if(n&2){let i=d();l(7),p("ngForOf",i.checkBoxes),l(2),p("disabled",i.currentStep==="one"),l(2),p("disabled",(i.formPart==null?null:i.formPart.invalid)||(i.formSocialInputs==null?null:i.formSocialInputs.invalid))}}var ne=(()=>{let e=class e{constructor(){this.currentStep="one",this.$currentStep=new R("one"),this.checkBoxes=[],this.checkBoxesStepOne=J,this.checkBoxesStepTwo=Q}ngOnInit(){this.checkBoxes=this.checkBoxesStepOne,this.createFormCompleted(),this.createFormPart("one",3)}createFormPart(r,t){delete this.formPart,this.formPart=new C({[r]:new m([],[s.required,s.minLength(t)])}),this.formPart.get(r)?.setValue(this.formCompleted?.get(r)?.value)}createFormCompleted(){this.formCompleted=new C({one:new m([],[s.required]),two:new m([],[s.required]),twoLinks:new m({},[s.required])})}createFormSocialInputs(){let r={};this.formSocialInputs=new C(r),Object.keys(this.formCompleted?.get("twoLinks")?.value).forEach(t=>{this.formSocialInputs?.setControl(t,new m(this.formCompleted?.get("twoLinks")?.value[t],[s.required,s.minLength(3)]))})}toggleCheckbox(r,t){if(this.formPart){let o=this.formPart.get(t);if(o){let g=o.value;if(g.includes(r)){this.currentStep==="two"&&this.formSocialInputs&&this.formSocialInputs.removeControl(`${r}Link`);let oe=g.indexOf(r);g.splice(oe,1)}else this.currentStep==="two"&&this.formSocialInputs&&this.formSocialInputs.setControl(`${r}Link`,new m("",[s.required,s.minLength(3)])),g.push(r);o.setValue(g)}}}prev(){this.formCompleted?.get(`${this.currentStep}Links`)?.setValue(this.formSocialInputs?.value),this.$currentStep.next("one"),this.currentStep="one",this.checkBoxes=this.checkBoxesStepOne,delete this.formSocialInputs,this.createFormPart(this.currentStep,3)}next(){this.currentStep==="two"?(this.formCompleted?.get(this.currentStep)?.setValue(this.formPart?.value[this.currentStep]),this.formCompleted?.get(`${this.currentStep}Links`)?.setValue(this.formSocialInputs?.value),this.getForm(this.formCompleted?.value)):(this.formCompleted?.get(this.currentStep)?.setValue(this.formPart?.value[this.currentStep]),this.currentStep="two",this.checkBoxes=this.checkBoxesStepTwo,this.$currentStep.next("two"),this.createFormPart(this.currentStep,1),this.createFormSocialInputs())}getForm(r){console.log("getUserData - Role: influencer",r)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h({type:e,selectors:[["app-register-influencer"]],standalone:!0,features:[P],decls:4,vars:4,consts:[["default",""],[3,"steps","$currentStep"],[4,"ngIf","ngIfElse"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"card"],[1,"text-container","m-b-20","d-flex","flex-d-col","justify-center"],[1,"title","p-l-24"],[1,"subtitle","p-l-24"],[1,"checkboxes","d-flex","flex-d-row"],[4,"ngFor","ngForOf"],[1,"buttons","p-t-50","p-b-30","d-flex","flex-d-row","justify-center"],[1,"general","back","m-r-16",3,"click","disabled"],[1,"general",3,"click","disabled"],[1,"checkbox","p-lr-30","d-flex","flex-d-col","m-b-16"],["type","checkbox",1,"custom-checkbox",3,"change","id","name","checked"],[3,"for"],[1,"input-wrap","d-flex","justify-start","w-100"],["class","input m-t-12 d-flex align-center",4,"ngIf"],[1,"input","m-t-12","d-flex","align-center"],["src","/assets/svg/url.svg",1,"m-r-10"],["type","text",1,"d-flex","align-center",3,"placeholder","formControl"]],template:function(t,o){if(t&1&&(c(0,"app-auth-step-layout",1),b(1,le,2,1,"ng-container",2)(2,de,13,3,"ng-template",null,0,A),a()),t&2){let g=D(3);p("steps",!0)("$currentStep",o.$currentStep.asObservable()),l(),p("ngIf",o.currentStep==="two")("ngIfElse",g)}},dependencies:[_,z,U,W,I,M,k,y,X,F,T],styles:[".card[_ngcontent-%COMP%]{border-radius:10px;width:640px;min-height:490px;background-color:var(--white)}.card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{border-top-left-radius:10px;border-top-right-radius:10px;height:90px;width:100%;background-color:var(--light-red)}.card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:700;font-size:16px;line-height:1.35;letter-spacing:-.02em;color:var(--white)}.card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Manrope,sans-serif;font-weight:600;font-size:14px;line-height:1.8;color:var(--white)}.card[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.card[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before{background-image:url(/assets/svg/done-dark.svg);width:20px;height:20px;border-radius:7px}.card[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{background-image:url(/assets/svg/done-white.svg)}.card[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:Manrope,sans-serif;font-weight:600;font-size:14px;line-height:1.8;color:#595f67}.card[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid #d0d5dd;border-radius:10px;padding:0 16px;width:100%;height:52px}.card[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]{width:136px;height:50px;font-family:Inter,sans-serif;font-weight:600;font-size:14px;letter-spacing:.05em;text-transform:uppercase;text-align:center}.card[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{background-color:var(--white);border:1px solid;border-color:var(--light-red);color:var(--light-red)}@media (max-width: 656px){.card[_ngcontent-%COMP%]{width:auto;border-radius:0;height:100%}.card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}.card[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%}}"]});let n=e;return n})();var ue=[{path:"",component:ee,children:[{path:"register-brand",component:te},{path:"register-influencer",component:ne}]}],re=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=w({type:e}),e.\u0275inj=v({imports:[L.forChild(ue),L]});let n=e;return n})();var De=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=w({type:e}),e.\u0275inj=v({imports:[re,_]});let n=e;return n})();export{De as AuthStepModule};
/**i18n:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855*/
