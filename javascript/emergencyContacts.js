function addContact(){
    let contactGridContainer = document.getElementById("contactGridContainer");
    let contactItem = document.createElement("div");
    contactItem.classList.add("contactItem");
    
    let contactImage = document.createElement("div");
    contactImage.classList.add("contactImage");
    
    let label = document.createElement("label");
    label.classList.add("image-upload");
    contactImage.appendChild(label);

    let contactImageLogic = document.createElement("input");
    contactImageLogic.setAttribute("id","file-selector")
    contactImageLogic.setAttribute("type","file");
    contactImageLogic.setAttribute("accept",".jpg, .jpeg, .png");

    label.appendChild(contactImageLogic);
    
    let contactInformation = document.createElement("div");
    contactInformation.classList.add("contactInformation");
    
    contactItem.appendChild(contactImage);
    contactItem.appendChild(contactInformation);

    contactGridContainer.appendChild(contactItem);
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
