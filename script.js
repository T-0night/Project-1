
function highlightRow(row) {
    row.style.backgroundColor = '#654321'; // Use the dark brown color you want
}

function resetRow(row) {
    row.style.backgroundColor = ''; // Reset to original color
}


document.addEventListener("DOMContentLoaded", function () {

    var icon = document.querySelector('.icon');
    if (!icon) {
        icon = document.createElement("a");
        icon.innerHTML = "+";
        icon.classList.add("icon");
        document.querySelector(".navbar").appendChild(icon);
    }

    icon.addEventListener("click", function () {
        var menu = document.querySelector(".menu");
        if (menu.style.display === "flex" || menu.style.display === "") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });
});

document.addEventListener('mousemove', function (e) {
    // var x = e.clientX;
    var y = e.clientY;
    // var width = window.innerWidth;
    var height = window.innerHeight;

    // Map the mouse position to a range of 0-255 for RGB values
    var red = Math.round((y / height) * 130 + 100);

    // var blue = Math.round((y / height) * 255);

    // Set the background color
    document.h2.style.backgroundColor = `rgb(${red}, 220, 110)`;
    // r: 100-230, diff: 130
});