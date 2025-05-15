document.addEventListener("DOMContentLoaded", () => {
  const aiIcon = document.getElementById("ai-icon");
  const aiPopup = document.getElementById("ai-popup");
  const aiResponse = document.getElementById("ai-response");
  const aiSubmit = document.getElementById("ai-submit");
  const closeBtn = aiPopup.querySelector(".close-btn");

  // Toggle popup visibility
  aiIcon.addEventListener("click", () => {
    aiPopup.classList.toggle("hidden");
    aiResponse.focus();
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    aiPopup.classList.add("hidden");
  });

  // Handle response submission
  aiSubmit.addEventListener("click", () => {
    const userResponse = aiResponse.value.trim();
    if (userResponse) {
      alert(`You said: "${userResponse}"`);
      aiResponse.value = ""; // Clear the input
    } else {
      alert("Please enter a message!");
    }
  });
});