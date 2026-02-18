class ScrollPhysics {
    constructor() {
        this.parts = [];
        this.scrollProgress = 0;
        this.lerpedProgress = 0;
        this.noiseOffset = Math.random() * 1000;

        this.init();
    }

    init() {
        const partElements = document.querySelectorAll('.armor-part');
        partElements.forEach(el => {
            const part = {
                el: el,
                id: el.id,
                offsetX: 0,
                offsetY: -500,
                rotation: -15,
                opacity: 0,
                scale: 1,
                targetX: 0,
                targetY: 0,
                damping: 0.95,
                springiness: 0.03
            };

            if (el.id === 'part-helmet') {
                part.offsetX = 0;
                part.offsetY = -1200;
                part.rotation = -15;
                part.targetX = 0;
                part.targetY = -80;
                part.scale = 0.85;
                part.startScroll = 0;
                part.endScroll = 0.35;
            }

            if (el.id === 'part-body') {
                part.offsetX = 0;
                part.offsetY = 1200;
                part.rotation = 5;
                part.targetX = 0;
                part.targetY = 330;
                part.scale = 1.25;
                part.startScroll = 0.15;
                part.endScroll = 0.4;
            }

            if (el.id === 'part-shoulders') {
                part.offsetX = 0;
                part.offsetY = -800;
                part.rotation = -10;
                part.targetX = 0;
                part.targetY = 80;
                part.scale = 0.95;
                part.startScroll = 0.2;
                part.endScroll = 0.45;
            }

            if (el.id === 'part-right-arm') {
                part.offsetX = -400;
                part.offsetY = 100;
                part.rotation = -10;
                part.targetX = -100;
                part.targetY = 360;
                part.scale = 0.85;
                part.startScroll = 0.25;
                part.endScroll = 0.5;
            }

            if (el.id === 'part-left-arm') {
                part.offsetX = 400;
                part.offsetY = 100;
                part.rotation = 10;
                part.targetX = 150;
                part.targetY = 280;
                part.scale = 0.85;
                part.startScroll = 0.25;
                part.endScroll = 0.5;
            }
            this.parts.push(part);
        });

        this.bindEvents();
        this.update();
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            const hero = document.getElementById('hero');
            const heroHeight = hero.offsetHeight;
            this.scrollProgress = Math.min(1, Math.max(0, window.scrollY / (heroHeight - window.innerHeight)));
        });
    }

    update() {
        this.lerpedProgress += (this.scrollProgress - this.lerpedProgress) * 0.1;

        this.animateParts();
        this.handleSectionAnimations();

        requestAnimationFrame(() => this.update());
    }

    animateParts() {
        const p = this.lerpedProgress;

        const s1 = document.getElementById('samurai1');
        const s2 = document.getElementById('samurai2');

        const transStart = 0.4;
        const transEnd = 0.5;
        const transP = Math.min(1, Math.max(0, (p - transStart) / (transEnd - transStart)));

        const title = document.querySelector('.hero-title');
        const subtitle = document.querySelector('.hero-subtitle');
        if (title && subtitle) {
            const maskP = p;
            const titleOffset = maskP * 600;
            const subtitleOffset = maskP * 450;

            title.style.transform = `translateY(${titleOffset}px)`;
            subtitle.style.transform = `translateY(${subtitleOffset}px)`;
        }

        s1.style.opacity = 1 - transP;
        s2.style.opacity = transP;

        const baseScale = 1;
        const targetScale = 1.05;
        const currentScale = baseScale + (targetScale - baseScale) * transP;
        s1.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
        s2.style.transform = `translate(-50%, -50%) scale(${currentScale})`;

        this.parts.forEach((part) => {
            let currentOpacity = 0;
            let currentX = 0;
            let currentY = 0;
            let currentRot = 0;

            const relativeP = Math.min(1, Math.max(0, (p - part.startScroll) / (part.endScroll - part.startScroll)));

            if (p < part.endScroll) {
                const fadeP = Math.min(1, relativeP / 0.2);
                currentOpacity = fadeP;
                const slideP = this.cubicBezier(relativeP);
                currentX = part.offsetX * (1 - slideP) + part.targetX * slideP;
                currentY = part.offsetY * (1 - slideP) + part.targetY * slideP;
                currentRot = part.rotation * (1 - slideP);
            } else {
                currentOpacity = 1;
                currentX = part.targetX;
                currentY = part.targetY;
                currentRot = 0;
            }

            const finalOpacity = currentOpacity * (1 - transP);

            part.el.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)) rotate(${currentRot}deg) scale(${part.scale})`;
            part.el.style.opacity = finalOpacity;
        });
    }

    handleSectionAnimations() {
        const about = document.getElementById('about');
        const masks = about.querySelectorAll('.reveal-mask');
        const aboutRect = about.getBoundingClientRect();

        if (aboutRect.top < window.innerHeight * 0.8) {
            masks.forEach(m => m.classList.add('active'));
        }
    }

    cubicBezier(t) {
        return t * t * (3 - 2 * t);
    }

    handleNavbar() {
        const navbar = document.getElementById('navbar');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                navbar.classList.add('navbar--hidden');
            } else {
                navbar.classList.remove('navbar--hidden');
            }
            lastScrollY = window.scrollY;
        }, { passive: true });
    }
}

export function initScrollPhysics() {
    const physics = new ScrollPhysics();
    physics.handleNavbar();
    return physics;
}
