 
var arrImg=[
    { 
        src:'./image/slider1.jpg',
        content:'Chicago',
        desc:'Thank you , Chicago - A night we won\'t forget'
    },
    { 
        src:'./image/slider2.jpg',
        content:'New York',
        desc:'the atmosphere in New York'
    }
]

var $=document.querySelector.bind(document)
var slider=$('.slider') 
var slider__desc__content=$('.slider__desc__content') 
var slider__desc__detail=$('.slider__desc__detail') 


var index=0;   
function sliderImg(){

    setInterval(()=>{  
        
        slider.style.backgroundImage=`url(\"${arrImg[index].src}")`
        slider__desc__content.innerHTML=arrImg[index].content
        slider__desc__detail.innerHTML=arrImg[index].desc  
        if(index===parseInt(arrImg.length)-1){
            index=0;
        }else{
            index++;
        }
    },2000) 
}
sliderImg();

// set with