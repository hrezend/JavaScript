const isExistsLocalStorage = (key) => localStorage.getItem(key) != null;
const createOrEditLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getValueFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const lightColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkColors = {
    bg: getStyle(html, "--bg2"),
    bgPanel: getStyle(html, "--bg-panel2"),
    colorHeadings: getStyle(html, "--color-headings2"),
    colorText: getStyle(html, "--color-text2"),
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    );
}

checkbox.addEventListener("change", ({target}) => {
    if(target.checked){
        changeColors(darkColors);
        createOrEditLocalStorage('theme','darkColors')
    }
    else{
        changeColors(lightColors);
        createOrEditLocalStorage('theme','lightColors')
    }
});

if(!isExistsLocalStorage('theme')){
    createOrEditLocalStorage('theme', 'lightColors');
}

if(getValueFromLocalStorage('theme') === "lightColors"){
    checkbox.removeAttribute('checked');
    changeColors(lightColors);
} 
else{
    checkbox.setAttribute('checked', "");
    changeColors(darkColors);
}