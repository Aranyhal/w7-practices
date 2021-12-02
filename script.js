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

const inputElement = (type, name, label, req ="") => {
  console.log(req);
  return `
       <div class="${type}">
        <label>${label}</label>
        <input type="${type}" name="${name}" ${req}>
        </div>
        `;
};

const selectElement = (type, name, label, selectOptions) => {
  let optionElements = "";
  for (const option of selectOptions) {
    optionElements += `<option>${option}</option>`;
  }

  return `
      <div>
        <label>${label}</label>
        <${type} name="${name}">
        ${optionElements}
        </${type}>
      </div>
     `;
};

/*

NE IGY!
const formElement = '<form id="form">' + inputElement("text", "firstName", "Keresztneved") + inputElement("file", "profilePicture", "Profilképed") + inputElement("email", "personalEmail", "Email címed") + inputElement("checkbox", "terms", "Elfogadod-ea felhasználási feltételeket?") + inputElement("checkbox", "newsletter", "Szeretnél-e hírlevelet kapni?") + inputElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismertőstől", "egyéb"]) + <button>Ok</button>
    </form>
*/

/*const nameData = {
  type: "text",
  name: "firstName",
  label: "Keresztneved"
}*/



const anotherformFields = [

{
  type: "text",
  name: "street",
  label: "Közterület neve"
},

{
  type: "text",
  name: "houseNumber",
  label: "Házszám"
},
{
  type: "number",
  name: "zipcode",
  label: "Irányítószám"
},
{
  type: "text",
  name: "city",
  label: "Település neve"
},

]
const formFields = [
  {
    type: "text",
    name: "firstName",
    label: "Keresztneved"
  },

  {type: "file",
  name: "profilePicture",
  label: "Profilképed"
  },
{
  type: "email",
  name: "personalEmail",
  label: "Email címed",
  required: "required"
},

{
  type: "checkbox",
  name: "newletter",
  label: "Szeretnél hírlevelet kapni?"
},

{
type: "checkbox",
name: "terms",
label: "Elfogadod a felhasználási feltételeket?"
},

];

/*
const formElement = `
    <form id="form" >
    
        ${inputElement(nameData.type, nameData.name, nameData.label)}
        ${inputElement("file", "profilePicture", "Profilképed")}
        ${inputElement("email", "personalEmail", "Email címed", "required")}
        ${inputElement(
          "checkbox",
          "newsletter",
          "Szeretnél-e hírlevelet kapni?"
        )}
        ${inputElement(
          "checkbox",
          "terms",
          "Elfogadod-e a felhasználási feltételeket?"
        )}
        ${selectElement("select", "where", "Hol hallottál rólunk?", [
          "internetről",
          "ismerőstől",
          "egyéb",
        ])}
        
        <button>Ok</button>
    </form>
`;*/

const formElement = (ffs) => {
  let toForm = "";
  for (const ff of ffs) {
    toForm += inputElement(ff.type, ff.name, ff.label, ff.required)
  }
  return`
     <form id="$(id)" >
    ${toForm}
    ${selectElement("select", "where", "Hol hallottál rólunk?", [
          "internetről",
          "ismerőstől",
          "egyéb",
        ])}
               <button>Ok</button>
    </form>
`;
}

const formSubmit = (event) => {
  event.preventDefault();
  console.log(event);
  const et = event.target;
  et.classList.add("submitted");
  const etValue = et.querySelector(`select[name="where]`).value;
  console.log(etValue);
};

const inputEvent = (event) => {
  console.log(event.target.name);
  console.log(event);
  const fName = document.querySelector(`input[name="firstName"]`);
  console.log(fName);
  if (event.target.getAttribute("name") === "firstName") {
    document.getElementById("inputValueContent").innerHTML = event.target.value;
  }
};
if(event.target.getAttribute("name")==="profilePicture") {
  console.log(event.target.file[0].name);
  console.log(event.target.files);
  const image = URL.createObjectURL(event.target.files[0]);
  document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `<img src="${image}">`);
}

function loadEvent() {
  const root = document.getElementById("root");
  root.insertAdjacentHTML("beforeend", formElement(formFields, "form"));
  root.insertAdjacentHTML("beforeend", formElement(anotherformFields, "form2"));
  root.insertAdjacentHTML(
    "beforeend",
    `
            <div id="inputValueContent"></div>
    `
  );

  const form = document.getElementById("form");
  form.addEventListener("submit", formSubmit);

  const inputList = form.querySelectorAll("input");
  for (const input of inputList) {
    input.addEventListener("input", inputEvent);
  }
}

window.addEventListener("load", loadEvent);
