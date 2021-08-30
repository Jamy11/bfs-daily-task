<?php


function hwy_welocme_home_page()
{
    add_dashboard_page('Welcome', "Welcome", 'read', 'hwy', 'hwy_welcome_page');
    // add_dashboard_page( $page_title:string, $menu_title:string, $capability:string, $menu_slug:string, $function:callable, $position:integer|null )
}

add_action('admin_menu', 'hwy_welocme_home_page');

function hwy_welcome_page()
{

    include dirname(__FILE__) . '/templates/welcome-page.php';
}


function hwy_remove_page_menu()
{
    remove_submenu_page('index.php', 'hwy');
}

add_action('admin_head', 'hwy_remove_page_menu');


function hwy_welcome_screen_activate()
{
    set_transient('hwy_welcome_activate', true, 30);
}

register_activation_hook(HWY_PLUGIN_FILE, 'hwy_welcome_screen_activate');

function activated_redirct_page()
{

    if ( ! get_transient( 'hwy_welcome_activate' )) {
        return;
    }

    delete_transient( 'hwy_welcome_activate');

    if ( isset( $_GET['activate-multi'])) {
        return;
    }

    wp_safe_redirect(admin_url('index.php?page=hwy'));

    die();
}

add_action('admin_init', 'activated_redirct_page');
