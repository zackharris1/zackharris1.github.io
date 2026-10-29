
(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.querySelector('nav.main');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  var form=document.getElementById('req');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();document.getElementById('sent').hidden=false;form.reset();});}
  var answers={
    heat:{t:"No heat",p:"Furnace, boiler or heat pump out? We repair all of them, and we're on call around the clock when the house is getting cold."},
    hot:{t:"No hot water",p:"We repair and replace water heaters, including tankless units, and can usually tell you on the phone what you're likely dealing with."},
    leak:{t:"Leak or burst pipe",p:"Shut off the main water valve if you can, then call. We handle emergency repairs and re-piping."},
    drain:{t:"Clogged drain or sewer",p:"From one slow sink to a backed-up main line. We clean drains, jet sewer lines and can run a camera to find the cause."},
    ac:{t:"A/C not cooling",p:"We repair and replace air conditioners, and our customers say we show up fast when it's over 100 degrees out."}
  };
  var ans=document.getElementById('answer');
  document.querySelectorAll('.opt').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.opt').forEach(function(x){x.setAttribute('aria-pressed','false');});
      b.setAttribute('aria-pressed','true');
      var a=answers[b.dataset.k];
      ans.querySelector('h3').textContent=a.t;
      ans.querySelector('p').textContent=a.p;
    });
  });
})();
