<div class="wrap">
    <h1>News Settings</h1>

    <form method="POST" action="<?php echo admin_url('edit.php?post_type=news&page=news-setting'); ?>" >
        <?php wp_nonce_field('news-settings-save', 'news-settings-save-nonce'); ?>

        <table class='form-table'>
            <tbody>
                <tr>
                    <th><label for="">Related News Title</label></th>
                    <td>
                        <input type="text" id="news_related_title" name="news_related_title"
                         value="<?php echo esc_attr(get_option('hwy_news_related_title', 'Related News'))  ?>" required>

                    </td>
                </tr>

                <tr>
                    <th><label for="">Related News Title</label></th>
                    <td>
                        <input type="checkbox" id="show_related" name="show_related" value='
                        <?php echo checked( get_option('hwy_show_related', true), true) ?>' >

                    </td>
                </tr>

            </tbody>
        </table>
        <p class="submit">
            <input type="submit" name="submit" id="submit" class="button button-primary" value="Save Changes">
        </p>
    </form>

</div>