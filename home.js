function openExperiment(experimentNumber) {
  const experimentCard = document.getElementById(`exp${experimentNumber}`);

  // Disable pointer events to prevent further interactions
  experimentCard.style.pointerEvents = 'none';

  // Add a class to trigger the breaking animation
  experimentCard.classList.add('experiment-card--breaking');

  // Wait for the animation to finish, then open the experiment in a new tab
  setTimeout(() => {
    window.open(`All Exp/experiment${experimentNumber}.html`, '_blank');

    // Add a class to trigger the return animation
    experimentCard.classList.remove('experiment-card--breaking');
    experimentCard.classList.add('experiment-card--return');

    // Wait for the return animation to finish, then remove the class
    setTimeout(() => {
      experimentCard.classList.remove('experiment-card--return');
      experimentCard.style.pointerEvents = 'auto';
    }, 500);
  }, 800);
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".experiment-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});