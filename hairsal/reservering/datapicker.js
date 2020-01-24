var logic = function(currentDateTime) {
    if(currentDateTime.getDay()== 6){
        this.setOptions({
            allowTimes: ['10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
        });
    } else 
        this.setOptions({
            allowTimes: ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '16:00', '16:30', '17:00', '17:30', '18:00', '19:00', '19:30', '20:00', '20:30'],
        });
    };

$('#picker').datetimepicker({
    timepicker: true,
    datepicker: true,
    format: 'd-m-Y H:i', //formatTime
    value: '1-2-2020 12:00', //defaultTime
    hours24: true, 
    step: 30,
    disabledWeekDays: [0],
    yearStart: 2020,
    yearEnd: 2023,
    monthStart: 01,
    onChangeDateTime: logic,
    onShow: logic
});

