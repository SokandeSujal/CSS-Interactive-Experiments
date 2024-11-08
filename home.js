function openExperiment(experimentNumber) {
    alert("Opening Experiment " + experimentNumber);
    window.location.href = `All Exp/experiment${experimentNumber}.html`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".experiment-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  });
  