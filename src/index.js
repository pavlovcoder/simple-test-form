$('.left-topnav a').click(function(e){
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
})

//Create script for toogleable header panel:
document.getElementsByClassName("topnav-links")[0].onclick = function() {
    openContent(event, 'new_releases');
}

document.getElementsByClassName("topnav-links")[1].onclick = function() {
    openContent(event, 'pre_order');
}

document.getElementsByClassName("topnav-links")[2].onclick = function() {
    openContent(event, 'bestsellers');
}

document.getElementsByClassName("topnav-links")[3].onclick = function() {
    openContent(event, 'features');
}

document.getElementsByClassName("topnav-links")[4].onclick = function() {
    openContent(event, 'merchandise');
}

document.getElementsByClassName("topnav-links")[5].onclick = function() {
    openContent(event, 'genres');
}

document.getElementsByClassName("topnav-links")[6].onclick = function() {
    openContent(event, 'labels');
}

document.getElementsByClassName("topnav-links")[7].onclick = function() {
    openContent(event, 'sale');
}

function openContent(evt, attr) {
    var content, links;
    let i;
    content = document.getElementsByClassName("content-topnav");
    for(i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    links = document.getElementsByClassName("topnav-links");
    for(i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(attr).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("default-open").click();

//Create main-content tabs for switching:
let mainCtn = document.getElementById("new_releases").children,
    mainID = ['books_mags', 'clothing', 'film', 'equipment', 'gift_vouchers'];
let i;
for(i=0; i < mainCtn.length; i++) {
    (function() {
        mainCtn[i].onclick = function() {
            console.log(mainID[i]);
            openMain(event, mainID[i]);
        }
    }());
}

function openMain(evt, id_name) {
    let i,
        content = document.getElementsByClassName("main-content");
    for(i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    for(i = 0; i < mainCtn.length; i++) {
        mainCtn[i].className = mainCtn[i].className.replace(" active-links", "");
    }
    document.getElementById(id_name).style.display = "block";
    evt.currentTarget.className += " active-links";
}

document.getElementById("default-link").click();
