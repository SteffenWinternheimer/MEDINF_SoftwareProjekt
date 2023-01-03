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
    

    let contactName = document.createElement("input");
    contactName.setAttribute("type","text");
    contactName.setAttribute("class","contactNameField");
    contactName.setAttribute("placeholder","Gib hier einen Namen ein...");

    let phoneNumber = document.createElement("input");
    phoneNumber.setAttribute("type","text");
    phoneNumber.setAttribute("class","phoneNumber");
    phoneNumber.setAttribute("placeholder","Gib hier die Telefonnummer ein...");

    let phoneButton = document.createElement("button");
    phoneButton.setAttribute("type","button");
    phoneButton.setAttribute("onclick","callNumber();");
    phoneButton.setAttribute("class","phoneButton");

    contactInformation.appendChild(contactName);
    contactInformation.appendChild(phoneNumber);
    contactInformation.appendChild(phoneButton);
    

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


function callNumber(){
    let buttonObject = document.querySelector('.phoneNumber');
    let phoneNumberField = buttonObject.previousElementSibling.nextElementSibling;
    let number = phoneNumberField.value;
    document.location.href = "tel:"+number;
}