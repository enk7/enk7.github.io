/* Get #close2, #nb2, and #nt2 */
let close2 = document.getElementById('close2');
let nb2 = document.getElementById('nb2');
let nt2 = document.getElementById('nt2');


/* When clicking a nutrition button, show a nutrition table and a closing button */
nb2.onclick = function() {
	nt2.style.visibility = 'visible';
    close2.style.visibility = 'visible';
};

/* when clicking a closing button, hide a nutrition table and the closing button */
close2.onclick = function() {
    nt2.style.visibility = 'hidden';
    close2.style.visibility = 'hidden';
}