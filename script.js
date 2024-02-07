// basic navigation menu
document.addEventListener("DOMContentLoaded", function () {
    var icon = document.querySelector('.icon');
    var menu = document.querySelector(".menu");

    icon.addEventListener("click", function () {
        // 切换菜单的显示状态
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });

    // 监听屏幕尺寸变化
    window.addEventListener('resize', function () {
        // 当屏幕宽度大于840px时，确保菜单是可见的
        if (window.innerWidth > 840) {
            menu.style.display = ''; // 清除直接设置在元素上的display样式，让CSS规则生效
        }
    });
});


// home page highlight the current section in the navigation menu

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // 获取所有的section元素和menu链接
        var sections = document.querySelectorAll("section");
        var menuLinks = document.querySelectorAll(".menu a");

        sections.forEach(section => {
            var top = window.scrollY;
            var offset = section.offsetTop - 150; // 150是一个偏移量，可以根据需要调整
            var height = section.offsetHeight;
            var id = section.getAttribute("id");

            if (top >= offset && top < offset + height) {
                menuLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(id)) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});

// Home page background fade in img
document.addEventListener("DOMContentLoaded", function () {
    // 获取#Home元素
    var homeSection = document.getElementById('Home');

    // 检查元素是否存在
    if (homeSection) {
        // 添加动画效果
        homeSection.style.opacity = 1;
        homeSection.style.transform = 'translateY(0)';
    }
});

// Home page background rotate img

document.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset; // 获取当前滚动位置
    var rotation = scrollPosition % 60; // 计算旋转角度，使用 % 360 保证角度在 0 到 359 之间

    // 获取所有需要旋转的图片
    var images = document.querySelectorAll('.rotateimg');

    // 为每张图片设置旋转角度
    images.forEach(function (img) {
        img.style.transform = 'rotate(' + rotation + 'deg)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clearColors').addEventListener('click', clearLinkColors);
});




// Resources Page hover over change color
function highlightRow(row) {
    row.style.backgroundColor = 'rgba(250, 248, 188, 0.5)'; // Use the dark brown color you want
}

function resetRow(row) {
    row.style.backgroundColor = ''; // Reset to original color
}



// Color mode Clear Colors fuction
function clearLinkColors() {
    document.querySelectorAll('.rowcolor a').forEach(link => {
        link.style.backgroundColor = ''; // 清除背景颜色
        const id = link.getAttribute('id');
        localStorage.removeItem(id); // 从 localStorage 中删除颜色数据
    });
}

// Color Mode Clear Colors
document.getElementById('clearColors').addEventListener('click', clearLinkColors);





// Color Array
const colors = ['#B4C66F', '#52805D', '#083E38'];
// 初始化链接颜色
initLinkColors();


function initLinkColors() {
    document.querySelectorAll('.rowcolor a').forEach(link => {
        const id = link.getAttribute('id'); // 获取每个链接的唯一 ID
        const savedColor = localStorage.getItem(id); // 使用该 ID 从 localStorage 获取颜色
        if (savedColor) {
            link.style.backgroundColor = savedColor; // 如果有保存的颜色，设置为背景色
        }

        // 为链接添加点击事件监听器
        link.addEventListener('click', function (event) {
            event.preventDefault(); // 阻止链接的默认行为
            const currentColor = link.style.backgroundColor;
            const nextColor = getNextColor(currentColor);
            link.style.backgroundColor = nextColor; // 设置新的背景颜色
            localStorage.setItem(id, nextColor); // 使用链接的 ID 在 localStorage 保存新颜色
        });
    });
}

function getNextColor(currentColor) {
    let hexColor = rgbToHex(currentColor).toUpperCase(); // 确保大小写一致
    let currentIdx = colors.indexOf(hexColor);
    let nextIdx;

    if (currentIdx === -1) {
        // 如果当前颜色不在数组中，可能是因为页面刚加载或颜色被外部CSS覆盖
        nextIdx = 0; // 从第一个颜色开始
    } else {
        nextIdx = (currentIdx + 1) % colors.length; // 循环颜色数组
    }

    return colors[nextIdx];
}


function rgbToHex(rgb) {
    if (!rgb) return colors[0]; // 如果没有颜色，返回第一个颜色

    // 将 rgb(r, g, b) 格式转换为十六进制格式
    let rgbArray = rgb.match(/\d+/g); // 提取 RGB 值
    let hex = rgbArray.map(function (x) {
        let hex = parseInt(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex; // 确保每个组件都是两位数
    }).join('');

    return "#" + hex;
}

//mousemove color change
document.addEventListener('mousemove', function (e) {
    // var x = e.clientX;
    var y = e.clientY;
    // var width = window.innerWidth;
    var height = window.innerHeight;

    // Map the mouse position to a range of 0-255 for RGB values
    var red = Math.round((y / height) * 130 + 100);

    // var blue = Math.round((y / height) * 255);

    // Set the background color
    document.h2.style.Color = `rgb(${red}, 220, 110)`;
    // r: 100-230, diff: 130
});