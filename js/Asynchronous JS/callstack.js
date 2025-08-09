function d(){
    console.log('finished')
}
function c(){
    d();
}
function a(){
    b();
    console.log('it is function a');
}
function b(){
    console.log('it is function b');
    c();
}
a();