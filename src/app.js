$(document).ready(function () {

    $('h1').on('click', function () {
        $(this).toggleClass('text-red-500 ');
    });

    var currentRoute = location.pathname;
    $('.navLink > a').each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href') === currentRoute) {
            $('.navLink > a').removeClass('!bg-white');
            $this.addClass('!bg-white');
        }
    });


    $('#detailFilter').on('click', function () {
        var $nearbyContainer = $('.nearbyContainer');
        var $nearbyCard = $('.nearbyCard')
        var $nearbyImage = $('.nearbyImage')
        var siblingH6 = $nearbyImage.siblings('h6');
        var $nearbyDetailContent = $('.detailContent')
        var $nearbyBannerImage = $('.nearbyBannerImage')

        if ($nearbyContainer.hasClass('grid-cols-6')) {
            $nearbyContainer.removeClass('grid-cols-6').addClass('grid-cols-3');
            $nearbyCard.removeClass('h-[240px] flex-col justify-between').addClass('flex flex-row h-[126px] gap-3')
            $nearbyImage.removeClass().addClass('min-w-[82.5px] h-full py-2 pl-2 nearbyImage')
            siblingH6.addClass('hidden')
            $nearbyDetailContent.removeClass('hidden')
            $nearbyBannerImage.removeClass('col-span-6').addClass('col-span-3')
        } else {
            $nearbyContainer.removeClass('grid-cols-3').addClass('grid-cols-6');
            $nearbyCard.removeClass('flex-row h-[126px] gap-3').addClass('h-[240px] flex-col justify-between')
            $nearbyImage.removeClass().addClass('w-full h-[176px] px-2 pt-2 nearbyImage')
            siblingH6.removeClass('hidden')
            $nearbyDetailContent.addClass('hidden')
            $nearbyBannerImage.removeClass('col-span-3').addClass('col-span-6')
        }
    });

    // code for age range
    $("#slider-age-range").slider({
        range: true,
        min: 18,
        max: 100,
        values: [18, 100],
        slide: function (event, ui) {
            $("#agerangeValue").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#agerangeValue").val($("#slider-age-range").slider("values", 0) +
        " - " + $("#slider-age-range").slider("values", 1));


    // code for height range
    $("#slider-height-range").slider({
        range: true,
        min: 120,
        max: 230,
        values: [120, 178],
        slide: function (event, ui) {
            $("#heightrangeValue").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#heightrangeValue").val($("#slider-height-range").slider("values", 0) +
        " - " + $("#slider-height-range").slider("values", 1) + 'cm');


});