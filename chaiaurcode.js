const form = document.querySelector('form');
const body = document.querySelector('body');
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    let bmi = 0;
    if(height ==='' || height <=0 || isNaN(height))
        {
            results.innerHTML = `please enter valid height ${height}`;
        }else if(weight ==='' || weight <=0 || isNaN(weight))
        {
            results.innerHTML = `please enter valid weight ${weight}`;
        }else{
            bmi = (weight / ((height * height) / 10000)).toFixed(2);
            results.innerHTML = `<span>${bmi}</span>`;
        }
console.log(bmi);
    if(bmi < 18.6)
        {
          body.style.backgroundColor = "yellow";
        }else if(bmi < 24.9){
          body.style.backgroundColor = "green";
        }else{
          body.style.backgroundColor = "red";  
        }
});
