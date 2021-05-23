console.log('CAN 119 - PDP order journey');
var utils = window["optimizely"].get('utils');

var cvTarget1;
var cvTarget2;
var cvTarget2b;
var cvTarget3;
var cvTarget3b;
var cvTarget4;
var cvTarget4b;
var cvTarget5;
var cvVideoSection;
var productName;
var button;
var image;
var template;

utils.waitUntil(function () {
    if (window.location.href.toLowerCase().indexOf('/pixma-mg3650s') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma-ts3350-series') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma-ts8350-series') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma-ts3150-series') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma-ts5150-series') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma-tr8550') > -1) {
        template = '1';
        cvTarget1 = document.querySelector('.pl-hero--full');
        cvTarget2 = document.querySelector('#ffpprodspecnav1 + section');
        cvTarget2b = document.querySelector('#ffpprodspecnav1 + section + section');
        cvTarget3 = document.querySelector('#ffpprodspecnav1 + section + section + section');
        if (window.location.href.toLowerCase().indexOf('/pixma-ts3350-series') === -1 && window.location.href.toLowerCase().indexOf('/pixma-ts8350-series') === -1) {
            cvTarget3b = document.querySelector('#ffpprodspecnav1 + section + section + section + section + div') || document.querySelector('#ffpprodspecnav1 + section + section + section + section') || document.querySelector('#ffpprodspecnav1 + section + section + section.pl-spacer--in--large + div');

        }
        if (window.location.href.toLowerCase().indexOf('/pixma-tr8550') === -1) {
            cvTarget4 = document.querySelector('#ffpprodspecnav1 + section + section + section + section.pl-spacer--in--medium + div + section') || document.querySelector('#ffpprodspecnav1 + section + section + section + section.pl-spacer--in--medium + section') || document.querySelector('#ffpprodspecnav1 + section + section + section + section.pl-bg') || document.querySelector('section.pl-anchor-tabs--section + section');
        } else {
            if (document.querySelectorAll('.pl-spacer.pl-spacer--in--large.pl-spacer--cut-h.pl-bg.pl-bg--white').length > 2) {
                cvTarget4 = document.querySelectorAll('.pl-spacer.pl-spacer--in--large.pl-spacer--cut-h.pl-bg.pl-bg--white')[2];
            }

            cvVideoSection = document.querySelector('#ffpprodspecnav1 + section + section + section + div');
        }
        productName = document.querySelector('.pl-hero h1');
        button = document.querySelector('.pl-hero a.shop-block');
        image = document.querySelector('#ffpprodspecnav1 + section picture');
    } else if (window.location.href.toLowerCase().indexOf('/pixma_mg3650') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma_pro-100s') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma_mg2550s') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma_ip8750') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma_mx475') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma_mg5700_series') > -1 ||
        window.location.href.toLowerCase().indexOf('/pixma_ix6850') > -1) {
        template = '2';
        cvTarget1 = document.querySelector('.sticky-wrapper');
        cvTarget1b = document.querySelector('.scroll-element.hidden-carousel');
        cvTarget2 = document.querySelector('#features');
        cvTarget3 = document.querySelector('#features + div.content-block');
        cvTarget4 = document.querySelector('#specification');
        productName = document.querySelector('.sticky-wrapper h1');
        button = document.querySelector('.sticky-wrapper .shop-block a.btn');
        image = document.querySelector('.scroll-element.hidden-carousel .rsContainer > div:first-child img');
    } else if (window.location.href.toLowerCase().indexOf('/pixma-ts5050-series') > -1) {
        template = '3';
        cvTarget1 = document.querySelector('.pl-hero--full');
        cvTarget1b = document.querySelector('#ffpprodspecnav1 + section + section');
        cvVideoSection = document.querySelector('#ffpprodspecnav1 + section + section + div');
        cvTarget2 = document.querySelector('#ffpprodspecnav1 + section + section + div + div');
        cvTarget2b = document.querySelector('#anchorid1569076');
        cvTarget3 = document.querySelector('#anchorid1569076 + section');
        cvTarget4 = document.querySelector('#anchorid1569076 + section + section');
        productName = document.querySelector('.pl-hero h1');
        button = document.querySelector('.pl-hero a.shop-block');
        image = document.querySelector('#ffpprodspecnav1 + section picture');
    } else if (window.location.href.toLowerCase().indexOf('/selphy-qx10') > -1) {
        template = '4';
        cvTarget1 = document.querySelector('.row.no-gutter.pl-bg.pl-bg--white.pl-relative');
        cvTarget1b = document.querySelector('section.pl-bg.pl-bg--white');
        cvTarget2 = document.querySelector('section.pl-bg.pl-bg--white + section.pl-spacer.pl-spacer--out--medium');
        if (document.querySelectorAll('.pl-hero.pl-hero--half.pl-hero--half--takeover.pl-anchor-tabs--section').length > 3) {
            cvTarget2b = document.querySelectorAll('.pl-hero.pl-hero--half.pl-hero--half--takeover.pl-anchor-tabs--section')[3];
        }
        cvTarget3 = document.querySelector('.product-comp-specification');
        cvTarget4 = document.querySelector('.product-comp-specification + section');
        cvTarget5 = document.querySelector('.product-comp-specification + section + section');
        productName = document.querySelector('.row.no-gutter.pl-bg.pl-bg--white.pl-relative .pl-fix--desktop--vertical h1');
        button = document.querySelector('.row.no-gutter.pl-bg.pl-bg--white.pl-relative .pl-fix--desktop--vertical a.shop-block');
        image = document.querySelector('section .col-md-6.col-md-offset-3 picture');
    }

    return (window.jQuery &&
        ((template === '1' && cvTarget1 && cvTarget2 && cvTarget2b && cvTarget3 && cvTarget4 && productName && button && image) ||
            (template === '2' && cvTarget1 && cvTarget1b && cvTarget2 && cvTarget3 && cvTarget4 && productName && image) ||
            (template === '3' && cvTarget1 && cvTarget1b && cvTarget2 && cvTarget2b && cvTarget3 && cvTarget4 && productName && button && image) ||
            (template === '4' && cvTarget1 && cvTarget1b && cvTarget2 && cvTarget3 && cvTarget4 && cvTarget5 && productName && button && image)));
}).then(function () {
    console.log('CAN 119 - PDP order journey - Running', cvTarget1);

    // Add class to body
    document.querySelector('body').classList.add('cv-119-template-' + template);

    // Add the 'Shop Now' section
    var shopNowSectionHTML;

    if (template !== '2') {
        shopNowSectionHTML = '<section class="cv-119-shop-now pl-spacer pl-spacer--in--large pl-spacer--cut-h pl-bg pl-bg--white"><div class="cv-content"><p class="cv-text">Shop the Canon' + productName.innerText.replace('Canon', '') + '</p><p class="cv-link"></p></div><div class="cv-image"></div></div>';
    } else if (template === '2') {
        shopNowSectionHTML = '<section class="cv-119-shop-now pl-spacer pl-spacer--in--large pl-spacer--cut-h pl-bg pl-bg--white"><div class="cv-content"><p class="cv-text">Shop the Canon' + productName.innerText.replace('Canon', '') + '</p></div><div class="cv-image"></div><div class="cv-link-container"><p class="cv-link"></p></div>"</div>';
    }

    if (template !== '4') {
        if (!cvTarget4b) {
            cvTarget4.insertAdjacentHTML('afterEnd', shopNowSectionHTML);
        } else {
            cvTarget4b.insertAdjacentHTML('afterEnd', shopNowSectionHTML);
        }
    } else {
        cvTarget5.insertAdjacentHTML('afterEnd', shopNowSectionHTML);
    }


    var shopNowSection = document.querySelector('.cv-119-shop-now');

    if (button) {
        shopNowSection.querySelector('.cv-link').insertAdjacentElement('afterBegin', button.cloneNode(true));
    }

    shopNowSection.querySelector('.cv-image').insertAdjacentElement('afterBegin', image.cloneNode(true));

    // Tracking
    var shopwNowButton = shopNowSection.querySelector('.cv-link');

    shopwNowButton.addEventListener('mousedown', function () {
        window['optimizely'].push({
            type: "event",
            eventName: 'user_clicks_on_shop_now_cta_can_119'
        });
    });

    shopwNowButton.addEventListener('click', function () {
        window['optimizely'].push({
            type: "event",
            eventName: 'user_clicks_on_shop_now_cta_can_119'
        });
    });

    // Add the navigation to each section
    var barHTML;

    if (template === '1') {
        if (!cvVideoSection) {
            barHTML = '<div class="cv-119"> <div class="cv-section cv-section-1 cv-active"> <div class="cv-bar"></div> <div class="cv-title">MODEL</div> </div> <div class="cv-section cv-section-2" cv-tracking="features"> <div class="cv-bar"></div> <div class="cv-title">FEATURES</div> </div> <div class="cv-section cv-section-3" cv-tracking="specs"> <div class="cv-bar"></div> <div class="cv-title">SPECS</div> </div> <div class="cv-section cv-section-4" cv-tracking="whats_in_the_box"> <div class="cv-bar"></div> <div class="cv-title">WHAT\'S <br />IN THE BOX</div> </div> <div class="cv-section cv-section-5" cv-tracking="shop_now"> <div class="cv-bar"></div> <div class="cv-title">SHOP</div> </div> </div>';
        } else {
            barHTML = '<div class="cv-119"> <div class="cv-section cv-section-1 cv-active"> <div class="cv-bar"></div> <div class="cv-title">MODEL</div> </div> <div class="cv-section cv-section-2" cv-tracking="features"> <div class="cv-bar"></div> <div class="cv-title">FEATURES</div> </div> <div class="cv-section cv-section-3" cv-tracking="specs"> <div class="cv-bar"></div> <div class="cv-title">SPECS</div> </div> <div class="cv-section cv-section-4" cv-tracking="video"> <div class="cv-bar"></div> <div class="cv-title">VIDEO</div> </div> <div class="cv-section cv-section-5" cv-tracking="whats_in_the_box"> <div class="cv-bar"></div> <div class="cv-title">WHAT\'S <br />IN THE BOX</div> </div> <div class="cv-section cv-section-6" cv-tracking="shop_now"> <div class="cv-bar"></div> <div class="cv-title">SHOP</div> </div> </div>';
        }
    } else if (template === '2') {
        barHTML = '<div class="cv-119"> <div class="cv-section cv-section-1 cv-active"> <div class="cv-bar"></div> <div class="cv-title">MODEL</div> </div> <div class="cv-section cv-section-2" cv-tracking="benefits"> <div class="cv-bar"></div> <div class="cv-title">BENEFITS</div> </div> <div class="cv-section cv-section-3" cv-tracking="features"> <div class="cv-bar"></div> <div class="cv-title">FEATURES</div> </div> <div class="cv-section cv-section-4" cv-tracking="specs"> <div class="cv-bar"></div> <div class="cv-title">SPECS</div> </div> <div class="cv-section cv-section-5" cv-tracking="shop_now"> <div class="cv-bar"></div> <div class="cv-title">SHOP</div> </div> </div>';
    } else if (template === '3') {
        barHTML = '<div class="cv-119"> <div class="cv-section cv-section-1 cv-active"> <div class="cv-bar"></div> <div class="cv-title">MODEL</div> </div> <div class="cv-section cv-section-2" cv-tracking="video"> <div class="cv-bar"></div> <div class="cv-title">VIDEO</div> </div> <div class="cv-section cv-section-3" cv-tracking="features"> <div class="cv-bar"></div> <div class="cv-title">FEATURES</div> </div> <div class="cv-section cv-section-4" cv-tracking="specs"> <div class="cv-bar"></div> <div class="cv-title">SPECS</div> </div> <div class="cv-section cv-section-5" cv-tracking="whats_in_the_box"> <div class="cv-bar"></div> <div class="cv-title">WHAT\'S <br />IN THE BOX</div> </div> <div class="cv-section cv-section-6" cv-tracking="shop_now"> <div class="cv-bar"></div> <div class="cv-title">SHOP</div> </div> </div>';
    } else if (template === '4') {
        barHTML = '<div class="cv-119"> <div class="cv-section cv-section-1 cv-active"> <div class="cv-bar"></div> <div class="cv-title">MODEL</div> </div> <div class="cv-section cv-section-2" cv-tracking="features"> <div class="cv-bar"></div> <div class="cv-title">FEATURES</div> </div> <div class="cv-section cv-section-3" cv-tracking="comparison"> <div class="cv-bar"></div> <div class="cv-title">COMPARISON</div> </div> <div class="cv-section cv-section-4" cv-tracking="specs"> <div class="cv-bar"></div> <div class="cv-title">SPECS</div> </div> <div class="cv-section cv-section-5" cv-tracking="whats_in_the_box"> <div class="cv-bar"></div> <div class="cv-title">WHAT\'S <br />IN THE BOX</div> </div> <div class="cv-section cv-section-6" cv-tracking="shop_now"> <div class="cv-bar"></div> <div class="cv-title">SHOP</div> </div> </div>';
    }

    document.querySelector('body').insertAdjacentHTML('afterBegin', barHTML);

    var highlightSection = function (index) {
        try {
            if (index !== '0') {
                window.clearTimeout(window.cvShowTitle);
                window.clearTimeout(window.cvShowTitleContainer);

                var elementContainer = document.querySelector('.cv-119 .cv-section-' + index);
                var element = elementContainer.querySelector('.cv-title');

                elementContainer.classList.add('cv-active');
                elementContainer.classList.add('cv-show');
                element.classList.add('cv-show');

                window.jQuery('.cv-119 .cv-section:not(.cv-section-' + index + ')').removeClass('cv-active');
                window.jQuery('.cv-119 .cv-section:not(.cv-section-' + index + ')').removeClass('cv-show');
                window.jQuery('.cv-119 .cv-section:not(.cv-section-' + index + ') .cv-title').removeClass('cv-show');

                window.cvShowTitle = setTimeout(function () {
                    element.classList.remove('cv-show');

                    window.cvShowTitleContainer = setTimeout(function () {
                        elementContainer.classList.remove('cv-show');
                    }, 500);
                }, 5000);
            } else {
                window.jQuery('.cv-119 .cv-active').removeClass('cv-active');
                window.jQuery('.cv-119 .cv-show').removeClass('cv-show');
            }

            // Tracking
            if (index === '2' && template !== '2' && template !== '3') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_features_section_can_119'
                });
            } else if (index === '2' && template === '2') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_benefits_section_can_119'
                });
            } else if (index === '2' && template === '3') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_video_section_can_119'
                });
            } else if (index === '3' && template === '1') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_specs_section_can_119'
                });
            } else if (index === '3' && template === '2') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_features_section_can_119'
                });
            } else if (index === '3' && template === '3') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_features_section_can_119'
                });
            } else if (index === '3' && template === '4') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_comparison_section_can_119'
                });
            } else if (index === '4' && template === '1' && !cvVideoSection) {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_whats_in_the_box_section_can_119'
                });
            } else if (index === '4' && template === '3') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_specs_section_can_119'
                });
            } else if (index === '4' && template !== '2' && template !== '4' && cvVideoSection) {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_video_section_can_119'
                });
            } else if ((index === '4' && template === '2') || (index === '4' && template === '4')) {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_specs_section_can_119'
                });
            } else if (index === '5' && template !== '4' && template !== '3' && !cvVideoSection) {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_shop_now_section_can_119'
                });
            } else if (index === '5' && template === '3') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_whats_in_the_box_section_can_119'
                });
            } else if (index === '5' && template !== '4' && cvVideoSection) {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_whats_in_the_box_section_can_119'
                });
            } else if (index === '5' && !cvVideoSection) {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_whats_in_the_box_section_can_119'
                });
            } else if (index === '5' && !cvVideoSection) {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_whats_in_the_box_section_can_119'
                });
            } else if (index === '5' && cvVideoSection && template === '1') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_shop_now_section_can_119'
                });
            } else if (index === '6') {
                window['optimizely'].push({
                    type: "event",
                    eventName: 'user_scroll_to_shop_now_section_can_119'
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    var yAdjust = 0;
    var yAdjustAll = -200;

    var setCurrentLocation = function () {
        try {
            var x = document.scrollingElement || document.documentElement;
            var y = x.scrollTop;

            if (window.location.href.toLowerCase().indexOf('/pixma-ts3350-series') > -1) {
                yAdjust = -130;
            } else {
                yAdjust = 0;
            }

            if (template === '1' && !cvVideoSection) {
                if (y < y + cvTarget1.getBoundingClientRect().top + cvTarget1.getBoundingClientRect().height - 20) {
                    highlightSection('1');
                } else if (y >= y + cvTarget2.getBoundingClientRect().top - 20 &&
                    y < y + cvTarget2b.getBoundingClientRect().top + cvTarget2b.getBoundingClientRect().height - 70 + yAdjustAll) {
                    highlightSection('2');
                } else if ((!cvTarget3b && y >= y + cvTarget3.getBoundingClientRect().top - 70 + yAdjustAll &&
                    y < y + cvTarget3.getBoundingClientRect().top + cvTarget3.getBoundingClientRect().height + yAdjust + yAdjustAll) ||
                    (cvTarget3b && y >= y + cvTarget3.getBoundingClientRect().top - 70 + yAdjustAll &&
                        y < y + cvTarget3b.getBoundingClientRect().top + cvTarget3b.getBoundingClientRect().height + yAdjustAll)) {
                    highlightSection('3');
                } else if (y >= y + cvTarget4.getBoundingClientRect().top - 130 + yAdjustAll &&
                    y < y + cvTarget4.getBoundingClientRect().top + cvTarget4.getBoundingClientRect().height - 130 + yAdjustAll) {
                    highlightSection('4');
                } else if (y >= y + shopNowSection.getBoundingClientRect().top - 130 + yAdjustAll &&
                    y < y + shopNowSection.getBoundingClientRect().top + shopNowSection.getBoundingClientRect().height - 130) {
                    highlightSection('5');
                } else {
                    highlightSection('0');
                }
            } else if (template === '1' && cvVideoSection) {
                if (y < y + cvTarget1.getBoundingClientRect().top + cvTarget1.getBoundingClientRect().height - 20) {
                    highlightSection('1');
                } else if (y >= y + cvTarget2.getBoundingClientRect().top - 20 &&
                    y < y + cvTarget2b.getBoundingClientRect().top + cvTarget2b.getBoundingClientRect().height - 70 + yAdjustAll) {
                    highlightSection('2');
                } else if (y >= y + cvTarget3.getBoundingClientRect().top - 70 + yAdjustAll &&
                    y < y + cvTarget3.getBoundingClientRect().top + cvTarget3.getBoundingClientRect().height + yAdjust + yAdjustAll) {
                    highlightSection('3');
                } else if (y >= y + cvVideoSection.getBoundingClientRect().top - 130 + yAdjustAll &&
                    y < y + cvVideoSection.getBoundingClientRect().top + cvVideoSection.getBoundingClientRect().height - 130 + yAdjustAll) {
                    highlightSection('4');
                } else if (y >= y + cvTarget4.getBoundingClientRect().top - 130 + yAdjustAll &&
                    y < y + cvTarget4.getBoundingClientRect().top + cvTarget4.getBoundingClientRect().height - 130 + yAdjustAll) {
                    highlightSection('5');
                } else if (y >= y + shopNowSection.getBoundingClientRect().top - 130 + yAdjustAll &&
                    y < y + shopNowSection.getBoundingClientRect().top + shopNowSection.getBoundingClientRect().height - 130) {
                    highlightSection('6');
                } else {
                    highlightSection('0');
                }
            } else if (template === '2') {
                if (y < y + cvTarget1b.getBoundingClientRect().top + cvTarget1b.getBoundingClientRect().height - 40) {
                    highlightSection('1');
                } else if (y >= y + cvTarget2.getBoundingClientRect().top - 140 &&
                    y < y + cvTarget2.getBoundingClientRect().top + cvTarget2.getBoundingClientRect().height - 200 + yAdjustAll) {
                    highlightSection('2');
                } else if (y >= y + cvTarget3.getBoundingClientRect().top - 250 + yAdjustAll &&
                    y < y + cvTarget3.getBoundingClientRect().top + cvTarget3.getBoundingClientRect().height - 170 + yAdjustAll) {
                    highlightSection('3');
                } else if (y >= y + cvTarget4.getBoundingClientRect().top - 270 + yAdjustAll &&
                    y < y + cvTarget4.getBoundingClientRect().top + cvTarget4.getBoundingClientRect().height - 130 + yAdjustAll) {
                    highlightSection('4');
                } else if (y >= y + shopNowSection.getBoundingClientRect().top - 190 + yAdjustAll &&
                    y < y + shopNowSection.getBoundingClientRect().top + shopNowSection.getBoundingClientRect().height - 280) {
                    highlightSection('5');
                } else {
                    highlightSection('0');
                }
            } else if (template === '3') {
                if (y < y + cvTarget1b.getBoundingClientRect().top + cvTarget1b.getBoundingClientRect().height - 20 + yAdjustAll) {
                    highlightSection('1');
                } else if (y >= y + cvVideoSection.getBoundingClientRect().top - 20 + yAdjustAll &&
                    y < y + cvVideoSection.getBoundingClientRect().top + cvVideoSection.getBoundingClientRect().height - 50 + yAdjustAll) {
                    highlightSection('2');
                } else if (y >= y + cvTarget2.getBoundingClientRect().top - 20 + yAdjustAll &&
                    y < y + cvTarget2b.getBoundingClientRect().top + cvTarget2b.getBoundingClientRect().height - 50 + yAdjustAll) {
                    highlightSection('3');
                } else if (y >= y + cvTarget3.getBoundingClientRect().top - 50 + yAdjustAll &&
                    y < y + cvTarget3.getBoundingClientRect().top + cvTarget3.getBoundingClientRect().height - 50 + yAdjustAll) {
                    highlightSection('4');
                } else if (y >= y + cvTarget4.getBoundingClientRect().top - 50 + yAdjustAll &&
                    y < y + cvTarget4.getBoundingClientRect().top + cvTarget4.getBoundingClientRect().height - 90 + yAdjustAll) {
                    highlightSection('5');
                } else if (y >= y + shopNowSection.getBoundingClientRect().top - 90 + yAdjustAll &&
                    y < y + shopNowSection.getBoundingClientRect().top + shopNowSection.getBoundingClientRect().height - 130) {
                    highlightSection('6');
                } else {
                    highlightSection('0');
                }
            } else if (template === '4') {
                if (y < y + cvTarget1b.getBoundingClientRect().top + cvTarget1b.getBoundingClientRect().height - 30) {
                    highlightSection('1');
                } else if (y >= y + cvTarget2.getBoundingClientRect().top - 110 &&
                    y < y + cvTarget2b.getBoundingClientRect().top + cvTarget2b.getBoundingClientRect().height - 50 + yAdjustAll) {
                    highlightSection('2');
                } else if (y >= y + cvTarget3.getBoundingClientRect().top - 130 + yAdjustAll &&
                    y < y + cvTarget3.getBoundingClientRect().top + cvTarget3.getBoundingClientRect().height - 50 + yAdjustAll) {
                    highlightSection('3');
                } else if (y >= y + cvTarget4.getBoundingClientRect().top - 50 + yAdjustAll &&
                    y < y + cvTarget4.getBoundingClientRect().top + cvTarget4.getBoundingClientRect().height - 70 + yAdjustAll) {
                    highlightSection('4');
                } else if (y >= y + cvTarget5.getBoundingClientRect().top - 100 + yAdjustAll &&
                    y < y + cvTarget5.getBoundingClientRect().top + cvTarget5.getBoundingClientRect().height - 80 + yAdjustAll) {
                    highlightSection('5');
                } else if (y >= y + shopNowSection.getBoundingClientRect().top - 80 + yAdjustAll &&
                    y < y + shopNowSection.getBoundingClientRect().top + shopNowSection.getBoundingClientRect().height - 130) {
                    highlightSection('6');
                } else {
                    highlightSection('0');
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    setCurrentLocation();

    window.addEventListener('scroll', setCurrentLocation);

    var gotoSection = function (target, index) {
        try {
            var adjustment = 1;

            var cvTarget = target;
            if (template === '2') {
                if (index === '1') {
                    adjustment = -71;
                    cvTarget = cvTarget1b;
                } else if (index === '2') {
                    adjustment = -110;

                    if (window.location.href.toLowerCase().indexOf('/pixma_ix6850') > -1) {
                        adjustment = -125;
                    }
                } else if (index === '3') {
                    adjustment = -160;
                } else if (index === '4') {
                    adjustment = -150;
                } else {
                    adjustment = -130;
                }
            }

            if (!(window.location.href.toLowerCase().indexOf('/pixma-ts5150-series') > -1) && template === '1' && document.querySelector('#ffpprodspecnav1 + section + section + section + section.pl-bg') && index === '4' ||
                template === '1' && document.querySelector('#ffpprodspecnav1 + section + section + section + section.pl-spacer--in--medium + section') && index === '4') {
                adjustment = -50;
            }

            if (window.location.href.toLowerCase().indexOf('/pixma_mx475') > -1) {
                adjustment = -125;
            }

            if (template === '4' && (index === '2' || index === '3' || index === '5')) {
                adjustment = -30;
            }

            var scrollTarget = document.scrollingElement || document.documentElement;
            var scrollTo = scrollTarget.scrollTop + cvTarget.getBoundingClientRect().top + adjustment;

            window.jQuery([document.documentElement, document.body]).animate({
                scrollTop: scrollTo
            }, 750);

            setTimeout(function () {
                setCurrentLocation();
            }, 760);

            // Tracking
            window['optimizely'].push({
                type: "event",
                eventName: 'clicks_on_' + document.querySelector('.cv-section-' + index).getAttribute('cv-tracking') + '_section_can_119'
            });
        } catch (err) {
            //console.log(err);
        }
    };

    document.querySelector('.cv-section-1').addEventListener('click', function () {
        gotoSection(cvTarget1, '1');
    });

    document.querySelector('.cv-section-2').addEventListener('click', function () {
        if (window.location.href.toLowerCase().indexOf('/pixma-ts5050-series') === -1) {
            gotoSection(cvTarget2, '2');
        } else {
            gotoSection(cvVideoSection, '2');
        }
    });

    document.querySelector('.cv-section-3').addEventListener('click', function () {
        if (window.location.href.toLowerCase().indexOf('/pixma-ts5050-series') === -1) {
            gotoSection(cvTarget3, '3');
        } else {
            gotoSection(cvTarget2, '3');
        }
    });

    if (!cvVideoSection) {
        document.querySelector('.cv-section-4').addEventListener('click', function () {
            gotoSection(cvTarget4, '4');
        });
    } else if (cvVideoSection && template === '1') {
        document.querySelector('.cv-section-4').addEventListener('click', function () {
            gotoSection(cvVideoSection, '4');
        });
    } else if (cvVideoSection && template === '3') {
        document.querySelector('.cv-section-4').addEventListener('click', function () {
            gotoSection(cvTarget3, '4');
        });
    }

    if (!document.querySelector('.cv-section-6') && !cvVideoSection) {
        document.querySelector('.cv-section-5').addEventListener('click', function () {
            gotoSection(shopNowSection, '5');
        });
    } else if (document.querySelector('.cv-section-6') && !cvVideoSection) {
        document.querySelector('.cv-section-5').addEventListener('click', function () {
            gotoSection(cvTarget5, '5');
        });

        document.querySelector('.cv-section-6').addEventListener('click', function () {
            gotoSection(shopNowSection, '6');
        });
    } else if (document.querySelector('.cv-section-6') && cvVideoSection) {
        document.querySelector('.cv-section-5').addEventListener('click', function () {
            gotoSection(cvTarget4, '5');
        });

        document.querySelector('.cv-section-6').addEventListener('click', function () {
            gotoSection(shopNowSection, '6');
        });
    }

    // Set max top for the scrollbar
    var setMaxTop = function () {
        try {
            var y = document.scrollingElement || document.documentElement;
            var scrollbar = document.querySelector('.cv-119');

            if ((y.scrollTop + 127) < ((document.querySelector('body').clientHeight - scrollbar.clientHeight) / 2)) {
                scrollbar.classList.add('cv-max-top');

                scrollbar.style.top = ((document.querySelector('body').clientHeight - 178) / 2) + (scrollbar.clientHeight / 2) + 'px';
            } else {
                scrollbar.classList.remove('cv-max-top');
            }
        } catch (err) {
            //console.log(err);
        }
    };

    setMaxTop();

    window.addEventListener('scroll', setMaxTop);
});
