( () =>{
    //exopre images
    const canvas = document.querySelector("#explode-view")
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 678; //how many still frames do we have
    const images = []; //an array to hold all of our images
    //create an object literal with a property frame to hold the current frame
    const buds = {
        frame: 0
    };

    for (let i=0; i<frameCount; i++) {
        // console.log(i);
        // const img = new Image();
        const img = document.createElement("img");
        //need to recreate a string: images/explode_0001.webp
        img.src = `images/expore_images/Expore_${(i+1).toString().padStart(4, '0')}.png`;
        images.push(img);
    }
    // console.table(images)

    //Not actually animating a DOM element, but rather an object
    //which contains a frame count
    gsap.to(buds, {
        frame: 678,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 3,
            start: "top top",
            markers: true
        },
        // everytime you use scroll
        onUpdate: render
    }) 

    images[0].addEventListener("onload", render);

    function render() {
        // console.log(buds.frame);
        // console.log(images[buds.frame]);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }


    //xray
    (function(){
        "use strict";
    
    
    var imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;

    function onDown() {
      dragging = true;
    }
    
    function onUp() {
      dragging = false;
    }
    
    function onMove(event) {
      if(dragging===true) {
        var x = event.clientX - imageCon.getBoundingClientRect().left;
        console.log(event.clientX);
        console.log(imageCon.getBoundingClientRect().left);
  
        if(x < min) { 
          x = min;    
        }
       else if(x > max) { 
          x = max-4; 
        }
        drag.style.left = x + 'px';
        left.style.width = x + 'px';
      }
    }
    
    drag.addEventListener('mousedown', onDown, false); 
    document.body.addEventListener('mouseup', onUp, false);
    document.body.addEventListener('mousemove', onMove, false);
})();

  //3D viewer
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  //functions
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });


  function scrollToSection(sectionId) {
        gsap.to(window, { duration: 1, scrollTo: sectionId });
    }


})();