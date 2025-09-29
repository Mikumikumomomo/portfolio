/*
Mozilla Contributors. (n.d.). Element: addEventListener() method. MDN Web Docs. 
    https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
Mozilla Contributors. (n.d.). HTMLElement.style - Web APIs | MDN. MDN Web Docs. 
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
Mozilla Contributors. (n.d.). Document.getElementById(). MDN Web Docs. 
    https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
*/

const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('click', () => {
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
});
