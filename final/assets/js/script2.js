let close2 = document.getElementById('close2');
let nb2 = document.getElementById('nb2');
let nt2 = document.getElementById('nt2');



nb2.onclick = function() {
	nt2.style.visibility = 'visible';
    close2.style.visibility = 'visible';
};

close2.onclick = function() {
    nt2.style.visibility = 'hidden';
    close2.style.visibility = 'hidden';
}