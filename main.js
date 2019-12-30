import CreateBubbles from './vendor/explode.js';

!function(){
  document.querySelectorAll('.loading').forEach(function(div){
    div.classList.remove('loading');
  });
  let ratTl = gsap.timeline();
  let backgroundTl = gsap.timeline();
  let ratJoggingTl = ratJogging();

  const conversationDefaults = {
    scale:0,
    ease:'bounce.out',
    duration:1
  };
  const slideInDefaults = {
    x:'100vw',
    duration:0.6,
    onComplete:function(){
      ratJoggingTl.pause();
    }
  };
  const slideOutDefaults = {
    x:'-100vw',
    duration:0.5,
    onStart:function(){
      ratJoggingTl.resume();
    }
  };
  const nameList = [
    ['James',60],
    ['Ashley',50],
    ['仇森',50],
    ['Lambert',50],
    ['Roy',50],
    ['Jenny',42],
    ['帅洋康',42],
    ['Fannie',42],
    ['甘志鹏',42],
    ['Rebecca',42],
    ['kerry',42],
    ['Lisa',42],
    ['Lily',42],
    ['蒋家益',42],
    ['余涛',40],
    ['Nicole',40],
    ['郑宇',40],
    ['赵云洪',40],
    ['Cherry',40],
    ['Petty',40],
    ['Dane',40],
    ['Leo',40],
    ['郑卫伟',38],
    ['郑慧梅',38],
    ['Kimi',38],
    ['Emily',38],
    ['Lucky',38],
    ['Gavin',38],
    ['李辉朋',38],
    ['Yoyo',38],
    ['李健彰',38],
    ['郑小辉',38],
    ['罗旺',38],
    ['Jennifer',38],
    ['Eva',38],
    ['Tom',38],
    ['Emma',38],
    ['Vincent',38],
    ['Lionel',38],
    ['Kylin',38],
    ['梁细叶',35],
    ['黎红英',35],
    ['唐文峰',35],
    ['Roger',35],
    ['胡冠',35],
    ['Cary',35],
    ['Nora',35],
    ['Summer',35],
    ['李延辉',35],
    ['Alison',35],
    ['曾军平',35],
    ['李鑫',35],
    ['Jack',35],
    ['Mindy',35],
    ['Alan',42],
    ['Bruce',35],
    ['Braw',35],
    ['韦坤玲',35],
    ['Jessie',35],
    ['Nancy',35],
    ['康柳然',35],
    ['张周星',35],
    ['Jacky',35],
    ['Hunter',35],
    ['Ruth',35],
    ['Mandy',35],
    ['Harry',35],
    ['Yain',35],
    ['Yulei',35],
    ['Abby',35],
    ['Serena',35],
    ['Olivia',35],
    ['Beryl',35],
    ['Clio',35],
    ['Sean',35],
    ['Echo',35],
    ['Mina',35],
    ['Stefan',35],
    ['Claire',35],
    ['Anna',35],
    ['Ray',35],
    ['Jane',35],
    ['李威',35],
    ['Richard',35],
    ['Sky',40],
    ['陈美娴',35],
    ['宁亚琴',35],
    ['Mark',35],
    ['Tracy',35],
    ['古明政',35],
    ['Bruno',35],
    ['Sunny',40],
    ['付新羽',35],
    ['田思',35],
    ['Terry',35],
  ];

  let ifCompleted = false, waitForBossSec = false;
  
  function ratJogging(){
    let tl = gsap.timeline({
      repeat:999,
      repeatDelay:0.1
    });
    tl
      .to('.rat-2',{opacity:1,duration:0.03},0.02)
      .set('.rat-1',{opacity:0},'+=0')
      .to('.rat-3',{opacity:1,duration:0.03},0.1)
      .set('.rat-2',{opacity:0},'+=0')
      .to('.rat-4',{opacity:1,duration:0.03},0.15)
      .set('.rat-3',{opacity:0},'+=0')
      .to('.rat-5',{opacity:1,duration:0.03},0.21)
      .set('.rat-4',{opacity:0},'+=0')
      .to('.rat-6',{opacity:1,duration:0.03},0.27)
      .set('.rat-5',{opacity:0},'+=0')
      .yoyo(true);
    return tl;
  };

  function opening(){
    let tl = gsap.timeline();
    tl
      .from('.show-1',{
        ...conversationDefaults,
        onComplete:function(){
          let c = document.querySelector('.conversation-1');
          setTimeout(() => {
            c.textContent = 'We are the PITAKA family.';
          }, 1000);
        }
      },0.3)
      .from('.brandName',{
        scale:0,
        ease:'power4.out',
        duration:1,
        onComplete:function(){
          let b = document.querySelector('.brandName');
          b.classList.add('shine');
        }
      },'+=1')
      .to('.show-1',{scale:0,opacity:0,ease:'power1.out',duration:0.3},'+=0.5')
      .to('.brandName',{scale:0,ease:'power4.inOut',duration:0.8},'+=1');
    return tl;
  };

  function deptMktg(){
    let tl = gsap.timeline();
    tl
      .from('.show-3',{...conversationDefaults})
      .from('.show-4',{...slideInDefaults,duration:0.6})
      .from('.show-4-design',{...conversationDefaults,duration:0.7})
      .to('.show-4-design',{...conversationDefaults,duration:0.5},'+=0.8')
      .from(['.show-4-girl','.show-4-bg','.show-4-ins'],{...conversationDefaults,stagger:0.3},'-=0.5')
      .from('.show-4-like',{...conversationDefaults,stagger:0.5},'-=0.4')
      .from('.dept-3',{...conversationDefaults},'+=3')
      .to('.show-4',{...slideOutDefaults},'+=2')
      .to(['.show-3','.dept-3'],{
        ...conversationDefaults,
        duration:0.5
      },'-=1')
    return tl;
  };

  function deptTech(){
    let tl = gsap.timeline();
    let codeWrapper = document.querySelector('.code-wrapper pre');
    let intervalId ;
    let code = ` 
import { getRawPath, cacheRawPathMeasurements, getPositionOnPath } from "./utils/paths
.js";
import { getGlobalMatrix } from "./utils/matrix.js";
var _xProps = ["x", "translateX", "left", "marginLeft"],
    _yProps = ["y", "translateY", "top", "marginTop"],
    _DEG2RAD = Math.PI / 180,
    gsap,
    PropTween,
    _getUnit,
    _toArray,
    _getGSAP = function _getGSAP() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.register
Plugin && gsap;
},
    `;
    
    tl
      .from('.show-6',{...conversationDefaults})
      .from('.show-7',{
        x:'100vw',
        duration:1,
        onComplete:function(){
          ratJoggingTl.pause();
          let n = 0;
          intervalId = setInterval(function(){
            codeWrapper.innerHTML += code.substring(n,n+1);
            n++;
          },20)
        }
      })
      // .to('.code-wrapper',{scrollTop:253,duration:1})
      .to('.show-7',{
        x:'-100vw',
        duration:1,
        onStart:function(){
          ratJoggingTl.resume();
          clearInterval(intervalId);
        }
      },'+=10')
      .to('.show-6',{...conversationDefaults},'-=1')
      
    return tl;
  };

  function deptMkSalesCenter(){
    let tl = gsap.timeline();
    tl
      .from('.show-9',{...conversationDefaults})
      .from('.show-8',{...slideInDefaults})
      .from('.show-8-laptop',{...conversationDefaults})
      .from('.show-8-arrow',{yPercent:100,ease:'bounce.out',duration:1},'-=1')
      .from('.show-8-circle-right-top',{...conversationDefaults,duration:0.5},'-=0.3')
      .from('.show-8-circle-right-bottom',{...conversationDefaults,duration:0.5},'-=0.5')
      .from('.show-8-man',{...conversationDefaults})
      .from('.show-8-balloon',{opacity:0})
      .from('.show-8-circle-left',{...conversationDefaults},'-=0.3')
      .to('.show-8',{...slideOutDefaults},'+=0.8')
      .to('.show-9',{...conversationDefaults},'-=0.5')
    return tl;
  };

  function deptSales(){
    let tl = gsap.timeline();
    let tl_gear = gsap.timeline();

    tl_gear.to('.show-10-gear',{rotation:360,repeat:10,repeatDelay:0,duration:2,ease:'none'});

    tl
      .from('.show-11',{...conversationDefaults})
      .from('.show-10',{...slideInDefaults})
      .from('.show-10-gear',{...conversationDefaults,duration:0.5})
      .addLabel('gear')
      .from('.show-10-laptop',{...conversationDefaults,duration:0.7},'gear')
      .from(['.show-10-customer-2','.show-10-customer-4','.show-10-customer-3','.show-10-customer-1'],{y:'100vh',stagger:0.3},'gear+=0.7')
      .from('.show-10-amazon',{...conversationDefaults,rotate:180,duration:0.7},'gear+=1.7')
      .to('.show-10-amazon',{...conversationDefaults,rotate:180,duration:0.5},'gear+=2.6')
      .to('.show-10-customer',{y:'100vh',stagger:0.3},'gear+=2.6')
      .from('.show-10-distributor',{...conversationDefaults,ease:'elastic.out'},'gear+=3.6')
      .from('.show-10-sp',{...conversationDefaults},'gear+=3.6')
      .from('.show-10-dialog',{...conversationDefaults,duration:0.5},'gear+=4.2')
      .to('.show-10',{...slideOutDefaults},'gear+=5.8')
      .to('.show-11',{...conversationDefaults,duration:0.6},'gear+=5.8')
    return tl;
  };

  function deptCustomerService(){
    let tl = gsap.timeline();
    tl
      .from('.show-12',{...conversationDefaults})
      .from('.show-13',{...slideInDefaults})
      .from('.show-13-girl',{...conversationDefaults},'-=0.8')
      .from(['.show-13-desk','.show-13-plant'],{y:'100vh',duration:0.7,stagger:0.5},'-=0.4')
      .from(['.show-13-call','.show-13-dialog-1','.show-13-dialog-2'],{...conversationDefaults,stagger:0.6})
      .to('.show-13',{...slideOutDefaults},'+=1')
      .to('.show-12',{...conversationDefaults},'-=1')
    return tl;
  };

  function deptQuality(){
    let tl = gsap.timeline();
    tl
      .from('.show-14',{...conversationDefaults})
      .from('.show-15',{...slideInDefaults})
      .to('.show-15-body',{y:-50,ease:'power4.in',duration:0.5})
      .to('.show-15-body',{y:0,ease:'bounce.out',duration:0.5})
      .to('.show-15-left-hand',{rotation:25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to('.show-15-right-hand',{rotation:-25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to(['.show-15-left-hand','.show-15-right-hand'],{y:0,duration:0.5,ease:'bounce.out'},'-=0.5')
      .to('.show-15-left-hand',{rotation:-15},'-=0.5')
      .to('.show-15-right-hand',{rotation:15},'-=0.5')
      .from('.show-15-star-1',{scale:0,y:100,ease:'power4.out',duration:0.6},'-=0.5')
      .to('.show-15-man',{xPercent:105,duration:0.5})

      .to('.show-15-body',{y:-50,ease:'power4.in',duration:0.5})
      .to('.show-15-body',{y:0,ease:'bounce.out',duration:0.5})
      .to('.show-15-left-hand',{rotation:25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to('.show-15-right-hand',{rotation:-25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to(['.show-15-left-hand','.show-15-right-hand'],{y:0,duration:0.5,ease:'bounce.out'},'-=0.5')
      .to('.show-15-left-hand',{rotation:-15},'-=0.5')
      .to('.show-15-right-hand',{rotation:15},'-=0.5')
      .from('.show-15-star-2',{scale:0,y:100,ease:'power4.out',duration:0.6},'-=0.5')
      .to('.show-15-man',{xPercent:210,duration:0.5})
      
      .to('.show-15-body',{y:-50,ease:'power4.in',duration:0.5})
      .to('.show-15-body',{y:0,ease:'bounce.out',duration:0.5})
      .to('.show-15-left-hand',{rotation:25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to('.show-15-right-hand',{rotation:-25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to(['.show-15-left-hand','.show-15-right-hand'],{y:0,duration:0.5,ease:'bounce.out'},'-=0.5')
      .to('.show-15-left-hand',{rotation:-15},'-=0.5')
      .to('.show-15-right-hand',{rotation:15},'-=0.5')
      .from('.show-15-star-3',{scale:0,y:100,ease:'power4.out',duration:0.6},'-=0.5')
      .to('.show-15-man',{xPercent:315,duration:0.5})

      .to('.show-15-body',{y:-50,ease:'power4.in',duration:0.5})
      .to('.show-15-body',{y:0,ease:'bounce.out',duration:0.5})
      .to('.show-15-left-hand',{rotation:25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to('.show-15-right-hand',{rotation:-25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to(['.show-15-left-hand','.show-15-right-hand'],{y:0,duration:0.5,ease:'bounce.out'},'-=0.5')
      .to('.show-15-left-hand',{rotation:-15},'-=0.5')
      .to('.show-15-right-hand',{rotation:15},'-=0.5')
      .from('.show-15-star-4',{scale:0,y:100,ease:'power4.out',duration:0.6},'-=0.5')
      .to('.show-15-man',{xPercent:420,duration:0.5})
      
      .to('.show-15-body',{y:-50,ease:'power4.in',duration:0.5})
      .to('.show-15-body',{y:0,ease:'bounce.out',duration:0.5})
      .to('.show-15-left-hand',{rotation:25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to('.show-15-right-hand',{rotation:-25,y:-40,duration:0.5,ease:'power4.out'},'-=0.7')
      .to(['.show-15-left-hand','.show-15-right-hand'],{y:0,duration:0.5,ease:'bounce.out'},'-=0.5')
      .to('.show-15-left-hand',{rotation:-15},'-=0.5')
      .to('.show-15-right-hand',{rotation:15},'-=0.5')
      .from('.show-15-star-5',{scale:0,y:100,ease:'power4.out',duration:0.6},'-=0.5')
      .fromTo('.show-15-badge',{opacity:0,scale:1.5},{scale:1,rotation:15,opacity:1})
      .to('.show-15',{...slideOutDefaults},'+=0.8')
      .to('.show-14',{...conversationDefaults},'-=1')
    return tl;
  };

  function deptRD(){
    let tl = gsap.timeline();
    let b = new CreateBubbles('.show-17-bubble-emitter');
    tl
      .from('.show-16',{...conversationDefaults})
      .from('.show-17',{...slideInDefaults,duration:0.7})
      .from('.show-17-researcher',{...slideInDefaults,ease:'back.inOut',duration:0.7},'-=0.7')
      .from('.show-17-glass',{
        y:'100vh',
        ease:'bounce.out',
        duration:0.6,
        onComplete:function(){
          b.bubble({timeout:500})
        }
      })
      .from('.show-17-face-red',{
        opacity:0,
        onComplete:function(){
          b.bubble({timeout:600})
        }
      },'+=0.8')
      .from('.show-17-face-dark',{
        opacity:0,
      },'+=1')
      .fromTo('.show-17-product',{opacity:0,y:'100vh'},{
        opacity:1,
        x:function(idx,tg,tgs){
          return ++idx*50;
        },
        y:0,
        stagger:0.3,
        ease:'Power4.out'
      })
      .to('.show-17',{...slideOutDefaults},'+=0.8')
      .to('.show-16',{...conversationDefaults},'-=1')
    return tl;
  };

  function deptHR(){
    let tl = gsap.timeline();
    tl
      .from('.show-18',{...conversationDefaults})
      .from('.show-19',{...slideInDefaults})
      .from('.show-19-lady',{x:-250,opacity:0,duration:0.6})
      .from('.show-19-man',{x:250,opacity:0},'-=0.6')
      .from(['.show-19-card-1','.show-19-card-2','.show-19-card-3'],{...conversationDefaults,stagger:0.4})
      .to('.show-19',{...slideOutDefaults},'+=0.8')
      .to('.show-18',{...conversationDefaults},'-=1')
    return tl;
  };

  function deptSupplyChain(){
    let tl = gsap.timeline();
    tl
      .from('.show-20',{...conversationDefaults})
      .from('.show-21',{...slideInDefaults})
      .from('.show-21-parcel-2',{scale:2,opacity:0})
      .from('.show-21-shelf',{opacity:0},'-=0.2')
      .set('.show-21-parcel-2',{opacity:0})
      .to('.show-21-shelf',{scale:0.7,yPercent:15,xPercent:-30,duration:1.5})
      .from('.show-21-warehouse',{opacity:0},'-=0.8')
      .to('.show-21-shelf',{opacity:0},'-=0.2')
      .to('.show-21-plane',{
        keyframes:[
          {x:180,rotation:-10,y:-30},
          {x:370,rotation:-2,y:-30},
          {x:500,rotation:5,y:-20},
          {x:700,rotation:10,y:-20},
          {x:1500,y:-20,duration:1.4}
        ]
      })
      .fromTo('.show-21-parcel-1',{scale:0,x:370,y:0},{scale:1,x:400,y:450,rotation:10,duration:2,ease:'Power3.out'},'-=2.4')
      .to('.show-21-truck',{x:-530,duration:1.5})
      .to('.show-21-parcel-1',{y:370,ease:'bounce.out',duration:0.6})
      .to(['.show-21-parcel-1'],{x:-150,duration:1.6})
      .to('.show-21-truck',{x:-1100,duration:1.6},'-=1.6')
      .to('.show-21',{...slideOutDefaults,duration:0.7},'+=1')
      .to('.show-20',{...conversationDefaults,duration:0.7},'-=0.7')
    return tl;
  };

  function deptFinance(){
    let tl = gsap.timeline();
    tl
      .from('.show-22',{...conversationDefaults,duration:0.7})
      .from('.show-23',{...slideInDefaults,duration:0.7})
      .to(['.show-23-knee-bent','.show-23-cash'],{y:-200,duration:0.4,ease:'Power1.out'})
      .set(['.show-23-cash'],{opacity:1})
      .to('.show-23-cash-1',{
        keyframes:[
          {x:-100,y:-205,duration:0.3,ease:'Power1.in'},
          {x:-110,y:-150,duration:0.2},
          {x:-125,y:-50,duration:0.3},
          {x:-130,y:230,duration:0.5}
        ]
      })
      .to('.show-23-cash-2',{
        keyframes:[
          {x:100,y:-205,duration:0.3,ease:'Power1.in'},
          {x:110,y:-150,duration:0.2},
          {x:125,y:-50,duration:0.3},
          {x:130,y:240,duration:0.5}
        ]
      },'-=1.3')
      .to('.show-23-cash-3',{
        keyframes:[
          {x:-128,y:-230,duration:0.3,ease:'Power1.in'},
          {x:-140,y:-190,duration:0.2},
          {x:-175,y:-100,duration:0.4},
          {x:-190,y:230,duration:0.4}
        ]
      },'-=1.3')
      .to('.show-23-cash-4',{
        keyframes:[
          {x:-50,y:-205,duration:0.3,ease:'Power1.in'},
          {x:-80,y:-100,duration:0.2},
          {x:-105,y:-20,duration:0.3},
          {x:-110,y:240,duration:0.5}
        ]
      },'-=1.3')
      .to('.show-23-knee-bent',{y:0,duration:0.5,ease:'bounce.out'},'-=1.3')
      .set('.show-23-knee-bent',{opacity:0})
      .set('.show-23-man-w-cash',{opacity:1})
      .to('.show-23-cash',{opacity:0})
      .from('.show-23-coins-1',{opacity:0,x:600,duration:0.6})
      .from('.show-23-coins-2',{opacity:0,x:-600,duration:0.6},'-=0.6')
      .to('.show-23',{...slideOutDefaults,duration:0.7},'+=0.8')
      .to('.show-22',{...conversationDefaults,duration:0.7},'-=0.7')
    return tl;
  };

  function boss(){
    let tl = gsap.timeline();
    let b = new CreateBubbles('.show-25-bubble-emitter',{
      dotSizeMin:60,
      dotSizeMax:90,
      dotBackground:['url(./imgs/heart-1.svg)','url(./imgs/heart-2.svg)','url(./imgs/heart-3.svg)'],
      dotXRange:[-180,180],
      dotYRange:[-700,-300],
      dotDisappearDuration:3
    });
    tl
      .from('.show-24',{...conversationDefaults})
      .from('.show-25',{
        ...slideInDefaults,
        onStart:function(){
          b.bubble();
        }
      })
      .to('.show-25',{...slideOutDefaults,duration:0.6},'+=2.8')
      .to('.show-24',{
        ...conversationDefaults,
        duration:0.6,
        onComplete:function(){
          ratJoggingTl.pause();
          ratJoggingTl.kill();
          let runningRat = document.querySelector('.running-rat');
          runningRat.style.transition = 'all .6s';
          runningRat.style.opacity = 0;
          let controlPanel = document.querySelector('.btn-wrapper');
          controlPanel.style.transition = 'all .6s';
          controlPanel.style.opacity = 0;
          namesClutter().play();
        }
      },'-=0.6')
    return tl;
  };

  function happyNewYear(){
    let tl = gsap.timeline();
    const repeatConfig =  {
      repeat:120,
      repeatDelay:0,
      yoyo:true,
      ease:'none'
    }
    gsap.registerPlugin(MotionPathPlugin);
    gsap.to('.new-year-circle',{rotation:360,duration:5,ease:'none',repeat:20,repeatDelay:0});
    gsap.to('.new-year-flower',{rotation:-360,duration:5,ease:'none',repeat:20,repeatDelay:0});
    gsap.to('.new-year-cloud-l',{
      ...repeatConfig,
      motionPath:{
        path:[{xPercent:15,y:'-13vh'},{xPercent:0,y:'6vh'},{xPercent:-20,y:0}]
      },
      duration:10
    });
    gsap.to('.new-year-cloud-m',{
      ...repeatConfig,
      motionPath:{
        path:[{xPercent:10,y:'-5vh'},{xPercent:-2,y:'-2vh'},{xPercent:-14,y:'1vh'}]
      },
      duration:8,
    });
    gsap.to('.new-year-cloud-r',{
      ...repeatConfig,
      motionPath:{
        path:[{xPercent:-18}]
      },
      duration:4
    });
    gsap.to('.new-year-lantern-1',{
      ...repeatConfig,
      keyframes:[{rotation:3},{rotation:-4}],
      duration:4
    });
    gsap.to('.new-year-lantern-2',{
      ...repeatConfig,
      keyframes:[{rotation:2},{rotation:-2}],
      duration:6
    });
    tl
      .from('.standing-rat',{scale:3,opacity:0,duration:1})
      .to('.standing-rat',{opacity:1,duration:1},'-=1')
      .from('.waving-rat-left',{rotation:-40,duration:0.8})
      .from('.waving-rat-right',{rotation:60,duration:0.8},'-=0.8')
      .from(['.new-year-background','.new-year-circle'],{...conversationDefaults})
      .from(['.new-year-flower','.new-year-cloud-l','.new-year-cloud-m','.new-year-cloud-r','.new-year-lantern-1','.new-year-lantern-2'],{...conversationDefaults,stagger:0.3})
      .to('.waving-rat',{opacity:0,duration:0.8},'+=0.5')
      .to('.standing-rat',{scale:1.7,xPercent:175,y:'36vh'},'-=0.8')
      .to('.floor',{scale:0,duration:0.5},'-=1')
    return tl;
  };

  function namesClutter(){
    generateWordCloud();
    let tl = gsap.timeline();
    function checkIfCompleted(){
      if(ifCompleted){
        tl
          .resume()
          .to('.floor',{scale:0,duration:1},'-=0.3')
          .set('.names-clutter-all',{opacity:1})
          .set('.names-clutter-all .wordItem',{opacity:0})
          .to(['.names-clutter-all .wordItem'],{
            opacity:1,
            ease:'power3.out',
            stagger:0.05,
          })
          .to('.names-clutter-all .wordItem',{
            x:function(){
              return gsap.utils.random(-300,300)
            },
            y:function(){
              return gsap.utils.random(-200,200)
            },
            ease:'power4.in',duration:2
          })
          .to('.names-clutter-all',{opacity:0,duration:0.4})
          .to('.names-clutter-all .wordItem',{scale:0,duration:0.4},'-=0.4')
          .to(['.names-clutter-zero','.names-clutter-one'],{opacity:1,duration:0.5,ease:'power3.in'},'-=0.5')
          .from(['.names-clutter-zero .wordItem','.names-clutter-one .wordItem'],{scale:1.5,ease:'bounce.out',duration:0.5},'-=0.3')
        window.cancelAnimationFrame(animTimer);
        return;
      }else{
        tl
          .set('.names-clutter',{opacity:0})
          .pause();
      }
      animTimer = window.requestAnimationFrame(checkIfCompleted);
    }
    let animTimer = window.requestAnimationFrame(checkIfCompleted);
    return tl;
  };

  function generateWordCloud(){
    let allNames = document.getElementsByClassName('names-clutter');
    for(let n=0; n<allNames.length;n++){
      allNames[n].style.opacity = 0;
    }
    WordCloud(document.getElementById('word-cloud-all'),{
      list:nameList,
      color:function(word,weight,fontSize,distance,theta){
        return gsap.utils.random(["#FAC057", "#EE5A91", "#4b3d3f"]);
      },
      classes:'wordItem',
      rotateRatio:0.75,
      shape:'square',
      ellipticity:0.7,
      gridSize:28
    });
    WordCloud(document.getElementById('word-cloud-zero'), { 
      list: nameList.slice(0,Math.floor(nameList.length/2)),
      color:function(word, weight, fontSize, distance, theta){
        return gsap.utils.random(["#FAC057", "#EE5A91", "#4b3d3f"]);
      },
      classes:'wordItem',
      rotateRatio:0,
      shape:'circle',
      ellipticity:1.5
    });
    WordCloud(document.getElementById('word-cloud-one'),{
      list:nameList.slice(Math.floor(nameList.length/2)),
      color:function(){
        return gsap.utils.random(["#FAC057", "#EE5A91", "#4b3d3f"]);
      },
      classes:'wordItem',
      rotateRatio:0,
      shape:'square',
      ellipticity:3
    });
    let allCloud = generateMutationObserver('word-cloud-all',nameList.length);
    allCloud.observe();
  };

  function generateMutationObserver(id,limit){
    const targetNode = document.getElementById(id);
    
    const config = { attributes: false, childList: true, subtree: true };
    let n = 0;

    const callback = function(mutationsList, observer) {
      n++;
      if(limit && n===limit){
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                ifCompleted = true;
            }
        }
      }
    };

    const observer = new MutationObserver(callback);

    return {
      observe:function(){
        observer.observe(targetNode,config);
      },
      disconnect:observer.disconnect,
      target:targetNode,
      config:config
    }
  }

  function controlPanel(){
    let play = document.getElementById('playBtn'),
        pause = document.getElementById('pauseBtn');
    pause.addEventListener('click',function(){
      backgroundTl.pause();
      ratTl.pause();
    });
    play.addEventListener('click',function(){
      backgroundTl.resume();
      ratTl.resume();
    });
  };

  controlPanel();

  ratTl
    .add(ratJoggingTl)
  ;
  backgroundTl
    .add(opening())
    .add(deptMkSalesCenter())
    .add(deptSales())
    .add(deptMktg())
    .add(deptCustomerService())
    .add(deptQuality())
    .add(deptRD())
    .add(deptHR())
    .add(deptSupplyChain())
    .add(deptFinance())  
    .add(deptTech())
    .add(boss())
    // .add(namesClutter())
  ;
}()