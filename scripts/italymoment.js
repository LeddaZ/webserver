$(document).ready(function() {

    let lastCrisis = new Date('07/21/2022');
    let today = new Date();
    let difference = today.getTime() - lastCrisis.getTime();
    let days = Math.ceil(difference / (1000 * 3600 * 24));

    $("#counter").html(days);

})
