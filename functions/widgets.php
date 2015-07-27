<?php

function hrm_widgets_init() {

  /*
  Sidebar (one widget area)
   */
  register_sidebar( array(
    'name'            => __( 'Main Sidebar', 'hrm' ),
    'id'              => 'sidebar-widget-area',
    'description'     => __( 'The main sidebar widget area', 'hrm' ),
    'before_widget'   => '<section class="%1$s %2$s">',
    'after_widget'    => '</section>',
    'before_title'    => '<h4>',
    'after_title'     => '</h4>',
  ) );

  /* Uncomment if needed
  Footer (three widget areas)
   
  register_sidebar( array(
    'name'            => __( 'Footer-1', 'hrm' ),
    'id'              => 'footer-widget-area-1',
    'description'     => __( 'The footer widget area', 'hrm' ),
    'before_widget'   => '<div class="%1$s %2$s">',
    'after_widget'    => '</div>',
    'before_title'    => '<h4>',
    'after_title'     => '</h4>',
  ) );
	register_sidebar( array(
		'name'            => __( 'Footer-2', 'hrm' ),
		'id'              => 'footer-widget-area-2',
		'description'     => __( 'The footer widget area', 'hrm' ),
		'before_widget'   => '<div class="%1$s %2$s">',
		'after_widget'    => '</div>',
		'before_title'    => '<h4>',
		'after_title'     => '</h4>',
	) );
	register_sidebar( array(
		'name'            => __( 'Footer-3', 'hrm' ),
		'id'              => 'footer-widget-area-3',
		'description'     => __( 'The footer widget area', 'hrm' ),
		'before_widget'   => '<div class="%1$s %2$s">',
		'after_widget'    => '</div>',
		'before_title'    => '<h4>',
		'after_title'     => '</h4>',
	) );
	register_sidebar( array(
		'name'            => __( 'Footer-4', 'hrm' ),
		'id'              => 'footer-widget-area-4',
		'description'     => __( 'The footer widget area', 'hrm' ),
		'before_widget'   => '<div class="%1$s %2$s">',
		'after_widget'    => '</div>',
		'before_title'    => '<h4>',
		'after_title'     => '</h4>',
	) ); */
}
add_action( 'widgets_init', 'hrm_widgets_init' );
