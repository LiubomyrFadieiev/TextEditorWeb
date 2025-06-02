function get_translation() {
    let input_text = document.getElementById("input_area").value;
    let output_text = translate_text(input_text);
    document.getElementById("output_area").innerText = output_text;
}

let dict = {":е": "ё", "-ь": "ъ", "ьі":"ы", "є":"э"}

function translate_text(text) {
    let n = text.length;
    let changed = false;
    let result = ""
    for (let i = 0; i < n; i++) {
       changed = false;
       for (let key of Object.keys(dict)) {
        if (text.charAt(i).toUpperCase() == key.toUpperCase()) {
            result = result + change_symbol(text.charAt(i))
            changed = true;
            break;
        }
        else if (text.substr(i, 2).toUpperCase() == key.toUpperCase()) {
            result = result + change_symbol;(text.substr(i, 2))
            i = i + 1;
            changed = true;
            break;
        }
       }
       if (!changed) {
        result = result + text.charAt(i)
       }
    }
    return result;
}

function change_symbol(key) {
    let start_point = key.length === 1 ? 0 : 1; 
    for (let i = start_point; i < key.length; i++) {
        if (key.charAt(i) === key.charAt(i).toUpperCase()) {
            return dict[key.toLowerCase()].toUpperCase();
        }
    }
    return dict[key.toLowerCase()]
}

function print_dict() {
    document.getElementById("dict_label").innerText = JSON.stringify(dict);
}