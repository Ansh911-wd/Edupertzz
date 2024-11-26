document.getElementById('contactForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
});

document.getElementById('registerForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  
  const response = await fetch('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  alert(await response.json().message);
});

document.getElementById('loginForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    alert('Login successful');
  } else {
    alert(data.message);
  }
});


