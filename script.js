// Function to fetch advice from API
const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");

  if (response.status !== 200) {
    throw new Error(
      "Unable to fetch advice at the moment. Please try again later"
    );
  }

  const data = await response.json();
  return data;
};
fetchAdvice()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("error:", err.message));

// Function to generate and display advice
async function generateAdvice() {
  const data = await fetchAdvice();
  const advice = data.slip.advice;
  const adviceText = document.querySelector(".adviceText");
  adviceText.textContent = advice;
}

// Attach event listener to generate button
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateAdvice);
