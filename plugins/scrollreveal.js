import ScrollReveal from 'scrollreveal';

export default (context, inject) => {
    const scrollRevealConfig = {
        duration: 1000,
        distance: '50px',
        easing: 'ease-in-out',
        reset: false,
        mobile: true,
        delay: 0,
        opacity: 0,
        scale: 1,
        cleanup: true,
        viewFactor: 0.2,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    const twoScrollConfig = {
        duration: 1000,
        distance: '50px',
        easing: 'ease-in-out',
        reset: false,
        mobile: true,
        delay: 0,
        opacity: 0,
        scale: 1,
        cleanup: true,
        viewFactor: 0.2,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }

    inject('scrollReveal', () => ScrollReveal(scrollRevealConfig));
    inject('twoScroll', () => ScrollReveal(twoScrollConfig));
};