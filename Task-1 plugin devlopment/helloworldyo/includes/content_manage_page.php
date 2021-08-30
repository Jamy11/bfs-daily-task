<?php

require_once dirname(__FILE__).'/admin-settings.php';
//// content checking
function add_post_to_end_of_content($content){
    if(is_singular( 'news' ) && get_option('hwy_show_related',true)){
        $args = array(
            'posts_per_page'=>3,
            'post_type' =>'news',
            'exclude'=>get_the_ID(),
            // 'meta_key'=>'_news_location',
            'meta_value'=>get_post_meta(get_the_ID(),'_news_location',true),
        );
        

        $wp_query = new WP_Query;
        $latest_posts = $wp_query->query($args);
        if(count($latest_posts)){
            ob_start();
            ?>
                <h3><?php echo esc_html(get_option('hwy_news_related_title', 'Related News')) ?></h3>
                <ul class="latest-post">
                    <?php foreach($latest_posts as $post): ?>
                    <li><a href="<?php echo get_the_permalink($post->ID);?>"><?php echo get_the_title($post->ID)?></a></li>

                    <?php endforeach; ?>
                </ul>
            <?php
            $content .= ob_get_clean();
        }
        
    }
    return $content;
}

add_filter('the_content','add_post_to_end_of_content');