<?php

//// viewing meta box
function tester_add_news_meta_box(){
    add_meta_box( 'news_location_meta_box', 'News Location', 'tester_news_location_render', 'news', 'normal', 'low' );

}
function tester_news_location_render( $post ){
    include dirname(__FILE__).'/templates/location-metabox.php';
}

add_action('add_meta_boxes_news','tester_add_news_meta_box');


//// saving the data

function save_news_location_meta_data( $post_id ) {
    if( isset( $_POST['news_location']) ){
        update_post_meta( $post_id, '_news_location', $_POST['news_location'] );
    }
}

add_action('save_post_news','save_news_location_meta_data');