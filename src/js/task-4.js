// 4. При відправці форми записуй дані з інпутів у об'єкт під назвою formData і
//  роби перевірку, якщо інпут емейла чи пароля був не заповнений,
//     то вішай клас error на emailError і passwordError відповіно.
//     Якщо ж все було заповнено, то видаляй ці класи.
// Використовуй html з файлу form.html.

const form = document.querySelector("form");
const emailError = document.querySelector(".field.email");
const passwordError = document.querySelector(".field.password");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  //variant 1
  //   const resultObj = {};
  //   const email = event.currentTarget.elements.email.value;
  //     const password = event.currentTarget.elements.password.value;

  //   if (!email) {
  //     emailError.classList.add("error");
  //   } else {
  //     emailError.classList.remove("error");
  //   }

  //   if (!password) {
  //     passwordError.classList.add("error");
  //   } else {
  //     passwordError.classList.remove("error");
  //   }

  //   if (email && password) {
  //     resultObj.email = email;
  //     resultObj.password = password;
  //     console.log(resultObj);
  //   }
  //variant 2

  const formData = [...event.currentTarget.elements].reduce((obj, elem) => {
    if (elem.name) {
      obj[elem.name] = elem.value;
    }
    return obj;
  }, {});
  if (!formData.email) {
    emailError.classList.add("error");
  } else {
    emailError.classList.remove("error");
  }

  if (!formData.password) {
    passwordError.classList.add("error");
  } else {
    passwordError.classList.remove("error");
  }
  console.log(newArr);
}
