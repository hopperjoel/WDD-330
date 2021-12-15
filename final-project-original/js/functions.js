

export function toggleMenu() {
    let navMenu = document.querySelector('.nav');
    navMenu.addEventListener('click', toggleHide(menu));
    navMenu.addEventListener('touchend', toggleHide(menu));
};

export function toggleHide(item) {
        item.classList.toggle('hide');
};

export default function getJSON(url) {
    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
}
  