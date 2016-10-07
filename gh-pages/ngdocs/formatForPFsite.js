setTimeout(function(){
  $( "#angular .improve-docs" ).hide();
  $( "#angular .view-source" ).hide();
  $( "#angular #example_source" ).hide();
  $( "#angular h1.ng-scope" ).select().hide();
  $( "#angular #example" ).hide();
  $( "#angular #example_demo" ).hide();

  var $ngdocDiv = $( "#angular #description" ).parent();
  $("<div class='example-pf'></div>").append(
    $( "#angular .doc-example-live" ).show()
  ).append( $( "#angular .example" ).show() ).prependTo( $ngdocDiv );
},1000);