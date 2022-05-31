$(function(){
  const splitText = (ele)=>{
    const textAry = ele.innerText.split("");
    let html = "<div class='split-chars'>";
    textAry.forEach(function(ele){
      html+= "<div class='split-char' style='display: inline-block'>" + ele + "</div>";
    })
    html+= "</div>";  

    ele.innerHTML = html;
  }

  motions = {
    init: function(){
      gsap.registerPlugin(ScrollTrigger);
    },
    gnb: function(){
      $(".js-btn_open-menu").click(function(){
        $(".js-menu").addClass("on");
        $(".js-menu_bg").addClass("on");
        $("body").addClass("hide");
      })

      $(".js-btn_close-menu").click(function(){
        $(".js-menu").removeClass("on");
        $(".js-menu_bg").removeClass("on");
        $("body").removeClass("hide");
      })

      $(".js-menu_bg").click(function(){
        $(".js-menu").removeClass("on");
        $(".js-menu_bg").removeClass("on");
        $("body").removeClass("hide");
      })
    },
    main: function(){
      const title = document.querySelectorAll(".js-sc_title"); 

      gsap.set(title, {
        opacity: 0
      })
      
      gsap.utils.toArray(title).forEach(function(ele, idx){
        gsap.to(ele, {
          opacity: 1,
          duration: 0.2,
          scrollTrigger:{
            trigger : ele,
            start: "top bottom",
          }
        })
      })

      const link = document.querySelectorAll(".js-link-more"); 

      gsap.set(link, {
        yPercent: 100,
        opacity: 0
      })
      
      gsap.utils.toArray(link).forEach(function(ele, idx){
        gsap.to(ele, {
          yPercent: 0,
          opacity: 1,
          duration: 0.2,
          scrollTrigger:{
            trigger : ele,
            start: "top bottom",
          }
        })
      })      
    },
    intro: function(){
      const text = document.querySelector(".js-intro_title");
      splitText(text);
      gsap.set(".js-intro_title .split-char", {x: -1000});

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger : ".intro",
          start: "top bottom",
        }        
      })
      tl.to(".js-intro_figure-inr", {width : "100%", duration: 1.5})
      .to(".js-intro_title .split-char", {x : 0, stagger: 0.1, duration: 0.8}, "-=1.5")
    },
    goods: function(){
      gsap.set(".goods .js-item", {yPercent : 100, opacity: 0})
      gsap.to(".goods .js-item", {
        scrollTrigger: {
          trigger : ".goods",
          start: "top center",
        },
        stagger: 0.15,
        opacity: 1,
        yPercent: 0
      })
    },
    adiclub: function(){  
      let moveY = -($(".js-adiclub_figures").outerHeight()) * 0.88;
      $(window).resize(function(){
        moveY = -($(".js-adiclub_figures").outerHeight()) * 0.88;
  
        ani.kill()
        gsap.set(".js-adiclub_figures", {y: 0})
        ani = gsap.to(".js-adiclub_figures", {
          scrollTrigger: {
            trigger: ".adiclub_cont",
            start: "top top",
            end: "90% top",
            scrub: 1
          },
          y: moveY
        })
      })
  
      let ani = gsap.to(".js-adiclub_figures", {
        scrollTrigger: {
          trigger: ".adiclub_cont",
          start: "top top",
          end: "90% top",
          scrub: 1
        },
        y: moveY
      })
      
    },
    runner: function(){
      const text = document.querySelector(".js-flash");
      splitText(text);
      gsap.set(".js-flash .split-char", {opacity: 0, yPercent: 100});

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger : ".runner",
          start: "80% bottom",
        }        
      })
      tl.to(".js-runner_dummy", {yPercent: 100, duration: 0.5})
      .to(".js-flash .split-char", {opacity: 1, yPercent: 0, stagger: 0.1, duration: 0.5})
    },
    company: function(){
      gsap.set(".company .js-item", {xPercent : 100, opacity: 0})
      gsap.to(".company .js-item", {
        scrollTrigger: {
          trigger : ".company",
          start: "top center",
        },
        stagger: 0.15,
        opacity: 1,
        xPercent: 0
      })
    },
    support: function(){
      $(".support .item_btn").click(function(){
        $(this).parent().toggleClass("on");
        $(this).siblings(".item_detail-area").stop().slideToggle(300);
      })
    }
  }
  
  motions.init();
  motions.gnb();
  motions.main();
  motions.intro();
  motions.goods();
  motions.adiclub();
  motions.runner();
  motions.company();
  motions.support();
})