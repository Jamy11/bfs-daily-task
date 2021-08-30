<?php

//adding content after news
function add_content_after_news( $content ) {
    if( is_singular( 'news' ) )
    {
        $content = $content."Location : ".get_post_meta(get_the_ID(),'_news_location',true ) ."<br>- Devloped By Jamy";
    }
    return $content;
    
}
add_filter('the_content','add_content_after_news');