const calculateBtn = document.querySelector(".calculate-btn");
const result = document.querySelector(".returns");
const calculate = () => {
  let p = Number(document.querySelector(".capital").value);
  let r = Number(document.querySelector(".years").value);
  let t = Number(document.querySelector(".interest").value);
  let simpleInterest = (p * r * t) / 100;
  let amount = p + simpleInterest;
  result.innerHTML = amount;
  console.log(result)
}

 
calculateBtn.addEventListener("click", calculate);