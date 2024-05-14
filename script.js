const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

let inputVal = "";

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = [];
    if (str != "") {
        fruit.forEach((val) => {
            if (val.toLocaleLowerCase().includes(str)) {
                results.push(val);
            }
        });
    }
    return results;
}


function searchHandler(e) {
    e.preventDefault();
    if (e.isComposing || e.keyCode === 229 || e.keyCode === 16) {
        return;
    }
    inputVal = input.value;
    let searchResults = search(inputVal.toLocaleLowerCase());
    showSuggestions(searchResults, inputVal);
}


function showSuggestions(results, inputVal) {
    suggestions.innerHTML = "";
    results.forEach((val) => {
        let li = document.createElement("li");
        li.innerHTML = val;
        li.classList = "has-suggestions";
        suggestions.append(li);
    });
}


function useSuggestion(e) {
    e.preventDefault();
    console.log(e.target);
    input.value = e.target.innerHTML;
    suggestions.innerHTML = "";
}


input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);