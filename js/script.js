// Custom JavaScript here

  const text = "I’m Chima Solomon.";
  const typingElement = document.getElementById("typing-text");
  let i = 0;

  function typeText() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeText, 200); // Typing speed (ms)
    }
  }

  document.addEventListener("DOMContentLoaded", typeText);



  // Counter
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('+', '');
      const increment = target / 200; // Slower speed 

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}+`;
        setTimeout(updateCount, 30); // Adjust delay for smoothness
      } else {
        counter.innerText = `${target}+`; 
      }
    };

    updateCount();
  });