function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav a, nav button",{
    y:-40,
    duration:0.5,
    delay:0.6,
    opacity:0,
    stagger:0.15,
    scrub:2
})
tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.3
},"-=0.3")
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.3
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.4,
    x:200
},"-=0.5")
tl.from(".section1-bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
}

function page2Animation(){

    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 0%",
            scrub:1
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.3
    })
    tl2.from(".elem.top-left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.top-right",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.bottom-left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim2")
    tl2.from(".elem.bottom-right",{
        x:300,
        opacity:0,
        duration:1
    },"anim2")
}
page1Animation()
page2Animation()

