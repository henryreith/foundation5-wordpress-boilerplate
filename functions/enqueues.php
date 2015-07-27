<?php

function hrm_enqueues() {

	wp_enqueue_script( 'jquery' );

	wp_register_style('foundation-css', get_template_directory_uri() . '/css/master.css', false, '5.0.0', null);
	wp_enqueue_style('foundation-css');
	
	wp_register_style('googlefont-css', '//fonts.googleapis.com/css?family=Lato:400,700|PT+Sans:400,700', false, null);
	wp_enqueue_style('googlefont-css');
	
  	wp_register_script('modernizr', get_template_directory_uri() . '/js/modernizr-custom.min.js', false, null, true);
	wp_enqueue_script('modernizr');

  	wp_register_script('foundation-js', get_template_directory_uri() . '/js/foundation.min.js', false, null, true);
	wp_enqueue_script('foundation-js');

	wp_register_script('custom-js', get_template_directory_uri() . '/js/custom.js', false, null, true);
	wp_enqueue_script('custom-js');

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'hrm_enqueues', 100);

remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' ); // Not sure we need them on our site yet, so no need to load another JS file. 

// add ie conditional html5 shim to header
function add_ie_html5_shim () {
    echo '<!--[if lt IE 9]>';
    echo '<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>';
	echo '<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>';
    echo '<![endif]-->';
}
add_action('wp_head', 'add_ie_html5_shim', 10);

// Footer Scripts

// Foundation Initialise Script
function add_fd_script_footer(){ ?>
<script>jQuery(function($) {$(document).foundation();});</script>
<?php } 
add_action('wp_footer', 'add_fd_script_footer',111);

// Fitvids Script
function add_fitvids_script_footer(){ ?>
<script>jQuery(function($) {$(".row").fitVids();});</script>
<?php } 
add_action('wp_footer', 'add_fitvids_script_footer',112);

// Lazy Load XT Script
function lazyload_script_footer(){ ?>
<script>
(function ($) {
$.extend($.lazyLoadXT, {
  edgeY:  600
});
})(window.jQuery || window.Zepto || window.$);
</script>
<?php } 
add_action('wp_footer', 'lazyload_script_footer',113);

// Object-Fit Polyfill
/* 
function objectFit_polyfill_script_footer(){ ?>
<script>
	document.addEventListener('DOMContentLoaded', function () {
		objectFit.polyfill({
			selector: 'img-of', // this can be any CSS selector
			fittype: 'cover', // either contain, cover, fill or none
			disableCrossDomain: 'false' // either 'true' or 'false' to not parse external CSS files.
		});
	});
</script>
<?php } 
add_action('wp_footer', 'objectFit_polyfill_script_footer',114); */