function addContact(){
    let contactImageLogic = document.createElement("input");
    contactImageLogic.setAttribute("id","file-selector")
    contactImageLogic.setAttribute("type","file");
    contactImageLogic.setAttribute("accept",".jpg, .jpeg, .png");
    document.appendChild(contactImageLogic);
    const fileSelector = document.getElementById('file-selector');
    fileSelector.addEventListener('change', (event) => {
        const file = event.target.files[0];
        console.log(file);
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;");
            }
            reader.onerror = function (evt) {
                console.log("error");
            }
        }
    });
}