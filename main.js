//infotext when error and else in inputs
  $(".info span").text("i");
  if($(".inp-wr").hasClass("error")){
    $(".error .info span").text("!");
  } else{
    $(".error .info span").text("i");
  }

  //change bg near logo where summary hover
$('.dashboard_left-bar .list_item:first-child').hover(function () {
        $('.dashboard_left-bar').addClass('active');
    }, function () {
        $('.dashboard_left-bar').removeClass('active');
    }
);

// Mobile menu fixed
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var nav = $('.mobile-nav');
    var menuIsOpen = $('#menu').hasClass('active_menu');
    var activePoint = menuIsOpen ? 390 : 60;
    var fixedPoint = menuIsOpen ? 435 : 100;

    wScroll > activePoint ? nav.addClass('active') : nav.removeClass('active');
    wScroll > fixedPoint ? nav.addClass('fixed'): nav.removeClass('fixed');
});

// Variables
var fd = [5,7,1,24,13,28,40,14,38,11,22,16,34,19,1,14,38,21,23,12,45,15,23,12,34,56,23,44,33,13];
var er = [38,11,22,16,34,19,1,14,5,7,1,24,13,28,40,14,5,14,12,33,24,32,12,16,28,23,33,44,25,12];

var time = ['Mar 1', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

var compute_data=stacked_data(fd,er);


function summ_data(m)
{
    var res=0;
    for (var i in m)
    {
        res=res+m[i];
    }
    return res;
}
function stacked_data(fd,er)
{
    var res=[];

    for (var i in er) {
        res.push(er[i]+fd[i]);
    }
    return res;
}
// Horizontall bar 100%
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: "horizontalBar",
    data: {
        labels: ["Foo"],
        datasets: [
            { label: "bad", data: [25], backgroundColor: "#9eaeff" },
            { label: "better", data: [10], backgroundColor: "rgba(255, 255, 255, 0.3)" }
        ]
    },
    options: {
        plugins: {
            stacked100: { enable: true }
        },
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        }
    }
});

// Chart line big
var ctx = document.getElementById('myChart').getContext("2d");

var gradientFd = ctx.createLinearGradient(0, 0, 0, 250);
gradientFd.addColorStop(0, 'rgba(133, 93, 248, 0.9)');
gradientFd.addColorStop(1, 'rgba(60, 45, 169, 0.9)');

var gradientEr = ctx.createLinearGradient(0, 0, 0, 250);
gradientEr.addColorStop(0, 'rgba(84, 240, 255, 0.9)');
gradientEr.addColorStop(1, 'rgba(18, 125, 176, 0.9)');

var ChartLineBig = new Chart(ctx, {
    type: 'line',
    data: {
        labels: time,
        datasets: [
            {
                label: "Emotion recognition",
                borderColor: gradientEr,
                pointRadius: 100,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                fill: true,
                backgroundColor: gradientEr,
                borderWidth: 1,
                data: er,
                lineTension: 0
            },
            {
                label: "Face detector",
                borderColor: gradientFd,
                pointRadius: 50,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                fill: true,
                backgroundColor: gradientFd,
                borderWidth: 1,
                data: compute_data,
                lineTension: 0
            }
        ]
    },
    options: {
        responsive: true,
        events: ['click'],
        tooltips: {
            mode: 'index',
            backgroundColor: 'rgba(30, 37, 73, 0.5)',
            titleFontFamily: 'inherit',
            height: '100%',
            position:'nearest',
            bodyFontColor: '#a9b2e1',
            bodyFontSize:14,
            bodySpacing:30,
            xPadding:20,
            yPadding:25,
            cornerRadius:0,
            multiKeyBackground: 'transparent',
            enabled: false,
            intersect:true
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        maintainAspectRatio: false,
        legend: {
            display:false,
            position: "right",
            labels: {
                fontColor: '#54F0FF',
                fontSize: '14',
                lineHeight: '20px',
                usePointStyle:true,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#6673B4",
                    maxTicksLimit: 5,
                    padding: 14
                },
                gridLines: {
                    drawTicks: true,
                    lineWidth: 1,
                    color: "rgba(102, 115, 180, 0.2)"
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "#fff",
                    display: false
                },
                ticks: {
                    padding: 8,
                    fontColor: "#6673B4",
                    maxRotation:0,
                    minRotation:0
                }
            }]
        }
    }
});

$('#myChart').mouseleave(function(){
    $('#black_tooltip').css('display',"none");
    $('#special_tooltip').css('display',"none");
    $('#black_tooltip_right').css('display',"none");
});
function legend_draw()
{
    var Last_data_er=ChartLineBig.getDatasetMeta(0).data[ChartLineBig.getDatasetMeta(0).data.length-1];
    var Last_data_fd=ChartLineBig.getDatasetMeta(1).data[ChartLineBig.getDatasetMeta(1).data.length-1];
    $('#er_legend').css("top",Last_data_er._model.y+"px");
    $('#fd_legend').css("top",Last_data_fd._model.y+"px");
    if (chartMobileFull)
    {
        Last_data_er=chartMobileFull.getDatasetMeta(0).data[chartMobileFull.getDatasetMeta(0).data.length-1];
        Last_data_fd=chartMobileFull.getDatasetMeta(1).data[chartMobileFull.getDatasetMeta(1).data.length-1];
        $('#er_legend_mobile').css("top",(Last_data_er._model.y-30)+"px");
        $('#fd_legend_mobile').css("top",(Last_data_fd._model.y-30)+"px");
        mobile_all_compute();
    }
}
legend_draw();
$('#graph-mobile').mouseleave(function(){
    $('#black_tooltip_mobile').css('display','none');
    $('#black_tooltip_right_mobile').css('display','none');
    mobile_all_compute();
});
function mobile_all_compute()
{
    var Last_data_er=er[compute_data.length-1];
    var Last_data_fd=compute_data[compute_data.length-1];
    var First_data_er=er[0];
    var First_data_fd=compute_data[0];
    var fd_val=Last_data_fd-First_data_fd;
    var er_val=Last_data_er-First_data_er;
    var fd_s=summ_data(compute_data);
    var er_s=summ_data(er);
    var all=fd_s+er_s;
    draw_mobile(false,fd_val,er_val,fd_s,er_s,all);
}

function draw_mobile(activePoint,fd_val,er_val,fd,er,all)
{

    var date;
    var mou="Mar";
    if (activePoint!==false)
    {
        date=time[activePoint._index];
        mou="Mar";

    }
    else
    {
        date="All";
        mou="All";

    }

    var year="2019";
    var type="Daily";
    if (time.length==12)
    {
        mou=date;
        year="2019";
        type="Year";
    }

    if (time.length<11)
    {
        mou="All";
        year=date;
        if (date=="All")
        {
            year="";
        }
        type="Ever";
    }
    $('.month').html(mou);
    $('.year').html(year);
    $('.show').html(type);
    $('#mobile_times_total').html(all);
    var arrow='&uarr';
    var color='#B8E986';
    if (fd_val<0)
    {
        arrow='&darr';
        color='#FF729A';
    }

    $('#mobile_fd').html(fd+'&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:'+color+';">'+fd_val+'&nbsp;&nbsp;'+arrow+';</span>');
    arrow='&uarr';
    color='#B8E986';
    if (er_val<0)
    {
        arrow='&darr';
        color='#FF729A';
    }

    $('#mobile_er').html(er+'&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:'+color+';">'+er_val+'&nbsp;&nbsp;'+arrow+';</span>');


}

$('#graph-mobile').bind('mousemove',  function(evt){
    var MetaData=chartMobileFull.getDatasetMeta(0);
    var activePoint;
    var minR=100;
    MetaData.data.forEach(function(element)
    {
        if (Math.abs(element._model.x-evt.pageX)<minR)
        {
            activePoint=element;
            minR=Math.abs(element._model.x-evt.pageX);
        }
        if (activePoint && activePoint._index>0)
        {
            $('#black_tooltip_mobile').css('display','block');
            $('#black_tooltip_right_mobile').css('display','block');
            var point2=chartMobileFull.getDatasetMeta(0).data[activePoint._index-1];
            $('#black_tooltip_mobile').css('width',(point2._model.x)+"px");
            $('#black_tooltip_right_mobile').css('width',($('#graph-mobile').width()-activePoint._model.x)+"px");
            var fd_val=compute_data[activePoint._index]-compute_data[point2._index];
            var er_val=er[activePoint._index]-er[point2._index];
            var all=compute_data[activePoint._index]+er[activePoint._index];
            draw_mobile(activePoint,fd_val,er_val,compute_data[activePoint._index],er[activePoint._index],all);

        }

    });

});

$('#myChart').bind('mousemove',  function(evt){

        var MetaData=ChartLineBig.getDatasetMeta(0);

        var activePoint;
        var minR=100;
        MetaData.data.forEach(function(element)
        {
            if (Math.abs(element._model.x-evt.pageX+40)<minR)
            {
                activePoint=element;
                minR=Math.abs(element._model.x-evt.pageX+40);
            }
        });
        if (activePoint && activePoint._index>0)
        {
            var point2=ChartLineBig.getDatasetMeta(0).data[activePoint._index-1];
            var fd_val=compute_data[activePoint._index]-compute_data[point2._index];
            var er_val=er[activePoint._index]-er[point2._index];
            var all=er[activePoint._index]+compute_data[activePoint._index];
            $('#all_tip').html(all);
            var arrow='&uarr';
            var color='#B8E986';
            if (fd_val<0)
            {
                arrow='&darr';
                color='#FF729A';
            }
            $('#fd_tip').html(compute_data[activePoint._index]+'&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:'+color+';">'+fd_val+'&nbsp;&nbsp;'+arrow+';</span>');
            arrow='&uarr';
            color='#B8E986';
            if (er_val<0)
            {
                arrow='&darr';
                color='#FF729A';
            }

            $('#er_tip').html(er[activePoint._index]+'&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:'+color+';">'+er_val+'&nbsp;&nbsp;'+arrow+';</span>');
            // alert(fd[point2._index]);

            $('#black_tooltip').css('display',"block");
            $('#special_tooltip').css('display',"block");
            $('#black_tooltip_right').css('display',"block");
            $('#black_tooltip').css('width',(point2._model.x-40)+"px");
            if ((activePoint._model.x)+190>$('#myChart').width())
            {
                $('#special_tooltip').css('left',(point2._model.x-190)+"px");
                $('#black_tooltip').css('width',(point2._model.x-40-190)+"px");

                $('#black_tooltip_right').css('width',($('#myChart').width()-activePoint._model.x-10)+"px");
            }
            else
            {
                $('#special_tooltip').css('left',activePoint._model.x+"px");
                $('#black_tooltip_right').css('width',($('#myChart').width()-activePoint._model.x-10-190)+"px");
            }
        }
        /* do something */
    }
);

//change fill
$('.chart-full .charts .right .icon-btn a').click(function(){
    var data_fill = $(this).attr('data-fill');
    var filling;
    if (data_fill === 'true'){
        filling = true;
        compute_data=stacked_data(fd,er);

        $(this).attr('data-fill','false');
    }
    if(data_fill === 'false'){
        filling = false;
        compute_data=fd;
        $(this).attr('data-fill','true');
    }
    ChartLineBig.data.datasets[1].data=compute_data;
    ChartLineBig.data.datasets[0].fill = filling;
    ChartLineBig.data.datasets[1].fill = filling;
    ChartLineBig.update();
    legend_draw();
});

//change period
$('.tabs-chart > li > a').click(function() {
    var data_time = $(this).attr('data-time');

    $('.tabs-chart li').removeClass('active');
    $(this).parent('li').addClass('active');


    if (data_time === 'month') {
        fd = [5,7,1,24,13,28,40,14,38,11,22,16,34,19,1,14,38,21,23,12,45,15,23,12,34,56,23,44,33,13];
        er = [38,11,22,16,34,19,1,14,5,7,1,24,13,28,40,14,5,14,12,33,24,32,12,16,28,23,33,44,25,12];
        time = ['Mar 1', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    }else if (data_time === 'year') {
        fd=[5,7,1,24,13,28,40,14,38,11,22,16];
        er=[38,11,22,16,34,19,1,14,5,7,1,24];
        time = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }else if (data_time === 'ever') {
        fd=[5,7,1,24,13,28];
        er=[38,11,22,16,34,19];
        time = [2015, 2016, 2017, 2018, 2019, 2020];
    }
    compute_data=stacked_data(fd,er);
    chartMobileFull.data.datasets[1].data = compute_data;
    chartMobileFull.data.datasets[0].data= er;

    chartMobileFull.data.labels = time;
    chartMobileFull.options.scales.xAxes[0].ticks.minor.fontColor=generate_colors(time,-1);

    chartMobileFull.update();
});

// Doughnut chart
var myCanvas = document.getElementById("doughnutСhartcanvas");
myCanvas.width = 180;
myCanvas.height = 180;
var Label_font="9px Arial";
var ctx = myCanvas.getContext("2d");
var x=0;

// setInterval(function()
//     {
//         ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//         draw_me(x,1200);
//         if (x<800)
//         {
//             ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//             x+=10;
//             draw_me(x,1200);
//
//         }
//
//     },10
// );

var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.labels = options.labels;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
    this.shadow=options.isshadow;
    this.shadows=options.shadows;
    this.caps=options.caps;
    this.caps_array=[];
    this.draw = function(){
        var total_value = 0;
        var color_index = 0;
        var val;
        for (var categ in this.options.data){
            val = this.options.data[categ];
            total_value += val;
        }

        var start_angle = Math.PI/2;
        for (categ in this.options.data){
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min((this.canvas.width-20)/2,(this.canvas.height-20)/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length],
                this.shadow,
                this.shadows[color_index%this.shadows.length]
            );
            var cap_obj={};
            cap_obj.color=this.caps[color_index%this.colors.length];
            cap_obj.label=this.labels[color_index%this.colors.length];
            cap_obj.start_angle=start_angle;
            cap_obj.centerX=this.canvas.width/2;
            cap_obj.centerY=this.canvas.height/2;
            cap_obj.radius=Math.min((this.canvas.width-20)/2,(this.canvas.height-20)/2);
            this.caps_array.push(cap_obj);

            start_angle += slice_angle;
            color_index++;
        }
        this.ctx.globalCompositeOperation = 'destination-out';
        if (this.options.doughnutHoleSize){
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                this.options.doughnutHoleSize * Math.min((this.canvas.width-20)/2,(this.canvas.height-20)/2),
                0,
                2 * Math.PI,
                false,
                1
            );
            this.ctx.globalCompositeOperation = 'source-over';
            for (categ in this.caps_array)
            {
                draw_caps(this.ctx,this.caps_array[categ].centerX, this.caps_array[categ].centerY,this.caps_array[categ].radius,this.caps_array[categ].start_angle, this.caps_array[categ].color,this.caps_array[categ].label,this.shadow);

            }
        }



    };
};
draw_me(800,1200);
function draw_me(X,MAX)
{
    var prc=X*100/MAX;
    var Back=100-prc;

    var myData = {
        "Back": Back,
        "Green": prc
    };

    var gradient1 = ctx.createRadialGradient(55,130,40, 60,140,90);
    gradient1.addColorStop(0.3, '#855df8');
    gradient1.addColorStop(1,'#3C2DA9' );
    var gradient2 = ctx.createRadialGradient(50,60,70, 60,60,90);
    gradient2.addColorStop(0.3, '#54F0FF');
    gradient2.addColorStop(1, '#1285B0');

    var myDougnutChart = new Piechart(
        {
            canvas:myCanvas,
            data:myData,
            colors:[gradient1,gradient2],
            shadows:['#855df8','#54f0ff'],
            caps:['source2','source'],
            labels:["E","F"],
            doughnutHoleSize:0.92,
            isshadow:true
        }
    );

    myDougnutChart.draw();
}


function draw_caps(ctx,centerX, centerY,radius,startAngle, color,label,shadow)
{
    var x0=centerX;
    var y0=centerY;
    var x1=x0 + (radius-4) * Math.cos(startAngle);
    var y1=y0 + (radius-4) * Math.sin(startAngle);
    ctx.moveTo(centerX,centerY);
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "white";

    var image = document.getElementById(color);
    ctx.save();
    ctx.translate(x1,y1);
    ctx.rotate(startAngle);
    ctx.drawImage(image, -7,-9, 14, 18);
    ctx.restore();
    ctx.save();

    ctx.translate(x1,y1);
    ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.font = Label_font;
    image = document.getElementById(color+'b');
    ctx.drawImage(image, -6,-7, 12, 14);
    ctx.closePath();
    ctx.restore();
}

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ,isshadow,shadow){
    ctx.fillStyle = color;

    ctx.beginPath();

    if (isshadow===true)
    {
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = shadow;
    }
    else
    {
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = "white";
    }
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}


// Chart mobile mini
var ctx = document.getElementById('mobile-chart').getContext("2d");

var myChartMobileMini = new Chart(ctx, {
    type: 'line',
    data: {
        labels: time,
        datasets: [

            {
                label: "Emotion recognition",
                borderColor: gradientEr,
                pointRadius: 3,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                fill: true,
                backgroundColor: gradientEr,
                borderWidth: 1,
                data: er,
                lineTension: 0
            },
            {
                label: "Face detector",
                borderColor: gradientFd,
                pointRadius: 3,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                fill: true,
                backgroundColor: gradientFd,
                borderWidth: 1,
                data: compute_data,
                lineTension: 0
            }
        ]
    },
    options: {
        responsive: true,
        tooltips: false,
        maintainAspectRatio: false,
        legend: {
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display:false,
                    beginAtZero: true
                },
                gridLines: {
                    display:false,
                    tickMarkLength: 0
                }

            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    tickMarkLength: 0
                },
                ticks: {
                    display:false,
                    beginAtZero: true
                }
            }]
        }
    }
});

//change fill
$('.right-bar .mini-chart .tabs a[data-fill]').click(function(){
    var data_fill = $(this).attr('data-fill');
    var filling;
    if (data_fill === 'true'){
        filling = true;
        $(this).attr('data-fill','false');
    }
    if(data_fill === 'false'){
        filling = false;
        $(this).attr('data-fill','true');
    }

    myChartMini.data.datasets[0].fill = filling;
    myChartMini.data.datasets[1].fill = filling;
    myChartMini.update();
});

//change period
$('.right-bar .mini-chart .tabs a[data-time]').click(function() {
    var data_time = $(this).attr('data-time');
    $(this).attr('data-time','month');
    $(this).html('Month');
    if (data_time === 'month')
    {
        $(this).attr('data-time','year');
        $(this).html('Year');
    }
    if (data_time === 'year')
    {
        $(this).attr('data-time','ever');
        $(this).html('Ever');
    }
    data_time = $(this).attr('data-time');

    if (data_time === 'month') {
        fd = [5,7,1,24,13,28,40,14,38,11,22,16,34,19,1,14,38,21];
        er = [38,11,22,16,34,19,1,14,5,7,1,24,13,28,40,14,5,14];

        time = ['Mar 1', 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    }else if (data_time === 'year') {
        fd=[5,7,1,24,13,28,40,14,38,11,22,16];
        er=[38,11,22,16,34,19,1,14,5,7,1,24];

        time = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }else if (data_time === 'ever') {
        fd=[5,7,1,24,13,28];
        er=[38,11,22,16,34,19];

        time = [2015, 2016, 2017, 2018, 2019, 2020];
    }
    compute_data=stacked_data(fd,er);
    ChartLineBig.data.datasets[1].data = compute_data;
    ChartLineBig.data.datasets[0].data= er;

    myChartMini.data.datasets[1].data = compute_data;
    myChartMini.data.datasets[0].data= er;
    myChartMini.data.labels = time;
    myChartMini.update();
});

// Payments tabs
function thisYear(evt, year) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(year).style.display = "block";
    evt.currentTarget.className += " active";
}

// Modal windows
$('[data-fancybox]').fancybox({
    touch: false
});

// Accordion
// payments accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "table-row") {
            panel.style.display = "none";
        } else {
            panel.style.display = "table-row";
        }
    });
}
// keys accordion
function keysAccordion() {
    if($(window).width() < 560)
    {
        var keyAcc = document.getElementsByClassName("keys");
        var j;

        for (j = 0; j < keyAcc.length; j++) {
            keyAcc[j].addEventListener('click', function(event) {
                this.classList.toggle('active');

                var panel = this.nextElementSibling;

                while (panel) {
                    if (!panel.classList.contains('hidden-buttons-keys')) {
                        break;
                    }

                    panel.classList.toggle('d-none');
                    panel = panel.nextElementSibling;
                }
            })
        }
    }
}
keysAccordion();

$(window).resize(function() {
    keysAccordion();
});



// Menu dashboard
$('.menu').on('touch click', function(){
    $('#menu').toggleClass('active_menu');
    $('.topnav').toggleClass('active');
    $('a.menu').toggleClass('active');
    $('html, body').animate({scrollTop: 0}, 300)
});


// Chart mobile mini
var ctx = document.getElementById('mobile-chart').getContext("2d");

var myChartMobileMini = new Chart(ctx, {
    type: 'line',
    data: {
        labels: time,
        datasets: [

            {
                label: "Emotion recognition",
                borderColor: gradientEr,
                pointRadius: 3,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                fill: true,
                backgroundColor: gradientEr,
                borderWidth: 1,
                data: er,
                lineTension: 0
            },
            {
                label: "Face detector",
                borderColor: gradientFd,
                pointRadius: 3,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                fill: true,
                backgroundColor: gradientFd,
                borderWidth: 1,
                data: compute_data,
                lineTension: 0
            }
        ]
    },
    options: {
        responsive: true,
        tooltips: false,
        maintainAspectRatio: false,
        legend: {
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display:false,
                    beginAtZero: true
                },
                gridLines: {
                    display:false,
                    tickMarkLength: 0
                }

            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    tickMarkLength: 0
                },
                ticks: {
                    display:false,
                    beginAtZero: true
                }
            }]
        }
    }
});

// Chart mobile full
var ctx = document.getElementById('graph-mobile').getContext("2d");

var chartMobileFull = new Chart(ctx, {
    type: 'line',
    data: {
        labels: time,
        datasets: [
            {
                label: "Emotion recognition",
                borderColor: gradientEr,
                pointRadius: 3,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                fill: true,
                backgroundColor: gradientEr,
                borderWidth: 3,
                data: er,
                lineTension: 0
            },
            {
                label: "Face detector",
                borderColor: gradientFd,
                pointRadius: 3,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                fill: true,
                backgroundColor: gradientFd,
                borderWidth: 3,
                data: compute_data,
                lineTension: 0
            }
        ]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(30, 37, 73, 0.5)',
            titleFontFamily: 'inherit',
            height: '100%',
            position:'nearest',
            bodyFontColor: '#a9b2e1',
            bodyFontSize:14,
            bodySpacing:30,
            xPadding:20,
            yPadding:25,
            cornerRadius:0,
            multiKeyBackground: 'transparent',
            enabled: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        maintainAspectRatio: false,
        legend: {
            display:false,
            position: "right",
            labels: {
                fontColor: '#54F0FF',
                fontSize: '14',
                lineHeight: '20px',
                usePointStyle:true,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#6673B4",
                    maxTicksLimit: 5,
                    padding: 0,
                    display:false,
                    beginAtZero: true
                },
                gridLines: {
                    drawTicks: true,
                    lineWidth: 1,
                    color: "rgba(102, 115, 180, 0.2)",
                    tickMarkLength: 0,
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "#fff",
                    display: false
                },
                afterFit: function(axis){
                    axis.paddingRight = 0;
                    axis.paddingLeft = 0;
                },
                ticks: {
                    padding: 0,
                    fontColor: "#6673B4",
                    beginAtZero: true,
                    labelOffset: 5,
                    callback: function(value, index, values) {
                        if (index>0)
                        {
                            if (index<values.length)
                            {
                                return value;
                            }
                        }
                    },
                }
            }]
        }
    }
});
var filling = true;

//change fill
$('#full-width-mobile-chart .icon-btn a').click(function(){
    var data_fill = $(this).attr('data-fill');

    if (data_fill === 'true'){
        filling = true;
        $(this).attr('data-fill','false');
    }else  if(data_fill === 'false'){
        filling = false;
        $(this).attr('data-fill','true');
    }

    chartMobileFull.data.datasets[0].fill = filling;
    chartMobileFull.data.datasets[1].fill = filling;
    chartMobileFull.update();
});

//change period
$('.tabs-chart > li > a').click(function() {
    var data_time = $(this).attr('data-time');

    $('.tabs-chart li').removeClass('active');
    $(this).parent('li').addClass('active');


    if (data_time === 'month') {
        fd = [5,7,1,24,13,28,40,14,38,11,22,16,34,19,1,14,38,21];
        er = [38,11,22,16,34,19,1,14,5,7,1,24,13,28,40,14,5,14];
        time = ['Mar 1', 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    }else if (data_time === 'year') {
        fd=[5,7,1,24,13,28,40,14,38,11,22,16];
        er=[38,11,22,16,34,19,1,14,5,7,1,24];
        time = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }else if (data_time === 'ever') {
        fd=[5,7,1,24,13,28];
        er=[38,11,22,16,34,19];
        time = [2015, 2016, 2017, 2018, 2019, 2020];
    }
    compute_data=stacked_data(fd,er);
    chartMobileFull.data.datasets[1].data = compute_data;
    chartMobileFull.data.datasets[0].data= er;

    chartMobileFull.data.labels = time;
    chartMobileFull.update();
    legend_draw();
});

// Visible change password
$("#full-width-chart").click(
    function()
    {
        setTimeout(
            function()
            {
                legend_draw();
            },500
        );
    }
);
$(".change_pass-btn").click(function(){
    $(".password").toggleClass('d-block');
});

// Show hidden password
$(function(){
    $('.hide-show').show();
    $('.hide-show span').addClass('show');

    $('.hide-show span').click(function(){
        if( $(this).hasClass('show') ) {
            $(this).text('Hide');
            $(this).parent().siblings('.password').attr('type','text');
            $(this).removeClass('show');
        } else {
            $(this).text('Show');
            $(this).parent().siblings('.password').attr('type','password');
            $(this).addClass('show');
        }
    });

    $('.change > a').on('click', function(){
        $('.hide-show span').text('Show').addClass('show');
        $('.hide-show').parent().find('.password').attr('type','password');
    });
});

// Button expand long page
$('.btn-change-long-page').click(function () {
    $('.main-info').toggleClass('long-page');
    $('.dashboard_left-bar').toggleClass('long-page');
    $('#dashboard').toggleClass('long-page');
    $('#keys').toggleClass('long-page');
    $('#users').toggleClass('long-page');
    $('#payments').toggleClass('long-page');
    $('#settings').toggleClass('long-page');
    $(this).toggleClass('collapsed');
    $('#chart-full').toggleClass('d-none');
    $('.mini-chart').removeClass('d-none');
});

// Show name when input focus
var input = $('input[type="text"], input[type="password"], input[type="email"]');
input.each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
        this.placeholder = '';
    });
    $(this).bind("blur", function () {
        this.placeholder = $(this).attr("data-placeholder");
    });
});
input.focus(function() {
    $(this).siblings('span').css('display','inline-block');
    $(this).css('padding','0 0 10px 10px');
    $(this).siblings('.hide-show').css('top','24px');
    $(this).parent(":before").css('top','20px');
});
input.blur(function() {
    if( $(this).val() ) {
        $(this).siblings('span').css('display','inline-block');
        $(this).css('padding','0 0 10px 10px');
        $(this).siblings('.hide-show').css('top','24px');
        $(this).parent(":before").css('top','20px');
    }else{
        $(this).siblings('span').css('display','none');
        $(this).css('padding','15px 15px 15px 10px');
        $(this).siblings('.hide-show').css('top','15px');
    }
});
input.focus(function() {
    $(this).siblings('span').css('display','inline-block');
    $(this).css('padding','0 0 10px 10px');
    $(this).siblings('.hide-show').css('top','24px');
    $(this).parent(":before").css('top','20px');
});
input.blur(function() {
    if( $(this).val() ) {
        $(this).siblings('span').css('display','inline-block');
        $(this).css('padding','0 0 10px 10px');
        $(this).siblings('.hide-show').css('top','24px');
        $(this).parent(":before").css('top','20px');
    }else{
        $(this).siblings('span').css('display','none');
        $(this).css('padding','15px 15px 15px 10px');
        $(this).siblings('.hide-show').css('top','15px');
    }
});

// Developed by nikoaldr@gmail.com (2019)





