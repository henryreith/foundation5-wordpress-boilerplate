<?php

function hrm_search_form( $form ) {
    $form = '
	<form class="row collapse" role="search" method="get" id="searchform" action="' . home_url('/') . '" >
		<div class="small-10 columns">
			<input type="text" value="' . get_search_query() . '" placeholder="' . esc_attr__('Search', 'hrm') . '..." name="s" id="s" />
		</div>
		<div class="small-2 columns">
			<button type="submit" id="searchsubmit" class="button postfix" value="'. esc_attr__('Search', 'hrm') .'" class="button"><i class="fa fa-search"></i></button>
		</div>
    </form>';
    return $form;
}
add_filter( 'get_search_form', 'hrm_search_form' );
