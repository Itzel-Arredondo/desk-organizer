document.getElementById('customization-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents the form from actually submitting and refreshing the page

    // Get selected values
    const compartments = document.getElementById('compartments').value;
    const engravingFile = document.getElementById('engraving-file').files[0] ? 'Yes' : 'No';
    const cableHolder = document.getElementById('cable-holder').value;

    // Update preview
    document.getElementById('preview-compartments').textContent = compartments;
    document.getElementById('preview-engraving').textContent = engravingFile;
    document.getElementById('preview-cable-holder').textContent = cableHolder === 'yes' ? 'Yes' : 'No';

    // Hide the form and show the thank-you message
    document.getElementById('customization-form').style.display = 'none';  // Hide the form
    document.getElementById('preview-section').style.display = 'none';  // Hide the preview section
    document.getElementById('thank-you-message').style.display = 'block';  // Show the thank-you message
});
