<?php get_template_part('includes/header'); ?>

<div class="row">
	<div class="large-8 large-offset-2 columns" id="content" role="main">
		<?php get_template_part('includes/loops/content', get_post_format()); ?>
	</div><!-- /#content -->
</div><!-- /.row -->

<?php get_template_part('includes/footer'); ?>