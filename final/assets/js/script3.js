/* Get #close3, #nb3, and #nt3 */
let close3 = document.getElementById('close3');
let nb3 = document.getElementById('nb3');
let nt3 = document.getElementById('nt3');


/* When clicking a nutrition button, show a nutrition table and a closing button */
nb3.onclick = function() {
	nt3.style.visibility = 'visible';
    close3.style.visibility = 'visible';
};

/* when clicking a closing button, hide a nutrition table and the closing button */
close3.onclick = function() {
    nt3.style.visibility = 'hidden';
    close3.style.visibility = 'hidden';
}