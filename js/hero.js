jQuery(document).ready(function(t){"use strict";if(0!=t(".grcs_background_content").length)switch(background_mode){case"image":t(".bg-image").vegas({slides:[{src:background_image_image}],delay:10,transitionDuration:10,timer:!1});break;case"slider":t(".grcs_background_content .bg-image").vegas({slides:background_slider_slides,transition:background_slider_transition,delay:background_slider_timeout,transitionDuration:background_slider_transition_duration,firstTransitionDuration:1,timer:!1,walk:function(e,n){t(".grcs_text_slider").cycle("next")}});break;case"kenburns":t(".grcs_background_content .bg-image").vegas({slides:background_kenburns_slides,transition:background_kenburns_transition,delay:background_kenburns_timeout,transitionDuration:background_kenburns_transition_duration,firstTransitionDuration:1,timer:!1,animation:background_kenburns_effect,walk:function(e,n){t(".grcs_text_slider").cycle("next")}});break;case"youtube":!function(){if(jQuery.browser.mobile)t(".grcs_background_content .bg-image").vegas({slides:[{src:background_youtube_fallback_image}],delay:100,transitionDuration:100,timer:!1});else{1==background_youtube_controls&&t("body").append('<div class="grcs_youtube_controls"><i class="volume-button fa fa-volume-up"></i> <i class="pause-button ti-control-pause"></i></div>'),1==background_youtube_sound?background_youtube_sound=0:(background_youtube_sound=1,t(".grcs_youtube_controls .volume-button").removeClass("fa-volume-up").addClass("fa-volume-off")),t(".grcs_background_content .bg-video").append('<div id="bg-youtube" class="player showOn-video-bg"></div>'),t("#bg-youtube").attr("data-property",'{videoURL:background_youtube_url,containment:".bg-video",autoPlay:true,mute:background_youtube_sound,startAt: background_youtube_start_point,stopAt: background_youtube_end_point,opacity:1,stopMovieOnBlur:false,showControls:false,loop:true}'),t(".player").mb_YTPlayer(),t(".grcs_youtube_controls .volume-button").click(function(){t("#bg-youtube").hasClass("isMuted")?(t("#bg-youtube").YTPUnmute(),t(".grcs_youtube_controls .volume-button").removeClass("fa-volume-off").addClass("fa-volume-up")):(t("#bg-youtube").YTPMute(),t(".grcs_youtube_controls .volume-button").removeClass("fa-volume-up").addClass("fa-volume-off"))});var e=!0;t("#bg-youtube").on("YTPPause",function(){e=!1}),t("#bg-youtube").on("YTPPlay",function(){e=!0}),t(".grcs_youtube_controls .pause-button").click(function(){1==e?(t("#bg-youtube").YTPPause(),t(".grcs_youtube_controls .pause-button").removeClass("ti-control-pause").addClass("ti-control-play")):(t("#bg-youtube").YTPPlay(),t(".grcs_youtube_controls .pause-button").removeClass("ti-control-play").addClass("ti-control-pause"))}),t("#bg-youtube").on("YTPReady",function(e){setTimeout(function(){t("#bg-youtube").YTPPlay()},500)})}}();break;case"color":t(".grcs_background_content .bg-color").css("background",background_color_color),t(".grcs_background_content .bg-color").css("opacity","1"),t(".grcs_background_content .bg-pattern").remove(),t(".grcs_background_content .bg-overlay").remove();break;case"gradient":!function(){function e(t){t=t.replace("#","");var e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]}var n=new Array(e(background_gradient_color_1),e(background_gradient_color_2),e(background_gradient_color_3),e(background_gradient_color_4),e(background_gradient_color_5),e(background_gradient_color_6)),a=0,i=t(".grcs_background_content .bg-color"),o=[0,1,2,3],r=parseFloat(background_gradient_speed)/4e4;setInterval(function(){var t=n[o[0]],e=n[o[1]],s=n[o[2]],c=n[o[3]],h=1-a,l="rgb("+Math.round(h*t[0]+a*e[0])+","+Math.round(h*t[1]+a*e[1])+","+Math.round(h*t[2]+a*e[2])+")",d="rgb("+Math.round(h*s[0]+a*c[0])+","+Math.round(h*s[1]+a*c[1])+","+Math.round(h*s[2]+a*c[2])+")";i.css({background:"-webkit-gradient(linear, left top, right top, from("+l+"), to("+d+"))"}).css({background:"-moz-linear-gradient(left, "+l+" 0%, "+d+" 100%)"}),(a+=r)>=1&&(a%=1,o[0]=o[1],o[2]=o[3],o[1]=(o[1]+Math.floor(1+Math.random()*(n.length-1)))%n.length,o[3]=(o[3]+Math.floor(1+Math.random()*(n.length-1)))%n.length)},1),t(".grcs_background_content .bg-color").css("opacity","1"),t(".grcs_background_content .bg-pattern").remove(),t(".grcs_background_content .bg-overlay").remove()}();break;case"sphere":!function(){t(".grcs_background_content .bg-overlay").remove(),t(".grcs_background_content .bg-pattern").remove();var e,n,a,i=t(".grcs_background_content .level-1").width(),o=t(".grcs_background_content .level-1").height(),r=0,s=0,c=i/2,h=o/2;function l(){var n=t(".grcs_background_content .level-1").width(),i=t(".grcs_background_content .level-1").height();h=i/2,e.aspect=n/i,e.updateProjectionMatrix(),a.setSize(n,i)}function d(t){r=t.clientX-c,s=t.clientY-h}!function(){var t,r;t=document.createElement("div"),document.getElementById("canvas").appendChild(t),(e=new THREE.PerspectiveCamera(75,i/o,1,1e4)).position.z=10*background_sphere_distance,n=new THREE.Scene,(a=new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio),a.setSize(i,o),t.appendChild(a.domElement),a.setClearColor(background_sphere_background_color);for(var s=2*Math.PI,c=new THREE.SpriteCanvasMaterial({color:background_sphere_dot_color,program:function(t){t.beginPath(),t.arc(0,0,.5,0,s,!0),t.fill()}}),h=0;h<1e3;h++)(r=new THREE.Sprite(c)).position.x=2*Math.random()-1,r.position.y=2*Math.random()-1,r.position.z=2*Math.random()-1,r.position.normalize(),r.position.multiplyScalar(10*Math.random()+450),r.scale.multiplyScalar(2),n.add(r);for(var h=0;h<300;h++){var u=new THREE.Geometry,g=new THREE.Vector3(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1);g.normalize(),g.multiplyScalar(450),u.vertices.push(g);var _=g.clone();_.multiplyScalar(.3*Math.random()+1),u.vertices.push(_);var m=new THREE.Line(u,new THREE.LineBasicMaterial({color:background_sphere_line_color,opacity:Math.random()}));n.add(m)}document.addEventListener("mousemove",d,!1),window.addEventListener("resize",l,!1)}(),function t(){requestAnimationFrame(t),e.position.x+=.05*(r-e.position.x),e.position.y+=.05*(200-s-e.position.y),e.lookAt(n.position),n.rotation.y+=background_sphere_rotation_speed/1e4,a.render(n,e)}()}();break;case"waves":!function(){t(".grcs_background_content .bg-overlay").remove(),t(".grcs_background_content .bg-pattern").remove();var e,n,a,i,o,r,s=background_waves_dot_spacing,c=background_waves_dot_amount_x,h=background_waves_dot_amount_y,l=t(".grcs_background_content .level-1").width(),d=t(".grcs_background_content .level-1").height(),u=0,g=0,_=0,m=l/2,b=d/2;function v(){var e=t(".grcs_background_content .level-1").width(),a=t(".grcs_background_content .level-1").height();m=e/2,b=a/2,n.aspect=e/a,n.updateProjectionMatrix(),i.setSize(e,a)}function f(t){g=t.clientX-m,_=t.clientY-b}!function(){e=document.createElement("div"),document.getElementById("canvas").appendChild(e),(n=new THREE.PerspectiveCamera(75,l/d,1,1e4)).position.z=100*background_waves_distance,a=new THREE.Scene,o=new Array;for(var t=2*Math.PI,u=new THREE.SpriteCanvasMaterial({color:background_waves_dot_color,program:function(e){e.beginPath(),e.arc(0,0,.5,0,t,!0),e.fill()}}),g=0,_=0;_<c;_++)for(var m=0;m<h;m++)(r=o[g++]=new THREE.Sprite(u)).position.x=_*s-c*s/2,r.position.z=m*s-h*s/2,a.add(r);(i=new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio),i.setSize(l,d),e.appendChild(i.domElement),i.setClearColor(background_waves_background_color),document.addEventListener("mousemove",f,!1),window.addEventListener("resize",v,!1)}(),function t(){requestAnimationFrame(t),function(){n.position.x+=.05*(g-n.position.x),n.position.y+=.05*(-_-n.position.y),n.lookAt(a.position);for(var t=0,e=0;e<c;e++)for(var s=0;s<h;s++)(r=o[t++]).position.y=Math.sin(.3*(e+u))*background_waves_dot_intensity*5+Math.sin(.5*(s+u))*background_waves_dot_intensity*5,r.scale.x=r.scale.y=(Math.sin(.3*(e+u))+1)*(background_waves_dot_expansion/1.25)+(Math.sin(.5*(s+u))+1)*(background_waves_dot_expansion/1.25);i.render(a,n),u+=.1}()}()}();break;case"mesh":!function(){var e,n,a,i,o,r,s,c,h,l,d,u,g,_,m;function b(t){this.x=t.x,this.y=t.y,this.xBase=this.x,this.yBase=this.y,this.offset=v(0,1e3),this.duration=v(20,60),this.range=v(5,5),this.dir=v(0,1)>.5?1:-1,this.rad=v(2,4)}function v(t,e){return Math.random()*(e-t)+t}function f(){a=t(".grcs_background_content .level-1").width(),i=t(".grcs_background_content .level-1").height(),e.width=a,e.height=i,l.x=a/2,l.y=i/2,d=!1,u=0,g=0,_.length=0,m=0,function(){for(var t=-o/2;t<a+o;t+=o){u++;for(var e=-o/2;e<i+o;e+=o)t==-o/2&&g++,_.push(new b({x:~~(t+v(-r,r)),y:~~(e+v(-r,r))}))}}(),n.strokeStyle=background_mesh_line_color,n.lineWidth=2}function p(){requestAnimationFrame(p),d||(l.x=a/2+90*Math.cos(m/40),l.y=i/2+90*Math.sin(m/40)),_.forEach(function(t){t.step()}),m++,function(){n.clearRect(0,0,a,i),n.beginPath();for(var t=0;t<u;t++)for(var e=0;e<g;e++)s=_[t*g+e],c=t===u-1?null:_[(t+1)*g+e],h=e===g-1?null:_[t*g+e+1],c&&(n.moveTo(s.x,s.y),n.lineTo(c.x,c.y)),h&&(n.moveTo(s.x,s.y),n.lineTo(h.x,h.y));n.stroke(),n.fillStyle="red",_.forEach(function(t){n.save(),n.beginPath(),n.translate(t.x,t.y),n.rotate(Math.PI/4),n.rect(0,0,0,0),n.fill(),n.stroke(),n.restore()});var o=n.createRadialGradient(l.x,l.y,0,l.x,l.y,background_mesh_spotlight_size);o.addColorStop(0,"hsla(0, 0%, 0%, 0.1)"),o.addColorStop(1,"hsla(0, 0%, 0%, 0.96)"),n.fillStyle=o,n.fillRect(0,0,a,i)}()}b.prototype.step=function(){this.x=this.xBase+this.dir*Math.sin((m+this.offset)/this.duration)*this.range,this.y=this.yBase+this.dir*Math.cos((m+this.offset)/this.duration)*this.range;var t,e,n,a,i=(e=l,n=(t=this).x-e.x,a=t.y-e.y,Math.atan2(a,n));this.x=this.x+100*Math.cos(i),this.y=this.y+100*Math.sin(i)},window.addEventListener("resize",f),window.addEventListener("mousemove",function(t){d=!0,l.x=t.pageX,l.y=t.pageY}),e=document.createElement("canvas"),n=e.getContext("2d"),l={x:0,y:0},_=[],o=parseFloat(background_mesh_line_mesh_size),r=.22*o,document.getElementById("canvas").appendChild(e),f(),p(),t(".grcs_background_content .bg-overlay").remove(),t(".grcs_background_content .bg-pattern").remove()}();break;case"space":t(".grcs_background_content .bg-pattern").remove(),function(t,e,n,a){var i,o,r,s=function(e,n){this.el=e,this.$el=t(e),this.options=n,r=this},c=!1,h=!1;!function(){for(var t=0,n=["ms","moz","webkit","o"],a=0;a<n.length&&!e.requestAnimationFrame;++a)e.requestAnimationFrame=e[n[a]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[n[a]+"CancelAnimationFrame"]||e[n[a]+"CancelRequestAnimationFrame"];e.requestAnimationFrame||(e.requestAnimationFrame=function(n,a){var i=(new Date).getTime(),o=Math.max(0,16-(i-t)),r=e.setTimeout(function(){n(i+o)},o);return t=i+o,r}),e.cancelAnimationFrame||(e.cancelAnimationFrame=function(t){clearTimeout(t)})}(),s.prototype={defaults:{starColor:background_space_star_color,bgColor:background_space_background_color,mouseMove:parseFloat(background_space_mouse_interaction),speed:background_space_star_speed/20,quantity:background_space_star_amount,ratio:background_space_star_amount/2,divclass:"starfield"},resizer:function(){var t=this.star,e=this.context.canvas.width,n=this.context.canvas.height;this.w=this.$el.width(),this.h=this.$el.height(),this.x=Math.round(this.w/2),this.y=Math.round(this.h/2);var a=this.w/e,i=this.h/n;this.context.canvas.width=this.w,this.context.canvas.height=this.h;for(var o=0;o<this.n;o++)this.star[o][0]=t[o][0]*a,this.star[o][1]=t[o][1]*i,this.star[o][3]=this.x+this.star[o][0]/this.star[o][2]*this.star_ratio,this.star[o][4]=this.y+this.star[o][1]/this.star[o][2]*this.star_ratio;r.context.fillStyle=r.settings.bgColor,this.context.strokeStyle=this.settings.starColor},init:function(){this.settings=t.extend({},this.defaults,this.options),n.location.href,this.n=parseInt(this.settings.quantity),this.flag=!0,this.test=!0,this.w=0,this.h=0,this.x=0,this.y=0,this.z=0,this.star_color_ratio=0,this.star_x_save=0,this.star_y_save=0,this.star_ratio=this.settings.ratio,this.star_speed=this.settings.speed,this.star_speed_save=0,this.star=new Array(this.n),this.color=this.settings.starColor,this.opacity=.1,this.cursor_x=0,this.cursor_y=0,this.mouse_x=0,this.mouse_y=0,this.canvas_x=0,this.canvas_y=0,this.canvas_w=0,this.canvas_h=0,this.fps=this.settings.fps,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/),this.orientationSupport=void 0!==e.DeviceOrientationEvent,this.portrait=null,r.w=r.$el.width(),r.h=r.$el.height(),r.initW=r.w,r.initH=r.h,r.portrait=r.w<r.h,r.wrapper=t("<canvas />").addClass(r.settings.divclass),r.wrapper.appendTo(r.el),r.starz=t("canvas",r.el),r.starz[0].getContext&&(r.context=r.starz[0].getContext("2d"),h=!0),r.context.canvas.width=r.w,r.context.canvas.height=r.h,function(){if(h){r.x=Math.round(r.w/2),r.y=Math.round(r.h/2),r.z=(r.w+r.h)/2,r.star_color_ratio=1/r.z,r.cursor_x=r.x,r.cursor_y=r.y;for(var t=0;t<r.n;t++)r.star[t]=new Array(5),r.star[t][0]=Math.random()*r.w*2-2*r.x,r.star[t][1]=Math.random()*r.h*2-2*r.y,r.star[t][2]=Math.round(Math.random()*r.z),r.star[t][3]=0,r.star[t][4]=0;r.context.fillStyle=r.settings.bgColor,r.context.strokeStyle=r.settings.starColor}}(),c=!0},anim:function(){this.mouse_x=this.cursor_x-this.x,this.mouse_y=this.cursor_y-this.y,this.context.fillRect(0,0,this.w,this.h);for(var t=0;t<this.n;t++)this.test=!0,this.star_x_save=this.star[t][3],this.star_y_save=this.star[t][4],this.star[t][0]+=this.mouse_x>>4,this.star[t][0]>this.x<<1&&(this.star[t][0]-=this.w<<1,this.test=!1),this.star[t][0]<-this.x<<1&&(this.star[t][0]+=this.w<<1,this.test=!1),this.star[t][1]+=this.mouse_y>>4,this.star[t][1]>this.y<<1&&(this.star[t][1]-=this.h<<1,this.test=!1),this.star[t][1]<-this.y<<1&&(this.star[t][1]+=this.h<<1,this.test=!1),this.star[t][2]-=this.star_speed,this.star[t][2]>this.z&&(this.star[t][2]-=this.z,this.test=!1),this.star[t][2]<0&&(this.star[t][2]+=this.z,this.test=!1),this.star[t][3]=this.x+this.star[t][0]/this.star[t][2]*this.star_ratio,this.star[t][4]=this.y+this.star[t][1]/this.star[t][2]*this.star_ratio,this.star_x_save>0&&this.star_x_save<this.w&&this.star_y_save>0&&this.star_y_save<this.h&&this.test&&(this.context.lineWidth=2*(1-this.star_color_ratio*this.star[t][2]),this.context.beginPath(),this.context.moveTo(this.star_x_save,this.star_y_save),this.context.lineTo(this.star[t][3],this.star[t][4]),this.context.stroke(),this.context.closePath())},loop:function(){this.anim(),o=e.requestAnimationFrame(function(){r.loop()})},move:function(){var t=n.documentElement;this.orientationSupport&&!this.desktop?e.addEventListener("deviceorientation",function(t){if(null!==t.beta&&null!==t.gamma){var e=t.gamma,n=t.beta;r.portrait||(e=-1*t.beta,n=t.gamma),r.cursor_x=r.w/2+5*e,r.cursor_y=r.h/2+5*n}},!1):e.addEventListener("mousemove",function(e){r.cursor_x=e.pageX||e.clientX+t.scrollLeft-t.clientLeft,r.cursor_y=e.pageY||e.clientY+t.scrollTop-t.clientTop},!1)},stop:function(){e.cancelAnimationFrame(o),i=!1},start:function(){return c||(c=!0,this.init()),i||(i=!0,this.loop()),e.addEventListener("resize",function(){r.resizer()},!1),e.addEventListener("orientati onchange",function(){r.resizer()},!1),this.settings.mouseMove&&this.move(),this}},s.defaults=s.prototype.defaults,t.fn.starfield=function(t){return this.each(function(){new s(this,t).start()})},e.Starfield=s}(jQuery,window,document),t("#canvas").starfield();break;case"abstract":!function(){t(".grcs_background_content .bg-pattern").remove(),t(".grcs_background_content .bg-overlay").remove();var e,n,a,i,o,r,s,c=setInterval(function(){t(".grcs_background_content .level-1 #canvas").offset().top<=50&&(t(".grcs_background_content .level-1 #canvas").css({WebkitTransition:"all .4s",transition:"all .4s"}),t(".grcs_background_content .level-1 #canvas").css("background",background_abstract_background_color),clearInterval(c))},50),h={width:background_abstract_shader_width/100,height:1.8,depth:60,segments:9,slices:8,xRange:background_abstract_width_expansion,yRange:.1,zRange:1,ambient:"#666666",diffuse:"#fff",speed:background_abstract_move_speed/1e4},l={count:2,xyScalar:1,zOffset:100,ambient:"#fff",diffuse:"#b3b3b3",speed:2e-4,gravity:500,dampening:.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:!0,draw:!1,bounds:FSS.Vector3.create(),step:FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1))},d={renderer:"canvas"},u=Date.now(),g=FSS.Vector3.create(),_=FSS.Vector3.create(),m=document.getElementById("canvas"),b=document.getElementById("canvas");function v(){var t,e;for(a.remove(i),n.clear(),o=new FSS.Plane(h.width*n.width,h.height*n.height,h.segments,h.slices),r=new FSS.Material(h.ambient,h.diffuse),i=new FSS.Mesh(o,r),a.add(i),t=o.vertices.length-1;t>=0;t--)(e=o.vertices[t]).anchor=FSS.Vector3.clone(e.position),e.step=FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1)),e.time=Math.randomInRange(0,Math.PIM2)}function f(t,e){n.setSize(t,e),FSS.Vector3.set(g,n.halfWidth,n.halfHeight),v()}function p(){e=Date.now()-u,function(){var t,n,i,r,s,c,d,u=h.depth/2;for(FSS.Vector3.copy(l.bounds,g),FSS.Vector3.multiplyScalar(l.bounds,l.xyScalar),FSS.Vector3.setZ(_,l.zOffset),l.autopilot&&(t=Math.sin(l.step[0]*e*l.speed),n=Math.cos(l.step[1]*e*l.speed),FSS.Vector3.set(_,l.bounds[0]*t,l.bounds[1]*n,l.zOffset)),r=a.lights.length-1;r>=0;r--){s=a.lights[r],FSS.Vector3.setZ(s.position,l.zOffset);var m=Math.clamp(FSS.Vector3.distanceSquared(s.position,_),l.minDistance,l.maxDistance),b=l.gravity*s.mass/m;FSS.Vector3.subtractVectors(s.force,_,s.position),FSS.Vector3.normalise(s.force),FSS.Vector3.multiplyScalar(s.force,b),FSS.Vector3.set(s.acceleration),FSS.Vector3.add(s.acceleration,s.force),FSS.Vector3.add(s.velocity,s.acceleration),FSS.Vector3.multiplyScalar(s.velocity,l.dampening),FSS.Vector3.limit(s.velocity,l.minLimit,l.maxLimit),FSS.Vector3.add(s.position,s.velocity)}for(c=o.vertices.length-1;c>=0;c--)d=o.vertices[c],t=Math.sin(d.time+d.step[0]*e*h.speed),n=Math.cos(d.time+d.step[1]*e*h.speed),i=Math.sin(d.time+d.step[2]*e*h.speed),FSS.Vector3.set(d.position,h.xRange*o.segmentWidth*t,h.yRange*o.sliceHeight*n,h.zRange*u*i-u),FSS.Vector3.add(d.position,d.anchor);o.dirty=!0}(),y(),requestAnimationFrame(p)}function y(){var t,e,i,o;if(n.render(a),l.draw)for(t=a.lights.length-1;t>=0;t--)e=(o=a.lights[t]).position[0],i=o.position[1],n.context.lineWidth=.5,n.context.beginPath(),n.context.arc(e,i,10,0,Math.PIM2),n.context.strokeStyle=o.ambientHex,n.context.stroke(),n.context.beginPath(),n.context.arc(e,i,4,0,Math.PIM2),n.context.fillStyle=o.diffuseHex,n.context.fill()}function k(t){f(m.offsetWidth,m.offsetHeight),y()}if(s=new FSS.CanvasRenderer,d.renderer,n&&b.removeChild(n.element),(n=s).setSize(m.offsetWidth,m.offsetHeight),b.appendChild(n.element),a=new FSS.Scene,v(),function(){var t,e;for(t=a.lights.length-1;t>=0;t--)e=a.lights[t],a.remove(e);for(n.clear(),t=0;t<l.count;t++)(e=new FSS.Light(l.ambient,l.diffuse)).ambientHex=e.ambient.format(),e.diffuseHex=e.diffuse.format(),a.add(e),e.mass=Math.randomInRange(.5,1),e.velocity=FSS.Vector3.create(),e.acceleration=FSS.Vector3.create(),e.force=FSS.Vector3.create(),e.ring=document.createElementNS(FSS.SVGNS,"circle"),e.ring.setAttributeNS(null,"stroke",e.ambientHex),e.ring.setAttributeNS(null,"stroke-width","0.5"),e.ring.setAttributeNS(null,"fill","none"),e.ring.setAttributeNS(null,"r","10"),e.core=document.createElementNS(FSS.SVGNS,"circle"),e.core.setAttributeNS(null,"fill",e.diffuseHex),e.core.setAttributeNS(null,"r","4")}(),window.addEventListener("resize",k),f(m.offsetWidth,m.offsetHeight),p(),canvas.getContext){var w=canvas.getContext("2d"),x=!0;canvas.height=screen.height-60,canvas.width=screen.width+20,initialize(),initialize(),setInterval(function(){for(var t=1;t<=1e3;t++)w.beginPath(),x?(w.moveTo(0,randomize(canvas.height+10)),x=!1):(w.moveTo(randomize(canvas.width+10),0),x=!0),w.lineTo(randomize(canvas.width+50),randomize(canvas.height+50)),w.lineTo(randomize(canvas.width+50),randomize(canvas.height+50)),w.fillStyle=getRndColor(),w.fill()},5e3)}}();break;case"glitch":e="background-image: url('"+background_glitch_image+"')",t(".grcs_background_content .level-2 .bg-image").append('<div class="glitch-img" style="'+e+'"></div>'),t(".grcs_background_content .glitch-img").mgGlitch({destroy:!1,glitch:!0,scale:Boolean(background_glitch_scale_toggle),blend:!0,blendModeType:"hue",glitch1TimeMin:600,glitch1TimeMax:900,glitch2TimeMin:10,glitch2TimeMax:115,zIndexStart:8});break;case"rain":!function(){var e=t("#canvas canvas")[0];if(t("#canvas canvas").css("background",background_rain_background_color),e.width=window.innerWidth,e.height=window.innerHeight,e.getContext){var n=e.getContext("2d"),a=e.width,i=e.height;n.strokeStyle=background_rain_color,n.lineWidth=background_rain_thickness,n.lineCap="round";for(var o=[],r=background_rain_amount,s=0;s<r;s++)o.push({x:Math.random()*a,y:Math.random()*i,l:1*Math.random(),xs:4*Math.random()-4+2,ys:10*Math.random()+10});for(var c=[],h=0;h<r;h++)c[h]=o[h];setInterval(function(){n.clearRect(0,0,a,i);for(var t=0;t<c.length;t++){var e=c[t];n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(e.x+e.l*e.xs,e.y+e.l*e.ys),n.stroke()}!function(){for(var t=0;t<c.length;t++){var e=c[t];e.x+=e.xs,e.y+=e.ys,(e.x>a||e.y>i)&&(e.x=Math.random()*a,e.y=-20)}}()},26)}}();break;case"skyfall":!function(){t("#canvas canvas").attr("id","skyfallCanvas");var e=document.getElementById("skyfallCanvas"),n=e.getContext("2d"),a=e.width=window.innerWidth,i=e.height=window.innerHeight,o="rgba(0, 0, 0, .1)",r=background_skyfall_amount,s=function(t){t=t.replace("#","");var e=parseInt(t,16);return(e>>16&255)+","+(e>>8&255)+","+(255&e)}(background_skyfall_color),c=[];function h(t,e){return Math.random()*(e-t)+t}function l(){}l.prototype={init:function(){this.x=h(0,a),this.y=0,this.color="rgb("+s+")",this.w=2,this.h=1,this.vy=h(4,5),this.vw=3,this.vh=1,this.size=2,this.hit=h(.8*i,.9*i),this.a=1,this.va=.96},draw:function(){this.y>this.hit?(n.beginPath(),n.moveTo(this.x,this.y-this.h/2),n.bezierCurveTo(this.x+this.w/2,this.y-this.h/2,this.x+this.w/2,this.y+this.h/2,this.x,this.y+this.h/2),n.bezierCurveTo(this.x-this.w/2,this.y+this.h/2,this.x-this.w/2,this.y-this.h/2,this.x,this.y-this.h/2),n.strokeStyle="rgba("+s+","+this.a+")",n.stroke(),n.closePath()):(n.fillStyle=this.color,n.fillRect(this.x,this.y,this.size,5*this.size)),this.update()},update:function(){this.y<this.hit?this.y+=this.vy:this.a>.03?(this.w+=this.vw,this.h+=this.vh,this.w>100&&(this.a*=this.va,this.vw*=.98,this.vh*=.98)):this.init()}},window.addEventListener("resize",function(){a=e.width=window.innerWidth,i=e.height=window.innerHeight}),function(){for(var t=0;t<r;t++)setTimeout(function(){var t=new l;t.init(),c.push(t)},200*t)}(),function t(){for(var e in n.fillStyle=o,n.fillRect(0,0,a,i),c)c[e].draw();requestAnimationFrame(t)}()}();break;case"galaxy":!function(){Array.prototype.fill||Object.defineProperty(Array.prototype,"fill",{value:function(t){if(null==this)throw new TypeError("this is null or not defined");for(var e=Object(this),n=e.length>>>0,a=arguments[1]>>0,i=a<0?Math.max(n+a,0):Math.min(a,n),o=arguments[2],r=void 0===o?n:o>>0,s=r<0?Math.max(n+r,0):Math.min(r,n);i<s;)e[i]=t,i++;return e}}),t("#canvas canvas").attr("id","canvasGalaxy");var e=document.getElementById("canvasGalaxy");t=e.getContext("2d");var n=e.height=window.innerHeight,a=e.width=window.innerWidth,i=function(t){t=t.replace("#","");var e=parseInt(t,16);return(e>>16&255)+","+(e>>8&255)+","+(255&e)}(background_galaxy_background_color),o=function(t){return Math.random()*t},r=new Array(background_galaxy_star_amount).fill().map(function(){return{r:o(a),s:o(.01),a:o(2*Math.PI)}});!function e(){t.fillStyle="rgba("+i+",.1)",t.fillRect(0,0,a,n),r.forEach(function(e){e.a+=e.s,t.save(),t.beginPath(),t.translate(a/2,n/2),t.rotate(e.a),t.arc(e.r,e.r,background_galaxy_star_thickness,0,2*Math.PI),t.closePath(),t.fillStyle=background_galaxy_star_color,t.fill(),t.restore()}),requestAnimationFrame(e)}(),window.addEventListener("resize",function(t){a=e.width=window.innerWidth,n=e.height=window.innerHeight})}();break;case"custom":break;default:alert("Error! No background is set or something went wrong"),console.log("Error! No background is set or something went wrong")}var e});