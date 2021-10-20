window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function-calculating-BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
    let height = parseInt(document
            .querySelector("#height").value);
  
   
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user 
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // both are valid ? calculate the bmi
    else {

   
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
       
        if (bmi < 18.6) result.innerHTML =
            `<span>${bmi}</span> <br>
            that you are Under Weight. `;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `<span>${bmi}</span> <br>
                that you are healthy. `;
  
        else result.innerHTML =
            `<span>${bmi}</span> <br>
            that you are Over Weight. `;
    }
    <!DOCTYPE html>
<html>
<head>
    <!-- JS files 
    <script src="app.js"></script>
</head>
<body>
    <div class="container">
        <h1>BMI Calculator Creat Useing JavaScript</h1>

        
        <p>Your Height (cm)
        <input type="text" id="height">
        <p> Your Weight (kg)
        <input type="text" id="weight"> <br><br>
        <button id="btn">Calculate</button>
        <div id="result"> </div>
    </div>    
            your BMI:<span>id="height" </span><br>
            this meaans your BMI : 
</body>
  
</html>
--></input>
}