p = prompt('Write selector', '');
if(p) {
var d = document,
    elms = d.querySelectorAll(p),
    a = -1,
    sp = d.body.appendChild(document.createElement('span'));
sp.style.cssText =
    'position:fixed;left:2px;top:2px;background:azure;padding:4px;z-index:2147483647;font-weight:700;font-size:1.7em';
sp.ondblclick = function() {
    this.remove()
};
sp.title='тильда - многокр. мигание текущ. эл-та + утолщ. border\nI - зелёный overlay на месте скрытого эл-та';

function handleOutline(arg) {
    sp.innerHTML = elms.length;
    for (i = 0; i < elms.length; i++) {
        if(arg==1) {
            elms[i].setAttribute('style_', elms[i].getAttribute('style')); 
            elms[i].style.outline = '2px solid red'; elms[i].style.outlineOffset='-3px';
            doVisible(elms[i])
        }
        if(arg==0){  
          if (elms[i].style.outline == '2px solid red'||elms[i].style.outline == '2px dotted red') {
            elms[i].style.outline = null; elms[i].style.outlineOffset=''
          }
          if(elms[i].style.border=='3px solid crimson') elms[i].style.border=''
        }
    }
};
handleOutline(1);

function sc(arg) { 
  if(arg=='down'){
    if((a+1)==elms.length) a = -1;
    a++; scroll(elms[a]); upd(a);
    if(chekInv()==1)  flash('red'); if(chekInv()==2)  flash('#FFFF00')
  }
  if(arg=='up'){
    if(a==-1) return;
    if(a==0) a = elms.length;
    a--; scroll(elms[a]); upd(a);
    if(chekInv()==1)  flash('red'); if(chekInv()==2)  flash('#FFFF00')
  }
}
function upd(a){
   sp.innerHTML=(a+1)+ '/' +elms.length 
}
function chekInv(){
   if(elms[a].offsetWidth==0 || elms[a].offsetHeight==0){
     if(getComputedStyle(elms[a]).MozBinding.includes('abp-elemhide?') ||
       getComputedStyle(elms[a]).MozBinding.endsWith('.xml#foobarbazdummy")')) {return  2}
     else {return 1} 
   } 
}
function addBorder (){
  elms[a].style.border='3px solid crimson';
  var count = 0
  elms[a].scrollIntoView(); scrollBy(0, -50);
  var tempVis = elms[a].style.visibility;
  setTimeout( function y(){
     if(count==7) return;
     elms[a].style.visibility='hidden';         
     setTimeout(()=>elms[a].style.visibility=tempVis, 200) 
     setTimeout(()=>y(), 400); count++
  }, 400)  
}
  
function scroll (el){
  var tempVis =  el.style.visibility;
  el.scrollIntoView(); scrollBy(0, -50);
  setTimeout(()=>el.style.visibility='hidden',350); 
  setTimeout(()=>el.style.visibility='visible', 600)
  setTimeout(()=>el.style.visibility='hidden', 850); setTimeout(()=>el.style.visibility=tempVis, 1100)
}

function doVisible(el){
  if(el.offsetWidth==0 || el.offsetHeight==0 || getComputedStyle(el).visibility == 'hidden'){
    if(getComputedStyle(el).display=='none'){
      if(el.type=="hidden") {el.setAttribute('type', '^^')}  
      else {
        if(closest(el)) {
           closest(el).setAttribute('style_', closest(el).getAttribute('style'));
           closest(el).style.setProperty('display', 'inline'); 
        }
      }
    };
    if(getComputedStyle(el).visibility == 'hidden'){
      el.style.setProperty('visibility', 'visible');
    }
    el.style.outlineStyle='dotted'
    if(el.clienttWidth==0 || el.clientHeight==0){
      el.style.cssText+=';width:auto !important; height:auto !important;';
      el.parentNode.setAttribute('style_', el.parentNode.getAttribute('style'));                                     el.parentNode.style.overflow='visible';
    }  
  }
}

function flash(f){
   sp.style.background=f;
  setTimeout(()=>sp.style.background='azure', 1000)
}
   
function overlay(u)  {
   if(u.offsetWidth!==0 ||u.offsetHeight!==0 ){
      var rec=u.getBoundingClientRect();
      var dv = d.createElement('div'); 
       dv.style.cssText='position:absolute; background:lime; opacity:0.4; z-index:2147483647; outline:2px solid green; outline-offset:-2px; border:1px solid green'; 
       dv.style.top=rec.top+window.scrollY+ 'px'; dv.style.left=rec.left+window.scrollX+ 'px'; dv.style.width=rec.width+ 'px'; dv.style.height=rec.height+ 'px';
       d.body.append(dv);  dv.className='my_dv'; scroll(dv)        
   }
}   

function closest (elm) {
   while (elm  && elm !== document) {
      if (getComputedStyle(elm, '').display == 'none') return elm;
      elm = elm.parentNode;
    }
          return null;
}
d.body.addEventListener('keydown', function(f) {
    if (f.keyCode == 27) {
        handleOutline(0);
        var ELMS = d.getElementsByTagName('*');
        for(let out of ELMS){
          if(out.getAttribute('type')=='^^'){out.setAttribute('type', 'hidden')}
          if(out.hasAttribute('style_')){
              out.setAttribute('style', out.getAttribute('style_')); 
              out.removeAttribute('style_'); 
              if(out.getAttribute('style')==='null')  
                  out.removeAttribute('style')
          }
        } 
         var ov = d.querySelectorAll('.my_dv');
         for(i=0; i<ov.length; i++) ov[i].remove();
        d.body.removeEventListener('keydown', arguments.callee);
        if (sp) sp.remove();
        d.getElementById('SCbookmrklt').remove()
    }
    if (f.shiftKey)sc('up') ;
    if (f.ctrlKey) sc('down');
    if (f.keyCode==192) addBorder();
    if(f.keyCode==73)  overlay(elms[a])
});
} else {document.getElementById('SCbookmrklt').remove()};
