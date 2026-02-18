<?php get_header(); ?>

<main id="smooth-wrapper">
    <section class="hero-scroll" id="hero">
        <div class="sticky-frame">
            <!-- Base Image -->
            <div class="samurai-container">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/samurai1.png" alt="Samurai Base"
                    class="samurai-base" id="samurai1">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/samurai2.png" alt="Powered Samurai"
                    class="samurai-upgraded" id="samurai2">

                <!-- Armor Physics Layers -->
                <div class="armor-layer" id="armor-parts">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/helmet.png" class="armor-part"
                        id="part-helmet" data-anchor-x="0" data-anchor-y="0">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/body.png" class="armor-part"
                        id="part-body" data-anchor-x="0" data-anchor-y="0">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/left_arm2.png"
                        class="armor-part" id="part-left-arm" data-anchor-x="0" data-anchor-y="0">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/right_arm.png"
                        class="armor-part" id="part-right-arm" data-anchor-x="0" data-anchor-y="0">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/shoulders.png"
                        class="armor-part" id="part-shoulders" data-anchor-x="0" data-anchor-y="0">
                </div>
            </div>

            <div class="hero-overlay">
                <div class="text-mask">
                    <h1 class="hero-title">BUSHIDO</h1>
                </div>
                <div class="text-mask">
                    <p class="hero-subtitle">The Way of the Warrior</p>
                </div>
            </div>
        </div>
    </section>

    <section class="about-section" id="about">
        <div class="about-container">
            <div class="reveal-mask">
                <h2 class="section-title">The Legend of the Unifier</h2>
            </div>
            <div class="reveal-mask">
                <p class="section-text">
                    Beyond the edge of the blade lies the spirit of the warrior. In the heart of the
                    Sengoku Jidai, honor was foraged in blood and fire. To unify a nation, one must
                    transcend the path of the sword and embrace the unyielding strength of an armored soul.
                </p>
            </div>
        </div>
    </section>

    <section class="armor-section" id="armor">
        <h2 class="section-title main-title">The Warrior's Armor</h2>
        <div class="armor-grid">
            <!-- Card 1: Helmet -->
            <div class="armor-card">
                <div class="card-image-wrap">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/helmet.png" alt="Kabuto"
                        class="card-img">
                </div>
                <div class="card-content">
                    <h3>Kabuto</h3>
                    <span class="card-tag">Protection & Honor</span>
                    <p>The helmet was more than defense; it was a statement of lineage and fear. Forged from iron
                        plates and decorated with elaborate crests, the Kabuto protected the mind that guided the
                        blade.</p>
                </div>
            </div>

            <!-- Card 2: Body -->
            <div class="armor-card">
                <div class="card-image-wrap">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/body.png" alt="Do"
                        class="card-img">
                </div>
                <div class="card-content">
                    <h3>Dō</h3>
                    <span class="card-tag">The Iron Core</span>
                    <p>The cuirass formed the immovable heart of the samurai's defense. Whether of solid plate or
                        scale, it deflected the thrusts of spears and the strike of arrows, shielding the warrior's
                        life-force.</p>
                </div>
            </div>

            <!-- Card 3: Left Arm (Kote) -->
            <div class="armor-card">
                <div class="card-image-wrap">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/left_arm.png" alt="Kote"
                        class="card-img">
                </div>
                <div class="card-content">
                    <h3>Kote</h3>
                    <span class="card-tag">Precision Shield</span>
                    <p>The armored sleeves provided flexibility and strength. Silk, mail, and small iron plates
                        combined to protect the arms without hindering the swift, lethal movement of the katana.</p>
                </div>
            </div>

            <!-- Card 4: Shoulders (Sode) -->
            <div class="armor-card">
                <div class="card-image-wrap">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/shoulders.png" alt="Sode"
                        class="card-img">
                </div>
                <div class="card-content">
                    <h3>Sode</h3>
                    <span class="card-tag">The Mantle of Steel</span>
                    <p>Broad shoulder plates acted as mobile shields. They provided protection against descending
                        strikes and arrows, sliding effortlessly as the warrior moved through the flow of combat.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <?php get_footer(); ?>