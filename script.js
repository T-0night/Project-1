
function highlightRow(row) {
    row.style.backgroundColor = '#654321'; // Use the dark brown color you want
}

function resetRow(row) {
    row.style.backgroundColor = ''; // Reset to original color
}


document.addEventListener("DOMContentLoaded", function() {

    var icon = document.querySelector('.icon');
    if (!icon) {
        icon = document.createElement("a");
        icon.innerHTML = "+";
        icon.classList.add("icon");
        document.querySelector(".navbar").appendChild(icon);
    }

    icon.addEventListener("click", function() {
        var menu = document.querySelector(".menu");
        if (menu.style.display === "flex" || menu.style.display === "") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });
});