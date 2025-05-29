function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const header = document.querySelector('.header');
    const isOpen = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isOpen ? "none" : "flex";
    
    if (!isOpen) {
        header.classList.add('scrolled');
    } else if (window.scrollY <= 50) {
        header.classList.remove('scrolled');
    }
}

function validateForm() {
    let isValid = true;

    const name = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const participant = document.getElementById('participant').value.trim();
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('returnDate').value;

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const participantError = document.getElementById('participantError');
    const departureError = document.getElementById('departureError');
    const returnError = document.getElementById('returnError');
    const successMessage = document.getElementById('successMessage');

    nameError.textContent = '';
    phoneError.textContent = '';
    participantError.textContent = '';
    departureError.textContent = '';
    returnError.textContent = '';
    successMessage.textContent = '';

    if (name === '') {
        nameError.textContent = 'Full name is required.';
        isValid = false;
    }

    if (!/^\d{8,}$/.test(phone)) {
        phoneError.textContent = 'Enter a valid phone number (at least 8 digits).';
        isValid = false;
    }

    if (participant === '' || isNaN(participant) || Number(participant) < 1) {
        participantError.textContent = 'Enter a valid number of participants.';
        isValid = false;
    }

    if (departure === '') {
        departureError.textContent = 'Departure date is required.';
        isValid = false;
    }

    if (returnDate === '') {
        returnError.textContent = 'Return date is required.';
        isValid = false;
    } else if (departure && returnDate && new Date(returnDate) <= new Date(departure)) {
        returnError.textContent = 'Return date must be after departure date.';
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = 'Booking submitted successfully!';
    }
}

