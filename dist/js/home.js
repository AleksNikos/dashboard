function tab_login(e,s){var n,o,t;for(o=document.getElementsByClassName("tabcontent"),n=0;n<o.length;n++)o[n].style.display="none";for(t=document.getElementsByClassName("tablink"),n=0;n<t.length;n++)t[n].className=t[n].className.replace(" active","");document.getElementById(s).style.display="block",e.currentTarget.className+=" active"}function tab_docs(e,s){var n,o,t;for(o=document.getElementsByClassName("tabcontents"),n=0;n<o.length;n++)o[n].style.display="none";for(t=document.getElementsByClassName("tablinks"),n=0;n<t.length;n++)t[n].className=t[n].className.replace(" active","");document.getElementById(s).style.display="block",e.currentTarget.className+=" active"}function response_home(){var e=$(".lines-pulse").width(),s=0,n=e-s-$(".demo").offset().left-10;e<601?(s=600-$(".demo").offset().left-10,$(".lines-pulse").css("left",-s+"px"),n=0):$(".lines-pulse").css("left","0px");var o=.498*e,t=$(".demo_block").height(),a=$(".title_block").height(),i=$(".lines-pulse").offset().top-$(".demo").offset().top-t/2-a-20+o/2;$(".demo").css("padding-left",n+"px"),$(".demo").css("padding-top",i+"px")}$(document).ready(function(){$(".learn-more").on("click","a",function(e){fullpage_api.moveSectionDown()})}),$(window).scroll(function(){var e=$(this).scrollTop();e>20?$(".topbar-wrap").addClass("active"):$(".topbar-wrap").removeClass("active")}),$(".login-btn").click(function(){$("#login-popup").css("display","block"),$(".create-btn-tab").removeClass("active"),$(".login-btn-tab").addClass("active"),$("#create-popup").css("display","none"),$("#reset").css("display","none"),$(".tab").css("display","block"),$("#menu").removeClass("active_menu"),$(".topnav").removeClass("active"),$(".menu").removeClass("active")}),$(".sign_up-btn").click(function(){$("#create-popup").css("display","block"),$(".login-btn-tab").removeClass("active"),$(".create-btn-tab").addClass("active"),$("#login-popup").css("display","none"),$("#reset").css("display","none"),$(".tab").css("display","block")}),$(".cant_login").click(function(){$("#reset").css("display","block"),$("#create-popup").css("display","none"),$("#login-popup").css("display","none"),$(".tab").css("display","none")}),$("#reset > .back").click(function(){$("#reset").css("display","none"),$("#login-popup").css("display","block"),$(".tab").css("display","block")}),$(".fd_1").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd1").removeClass("d-none")}),$(".fd_2").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd2").removeClass("d-none")}),$(".fd_3").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd3").removeClass("d-none")}),$(".fd_4").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd4").removeClass("d-none")}),$(".er_1").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er1").removeClass("d-none")}),$(".er_2").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er2").removeClass("d-none")}),$(".er_3").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er3").removeClass("d-none")}),$(".er_4").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er4").removeClass("d-none")}),$(".back").on("click touchend",function(){$(".demo_fd").removeClass("d-none"),$(".demo_er").removeClass("d-none"),$(".fd1").addClass("d-none"),$(".fd2").addClass("d-none"),$(".fd3").addClass("d-none"),$(".fd4").addClass("d-none"),$(".er1").addClass("d-none"),$(".er2").addClass("d-none"),$(".er3").addClass("d-none"),$(".er4").addClass("d-none")}),$(".menu").on("touch click",function(){$("#menu").toggleClass("active_menu"),$(".topnav").toggleClass("active"),$("a.menu").toggleClass("active")}),$(".topnav").on("click",function(){$(this).removeClass("active"),$("#menu").removeClass("active_menu"),$("a.menu").removeClass("active")}),$(document).ready(function(){$("#docs").on("click","a",function(e){e.preventDefault();var s=$(this).attr("href");if($(window).width()>560)var n=$(s).offset().top-100;else var n=$(s).offset().top-150;$("body,html").animate({scrollTop:n},800)})}),$(function(){$(".hide-show").show(),$(".hide-show span").addClass("show"),$(".hide-show span").click(function(){$(this).hasClass("show")?($(this).text("Hide"),$(this).parent().siblings(".password").attr("type","text"),$(this).removeClass("show")):($(this).text("Show"),$(this).parent().siblings(".password").attr("type","password"),$(this).addClass("show"))}),$("button.login").on("click",function(){$(".hide-show span").text("Show").addClass("show"),$(".hide-show").parent().find(".password").attr("type","password")})});var input=$('input[type="text"], input[type="password"], input[type="email"]');input.each(function(){$(this).attr("data-placeholder",this.placeholder),$(this).bind("focus",function(){this.placeholder=""}),$(this).bind("blur",function(){this.placeholder=$(this).attr("data-placeholder")})}),input.focus(function(){$(this).siblings("span").css("display","inline-block"),$(this).css("padding","0 0 10px 10px"),$(this).siblings(".hide-show").css("top","24px"),$(this).parent(":before").css("top","20px")}),input.blur(function(){$(this).val()?($(this).siblings("span").css("display","inline-block"),$(this).css("padding","0 0 10px 10px"),$(this).siblings(".hide-show").css("top","24px"),$(this).parent(":before").css("top","20px")):($(this).siblings("span").css("display","none"),$(this).css("padding","15px 15px 15px 10px"),$(this).siblings(".hide-show").css("top","15px"))}),$(".info").text("i"),$(".inp-wr").hasClass("error")?$(".error").children(".info").text("!"):$(".error").children(".info").text("i"),$(window).ready(function(){response_home()}),$(window).resize(function(){response_home()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsidGFiX2xvZ2luIiwiZXZ0IiwidGFiIiwiaSIsInRhYmNvbnRlbnQiLCJ0YWJsaW5rIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsImdldEVsZW1lbnRCeUlkIiwiY3VycmVudFRhcmdldCIsInRhYl9kb2NzIiwidGFiY29udGVudHMiLCJ0YWJsaW5rcyIsInJlc3BvbnNlX2hvbWUiLCJsaW5lc193IiwiJCIsIndpZHRoIiwibGluZXNfbGVmdCIsInBhZGRpbmdfbGVmdCIsIm9mZnNldCIsImxlZnQiLCJjc3MiLCJsaW5lc19oIiwiZGVtb19ibG9ja19oIiwiaGVpZ2h0IiwiZGVtb190aXRsZV9ibG9ja19oIiwicGFkZGluZ190b3AiLCJ0b3AiLCJyZWFkeSIsIm9uIiwiZXZlbnQiLCJmdWxscGFnZV9hcGkiLCJtb3ZlU2VjdGlvbkRvd24iLCJ3aW5kb3ciLCJzY3JvbGwiLCJ3U2Nyb2xsIiwidGhpcyIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJpZCIsImF0dHIiLCJhbmltYXRlIiwic2hvdyIsImhhc0NsYXNzIiwidGV4dCIsInBhcmVudCIsInNpYmxpbmdzIiwiZmluZCIsImlucHV0IiwiZWFjaCIsInBsYWNlaG9sZGVyIiwiYmluZCIsImZvY3VzIiwiYmx1ciIsInZhbCIsImNoaWxkcmVuIiwicmVzaXplIl0sIm1hcHBpbmdzIjoiQUFvR0UsUUFBU0EsV0FBVUMsRUFBS0MsR0FDdEIsR0FBSUMsR0FBR0MsRUFBWUMsQ0FFbkIsS0FEQUQsRUFBYUUsU0FBU0MsdUJBQXVCLGNBQ3hDSixFQUFJLEVBQUdBLEVBQUlDLEVBQVdJLE9BQVFMLElBQ2pDQyxFQUFXRCxHQUFHTSxNQUFNQyxRQUFVLE1BR2hDLEtBREFMLEVB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LFNBQVNYLEtBQUssS0FtQnZDakMsRUFBRWtCLFFBQVFMLE1BQU0sV0FBV2Ysa0JBQzNCRSxFQUFFa0IsUUFBUTJCLE9BQU8sV0FBVy9DIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTbG93IHNjcm9sbCBvbiBjbGljayBMZWFybiBtb3JlXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoXCIubGVhcm4tbW9yZVwiKS5vbihcImNsaWNrXCIsXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBmdWxscGFnZV9hcGkubW92ZVNlY3Rpb25Eb3duKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbi8vIEFkZCBmaXhlZCB0b3BiYXIgd2hlbiBzY3JvbGxcclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICBpZiAod1Njcm9sbCA+IDIwKSB7XHJcbiAgICAgICQoJy50b3BiYXItd3JhcCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAkKCcudG9wYmFyLXdyYXAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4vLyBHbyB0byB0YWIgbW9kYWwgKGxvZ2luLCBzaWduLXVwLCByZXNldClcclxuICAkKFwiLmxvZ2luLWJ0blwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAkKCcjbG9naW4tcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAkKCcuY3JlYXRlLWJ0bi10YWInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5sb2dpbi1idG4tdGFiJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcjY3JlYXRlLXBvcHVwJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAkKCcjcmVzZXQnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQoJy50YWInKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAkKCcjbWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmVfbWVudScpO1xyXG4gICAgICAkKCcudG9wbmF2JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAkKFwiLnNpZ25fdXAtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJyNjcmVhdGUtcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAkKCcubG9naW4tYnRuLXRhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmNyZWF0ZS1idG4tdGFiJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcjbG9naW4tcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQoJyNyZXNldCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnLnRhYicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgJChcIi5jYW50X2xvZ2luXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJyNyZXNldCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoJyNjcmVhdGUtcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQoJyNsb2dpbi1wb3B1cCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnLnRhYicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAkKFwiI3Jlc2V0ID4gLmJhY2tcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIjcmVzZXRcIikuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcclxuICAgICAgJCgnI2xvZ2luLXBvcHVwJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJChcIi50YWJcIikuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbi8vIERlbW8gbW9kYWxzXHJcbiAgJChcIi5mZF8xXCIpLm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVtb19mZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDEnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgfSk7XHJcbiAgJChcIi5mZF8yXCIpLm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVtb19mZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDInKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgfSk7XHJcbiAgJChcIi5mZF8zXCIpLm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVtb19mZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDMnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgfSk7XHJcbiAgJChcIi5mZF80XCIpLm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVtb19mZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgfSk7XHJcbiAgJChcIi5lcl8xXCIpLm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVtb19lcicpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5lcjEnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgfSk7XHJcbiAgJChcIi5lcl8yXCIpLm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVtb19lcicpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5lcjInKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgfSk7XHJcbiAgJChcIi5lcl8zXCIpLm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVtb19lcicpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5lcjMnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgfSk7XHJcbiAgJChcIi5lcl80XCIpLm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVtb19lcicpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5lcjQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgfSk7XHJcbiAgJChcIi5iYWNrXCIpLm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVtb19mZCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5kZW1vX2VyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmZkMScpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQzJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmZkNCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5lcjEnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmVyMycpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5lcjQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgfSk7XHJcblxyXG4vLyBUYWJzIGxvZ2luIHBvcHVwXHJcbiAgZnVuY3Rpb24gdGFiX2xvZ2luKGV2dCwgdGFiKSB7XHJcbiAgICB2YXIgaSwgdGFiY29udGVudCwgdGFibGluaztcclxuICAgIHRhYmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiY29udGVudFwiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRhYmNvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgdGFibGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsaW5rXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmxpbmsubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGFibGlua1tpXS5jbGFzc05hbWUgPSB0YWJsaW5rW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuICB9XHJcblxyXG4vLyBNZW51IGRhc2hib2FyZFxyXG4gICQoJy5tZW51Jykub24oJ3RvdWNoIGNsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICQoJyNtZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZV9tZW51Jyk7XHJcbiAgICAkKCcudG9wbmF2JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnYS5tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG4gICQoJy50b3BuYXYnKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAkKCcjbWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmVfbWVudScpO1xyXG4gICAgJCgnYS5tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuLy8gU2xvdyBzY3JvbGwgb24gZG9jc1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKFwiI2RvY3NcIikub24oXCJjbGlja1wiLFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+IDU2MCl7XHJcbiAgICAgICAgdmFyIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcCAtIDEwMDtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdmFyIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcCAtIDE1MDtcclxuICAgICAgfVxyXG4gICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDgwMCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbi8vIFNob3cgaGlkZGVuIHBhc3N3b3JkXHJcbiAgJChmdW5jdGlvbiBoaWRlUGFzcygpe1xyXG4gICAgJCgnLmhpZGUtc2hvdycpLnNob3coKTtcclxuICAgICQoJy5oaWRlLXNob3cgc3BhbicpLmFkZENsYXNzKCdzaG93Jyk7XHJcblxyXG4gICAgJCgnLmhpZGUtc2hvdyBzcGFuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgaWYoICQodGhpcykuaGFzQ2xhc3MoJ3Nob3cnKSApIHtcclxuICAgICAgICAkKHRoaXMpLnRleHQoJ0hpZGUnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcucGFzc3dvcmQnKS5hdHRyKCd0eXBlJywndGV4dCcpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgJCh0aGlzKS50ZXh0KCdTaG93Jyk7XHJcbiAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5wYXNzd29yZCcpLmF0dHIoJ3R5cGUnLCdwYXNzd29yZCcpO1xyXG4gICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2J1dHRvbi5sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5oaWRlLXNob3cgc3BhbicpLnRleHQoJ1Nob3cnKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAkKCcuaGlkZS1zaG93JykucGFyZW50KCkuZmluZCgnLnBhc3N3b3JkJykuYXR0cigndHlwZScsJ3Bhc3N3b3JkJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbi8vIFNob3cgbmFtZSB3aGVuIGlucHV0IGZvY3VzXHJcbiAgdmFyIGlucHV0ID0gJCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XHJcbiAgaW5wdXQuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmF0dHIoXCJkYXRhLXBsYWNlaG9sZGVyXCIsIHRoaXMucGxhY2Vob2xkZXIpO1xyXG4gICAgJCh0aGlzKS5iaW5kKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJyc7XHJcbiAgICB9KTtcclxuICAgICQodGhpcykuYmluZChcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1wbGFjZWhvbGRlclwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGlucHV0LmZvY3VzKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5zaWJsaW5ncygnc3BhbicpLmNzcygnZGlzcGxheScsJ2lubGluZS1ibG9jaycpO1xyXG4gICAgJCh0aGlzKS5jc3MoJ3BhZGRpbmcnLCcwIDAgMTBweCAxMHB4Jyk7XHJcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCcuaGlkZS1zaG93JykuY3NzKCd0b3AnLCcyNHB4Jyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudChcIjpiZWZvcmVcIikuY3NzKCd0b3AnLCcyMHB4Jyk7XHJcbiAgfSk7XHJcbiAgaW5wdXQuYmx1cihmdW5jdGlvbigpIHtcclxuICAgIGlmKCAkKHRoaXMpLnZhbCgpICkge1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdzcGFuJykuY3NzKCdkaXNwbGF5JywnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAgICQodGhpcykuY3NzKCdwYWRkaW5nJywnMCAwIDEwcHggMTBweCcpO1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuaGlkZS1zaG93JykuY3NzKCd0b3AnLCcyNHB4Jyk7XHJcbiAgICAgICQodGhpcykucGFyZW50KFwiOmJlZm9yZVwiKS5jc3MoJ3RvcCcsJzIwcHgnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdzcGFuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAkKHRoaXMpLmNzcygncGFkZGluZycsJzE1cHggMTVweCAxNXB4IDEwcHgnKTtcclxuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmhpZGUtc2hvdycpLmNzcygndG9wJywnMTVweCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuLy9pbmZvIHdoZW4gZXJyb3IgYW5kIGVsc2UgaW4gaW5wdXRzXHJcbiAgJChcIi5pbmZvXCIpLnRleHQoXCJpXCIpO1xyXG4gIGlmKCQoXCIuaW5wLXdyXCIpLmhhc0NsYXNzKFwiZXJyb3JcIikpe1xyXG4gICAgJChcIi5lcnJvclwiKS5jaGlsZHJlbihcIi5pbmZvXCIpLnRleHQoXCIhXCIpO1xyXG4gIH0gZWxzZXtcclxuICAgICQoXCIuZXJyb3JcIikuY2hpbGRyZW4oXCIuaW5mb1wiKS50ZXh0KFwiaVwiKTtcclxuICB9XHJcblxyXG4vLyBUYWJzIGRvY3MgbmF2aWdhdGlvblxyXG4gIGZ1bmN0aW9uIHRhYl9kb2NzKGV2dCwgdGFiKSB7XHJcbiAgICB2YXIgaSwgdGFiY29udGVudHMsIHRhYmxpbmtzO1xyXG4gICAgdGFiY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiY29udGVudHNcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFiY29udGVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGFiY29udGVudHNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFibGlua3NcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGFibGlua3NbaV0uY2xhc3NOYW1lID0gdGFibGlua3NbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gIH1cclxuXHJcbi8vRHluYW1pYyBwb3NpdGlvbiBncmFwaFxyXG4kKHdpbmRvdykucmVhZHkoZnVuY3Rpb24oKXtyZXNwb25zZV9ob21lKCk7fSk7XHJcbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtyZXNwb25zZV9ob21lKCk7fSk7XHJcbmZ1bmN0aW9uIHJlc3BvbnNlX2hvbWUoKSB7XHJcbiAgdmFyIGxpbmVzX3c9JCgnLmxpbmVzLXB1bHNlJykud2lkdGgoKTtcclxuXHJcbiAgdmFyIGxpbmVzX2xlZnQ9MDtcclxuICB2YXIgcGFkZGluZ19sZWZ0ID0gbGluZXNfdy1saW5lc19sZWZ0IC0gJCgnLmRlbW8nKS5vZmZzZXQoKS5sZWZ0IC0gMTA7XHJcbiAgaWYgKGxpbmVzX3cgPCA2MDEpIHtcclxuICAgIGxpbmVzX2xlZnQgPSA2MDAgLSAkKCcuZGVtbycpLm9mZnNldCgpLmxlZnQgLSAxMDtcclxuICAgICQoJy5saW5lcy1wdWxzZScpLmNzcyhcImxlZnRcIiwgLSBsaW5lc19sZWZ0ICsgXCJweFwiKTtcclxuICAgIHBhZGRpbmdfbGVmdCA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJy5saW5lcy1wdWxzZScpLmNzcyhcImxlZnRcIixcIjBweFwiKTtcclxuICB9XHJcbiAgdmFyIGxpbmVzX2ggPSBsaW5lc193ICogMC40OTg7XHJcbiAgdmFyIGRlbW9fYmxvY2tfaCA9ICQoJy5kZW1vX2Jsb2NrJykuaGVpZ2h0KCk7XHJcbiAgdmFyIGRlbW9fdGl0bGVfYmxvY2tfaCA9ICQoJy50aXRsZV9ibG9jaycpLmhlaWdodCgpO1xyXG4gIHZhciBwYWRkaW5nX3RvcCA9ICQoJy5saW5lcy1wdWxzZScpLm9mZnNldCgpLnRvcC0kKCcuZGVtbycpLm9mZnNldCgpLnRvcCAtIChkZW1vX2Jsb2NrX2gpIC8gMi1kZW1vX3RpdGxlX2Jsb2NrX2ggLSAyMCArIGxpbmVzX2ggLyAyO1xyXG5cclxuICAkKCcuZGVtbycpLmNzcyhcInBhZGRpbmctbGVmdFwiLCBwYWRkaW5nX2xlZnQgKyBcInB4XCIpO1xyXG4gICQoJy5kZW1vJykuY3NzKFwicGFkZGluZy10b3BcIiwgcGFkZGluZ190b3AgKyBcInB4XCIpO1xyXG59XHJcbi8vIERldmVsb3BlZCBieSBuaWtvYWxkckBnbWFpbC5jb20gKDIwMTkpIl19
