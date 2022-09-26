var ky = document.querySelectorAll('div.key');


function init(){
    for(let idx in ky){       
        ky[idx].addEventListener('mouseover',()=>{
            let clss = ky[idx].classList;
            clss.add('effect');
        });
        ky[idx].addEventListener('click',function(event){
            let el = event.target;
            let attr ='';
            if(el.tagName === "H1"){
               el = el.parentNode;
            }
            attr = el.id;
            //let select  = `div[id='${attr}'] audio`;
            let select  = `div#${attr} audio`;
            let aud = document.querySelector(select);
            aud.play();
        });
        ky[idx].addEventListener('mouseout',()=>{
            let clss = ky[idx].classList;
            if(clss.contains('effect')){
                clss.remove('effect');
            }
        });
    }
}
init();