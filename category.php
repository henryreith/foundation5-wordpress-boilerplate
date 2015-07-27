<?php get_template_part('includes/header'); ?>

<div class="row">
	<h1>Category: <?php echo single_cat_title(); ?></h1>
	<hr>
	<div class="small-12 medium-10 medium-centered large-8 large-uncentered columns" id="content" role="main">
        <?php get_template_part('includes/loops/content', get_post_format()); ?>
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
