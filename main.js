gsap.registerPlugin(ScrollTrigger);

function lenis() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    //console.log(e)
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
lenis();
///////////////////////////////////////////////

// header color 바뀜
let scrollHeader = () => {
  let header = document.querySelector("#header");
  let headera = document.querySelectorAll("#header a");
  let header_span = document.querySelectorAll("#header .bar span");

  if(scrollY>=960){
    header.classList.add("pink")
  }else{
    header.classList.remove("pink")
  }

  // console.log(scrollY)
  headera.forEach(function(item){

    if(scrollY>=3917){
      item.classList.add("green"),
      item.classList.remove("pink")
    }else{
      item.classList.remove("green")
    }
  })

  header_span.forEach(function(item){
    if(scrollY>=3917){
      item.classList.remove("pink")
      item.style.backgroundColor="#ffffff"
    }else{
      item.style.backgroundColor="#000"
    }
  })
};
window.addEventListener("scroll", scrollHeader);

// sec1_rotate-img
// gsap.to(".mucha_cir", {
//   rotation: 360,
//   duration: 5,
//   ease: "none",
//   repeat: -1,
// });

//sec1
// gsap.to(".sec1 .mucha p",{
//   scrollTrigger:{
//     trigger:".sec1",
//     start:"top top",
//     end:"bottom center",
//     scrub:1,
//     // markers:true
//   },
//   opacity:0,
//   "--blurAmount":"5rem"
// })

gsap.timeline()
    .from(".sec1 .tit",{x:1000, duration:.5},"tx")
    // .from(".sec1 .mouth",{scale:0})
    .from(".sec1 .tx1",{x:"-120%"},"tx")
    .from(".sec1 .tx2",{x:"-120%",delay:0.3},"tx")
    .from(".sec1 .tx3",{x:"-120%",delay:0.6},"tx")
    .from(".sec1 .tx4",{x:"-120%",delay:0.9},"tx")

gsap.to(".sec1 .mouth",{
  scrollTrigger:{
    trigger:".sec1",
    start:"top top",
    end:"bottom 80%",
    scrub:1,
    // markers:true
  },
  y:340,
  x:100,
  scale:2,
  rotation:20
})



///////////////////////////////////////////////////////////
// sec2

let tl = gsap.timeline();
tl.fromTo(".sec2 .mouth", { scale: 0 }, { scale: 1 })
  .fromTo(".sec2 .box_ani .line", { height: 0 }, { height: "100px" })
  .fromTo(".sec2 .box_ani .circle", { scale: 0 }, { scale: 1 })
  .fromTo(
    ".sec2 .box_ani .left span:nth-child(5)",
    { scale: 0, y: -50 },
    { scale: 1, y: 0 }
  )
  
  .fromTo(
    ".sec2 .box_ani .right span:nth-child(1)",
    { scale: 0, y: -50 },
    { scale: 1, y: 0 },
    "<"
  )
  .fromTo(
    ".sec2 .box_ani .left span:nth-child(4)",
    { scale: 0, y: -60 },
    { scale: 1, y: 0 },
    "<"
  )
  .fromTo(
    ".sec2 .box_ani .right span:nth-child(2)",
    { scale: 0, y: -60 },
    { scale: 1, y: 0 },
    "<"
  )
  .fromTo(
    ".sec2 .box_ani .left span:nth-child(3)",
    { scale: 0, y: -70 },
    { scale: 1, y: 0 },
    "<"
  )
  .fromTo(
    ".sec2 .box_ani .right span:nth-child(3)",
    { scale: 0, y: -70 },
    { scale: 1, y: 0 },
    "<"
  )
  .fromTo(
    ".sec2 .box_ani .left span:nth-child(2)",
    { scale: 0, y: -80 },
    { scale: 1, y: 0 },
    "<"
  )
  .fromTo(
    ".sec2 .box_ani .right span:nth-child(4)",
    { scale: 0, y: -80 },
    { scale: 1, y: 0 },
    "<"
  )
  .fromTo(
    ".sec2 .box_ani .left span:nth-child(1)",
    { scale: 0, y: -90 },
    { scale: 1, y: 0 },
    "<"
  )
  .fromTo(
    ".sec2 .box_ani .right span:nth-child(5)",
    { scale: 0, y: -90 },
    { scale: 1, y: 0 },
    "<"
  )
  .fromTo(".sec2 .sebebe", { opacity: 0 }, { opacity: 1 })
  .to(".sec2 .le_Soir_img", {clipPath: "circle(70% at 50% 50%)",})
  .to(".sec2 .brunch_img", {clipPath: "circle(70% at 50% 50%)",})
  .to(".sec2 .secome_img", {clipPath: "circle(70% at 50% 50%)",})
  .fromTo(".sec2 .ri1", {x:-500},{x:0, ease: "power3.out"})
  .fromTo(".sec2 .ri2", {x:500},{x:0, ease: "power3.out"},"<")
  .fromTo(".sec2 .sebaila", {y:500},{y:0, ease: "power3.out"})
 
  

ScrollTrigger.create({
  animation: tl,
  trigger: ".sec2",
  start: "top top",
  end: "+=2000",
  pin: true,
  scrub: 1,
  anticipatePin: 1,
//  markers: true,
});

//sec3

//sec3 글자 자르기
let splitTypes = document.querySelectorAll(".sec3_textani");

splitTypes.forEach(function (char, i) {
  let parent = char.parentNode.parentNode;
  const text = new SplitType(char, {
    types: 'chars'
  })

  gsap.from(text.chars, {
    opacity: 0,
    yPercent: 100,
    duration: 0.2,
    stagger: 0.04,
    scrollTrigger: {
      trigger: ".sec3",
      start: "top top",
      end:"bottom",
      ease: "power3.out"
    }
  })
})

let tl2=gsap.timeline()

tl2.fromTo(".muchaclub",{rotation:45},{y:(i,el)=>(el.getAttribute("data-speed") -1) * 80,      ease:"none",rotation:60})
  .fromTo(".sec3 .l1",{height:0},{height:"200px"})
  .fromTo(".sec3 .c1",{scale:0},{scale:1})
  .fromTo(".sec3 .l4",{height:0},{height:"60%"},"<")
  .fromTo(".sec3 .c2",{scale:0},{scale:1})
  .fromTo(".sec3 .l3",{width:0},{width:"45%"})
  .fromTo(".sec3 .l2",{width:0},{width:"45%"},"<")
  .fromTo(".sec3 .l5",{width:0},{width:"45%"},"<")
  .fromTo(".sec3 .l6",{width:0},{width:"45%"},"<")
  .fromTo(".sec3 .l7",{height:0},{height:"183px"})
  


ScrollTrigger.create({
  animation: tl2,
  trigger: ".sec3",
  start: "top top",
  end: "+=2000",
  pin: true,
  scrub: 1,
  anticipatePin: 1,
  // markers: true,
});



//sec4
//page4
let clutter1= "";
//textContent --> 텍스트만 추출
let sec4_pina = document.querySelector(".sec4 .pina .text").textContent.split("");
sec4_pina.forEach(function (dets) {
    clutter1 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
    document.querySelector(".sec4 .pina .text").innerHTML = clutter1
})

let clutter2 = "";
let sec4_pisco = document.querySelector(".sec4 .pisco .text").textContent.split("");
sec4_pisco.forEach(function (dets) {
    clutter2 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
    document.querySelector(".sec4 .pisco .text").innerHTML = clutter2
})

let clutter3 = "";
let sec4_sangria = document.querySelector(".sec4 .sangria .text").textContent.split("");
sec4_sangria.forEach(function (dets) {
    clutter3 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
    document.querySelector(".sec4 .sangria .text").innerHTML = clutter3
})

let clutter4 = "";
let sec4_mojito = document.querySelector(".sec4 .mojito .text").textContent.split("");
sec4_mojito.forEach(function (dets) {
  clutter4 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
    document.querySelector(".sec4 .mojito .text").innerHTML = clutter4
})

let clutter5 = "";
let sec4_aperol = document.querySelector(".sec4 .aperol .text").textContent.split("");
sec4_aperol.forEach(function (dets) {
  clutter5 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
    document.querySelector(".sec4 .aperol .text").innerHTML = clutter5
})

let tl4=gsap.timeline();

tl4.fromTo(".sec4 .s4_l1",{height:0},{height:"139px"})
   .fromTo(".sec4 .s4_c1",{scale:0},{scale:1})
   .fromTo(".sec4 .pina .text span",{opacity:0, ease: Back.easeOut.config(1.7),y:200,rotation:-20,scale:0},{opacity:1 ,ease: Back.easeOut.config(1.7),stagger:0.05,y:0,rotation:0,scale:1})
   .to(".sec4 .pisco",{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
   .fromTo(".sec4 .pisco .text span",{opacity:0, ease: Back.easeOut.config(1.7),y:200,rotation:-20,scale:0},{opacity:1 ,ease: Back.easeOut.config(1.7),stagger:0.05,y:0,rotation:0,scale:1})
   .to(".sec4 .sangria",{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
   .fromTo(".sec4 .sangria .text span",{opacity:0, ease: Back.easeOut.config(1.7),y:200,rotation:-20,scale:0},{opacity:1 ,ease: Back.easeOut.config(1.7),stagger:0.05,y:0,rotation:0,scale:1})
   .to(".sec4 .mojito",{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
   .fromTo(".sec4 .mojito .text span",{opacity:0, ease: Back.easeOut.config(1.7),y:200,rotation:-20,scale:0},{opacity:1 ,ease: Back.easeOut.config(1.7),stagger:0.05,y:0,rotation:0,scale:1})
   .to(".sec4 .aperol",{clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
   .fromTo(".sec4 .aperol .text span",{opacity:0, ease: Back.easeOut.config(1.7),y:200,rotation:-20,scale:0},{opacity:1 ,ease: Back.easeOut.config(1.7),stagger:0.05,y:0,rotation:0,scale:1})
   .fromTo(".sec4 .s4_c2",{scale:0},{scale:1})
   .fromTo(".sec4 .s4_l2",{height:0},{height:"55px"})
   
  

ScrollTrigger.create({
  animation: tl4,
  trigger: ".sec4",
  start: "top top",
  end: "+=3000",
  pin: true,
  scrub: 1,
  anticipatePin: 1,
  // markers: true,
});

//sec5
let le_soir = document.querySelector(".s5_menu .le_soir a")
let le_soir_bg = document.querySelector(".s5_menu .le_soir")
let le_brunch = document.querySelector(".s5_menu .le_brunch a")
let le_brunch_bg = document.querySelector(".s5_menu .le_brunch")
let s5box=document.querySelector(".s5_box")
let s5box2=document.querySelector(".s5_box2")

le_soir.addEventListener("click",function(e){
  e.preventDefault();
  s5box.style.display="flex"
  s5box2.style.display="none"
  le_soir.style.color="#3a4638"
  le_brunch.style.color="#939393"
  le_soir_bg.style.backgroundColor="#e29473"
  le_brunch_bg.style.backgroundColor="#F4D2C5"
})
le_brunch.addEventListener("click",function(e){
  e.preventDefault();
  s5box.style.display="none"
  s5box2.style.display="flex"
  le_soir.style.color="#939393"
  le_brunch.style.color="#3a4638"
  le_soir_bg.style.backgroundColor="#F4D2C5"
  le_brunch_bg.style.backgroundColor="#e29473"
})

gsap.to(".s5_img",{
  y:-80,
  rotation:15,
  scrollTrigger:{
    trigger:".sec5",
    start:"top center",
    end:"bottom",
    scrub:1
  }
})


let tl5=gsap.timeline()

tl5.fromTo(".sec5 .s5_l1",{height:0},{height:"200px"})
   .fromTo(".sec5 .s5_c1",{scale:0},{scale:1})
   .fromTo(".sec5 .s5_l2",{height:0},{height:"700px"},"s5")
   .fromTo(".sec5 .s5_c2",{scale:0},{scale:1})
   .fromTo(".sec5 .s5_l4",{scale:0},{scale:1},"s5")
   .fromTo(".sec5 .s5_c3",{scale:0},{scale:1})
   .fromTo(".sec5 .s5_l3",{height:0},{height:"700px"},"s5")


ScrollTrigger.create({
  animation: tl5,
  trigger: ".sec5",
  start: "top top",
  end: "+=2000",
  pin: true,
  scrub: 1,
  anticipatePin: 1,
  // markers: true,
});

// sec6
let slides=document.querySelectorAll('.s6_imgsection .s6_img')

function updateScaleAnPosition(){
  slides.forEach((slide)=>{
      let rect=slide.getBoundingClientRect()
      // console.log(rect)
      let centerPosition=(rect.left + rect.right)/2 //이미지의 center값(x축)
      let distanceFromCenter=centerPosition
      let scale
      if(distanceFromCenter>0){
          // Math.min(10,20)
          // window.innerWidth : 화면의 넓이
          // Math.abs : 절대값
          scale=Math.min(1.75,1 + distanceFromCenter/window.innerWidth)
      }else{
          scale=Math.min(0.5,1 - Math.abs(distanceFromCenter)/window.innerWidth)
      }
      gsap.set(slide,{scale:scale})
  })
}
updateScaleAnPosition()

let horiz = gsap.to(slides,{
  xPercent:-97 * (slides.length - 1.8),
  scrollTrigger:{
      trigger:'.sec6',
      start:'top top',
      end:"+=3000",
      scrub:1,
      pin:true,
      onUpdate:()=>{updateScaleAnPosition()}

  }
})

//sec7
let initalPath="M0.5 706V105.5C3.5 104 148.5 0.5 493.5 0.5C838.5 0.5 997 105.5 998.5 105.5V706H0.5Z"
let targetPath="M0.5 601V0.500218C3.5 -0.999789 141 102.5 486 102.5C831 102.5 997 0.500218 998.5 0.500218V601H0.5Z"

let svgWraps = document.querySelectorAll(".svg-container");

svgWraps.forEach((svgWrap)=>{
    let itemSvg=svgWrap.querySelector("svg path")
    
    itemSvg.setAttribute("d",initalPath)

    gsap.to(itemSvg,{
        attr:{d:targetPath},
        scrollTrigger: {
            trigger: svgWrap,
            start: "top 20%",
            end: "+=20%",
            ease: "linear",
            scrub: 1,
            // markers: true,
          },
    })
})

//sec8
gsap.timeline({
  scrollTrigger:{
      trigger:".sec8",
      start:"top 100%",
      end:"+=1500",
      scrub:true,
  }
})
.fromTo(".sec8 .s8_i1",{y:"400%"},{y:0},1.2)
.fromTo(".sec8 .s8_i2",{y:"400%"},{y:0},1.4)
.fromTo(".sec8 .s8_i3",{y:"400%"},{y:0},1.6)
.fromTo(".sec8 .s8_i4",{y:"400%"},{y:0},1.8)
.fromTo(".sec8 .s8_i5",{y:"400%"},{y:0},2)
.fromTo(".sec8 .s8_l1",{height:0},{height:"451px"})


//sec9
function canvas() {
  let canvas = document.querySelector('#myCanvas')
  let context = canvas.getContext("2d"); //canvas 사용의 필수

  canvas.width = window.innerWidth //viewport의 넓이를 canvas의 넓비값으로
  canvas.height = window.innerHeight //viewport의 넓이를 canvas의 높이값으로

  window.addEventListener("resize", function () { //화면의 size가 달라질 때 할 일
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      render()
  })

  function files(index) {
      var data=`./img2/u210.jpg
      ./img2/u211.jpg
      ./img2/u212.jpg
      ./img2/u213.jpg
      ./img2/u214.jpg
      ./img2/u215.jpg
      ./img2/u216.jpg
      ./img2/u217.jpg
      ./img2/u218.jpg
      ./img2/u219.jpg
      ./img2/u220.jpg
      ./img2/u221.jpg
      ./img2/u222.jpg
      ./img2/u223.jpg
      ./img2/u224.jpg
      ./img2/u225.jpg
      ./img2/u226.jpg
      ./img2/u227.jpg
      ./img2/u228.jpg
      ./img2/u229.jpg
      ./img2/u230.jpg
      ./img2/u231.jpg
      ./img2/u232.jpg
      ./img2/u233.jpg
      ./img2/u234.jpg
      ./img2/u235.jpg
      ./img2/u236.jpg
      ./img2/u237.jpg
      ./img2/u238.jpg
      ./img2/u239.jpg
      ./img2/u240.jpg
      ./img2/u241.jpg
      ./img2/u242.jpg
      ./img2/u243.jpg
      ./img2/u244.jpg
      ./img2/u245.jpg
      ./img2/u246.jpg
      ./img2/u247.jpg
      ./img2/u248.jpg
      ./img2/u249.jpg
      ./img2/u250.jpg
      ./img2/u251.jpg
      ./img2/u252.jpg
      ./img2/u253.jpg
      ./img2/u254.jpg
      ./img2/u255.jpg
      ./img2/u256.jpg
      ./img2/u627.jpg
      ./img2/u628.jpg
      ./img2/u629.jpg
      ./img2/u630.jpg
      ./img2/u631.jpg
      ./img2/u632.jpg
      ./img2/u633.jpg
      ./img2/u634.jpg
      ./img2/u635.jpg
      ./img2/u636.jpg
      ./img2/u637.jpg
      ./img2/u638.jpg
      ./img2/u639.jpg
      ./img2/u640.jpg
      ./img2/u641.jpg
      ./img2/u642.jpg
      ./img2/u643.jpg
      ./img2/u644.jpg
      ./img2/u645.jpg
      ./img2/u646.jpg
      ./img2/u647.jpg
      ./img2/u648.jpg
      ./img2/u649.jpg
      ./img2/u650.jpg
      ./img2/u651.jpg
      ./img2/u652.jpg
      ./img2/u653.jpg
      ./img2/u654.jpg
      ./img2/u655.jpg
      ./img2/u656.jpg
      ./img2/u657.jpg
      ./img2/u658.jpg
      ./img2/u659.jpg
      ./img2/u660.jpg
      ./img2/u661.jpg
      ./img2/u662.jpg
      ./img2/u663.jpg
      ./img2/u664.jpg
      ./img2/u665.jpg
      ./img2/u666.jpg
      ./img2/u667.jpg
      ./img2/u668.jpg
      ./img2/u669.jpg
      ./img2/u670.jpg
      ./img2/u671.jpg
      ./img2/u672.jpg
      ./img2/u673.jpg
      ./img2/u674.jpg
      ./img2/u675.jpg
      ./img2/u676.jpg
      ./img2/u677.jpg
      ./img2/u678.jpg
      ./img2/u679.jpg
      ./img2/u680.jpg
      ./img2/u681.jpg
      ./img2/u682.jpg
      ./img2/u683.jpg
      ./img2/u684.jpg
      ./img2/u685.jpg
      ./img2/u686.jpg
      ./img2/u687.jpg
      ./img2/u688.jpg
      ./img2/u689.jpg
      ./img2/u690.jpg
      ./img2/u691.jpg
      ./img2/u692.jpg
      ./img2/u693.jpg
      ./img2/u694.jpg
      ./img2/u695.jpg
      ./img2/u696.jpg
      ./img2/u697.jpg
      ./img2/u698.jpg
      ./img2/u699.jpg
      ./img2/u700.jpg
      ./img2/u701.jpg
      ./img2/u702.jpg
      ./img2/u703.jpg
      ./img2/u704.jpg
      ./img2/u729.jpg
      ./img2/u730.jpg
      ./img2/u731.jpg
      ./img2/u732.jpg
      ./img2/u733.jpg
      ./img2/u734.jpg
      ./img2/u735.jpg
      ./img2/u736.jpg
      ./img2/u737.jpg
      ./img2/u738.jpg
      ./img2/u739.jpg
      ./img2/u740.jpg
      ./img2/u741.jpg
      ./img2/u742.jpg
      ./img2/u743.jpg
      ./img2/u744.jpg
      ./img2/u745.jpg
      `;

      return data.split("\n")[index] //("\n")는 줄바꿈을 의미하며, 텍스트가 여러 줄로 이루어져 있을 경우 각 줄을 배열의 각 요소로 분리
  }
  
  let frameCount = 142; //이미지 전체 갯수 
  let images = [];
  let imageSeq = {
      // 키:값,
      frame:0
  }

  //<img src="">
  for(let i = 0; i<(frameCount + 150); i++){
      let img = new Image(); //이미지 태그 만들기
      if(i>=(frameCount - 1)){
          img.src = files(frameCount - 1)
      }else{
          img.src = files(i)
      }
      images.push(img)
  }
  //console.log(images)
  gsap.to(imageSeq,{
      frame:images.length - 1, //마지막 프레임의 index번호
      snap:"frame", //"frame"은 프레임 단위로 값을 맞추겠다는 의미
      ease:"none",
      scrollTrigger:{
          scrub:0.15,
          trigger:".sec9 canvas",
          start:"top top",
          end:"1300% top",
          //scroller:"#main"
      },
      onUpdate:render //gsap.to가 변할 때마다 업데이트가 일어남
  })

  images[0].onload=render;

  function render(){
      scaleImage(images[imageSeq.frame],context)
  }
  function scaleImage(img, ctx){
      let canvas = ctx.canvas
      let hRatio = canvas.width/img.width
      let vRatio = canvas.height/img.height
      let ratio = Math.max(hRatio,vRatio) //max(값1, 값2) 값1, 값2 중 큰 값 / min(값1, 값2) --> 값1, 값2 중 작은 값
      let centershiftX = (canvas.width - img.width*ratio)/2
      let centershiftY = (canvas.height - img.height*ratio)/2
      ctx.clearRect(0,0,canvas.width,canvas.height) //이미지 지우기
      //이미지 그리기
      ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centershiftX,
          centershiftY,
          img.width*ratio,
          img.height*ratio
      )
  }

  ScrollTrigger.create({
      trigger:".sec9 canvas",
      //scroller:"#main",
      pin:true,
      start:"top top",
      end:"1300% top",
  })

  // let render = function(){} = function render(){}

}
canvas();
//////////////////////////////
gsap.to(".se9_1",{
  scrollTrigger:{
      trigger:".sec9",
      pin:true,
      start:"top top",
      end:"+=6000",
  }
})

gsap.from(".s9_txt",{
  x:400,
  scrollTrigger:{
    trigger:".sec9",
    start:"top top",
    end:"20% center",
    scrub:1,
    // markers:true
  }
})
gsap.from(".s9_txt2",{
  x:-900,
  scrollTrigger:{
    trigger:".sec9",
    start:"top top",
    end:"20% center",
    scrub:1,
    // markers:true
  }
})

gsap.timeline({
  scrollTrigger:{
      trigger:".footer",
      start:"-10% top",
      end:"+=700",
      scrub:true,
      // markers:true
  }
})
.fromTo(".s9_l1",{height:0},{height:"294px"})
.fromTo(".s9_c1",{scale:0},{scale:1})
.fromTo(".s9_c4",{scale:0},{scale:1})
.fromTo(".s9_l4",{width:0},{width:"47%"},"li")
.fromTo(".s9_l5",{width:0},{width:"47%"},"<")
.fromTo(".s9_c2",{scale:0},{scale:1})
.fromTo(".s9_c3",{scale:0},{scale:1},"<")
.fromTo(".s9_l6",{scale:0},{scale:1},"li")
.fromTo(".s9_l7",{width:0},{width:"47%"},"li")
.fromTo(".s9_l8",{width:0},{width:"47%"},"<")
.fromTo(".s9_c6",{scale:0},{scale:1})
.fromTo(".s9_c7",{scale:0},{scale:1},"<")
.fromTo(".tous",{opacity:0,y:50},{opacity:1,y:0},"tx")
.fromTo(".time",{opacity:0,y:50},{opacity:1,y:0},"tx2")
.fromTo(".dim",{opacity:0,y:50},{opacity:1,y:0},"tx")
.fromTo(".de",{opacity:0,y:50},{opacity:1,y:0},"tx2")
.fromTo(".set",{opacity:0,y:50},{opacity:1,y:0})




























