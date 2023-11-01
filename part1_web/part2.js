function apply_paragraph_changes() 
{
    var border_red = document.getElementById("border_red").value;
    var border_green = document.getElementById("border_green").value;
    var border_blue = document.getElementById("border_blue").value;
    var border_width = document.getElementById("border_width").value;
    var background_red = document.getElementById("background_red").value;
    var background_green = document.getElementById("background_green").value;
    var background_blue = document.getElementById("background_blue").value;
    var paragraph = document.getElementById("to_alter");

    paragraph.style.borderColor="rgb(" + border_red + "," + border_green + "," + border_blue + ")";
    paragraph.style.borderWidth=border_width + "px";
    paragraph.style.background="rgb(" + background_red + "," + background_green + "," + background_blue + ")";
}