// A simple script to change the title color and display a message when a button is clicked
document.getElementById('colorButton').addEventListener('click', function() {
    // Change the color of the H1 element
    document.querySelector('.title').style.color = 'orange';

    // Display a message
    document.getElementById('message').textContent = 'The title color has been changed!';

    console.log('Button clicked!');
});
