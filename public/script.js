let submissionOfData = document.getElementById("submit-data");
let textName = document.getElementById("text_name");
let submitBtn = document.getElementById("submit-data");
let message = document.getElementById("output-message");


submitBtn.addEventListener("click", submitBtnValidation);

function testFunc() {


  console.log(dob)
  console.log("Test function is on the way")
}
function submitBtnValidation() {
  var userinput = document.getElementById('date').value;
  var dob = new Date(userinput);
  var age;
  console.log("Submit button validation")
  if(userinput == null || userinput == '') {
    message.innerHTML = userinput.value;
    return false;
  } else {
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    age = Math.abs(year - 1970); 
    message.innerHTML = age;
    validateAge();
  }

  function validateAge() {
    if(age < 18) {
      message.innerHTML = "You are under 18 you cannot play"
    } else {
      location.href='casino/casino.html';
    }
  }
  
}

  
    