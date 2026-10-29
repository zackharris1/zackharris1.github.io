
(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.querySelector('nav.main');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  var form=document.getElementById('req');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();document.getElementById('sent').hidden=false;form.reset();});}
})();
