jQuery(document).ready(function(e){e(".grcs_text_slider").each(function(){var a=e(this);if(a.hasClass("unsync")||"kenburns"!=background_mode)if(a.hasClass("unsync")||"slider"!=background_mode)s=a.attr("data-timeout"),t=a.attr("data-duration");else var s=background_slider_timeout,t=background_slider_transition_duration;else var s=background_kenburns_timeout,t=background_kenburns_transition_duration;a.cycle({delay:0,slides:".slide",log:!1,autoHeight:"container",fx:a.attr("data-fx"),timeout:parseInt(s),speed:parseInt(t)})}),e(".grcs_social_icons").each(function(){e(this).find("li>a,li>div").tooltip({container:"body",delay:{show:150,hide:0}})}),e(".grcs_social_icons").click(function(){e(this).find("li>a,li>div").tooltip("hide")}),e(".grcs_contact_form").each(function(){var a=e(this);e(this).submit(function(s){s.preventDefault();var t=e(this).serializeArray();t.push({name:"formide",value:a.find(".form-generate-unique").data("form-ide")}),t.push({name:"formmSuccess",value:a.find(".form-generate-unique").data("form-msuccess")}),t.push({name:"formmInvalid",value:a.find(".form-generate-unique").data("form-minvalid")}),t.push({name:"formmEmpty",value:a.find(".form-generate-unique").data("form-mempty")}),e.ajax({type:"POST",url:a.attr("action"),data:t,dataType:"json",success:function(e){a.hasClass("error")&&(a.find("input").removeClass("active"),a.find("textarea").removeClass("active")),setTimeout(function(){""!==e.nameMessage&&(a.find("input[name=name]").addClass("active").attr("placeholder",e.nameMessage),a.addClass("error")),""!==e.emailMessage&&(a.find("input[name=email]").addClass("active").val("").attr("placeholder",e.emailMessage),a.addClass("error")),""!==e.messageMessage&&(a.find("textarea[name=message]").addClass("active").attr("placeholder",e.messageMessage),a.addClass("error"))},50),""===e.nameMessage&&""===e.emailMessage&&""===e.messageMessage&&(a.removeClass("error").addClass("success"),a.find("textarea, input").attr("placeholder",""),a.find("textarea").attr("placeholder",e.succesMessage),a.find("textarea, input, button").val("").prop("disabled",!0))}})})}),e(".grcs_subscribe_form").each(function(){var a=e(this);e(this).submit(function(s){s.preventDefault();var t=e(this).serializeArray();t.push({name:"formMo",value:a.find(".form-generate-unique").data("form-mo")}),t.push({name:"formmSuccess",value:a.find(".form-generate-unique").data("form-msuccess")}),t.push({name:"formmInvalid",value:a.find(".form-generate-unique").data("form-minvalid")}),t.push({name:"formmEmpty",value:a.find(".form-generate-unique").data("form-mempty")}),t.push({name:"formmFail",value:a.find(".form-generate-unique").data("form-mfail")}),t.push({name:"formMake",value:a.find(".form-generate-unique").data("form-make")}),t.push({name:"formMaid",value:a.find(".form-generate-unique").data("form-maid")}),t.push({name:"formMaopt",value:a.find(".form-generate-unique").data("form-maopt")}),t.push({name:"formFilo",value:a.find(".form-generate-unique").data("form-filo")}),e.ajax({type:"POST",url:a.attr("action"),data:t,dataType:"json",success:function(e){0===e.valid?(a.addClass("error"),a.find("input").attr("placeholder",e.message),a.find("input").val("")):(a.find("input").val("").prop("disabled",!0),a.find("button").val("").prop("disabled",!0),a.find("input").attr("placeholder",e.message),a.removeClass("error").addClass("success"))}})})}),e(".grcs_overlay").each(function(){var a,s=e(this),t=e(this).find(".grcs_overlay_section"),n=e(".go-up"),o=0,r=!1,i=e(".go-down"),l=e(".grcs_hero_container .front-content"),c=(l.find(".container-mid"),t.length),d=0;function u(){if(d==c||!0===blockProcess)return!1;blockProcess=!0,s.addClass("movement-in-progress"),0===d&&(prevent_class_removal=!1,e(".grcs_hero_container .container-mid").addClass("block-overflow"),l.addClass("overlay-active"),l.find(".enter-animation").addClass("ivis"),l.find(".enter-animation").css("transition","all 1s .5s"),e(".grcs_youtube_controls").removeClass("show"),e(".grcs_audio_player_toggle").removeClass("show"),e("#cycle").cycle("pause"),setTimeout(function(){s.addClass("open")},200)),0==r?d+=1:(d=o,r=!1),t.removeClass("active"),a=t.eq(d-1),setTimeout(function(){a.addClass("active"),f(),setTimeout(function(){n.addClass("active"),setTimeout(function(){blockProcess=!1,s.removeClass("movement-in-progress")},800)},400)},1e3)}function m(){if(0===d||!0===blockProcess)return!1;blockProcess=!0,s.addClass("movement-in-progress"),0==r?d-=1:(d=o,r=!1),t.removeClass("active"),a=t.eq(d-1),setTimeout(function(){c>1&&a.addClass("active"),f(),setTimeout(function(){blockProcess=!1,s.removeClass("movement-in-progress")},800)},800),0===d&&(n.removeClass("active"),setTimeout(function(){prevent_class_removal=!0,l.removeClass("overlay-active"),l.find(".enter-animation").removeClass("ivis"),l.find(".enter-animation").css("transition","all 1s .2s"),setTimeout(function(){e(".grcs_youtube_controls").addClass("show"),e(".grcs_audio_player_toggle").addClass("show")},200),setTimeout(function(){1==prevent_class_removal&&e(".grcs_hero_container .container-mid").removeClass("block-overflow")},1e3),setTimeout(function(){e("#cycle").cycle("resume")},1400),s.removeClass("open")},800))}function f(){"yes"===s.data("bullet-nav")&&(e(".grcs_bullet_nav .nav_dots").removeClass("active"),e(".grcs_bullet_nav .nav_dots").eq(d).addClass("active"))}isMobile.any()&&(c=1,e(".grcs_social_icons li .go-down").parent().remove()),"yes"!==s.data("bullet-nav")||isMobile.any()||function(){for(e("body").append('<div class="grcs_bullet_nav"></div>'),t=0;t<c+1;t++)e(".grcs_bullet_nav").append('<div class="nav_dots"></div>');if("yes"===s.data("bullet-nav-titles")){e(".grcs_bullet_nav .nav_dots").eq(0).attr("title","Home");for(var a=e(".grcs_overlay .grcs_overlay_section").length,t=0;a>t;t++){var n=e(".grcs_overlay .grcs_overlay_section").eq(t).data("name");e(".grcs_bullet_nav .nav_dots").eq(t+1).attr("title",n)}e(".grcs_bullet_nav .nav_dots").tooltip({placement:"left"})}f(),e(".grcs_bullet_nav .nav_dots").click(function(){(o=e(".grcs_bullet_nav .nav_dots").index(this))!=d&&(o<d?(r=!0,m()):(r=!0,u()))})}(),i.click(function(){u()}),n.click(function(){m()}),"yes"!=s.attr("data-mouse-control")&&(e("html").on("DOMMouseScroll mousewheel",function(e){(e.originalEvent.wheelDelta||-1*e.originalEvent.detail)/120<0&&u()}),e("html").on("DOMMouseScroll mousewheel",function(e){(e.originalEvent.wheelDelta||-1*e.originalEvent.detail)/120>0&&m()})),"yes"!=s.attr("data-arrow-control")&&e(document).keydown(function(e){switch(e.which){case 38:m();break;case 40:u();break;default:return}e.preventDefault()})})});