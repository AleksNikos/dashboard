function tab_login(s,e){var n,o,a;for(o=document.getElementsByClassName("tabcontent"),n=0;n<o.length;n++)o[n].style.display="none";for(a=document.getElementsByClassName("tablinks"),n=0;n<a.length;n++)a[n].className=a[n].className.replace(" active","");document.getElementById(e).style.display="block",s.currentTarget.className+=" active"}function tab_docs(s,e){var n,o,a;for(o=document.getElementsByClassName("tabcontents"),n=0;n<o.length;n++)o[n].style.display="none";for(a=document.getElementsByClassName("tablinks"),n=0;n<a.length;n++)a[n].className=a[n].className.replace(" active","");document.getElementById(e).style.display="block",s.currentTarget.className+=" active"}$(document).ready(function(){$(".learn-more").on("click","a",function(s){fullpage_api.moveSectionDown()})}),$(window).scroll(function(){var s=$(this).scrollTop();s>20?$(".topbar-wrap").addClass("active"):$(".topbar-wrap").removeClass("active")}),$(".login-btn").click(function(){$("#login-popup").css("display","block"),$(".create-btn-tab").removeClass("active"),$(".login-btn-tab").addClass("active"),$("#create-popup").css("display","none"),$("#reset").css("display","none"),$(".tab").css("display","block"),$("#menu").removeClass("active_menu"),$(".topnav").removeClass("active"),$(".menu").removeClass("active")}),$(".sign_up-btn").click(function(){$("#create-popup").css("display","block"),$(".login-btn-tab").removeClass("active"),$(".create-btn-tab").addClass("active"),$("#login-popup").css("display","none"),$("#reset").css("display","none"),$(".tab").css("display","block")}),$(".cant_login").click(function(){$("#reset").css("display","block"),$("#create-popup").css("display","none"),$("#login-popup").css("display","none"),$(".tab").css("display","none")}),$("#reset > .back").click(function(){$("#reset").css("display","none"),$("#login-popup").css("display","block"),$(".tab").css("display","block")}),$(".fd_1").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd1").removeClass("d-none")}),$(".fd_2").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd2").removeClass("d-none")}),$(".fd_3").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd3").removeClass("d-none")}),$(".fd_4").on("click touchend",function(){$(".demo_fd").addClass("d-none"),$(".fd4").removeClass("d-none")}),$(".er_1").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er1").removeClass("d-none")}),$(".er_2").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er2").removeClass("d-none")}),$(".er_3").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er3").removeClass("d-none")}),$(".er_4").on("click touchend",function(){$(".demo_er").addClass("d-none"),$(".er4").removeClass("d-none")}),$(".back").on("click touchend",function(){$(".demo_fd").removeClass("d-none"),$(".demo_er").removeClass("d-none"),$(".fd1").addClass("d-none"),$(".fd2").addClass("d-none"),$(".fd3").addClass("d-none"),$(".fd4").addClass("d-none"),$(".er1").addClass("d-none"),$(".er2").addClass("d-none"),$(".er3").addClass("d-none"),$(".er4").addClass("d-none")}),$(".menu").on("touch click",function(){$("#menu").toggleClass("active_menu"),$(".topnav").toggleClass("active"),$("a.menu").toggleClass("active")}),$(".topnav").on("click",function(){$(this).removeClass("active"),$("#menu").removeClass("active_menu"),$("a.menu").removeClass("active")}),$(window).scroll(function(){var s=$(".link");s.each(function(s,e){if($(window).width()<560)var n=$(e).offset().top-150,o=n+$(e).height(),a=$(window).scrollTop(),t=$(e).attr("id");a>n&&a<o&&($(".vertical-nav > ul > li.active").removeClass("active"),$('a[href="#'+t+'"]').parent("li").addClass("active"))})}),$(document).ready(function(){$("#docs").on("click","a",function(s){s.preventDefault();var e=$(this).attr("href");if($(window).width()>560)var n=$(e).offset().top-100;else var n=$(e).offset().top-150;$("body,html").animate({scrollTop:n},800)})}),$(function(){$(".hide-show").show(),$(".hide-show span").addClass("show"),$(".hide-show span").click(function(){$(this).hasClass("show")?($(this).text("Hide"),$(this).parent().siblings(".password").attr("type","text"),$(this).removeClass("show")):($(this).text("Show"),$(this).parent().siblings(".password").attr("type","password"),$(this).addClass("show"))}),$("button.login").on("click",function(){$(".hide-show span").text("Show").addClass("show"),$(".hide-show").parent().find(".password").attr("type","password")})});var input=$('input[type="text"], input[type="password"], input[type="email"]');input.focus(function(){$(this).siblings("span").css("display","inline-block"),$(this).css("padding","0 0 10px 10px"),$(this).siblings(".hide-show").css("top","24px"),$(this).parent(":before").css("top","20px")}),input.blur(function(){$(this).val()?($(this).siblings("span").css("display","inline-block"),$(this).css("padding","0 0 10px 10px"),$(this).siblings(".hide-show").css("top","24px"),$(this).parent(":before").css("top","20px")):($(this).siblings("span").css("display","none"),$(this).css("padding","15px 15px 15px 10px"),$(this).siblings(".hide-show").css("top","15px"))}),$(".info").text("i"),$(".inp-wr").hasClass("error")?$(".error").children(".info").text("!"):$(".error").children(".info").text("i");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsidGFiX2xvZ2luIiwiZXZ0IiwidGFiIiwiaSIsInRhYmNvbnRlbnQiLCJ0YWJsaW5rcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRUYXJnZXQiLCJ0YWJfZG9jcyIsInRhYmNvbnRlbnRzIiwiJCIsInJlYWR5Iiwib24iLCJldmVudCIsImZ1bGxwYWdlX2FwaSIsIm1vdmVTZWN0aW9uRG93biIsIndpbmRvdyIsInNjcm9sbCIsIndTY3JvbGwiLCJ0aGlzIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwiY3NzIiwidG9nZ2xlQ2xhc3MiLCIkc2VjdGlvbnMiLCJlYWNoIiwiZWwiLCJ3aWR0aCIsInRvcCIsIm9mZnNldCIsImJvdHRvbSIsImhlaWdodCIsImlkIiwiYXR0ciIsInBhcmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNob3ciLCJoYXNDbGFzcyIsInRleHQiLCJzaWJsaW5ncyIsImZpbmQiLCJpbnB1dCIsImZvY3VzIiwiYmx1ciIsInZhbCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiQUFvR0UsUUFBU0EsV0FBVUMsRUFBS0MsR0FDdEIsR0FBSUMsR0FBR0MsRUFBWUMsQ0FFbkIsS0FEQUQsRUFBYUUsU0FBU0MsdUJBQXVCLGNBQ3hDSixFQUFJLEVBQUdBLEVBQUlDLEVBQVdJLE9BQVFMLElBQ2pDQyxFQUFXRCxHQUFHTSxNQUFNQyxRQUFVLE1BR2hDLEtBREFMLEVBQVdDLFNBQVNDLHVCQUF1QixZQUN0Q0osRUFBSSxFQUFHQSxFQUFJRSxFQUFTRyxPQUFRTCxJQUMvQkUsRUFBU0YsR0FBR1EsVUFBWU4sRUFBU0YsR0FBR1EsVUFBVUMsUUFBUSxVQUFXLEdBRW5FTixVQUFTTyxlQUFlWCxHQUFLTyxNQUFN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LFFBQVFsQixJQUFJLFVBQVUsZ0JBQ3ZDZCxFQUFFUyxNQUFNSyxJQUFJLFVBQVUsaUJBQ3RCZCxFQUFFUyxNQUFNdUIsU0FBUyxjQUFjbEIsSUFBSSxNQUFNLFFBQ3pDZCxFQUFFUyxNQUFNaUIsT0FBTyxXQUFXWixJQUFJLE1BQU0sVUFFcENkLEVBQUVTLE1BQU11QixTQUFTLFFBQVFsQixJQUFJLFVBQVUsUUFDdkNkLEVBQUVTLE1BQU1LLElBQUksVUFBVSx1QkFDdEJkLEVBQUVTLE1BQU11QixTQUFTLGNBQWNsQixJQUFJLE1BQU0sV0FLN0NkLEVBQUUsU0FBUytCLEtBQUssS0FDYi9CLEVBQUUsV0FBVzhCLFNBQVMsU0FDdkI5QixFQUFFLFVBQVVzQyxTQUFTLFNBQVNQLEtBQUssS0FFbkMvQixFQUFFLFVBQVVzQyxTQUFTLFNBQVNQLEtBQUsiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNsb3cgc2Nyb2xsIG9uIGNsaWNrIExlYXJuIG1vcmVcclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgJChcIi5sZWFybi1tb3JlXCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGZ1bGxwYWdlX2FwaS5tb3ZlU2VjdGlvbkRvd24oKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuLy8gQWRkIGZpeGVkIHRvcGJhciB3aGVuIHNjcm9sbFxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgIHZhciB3U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgIGlmICh3U2Nyb2xsID4gMjApIHtcclxuICAgICAgJCgnLnRvcGJhci13cmFwJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICQoJy50b3BiYXItd3JhcCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbi8vIEdvIHRvIHRhYiBtb2RhbCAobG9naW4sIHNpZ24tdXAsIHJlc2V0KVxyXG4gICQoXCIubG9naW4tYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJyNsb2dpbi1wb3B1cCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoJy5jcmVhdGUtYnRuLXRhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmxvZ2luLWJ0bi10YWInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJyNjcmVhdGUtcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICQoJyNyZXNldCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnLnRhYicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoJyNtZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9tZW51Jyk7XHJcbiAgICAgICQoJy50b3BuYXYnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICQoXCIuc2lnbl91cC1idG5cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJCgnI2NyZWF0ZS1wb3B1cCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoJy5sb2dpbi1idG4tdGFiJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcuY3JlYXRlLWJ0bi10YWInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJyNsb2dpbi1wb3B1cCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnI3Jlc2V0JykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAkKCcudGFiJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgIH0pO1xyXG5cclxuICAkKFwiLmNhbnRfbG9naW5cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJCgnI3Jlc2V0JykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCgnI2NyZWF0ZS1wb3B1cCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgJCgnI2xvZ2luLXBvcHVwJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAkKCcudGFiJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICQoXCIjcmVzZXQgPiAuYmFja1wiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJChcIiNyZXNldFwiKS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xyXG4gICAgICAkKCcjbG9naW4tcG9wdXAnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAkKFwiLnRhYlwiKS5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuLy8gRGVtbyBtb2RhbHNcclxuICAkKFwiLmZkXzFcIikub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5kZW1vX2ZkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmZkMScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICB9KTtcclxuICAkKFwiLmZkXzJcIikub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5kZW1vX2ZkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmZkMicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICB9KTtcclxuICAkKFwiLmZkXzNcIikub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5kZW1vX2ZkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmZkMycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICB9KTtcclxuICAkKFwiLmZkXzRcIikub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5kZW1vX2ZkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmZkNCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICB9KTtcclxuICAkKFwiLmVyXzFcIikub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5kZW1vX2VyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmVyMScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICB9KTtcclxuICAkKFwiLmVyXzJcIikub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5kZW1vX2VyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmVyMicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICB9KTtcclxuICAkKFwiLmVyXzNcIikub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5kZW1vX2VyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmVyMycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICB9KTtcclxuICAkKFwiLmVyXzRcIikub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5kZW1vX2VyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmVyNCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICB9KTtcclxuICAkKFwiLmJhY2tcIikub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5kZW1vX2ZkJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmRlbW9fZXInKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQxJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmZkMicpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5mZDMnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZmQ0JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmVyMScpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICQoJy5lcjInKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAkKCcuZXIzJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgJCgnLmVyNCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICB9KTtcclxuXHJcbi8vIFRhYnMgbG9naW4gcG9wdXBcclxuICBmdW5jdGlvbiB0YWJfbG9naW4oZXZ0LCB0YWIpIHtcclxuICAgIHZhciBpLCB0YWJjb250ZW50LCB0YWJsaW5rcztcclxuICAgIHRhYmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiY29udGVudFwiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRhYmNvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFibGlua3NcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGFibGlua3NbaV0uY2xhc3NOYW1lID0gdGFibGlua3NbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gIH1cclxuXHJcbi8vIE1lbnUgZGFzaGJvYXJkXHJcbiAgJCgnLm1lbnUnKS5vbigndG91Y2ggY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnI21lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlX21lbnUnKTtcclxuICAgICQoJy50b3BuYXYnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCdhLm1lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLnRvcG5hdicpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICQoJyNtZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9tZW51Jyk7XHJcbiAgICAkKCdhLm1lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4vLyBTbG93IHNjcm9sbCBvbiBkb2NzICBcclxuICAvLyBhZGQgYWN0aXZlIGNsYXNzIHRvIG5hdlxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgIHZhciAkc2VjdGlvbnMgPSAkKCcubGluaycpO1xyXG4gICAgJHNlY3Rpb25zLmVhY2goZnVuY3Rpb24oaSxlbCl7XHJcbiAgICAgIGlmKCQod2luZG93KS53aWR0aCgpIDwgNTYwKXtcclxuICAgICAgICB2YXIgdG9wICA9ICQoZWwpLm9mZnNldCgpLnRvcCAtIDE1MDtcclxuICAgICAgICB2YXIgYm90dG9tID0gIHRvcCArJChlbCkuaGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICB2YXIgaWQgPSAkKGVsKS5hdHRyKCdpZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCBzY3JvbGwgPiB0b3AgJiYgc2Nyb2xsIDwgYm90dG9tKXtcclxuICAgICAgICAkKCcudmVydGljYWwtbmF2ID4gdWwgPiBsaS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYVtocmVmPVwiIycraWQrJ1wiXScpLnBhcmVudCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSk7XHJcbiAgLy8gc2xvdyBzY3JvbGxcclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgJChcIiNkb2NzXCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPiA1NjApe1xyXG4gICAgICAgIHZhciB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3AgLSAxMDA7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHZhciB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3AgLSAxNTA7XHJcbiAgICAgIH1cclxuICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCA4MDApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4vLyBTaG93IGhpZGRlbiBwYXNzd29yZFxyXG4gICQoZnVuY3Rpb24gaGlkZVBhc3MoKXtcclxuICAgICQoJy5oaWRlLXNob3cnKS5zaG93KCk7XHJcbiAgICAkKCcuaGlkZS1zaG93IHNwYW4nKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgXHJcbiAgICAkKCcuaGlkZS1zaG93IHNwYW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICBpZiggJCh0aGlzKS5oYXNDbGFzcygnc2hvdycpICkge1xyXG4gICAgICAgICQodGhpcykudGV4dCgnSGlkZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5wYXNzd29yZCcpLmF0dHIoJ3R5cGUnLCd0ZXh0Jyk7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAkKHRoaXMpLnRleHQoJ1Nob3cnKTtcclxuICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLnBhc3N3b3JkJykuYXR0cigndHlwZScsJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoJ2J1dHRvbi5sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5oaWRlLXNob3cgc3BhbicpLnRleHQoJ1Nob3cnKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAkKCcuaGlkZS1zaG93JykucGFyZW50KCkuZmluZCgnLnBhc3N3b3JkJykuYXR0cigndHlwZScsJ3Bhc3N3b3JkJyk7XHJcbiAgICB9KTsgXHJcbiAgfSk7XHJcblxyXG4vLyBTaG93IG5hbWUgd2hlbiBpbnB1dCBmb2N1c1xyXG4gIHZhciBpbnB1dCA9ICQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xyXG4gIGlucHV0LmZvY3VzKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5zaWJsaW5ncygnc3BhbicpLmNzcygnZGlzcGxheScsJ2lubGluZS1ibG9jaycpO1xyXG4gICAgJCh0aGlzKS5jc3MoJ3BhZGRpbmcnLCcwIDAgMTBweCAxMHB4Jyk7XHJcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCcuaGlkZS1zaG93JykuY3NzKCd0b3AnLCcyNHB4Jyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudChcIjpiZWZvcmVcIikuY3NzKCd0b3AnLCcyMHB4Jyk7XHJcbiAgfSk7XHJcbiAgaW5wdXQuYmx1cihmdW5jdGlvbigpIHtcclxuICAgIGlmKCAkKHRoaXMpLnZhbCgpICkge1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdzcGFuJykuY3NzKCdkaXNwbGF5JywnaW5saW5lLWJsb2NrJyk7XHJcbiAgICAgICQodGhpcykuY3NzKCdwYWRkaW5nJywnMCAwIDEwcHggMTBweCcpO1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuaGlkZS1zaG93JykuY3NzKCd0b3AnLCcyNHB4Jyk7XHJcbiAgICAgICQodGhpcykucGFyZW50KFwiOmJlZm9yZVwiKS5jc3MoJ3RvcCcsJzIwcHgnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdzcGFuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAkKHRoaXMpLmNzcygncGFkZGluZycsJzE1cHggMTVweCAxNXB4IDEwcHgnKTtcclxuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmhpZGUtc2hvdycpLmNzcygndG9wJywnMTVweCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuLy9pbmZvIHdoZW4gZXJyb3IgYW5kIGVsc2VcclxuICAkKFwiLmluZm9cIikudGV4dChcImlcIik7XHJcbiAgaWYoJChcIi5pbnAtd3JcIikuaGFzQ2xhc3MoXCJlcnJvclwiKSl7XHJcbiAgICAkKFwiLmVycm9yXCIpLmNoaWxkcmVuKFwiLmluZm9cIikudGV4dChcIiFcIik7XHJcbiAgfSBlbHNle1xyXG4gICAgJChcIi5lcnJvclwiKS5jaGlsZHJlbihcIi5pbmZvXCIpLnRleHQoXCJpXCIpO1xyXG4gIH1cclxuXHJcbi8vIFRhYnMgZG9jc1xyXG4gIGZ1bmN0aW9uIHRhYl9kb2NzKGV2dCwgdGFiKSB7XHJcbiAgICB2YXIgaSwgdGFiY29udGVudHMsIHRhYmxpbmtzO1xyXG4gICAgdGFiY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiY29udGVudHNcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFiY29udGVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGFiY29udGVudHNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFibGlua3NcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGFibGlua3NbaV0uY2xhc3NOYW1lID0gdGFibGlua3NbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gIH1cclxuXHJcbi8vU2Nyb2xsc3B5XHJcblxyXG4gICAgLy8gdmFyIHNweSA9IG5ldyBHdW1zaG9lKCcudmVydGljYWwtbmF2IGEnLCB7XHJcbiAgICAvLyAgICAgbmVzdGVkOiB0cnVlLCAvLyBpZiB0cnVlLCBhZGQgY2xhc3NlcyB0byBwYXJlbnRzIG9mIGFjdGl2ZSBsaW5rXHJcbiAgICAvLyAgICAgb2Zmc2V0OiAxNTAsIC8vIGhvdyBmYXIgZnJvbSB0aGUgdG9wIG9mIHRoZSBwYWdlIHRvIGFjdGl2YXRlIGEgY29udGVudCBhcmVhXHJcbiAgICAvLyAgICAgcmVmbG93OiBmYWxzZSwgLy8gaWYgdHJ1ZSwgbGlzdGVuIGZvciByZWZsb3dzXHJcbiAgICAvLyB9KTtcclxuXHJcbi8vIERldmVsb3BlZCBieSBuaWtvYWxkckBnbWFpbC5jb20gKDIwMTkpIl19
