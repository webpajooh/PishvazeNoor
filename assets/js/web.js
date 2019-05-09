!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("jdate",[],t):"object"==typeof exports?exports.jdate=t():e.jdate=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,r){"use strict";function n(e,t){return Math.floor(e/t)}function a(e,t){return e-Math.floor(e/t)*t}function o(e){return e&&1===e.length?"0"+e:e}function u(e,t){var r=e.match(/[yY]+/);if(!r)return e;switch(r[0]){case"YYYY":case"YYY":return u(e.replace(r,t.getFullYear()),t);case"YY":return u(e.replace(r,String(t.getFullYear()).slice(2)),t);default:return e}}function i(e,t){var r=e.match(/[mM]+/);if(!r)return e;switch(r[0]){case"M":return i(e.replace(r,t.getMonth()),t);case"MM":var n=o(t.getMonth().toString());return i(e.replace(r,n),t);case"MMM":case"MMMM":return i(e.replace(r,f.MONTH_NAMES[t.getMonth()-1]),t);default:return e}}function l(e,t){var r=e.match(/[dD]+/);if(!r)return e;switch(r[0]){case"D":return l(e.replace(r,t.getDate()),t);case"DD":var n=o(t.getDate().toString());return l(e.replace(r,n),t);case"d":case"dd":return l(e.replace(r,f.ABBR_DAYS[t.getDay()]),t);case"ddd":case"dddd":return l(e.replace(r,f.DAYS_NAMES[t.getDay()]),t);default:return e}}var f=r(1);e.exports={mod:a,div:n,replaceDay:l,replaceMonth:i,replaceYear:u}},function(e,t,r){"use strict";e.exports={MONTH_NAMES:["فروردین","اردیبهشت","خرداد","تیر","امرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],ABBR_DAYS:["۱ش","۲ش","۳ش","۴ش","۵ش","ج","ش"],DAYS_NAMES:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه","شنبه"],GREGORIAN_EPOCH:1721425.5,PERSIAN_EPOCH:1948320.5}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),u=r(1),i=function(){function e(){n(this,e)}return a(e,null,[{key:"leapGregorian",value:function(e){return e%4==0&&!(e%100==0&&e%400!=0)}},{key:"gregorianToJulian",value:function(t,r,n){var a=void 0;return a=r<=2?0:e.leapGregorian(t)?-1:-2,u.GREGORIAN_EPOCH-1+365*(t-1)+Math.floor((t-1)/4)+-Math.floor((t-1)/100)+Math.floor((t-1)/400)+Math.floor((367*r-362)/12+(a+n))}},{key:"julianToGregorian",value:function(t){var r=Math.floor(t-.5)+.5,n=r-u.GREGORIAN_EPOCH,a=Math.floor(n/146097),i=(0,o.mod)(n,146097),l=Math.floor(i/36524),f=(0,o.mod)(i,36524),c=Math.floor(f/1461),s=(0,o.mod)(f,1461),h=Math.floor(s/365),d=400*a+100*l+4*c+h;4!==l&&4!==h&&(d+=1);var p=r-e.gregorianToJulian(d,1,1),v=void 0;v=r<e.gregorianToJulian(d,3,1)?0:(e.leapGregorian(d)?1:2)?1:2;var g=Math.floor((12*(p+v)+373)/367);return[d,g,r-e.gregorianToJulian(d,g,1)+1]}},{key:"leapPersian",value:function(e){return 682*((e-(e>0?474:473))%2820+474+38)%2816<682}},{key:"persianToJulian",value:function(e,t,r){var n=e-(e>=0?474:473),a=474+(0,o.mod)(n,2820);return r+(t<=7?31*(t-1):30*(t-1)+6)+Math.floor((682*a-110)/2816)+365*(a-1)+1029983*Math.floor(n/2820)+(u.PERSIAN_EPOCH-1)}},{key:"julianToPersian",value:function(t){var r=Math.floor(t)+.5,n=r-e.persianToJulian(475,1,1),a=Math.floor(n/1029983),u=(0,o.mod)(n,1029983),i=void 0;if(1029982===u)i=2820;else{var l=Math.floor(u/366),f=(0,o.mod)(u,366);i=Math.floor((2134*l+2816*f+2815)/1028522)+l+1}var c=i+2820*a+474;c<=0&&(c-=1);var s=r-e.persianToJulian(c,1,1)+1,h=s<=186?Math.ceil(s/31):Math.ceil((s-6)/30);return[c,h,r-e.persianToJulian(c,h,1)+1]}},{key:"persianToGregorian",value:function(t,r,n){var a=e.persianToJulian(t,r,n);return e.julianToGregorian(a)}},{key:"gregorianToPersian",value:function(t,r,n){var a=e.gregorianToJulian(t,r,n);return e.julianToPersian(a)}}]),e}();t.default=i,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(2),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=r(0),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(i),f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;n(this,e),this.input=t,Array.isArray(t)?(this.date=t.map(function(e){return parseInt(e,10)}),this._d=this.toGregorian()):t instanceof Date&&(this._d=t,this.date=e.toJalali(this.input))}return a(e,[{key:"toGregorian",value:function(){return e.toGregorian(this.date[0],this.date[1],this.date[2])}},{key:"getFullYear",value:function(){return this.date[0]}},{key:"setFullYear",value:function(e){return this.date[0]=parseInt(e,10),this.input=this.toGregorian(),this}},{key:"getMonth",value:function(){return this.date[1]}},{key:"setMonth",value:function(e){var t=l.fixMonth(this.getFullYear(),parseInt(e,10));return this.date[0]=t[0],this.date[1]=t[1],this.input=this.toGregorian(),this}},{key:"getDate",value:function(){return this.date[2]}},{key:"setDate",value:function(e){return this.date[2]=parseInt(e,10),this.input=this.toGregorian(),this}},{key:"getDay",value:function(){return this._d.getDay()}},{key:"format",value:function(e){var t=l.replaceYear(e,this);return t=l.replaceMonth(t,this),t=l.replaceDay(t,this)}}],[{key:"toJalali",value:function(e){var t=u.default.gregorianToJulian(e.getFullYear(),e.getMonth()+1,e.getDate());return u.default.julianToPersian(t)}},{key:"to_jalali",value:function(t){return e.toJalali(t)}},{key:"toGregorian",value:function(e,t,r){var n=u.default.julianToGregorian(u.default.persianToJulian(e,t,r));return new Date(n[0],n[1]-1,n[2])}},{key:"to_gregorian",value:function(t,r,n){return e.toGregorian(t,r,n)}},{key:"isLeapYear",value:function(e){return u.default.leapPersian(e)}},{key:"daysInMonth",value:function(t,r){var n=t-Math.floor(r/12),a=r-12*Math.floor(r/12);return a<0?(a+=12,n-=1):0===a&&(a=12),a<6?31:a<11?30:e.isLeapYear(n)?30:29}}]),e}();t.default=f,e.exports=t.default}])});

let prayTimes = new PrayTimes();
let times;

let daysOfWeek = ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];

const provinces = ['آذربایجان شرقی', 'آذربایجان غربی', 'اردبیل', 'اصفهان', 'البرز', 'ایلام', 'بوشهر', 'تهران', 'چهارمحال و بختیاری', 'خراسان جنوبی', 'خراسان رضوی', 'خراسان شمالی', 'خوزستان', 'زنجان', 'سمنان', 'سیستان و بلوچستان', 'فارس', 'قزوین', 'قم', 'کردستان', 'کرمان', 'کرمانشاه', 'کهگیلویه و بویراحمد', 'گلستان', 'گیلان', 'لرستان', 'مازندران', 'مرکزی', 'هرمزگان', 'همدان', 'یزد'];
const latitudes = [38.0, 37.5, 38.2, 32.6, 35.8, 33.6, 28.9, 35.7, 32.3, 32.8, 36.3, 37.4, 31.5, 36.6, 35.5, 29.4, 29.6, 36.2, 34.6, 35.3, 30.2, 34.3, 30.6, 36.8, 37.2, 33.4, 36.5, 34.0, 27.1, 34.8, 31.8];
const longitudes = [46.2, 45.0, 48.3, 51.6, 50.9, 46.4, 50.8, 51.3, 50.8, 59.2, 59.6, 57.3, 49.8, 48.4, 53.3, 60.8, 52.5, 50.0, 50.8, 46.9, 57.0, 46.4, 51.5, 54.4, 49.6, 48.3, 53.0, 49.6, 56.2, 48.5, 54.3];
let currentProvince = 7;
let customLatitude, customLongitude, usingGPS=false;
let asrMethod = 'Standard';
let mobileCurrentSlide = 1;

function selectProvince(id) {
    usingGPS = false;
    currentProvince = id;
    $('.ptCityInput ').val(provinces[id]);
    setHeaderTitle('اوقات شرعی ' + provinces[id]);
    $('.ptCitySearchResult').hide();
    refreshTimes();
}

function setAsrMethod(method) {
    asrMethod = method;
}

function setCustomPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            usingGPS = true;
            customLatitude = position.coords.latitude;
            customLongitude = position.coords.longitude;
            $('.ptCityInput').val('استفاده از GPS');
            $('#ptMobileModal').slideUp();
            setHeaderTitle('اوقات شرعی بر اساس مختصات');
        });
    }else{
        usingGPS = false;
        alert('Geolocation is not supported by this browser.');
        selectProvince(currentProvince);
        $('#ptMobileModal').slideUp();
    }
}

function setHeaderTitle(title) {
    document.title = title;
    $('.pageTitle').text(title);
}

function isMobile() {
    if ($('#ptForMobile').is(":visible")) return true;
    else return false;
}

function refreshTimes() {
    prayTimes.setMethod('ISNA');
    let body = '';
    let latitude, longitude;
    if (usingGPS) {
        latitude = customLatitude;
        longitude = customLongitude;
    }else{
        latitude = latitudes[currentProvince];
        longitude = longitudes[currentProvince];
    }
    for (let i=0; i<7; i++) {
        if (i > 0) {todayBoxClass = '';}else{todayBoxClass = 'ptDayBoxToday';}
        let date = new Date();
        date.setDate(date.getDate() + i);
        let jDate = new jdate(date);
        let jFullDate = jDate.date[0] + '/' + jDate.date[1] + '/' + jDate.date[2];
        prayTimes.adjust({asr: asrMethod});
        times = prayTimes.getTimes(date, [latitude, longitude]);
        if (!isMobile()) {
            body += '<div class="col-lg-3"><div class="ptDayBox ' + todayBoxClass + '"><h2 class="ptDayBoxTitle">' + daysOfWeek[date.getDay()] + '</h2><h3 class="ptDayBoxDate">' + jFullDate + '</h3>';
        }else{
            body += '<div class="ptMobileDaySlide" day="' + daysOfWeek[date.getDay()] + ' (' + jFullDate + ')' + '">';
        }
        body += '<div class="ptDayBoxTime"><div class="row">\n' +
            '                        <div class="col-lg-4 col-3">\n' +
            '                            <img class="ptDayBoxIcon" src="assets/image/fajr.png">\n' +
            '                        </div>\n' +
            '                        <div class="col-lg-8 col-9">\n' +
            '                            <div class="ptDayBoxTimeName">اذان صبح</div>\n' +
            '                            <div class="ptDayBoxTimeValue">' + times.fajr + '</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="ptDayBoxTime">\n' +
            '                    <div class="row">\n' +
            '                        <div class="col-lg-4 col-3">\n' +
            '                            <img class="ptDayBoxIcon" src="assets/image/sunrise.png">\n' +
            '                        </div>\n' +
            '                        <div class="col-lg-8 col-9">\n' +
            '                            <div class="ptDayBoxTimeName">طلوع آفتاب</div>\n' +
            '                            <div class="ptDayBoxTimeValue">' + times.sunrise + '</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="ptDayBoxTime">\n' +
            '                    <div class="row">\n' +
            '                        <div class="col-lg-4 col-3">\n' +
            '                            <img class="ptDayBoxIcon" src="assets/image/dhuhr.png">\n' +
            '                        </div>\n' +
            '                        <div class="col-lg-8 col-9">\n' +
            '                            <div class="ptDayBoxTimeName">اذان ظهر</div>\n' +
            '                            <div class="ptDayBoxTimeValue">' + times.dhuhr + '</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="ptDayBoxTime">\n' +
            '                    <div class="row">\n' +
            '                        <div class="col-lg-4 col-3">\n' +
            '                            <img class="ptDayBoxIcon" src="assets/image/asr.png">\n' +
            '                        </div>\n' +
            '                        <div class="col-lg-8 col-9">\n' +
            '                            <div class="ptDayBoxTimeName">اذان عصر</div>\n' +
            '                            <div class="ptDayBoxTimeValue">' + times.asr + '</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="ptDayBoxTime">\n' +
            '                    <div class="row">\n' +
            '                        <div class="col-lg-4 col-3">\n' +
            '                            <img class="ptDayBoxIcon" src="assets/image/fajr.png">\n' +
            '                        </div>\n' +
            '                        <div class="col-lg-8 col-9">\n' +
            '                            <div class="ptDayBoxTimeName">اذان مغرب</div>\n' +
            '                            <div class="ptDayBoxTimeValue">' + times.maghrib + '</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="ptDayBoxTime">\n' +
            '                    <div class="row">\n' +
            '                        <div class="col-lg-4 col-3">\n' +
            '                            <img class="ptDayBoxIcon" src="assets/image/isha.png">\n' +
            '                        </div>\n' +
            '                        <div class="col-lg-8 col-9">\n' +
            '                            <div class="ptDayBoxTimeName">اذان عشاء</div>\n' +
            '                            <div class="ptDayBoxTimeValue">' + times.isha + '</div>\n' +
            '                        </div>\n' +
            '                    </div></div>';
        if (!isMobile()) {
            body += '</div></div>';
        }else{
            body += '</div>';
        }
        if (i == 0) {$('.ptMobileDayTitle').text(daysOfWeek[date.getDay()] + ' (' + jFullDate + ')');}
    }
    if (isMobile()) {
        $('#ptMobileDayBox').html(body);
    }else{
        $('#ptBody').html(body);
    }

}

$(document).ready(function() {
    refreshTimes();

    $('.ptSettingRadio').click(function() {
        $('.ptSettingRadio').removeClass('ptActiveRadio');
        $(this).addClass('ptActiveRadio');
    });

    $('.ptTitlebarCityInput').focus(function() {
        $(this).removeClass('ptTCIClosed');
    }).blur(function() {
        $(this).addClass('ptTCIClosed');
    });

    let ptCitySearchResult = $('.ptCitySearchResult');
    $('.ptCityInput').focus(function() {
        $(this).val('');
    }).blur(function() {
        if (($(this).val() == '' || $('.searchError').length) && !usingGPS) {
            $(this).val(provinces[currentProvince]);
            ptCitySearchResult.hide();
        }
        if (usingGPS) {
            $(this).val('استفاده از GPS');
        }
    }).keyup(function() {
        let key = $(this).val();
        let filtered = provinces.filter(function(str) {
            if (str[0] == key[0]) return str.indexOf(key) != -1;
        });
        if (filtered.length > 0) {
            let items = filtered.map(function(e) {
                let pid = provinces.indexOf(e);
                return '<li onmousedown="selectProvince(' + pid + ')">' + e + '</li pid="' + pid + '">'
            });
            ptCitySearchResult.html('<ul class="ptCitySearchList noSelect"></ul>');
            $('.ptCitySearchList').html(items);
        }else{
            ptCitySearchResult.html('<strong class="searchError">استان مورد نظر یافت نشد!</strong>');
        }
        if ($(this).val() == '') ptCitySearchResult.hide();
        else ptCitySearchResult.slideDown(500);
    });

    $('#ptMobileLeftArrow').click(function() {
        if (mobileCurrentSlide < 7) {
            mobileCurrentSlide++;
        }else{
            mobileCurrentSlide = 1;
        }
        $('.ptMobileDaySlide').hide();
        let currentSlide = $('.ptMobileDaySlide:nth-child(' + mobileCurrentSlide + ')');
        currentSlide.show();
        $('.ptMobileDayTitle').text(currentSlide.attr('day'));
    });
    $('#ptMobileRightArrow').click(function() {
        if (mobileCurrentSlide > 1) {
            mobileCurrentSlide--;
        }else{
            mobileCurrentSlide = 7;
        }
        $('.ptMobileDaySlide').hide();
        let currentSlide = $('.ptMobileDaySlide:nth-child(' + mobileCurrentSlide + ')');
        currentSlide.show();
        $('.ptMobileDayTitle').text(currentSlide.attr('day'));
    });

    $('#ptMobileSettingBtn').click(function() {
        $('#ptMobileModal').slideDown();
    });
    $('.ptCloseModal').click(function() {
        $('#ptMobileModal').slideUp();
    });
});

$(window).resize(null, function() {refreshTimes();});