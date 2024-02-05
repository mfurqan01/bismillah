var crsr = document.querySelector(".cursor")
var crsrblr = document.querySelector(".cursor-blr")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsrblr.style.left=dets.x - 100 +"px"
    crsrblr.style.top=dets.y -100+"px"
});



gsap.to(".nav",{
    backgroundColor : "black",
    height : "57px",
    duration:"0.5",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        
        start:"top -10%",
        end:"top -11%",
        scrub:1}
        
    })
gsap.to(".main",{
    backgroundColor:"black" ,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        
        start:"top -18%",
        end:"top -75%",
        scrub:1
    }
})
gsap.from(".abt-us img,.about",{
    y:80,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".abt-us",
        scroller:"body",
        start:"top 63%",
        end:"top 60%",
       
        scrub:3
    }
})

gsap.from(".imgg1",{
    y:-70,
    x:-70,
    opacity:0,
    duration:1,
    
    scrollTrigger:{
        trigger:".imgg1",
        scroller:"body",
        start:"top 23%",
        end:"top 22%",
    //    markers:true,
        scrub:3
    }
})

gsap.from(".imgg2",{
    y:70,
    x:70,
    opacity:0,
    duration:1,
    
    scrollTrigger:{
        trigger:".imgg1",
        scroller:"body",
        start:"top 23%",
        end:"top 22%",
    //    markers:true,
        scrub:3
    }
})