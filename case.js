function generatePassword(inputText) {
  let password = "";
  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";

  // Boşlukları kaldır
  inputText = inputText.replace(/\s+/g, "");

  // Kullanıcının girdisini şifrenin içine rastgele dağıt
  for (let i = 0; i < inputText.length; i++) {
    const randomIndex = Math.floor(Math.random() * (password.length + 1));
    password =
      password.slice(0, randomIndex) +
      inputText[i] +
      password.slice(randomIndex);
  }

  // Eğer şifre hala 9 karakterden kısa ise, rastgele karakterler ekleyerek doldur
  while (password.length < 9) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("errorOutput").innerHTML = ""; // Hata mesajını temizle

    if (inputText.length > 0) {
      const generatedPassword = generatePassword(inputText);
      document.getElementById("passwordOutput").innerHTML =
        "Oluşturulan Şifre: " + generatedPassword;
    } else {
      document.getElementById("errorOutput").innerHTML =
        "Girdi eksik. Lütfen bir girdi girin.";
      document.getElementById("passwordOutput").innerHTML = ""; // Şifreyi temizle
    }
  });
