 function typeText(text, targetId, speed = 80) {
      let i = 0;
      const target = document.getElementById(targetId);
      const interval = setInterval(() => {
        if (i < text.length) {
          target.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }

    window.onload = () => {
      const msg = new SpeechSynthesisUtterance("Welcome to Harshad Teli's portfolio website.");
      window.speechSynthesis.speak(msg);
      typeText("Aspiring Developer | Tech Enthusiast | Creative Thinker", "typedText");

      const sections = document.querySelectorAll('section');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      sections.forEach(section => {
        observer.observe(section);
      });
    };

    function submitForm(e) {
      e.preventDefault();
      alert("Message sent successfully!");
      const msg = new SpeechSynthesisUtterance("Thank you for contacting Harshad Teli. I will get back to you soon.");
      window.speechSynthesis.speak(msg);
      return false;
    }

    function downloadResume() {
      const msg = new SpeechSynthesisUtterance("Harshad Teli resume download will begin now.");
      window.speechSynthesis.speak(msg);
      window.open('resume.pdf', '_blank');
    }