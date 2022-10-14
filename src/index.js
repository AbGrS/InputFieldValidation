import "./styles.css";

(() => {
  const input = document.getElementById("inputChar");
  input.addEventListener("keyup", (e) => {
    var error = "";
    const errorDiv = document.getElementById("errorMessage");
    errorDiv.innerHTML = "";
    const hashMap = {};
    const inputCharacter = e.target.value;
    if (inputCharacter === "") {
      error = "";
      return;
    }

    for (var char of inputCharacter) {
      if (hashMap[char]) {
        error += "duplicate characters found <br/>";
        break;
      }
      hashMap[char] = true;
    }

    if (inputCharacter.length < 3) {
      error += "min length validation failed";
    }
    errorDiv.innerHTML = error;
    return true;
  });
})();
document.getElementById(
  "app"
).innerHTML = `<h2>An app that validates your input length should be min 3 charcters and no repeating characters</h2>`;
