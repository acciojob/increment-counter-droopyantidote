 // Get references to the counter paragraph and the increment button
        const counterParagraph = document.getElementById('counter');
        const incrementButton = document.getElementById('incrementBtn');

        // Add click event listener to the increment button
        incrementButton.addEventListener('click', function() {
            // Get the current value of the counter and convert it to a number
            let currentValue = parseInt(counterParagraph.textContent);

            // Display an alert with the un-incremented value
            alert('Current Value: ' + currentValue);

            // Increment the counter value by 1
            currentValue++;

            // Update the counter paragraph with the new value
            counterParagraph.textContent = currentValue;
        });
