function tab_login(s,e){var n,o,t;for(o=document.getElementsByClassName("tabcontent"),n=0;n<o.length;n++)o[n].style.display="none";for(t=document.getElementsByClassName("tablinks"),n=0;n<t.length;n++)t[n].className=t[n].className.replace(" active","");document.getElementById(e).style.display="block",s.currentTarget.className+=" active"}$("[data-fancybox]").fancybox({}),$(document).ready(function(){$(".learn-more").on("click","a",function(s){fullpage_api.moveSectionDown()})}),$(window).scroll(function(){var s=$(this).scrollTop();s>20?$(".topbar-wrap").addClass("active"):$(".topbar-wrap").removeClass("active")}),$(".login-btn").click(function(){$("#login-popup").css("display","block"),$(".create-btn-tab").removeClass("active"),$(".login-btn-tab").addClass("active"),$("#create-popup").css("display","none"),$("#reset").css("display","none"),$(".tab").css("display","block"),$("#menu").removeClass("active_menu"),$(".topnav").removeClass("active")}),$(".sign_up-btn").click(function(){$("#create-popup").css("display","block"),$(".login-btn-tab").removeClass("active"),$(".create-btn-tab").addClass("active"),$("#login-popup").css("display","none"),$("#reset").css("display","none"),$(".tab").css("display","block")}),$(".cant_login").click(function(){$("#reset").css("display","block"),$("#create-popup").css("display","none"),$("#login-popup").css("display","none"),$(".tab").css("display","none")}),$("#reset > .back").click(function(){$("#reset").css("display","none"),$("#login-popup").css("display","block"),$(".tab").css("display","block")}),$(".fd_1").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd1").removeClass("d-none")}),$(".fd_2").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd2").removeClass("d-none")}),$(".fd_3").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd3").removeClass("d-none")}),$(".fd_4").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd4").removeClass("d-none")}),$(".er_1").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er1").removeClass("d-none")}),$(".er_2").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er2").removeClass("d-none")}),$(".er_3").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er3").removeClass("d-none")}),$(".er_4").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er4").removeClass("d-none")}),$(".back").on("click touchend",function(){$(".demo_fd").removeClass("d-none"),$(".demo_er").removeClass("d-none"),$(".fd1").addClass("d-none"),$(".fd2").addClass("d-none"),$(".fd3").addClass("d-none"),$(".fd4").addClass("d-none"),$(".er1").addClass("d-none"),$(".er2").addClass("d-none"),$(".er3").addClass("d-none"),$(".er4").addClass("d-none")}),$(".menu").on("touch click",function(){$("#menu").toggleClass("active_menu"),$(".topnav").toggleClass("active"),$("a.menu").toggleClass("active")}),jQuery(window).scroll(function(){var s=$(".link");s.each(function(s,e){if($(window).width()>560)var n=$(e).offset().top-100,o=n+$(e).height(),t=$(window).scrollTop()+100,a=$(e).attr("id");else var n=$(e).offset().top,o=n+$(e).height(),t=$(window).scrollTop(),a=$(e).attr("id");t>n&&t<o&&($(".vertical-nav > ul > li.active").removeClass("active"),$('a[href="#'+a+'"]').parent("li").addClass("active"))})}),$(document).ready(function(){$("#docs").on("click","a",function(s){s.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top-100;$("body,html").animate({scrollTop:n},800)})}),$(function(){$(".hide-show").show(),$(".hide-show span").addClass("show"),$(".hide-show span").click(function(){$(this).hasClass("show")?($(this).text("Hide"),$(this).parent().siblings(".password").attr("type","text"),$(this).removeClass("show")):($(this).text("Show"),$(this).parent().siblings(".password").attr("type","password"),$(this).addClass("show"))}),$("button.login").on("click",function(){$(".hide-show span").text("Show").addClass("show"),$(".hide-show").parent().find(".password").attr("type","password")})}),$('input[type="text"], input[type="password"], input[type="email"]').focus(function(){$(this).siblings("span").css("display","none"),$(this).css("padding","15px"),$(this).siblings(".hide-show").css("top","15px"),$(this).parent(":before").css("top","20px")}),$('input[type="text"], input[type="password"], input[type="email"]').blur(function(){$(this).val()?($(this).siblings("span").css("display","none"),$(this).css("padding","15px"),$(this).siblings(".hide-show").css("top","15px"),$(this).parent(":before").css("top","20px")):($(this).siblings("span").css("display","block"),$(this).css("padding","0 0 10px 10px"),$(this).siblings(".hide-show").css("top","24px"))}),$(".info").text("i"),$(".inp-wr").hasClass("error")?$(".error").children(".info").text("!"):$(".error").children(".info").text("i");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsidGFiX2xvZ2luIiwiZXZ0IiwidGFiIiwiaSIsInRhYmNvbnRlbnQiLCJ0YWJsaW5rcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRUYXJnZXQiLCIkIiwiZmFuY3lib3giLCJyZWFkeSIsIm9uIiwiZXZlbnQiLCJmdWxscGFnZV9hcGkiLCJtb3ZlU2VjdGlvbkRvd24iLCJ3aW5kb3ciLCJzY3JvbGwiLCJ3U2Nyb2xsIiwidGhpcyIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsImNzcyIsInRvZ2dsZUNsYXNzIiwialF1ZXJ5IiwiJHNlY3Rpb25zIiwiZWFjaCIsImVsIiwid2lkdGgiLCJ0b3AiLCJvZmZzZXQiLCJib3R0b20iLCJoZWlnaHQiLCJpZCIsImF0dHIiLCJwYXJlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJzaG93IiwiaGFzQ2xhc3MiLCJ0ZXh0Iiwic2libGluZ3MiLCJmaW5kIiwiZm9jdXMiLCJibHVyIiwidmFsIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQXdHRSxRQUFTQSxXQUFVQyxFQUFLQyxHQUN0QixHQUFJQyxHQUFHQyxFQUFZQyxDQUVuQixLQURBRCxFQUFhRSxTQUFTQyx1QkFBdUIsY0FDeENKLEVBQUksRUFBR0EsRUFBSUMsRUFBV0ksT0FBUUwsSUFDakNDLEVBQVdELEdBQUdNLE1BQU1DLFFBQVUsTUFHaEMsS0FEQUwsRUFBV0MsU0FBU0MsdUJBQXVCLFlBQ3RDSixFQUFJLEVBQUdBLEVBQUlFLEVBQVNHLE9BQVFMLElBQy9CRSxFQUFTRixHQUFHUSxVQUFZTixFQUFTRixHQUFHUSxVQUFVQyxRQUFRLFVBQVcsR0FFbkVOLFVBQVNPLGVBQWVYLEdBQUtPLE1BQU1DLFFBQVUsUUFDN0NU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b3VyY2VzQ29udGVudCI6WyIvLyBGYW5jeWJveCBwb3B1cFxyXG4gICQoJ1tkYXRhLWZhbmN5Ym94XScpLmZhbmN5Ym94KHtcclxuICAgIC8vdG91Y2g6IGZhbHNlXHJcbiAgfSk7XHJcblxyXG4vLyBTbG93IHNjcm9sbCBvbiBMZWFybiBtb3JlXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoXCIubGVhcm4tbW9yZVwiKS5vbihcImNsaWNrXCIsXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBmdWxscGFnZV9hcGkubW92ZVNlY3Rpb25Eb3duKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbi8vIEFkZCBmaXhlZCB0b3BiYXIgd2hlbiBzY3JvbGxcclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICBpZiAod1Njcm9sbCA+IDIwKSB7XHJcbiAgICAgICQoJy50b3BiYXItd3JhcCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAkKCcudG9wYmFyLXdyYXAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4vLyBHbyB0byB0YWIgbW9kYWwgKGxvZ2luLCBzaWduLXVwLCByZXNldClcclxuICAgICQoXCIubG9naW4tYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJyNsb2dpbi1wb3B1cCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoJy5jcmVhdGUtYnRuLXRhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmxvZ2luLWJ0bi10YWInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJyNjcmVhdGUtcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQoJyNyZXNldCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnLnRhYicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoJyNtZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9tZW51Jyk7XHJcbiAgICAgICQoJy50b3BuYXYnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnNpZ25fdXAtYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJyNjcmVhdGUtcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAkKCcubG9naW4tYnRuLXRhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmNyZWF0ZS1idG4tdGFiJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcjbG9naW4tcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQoJyNyZXNldCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnLnRhYicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLmNhbnRfbG9naW5cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJCgnI3Jlc2V0JykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCgnI2NyZWF0ZS1wb3B1cCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnI2xvZ2luLXBvcHVwJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAkKCcudGFiJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNyZXNldCA+IC5iYWNrXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKFwiI3Jlc2V0XCIpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XHJcbiAgICAgICQoJyNsb2dpbi1wb3B1cCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoXCIudGFiXCIpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG4vLyBEZW1vIG1vZGFsc1xyXG4gICQoXCIuZmRfMVwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQxJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZmRfMlwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZmRfM1wiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZmRfNFwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQ0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZXJfMVwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZXInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIxJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZXJfMlwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZXInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZXJfM1wiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZXInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZXJfNFwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZXInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXI0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuYmFja1wiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZGVtb19lcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDEnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmZkMycpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIxJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmVyMicpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5lcjMnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXI0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG5cclxuLy8gVGFicyBsb2dpbiBwb3B1cFxyXG4gIGZ1bmN0aW9uIHRhYl9sb2dpbihldnQsIHRhYikge1xyXG4gICAgdmFyIGksIHRhYmNvbnRlbnQsIHRhYmxpbmtzO1xyXG4gICAgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJjb250ZW50XCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGFiY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICB0YWJsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsaW5rc1wiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0YWJsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0YWJsaW5rc1tpXS5jbGFzc05hbWUgPSB0YWJsaW5rc1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBldnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgfVxyXG5cclxuLy8gTWVudSBkYXNoYm9hcmRcclxuICAkKCcubWVudScpLm9uKCd0b3VjaCBjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcjbWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmVfbWVudScpO1xyXG4gICAgJCgnLnRvcG5hdicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2EubWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbi8vIFNsb3cgc2Nyb2xsIG9uIGRvY3MgIFxyXG4gIC8vIGFkZCBhY3RpdmUgY2xhc3MgdG8gbmF2XHJcbiAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgJHNlY3Rpb25zID0gJCgnLmxpbmsnKTtcclxuICAgICRzZWN0aW9ucy5lYWNoKGZ1bmN0aW9uKGksZWwpe1xyXG4gICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+IDU2MCl7XHJcbiAgICAgICAgdmFyIHRvcCAgPSAkKGVsKS5vZmZzZXQoKS50b3AgLSAxMDA7XHJcbiAgICAgICAgdmFyIGJvdHRvbSA9ICB0b3AgKyQoZWwpLmhlaWdodCgpO1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAxMDA7XHJcbiAgICAgICAgdmFyIGlkID0gJChlbCkuYXR0cignaWQnKTtcclxuICAgICAgfSBlbHNle1xyXG4gICAgICAgIHZhciB0b3AgID0gJChlbCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIHZhciBib3R0b20gPSAgdG9wICskKGVsKS5oZWlnaHQoKTtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHZhciBpZCA9ICQoZWwpLmF0dHIoJ2lkJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoIHNjcm9sbCA+IHRvcCAmJiBzY3JvbGwgPCBib3R0b20pe1xyXG4gICAgICAgICQoJy52ZXJ0aWNhbC1uYXYgPiB1bCA+IGxpLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdhW2hyZWY9XCIjJytpZCsnXCJdJykucGFyZW50KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KTtcclxuICAvLyBzbG93IHNjcm9sbFxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKFwiI2RvY3NcIikub24oXCJjbGlja1wiLFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3AgLSAxMDA7XHJcbiAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgODAwKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuLy8gU2hvdyBoaWRkZW4gcGFzc3dvcmRcclxuICAkKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuaGlkZS1zaG93Jykuc2hvdygpO1xyXG4gICAgJCgnLmhpZGUtc2hvdyBzcGFuJykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgIFxyXG4gICAgJCgnLmhpZGUtc2hvdyBzcGFuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgaWYoICQodGhpcykuaGFzQ2xhc3MoJ3Nob3cnKSApIHtcclxuICAgICAgICAkKHRoaXMpLnRleHQoJ0hpZGUnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcucGFzc3dvcmQnKS5hdHRyKCd0eXBlJywndGV4dCcpO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgJCh0aGlzKS50ZXh0KCdTaG93Jyk7XHJcbiAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5wYXNzd29yZCcpLmF0dHIoJ3R5cGUnLCdwYXNzd29yZCcpO1xyXG4gICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCdidXR0b24ubG9naW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuaGlkZS1zaG93IHNwYW4nKS50ZXh0KCdTaG93JykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgJCgnLmhpZGUtc2hvdycpLnBhcmVudCgpLmZpbmQoJy5wYXNzd29yZCcpLmF0dHIoJ3R5cGUnLCdwYXNzd29yZCcpO1xyXG4gICAgfSk7IFxyXG4gIH0pO1xyXG5cclxuLy8gSGlkZSBuYW1lIHdoZW4gaW5wdXQgZm9jdXNcclxuICAkKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5mb2N1cyhmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykuc2libGluZ3MoJ3NwYW4nKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAkKHRoaXMpLmNzcygncGFkZGluZycsJzE1cHgnKTtcclxuICAgICQodGhpcykuc2libGluZ3MoJy5oaWRlLXNob3cnKS5jc3MoJ3RvcCcsJzE1cHgnKTtcclxuICAgICQodGhpcykucGFyZW50KFwiOmJlZm9yZVwiKS5jc3MoJ3RvcCcsJzIwcHgnKTtcclxuICB9KTtcclxuICAkKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5ibHVyKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoICQodGhpcykudmFsKCkgKSB7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoJ3NwYW4nKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQodGhpcykuY3NzKCdwYWRkaW5nJywnMTVweCcpO1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuaGlkZS1zaG93JykuY3NzKCd0b3AnLCcxNXB4Jyk7XHJcbiAgICAgICQodGhpcykucGFyZW50KFwiOmJlZm9yZVwiKS5jc3MoJ3RvcCcsJzIwcHgnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdzcGFuJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCh0aGlzKS5jc3MoJ3BhZGRpbmcnLCcwIDAgMTBweCAxMHB4Jyk7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoJy5oaWRlLXNob3cnKS5jc3MoJ3RvcCcsJzI0cHgnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAvL2luZm8gd2hlbiBlcnJvciBhbmQgZWxzZVxyXG4gICQoXCIuaW5mb1wiKS50ZXh0KFwiaVwiKTtcclxuICBpZigkKFwiLmlucC13clwiKS5oYXNDbGFzcyhcImVycm9yXCIpKXtcclxuICAgICQoXCIuZXJyb3JcIikuY2hpbGRyZW4oXCIuaW5mb1wiKS50ZXh0KFwiIVwiKTtcclxuICB9IGVsc2V7XHJcbiAgICAkKFwiLmVycm9yXCIpLmNoaWxkcmVuKFwiLmluZm9cIikudGV4dChcImlcIik7XHJcbiAgfVxyXG5cclxuXHJcbi8vIERldmVsb3BlZCBieSBuaWtvYWxkckBnbWFpbC5jb20gKDIwMTkpIl19
