/* Get #close4, #nb4, and #nt4 */
let close4 = document.getElementById('close4');
let nb4 = document.getElementById('nb4');
let nt4 = document.getElementById('nt4');


/* When clicking a nutrition button, show a nutrition table and a closing button */
nb4.onclick = function() {
	nt4.style.visibility = 'visible';
    close4.style.visibility = 'visible';
};

/* when clicking a closing button, hide a nutrition table and the closing button */
close4.onclick = function() {
    nt4.style.visibility = 'hidden';
    close4.style.visibility = 'hidden';
}