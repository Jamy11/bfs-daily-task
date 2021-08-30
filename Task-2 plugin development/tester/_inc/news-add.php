<?php

function hwy_add_news_post_type(){
    $args = array(
        'labels'=>array(
            'name'=>__('News'),
            'singular_name'=>__('News'),
        ),
        'public'=>true,
        'has_archived'=>true,
    );

    register_post_type('news',$args);

    register_taxonomy( 'news_catagory', 'news', array(
        'label' => 'news catagory',
        'hierarchical' => true,
    ) );
}

add_action( 'init', 'hwy_add_news_post_type');

function tester_news_activation(){
    hwy_add_news_post_type();
    flush_rewrite_rules();
}

register_activation_hook( __FILE__, 'tester_news_activation');