function generatePassword() {
  const length = document.getElementById('length').value;
  const useUppercase = document.getElementById('uppercase').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useSymbols = document.getElementById('symbols').checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let charSet = lowercaseChars;
  if (useUppercase) charSet += uppercaseChars;
  if (useNumbers) charSet += numberChars;
  if (useSymbols) charSet += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randIndex];
  }

  document.getElementById('password').value = password;
}

function copyPassword() {
  const passwordField = document.getElementById('password');
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // for mobile
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}