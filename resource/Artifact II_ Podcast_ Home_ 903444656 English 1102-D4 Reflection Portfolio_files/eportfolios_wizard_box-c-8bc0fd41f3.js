(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[314],{B1vq:function(e,t,n){"use strict"
var i=n("ouhR")
var s=n.n(i)
n("s/PJ")
s.a.fn.scrollToVisible=function(e){const t={}
const n=s()(e)
if(0===n.length)return
let i=n.offset(),o=n.outerWidth(),l=n.outerHeight(),c=i.top,a=c+l,r=i.left,u=r+o,d="html,body"==this.selector?s.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),f=this.outerHeight(),_=this.outerWidth()
if("html,body"!=this.selector){let e=s()("body").offset()
this.each((function(){try{e=s()(this).offset()
return false}catch(e){}}))
c-=e.top
a-=e.top
r-=e.left
u-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){f=s()(window).height()
s()("#wizard_box:visible").length>0&&(f-=s()("#wizard_box:visible").height())
_=s()(window).width()
c-=d
r-=h
a-=d
u-=h}c<0||f<l&&a>f?t.scrollTop=c+d:a>f&&(t.scrollTop=a+d-f+20)
r<0?t.scrollLeft=r+h:u>_&&(t.scrollLeft=u+h-_+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},Epx3:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR")
var s=n.n(i)
n("p6Wi")
s()(document).ready(()=>{s()(".sections_list_hover").on("mouseover focus",()=>s()("#section_list .section:first").indicate())
s()(".pages_list_hover").on("mouseover focus",()=>s()("#section_pages").indicate())
s()(".organize_sections_hover").on("mouseover focus",()=>s()(".manage_sections_link").indicate())
s()(".organize_pages_hover").on("mouseover focus",()=>s()(".manage_pages_link").indicate())
s()(".eportfolio_settings_hover").on("mouseover focus",()=>s()(".portfolio_settings_link").indicate())
s()(".edit_content_hover").on("mouseover focus",()=>s()(".edit_content_link").indicate())
s()(".page_settings_hover").on("mouseover focus",()=>s()("#edit_page_form .form_content").indicate())
s()(".page_buttons_hover").on("mouseover focus",()=>s()("#edit_page_sidebar .form_content:last").indicate())
s()(".page_add_subsection_hover").on("mouseover focus",()=>s()("#edit_page_sidebar ul").indicate())
s()("#wizard_box").bind("wizard_opened",(function(){s()(this).find(".option.information_step").click()}))
s()(document).bind("submission_dialog_opened",()=>{s()(".wizard_options .option.adding_submissions").hasClass("selected")&&s()(".wizard_options .option.adding_submissions_dialog").click()})
s()(document).bind("editing_page",()=>{s()(".wizard_options .option.edit_step").hasClass("selected")&&s()(".wizard_options .option.editing_mode").click()})})},p6Wi:function(e,t,n){"use strict"
var i=n("pQTu")
var s=n("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var o=i["default"].scoped("instructure_misc_plugins")
var l=n("ouhR")
var c=n.n(l)
var a=n("5Ky4")
var r=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
c.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(a["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(a["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(c.a.raw(n))}
c.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
c.a.fn.scrollbarWidth=function(){const e=c()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
e.remove()
return n-i}
c.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
c.a.fn.undim=function(e){return this.animate({opacity:1},e)}
c.a.fn.confirmDelete=function(e){e=c.a.extend({},c.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let i=true
e.noMessage=e.noMessage||e.no_message
const s=function(){if(!i){e.cancelled&&c.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(r["a"])()
c.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,s,o)=>{e.error&&c.a.isFunction(e.error)?e.error.call(t,n,i,s,o):c.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!c.a.skipConfirmations){if(e.dialog){i=false
const t="object"===typeof e.dialog?e.dialog:{}
const l=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=c()(e.message).dialog(c.a.extend({},{modal:true,close:s,buttons:[{text:o.t("#buttons.cancel","Cancel"),click(){c()(this).dialog("close")}},{text:o.t("#buttons.delete","Delete"),class:l,click(){i=true
c()(this).dialog("close")}}]},t))
return}i=confirm(e.message)}s()}
c.a.fn.confirmDelete.defaults={get message(){return o.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
c.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const s=this
let o=false
for(t=0;t<c.a._checkFragments.fragmentList.length;t++){const e=c.a._checkFragments.fragmentList[t]
e.doc[0]==s[0]&&(o=true)}o||c.a._checkFragments.fragmentList.push({doc:s,fragment:""})
c()(window).bind("hashchange",c.a._checkFragments)
setTimeout(()=>{i&&i.length>0?s.triggerHandler("document_fragment_change",i):s&&s[0]&&s[0].location&&s[0].location.hash.length>0&&s.triggerHandler("document_fragment_change",s[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
c.a._checkFragments=function(){const e=c.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
c.a._checkFragments.fragmentList[t]=n}}}
c.a._checkFragments.fragmentList=[]
c.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
c.a.fn.showIf=function(e){if(c.a.isFunction(e))return this.each((function(t){c()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
c.a.fn.disableIf=function(e){c.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
c.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}c()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width()
const s=this.height()
const o=(e.container||this).zIndex()
t=c()(document.createElement("div"))
t.css({width:i+6,height:s+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){c()(this).stop().fadeOut("fast",(function(){c()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
c()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){c()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){c()(this).remove()}))
e&&e.scroll&&c()("html,body").scrollToVisible(t)}
c.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
c.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
c.a.fn.fillWindowWithMe=function(e){const t=c.a.extend({minHeight:400},e),n=c()(this),i=c()("#wrapper"),s=c()("#main"),o=c()("#not_right_side"),l=c()(window),a=c()(this).add(t.alsoResize)
function r(){a.height(0)
const e=l.height()-(i.offset().top+i.outerHeight())+(s.height()-o.height()),r=Math.max(400,e)
a.height(r)
c.a.isFunction(t.onResize)&&t.onResize.call(n,r)}r()
l.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",r)
return this}
c.a.fn.autoGrowInput=function(e){e=c.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||c()(this).width(),n="",i=c()(this),s=c()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(n===(n=i.val()))return
s.text(n)
const o=s.width(),l=o+e.comfortZone>=t?o+e.comfortZone:t,c=i.width(),a=l<c&&l>=t||l>t&&l<e.maxWidth
a&&i.width(l)})}
s.insertAfter(i)
c()(this).bind("keyup keydown blur update change",o)}))
return this}
c.a}}])

//# sourceMappingURL=eportfolios_wizard_box-c-8bc0fd41f3.js.map