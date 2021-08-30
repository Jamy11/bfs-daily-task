<?php

class HWY_Admin
{
    function __construct()
    {
        add_action('admin_menu', array($this, 'register_settings_menu_page'));
        // add_action('admin_print_styles',array($this,'add_css_style')); // work
        add_action('admin_enqueue_scripts',array($this,'add_css_style')); // work
        
        // add_action('wp_enqueue_scripts', array($this,'add_css_style')); // desnot work
    }

    function add_css_style($hook){
        // die(var_dump($hook));
        if( $hook != 'news_page_news-setting')
            return ;


        wp_enqueue_style('news_settings_style',
        plugins_url('/includes/css/settings.css',HWY_PLUGIN_FILE),
        array(),HWY_PLUGIN_VERSION);

        wp_enqueue_script('news_settings_style',
        plugins_url('/includes/js/settings.js',HWY_PLUGIN_FILE),
        array(),HWY_PLUGIN_VERSION,true);
    }

    function register_settings_menu_page()
    {
        add_submenu_page('edit.php?post_type=news', 'News Settings', 'Settings', 'manage_options', 'news-setting', array($this, 'render_settings_page'));
    }

    function render_settings_page()
    {
        if (isset($_POST['news-settings-save-nonce']))
            $this->save_setting();
        include dirname(__FILE__) . '/templates/admin-settings.php';
    }

    function save_setting()
    {
        // die('saving');
        if (!wp_verify_nonce($_POST['news-settings-save-nonce'], 'news-settings-save')) {
            die('Are you sure you want to do this');
        }
        if (isset($_POST['news_related_title']))
            update_option('hwy_news_related_title', sanitize_text_field($_POST['news_related_title']));

        if(isset($_POST['show_related']))
            update_option('hwy_show_related',true);
        else
            update_option('hwy_show_related',false);

        $this->success_messege();
    }

    function success_messege()
    {
        ?>
        <div class="notice notice-success">
            <p>
                Settings Saved

            </p>

        </div>

        <?php

    }


}

$hwy_admin = new HWY_Admin();
// die(wp_get_theme()->get('Version'));
// die(HWY_PLUGIN_VERSION);