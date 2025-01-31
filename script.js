window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const navUl = document.querySelector('header nav ul'); // Target the ul in the header

    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add('shrink');
        navUl.classList.add('hidden'); // Add the class to hide the ul
    } else {
        header.classList.remove('shrink');
        navUl.classList.remove('hidden'); // Remove the class to show the ul again
    }
});
