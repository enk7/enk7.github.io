let close3 = document.getElementById('close3');
let nb3 = document.getElementById('nb3');
let nt3 = document.getElementById('nt3');



nb3.onclick = function() {
	nt3.style.visibility = 'visible';
    close3.style.visibility = 'visible';
};

close3.onclick = function() {
    nt3.style.visibility = 'hidden';
    close3.style.visibility = 'hidden';
}