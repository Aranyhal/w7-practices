/*
function functionName(parameter) {
    parameter === "argumentum as a string";
}

functionName("argumentum as a string"); - függvény meghívása


const argument = "argumentum as a string";


const functionName = function (parameter) {
    parameter === "argumentum as a string";

}

const functionName = () => {

}
- arrow function
function ();
függvény meghívása mindig ugyanúgy
*/

const inputElement = (type, name, label) => {
    return `<div>
          <label>${label}</label>
         <input type="${type}" name="${name}">
        </div>`
        
    }


const formElement = `
    <form id="form">
        ${ inputElement("text", "firstName", "Keresztneved") }
        ${ inputElement("file", "profilePicture", "Profilképed") }
        ${ inputElement("email", "personalEmail", "Email címed") }
        ${ inputElement("checkbox", "terms", "Elfogadod-ea felhasználási feltételeket?") }
        ${ inputElement("radio", "newsletter", "Szeretnél-e hírlevelet kapni?") }
        <button>Ok</button>
    </form>
`;

const formSubmit = (event) => {
   event.preventDefault();
        console.log(event);
    event.target.classList.add("submitted");

}
const inputEvent = (event) => {
    
    console.log(event.target.value);
    document.getElementById("inputValueContent").innerHTML = event.target.value;
}

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
    root.insertAdjacentHTML("beforeend", `
            <div id="inputValueContent"></div>
    `);

    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputList = form.querySelectorAll("input");
    for (const  input of inputList) {
        input.addEventListener("input", inputEvent)
        
    }
}


window.addEventListener("load", loadEvent);
