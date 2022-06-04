$(function(){
  const splitText = (ele)=>{
    const textAry = ele.innerText.split("");
    let html = "<div class='split-chars' style='display: inline-block'>";
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
    header: function(){
      $(window).scroll(function(){
        if(0 < $(this).scrollTop()){
          $(".header").addClass("scroll");
        } else {
          $(".header").removeClass("scroll");
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
        $(".js-btn_close-menu").trigger("click");
      })
    },
    goods: function(){
      gsap.set("#goods .js-sc_title", {opacity: 0, yPercent: 100});
      gsap.set("#goods .js-item", {opacity: 0, yPercent: 100});
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: "#goods",
          start: "top center"
        }
      });

      tl.to("#goods .js-sc_title", {opacity: 1, yPercent: 0})
      .to("#goods .js-item", {opacity: 1, yPercent: 0, stagger: 0.1});
    },
    adiclub: function(){ 
      gsap.set(".js-adiclub_title", {opacity: 0, yPercent: 100});
      gsap.set(".js-adiclub_word", {opacity: 0})

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#adiclub",
          start: "top center",
        },
      })
      tl.to(".js-adiclub_title", {opacity: 1, yPercent: 0})
      .to(".js-adiclub_word", {stagger: 0.15, opacity: 1})

      ScrollTrigger.matchMedia({
        "(min-width: 769px)": function() {
          gsap.utils.toArray(".js-adiclub_word").forEach(function(ele){        
            gsap.to(ele, {
              scrollTrigger: {
                trigger: "#adiclub",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
              },
              y: -(parseInt(Math.random() * 100) + 50)
            })
          });
        },
        "(max-width: 768px)": function() {          
          $(".js-adiclub_video")[0].pause();
        }       
      }); 
      
      $(".js-adiclub_btn-start").click(function(e){
        const tl = gsap.timeline();
        tl.set(".js-adiclub_dummy", {opacity: 1,"z-index": 5})
        .to(".js-adiclub_dummy", {scaleX: 150, scaleY: 150, background: "#fff"})
        .to(".js-adiclub_video-wrap", {opacity: 1, visibility: "visible"})
        .set(".js-adiclub_dummy", {scaleX: 1, scaleY: 1, "z-index": -1});

        $(".js-adiclub_video")[0].play();
      })   
      
      $(".js-adiclub_btn-pause").click(function(){
        const tl = gsap.timeline();
        tl.set(".js-adiclub_dummy", {background: "#ee265c", "z-index": 20})
        .to(".js-adiclub_dummy", {scaleX: 150, scaleY: 150, background: "#fff"})
        .set(".js-adiclub_video-wrap", {opacity: 0, visibility: "hidden"})
        .to(".js-adiclub_dummy", {opacity: 0})
        .set(".js-adiclub_dummy", {background: "#ee265c", scaleX: 1, scaleY: 1, "z-index": -1});

        $(".js-adiclub_video")[0].pause();
      })
    },
    runner: function(){
      gsap.set(".js-runner_headline", {opacity: 0});
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger : ".js-runner_headline",
          start: "top bottom",
          end: "top top",
          scrub: 5
        }       
      })
      tl.to(".js-runner_headline", {opacity: 1, duration: 1})
      tl.to(".js-runner_headline", {xPercent: -100, duration: 5}, "-=1")
    },
    company: function(){
      gsap.set("#company .js-sc_title", {opacity: 0, yPercent: 100});
      gsap.set("#company .js-item", {opacity: 0, xPercent: 100});
      gsap.set("#company .js-board_link-more", {opacity: 0, yPercent: 100});
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: "#company",
          start: "top center"
        }
      });

      tl.to("#company .js-sc_title", {opacity: 1, yPercent: 0})
      .to("#company .js-item", {opacity: 1, xPercent: 0, stagger: 0.1})
      .to("#company .js-board_link-more", {opacity: 1, yPercent: 0});
    },
    support: ()=>{
      gsap.set("#support .js-sc_title", {opacity: 0, yPercent: 100});
      gsap.set("#support .js-item", {opacity: 0, xPercent: 100});
      gsap.set("#support .js-board_link-more", {opacity: 0, yPercent: 100});
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: "#support",
          start: "top center"
        }
      });

      tl.to("#support .js-sc_title", {opacity: 1, yPercent: 0})
      .to("#support .js-item", {opacity: 1, xPercent: 0, stagger: 0.1})
      .to("#support .js-board_link-more", {opacity: 1, yPercent: 0});      
                  
      $("#support .item_btn").click(function(){
        $(this).parent().toggleClass("on");
        $(this).siblings(".item_detail-area").stop().slideToggle(300);        
      })
    }
  }
  
  motions.init();
  motions.header();
  motions.gnb();
  motions.goods();
  motions.adiclub();
  motions.runner();
  motions.company();
  motions.support();
})