function tab_login(s,e){var n,o,a;for(o=document.getElementsByClassName("tabcontent"),n=0;n<o.length;n++)o[n].style.display="none";for(a=document.getElementsByClassName("tablinks"),n=0;n<a.length;n++)a[n].className=a[n].className.replace(" active","");document.getElementById(e).style.display="block",s.currentTarget.className+=" active"}$(document).ready(function(){$(".learn-more").on("click","a",function(s){fullpage_api.moveSectionDown()})}),$(window).scroll(function(){var s=$(this).scrollTop();s>20?$(".topbar-wrap").addClass("active"):$(".topbar-wrap").removeClass("active")}),$(".login-btn").click(function(){$("#login-popup").css("display","block"),$(".create-btn-tab").removeClass("active"),$(".login-btn-tab").addClass("active"),$("#create-popup").css("display","none"),$("#reset").css("display","none"),$(".tab").css("display","block"),$("#menu").removeClass("active_menu"),$(".topnav").removeClass("active"),$(".menu").removeClass("active")}),$(".sign_up-btn").click(function(){$("#create-popup").css("display","block"),$(".login-btn-tab").removeClass("active"),$(".create-btn-tab").addClass("active"),$("#login-popup").css("display","none"),$("#reset").css("display","none"),$(".tab").css("display","block")}),$(".cant_login").click(function(){$("#reset").css("display","block"),$("#create-popup").css("display","none"),$("#login-popup").css("display","none"),$(".tab").css("display","none")}),$("#reset > .back").click(function(){$("#reset").css("display","none"),$("#login-popup").css("display","block"),$(".tab").css("display","block")}),$(".fd_1").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd1").removeClass("d-none")}),$(".fd_2").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd2").removeClass("d-none")}),$(".fd_3").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd3").removeClass("d-none")}),$(".fd_4").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd4").removeClass("d-none")}),$(".er_1").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er1").removeClass("d-none")}),$(".er_2").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er2").removeClass("d-none")}),$(".er_3").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er3").removeClass("d-none")}),$(".er_4").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er4").removeClass("d-none")}),$(".back").on("click touchend",function(){$(".demo_fd").removeClass("d-none"),$(".demo_er").removeClass("d-none"),$(".fd1").addClass("d-none"),$(".fd2").addClass("d-none"),$(".fd3").addClass("d-none"),$(".fd4").addClass("d-none"),$(".er1").addClass("d-none"),$(".er2").addClass("d-none"),$(".er3").addClass("d-none"),$(".er4").addClass("d-none")}),$(".menu").on("touch click",function(){$("#menu").toggleClass("active_menu"),$(".topnav").toggleClass("active"),$("a.menu").toggleClass("active")}),$(function(){$(".hide-show").show(),$(".hide-show span").addClass("show"),$(".hide-show span").click(function(){$(this).hasClass("show")?($(this).text("Hide"),$(this).parent().siblings(".password").attr("type","text"),$(this).removeClass("show")):($(this).text("Show"),$(this).parent().siblings(".password").attr("type","password"),$(this).addClass("show"))}),$("button.login").on("click",function(){$(".hide-show span").text("Show").addClass("show"),$(".hide-show").parent().find(".password").attr("type","password")})});var input=$('input[type="text"], input[type="password"], input[type="email"]');input.focus(function(){$(this).siblings("span").css("display","inline-block"),$(this).css("padding","0 0 10px 10px"),$(this).siblings(".hide-show").css("top","24px"),$(this).parent(":before").css("top","20px")}),input.blur(function(){$(this).val()?($(this).siblings("span").css("display","inline-block"),$(this).css("padding","0 0 10px 10px"),$(this).siblings(".hide-show").css("top","24px"),$(this).parent(":before").css("top","20px")):($(this).siblings("span").css("display","none"),$(this).css("padding","15px 15px 15px 10px"),$(this).siblings(".hide-show").css("top","15px"))}),$(".info").text("i"),$(".inp-wr").hasClass("error")?$(".error").children(".info").text("!"):$(".error").children(".info").text("i");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsidGFiX2xvZ2luIiwiZXZ0IiwidGFiIiwiaSIsInRhYmNvbnRlbnQiLCJ0YWJsaW5rcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRUYXJnZXQiLCIkIiwicmVhZHkiLCJvbiIsImV2ZW50IiwiZnVsbHBhZ2VfYXBpIiwibW92ZVNlY3Rpb25Eb3duIiwid2luZG93Iiwic2Nyb2xsIiwid1Njcm9sbCIsInRoaXMiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY2xpY2siLCJjc3MiLCJ0b2dnbGVDbGFzcyIsInNob3ciLCJoYXNDbGFzcyIsInRleHQiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImF0dHIiLCJmaW5kIiwiaW5wdXQiLCJmb2N1cyIsImJsdXIiLCJ2YWwiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6IkFBb0dFLFFBQVNBLFdBQVVDLEVBQUtDLEdBQ3RCLEdBQUlDLEdBQUdDLEVBQVlDLENBRW5CLEtBREFELEVBQWFFLFNBQVNDLHVCQUF1QixjQUN4Q0osRUFBSSxFQUFHQSxFQUFJQyxFQUFXSSxPQUFRTCxJQUNqQ0MsRUFBV0QsR0FBR00sTUFBTUMsUUFBVSxNQUdoQyxLQURBTCxFQUFXQyxTQUFTQyx1QkFBdUIsWUFDdENKLEVBQUksRUFBR0EsRUFBSUUsRUFBU0csT0FBUUwsSUFDL0JFLEVBQVNGLEdBQUdRLFVBQVlOLEVBQVNGLEdBQUdRLFVBQVVDLFFBQVEsVUFBVyxHQUVuRU4sVUFBU08sZUFBZVgsR0FBS08sTUFBTUMsUUFBVSxRQUM3Q1QsRUFBSWEsY0FBY0gsV0FBYSxVQTlHakNJLEVBQUVULFVBQVVVLE1BQU0sV0FDaEJELEVBQUUsZUFBZUUsR0FBRyxRQUFRLElBQUssU0FBVUMsR0FDekNDLGFBQWFDLHNCQUtqQkwsRUFBRU0s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RUFBRSxXQUFXaUIsU0FBUyxTQUN2QmpCLEVBQUUsVUFBVTJCLFNBQVMsU0FBU1QsS0FBSyxLQUVuQ2xCLEVBQUUsVUFBVTJCLFNBQVMsU0FBU1QsS0FBSyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2xvdyBzY3JvbGwgb24gY2xpY2sgTGVhcm4gbW9yZVxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKFwiLmxlYXJuLW1vcmVcIikub24oXCJjbGlja1wiLFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgZnVsbHBhZ2VfYXBpLm1vdmVTZWN0aW9uRG93bigpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4vLyBBZGQgZml4ZWQgdG9wYmFyIHdoZW4gc2Nyb2xsXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHdTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKHdTY3JvbGwgPiAyMCkge1xyXG4gICAgICAkKCcudG9wYmFyLXdyYXAnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgJCgnLnRvcGJhci13cmFwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuLy8gR28gdG8gdGFiIG1vZGFsIChsb2dpbiwgc2lnbi11cCwgcmVzZXQpXHJcbiAgJChcIi5sb2dpbi1idG5cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJCgnI2xvZ2luLXBvcHVwJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCgnLmNyZWF0ZS1idG4tdGFiJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubG9naW4tYnRuLXRhYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnI2NyZWF0ZS1wb3B1cCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnI3Jlc2V0JykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAkKCcudGFiJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCgnI21lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlX21lbnUnKTtcclxuICAgICAgJCgnLnRvcG5hdicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLm1lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgJChcIi5zaWduX3VwLWJ0blwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAkKCcjY3JlYXRlLXBvcHVwJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCgnLmxvZ2luLWJ0bi10YWInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5jcmVhdGUtYnRuLXRhYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnI2xvZ2luLXBvcHVwJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAkKCcjcmVzZXQnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQoJy50YWInKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICQoXCIuY2FudF9sb2dpblwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAkKCcjcmVzZXQnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAkKCcjY3JlYXRlLXBvcHVwJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAkKCcjbG9naW4tcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQoJy50YWInKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgJChcIiNyZXNldCA+IC5iYWNrXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKFwiI3Jlc2V0XCIpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XHJcbiAgICAgICQoJyNsb2dpbi1wb3B1cCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoXCIudGFiXCIpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG4vLyBEZW1vIG1vZGFsc1xyXG4gICQoXCIuZmRfMVwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQxJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZmRfMlwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZmRfM1wiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZmRfNFwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQ0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZXJfMVwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZXInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIxJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZXJfMlwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZXInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZXJfM1wiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZXInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuZXJfNFwiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZXInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXI0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG4gICQoXCIuYmFja1wiKS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbW9fZmQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZGVtb19lcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDEnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmZkMycpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIxJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmVyMicpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5lcjMnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXI0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gIH0pO1xyXG5cclxuLy8gVGFicyBsb2dpbiBwb3B1cFxyXG4gIGZ1bmN0aW9uIHRhYl9sb2dpbihldnQsIHRhYikge1xyXG4gICAgdmFyIGksIHRhYmNvbnRlbnQsIHRhYmxpbmtzO1xyXG4gICAgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJjb250ZW50XCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGFiY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICB0YWJsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsaW5rc1wiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0YWJsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0YWJsaW5rc1tpXS5jbGFzc05hbWUgPSB0YWJsaW5rc1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBldnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgfVxyXG5cclxuLy8gTWVudSBkYXNoYm9hcmRcclxuICAkKCcubWVudScpLm9uKCd0b3VjaCBjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcjbWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmVfbWVudScpO1xyXG4gICAgJCgnLnRvcG5hdicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJ2EubWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbi8vIFNsb3cgc2Nyb2xsIG9uIGRvY3MgIFxyXG4gIC8vIGFkZCBhY3RpdmUgY2xhc3MgdG8gbmF2XHJcbiAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gIC8vICAgdmFyICRzZWN0aW9ucyA9ICQoJy5saW5rJyk7XHJcbiAgLy8gICAkc2VjdGlvbnMuZWFjaChmdW5jdGlvbihpLGVsKXtcclxuICAvLyAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPiA1NjApe1xyXG4gIC8vICAgICAgIHZhciB0b3AgID0gJChlbCkub2Zmc2V0KCkudG9wIC0gMTAwO1xyXG4gIC8vICAgICAgIHZhciBib3R0b20gPSAgdG9wICskKGVsKS5oZWlnaHQoKTtcclxuICAvLyAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgMTAwO1xyXG4gIC8vICAgICAgIHZhciBpZCA9ICQoZWwpLmF0dHIoJ2lkJyk7XHJcbiAgLy8gICAgIH0gZWxzZXtcclxuICAvLyAgICAgICB2YXIgdG9wICA9ICQoZWwpLm9mZnNldCgpLnRvcDtcclxuICAvLyAgICAgICB2YXIgYm90dG9tID0gIHRvcCArJChlbCkuaGVpZ2h0KCk7XHJcbiAgLy8gICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAvLyAgICAgICB2YXIgaWQgPSAkKGVsKS5hdHRyKCdpZCcpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIGlmKCBzY3JvbGwgPiB0b3AgJiYgc2Nyb2xsIDwgYm90dG9tKXtcclxuICAvLyAgICAgICAkKCcudmVydGljYWwtbmF2ID4gdWwgPiBsaS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgLy8gICAgICAgJCgnYVtocmVmPVwiIycraWQrJ1wiXScpLnBhcmVudCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pXHJcbiAgLy8gfSk7XHJcbiAgLy8gLy8gc2xvdyBzY3JvbGxcclxuICAvLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gIC8vICAgJChcIiNkb2NzXCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAvLyAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wIC0gMTAwO1xyXG4gIC8vICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDgwMCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxuXHJcbi8vIFNob3cgaGlkZGVuIHBhc3N3b3JkXHJcbiAgJChmdW5jdGlvbiBoaWRlUGFzcygpe1xyXG4gICAgJCgnLmhpZGUtc2hvdycpLnNob3coKTtcclxuICAgICQoJy5oaWRlLXNob3cgc3BhbicpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICBcclxuICAgICQoJy5oaWRlLXNob3cgc3BhbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKCAkKHRoaXMpLmhhc0NsYXNzKCdzaG93JykgKSB7XHJcbiAgICAgICAgJCh0aGlzKS50ZXh0KCdIaWRlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnBhc3N3b3JkJykuYXR0cigndHlwZScsJ3RleHQnKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICQodGhpcykudGV4dCgnU2hvdycpO1xyXG4gICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcucGFzc3dvcmQnKS5hdHRyKCd0eXBlJywncGFzc3dvcmQnKTtcclxuICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnYnV0dG9uLmxvZ2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmhpZGUtc2hvdyBzcGFuJykudGV4dCgnU2hvdycpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICQoJy5oaWRlLXNob3cnKS5wYXJlbnQoKS5maW5kKCcucGFzc3dvcmQnKS5hdHRyKCd0eXBlJywncGFzc3dvcmQnKTtcclxuICAgIH0pOyBcclxuICB9KTtcclxuXHJcbi8vIFNob3cgbmFtZSB3aGVuIGlucHV0IGZvY3VzXHJcbiAgdmFyIGlucHV0ID0gJCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XHJcbiAgaW5wdXQuZm9jdXMoZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCdzcGFuJykuY3NzKCdkaXNwbGF5JywnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAkKHRoaXMpLmNzcygncGFkZGluZycsJzAgMCAxMHB4IDEwcHgnKTtcclxuICAgICQodGhpcykuc2libGluZ3MoJy5oaWRlLXNob3cnKS5jc3MoJ3RvcCcsJzI0cHgnKTtcclxuICAgICQodGhpcykucGFyZW50KFwiOmJlZm9yZVwiKS5jc3MoJ3RvcCcsJzIwcHgnKTtcclxuICB9KTtcclxuICBpbnB1dC5ibHVyKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoICQodGhpcykudmFsKCkgKSB7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoJ3NwYW4nKS5jc3MoJ2Rpc3BsYXknLCdpbmxpbmUtYmxvY2snKTtcclxuICAgICAgJCh0aGlzKS5jc3MoJ3BhZGRpbmcnLCcwIDAgMTBweCAxMHB4Jyk7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoJy5oaWRlLXNob3cnKS5jc3MoJ3RvcCcsJzI0cHgnKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoXCI6YmVmb3JlXCIpLmNzcygndG9wJywnMjBweCcpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoJ3NwYW4nKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQodGhpcykuY3NzKCdwYWRkaW5nJywnMTVweCAxNXB4IDE1cHggMTBweCcpO1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuaGlkZS1zaG93JykuY3NzKCd0b3AnLCcxNXB4Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4vL2luZm8gd2hlbiBlcnJvciBhbmQgZWxzZVxyXG4gICQoXCIuaW5mb1wiKS50ZXh0KFwiaVwiKTtcclxuICBpZigkKFwiLmlucC13clwiKS5oYXNDbGFzcyhcImVycm9yXCIpKXtcclxuICAgICQoXCIuZXJyb3JcIikuY2hpbGRyZW4oXCIuaW5mb1wiKS50ZXh0KFwiIVwiKTtcclxuICB9IGVsc2V7XHJcbiAgICAkKFwiLmVycm9yXCIpLmNoaWxkcmVuKFwiLmluZm9cIikudGV4dChcImlcIik7XHJcbiAgfVxyXG5cclxuLy8gRGV2ZWxvcGVkIGJ5IG5pa29hbGRyQGdtYWlsLmNvbSAoMjAxOSkiXX0=
