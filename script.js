document.addEventListener('DOMContentLoaded', () => {
    // Populate the graduation year dropdown
    const currentYear = new Date().getFullYear();
    const select = document.getElementById('batch');

    // Populate dropdown only when clicked
    select.addEventListener('focus', () => {
        // Remove existing options except the first
        while (select.options.length > 1) {
            select.remove(1);
        }

        for (let year = 1900; year <= 2030; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            select.appendChild(option);
        }
    });

    // Handle form submission
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';

        // Hide the form
        form.style.display = 'none';
    });

    // Handle edit response button
    const editButton = document.getElementById('editResponse');
    if (editButton) {
        editButton.addEventListener('click', () => {
            // Show the form again
            form.style.display = 'block';

            // Hide the success message
            successMessage.style.display = 'none';
        });
    }
});
