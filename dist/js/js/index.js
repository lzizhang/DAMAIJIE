"use strict";function page(){new Header,new ScrollBtn,new Nav(1),new Footer}new page;var mySwiper=new Swiper(".swiper-container",{autoplay:!0,loop:!0,speed:3e3,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,i){return'<span class="'+i+'">'+(t+1)+"</span>"}},effect:"fade"}),load=(mySwiper=new Swiper(".swiper-container2",{autoplay:!0,loop:!0,speed:1e3,slidesPerView:4,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),{obj:$(document),newest:[$(".newest").offset().top,!0],INTERNATIONAL:[$(".INTERNATIONAL").offset().top,!0],LADY:[$(".LADY").offset().top,!0],GENTLEMAN:[$(".GENTLEMAN").offset().top,!0],CHILDREN:[$(".CHILDREN").offset().top,!0],iH:$("body").height(),init:function(){this.obj.scroll($.proxy(this.autoLoad,this))},autoLoad:function(){this.obj.scrollTop()+this.iH>this.newest[0]&&this.newest[1]&&(this.newest[1]=!1,new Load("newest")),this.obj.scrollTop()+this.iH>this.INTERNATIONAL[0]&&this.INTERNATIONAL[1]&&(this.INTERNATIONAL[1]=!1,new Load("INTERNATIONAL")),this.obj.scrollTop()+this.iH>this.LADY[0]&&this.LADY[1]&&(this.LADY[1]=!1,new Load("LADY")),this.obj.scrollTop()+this.iH>this.GENTLEMAN[0]&&this.GENTLEMAN[1]&&(this.GENTLEMAN[1]=!1,new Load("GENTLEMAN")),this.obj.scrollTop()+this.iH>this.CHILDREN[0]&&this.CHILDREN[1]&&(this.CHILDREN[1]=!1,new Load("CHILDREN"))}});function Load(t){this.a=t,this.list=$("."+this.a+" ul"),this.init()}load.init(),$.extend(Load.prototype,{init:function(){this.load()},load:function(){var i=this;$.getJSON("../json/list.json",function(t){i.show(t)})},show:function(t){var i="";if("newest"==this.a)for(var s=0;s<t[this.a].length;s++)i+='<li>\n\t\t\t\t\t\t<a href="particulars.html?class='+this.a+"&id="+t[this.a][s].id+'" title="'+t[this.a][s].title+'"><img  src="'+t[this.a][s].img[0]+'"></a>\n\t\t\t\t\t\t<b>NEW</b>\n\t\t\t\t\t\t<span>¥ <b>'+t[this.a][s].price+"</b></span>\n\t\t\t\t\t</li>";else for(s=0;s<t[this.a].length;s++)i+='<li>\n\t\t\t\t\t\t<a href="particulars.html?class='+this.a+"&id="+t[this.a][s].id+'" title="'+t[this.a][s].title+'"><img src="'+t[this.a][s].img[0]+'"></a>\n\t\t\t\t\t\t<span>¥ <b>'+t[this.a][s].price+"</b></span>\n\t\t\t\t\t</li>";this.list.append(i)}});