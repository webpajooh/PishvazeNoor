const provinces = ['آذربایجان شرقی', 'آذربایجان غربی', 'اردبیل', 'اصفهان', 'البرز', 'ایلام', 'بوشهر', 'تهران', 'چهارمحال و بختیاری', 'خراسان جنوبی', 'خراسان رضوی', 'خراسان شمالی', 'خوزستان', 'زنجان', 'سمنان', 'سیستان و بلوچستان', 'فارس', 'قزوین', 'قم', 'کردستان', 'کرمان', 'کرمانشاه', 'کهگیلویه و بویراحمد', 'گلستان', 'گیلان', 'لرستان', 'مازندران', 'مرکزی', 'هرمزگان', 'همدان', 'یزد'];
const latitudes = [38.0, 37.5, 38.2, 32.6, 35.8, 33.6, 28.9, 35.7, 32.3, 32.8, 36.3, 37.4, 31.5, 36.6, 35.5, 29.4, 29.6, 36.2, 34.6, 35.3, 30.2, 34.3, 30.6, 36.8, 37.2, 33.4, 36.5, 34.0, 27.1, 34.8, 31.8];
const longitudes = [46.2, 45.0, 48.3, 51.6, 50.9, 46.4, 50.8, 51.3, 50.8, 59.2, 59.6, 57.3, 49.8, 48.4, 53.3, 60.8, 52.5, 50.0, 50.8, 47.0, 57.0, 46.4, 51.5, 54.4, 49.6, 48.3, 53.0, 49.6, 56.2, 48.5, 54.3];
let currentProvince = 7;

function selectProvince(id) {
    currentProvince = id;
    $('.ptCityInput ').val(provinces[id]);
    $('.ptCitySearchResult').hide();
}

$(document).ready(function() {
    $('.ptSettingRadio').click(function() {
        $('.ptSettingRadio').removeClass('ptActiveRadio');
        $(this).addClass('ptActiveRadio');
    });

    $('.ptCityInput').focus(function() {
        $(this).val('');
    });
    $('.ptCityInput').blur(function() {
        if ($(this).val() == '' || $('.searchError').length) {
            $(this).val(provinces[currentProvince]);
            $('.ptCitySearchResult').hide();
        }
    });
    $('.ptCityInput').keyup(function() {
        let key = $(this).val();
        let filtered = provinces.filter(function(str) {
            if (str[0] == key[0]) return str.indexOf(key) != -1;
        });
        if (filtered.length > 0) {
            let items = filtered.map(function(e) {
                let pid = provinces.indexOf(e);
                return '<li onclick="selectProvince(' + pid + ')">' + e + '</li pid="' + pid + '">'
            });
            $('.ptCitySearchResult').html('<ul class="ptCitySearchList noSelect"></ul>');
            $('.ptCitySearchList').html(items);
        }else{
            $('.ptCitySearchResult').html('<strong class="searchError">استان مورد نظر یافت نشد!</strong>');
        }
        if ($(this).val() == '') $('.ptCitySearchResult').hide();
        else $('.ptCitySearchResult').slideDown(500);
    });
});