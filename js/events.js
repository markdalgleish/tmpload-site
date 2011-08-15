/* Thanks John Resig */
function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
    obj.attachEvent( 'on'+type, obj[type+fn] );
  } else
    obj.addEventListener( type, fn, false );
}

addEvent(document.getElementById("download"), 'click', function(){
	pageTracker._trackEvent("tmpload", "Download", "Top");
});

addEvent(document.getElementById("github"), 'click', function(){
	pageTracker._trackEvent("tmpload", "Fork", "Ribbon");
});

addEvent(document.getElementById("downloadbutton"), 'click', function(){
	pageTracker._trackEvent("tmpload", "Download", "Button");
});

addEvent(document.getElementById("githubbutton"), 'click', function(){
	pageTracker._trackEvent("tmpload", "Fork", "Button");
});

addEvent(document.getElementById("blog"), 'click', function(){
	pageTracker._trackEvent("tmpload", "Blog", "Footer");
});

addEvent(document.getElementById("license"), 'click', function(){
	pageTracker._trackEvent("tmpload", "License", "Footer");
});

addEvent(document.getElementById("twitter"), 'click', function(){
	pageTracker._trackEvent("tmpload", "Twitter", "Footer");
});