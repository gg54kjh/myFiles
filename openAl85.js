document.body.insertAdjacentHTML('beforeend',
 `<div id="oo5"class="oo5">
  <style>
   #oo5{position:fixed;left:0;bottom:0;width:100%;height:100%;background:#99989B9C;z-index:99999}
   #oo5 input{width:500px}
   #oo5 button{font-size:30px;padding:2px 20px}
   #oo5 br+button{background:blue;margin-left:100px}
  </style>
  <center style="padding-top:150px"><input type="text"><br><button id="bt1_">OK</button><button id="bt2_">Cancel</button></center>
</div>` );
var d = document,
   inp = d.querySelector('#oo5 input');
setTimeout(() => {
   d.querySelector('#bt2_').onclick = function() {
      this.parentNode.parentNode.remove();
      while (d.querySelector('.oo5')) {
         d.querySelector('.oo5').remove()
      }
   };
   d.querySelector('#bt1_').onclick = gener;
   inp.focus();
   inp.onkeydown = (e) => {
      e.keyCode == 13 && d.querySelector('#bt1_').click()
   }
}, 1000);

function gener() {
   var p = document.querySelector('#oo5 input').value;
   if (p == '')  return;
      document.querySelector('#oo5').remove();
      var d = document,
         ELMS = d.querySelectorAll('*'),
         elms = [...d.querySelectorAll(p)],
         a = -1;
      d.body.insertAdjacentHTML('beforeend', 
         '<span class="oo5"></span><style class="oo5">span.oo5{position:fixed;left:2px;top:2px;color:#000;background:azure;padding:4px;z-index:2147483647;font-weight:700;font-size:1.7em}.fatbrd{border:3px solid crimson!important;outline:7px red solid!important;outline-offset:3px!important} @keyframes blink{50%{opacity:0}}.flash{animation:blink 0.25s step-start 5}</style>');
      var sp = document.querySelector('span.oo5');
      sp.ondblclick = function() {
         var s = this.style;
         s.left == '2px' ? (s.left = (visualViewport.width-sp.offsetWidth-2) +'px', s.top = '110px') :
            (s.left = '2px', s.top = '2px');
      };
      sp.title =
         `тильда || стр. влево - многокр. мигание текущ. эл-та + утолщ. border
I || стр. вправо - зелёный overlay на месте скрытого эл-та
z - эл-т получает z-index MAX
k || верхн. Insert - эл-т => в консоль
v - показать искомый селектор`;

      function handleOutline(arg) {
         sp.innerHTML = elms.length;
         for (i = 0; i < elms.length; i++) {
            if (arg == 1) {
               elms[i].setAttribute('style_', elms[i].getAttribute(
                  'style'));
               elms[i].style.outline = '2px solid red';
               elms[i].style.outlineOffset = '-3px';
               doVisible(elms[i]);
            }
            if (arg == 0) {
               elms[i].setAttribute('style', elms[i].getAttribute(
                  'style_'));
               elms[i].removeAttribute('style_');
               if (elms[i].getAttribute('style') === 'null')
                  elms[i].removeAttribute('style');
               if (elms[i].getAttribute('type') == '^^') {
                  elms[i].setAttribute('type', 'hidden')
               }
            }
         }
      }
      handleOutline(1);

      function sc(arg) {
         if (sc.flag) return;
         if (arg == 'down') {
            if ((a + 1) == elms.length) a = -1;
            a++; 
            chekInv()==2 ? flash('#FFFF00') : scroll(elms[a]); 
            upd(a);
         }
         if (arg == 'up') {
            if (a == -1) return;
            if (a == 0) a = elms.length;
            a--; 
            chekInv()==2 ? flash('#FFFF00') : scroll(elms[a]); 
            upd(a);
         }
      }

      function upd(a) {
        var e_ = elms[a],
          f = (e_.offsetWidth>0 && e_.offsetWidth<4) ? ' w:' +e_.offsetWidth : '',
          d =  (e_.offsetHeight>0 && e_.offsetHeight<4) ? ' h:' +e_.offsetHeight : '';
        sp.innerHTML = (a + 1)+ '/' + elms.length + f + d;           
      }

      function chekInv() {
         if (elms[a].offsetWidth == 0 || elms[a].offsetHeight == 0 ||
            elms[a].matches('input.trns')) {
            return 2
         }
      }

      function scroll(el, border) {
         var opa = el.style.opacity != '' ? el.style.opacity : 1,
            re = el.getBoundingClientRect();
         if (re.top <= 0 || re.bottom >= window.innerHeight) {
            el.scrollIntoView();
            scrollBy(0, -100)
         }
         el.classList.add('flash'); 
         setTimeout(()=>{
           el.classList.remove('flash');
           el.style.opacity = opa;
           el.classList.contains('fatbrd') && el.classList.remove('fatbrd') 
         }, 1700);       
         if (border == 'border') {
            el.classList.toggle('fatbrd')
         }
      }

      function doVisible(el) {
         if (el.offsetWidth == 0 || el.offsetHeight == 0 ||
            getComputedStyle(el).visibility == 'hidden') {
            el.style.outline = '2px red dotted';
            if (el.type == "hidden") {
                  el.setAttribute('type', '^^'); return
            } 
            else if (closest(el)) {
                 closest(el).setAttribute('was_hidden', '');
                 closest(el).style.setProperty('display', 'revert', 'important');
            }
            if (getComputedStyle(el).visibility == 'hidden') {
               el.style.setProperty('visibility', 'visible');
            }
            if (el.clienttWidth == 0 || el.clientHeight == 0) {
               el.style.cssText +=
                  ';width:auto !important; height:auto !important;';
               el.parentNode.style.overflow = 'visible';
            }
         }
      }

      function flash(f) {
         sp.style.background = f;
         setTimeout(() => sp.style.background = 'azure', 1000)
      }

      function overlay(u) {
         if (u.offsetWidth !== 0 || u.offsetHeight !== 0) {
            var rec = u.getBoundingClientRect(),
               dv = d.createElement('div');
            dv.style.cssText =
               'position:absolute; background:lime; opacity:0.4; z-index:2147483647; outline:2px solid green; outline-offset:-2px; border:1px solid green';
            dv.style.top = rec.top + window.scrollY + 'px';
            dv.style.left = rec.left + window.scrollX + 'px';
            dv.style.width = rec.width + 'px';
            dv.style.height = rec.height + 'px';
            if (u.offsetWidth==1) dv.style.cssText+=';width:20px; transform: translateX( -10px)'; 
            if (u.offsetHeight==1) dv.style.cssText+=';height:20px; transform: translateY( -10px)';
            d.body.append(dv);
            dv.className = 'oo5';
            scroll(dv)
         }
      }
     function closest (elm) {
         while (elm  && elm !== document) {
            if (getComputedStyle(elm, '').display == 'none') return elm;
            elm = elm.parentNode;
         }
          return null;
      }
      function zIndex() {
         var x = elms[a];
         if (x.style.zIndex == '2147483647') {
            x.style.zIndex = '';  x.style.position = ''
         } else {
            x.style.zIndex = '2147483647';
            x.style.position = 'relative';
            scroll(x)
         }
      }
      function chto_Iszhem() {
         if (!sp.innerHTML.includes('<br>')) {
             sp.setAttribute('bckp',  sp.innerHTML);
             sp.innerHTML += '<br>' +p
         } else {
             sp.innerHTML=sp.getAttribute('bckp');
             sp.removeAttribute('bckp');
         }
      }
      d.body.addEventListener('keydown', function mm(f) {
         if (f.keyCode == 27) {
            handleOutline(0);
            d.body.removeEventListener('keydown', mm);
            d.querySelectorAll('*').forEach(it=>{
              it.classList.contains('oo5')&&it.remove();
              it.hasAttribute('was_hidden')&&(
                it.style.removeProperty('display'), it.removeAttribute('was_hidden')
              )     
            })  
         }
         if (f.shiftKey) sc('up');
         if (f.ctrlKey) sc('down');
         if (f.code=='Backquote' || f.code=='ArrowLeft') scroll(elms[a], 'border');
         if (f.code=='KeyI' || f.code=='ArrowRight') overlay(elms[a]);
         if (f.keyCode == 90) zIndex();
         if (f.code == "KeyK" || f.code=="Insert") {
           if (sc.flag==1) return; 
           sc.flag=1; setTimeout(()=>sc.flag=null, 2000);
           setTimeout(console.log.bind(console, '%c op.All-github', 'color:limegreen; font-family:arial;font-weight:800', elms[a]));
           setTimeout(()=>top.postMessage('postMsg$$$Global keydown_pageutils###0x4B###ctrl###shift', '*'), 800)
         }
         if (f.code == "KeyV") chto_Iszhem() 
      })
}

