document.addEventListener("DOMContentLoaded", () => {
  const sleep = (ms: number) =>
    new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });

  const typingSlot = document.querySelector(".typing-slot") as HTMLElement;

  const phrases = [
    "This is another long conversation that I'm writting out simply to see how fast the text would scroll and how fast I need to shorten the animation delay",
    "hug puppies",
    "play magic",
    "So here is a conversation phrase that you might see scrolling across your screen at high speed",
  ];

  const animationSpeed = 0.5;

  let phraseIndex = 0;

  const cycleThroughPhrases = async (phrases: string[]) => {
    while (phraseIndex <= phrases.length - 1) {
      const currentPhrase = phrases[phraseIndex];
      for (let i = 0; i <= currentPhrase.length - 1; i++) {
        typingSlot.innerText = currentPhrase.substring(0, i + 1);
        await sleep(animationSpeed);
      }

      await sleep(animationSpeed + 1000);

      for (let i = currentPhrase.length - 1; i > 0; i--) {
        typingSlot.innerText = currentPhrase.substring(0, i - 1);
        await sleep(animationSpeed);
      }

      await sleep(animationSpeed + 500);

      phraseIndex++;
    }
  };

  cycleThroughPhrases(phrases);
});
