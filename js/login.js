class Usuario{
    constructor(user,clave){
        this.user = user;
        this.clave = clave;
    }
    validar(){
        var y;
        if (this.user=="christian"&& this.clave=="789") {
            y =1;
        }else{
            y =0
        }
        return y;
    }
}

    var d = 0;
function login() {
    var u = new Usuario(document.getElementById("user").value,
    document.getElementById("pass").value)
    if (u.validar()==1) {
        Borrar()
        alert("El usuario es correcto")
        d=0;
    }else{
        d++;
        alert(d);
        Borrar();
        if (d==3) {
            Congelar();
        }
    }
}
function Borrar() {
    document.getElementById("user").value="";
    document.getElementById("pass").value="";
    document.getElementById("user").focus();
}
function Congelar() {
    document.getElementById("user").disabled=true;
    document.getElementById("pass").disabled=true;
    document.getElementById("boton").disabled=true;
}
