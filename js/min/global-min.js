$(document).ready(function(){$("#me-li").click(function(){console.log("me click"),$("html, body").animate({scrollTop:$("#Me").offset().top-70},700,"easeInOutExpo")}),$("#contact-li").click(function(){console.log("me click"),$("html, body").animate({scrollTop:$("#Contact").offset().top-70},700,"easeInOutExpo")}),$("#projects-li").click(function(){console.log("me click"),$("html, body").animate({scrollTop:$("#Projects").offset().top-70},700,"easeInOutExpo")}),$(".logo").click(function(){$("html, body").animate({scrollTop:$("#Top").offset().top-70},700,"easeInOutExpo")}),$(".thumb").click(function(o){o.preventDefault(),$this=$(this),i=$this.data("num"),$("#ProjectDetail .grid").load($this.data("url"),function(){$("html, body").delay(100).animate({scrollTop:$("#ProjectDetail .grid").offset().top-50},700,"easeInOutExpo")})})});