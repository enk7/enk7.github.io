/* Get #close1, #nb1, and #nt1 */
let close1 = document.getElementById('close1');
let nb1 = document.getElementById('nb1');
let nt1 = document.getElementById('nt1');


/* When clicking a nutrition button, show a nutrition table and a closing button */
nb1.onclick = function() {
	nt1.style.visibility = 'visible';
    close1.style.visibility = 'visible';
};

/* when clicking a closing button, hide a nutrition table and the closing button */
close1.onclick = function() {
    nt1.style.visibility = 'hidden';
    close1.style.visibility = 'hidden';
}
