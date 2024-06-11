document.addEventListener("DOMContentLoaded", () => {
  const sleep = (ms: number) =>
    new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });

  const typingSlot = document.querySelector(".typing-slot") as HTMLElement;

  const phrases = [
    "code",
    "hug puppies",
    "play magic",
    "So here is a conversation phrase that you might see scrolling across your screen at high speed",
  ];

  const animationSpeed = 10;

  let phraseIndex = 0;

  const cycleThroughPhrases = async () => {
    while (phraseIndex < phrases.length) {
      const currentPhrase = phrases[phraseIndex];
      for (let i = 0; i <= currentPhrase.length - 1; i++) {
        typingSlot.innerText = currentPhrase.substring(0, i + 1);
        await sleep(animationSpeed);
      }

      await sleep(animationSpeed + 500);

      for (let i = currentPhrase.length - 1; i > 0; i--) {
        typingSlot.innerText = currentPhrase.substring(0, i - 1);
        await sleep(animationSpeed);
      }

      await sleep(animationSpeed + 500);

      phraseIndex++;
    }
  };

  cycleThroughPhrases();
});
