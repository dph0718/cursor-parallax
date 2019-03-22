
console.log(`INITIAL HEIGHT: ${$(document).height()}`);
const pi = Math.PI;

$(document).on("mousemove", function (event) {
    let pageHeight = $(document).height();
    let pageWidth = $(document).width();
    let centerY = pageHeight / 2;
    let centerX = pageWidth / 2;
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let xDif = mouseX - centerX;
    let yDif = mouseY - centerY;

    let thetaMouse = Math.atan2(yDif, xDif) * 180 / Math.PI;

    let maxHeight = 30;
    let maxWidth = 20;
    let faceHeight = $("#block-face").height();
    let faceWidth = $("#block-face").width();
    //Skew and height formulas for right face
    let rightWidth = Math.cos(thetaMouse / 180 * pi) * maxWidth;
    let rightSkewY = 180 - thetaMouse * -1;
    let offsetY = Math.tan(rightSkewY / 180 * pi) * 0.5 * rightWidth;

    let leftWidth = -rightWidth;
    let leftSkewY = rightSkewY;


    // Skew and height formulas for bottom face.
    let bottomHeight = Math.sin(thetaMouse / 180 * pi) * maxHeight;
    let bottomSkewX = (90 - thetaMouse);
    let offsetX = Math.tan(bottomSkewX / 180 * pi) * 0.5 * bottomHeight - (rightWidth/2) + (leftWidth/2);
    // Skew and height forulas for top face.
    let topHeight = -bottomHeight;
    let topSkewX = bottomSkewX;



    $("#faceHeight").text(`face dimensions: ${faceWidth} x ${faceHeight}`)
    $("#log").empty();
    $("<h4>").text(`thetaMouse: ${thetaMouse}`).appendTo("#log");
    $("<h4>").text(`sin of thetaMouse: ${Math.sin(thetaMouse / 180 * pi)}`).appendTo("#log");
    $("<h4>").text(`offset: ${Math.tan(bottomSkewX / 180 * pi) * 0.5 * bottomHeight}`).appendTo("#log");
    $("<h4>").text(`rightWidth: ${rightWidth}`).appendTo("#log");

    $("<h4>").text(`thetaMouse: ${(thetaMouse / 180)} pi Radians`).appendTo("#log");



    $("#block-top")
        .css('height', topHeight)
        .css('transform', `skewX(${topSkewX}deg) translate(${offsetX}px, 0)`)
    $("#block-left")
        .css('width', leftWidth)
        .css('transform', `skewY(${leftSkewY}deg) translate(0 , ${offsetY}px)`)

    $("#block-bottom")
        .css('height', bottomHeight)
        .css('transform', `skewX(${bottomSkewX}deg) translate(${offsetX}px, 0)`)
    $("#block-right")
        .css('width', rightWidth)
        .css('transform', `skewY(${rightSkewY}deg) translate(0 , ${offsetY}px)`)
    // $("#bottom-skew").text("Bottom skew: " + skewX + "deg");

})
    .click(function () { console.log(event.pageX) });


