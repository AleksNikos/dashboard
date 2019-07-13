//Switch
  $('label[for]').click(function () {
    var labelFor  = $('#'+$(this).attr('for'));
    var inputName = labelFor.attr('name');
    if(inputName === 'python'){
      $('input[name='+inputName+']').removeAttr('checked');
      $('label[for=pyt2]').removeClass('round_gradient');
      $('label[for=pyt3]').removeClass('round_gradient');
    }
    if(inputName === 'ubuntu'){
      $('input[name='+inputName+']').removeAttr('checked');
      $('label[for=ub16]').removeClass('round_gradient');
      $('label[for=ub18]').removeClass('round_gradient');
    }
    $('label[name=ubuntu]').removeClass('round_gradient');
    $(this).addClass('round_gradient')
  });

// Slow scroll on click Learn more
  $(document).ready(function(){
    $(".learn-more").on("click","a", function (event) {
      fullpage_api.moveSectionDown();
    });
  });

// Add fixed topbar when scroll
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll > 20) {
      $('.topbar-wrap').addClass('active');
    }
    else {
      $('.topbar-wrap').removeClass('active');
    }
  });

// Go to tab modal (login, sign-up, reset)
  $(".login-btn").click(function(){
      $('#login-popup').css('display','block');
      $('.create-btn-tab').removeClass('active');
      $('.login-btn-tab').addClass('active');
      $('#create-popup').css('display','none');
      $('#reset').css('display','none');
      $('.tab').css('display','block');
      $('#menu').removeClass('active_menu');
      $('.topnav').removeClass('active');
      $('.menu').removeClass('active');
    });

  $(".sign_up-btn").click(function(){
      $('#create-popup').css('display','block');
      $('.login-btn-tab').removeClass('active');
      $('.create-btn-tab').addClass('active');
      $('#login-popup').css('display','none');
      $('#reset').css('display','none');
      $('.tab').css('display','block');
    });

  $(".cant_login").click(function(){
      $('#reset').css('display','block');
      $('#create-popup').css('display','none');
      $('#login-popup').css('display','none');
      $('.tab').css('display','none');
    });

  $("#reset > .back").click(function() {
      $("#reset").css("display","none");
      $('#login-popup').css('display','block');
      $(".tab").css("display","block");
    });

// Demo modals
  $(".fd_1").on('click touchend', function(){
    $('.demo_fd').addClass('d-none');
    $('.fd1').removeClass('d-none');
  });
  $(".fd_2").on('click touchend', function(){
    $('.demo_fd').addClass('d-none');
    $('.fd2').removeClass('d-none');
  });
  $(".fd_3").on('click touchend', function(){
    $('.demo_fd').addClass('d-none');
    $('.fd3').removeClass('d-none');
  });
  $(".fd_4").on('click touchend', function(){
    $('.demo_fd').addClass('d-none');
    $('.fd4').removeClass('d-none');
  });
  $(".er_1").on('click touchend', function(){
    $('.demo_er').addClass('d-none');
    $('.er1').removeClass('d-none');
  });
  $(".er_2").on('click touchend', function(){
    $('.demo_er').addClass('d-none');
    $('.er2').removeClass('d-none');
  });
  $(".er_3").on('click touchend', function(){
    $('.demo_er').addClass('d-none');
    $('.er3').removeClass('d-none');
  });
  $(".er_4").on('click touchend', function(){
    $('.demo_er').addClass('d-none');
    $('.er4').removeClass('d-none');
  });
  $(".back").on('click touchend', function(){
    $('.demo_fd').removeClass('d-none');
    $('.demo_er').removeClass('d-none');
    $('.fd1').addClass('d-none');
    $('.fd2').addClass('d-none');
    $('.fd3').addClass('d-none');
    $('.fd4').addClass('d-none');
    $('.er1').addClass('d-none');
    $('.er2').addClass('d-none');
    $('.er3').addClass('d-none');
    $('.er4').addClass('d-none');
  });

// Tabs login popup
  function tab_login(evt, tab) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  }

// Menu dashboard
  $('.menu').on('touch click', function(){
    $('#menu').toggleClass('active_menu');
    $('.topnav').toggleClass('active');
    $('a.menu').toggleClass('active');
    $('html, body').animate({scrollTop: 0}, 300);
  });
  $('.topnav').on('click',function () {
     $(this).removeClass('active');
     $('#menu').removeClass('active_menu');
    $('a.menu').removeClass('active');
  });

// Slow scroll on docs
  $(document).ready(function(){
    $(".vertical-nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href');
      if($(window).width() > 992){
        var top = $(id).offset().top - 100;
      }else{
        var top = $(id).offset().top - 150;
      }
      $('body,html').animate({scrollTop: top}, 800);
    });
  });

// Show hidden password
  $(function hidePass(){
    $('.hide-show').show();
    $('.hide-show span').addClass('show');

    $('.hide-show span').click(function(){
      if( $(this).hasClass('show') ) {
        $(this).text('Hide');
        $(this).parent().siblings('.password').attr('type','text');
        $(this).removeClass('show');
      } else {
         $(this).text('Show');
         $(this).parent().siblings('.password').attr('type','password');
         $(this).addClass('show');
      }
    });

    $('button.login').on('click', function(){
      $('.hide-show span').text('Show').addClass('show');
      $('.hide-show').parent().find('.password').attr('type','password');
    });
  });

// Show name when input focus
  var input = $('input[type="text"], input[type="password"], input[type="email"]');
  input.each(function () {
      $(this).attr("data-placeholder", this.placeholder);
      $(this).bind("focus", function () {
          this.placeholder = '';
      });
      $(this).bind("blur", function () {
          this.placeholder = $(this).attr("data-placeholder");
      });
  });
  input.focus(function() {
      $(this).siblings('span').css('display','inline-block');
      $(this).css('padding','20px 10px 10px 10px');
      $(this).parent(":before").css('top','20px');
  });
  input.blur(function() {
      if( $(this).val() ) {
          $(this).siblings('span').css('display','inline-block');
          $(this).css('padding','20px 10px 10px 10px');
          $(this).parent(":before").css('top','20px');
      }else{
          $(this).siblings('span').css('display','none');
          $(this).css('padding','15px 15px 15px 10px');
      }
  });

//infotext when error and else in inputs
  $(".error .info").text("i");
  if($(".inp-wr").hasClass("error")){
    $(".error .info").html("i"+ '<div class="infobox_help">' + "Inputs has errors" + "</div>");
  } else{
    $(".error .info").text("i");
  }

// Tabs docs navigation
  function tab_docs(evt, tab) {
    var i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";    
  }

// Tab offsets docs
  function tabOffsets(){
    var offsets = {};
    var tabsContainer = $('.vertical-nav');
    var tabsWrap = tabsContainer.find('.nav-wrap');
    
    tabsWrap.children('li').each(function (i, el) {
      offsets[i] = $(el).offset().left - tabsContainer.offset().left - 5;
    });

    tabsWrap.children('li').click(function(){
      var tab = $(this);
      var tabIndex = tab.index();

      tabsWrap.children('li').removeClass('prev active next');
      tab.addClass('active');
      tab.prev().addClass('prev');
      tab.next().addClass('next');

      tabsWrap.animate({scrollLeft: (offsets[tabIndex])}, 300);
    });
  }

  if($(window).width() < 560){
    tabOffsets();
  }

// Mobile menu fixed
  if($(window).width() < 992){
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      var nav = $('.vertical-nav');
      var menuIsOpen = $('#menu').hasClass('active_menu');
      var fixedPoint = menuIsOpen ? 333 : 0;

      if (wScroll > fixedPoint) {
        nav.addClass('fixed');
        $('#docs').addClass('top-offset');
      } else {
        nav.removeClass('fixed');
        $('#docs').removeClass('top-offset');
      }
    });
  }

// Developed by nikoaldr@gmail.com (2019)