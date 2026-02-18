<?php
/**
 * Samurai Scrollytelling functions and definitions
 */

function samurai_theme_scripts()
{
    // Enqueue styles - get_stylesheet_uri() points to style.css in the theme root
    wp_enqueue_style('samurai-style', get_stylesheet_uri(), array(), '1.1');

    // Enqueue scripts
    wp_enqueue_script('samurai-main-js', get_template_directory_uri() . '/main.js', array(), '1.1', true);

    // Localize asset paths
    wp_localize_script('samurai-main-js', 'samuraiData', array(
        'imagePath' => get_template_directory_uri() . '/assets/images/'
    ));
}
add_action('wp_enqueue_scripts', 'samurai_theme_scripts');
