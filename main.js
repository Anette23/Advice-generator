// VARIABLES
const text = document.querySelector(".advice");
const btn = document.querySelector(".btn");
const adviceNumber = document.querySelector('.advice-number')

// GET NEW ADVICE FUNCTION
const getNewAdvice = async () => {
  try {
    let url = "https://api.adviceslip.com/advice";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const allAdvices = await response.json();

    const advice = allAdvices.slip.advice;

    const adviceId = allAdvices.slip.id

    text.innerHTML = advice;
    adviceNumber.innerHTML = adviceId;

  } catch (error) {
    console.error('Error fetching advice:', error);
  }
};

btn.addEventListener('click', getNewAdvice);
