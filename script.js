const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
  const question = faqItem.querySelector('.question');
  const answer = faqItem.querySelector('.answer');
  const toggleIcon = question.querySelector('.toggle-icon');

  answer.classList.remove('show');

  question.addEventListener('click', () => {
    answer.classList.toggle('show');

    if (answer.classList.contains('show')) {
      toggleIcon.src = 'images/icon-minus.svg';
    } else {
      toggleIcon.src = 'images/icon-plus.svg';
    }
  });
});