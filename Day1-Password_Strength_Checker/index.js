// you just need to implement the passwordStrengthChecker function
function passwordStrengthChecker(password) {
    // write your logic here
    let isStrong = true;
    if(password.length < 8){
      isStrong = false;
    }
    
    if(!(password.split("").some(char => char >= 'A' && char <= 'Z'))){
      isStrong = false;
    }
  
    if(!(password.split("").some(char => char >= 'a' && char <= 'z'))){
      isStrong = false;
    }
  
    if(!(password.split("").some(char => char >= '0' && char <= '9'))){
      isStrong = false;
    }
    if(!(password.split("").some(char => "!@#$%^&*".includes(char)))){
      isStrong = false;
    }
  
    if(isStrong){
      return "Strong"
    }else{
      return "Weak"
    }
  
  }