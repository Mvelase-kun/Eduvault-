function signUp() {
  alert("Signup functionality coming soon!");
  document.getElementById("dashboard").style.display = "block";
}

function signIn() {
  alert("Signin successful!");
  document.getElementById("dashboard").style.display = "block";
}

async function askAI() {
  const question = document.getElementById("userQuestion").value;
  const responseDiv = document.getElementById("aiResponse");
  responseDiv.innerText = "Thinking...";

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_OPENAI_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{role: "user", content: question}]
    })
  });

  const data = await response.json();
  responseDiv.innerText = data.choices[0].message.content;
}
