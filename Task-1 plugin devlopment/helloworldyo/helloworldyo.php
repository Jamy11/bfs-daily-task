<?php

/*
Plugin Name: Jamy Custom Plugin
Plugin URI: https://akismet.com/
Description: then go to your Akismet Settings page to set up your API key.
Version: 4.1.11
Author: Automattic
Author URI: https://automattic.com/wordpress-plugins/
License: GPLv2 or later
Text Domain: hello-world-yo
*/


if(!defined('ABSPATH'))
    die("No script kitties please");

define('HWY_PLUGIN_FILE',__FILE__);
define('HWY_PLUGIN_VERSION','0');


require_once dirname(__FILE__).'/includes/wp-requirments.php';
$plughin_Check = new HWY_Requirements( 'Hello World YO' , HWY_PLUGIN_FILE , array(
    'PHP'=> '5.5.3',
    'WordPress'=>'4.1',
));

if(false == $plughin_Check->pass()){
    $plughin_Check->halt();
    return;
}

require_once dirname(__FILE__).'/includes/news_meta_box.php';
// require_once dirname(__FILE__).'/includes/admin-settings.php';  //moved to content-manage
require_once dirname(__FILE__).'/includes/content_manage_page.php';
require_once dirname(__FILE__).'/includes/test-api.php';
require_once dirname(__FILE__). '/includes/welcome-home.php';


function hwy_add_content_on_activation(){
    if( get_option('hwy_page_id',false))
        return;
    $post_id = wp_insert_post(array(
        'post_title' => 'Hello world con',
        'post_status' =>'publish',
        'post_type'=>'page',
        'post_content'=>'[my-test-shortocde]'
    )
    );
    update_option('hwy_page_id',$post_id);
}

register_activation_hook(HWY_PLUGIN_FILE,'hwy_add_content_on_activation');


function hwy_add_news_post_type(){
    $args = array(
        'labels'=>array(
            'name'=>__('News'),
            'singular_name'=> __('News')
        ),
        'public'=>true,
        'has_archived'=>true,
        'supports'=> array('title','editor','excerpt','thumbnail'),
    );
    register_post_type('news',$args);

    register_taxonomy('news_catagory','news',array(
        'hierarchical'=>true,
        'label'=> 'News Catagory',
    ));

    
}
add_action('init','hwy_add_news_post_type');

// activate plugin function
function hwy_activate(){
    hwy_add_news_post_type();
    flush_rewrite_rules();
}
register_activation_hook('__FILE__','hwy_activate');

