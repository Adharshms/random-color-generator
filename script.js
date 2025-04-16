const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];
  
  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  const btn = document.querySelector("#btn");
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  
  btn.onclick = changeBackgroundColor;
  
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
    btn.title = "Click me to change background color!";
  });
  
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
  
  bgHexCodeSpanElement.addEventListener("mouseover", () => {
    bgHexCodeSpanElement.style.color = "#ffcc00";
    bgHexCodeSpanElement.style.transition = "color 0.3s ease";
  });
  
  bgHexCodeSpanElement.addEventListener("mouseout", () => {
    bgHexCodeSpanElement.style.color = "#00ffcc";
  });
  
   document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
  
     const particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);
  
    particle.style.left = `${x + Math.random() * 30 - 15}px`;
    particle.style.top = `${y + Math.random() * 30 - 15}px`;
  
     setTimeout(() => {
      particle.remove();
    }, 1500);
  
    
    const parallaxElements = document.querySelectorAll(".parallax");
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
  
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute("data-speed");
      const moveX = (mouseX - 0.5) * speed * 100;
      const moveY = (mouseY - 0.5) * speed * 100;
  
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  
     body.style.backgroundPosition = `${x * 0.05}% ${y * 0.05}%`;
  });
  