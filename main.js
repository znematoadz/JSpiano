function addClass(e) {
    
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  };

  function removeClass(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove("playing");  
  };
 
  const keys = document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', removeClass));
  
  window.addEventListener('keydown', addClass);

  keys.forEach(key => key.addEventListener("click", clickPlay));

    function clickPlay(){
        var dataKey=this.getAttribute("data-key");
        const audio2=document.querySelector(`audio[data-key="${dataKey}"]`);
        audio2.currentTime=0;
        audio2.play();
    
        this.classList.add("playing");
    }