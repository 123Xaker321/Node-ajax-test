const main = document.getElementById('main');
main.style.zoom = "10%";
function minusScale(){
    let zoomNumb = Number(main.style.zoom.replace('%', ''));
    main.style.zoom = (zoomNumb - 20).toString() + "%";
}
function plusScale(){
    let zoomNumb = Number(main.style.zoom.replace('%', ''));
    main.style.zoom = (zoomNumb + 20).toString() + "%";
}