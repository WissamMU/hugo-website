const gallery = document.querySelector('.gallery');
const buttons = gallery.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Hide all descriptions first
    const descriptions = gallery.querySelectorAll('.description');
    descriptions.forEach(desc => desc.style.display = 'none');

    // Show the description associated with the clicked button
    const description = button.nextElementSibling;
    description.style.display = 'block';

    // Add or remove the 'on' class to indicate the active state
    button.classList.toggle('on');
  });
});