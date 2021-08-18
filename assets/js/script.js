
function insert(num) {
    document.form.campo.value = document.form.campo.value+num;
}
function clean() {
    document.form.campo.value = "";
}
function back() {
    var exp = document.form.campo.value;
    document.form.campo.value = exp.substring(0,exp.length-1);
}
function calc() {
    var exp = document.form.campo.value;
    if(exp) {
        document.form.campo.value = eval(exp);
    }
}
/* i
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/; Definir qual tecla.
    var regex = /^[]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }
 var tag = document.getElementById('campo');
tag.data-role = null;
*/