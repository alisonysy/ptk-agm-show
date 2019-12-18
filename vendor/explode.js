// import Physics2DPlugin from './Physics2DPlugin.min.js';

class CreateBubbles{
  constructor(emitter,opts = {}){
    this.dotQuantity = opts.dotQuantity || 30;
    this.dotSizeMin = opts.dotSizeMin || 10;
    this.dotSizeMax = opts.dotSizeMax || 30;
    this.dotSizeFixed = opts.dotSizeFixed || true;
    this.dotBackground = opts.dotBackground || null;
    this.dotXRange = opts.dotXRange || null; // array
    this.dotYRange = opts.dotYRange || null;
    this.dotDisappearDuration = opts.dotDisappearDuration || 0.5;
    this.speed = opts.speed || 1;
    this.gravity = opts.gravity || 1;
    this.explosionQuantity = opts.explosionQuantity || 3; // create different varieties of explosion

    this.emitter = document.querySelector(emitter);
    this.emitterSize = opts.emitterSize || this.emitter.clientWidth;

    this.explosions = [];
    this.current = 0;

    this.init();
  }

  init(){
    for(let i = 0; i < this.explosionQuantity; i++){
      let cont = document.createElement('div');
      cont.style.cssText = "position:absolute; left:0; top:0; overflow:visible; z-index:5000; pointer-events:none;";
      document.body.appendChild(cont);
      this.explosions.push({
        container:cont,
        animation:this.bubbleGenerator(cont)
      })
    }
  }

  bubbleGenerator(c){
    let tl = gsap.timeline({paused:true}), dots = [];
    for(let i = 0; i<this.dotQuantity; i++){
      let dot = document.createElement('div'), size, angle, length;
      dots.push(dot);
      dot.className = "dot";
      size = gsap.utils.random(this.dotSizeMin,this.dotSizeMax);
      c.appendChild(dot);
      angle = Math.random() * Math.PI * 2;
      length = Math.random() * (this.emitterSize / 2 - size / 2);
      gsap.set(dot,{
        x:Math.cos(angle) * length,
        y:Math.sin(angle) * length,
        width:this.dotSizeFixed? size : Math.random() * size,
        height:this.dotSizeFixed? size : Math.random() * size,
        xPercent:-50,
        yPercent:-50,
        visibility:'hidden',
        force3D:true,
        background:this.dotBackground? gsap.utils.random(this.dotBackground) :gsap.utils.random(['#d0539f','#f06730','#59caf2'])
      });
      tl.to(dot,{
        opacity:0,
        visibility:'visible',
        duration: this.dotDisappearDuration + Math.random(),
        y:this.dotYRange? gsap.utils.random(this.dotYRange[0],this.dotYRange[1]) :gsap.utils.random(-50,-200),
        x:this.dotXRange? gsap.utils.random(this.dotXRange[0],this.dotXRange[1]) :gsap.utils.random(-100,100)
      },0);
    }
    tl.set(dots,{visibility:'hidden'});
    return tl;
  }

  bubble(opts = {}){
    let bounds = this.emitter.getBoundingClientRect(), explosion;
    if(++this.current === this.explosions.length){
      this.current = 0;
    }
    explosion = this.explosions[this.current];
    gsap.set(explosion.container,{
      x:bounds.left +  bounds.width / 2, 
      y:bounds.top + bounds.height / 2
    });
    if(opts.timeout){
      setTimeout(() => {
        explosion.animation.restart();
      }, opts.timeout);
    }else{
      explosion.animation.restart();
    }
  }
}

export default CreateBubbles;