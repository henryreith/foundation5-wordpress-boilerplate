<?php get_template_part('includes/header'); ?>

<div class="row">
	<div class="small-12 medium-10 medium-centered large-8 large-uncentered columns" id="content" role="main">
		<h2><?php _e('Search Results for', 'hrm'); ?> &ldquo;<?php the_search_query(); ?>&rdquo;</h2>
        <hr/>
		<?php get_template_part('includes/loops/content', 'search'); ?>
	</div><!-- /#content -->
	
	<div class="small-12 medium-10 medium-centered large-4 large-uncentered columns" id="sidebar" role="navigation">
		<div class="row">
			<div class="large-11 large-offset-1 columns">
				<?php get_template_part('includes/sidebar'); ?>
			</div>
		</div><!-- /.row -->
	</div><!-- /#sidebar -->
</div><!-- /.row -->

<?php get_template_part('includes/footer'); ?>
