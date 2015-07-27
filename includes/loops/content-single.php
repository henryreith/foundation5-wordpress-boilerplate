<?php
/*
The Single Posts Loop
=====================
*/
?> 

<?php if(have_posts()): while(have_posts()): the_post(); ?>
    <article role="article" id="post_<?php the_ID()?>" <?php post_class()?>>
        <header>
            <h2><?php the_title()?></h2>
            <p class="small">
				<span class="subheader author"><?php _e('By', 'hrm'); echo " "; the_author() ?>,</span>
				<time  class="subheader" datetime="<?php the_time('d-m-Y')?>"><?php the_time('jS F Y') ?></time>
            </p>
            <!---- AFTER LAUNCH <p class="subheader">
                <i class="fa fa-folder-open"></i>&nbsp; <?php // _e('Filed under', 'hrm'); ?>: <?php // the_category(', ') ?><br/>
                <i class="fa fa-comment"></i>&nbsp; <?php // _e('Comments', 'hrm'); ?>: <?php // comments_popup_link(__('None', 'hrm'), '1', '%'); ?>
            </p> --->
        </header>
        <section>
            <?php // the_post_thumbnail(); ?>
            <?php the_content()?>
            <?php wp_link_pages(); ?>
        </section>
		<footer>
			<?php _e('Filed under', 'hrm'); ?>: <?php the_category(', ') ?><br/>
		</footer>
    </article>
<?php // comments_template('/includes/loops/comments.php'); ?>
<?php endwhile; ?>
<?php else: ?>
<?php wp_redirect(get_bloginfo('siteurl').'/404', 404); exit; ?>
<?php endif; ?>
<?php get_template_part('includes/cta/default-request-callout'); // Request Consultation Default Panel Callout ?>
