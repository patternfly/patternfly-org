jQuery( document ).ready(function() {
  // Initialize Google Code Prettify
  prettyPrint();
  // Initialize Bootstrap Combobox
  jQuery('.combobox').combobox();
  // Initialize Bootstrap-datepicker
  jQuery('.bootstrap-datepicker').datepicker({
    autoclose: true,
    todayBtn: "linked",
    todayHighlight: true
  });
  // Initialize Bootstrap-select
  jQuery('.selectpicker').selectpicker();
  // Initialize Data Tables
  jQuery('.datatable').dataTable();
  // Initialize Popovers
  jQuery('[data-toggle=popover]').popovers();
 // Initialize Tooltip
  jQuery('.tooltip-demo').tooltip({
    selector: "[data-toggle=tooltip]",
    container: "body"
  });
  // Prevent the default behavior of <a>s in .pf-examples on /widgets
  jQuery(".pf-example a").click(function( event ) {
    event.preventDefault();
  });
  // Enable nested tabs to remember location on refresh
   jQuery(function(){
    if(window.location.hash == '') {
      window.location.hash = window.location.hash + '#_';
    }
    var hash = window.location.hash.split('#')[1];
    var prefix = '_';
    var hpieces = hash.split('/');
    for (var i=0;i<hpieces.length;i++) {
      var domelid = hpieces[i].replace(prefix,'');
      var domitem = $('a[href=#' + domelid + '][data-toggle=tab]');
      if (domitem.length > 0) {
        domitem.tab('show');
      }
    }
    $('.nav-tabs-pattern a, .nav-tabs-code a').on('shown.bs.tab', function (e) {
      if ($(this).hasClass('nested')) {
        var nested = window.location.hash.split('/');
        window.location.hash = nested[0] + '/' + e.target.hash.split('#')[1];
      } else {
        window.location.hash = e.target.hash.replace('#', '#' + prefix);
      }
    });
  });
  // resize the window on tab show to redraw any C3 charts to resolve a bug where hidden charts overlow their containers
  $('.nav-tabs-pattern a, .nav-tabs-code a').on('shown.bs.tab', function (e) {
    jQuery(window).trigger('resize');
  });
  // enable code copy buttons
  ZeroClipboard.config( { swfPath: '/bower_components/zeroclipboard/dist/ZeroClipboard.swf' } );
  var client = new ZeroClipboard( jQuery('.btn-copy') );
  client.on( 'ready', function(event) {
    jQuery('#global-zeroclipboard-html-bridge').data('placement', 'top').attr('title', 'Copy to clipboard').tooltip();
    client.on( 'copy', function(event) {
      var markup = jQuery(event.target).next('.prettyprint').text();
      event.clipboardData.setData('text/plain', markup);
    }),
    client.on( 'aftercopy', function(event) {
      jQuery('#global-zeroclipboard-html-bridge').attr("title", "Copied!").tooltip("fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("fixTitle");
    });
  });
  // if Flash isn't available, destory the client and hide the code copy buttons
  client.on( 'error', function(event) {
    client.destroy();
    jQuery('.btn-copy').hide();
  });
});
