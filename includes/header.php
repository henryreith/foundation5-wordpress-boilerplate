<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js">
<head>
	<title><?php wp_title('-', true, 'right'); bloginfo('name'); ?></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div class="off-canvas-wrap" data-offcanvas>
	<div class="inner-wrap">
		<!--[if IE 8]>
		<div data-alert class="alert-box warning" style="margin-bottom:0;">
			At present less than 0.01% of our website users, used the browser that you are viewing this site on. In the interest of providing a the best experience possible for the majority of our users, we are sorry to say we had to move on from fully supporting this browser. If possible <a href="http://browsehappy.com/">please upgrade your browser</a> to improve your experience.
			<a href="#" class="close">&times;</a>
		</div>
		<![endif]-->

<header id="main-header">
	<div class="row"><!-- Start Nav Row Inner Wrapper -->
		<div class="small-12 columns"><!-- Start Nav Columns Inner Wrapper -->
			<nav class="top-bar" data-topbar role="navigation">
				<ul class="title-area">
					<!-- Title Area -->
					<li class="name">
					<h1>
						<a href="<?php echo home_url('/'); ?>">
							<img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="Logo" id="navlogo"> <!--- Add your own logo into the /img/ folder. ---->
							<span class="hide"><?php bloginfo('name'); ?></span>
						</a>
					</h1>
					</li>
					<!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
					<li class="toggle-topbar menu-icon"><a href=""><span>Menu</span></a></li>
				</ul>
				<section class="top-bar-section">
					<!-- Right Nav Section -->
					<?php
						wp_nav_menu( array(
							'theme_location'    => 'navbar-right',
							'depth'             => 3,
							// 'menu_class'        => 'right',
							'items_wrap' 		=> '<ul id="%1$s" class="right %2$s">%3$s</ul>',
							'fallback_cb'       => 'F5_TOP_BAR_WALKER::fallback',
							'walker'            => new F5_TOP_BAR_WALKER()
							)
						);
					?>
				</section>
			</nav>
		</div><!-- Finish Nav Columns Inner Wrapper -->
	</div><!-- Finished Nav Row Inner Wrapper -->
</header>