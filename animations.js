gsap.from(".nav *",{
    x:30,
    y:40,
    duration: 3,
    delay: 2,
    opacity:0,

})
gsap.from(".part1>h1",{
    opacity:0,
    duration:3,
    delay: 2,
    stagger:1,
    scale:0.5,
})
gsap.from(".part2>h1",{
    opacity:0,
    rotate:360,
    scale:0.5,
    scrollTrigger:".part2>h1"
})
gsap.from(".part3>img",{
    opacity:0,
    x:500,
    duration:1,
    delay:1,
    scale:0.5,
    scrollTrigger:".part3>img"
})
gsap.from(".part3>p",{
    x:-500,
    opacity:0,
    duration:2,
    delay:2,
    scale:0.5,
    scrollTrigger:".part3>p"
})