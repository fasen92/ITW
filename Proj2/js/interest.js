/*
* login: xmahut01
*  meno: Ivan Mahút
*/
document.addEventListener('DOMContentLoaded', function() {
    const interestItems = document.querySelectorAll('.interests-item');
    const interestList = document.querySelectorAll('#interests-list li');

    interestList.forEach(function(item) {
        item.addEventListener('click', function() {
            const interest = this.getAttribute('data-interest');

            // Remove active class from all items
            interestList.forEach(function(item) {
                item.classList.remove('active');
            });

            // Add active class to the clicked list item
            this.classList.add('active');

            // Hide all interest items
            interestItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Show the interest item which has the same data-interest value as the clicked li
            const interestItem = document.querySelector(`.interests-item[data-interest="${interest}"]`);
            if (interestItem) {
                interestItem.classList.add('active');
            }
        });
    });
});