const main = document.getElementById('main');
main.style.zoom = "30%";
function minusScale(){
    let zoomNumb = Number(main.style.zoom.replace('%', ''));
    main.style.zoom = (zoomNumb - 20).toString() + "%";
}
function plusScale(){
    let zoomNumb = Number(main.style.zoom.replace('%', ''));
    main.style.zoom = (zoomNumb + 20).toString() + "%";
}