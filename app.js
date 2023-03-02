
 
  function shareEvent(){
    alert('Please leave a message');
    console.log('Ammar');
   
    
  } 
  
  function navigation(){

    console.log('Ammar');
   
    document.getElementById("#frame").src = "./frames/beryani.html";

    
  }
  
  
  
  window.onload=function(){
    document.getElementById('share').addEventListener("click", shareEvent);
    const btn =document.getElementById('beryani');
    console.log(btn);
    if(btn){
    btn.addEventListener('click', () =>{
      navigation();
    });
    
  }
  
  }
  
