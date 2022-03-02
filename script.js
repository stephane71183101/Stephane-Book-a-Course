function myFunction() {
    if (!validateRequiredList(["salutation", "firstName", "lastName", "address", "zip", "city", "email", "phone", "trialLessonSkypeZoom", "skypeZoomUserName", "languageChoice", "languageChoiceReason", "languageLevel", "trialLessonDate", "messageLanguageKnowledge"])) return false;
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
    alert(`Bitte fülle da Feld "${inputID}" aus.`);
    return false;
  }
  return true;
}