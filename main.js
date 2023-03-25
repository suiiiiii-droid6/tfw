canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    MouseEvent = "mouseDown"
}



canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {

    MouseEvent = "mouseleave";

}

canvas.addEventListener("mousemve", my_mousemove);
function my_mousemove(e) {

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (MouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ")
        console.log("x = " + last_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);

        console. log ("Current position of x and y coordinates = ");
    
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo (current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }

    last_position_of_mouse_x = current_position_of_mouse_x;
    last_position_of_mouse_y = current_position_of_mouse_y;
}