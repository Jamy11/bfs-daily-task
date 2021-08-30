<?php


if(!defined('ABSPATH'))
    die("No script kitties please");

//add location box
function add_meta_box_location(){
    add_meta_box('news_meta_box','News Location','hwy_render_news_meta_box_location','news','normal','low');
}
add_action('add_meta_boxes_news','add_meta_box_location');

///redenring the output
function hwy_render_news_meta_box_location($post){
    ?>
        <div class="inside">
            <p>
                <label for="">Location</label>
                <input type="text" id="news_location" name="news_location" value="<?php echo esc_html__(get_post_meta($post->ID,'_news_location',true)) ; ?>">
            </p>
        </div>
    <?php
}
     
    //saving data 
function hwy_save_news_location($post_id){
    if(defined('DOING_AUTOSAVE')&& DOING_AUTOSAVE)
        return;
    if(isset($_POST['news_location']))
        update_post_meta($post_id,'_news_location',sanitize_text_field($_POST['news_location']) );
        
    
}
add_action('save_post_news','hwy_save_news_location');

//location adding for only news
function hwy_add_location($content){
    if(is_singular( 'news' ))
        $content = '<p class="my-location" >'.get_post_meta(get_the_ID(),'_news_location',true).'</p>'.$content;
    return $content;
    
}
add_action('the_content','hwy_add_location');
