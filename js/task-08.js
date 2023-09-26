const loginForm = document.querySelector('.login-form');
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
    
if (email === "" || password === "") {
 return alert('Please fill in all fields!');
}
    const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  form.reset();
}
