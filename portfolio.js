const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn1')

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  btn.classList.toggle('active');
  toggle.classList.toggle('active');
});

// Optional: Add smooth scrolling to navigation links
const links = document.querySelectorAll('.menu a');
const link = document.querySelectorAll('.btn1 a');

links.forEach(function (link) {
    link.addEventListener('click', e => {
      e.preventDefault();

      const href = link.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}