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

var options1 = {
    series: [{
    name: 'series1',
    data: [30,70,55,40,70,85,100,80,75]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart1"), options1);
chart.render();

var options = {
  series: [{
  name: 'Inflation',
  data: [3.5, 3.1, 5.4, 10.1, 7.0, 5.6, 4.8, 4.3, 6.4, 3.8, 5.5, 4.2]
}],
  chart: {
  height: 350,
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "%";
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
},

xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  position: 'top',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#D8E3F0',
        colorTo: '#BED1E6',
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val + "%";
    }
  }

},
title: {
  text: 'Monthly Inflation in Argentina, 2002',
  floating: true,
  offsetY: 330,
  align: 'center',
  style: {
    color: '#444'
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();