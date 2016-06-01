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
  jQuery('.pf-example a, .example-pf a').click(function( event ) {
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
  // Insert copy to clipboard button before .prettyprint
  $('.prettyprint').each(function () {
    var btnHtml = '<button class="btn btn-default btn-copy" title="Copy to clipboard" data-placement="left">Copy</button>'
    $(this).before(btnHtml);
    $('.btn-copy').tooltip();
  });
  var clipboard = new Clipboard('.btn-copy', {
    target: function (trigger) {
      return trigger.nextElementSibling.nextElementSibling;
    }
  });
  clipboard.on('success', function (e) {
    $(e.trigger)
      .attr('title', 'Copied!')
      .tooltip('fixTitle')
      .tooltip('show')
      .attr('title', 'Copy to clipboard')
      .tooltip('fixTitle')
    e.clearSelection()
  });
  clipboard.on('error', function (e) {
    var fallbackMsg = /Mac/i.test(navigator.userAgent) ? 'Press \u2318C to copy' : 'Press Ctrl-C to copy'
    $(e.trigger)
      .attr('title', fallbackMsg)
      .tooltip('fixTitle')
      .tooltip('show')
      .attr('title', 'Copy to clipboard')
      .tooltip('fixTitle')
  });
  // enable .navbar-toggle-sidebar to show/hide .navbar-sidebar
  //jQuery('.navbar-toggle-sidebar').on('click', function (e) {
    //jQuery('.navbar-sidebar').toggleClass('open');
  //});
  jQuery('.navbar-toggle').on('click', function (e) {
    jQuery('.navbar-sidebar').toggleClass('open');
  });

  jQuery('.secondary-menu-toggle').on('click', function (e) {
    jQuery('.primary-menu').toggleClass('hidden');
    jQuery('.secondary-menu').toggleClass('hidden');
  });
});
