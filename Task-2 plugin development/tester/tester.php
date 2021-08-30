<?php
/**
 * @package Akismet
 */
/*
Plugin Name: Tester
Plugin URI: https://akismet.com/
Description: Testing purpose.
Version: 1.1
Author: Automattic
Author URI: https://automattic.com/wordpress-plugins/
License: GPLv2 or later
Text Domain: akismet
*/

if(!defined('ABSPATH'))
    die("No script kitties please");


require_once dirname(__FILE__).'/_inc/wp-requirments.php';
// require_once dirname(__FILE__).'/_inc/news-add.php';
require_once dirname(__FILE__).'/_inc/add-content-news.php';
require_once dirname(__FILE__).'/_inc/add-news-meta-box.php';



define('TESTER_FILE_LOCATION',__FILE__);

$plugin_check = new Tester_Requirements('Tester', TESTER_FILE_LOCATION, array(
    'PHP' => '5.5.3',
    'WordPress' => '4.8'
));

if( false === $plugin_check->pass() ) {
    $plugin_check->halt();
    return;
}


function hwy_add_news_post_type(){
    $args = array(
        'labels'=>array(
            'name'=>__('News'),
            'singular_name'=>__('News'),
        ),
        'public'=>true,
        'has_archived'=>true,
        'supports'=>array('title','editor','excerpt','thumbnail'),
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

