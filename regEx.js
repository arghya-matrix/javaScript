function validName(name) {
    let regEx1st= /^[A-Z]{1}\./g;
    let regExWord= /\w[A-Za-z ]|[^\.]{1,}$/g;
    let a= regEx1st.test(name);
    let b= regExWord.test(name);
    if(a==true && b==true)
    return true;
    else
    return false;
}