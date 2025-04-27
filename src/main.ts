import './style.css';

const root = document.getElementById('root');
if (root) {
  root.innerHTML = `
    <style>
      body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background-color: #121212;
        color: #e0e0e0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      
      .landing-bg {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
      }

      .feature-card {
        background-color: rgba(45, 45, 45, 0.7);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-radius: 8px;
        padding: 2rem;
        width: 300px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        border-left: 4px solid #bb86fc;
      }

      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        background-color: rgba(55, 55, 55, 0.8);
      }

      .feature-card h2 {
        color: #bb86fc;
        margin-top: 0;
      }

      .feature-card p {
        color: #b0b0b0;
      }
    </style>
    <div class="landing-bg">
      <header class="header">
        <h1 class="title">QuizYay</h1>
        <p class="subtitle">Create engaging quizzes instantly with the power of AI.</p>
        <button class="cta">Start Quiz</button>
      </header>
      <main>
        <section class="features">
          <div class="feature-card animate-on-scroll" style="opacity: 0;">
            <h2>AI-Powered Questions</h2>
            <p>Generate unique questions tailored to your needs.</p>
          </div>
          <div class="feature-card animate-on-scroll" style="opacity: 0;">
            <h2>Instant Results</h2>
            <p>Receive results seconds after quiz completion.</p>
          </div>
          <div class="feature-card animate-on-scroll" style="opacity: 0;">
            <h2>Customizable Quizzes</h2>
            <p>Personalize topics, difficulty levels and more.</p>
          </div>
        </section>
      </main>
    </div>
  `;

  // Add click event listener to the Start Quiz button
  const startQuizButton = root.querySelector('.cta');
  if (startQuizButton) {
    startQuizButton.addEventListener('click', () => {
      window.location.href = 'createquiz/index.html';
    });
  }

  // Setup intersection observer to trigger anime.js scroll entrance
  const animateOnScrollElements = root.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window && animateOnScrollElements.length) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // @ts-ignore
          window.anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [60, 0],
            duration: 1050,
            easing: 'easeOutQuart',
          });
          observer.unobserve(entry.target); // Trigger Once
        }
      }
    }, { threshold: 0.1 });
    for (const elem of animateOnScrollElements) observer.observe(elem);
  }
}