// Toggle the visibility of the changing content
function toggleContent() {
    const divActive = document.getElementById("div-1");
    const divDeactive = document.getElementById("div-2");

    if(divActive.classList.contains("active")){
        divActive.classList.remove("active");
        divActive.classList.add("deactive");
        divDeactive.classList.remove("deactive");
        divDeactive.classList.add("active");
    }else{
        divDeactive.classList.remove("active");
        divDeactive.classList.add("deactive");
        divActive.classList.add("active");
    }
}