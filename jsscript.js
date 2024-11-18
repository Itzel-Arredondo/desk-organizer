document.getElementById('customization-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get selected values
    const compartments = document.getElementById('compartments').value;
    const engravingFile = document.getElementById('engraving-file').files[0] ? 'Yes' : 'No';
    const cableHolder = document.getElementById('cable-holder').value;

    // Update preview
    document.getElementById('preview-compartments').textContent = compartments;
    document.getElementById('preview-engraving').textContent = engravingFile;
    document.getElementById('preview-cable-holder').textContent = cableHolder === 'yes' ? 'Yes' : 'No';
});
