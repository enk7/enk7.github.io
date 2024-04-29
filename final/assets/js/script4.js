let close4 = document.getElementById('close4');
let nb4 = document.getElementById('nb4');
let nt4 = document.getElementById('nt4');



nb4.onclick = function() {
	nt4.style.visibility = 'visible';
    close4.style.visibility = 'visible';
};

close4.onclick = function() {
    nt4.style.visibility = 'hidden';
    close4.style.visibility = 'hidden';
}