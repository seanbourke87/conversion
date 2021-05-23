var testCode = function () {
    var target;

    var cvWaitUntil = function (condition, cvFunction) {
        var interval = setInterval(function () {
            if (condition()) {
                clearInterval(interval);
                cvFunction();
            }
        }, 20);

        setTimeout(function () {
            clearInterval(interval);
        }, 5000);
    };

    cvWaitUntil(function () {
        target = document.querySelector('img[srcset*="PricingModel_"]');

        if (target) {
            target = target.closest('div[class*="-imageContainer"]');
        }

        return (target && window.location.pathname === '/test-drive/' && !document.querySelector('.rti_4-1'));
    }, function () {
        // Check for page reloads/changes and execute the callback
        var checkForOverwrite = function (selector, callback, checkerSelector, timeout) {
            var testName = selector.split(' ')[0].replace('#', '').replace('.', '');

            if (checkerSelector && !document.querySelector('.rti_4-1_checker') && !document.body.classList.contains(testName + '_cv')) {
                var checkerTarget = document.querySelector(checkerSelector);

                if (checkerTarget) {
                    checkerTarget.insertAdjacentHTML('beforeEnd', '<div class="rti_4-1_checker"></div>');
                }
            } else {
                callback();
            }

            var checkInterval = setInterval(function () {
                if (window.location.pathname !== '/test-drive/') {
                    clearInterval(checkInterval);
                } else if (!document.querySelector(selector) && !document.querySelector('.rti_4-1_checker')) {
                    clearInterval(checkInterval);

                    callback();
                }
            }, 20);

            if (timeout) {
                setTimeout(function () {
                    clearInterval(checkInterval);

                    if (!document.querySelector(selector)) {
                        callback();
                    }
                }, timeout);
            }

            document.body.classList.add(testName + '_cv');

            var removeElementsInterval = setInterval(function () {
                if (window.location.pathname === '/test-drive/' && !document.body.classList.contains(testName + '_cv')) {
                    if (document.querySelector('.rti_4-1_checker')) {
                        document.querySelector('.rti_4-1_checker').parentNode.removeChild(document.querySelector('.rti_4-1_checker'));
                    }

                    if (document.querySelector('.rti_4-1')) {
                        document.querySelector('.rti_4-1').classList.remove('rti_4-1');
                    }

                    if (document.querySelector('.rti_4-1_charts')) {
                        document.querySelector('.rti_4-1_charts').parentNode.removeChild(document.querySelector('.rti_4-1_charts'));
                    }

                    if (document.querySelector('.rti_4-1_footer')) {
                        document.querySelector('.rti_4-1_footer').parentNode.removeChild(document.querySelector('.rti_4-1_footer'));
                    }
                }
            }, 100);
        };

        // Callback
        checkForOverwrite('.rti_4-1', function () {
            if (window.location.pathname === '/test-drive/' && !document.querySelector('.rti_4-1')) {
                target.classList.add('rti_4-1');

                target.insertAdjacentHTML('afterBegin', '<div class="rti_4-1_footer"> <div class="cv-detail cv-detail-1"> <div class="cv-circle"></div> <div class="cv-text">Driving behavior</div> </div> <div class="cv-detail cv-detail-2"> <div class="cv-circle"></div> <div class="cv-text">Other factors - including credit score, driving record, age, marital status, gender, ZIP code, vehicle type, and prior insurance</div> </div> </div>');

                var pricingModelHTML = '<div class="rti_4-1_charts"> <div class="cv-chart-container"> <p>Traditional <br />pricing model</p> <svg viewBox="0 0 36 36" class="cv-circular-chart"> <path class="cv-circle-bg" stroke-dasharray="4.75, 0.25, 32.5, 0.25, 12.25, 0.25, 9.75, 0.25, 19.75, 0.25, 9.5, 0.25, 4.75, 0.25, 2.75, 0.25, 1.75" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> <path class="cv-circle-white" stroke-dasharray="4.75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> <path class="cv-circle-orange" stroke-dasharray="0.75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> <path class="cv-circle" stroke-dasharray="4.75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> </svg> </div> <div class="cv-chart-container"> <p>Root <br />pricing model</p> <svg viewBox="0 0 36 36" class="cv-circular-chart"> <path class="cv-circle-bg" stroke-dasharray="24.75, 0.25, 12.5, 0.25, 12.25, 0.25, 9.75, 0.25, 19.75, 0.25, 9.5, 0.25, 4.75, 0.25, 2.75, 0.25, 1.75" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> <path class="cv-circle-white" stroke-dasharray="24.75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> <path class="cv-circle-orange" stroke-dasharray="0.75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> <path class="cv-circle" stroke-dasharray="24.75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /> </svg> </div> </div>';

                target.insertAdjacentHTML('afterBegin', pricingModelHTML);

                // Animate the charts when user enters viewport
                var chartsContainer = document.querySelector('.rti_4-1_charts');

                var observerCallback = function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            setTimeout(function () {
                                chartsContainer.classList.add('cv-animate');
                            }, 500);

                            observer.disconnect();
                        }
                    });
                };

                var options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1
                };

                var observer = new IntersectionObserver(observerCallback, options);

                observer.observe(chartsContainer);

                var chart1 = chartsContainer.querySelector('.cv-chart-container:nth-child(1) .cv-circle-bg');
                var chart2 = chartsContainer.querySelector('.cv-chart-container:nth-child(2) .cv-circle-bg');

                var checkStroke = function () {
                    if (window.innerWidth < 991 && !chartsContainer.classList.contains('cv-mobile')) {
                        chartsContainer.classList.add('cv-mobile');

                        chart1.setAttribute('stroke-dasharray', '4.75, 0.325, 32.425, 0.325, 12.175, 0.325, 9.675, 0.325, 19.675, 0.325, 9.425, 0.325, 4.675, 0.325, 2.675, 0.325, 1.5');
                        chart2.setAttribute('stroke-dasharray', '24.75, 0.325, 12.425, 0.325, 12.175, 0.325, 9.675, 0.325, 19.675, 0.325, 9.425, 0.325, 4.675, 0.325, 2.675, 0.325, 1.5');
                    } else if (window.innerWidth > 990 && chartsContainer.classList.contains('cv-mobile')) {
                        chartsContainer.classList.remove('cv-mobile');

                        chart1.setAttribute('stroke-dasharray', '4.75, 0.25, 32.5, 0.25, 12.25, 0.25, 9.75, 0.25, 19.75, 0.25, 9.5, 0.25, 4.75, 0.25, 2.75, 0.25, 1.75');
                        chart2.setAttribute('stroke-dasharray', '24.75, 0.25, 12.5, 0.25, 12.25, 0.25, 9.75, 0.25, 19.75, 0.25, 9.5, 0.25, 4.75, 0.25, 2.75, 0.25, 1.75');
                    }
                };

                checkStroke();

                var checkStrokeInterval = setInterval(function () {
                    checkStroke();
                }, 100);
            }
        }, 'main > div:nth-of-type(1)', 1500);
    });
};

// Run the test code each time the user visits the homepage
testCode();

var savedPage = window.location.pathname;

var checkPage = setInterval(function () {
    if (savedPage !== window.location.pathname) {
        savedPage = window.location.pathname;

        if (savedPage === '/test-drive/') {
            testCode();
        }
    }
}, 50);

// Run the test code again if the container is overwritten
var checkForElementInterval = setInterval(function () {
    if (document.querySelector('.rti_4-1') && !document.querySelector('.rti_4-1_charts')) {
        clearInterval(checkForElementInterval);

        // Remove existing class names before running test code again
        if (document.querySelector('.rti_4-1')) {
            document.querySelector('.rti_4-1').classList.remove('rti_4-1');
        }

        if (document.querySelector('.rti_4-1_cv')) {
            document.querySelector('.rti_4-1_cv').classList.remove('rti_4-1_cv');
        }

        testCode();
    }
}, 50);
