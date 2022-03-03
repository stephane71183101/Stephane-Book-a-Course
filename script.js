function validationTextFunction() {
    if (!validateRequiredList(["firstName", "lastName", "address", "zip", "city", "email", "phone", "skypeZoomUserName", "languageChoiceReason", "messageLanguageKnowledge"])) return false;
}

function validateRequiredList(inputIDs) {
  for (let i = 0; i < inputIDs.length; i++) {
    let inputID = inputIDs[i];

    if (!validateRequired(inputID)) return false;
    sessionStorage.setItem(inputID, document.getElementById(inputID).value);
  }
  return true;
}

function validateRequired(inputID) {
  let value = document.getElementById(inputID).value;
  if(!value) {
    alert(`Bitte füllen Sie das Feld "${inputID}" aus.`);
    return false;
  }
  return true;
}

 function validate(inputID) {
  let valLanguageChoice = document.getElementById("languageChoice").selectedOptions[0].value;
  if (valLanguageChoice === "default") {
      alert("Bitte wähle Sie eine Sprache aus.");
      return false;
  }
 }

 /* Selected field > Chris's Exmaple */
 /*
function validate() {
        let valSelect = document.getElementById("my-selection").selectedOptions[0].value;
        if (valSelect === "default") {
            alert("Bitte wähle eine Option aus.");
            return false;
        }
    >
  */

/*
 function validationRadioButtonSalutation(inputID) {
  let female = document.getElementById(`madam`).checked;
  let male = document.getElementById(`mister`).checked;
  if (!female && !male) {
    alert(`Bitte selektieren Sie eine Anrede.`);
  }
  return false;
 }
 */