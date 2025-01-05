export const handleScrollEffect = (className, triggerClass) => {
  const elements = document.querySelectorAll(className);

  function checkElements() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    elements.forEach((element) => {
      const boxTop = element.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        element.classList.add(triggerClass);
      } else {
        element.classList.remove(triggerClass);
      }
    });
  }

  // Add scroll event listener
  window.addEventListener("scroll", checkElements);

  // Initial check
  checkElements();

  // Clean up event listener
  return () => {
    window.removeEventListener("scroll", checkElements);
  };
};
