let close1 = document.getElementById('close1');
let nb1 = document.getElementById('nb1');
let nt1 = document.getElementById('nt1');



nb1.onclick = function() {
	nt1.style.visibility = 'visible';
    close1.style.visibility = 'visible';
};

close1.onclick = function() {
    nt1.style.visibility = 'hidden';
    close1.style.visibility = 'hidden';
}
