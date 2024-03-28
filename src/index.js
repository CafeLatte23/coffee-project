function chatNow() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  if (age < 18) {
    alert("Sorry, you may not apply 😭");
  } else {
    let email = prompt("What is your email address?");
    alert(
      "Thanks " +
        name +
        ", we've sent you a link to the discussion board! Look forward to seeing you there! 🤩"
    );
  }
}

let chatButton = document.querySelector("button");
chatButton.addEventListener("click", chatNow);
