$(document).ready(function() {

    let isDarkMode = true;

    const logos = ["github", "instagram", "telegram", "twitter", "youtube"];

    $("button").on("click", function() {
        if(isDarkMode) {
            $("html").css("background-color", "rgb(230, 230, 230)");
            $("*").not("a").css("color", "black");
            $("a").css("color", "rgb(0, 60, 20)");
            $("*").not("button").css("text-shadow", "none");
            $("button").html("Retina saver");
            $("button").css("background", "black");
            $("button").css("color", "white");
            for(let i = 0; i < logos.length; i++) {
                $('img[src="' + "./assets/logos/dark/" + logos[i] + ".svg" + '"]').attr('src', "./assets/logos/light/" + logos[i] + ".svg");
            }
            $("img").css("filter", "none");
            isDarkMode = false;
        } else {
            $("html").css("background-color", "#101010");
            $("*").not("a").css("color", "white");
            $("a").css("color", "rgb(0, 255, 85)");
            $("*").not("button").css("text-shadow", "2px 2px 2px black");
            $("button").html("Retina burner");
            $("button").css("background", "white");
            $("button").css("color", "black");
            for(let i = 0; i < logos.length; i++) {
                $('img[src="' + "./assets/logos/light/" + logos[i] + ".svg" + '"]').attr('src', "./assets/logos/dark/" + logos[i] + ".svg");
            }
            $("img").css("filter", "drop-shadow(3px 3px 3px black)");
            isDarkMode = true;
        }
    });

})
