//  SCROLLAMA
var main = d3.select("main");
     var scrolly = main.select("#scrolly");
     var visual = scrolly.select("visual");
     var article = scrolly.select("article");
     var step = article.selectAll(".step");

     // initialize the scrollama
     var scroller = scrollama();

     // generic window resize listener event
     function handleResize() {
       // 1. update height of step elements
       var stepH = Math.floor(window.innerHeight * 0.75);
       step.style("height", stepH + "px");

       var visualHeight = window.innerHeight / 2;
       var visualMarginTop = (window.innerHeight - visualHeight) / 2;

       visual
         .style("height", visualHeight + "px")
         .style("top", visualMarginTop + "px");

       // 3. tell scrollama to update new element dimensions
       scroller.resize();
     }

     // scrollama event handlers
     function handleStepEnter(response) {
       console.log(response);
       // response = { element, direction, index }

       // add color to current step only
       step.classed("is-active", function(d, i) {
         return i === response.index;
       });

       // update graphic based on step
       visual.select("p").text(response.index + 1);
     }

     function setupStickyfill() {
       d3.selectAll(".sticky").each(function() {
         Stickyfill.add(this);
       });
     }

     function init() {
       setupStickyfill();

       // 1. force a resize on load to ensure proper dimensions are sent to scrollama
       handleResize();

       // 2. setup the scroller passing options
       // 		this will also initialize trigger observations
       // 3. bind scrollama event handlers (this can be chained like below)
       scroller
         .setup({
           step: "#scrolly article .step",
           offset: 0.08,
           debug: true,
         })
         .onStepEnter((response) => {
  							console.log(response);
         if (response.index == 0){ //first step
          document.getElementById('rectObj').setAttribute("src", "images/lorde_bw.jpeg");
  						}else	if (response.index == 1){ //second step, Cancer Journals
  								document.getElementById('rectObj').setAttribute("src", "images/The_Cancer_Journals.jpeg");
  							}else if(response.index == 2){//third step, video
  								document.getElementById('rectObj').setAttribute("src", "images/black.jpeg");
  							}else if(response.index == 3){//fourth step seminal work
  								document.getElementById('rectObj').setAttribute("src", "images/lorde_bw_smile.jpeg");
  							}else if(response.index == 4){//fifth step final years
  								document.getElementById('rectObj').setAttribute("src", "images/black.jpeg");

  							}
  });


       // setup resize event
       window.addEventListener("resize", handleResize);
     }

     // kick things off
     init();

//TEXT ANIMATIONS

var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml7 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: true})
    .add({
      targets: '.ml7 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml7',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    var textWrapper = document.querySelector('.ml13');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml13 .letter',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      }).add({
        targets: '.ml13 .letter',
        translateY: [0,-100],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1200,
        delay: (el, i) => 100 + 30 * i
      });

      anime.timeline({loop: true})
        .add({
          targets: '.ml5 .line',
          opacity: [0.5,1],
          scaleX: [0, 1],
          easing: "easeInOutExpo",
          duration: 700
        }).add({
          targets: '.ml5 .line',
          duration: 600,
          easing: "easeOutExpo",
          translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
        }).add({
          targets: '.ml5 .ampersand',
          opacity: [0,1],
          scaleY: [0.5, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=600'
        }).add({
          targets: '.ml5 .letters-left',
          opacity: [0,1],
          translateX: ["0.5em", 0],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=300'
        }).add({
          targets: '.ml5 .letters-right',
          opacity: [0,1],
          translateX: ["-0.5em", 0],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=600'
        }).add({
          targets: '.ml5',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
        var textWrapper = document.querySelector('.ml10 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
          .add({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i
          }).add({
            targets: '.ml10',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });

// VIDEO CONTROLS
//benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen/
      function playPauseVideo() {
 					    let videos = document.querySelectorAll("video");
 					    videos.forEach((video) => {
 					        // We can only control playback without insteraction if video is mute
 					        video.muted = true;
 					        // Play is a promise so we need to check we have it
 					        let playPromise = video.play();
 					        if (playPromise !== undefined) {
 					            playPromise.then((_) => {
 					                let observer = new IntersectionObserver(
 					                    (entries) => {
 					                        entries.forEach((entry) => {
 					                            if (
 					                                entry.intersectionRatio !== 1 &&
 					                                !video.paused
 					                            ) {
 					                                video.pause();
 					                            } else if (video.paused) {
 					                                video.play();
 					                            }
 					                        });
 					                    },
 					                    { threshold: 0.2 }
 					                );
 					                observer.observe(video);
 					            });
 					        }
 					    });
 					}

 					// And you would kick this off where appropriate with:
 					playPauseVideo();
