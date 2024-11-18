document.getElementById('customization-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from actually submitting to the server

    // Get selected values
    const compartments = document.getElementById('compartments').value;
    const engravingFile = document.getElementById('engraving-file').files[0] ? 'Yes' : 'No';
    const cableHolder = document.getElementById('cable-holder').value;

    // Update preview section with the selected values
    document.getElementById('preview-compartments').textContent = compartments;
    document.getElementById('preview-engraving').textContent = engravingFile;
    document.getElementById('preview-cable-holder').textContent = cableHolder === 'yes' ? 'Yes' : 'No';

    // Hide the form and preview, and show the thank-you message
    document.getElementById('customization-form').style.display = 'none';  // Hide the form
    document.getElementById('preview-section').style.display = 'block';  // Show the preview section
    document.getElementById('thank-you-message').style.display = 'block';  // Show the thank-you message
});
