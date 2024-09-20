function pas(){

var pass = document.getElementById("pass").value
            var conpass = document.getElementById("conpass").value
            if (pass != conpass  || pass == '') {

                alert("please check your  password")
                document.getElementById("pass").value = '';
                document.getElementById("conpass").value = '';
            }
}
var password=pass;
function logpas(){
    var loginpass=document.getElementById("log-pass").value
      if (password != loginpass  || pass == '') {

        alert("please check your  password")
        document.getElementById("log-pass").value = '';
        // document.getElementById("conpass").value = '';
    }
}  