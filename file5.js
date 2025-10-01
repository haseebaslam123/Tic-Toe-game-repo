
let cv = true;
let winner=null;
let prev;
let a = document.querySelectorAll('button')
let but1= a[0];
let but2= a[1];
let but3= a[2];
let but4= a[3];
let but5= a[4];
let but6= a[5];
let but7= a[6];
let but8= a[7];
let but9= a[8];


let b = document.querySelector('#head1');
let c= document.querySelector('#reset');
let d= document.querySelector('#head11');
let e = document.querySelector('#draw');
e.style.visibility='hidden';
let container= document.querySelector('#container')

prev= d.innerText;

but1.addEventListener('click', happening1);
but2.addEventListener('click', happening2);
but3.addEventListener('click', happening3);
but4.addEventListener('click', happening4);
but5.addEventListener('click', happening5);
but6.addEventListener('click', happening6);
but7.addEventListener('click', happening7);
but8.addEventListener('click', happening8);
but9.addEventListener('click', happening9);
c.addEventListener('click', reset);

but1.addEventListener('click', happening);
but2.addEventListener('click', happening);
but3.addEventListener('click', happening);
but4.addEventListener('click', happening);
but5.addEventListener('click', happening);
but6.addEventListener('click', happening);
but7.addEventListener('click', happening);
but8.addEventListener('click', happening);
but9.addEventListener('click', happening);

function reset(){

    but1.innerText='';
    but2.innerText='';
    but3.innerText='';
    but4.innerText='';
    but5.innerText='';
    but6.innerText='';
    but7.innerText='';
    but8.innerText='';
    but9.innerText='';
    but1.style.backgroundColor='white';
    but2.style.backgroundColor='white';
    but3.style.backgroundColor='white';
    but4.style.backgroundColor='white';
    but5.style.backgroundColor='white';
    but6.style.backgroundColor='white';
    but7.style.backgroundColor='white';
    but8.style.backgroundColor='white';
    but9.style.backgroundColor='white';
    cv=true;
    b.style.visibility='visible';
    but1.disabled=false
    but2.disabled=false
    but3.disabled=false
    but4.disabled=false
    but5.disabled=false
    but6.disabled=false
    but7.disabled=false
    but8.disabled=false
    but9.disabled=false
    but1.style.visibility='visible';
    but2.style.visibility='visible';
    but3.style.visibility='visible';
    but4.style.visibility='visible';
    but5.style.visibility='visible';
    but6.style.visibility='visible';
    but7.style.visibility='visible';
    but8.style.visibility='visible';
    but9.style.visibility='visible';
    winner='';
    d.innerText=prev;
    d.style.visibility='hidden';
    e.style.visibility='hidden';
    
}

function happening(){

        b.style.visibility='hidden';
}



function happening1(){

    if(cv==true){
        but1.innerText='X';
        but1.style.backgroundColor='blue';
        but1.style.borderRadius='10px';
        but1.style.borderColor='black';
        cv=false;
        
        
            }
        
            else{
                but1.innerText='O'
                but1.style.backgroundColor='pink';
                but1.style.borderRadius='10px';
        but1.style.borderColor='black';
                cv=true;
                
                
            }

            but1.disabled = true;
            checkwinner();
        }

 function happening2(){

    if(cv==true){
        but2.innerText='X';
        but2.style.backgroundColor='blue';
        but2.style.borderRadius='10px';
        but2.style.borderColor='black';
        cv=false;
        
        
            }
        
            else{
                but2.innerText='O'
                but2.style.backgroundColor='pink';
                but2.style.borderRadius='10px';
        but2.style.borderColor='black';
                cv=true;
                
                
            }
            but2.disabled = true;
            checkwinner();
    
    }

    function happening3(){

        if(cv==true){
            but3.innerText='X';
            but3.style.backgroundColor='blue';
            but3.style.borderRadius='10px';
        but3.style.borderColor='black';
            cv=false;
            
                }
            
                else{
                    but3.innerText='O'
                    but3.style.backgroundColor='pink';
                    but3.style.borderRadius='10px';
        but3.style.borderColor='black';
                    cv=true;
                    
                }
                but3.disabled = true;
                checkwinner();
        
        }

       

        function happening4(){

            if(cv==true){
                but4.innerText='X';
                but4.style.backgroundColor='blue';
                but4.style.borderRadius='10px';
        but4.style.borderColor='black';
                cv=false;
                
                    }
                
                    else{
                        but4.innerText='O'
                        but4.style.backgroundColor='pink';
                        but4.style.borderRadius='10px';
        but4.style.borderColor='black';
                        cv=true;
                        
                    }
                    but4.disabled = true;
                    checkwinner();
            }

            function happening5(){

                if(cv==true){
                    but5.innerText='X';
                    but5.style.backgroundColor='blue';
                    but5.style.borderRadius='10px';
        but5.style.borderColor='black';
                    cv=false;
                    
                        }
                    
                        else{
                            but5.innerText='O'
                            but5.style.backgroundColor='pink';
                            but5.style.borderRadius='10px';
        but5.style.borderColor='black';
                            cv=true;
                            
                        }
                        but5.disabled = true;
                        checkwinner();
                }

                function happening6(){

                    if(cv==true){
                        but6.innerText='X';
                        but6.style.backgroundColor='blue';
                        but6.style.borderRadius='10px';
        but6.style.borderColor='black';
                        cv=false;
                        
                            }
                        
                            else{
                                but6.innerText='O'
                                but6.style.backgroundColor='pink';
                                but6.style.borderRadius='10px';
        but6.style.borderColor='black';
                                cv=true;
                               
                            }
                            but6.disabled = true;
                            checkwinner();
                    }

                    function happening7(){

                        if(cv==true){
                            but7.innerText='X';
                            but7.style.backgroundColor='blue';
                            but7.style.borderRadius='10px';
        but7.style.borderColor='black';
                            cv=false;
                            
                                }
                            
                                else{
                                    but7.innerText='O'
                                    but7.style.backgroundColor='pink';
                                    but7.style.borderRadius='10px';
        but7.style.borderColor='black';
                                    cv=true;
                                    
                                }
                                but7.disabled = true;
                                checkwinner();
                        }

                        function happening8(){

                            if(cv==true){
                                but8.innerText='X';
                                but8.style.backgroundColor='blue';
                                but8.style.borderRadius='10px';
        but8.style.borderColor='black';
                                cv=false;
                                
                                    }
                                
                                    else{
                                        but8.innerText='O'
                                        but8.style.backgroundColor='pink';
                                        but8.style.borderRadius='10px';
        but8.style.borderColor='black';
                                        cv=true;
                                        
                                    }
                                    but8.disabled = true;
                                    checkwinner();
                            }

                            function happening9(){

                                if(cv==true){
                                    but9.innerText='X';
                                    but9.style.backgroundColor='blue';
                                    but9.style.borderRadius='10px';
        but9.style.borderColor='black';
                                    cv=false;
                                    
                                        }
                                    
                                        else{
                                            but9.innerText='O'
                                            but9.style.backgroundColor='pink';
                                            but9.style.borderRadius='10px';
        but9.style.borderColor='black';
                                            cv=true;
                                           
                                        }
                                        but9.disabled = true;
                                        checkwinner();
                                    }
                                        
                                        
                                        
function checkwinner(){

if(but1.innerText==='X' && but2.innerText==='X' && but3.innerText==='X'){

   
    winner='X';
    
    winmsg(winner);
}

else if(but1.innerText==='O' && but2.innerText==='O' && but3.innerText==='O'){

   
    winner='O';
    winmsg(winner);}

else if(but4.innerText==='X' && but5.innerText==='X' && but6.innerText==='X'){

   
    winner='X'
    winmsg(winner);
}

else if(but4.innerText==='O' && but5.innerText==='O' && but6.innerText==='O'){

   
    winner='O';
    winmsg(winner);}

else if(but7.innerText==='X' && but8.innerText==='X' && but9.innerText==='X'){

   
    winner='X'
    winmsg(winner);
}

else if(but7.innerText==='O' && but8.innerText==='O' && but9.innerText==='O'){

   
    winner='O';
    winmsg(winner);}

else if(but1.innerText==='X' && but4.innerText==='X' && but7.innerText==='X'){

   
    winner='X'
    winmsg(winner);}

else if(but1.innerText==='O' && but4.innerText==='O' && but7.innerText==='O'){

   
    winner='O';
    winmsg(winner);}

else if(but2.innerText==='X' && but5.innerText==='X' && but8.innerText==='X'){

   
    winner='X'
    winmsg(winner);}

else if(but2.innerText==='O' && but5.innerText==='O' && but8.innerText==='O'){

   
    winner='O';
    winmsg(winner);}

else if(but3.innerText==='X' && but6.innerText==='X' && but9.innerText==='X'){

   
    winner='X'
    winmsg(winner);}

else if(but3.innerText==='O' && but6.innerText==='O' && but9.innerText==='O'){

   
    winner='O';
    winmsg(winner);}

else if(but1.innerText==='X' && but5.innerText==='X' && but9.innerText==='X'){

   
    winner='X'
    winmsg(winner);}

else if(but1.innerText==='O' && but5.innerText==='O' && but9.innerText==='O'){

   
    winner='O';
    winmsg(winner);}

else if(but3.innerText==='X' && but5.innerText==='X' && but7.innerText==='X'){

   
    winner='X'
    winmsg(winner);}

else if(but3.innerText==='O' && but5.innerText==='O' && but7.innerText==='O'){

   
    winner='O';
    winmsg(winner);
}

else if(but1.innerText!='' && but2.innerText!='' && but3.innerText!='' && but4.innerText!='' && but5.innerText!='' && but6.innerText!='' && but7.innerText!='' && but8.innerText!='' && but9.innerText!='' ){
   
    drawmsg();
    d.style.visibility='hidden';
    
}


}

function winmsg(letter){
    d.style.visibility='visible';

    but1.disabled = true;
    but2.disabled = true;
    but3.disabled = true;
    but4.disabled = true;
    but5.disabled = true;
    but6.disabled = true;
    but7.disabled = true;
    but8.disabled = true;
    but9.disabled = true;

    
    d.innerHTML = '<span class="winner-animation1">'+d.innerText +  '</span>'+ '<span class="winner-animation" style="color: yellow;">'  + letter + '</span>';



}

d.style.visibility='hidden';

function drawmsg(){
    e.style.visibility='visible';
    container.style.position='relative';
    container.style.top='-1px';
    c.style.position='relative';
    c.style.top='-32px';
    e.innerHTML=  '<span class="winner-animation" style="color: white;">' + e.innerText + '</span>';

}                     
                                        
                                        
                                        

