        //Declaring the Requied Variables
        let firstname = document.forms["signup"]["firstname"].value;
        let lastname = document.forms["signup"]["lastname"].value;
        let email = document.forms["signup"]["email"].value;
        let password = document.forms["signup"]["password"].value;

        document.getElementById("submit").addEventListener("click", function() { disablebtn();});
        function disablebtn(){
            document.getElementById("submit").disabled = true;
        }

        function enablebtn(){
            document.getElementById("submit").disabled = false;
        }

        /* function removeAlert(val1){
            
            document.getElementById(val1).addEventListener("keyup", removal(val1));

            function removal(val1){
                if(val1 == "firstname"){
                    document.getElementById("error-firstname").hidden = true;
                }
            }
        } */

        function validateForm() {
            
            //Setting Conditions for Empty Values
            if(firstname == "" && lastname == "" && email == "" && password == ""){
                document.getElementById("error-firstname").innerHTML ="First Name cannot be empty";
                document.getElementById("error-lastname").innerHTML ="Last Name cannot be empty";
                document.getElementById("error-email").innerHTML ="Email cannot be empty";
                document.getElementById("error-password").innerHTML ="Password cannot be empty";
                return false;
            } else if(lastname == "" && email == "" && password == ""){
                document.getElementById("error-lastname").innerHTML ="Last Name cannot be empty";
                document.getElementById("error-email").innerHTML ="Email cannot be empty";
                document.getElementById("error-password").innerHTML ="Password cannot be empty";
                return false;                
            } else if(email == "" && password == ""){
                document.getElementById("error-email").innerHTML ="Email cannot be empty";
                document.getElementById("error-password").innerHTML ="Password cannot be empty";
                return false;                
            } else if(password == ""){
                document.getElementById("error-password").innerHTML ="Password cannot be empty";
                return false;                
            } else if(email == ""){
                document.getElementById("error-email").innerHTML ="Password cannot be empty";
                return false;                
            } else if(lastname == ""){
                document.getElementById("error-lastname").innerHTML ="Last Name cannot be empty";
                return false;                
            } else if(firstname == ""){
                document.getElementById("error-firstname").innerHTML ="First Name cannot be empty";
                return false;                
            }
        }