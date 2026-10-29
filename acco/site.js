
(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.querySelector('nav.main');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  var form=document.getElementById('req');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();document.getElementById('sent').hidden=false;form.reset();});}
  var t=document.querySelector('.thermo');
  if(t){
    var modes={
      cool:{temp:'72°',mode:'COOLING',note:'A/C quit in July? We fix all makes and models, and keep parts in our own warehouse. <a href="air-conditioning.html">Air conditioning</a>'},
      heat:{temp:'68°',mode:'HEATING',note:'Furnace or heat pump out? We service gas, propane and heat pump systems. <a href="heating.html">Heating</a>'}
    };
    t.querySelectorAll('.toggle button').forEach(function(b){
      b.addEventListener('click',function(){
        var m=b.dataset.mode; t.dataset.mode=m;
        t.querySelectorAll('.toggle button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
        t.querySelector('.temp').textContent=modes[m].temp;
        t.querySelector('.mode').textContent=modes[m].mode;
        t.querySelector('.thermo-note').innerHTML=modes[m].note;
      });
    });
  }
})();
