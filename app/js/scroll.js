// Scroll to next screen
 var fancy=true;
  new fullpage('#fullpage', {
    licenseKey: 'F4D71089-214F4315-958D1E92-109DD6D4',
    recordHistory: false,
    sectionSelector: 'section',
    responsiveHeight: '600',
    responsiveWidth: '560',
    //normalScrollElements: '.fancybox-container',
    fitToSection: true,
    dragAndMove: true,
    scrollOverflow: false,
    onLeave: function(index, nextIndex, direction){
      return fancy;
    },
  });

// Stop scroll when modal is open
$('[data-fancybox]').fancybox({
  afterLoad: function() {
    fancy=false;
  },
  afterClose: function() {
   fancy=true;
  }
});