<?php get_template_part('includes/header'); ?>

<div class="row">
	<div class="small-12 medium-10 medium-centered large-8 large-uncentered columns" id="content" role="main">
		<div class="alert-box warning">
			<h1><i class="icon-warning-sign"></i> <?php _e('Error', 'hrm'); ?> 404</h1>
			<p><?php _e('The page you were looking for does not exist.', 'hrm'); ?></p>
		</div>
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
