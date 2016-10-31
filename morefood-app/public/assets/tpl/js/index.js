
widthChange();

var screen_width = screen.width;

function widthChange(){
    var body_width = $('body').width()
    var left = screen_width - body_width;
    if (body_width > 1130){
        $('.first_images').css("left",(-left)/2);
    }
}