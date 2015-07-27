<?php 

/**
 * Template Name: Simple Page
 *
 * @package WordPress
 * @subpackage ct
 * @since CountentTools 1.0
 */

get_template_part('includes/header-simple'); ?>

<div class="row">
	<div class="small-12 medium-10 medium-centered large-8 columns" id="content" role="main">
		<?php get_template_part('includes/loops/content', 'page'); ?>
	</div><!-- /#content -->
</div><!-- /.row -->

<?php get_template_part('includes/footer-simple'); ?>
