let midVerticalPx = function () {
    return $(document).height() / 2;
};

let midHorizontalPx = function () {
    return $(document).width() / 2;
};


$(document).on("mousemove", function (event) {
    $("#log").text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    let centerY = midVerticalPx();
    let centerX = midHorizontalPx();
    let pageHeight = $(document).height();
    let pageWidth = $(document).width();
    let maxHeight = 30;
    let maxWidth = 30;
    let faceHeight = $("#block-face").height();
    $("#faceHeight").text(`faceheight: ${faceHeight}`)

    let bottomHeight = -maxHeight * ((event.pageY - centerY) / (pageHeight - centerY));
    let topHeight = -bottomHeight;
    let leftWidth = maxWidth * ((event.pageX - centerX) / (pageWidth - centerX));
    let rightWidth = -leftWidth;

    let skewX = -30 * ((event.pageX - centerX) / (pageWidth - centerX));
    let skewY = -60 * ((event.pageY - centerY) / (pageHeight - centerY));


    let offsetX = (bottomHeight / 2) * Math.tan(skewX * Math.PI / 180);
    let offsetY = (rightWidth / 2) * Math.tan(skewY * Math.PI / 180);


    $("#block-bottom")
        // .text(`${bottomHeight}px`)
        .css('height', bottomHeight)
        .css('transform', `skewX(${skewX}deg) translate(${offsetX}px, 0)`)
    $("#block-top")
        // .text(`${bottomHeight}px`)
        .css('height', topHeight)
        .css('transform', `skewX(${-skewX}deg) translate(${-offsetX}px, 0)`)
    $("#block-right")
        .css('width', rightWidth)
        .css('transform', `skewY(${  skewY}deg) translate(0 , ${offsetY}px)`)
    $("#block-left")
        .css('width', leftWidth)
        .css('transform', `skewY(${-skewY}deg) translate(0 , ${-offsetY}px)`)
    $("#bottom-skew").text("Bottom skew: " + skewX + "deg");

})
    .click(function () { console.log(event.pageX); console.log(midVerticalPx()) });


