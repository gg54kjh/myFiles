document.body.insertAdjacentHTML('beforeend',
  `<div id="oo5"class="oo5"><style>#oo5{position:fixed;left:0;bottom:0;width:100%;height:100%;background:#99989B9C;z-index:99999}#oo5 input{width:500px}#oo5 button{font-size:30px;padding:2px 20px}#oo5 br+button{background:blue;margin-left:100px}</style><center style="padding-top:150px"><input type="text"><br><button id="bt1_">OK</button><button id="bt2_">Cancel</button></center></div>` );
 
setTimeout(()=> {
  var d = document, inp = d.querySelector('#oo5 input');
  d.querySelector('#bt2_').onclick = function() {
     this.parentNode.parentNode.remove();
     while (d.querySelector('.oo5')) {d.querySelector('.oo5').remove()}
  };
  d.querySelector('#bt1_').onclick = gener;
  inp.focus();
  inp.onkeydown=(e)=> {e.keyCode == 13 && d.querySelector('#bt1_').click()}
}, 1000)
 
function gener(){
var p = document.querySelector('#oo5 input').value;
if(p!='') {
document.querySelector('#oo5').remove();
var d = document,
    ELMS = d.querySelectorAll('*'),
    elms = [...d.querySelectorAll(p)],
    a = -1,
    sp = d.body.appendChild(document.createElement('span')); sp.className = 'oo5';
sp.style.cssText =
    'position:fixed;left:2px;top:2px;background:azure;padding:4px;z-index:2147483647;font-weight:700;font-size:1.7em';
sp.ondblclick = function() {
  var s=this.style;
  s.left=='2px' ? (s.left='1280px', s.top='110px') :
  s.left=s.top='2px';
};
sp.title=`С‚РёР»СЊРґР° - РјРЅРѕРіРѕРєСЂ. РјРёРіР°РЅРёРµ С‚РµРєСѓС‰. СЌР»-С‚Р° + СѓС‚РѕР»С‰. border
I - Р·РµР»С‘РЅС‹Р№ overlay РЅР° РјРµСЃС‚Рµ СЃРєСЂС‹С‚РѕРіРѕ СЌР»-С‚Р°
z - СЌР»-С‚ РїРѕР»СѓС‡Р°РµС‚ z-index MAX
a - СЌР»-С‚ => РІ РєРѕРЅСЃРѕР»СЊ` ;

function handleOutline(arg) {
    sp.innerHTML = elms.length;
    for (i = 0; i < ELMS.length; i++) {
        if(arg==1) {
            ELMS[i].setAttribute('style_', ELMS[i].getAttribute('style'));
            if(elms.includes(ELMS[i])){
               ELMS[i].style.outline = '2px solid red'; ELMS[i].style.outlineOffset='-3px';
               doVisible(ELMS[i]);
            }
        }
        if(arg==0){ 
            ELMS[i].setAttribute('style', ELMS[i].getAttribute('style_'));
            ELMS[i].removeAttribute('style_');
            if(ELMS[i].getAttribute('style')==='null')  
                  ELMS[i].removeAttribute('style');
            if(ELMS[i].getAttribute('type')=='^^'){ELMS[i].setAttribute('type', 'hidden')}
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
  if(elms[a].offsetWidth==0 || elms[a].offsetHeight==0 || elms[a].matches('input.trns')) {
     return 2
   } 
}
function addBorder (){
  elms[a].style.border='3px solid crimson';
  elms[a].style.outline='7px red solid';
  elms[a].style.outlineOffset='3px';
  var count = 0
  elms[a].scrollIntoView(); scrollBy(0, -50);
  var tempVis = elms[a].style.visibility;
  setTimeout( function y(){
     if(count==7){
        elms[a].style.outline='2px red solid';
        elms[a].style.outlineOffset='-3px';        
        return;   
     } 
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
      el.parentNode.style.overflow='visible';
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
       d.body.append(dv);  dv.className='oo5'; scroll(dv)        
   }
}   

function closest (elm) {
   while (elm  && elm !== document) {
      if (getComputedStyle(elm, '').display == 'none') return elm;
      elm = elm.parentNode;
    }
          return null;
}
function zIndex(){
  var x=elms[a];
  if(x.style.zIndex=='2147483647'){
    x.style.zIndex=''; x.style.position=''
  }
  else {
    x.style.zIndex='2147483647'; x.style.position='relative'; scroll(x)
 }}  
d.body.addEventListener('keydown', function(f) {
    if (f.keyCode == 27) {
        handleOutline(0);
        d.body.removeEventListener('keydown', arguments.callee);
        while(document.querySelector('.oo5')){
            document.querySelector('.oo5').remove()
         }
    }
    if (f.shiftKey)sc('up') ;
    if (f.ctrlKey) sc('down');
    if (f.keyCode==192) addBorder();
    if(f.keyCode==73)  overlay(elms[a]);
    if(f.keyCode==90) zIndex();
    if(f.keyCode==65) console.log(elms[a])
})  } }

    

