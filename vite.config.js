// vite.config.js
export default {
  // Include env variables in the build
  envPrefix: 'VITE_',
  // Properly handle HTML files in public directory
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        createQuiz: './public/createquiz/index.html',
        hostQuiz: './public/createquiz/host-quiz.html',
        displayQuiz: './public/createquiz/display-quiz.html',
        joinQuiz: './public/createquiz/join-quiz.html',
        result: './public/result/index.html'
      },
      // Add external to exclude certain imports from being processed by Rollup
      external: ['/apiConfig.js']
    }
  }
}