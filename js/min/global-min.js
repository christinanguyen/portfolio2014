$(document).ready(function(){var t=0,o=["wctl.html","pier2934.html","cahca.html","gt.html","lg.html","hc.html","cd.html","printOther.html"];$("#me-li").click(function(){$("html, body").animate({scrollTop:$("#Me").offset().top-70},700,"easeInOutExpo")}),$("#contact-li").click(function(){$("html, body").animate({scrollTop:$("#Contact").offset().top-70},700,"easeInOutExpo")}),$("#projects-li").click(function(){$("html, body").animate({scrollTop:$("#Projects").offset().top-130},700,"easeInOutExpo")}),$(".logo").click(function(){$("html, body").animate({scrollTop:$("#Top").offset().top-70},700,"easeInOutExpo")}),$(".thumb").click(function(o){o.preventDefault(),$("#ProjectDetail .grid").show(),$this=$(this),t=$this.data("num"),$("#ProjectDetail .grid").load($this.data("url"),function(){$("html, body").animate({scrollTop:$("#ProjectDetail .grid").offset().top-100},700,"easeInOutExpo")}),$(".projectNav").show()}),$(".close").click(function(o){o.preventDefault(),$("html, body").animate({scrollTop:$("#Projects").offset().top-70},700,"easeInOutExpo",function(){$("#ProjectDetail .grid").hide(),$(".projectNav").hide()}),t=0}),$(".next").click(function(e){e.preventDefault(),t>=o.length-1?t=0:t++,setTimeout(function(){$("#ProjectDetail .grid").load(o[t],function(){$("html, body").animate({scrollTop:$("#ProjectDetail .grid").offset().top-100},700,"easeInOutExpo")})},600)}),$(".prev").click(function(e){e.preventDefault(),0>=t?t=o.length-1:t--,setTimeout(function(){$("#ProjectDetail .grid").load(o[t],function(){$("html, body").animate({scrollTop:$("#ProjectDetail .grid").offset().top-100},700,"easeInOutExpo")})},600)})});