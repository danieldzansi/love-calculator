document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', calculateLove);

    function calculateLove() {
        const name1 = document.getElementById('name1').value.toLowerCase();
        const name2 = document.getElementById('name2').value.toLowerCase();
        
        if (name1.length === 0 || name2.length === 0) {
            alert("Please enter both names!");
            return;
        }

        const combinedNames = name1 + name2;
        let loveScore = 0;

        for (let i = 0; i < combinedNames.length; i++) {
            loveScore += combinedNames.charCodeAt(i);
        }

        loveScore = (loveScore % 101); // Ensures the score is between 0 and 100

        // Create a result element if it doesn't exist
        let resultElement = document.getElementById('result');
        if (!resultElement) {
            resultElement = document.createElement('div');
            resultElement.id = 'result';
            document.querySelector('.container').appendChild(resultElement);
        }

        resultElement.textContent = `The love percentage for ${name1} and ${name2} is: ${loveScore}%`;

        // Add some fun descriptions based on the score
        if (loveScore > 80) {
            resultElement.textContent += " A match made in heaven!";
        } else if (loveScore > 60) {
            resultElement.textContent += " There's definitely a spark!";
        } else if (loveScore > 40) {
            resultElement.textContent += " There's potential. Keep working on it!";
        } else {
            resultElement.textContent += " Maybe you're better off as friends.";
        }
    }
});