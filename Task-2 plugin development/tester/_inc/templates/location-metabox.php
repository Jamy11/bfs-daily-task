<div class="inside">
    <form action=""></form>
    <p>
        <label class="screen-reader-text" for="">Location</label>
        <input type="text" name="news_location" id="news_location"
        value="<?php echo get_post_meta($post->ID, '_news_location',true) ?>">
    </p>

</div>