const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitBtn = document.querySelector(".submit-btn");

const inputYear = document.querySelector("#year");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

let isValid = false;

function validateDay() {
  const dayValue = +inputDay.value;
  if (dayValue > 31 || dayValue <= 0) {
    errorDay.textContent = "Must be a valid date";
    isValid = false;
  } else {
    errorDay.textContent = "";
    isValid = true;
  }
}

function validateMonth() {
  const monthValue = +inputMonth.value;
  if (monthValue > 12 || monthValue <= 0) {
    errorMonth.textContent = "Must be a valid date";
    isValid = false;
  } else {
    errorMonth.textContent = "";
    isValid = true;
  }
}

function validateYear() {
  const yearValue = +inputYear.value;
  const currentYear = new Date().getFullYear();
  if (yearValue > currentYear || yearValue <= 0) {
    errorYear.textContent = "Must be a valid date";
    isValid = false;
  } else {
    errorYear.textContent = "";
    isValid = true;
  }
}

function CalculateDate() {
  validateDay();
  validateMonth();
  validateYear();

  if (isValid) {
    const birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    const birthdayObj = new Date(birthday);
    const ageDiffMill = Date.now() - birthdayObj.getTime();
    const ageDate = new Date(ageDiffMill);
    const ageYears = ageDate.getUTCFullYear() - 1970;
    const ageMonths = ageDate.getUTCMonth();
    const ageDays = ageDate.getUTCDate() - 1;

    // DISPLAYING EVERYTHING
    outputDay.textContent = ageDays;
    outputMonth.textContent = ageMonths;
    outputYear.textContent = ageYears;
  } else {
    alert("Please correct the errors in the form.");
  }
}

inputDay.addEventListener("input", validateDay);
inputMonth.addEventListener("input", validateMonth);
inputYear.addEventListener("input", validateYear);
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission
  CalculateDate();
});
