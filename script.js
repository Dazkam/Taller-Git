function operaciones(){
        var n1 = document.getElementById("n1").value;
        var n2 = document.getElementById("n2").value;
        var ope = parseInt(document.getElementById("ope").value);
        const xxx = document.getElementById('resul')
        var resul
        if (ope==1){
            resul= parseInt(n1) + parseInt(n2);
        }else if (ope==2){
            resul= parseInt(n1) - parseInt(n2);
        }else if(ope==3){
            resul= parseInt(n1) * parseInt(n2);
        }else if(ope==4){
            resul= parseInt(n1) / parseInt(n2);
        }    
        xxx.textContent = `${resul}`
}