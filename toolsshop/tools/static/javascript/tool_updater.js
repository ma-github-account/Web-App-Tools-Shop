
var id_from_h3 = document.getElementById("element_id");
var idValue = id_from_h3.textContent || id_from_h3.innerText; 

//let type = "Hammer";
//let model = "Milwaukee H1555";
//let manufacturer = "Milwaukee";
//let price = 17001222;

function modifyToolValuesForGivenId(idValue, type, model, manufacturer, price) {

    let url = `http://127.0.0.1:8000/api/tools/${idValue}/`;
    
    const ob = {
      tool_type: type,
      model: model,
      manufacturer: manufacturer,
      price: price
    }
    
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    
    fetch(url, {
            method: "put",
            headers: headers,
            body: JSON.stringify(ob)
        })
        .then(res => res.json())
        .then(res => {
            console.log("Fetch complete1");
            console.log(res);
        })
}

function clickEdit() {
    document.getElementById("edit-btn").hidden=true;
    document.getElementById("type_label").hidden=true;
    document.getElementById("model_label").hidden=true;
    document.getElementById("manufacturer_label").hidden=true;
    document.getElementById("price_label").hidden=true;
    document.getElementById("save-btn").hidden=false
    document.getElementById("cancel-btn").hidden=false
    document.getElementById("type_input").hidden=false
    document.getElementById("model_input").hidden=false
    document.getElementById("manufacturer_input").hidden=false
    document.getElementById("price_input").hidden=false
    type_text = document.getElementById('type_label').textContent;
    document.getElementById('type_input').value = type_text;
    model_text = document.getElementById('model_label').textContent;
    document.getElementById('model_input').value = model_text;
    manufacturer_text = document.getElementById('manufacturer_label').textContent;
    document.getElementById('manufacturer_input').value = manufacturer_text;
    price_text = document.getElementById('price_label').textContent;
    document.getElementById('price_input').value = price_text;
}

var edit_button = document.getElementById("edit-btn");
edit_button.addEventListener("click", clickEdit);

function clickCancel() {
    document.getElementById("edit-btn").hidden=false;
    document.getElementById("type_label").hidden=false;
    document.getElementById("model_label").hidden=false;
    document.getElementById("manufacturer_label").hidden=false;
    document.getElementById("price_label").hidden=false;
    document.getElementById("save-btn").hidden=true
    document.getElementById("cancel-btn").hidden=true
    document.getElementById("type_input").hidden=true
    document.getElementById("model_input").hidden=true
    document.getElementById("manufacturer_input").hidden=true
    document.getElementById("price_input").hidden=true
}

var cancel_button = document.getElementById("cancel-btn");
cancel_button.addEventListener("click", clickCancel);

function clickSave() {
    type_input_text = document.getElementById('type_input').value
    document.getElementById('type_label').innerHTML = type_input_text;
    model_input_text = document.getElementById('model_input').value
    document.getElementById('model_label').innerHTML = model_input_text;
    manufacturer_input_text = document.getElementById('manufacturer_input').value
    document.getElementById('manufacturer_label').innerHTML = manufacturer_input_text;
    price_input_text = document.getElementById('price_input').value
    document.getElementById('price_label').innerHTML = price_input_text;
    document.getElementById("edit-btn").hidden=false;
    document.getElementById("type_label").hidden=false;
    document.getElementById("model_label").hidden=false;
    document.getElementById("manufacturer_label").hidden=false;
    document.getElementById("price_label").hidden=false;
    document.getElementById("save-btn").hidden=true
    document.getElementById("cancel-btn").hidden=true
    document.getElementById("type_input").hidden=true
    document.getElementById("model_input").hidden=true
    document.getElementById("manufacturer_input").hidden=true
    document.getElementById("price_input").hidden=true
    modifyToolValuesForGivenId(idValue, type_input_text, model_input_text, manufacturer_input_text, price_input_text)
}

var save_button = document.getElementById("save-btn");
save_button.addEventListener("click", clickSave);














































