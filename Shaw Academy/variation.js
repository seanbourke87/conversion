var cvCourses = [{
	'course': '/photography/',
	'max': 99
}, {
	'course': '/finance/',
	'max': 99
}, {
	'course': '/marketing/',
	'max': 93
}, {
	'course': '/design/',
	'max': 99
}, {
	'course': '/health-wellness/',
	'max': 91
}, {
	'course': '/technology/',
	'max': 99
}, {
	'course': '/beauty/',
	'max': 91
}, {
	'course': '/music/',
	'max': 90
}, {
	'course': '/business/',
	'max': 96
}, {
	'course': '/language/',
	'max': 90
}];

var cvTargetContainer;
var cvTargetContainerMobile;

bb.waitUntil(function () {
	cvTargetContainer = document.querySelector('.container .product-banner-section .product-banner');
	cvTargetContainerMobile = document.querySelector('.container .product-banner-section .product-banner-mob');

	return (!document.querySelector('.cv_9-0') && cvTargetContainer && cvTargetContainerMobile && 
		(getComputedStyle(cvTargetContainerMobile).display === 'none' || 
		getComputedStyle(cvTargetContainerMobile).display === 'block' && cvTargetContainerMobile.querySelector('img') && cvTargetContainerMobile.querySelector('img').src.indexOf('transparent.png') < 0));
}, function () {
	var cvContentHTML = '<div class="cv_9-0"> <div class="cv-capacity"><div></div></div> <div class="cv-info"> <div> <h3><span class="cv-capacity-current">0%</span> of this week’s places have been filled.</h3> <p>Start your course now to <strong>guarantee your place.</strong></p> </div> </div> </div>';

	if (window.getComputedStyle(cvTargetContainerMobile).display === 'none') {
		cvTargetContainer.insertAdjacentHTML('afterEnd', cvContentHTML);
	} else {
		cvTargetContainerMobile.insertAdjacentHTML('afterEnd', cvContentHTML);
	}

	var resetPosition = function () {
		var cvContent = document.querySelector('.cv_9-0');

		cvContent.style.display = 'none';

		setTimeout(function () {
			if (window.getComputedStyle(cvTargetContainerMobile).display === 'none') {
				cvTargetContainer.insertAdjacentElement('afterEnd', cvContent);
			} else {
				cvTargetContainerMobile.insertAdjacentElement('afterEnd', cvContent);
			}

			cvContent.style.display = 'block';
		}, 1000);
	}

	window.addEventListener("orientationchange", resetPosition);

	// Get % of the week 
	var date = new Date();
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var day = days[date.getDay()];

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var dayIndex = days.indexOf(day);

	if (hours !== 0 && dayIndex === 0) {
		dayIndex = 7;
	}

	dayIndex = dayIndex * 86400;
	hours = hours * 3600;
	minutes = minutes * 60;

	var percentageOfWeek = ((dayIndex + hours + minutes + seconds) / 604800) * 100;

	// Get % capacity of the course and change the width of the % capacity bar
	var getCapacity = function () {
		for (var i = 0; i < cvCourses.length; i++) {
			cvCourse = cvCourses[i];

			if (window.location.href.indexOf(cvCourse.course) > -1) {
				return (percentageOfWeek / 100) * cvCourse.max;
			}
		}
	}

	var cvCapacity = getCapacity();

	if (cvCapacity) {
		cvCapacity = cvCapacity.toFixed();
	} else {
		cvCapacity = '75';
	}

	var finished = false;

	setTimeout(function () {
		finished = true;
	}, 1700);

	setTimeout(function () {
		document.querySelector('.cv_9-0 .cv-capacity > div').style.width = cvCapacity + '%';

		var capacityValue = 0;
		var prevCapacityValue = 0;

		var capacityInterval = setInterval(function () {
			prevCapacityValue = capacityValue;

			capacityValue = Math.round(((window.getComputedStyle(document.querySelector('.cv_9-0 .cv-capacity > div')).width.replace('px', '') / document.querySelector('.cv_9-0 .cv-capacity').clientWidth) * 100) / 10) * 10;

			if (capacityValue === prevCapacityValue && capacityValue < cvCapacity && (capacityValue + 10) > cvCapacity && finished) {
				capacityValue = capacityValue + 10;

				clearInterval(capacityInterval);
			}

			if (capacityValue >= cvCapacity) {
				capacityValue = cvCapacity;

				clearInterval(capacityInterval);
			}

			document.querySelector('.cv_9-0 .cv-info .cv-capacity-current').innerText = capacityValue + '%';
		}, 170);
	}, 700);

	// CSS
	bb.css('.product-banner-section .product-banner { border-radius: 30px 30px 0 0; } .cv_9-0 { background: #21243D; border-radius: 0 0 30px 30px; height: 100px; } .cv_9-0 .cv-capacity { display: block; width: 100%; height: 8px; background: rgba(255, 255, 255, 0.2); } .cv_9-0 .cv-capacity > div { width: 0.1%; background: #fff; display: block; height: 8px; transition: width 1.7s ease-in-out; } .cv_9-0 .cv-info { color: #fff; display: flex; align-items: center; height: 92px; } .cv_9-0 .cv-info > div { margin-left: 60px; background: transparent url(https://cfactory-img.s3.amazonaws.com/SHA/9-0/images/cv-icon-stopwatch.png) no-repeat; background-size: 36.34px 40.23px; background-position: center left; padding-left: 59px; } .cv_9-0 .cv-info > div > h3 { font-weight: 600; font-size: 20px; line-height: 30px; margin-bottom: 7px; } .cv_9-0 .cv-info > div > p { font-size: 16px; line-height: 24px; color: #AAABC0; } .cv_9-0 .cv-info > div > p > strong { color: #fff; } @media only screen and (max-width: 1024px) { .cv_9-0 { height: 93px; } .cv_9-0 .cv-info { height: 85px; } .cv_9-0 .cv-info > div { background-size: 24.34px 26.94px; background-position: left top; padding-left: 42px; margin-left: 20px; padding-right: 42px; padding-top: 4px; } .cv_9-0 .cv-info > div > h3 { font-size: 16px; line-height: 137.6%; margin-bottom: 10px; } .cv_9-0 .cv-info > div > p { font-size: 12px; line-height: 137.6%; } } @media only screen and (max-width: 640px) { .product-banner-section .product-banner .product-banner-mob img { border-radius: 30px 30px 0 0; } .cv_9-0 { height: auto; min-height: 122px; position: relative; top: -1px; margin-bottom: 24px; } .cv_9-0 .cv-info { height: 114px; } .cv_9-0 .cv-info > div { background-position: left 5px; padding-top: 1.5px; padding-left: 41px; padding-right: 41px; } .cv_9-0 .cv-info > div > h3 { font-size: 14px; margin-bottom: 13px; } } @media only screen and (max-width: 359px) { .cv_9-0 .cv-info > div { padding-top: 0px; padding-left: 37px; padding-right: 13px; margin-left: 18px; } }');
},
	{ forever: true }
);
