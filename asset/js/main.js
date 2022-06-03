$(function(){
  motions = {
    init: function(){
      gsap.registerPlugin(ScrollTrigger);
    },
    header: function(){
      $(window).scroll(function(){
        if(0 < $(this).scrollTop()){
          $(".header").addClass("on");
        } else {
          $(".header").removeClass("on");
        }
      })

      $(".navi a").click(function(e){
        e.preventDefault();

        $($(this).attr("href"))[0].scrollIntoView({behavior: "smooth"});
      })
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
    common: function(){
      gsap.utils.toArray(".sc_title").forEach(function(ele){
        gsap.set(ele, {yPercent : 100, opacity: 0})
        gsap.to(ele, {
          scrollTrigger: {
            trigger : ele,
            start: "top 70%",
          },
          duration: 0.3,
          opacity: 1,
          yPercent: 0
        })
      })
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
      gsap.set(".js-adiclub_word", {opacity: 0})
      gsap.to(".js-adiclub_word", {
        scrollTrigger: {
          trigger : ".adiclub",
          start: "top center",
        },
        stagger: 0.15,
        opacity: 1
      })

      ScrollTrigger.matchMedia({
        "(min-width: 769px)": function() {
          gsap.utils.toArray(".js-adiclub_word").forEach(function(ele){        
            gsap.to(ele, {
              scrollTrigger: {
                trigger: ".adiclub",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
              },
              y: -(parseInt(Math.random() * 100) + 50)
            })
          });
        }       
      }); 
      
      $(".js-adiclub_btn-start").click(function(e){
        const tl = gsap.timeline();
        tl.set(".js-adiclub_dummy", {opacity: 1,"z-index": 5})
        .to(".js-adiclub_dummy", {scaleX: 150, scaleY: 150})
        .to(".js-adiclub_dummy", {background: "#fff"})
        .to(".js-adiclub_video-wrap", {opacity: 1, visibility: "visible"})
        .set(".js-adiclub_dummy", {scaleX: 1, scaleY: 1, "z-index": -1});

        $(".js-adiclub_video")[0].play();
      })   
      
      $(".js-adiclub_btn-pause").click(function(){
        const tl = gsap.timeline();
        tl.set(".js-adiclub_dummy", {background: "#ee265c", "z-index": 20})
        .to(".js-adiclub_dummy", {scaleX: 150, scaleY: 150})
        .to(".js-adiclub_dummy", {background: "#fff"})
        .set(".js-adiclub_video-wrap", {opacity: 0, visibility: "hidden"})
        .to(".js-adiclub_dummy", {opacity: 0})
        .set(".js-adiclub_dummy", {background: "#ee265c", scaleX: 1, scaleY: 1, "z-index": -1});

        $(".js-adiclub_video")[0].pause();
      })
    },
    runner: function(){
      const text = $(".js-flash").get(0);
      splitText(text);
      gsap.set(".js-flash .split-char", {opacity: 0, yPercent: 100});

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger : ".runner",
          start: "top center",
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
      gsap.set(".support .js-item", {xPercent : 100, opacity: 0})
      gsap.to(".support .js-item", {
        scrollTrigger: {
          trigger : ".support",
          start: "top center",
        },
        stagger: 0.15,
        opacity: 1,
        xPercent: 0
      })
      $(".support .item_btn").click(function(){
        $(this).parent().toggleClass("on");
        $(this).siblings(".item_detail-area").stop().slideToggle(300);        
      })
    }
  }
  
  motions.init();
  motions.header();
  motions.gnb();
  motions.common();
  motions.goods();
  motions.adiclub();
  motions.runner();
  motions.company();
  motions.support();
})