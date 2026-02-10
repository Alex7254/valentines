document.addEventListener('DOMContentLoaded', function () {
  // Get the radio buttons
  const yesRadio = document.getElementById('yes');
  const noRadio = document.getElementById('no');
  const noSpan = document.querySelector('label[for="no"] span');
  const bodyEl = document.querySelector('.body--wrapper');
  const letter = document.querySelector('.letter');
  const swiper = document.querySelector('.myS');

  // Store the original text for potential future use
  const originalNoText = 'No 💔';

  // Array of possible texts for the "No" option
  const noOptionTexts = [
    'No 💔',
    'Are you sure?',
    'Malaaaa!',
    'Ayy enserio Hani :(?',
    'Por favor, di que si!',
    'Yes?',
    'Please Hani?',
    'Di que si :)',
    'Vieja miada!',
    'Si o si?',
    'Anda mi pastelito :(',
    'Creo que te confundiste...',
    'Por favor princesa <3',
    'Me gano el otro?',
    'Mmmm... No?',
    'Ni modo bebe :D'
  ];

  // Counter to track how many times the user tried to click "No"
  let noClickCounter = 0;

  // Function to update the "No" option text
  function updateNoText() {

    // if (noClickCounter >= 6) {
    //   bodyEl.style.display = 'none';
    //   letter.style.display = 'block';
    // }

    // Use modulo to cycle through the array without going out of bounds
    noSpan.textContent = noOptionTexts[noClickCounter % noOptionTexts.length];

    // Increment the counter for next time
    noClickCounter++;
  }

  // Add event listener to the "No" radio button
  noRadio.addEventListener('click', function (event) {
    // Prevent the default behavior (selecting the radio button)
    event.preventDefault();

    // Always check the "Yes" option
    // yesRadio.checked = true;

    // Update the text of the "No" option
    updateNoText();
  });

  // Add event listener to the "No" label (in case user clicks the text)
  const noLabel = document.querySelector('label[for="no"]');
  noLabel.addEventListener('click', function (event) {
    // Only prevent if the click is on the label itself, not the radio button
    if (event.target.tagName === 'LABEL' || event.target.tagName === 'SPAN') {
      event.preventDefault();

      // Always check the "Yes" option
      // yesRadio.checked = true;

      // Update the text of the "No" option
      updateNoText();
    }
  });

  yesRadio.addEventListener('click', function () {
    bodyEl.style.display = 'none';
    letter.style.display = 'flex';
    swiper.style.position = 'static';
  });

  const yesLabel = document.querySelector('label[for="yes"]');
  yesLabel.addEventListener('click', function () {
  });
});