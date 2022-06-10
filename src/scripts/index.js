import 'regenerator-runtime';
import '../styles/style.css';
// import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('.navbar-toggler'),
  drawer: document.querySelector('#navbarSupportedContent'),
  content: document.querySelector('#mainContent'),
  footer: document.querySelector('#footer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
