// htmlda elementlarni topib olamiz\
var elOrderForm = document.querySelector('.order-form');
var elTypeOfBread = elOrderForm.querySelector('.type-of-bread');
var elTypeOfBreadSolution = document.querySelector('.type-of-bread-solution');
var elSizeOfPizza = elOrderForm.querySelector('.size-of-pizza');
var elSizeOfPizzaList = document.querySelector('.size-of-pizza-list');

// elementlar qiymati uchun massiv ochib olinadi

var TypeOfBread = ['yupqa', `o'rtacha`, 'qalin'];
var SizeOfPizza = ['25', '30', '35'];

// Elementlarni yaratib olamiz

for (let index = 0; index < TypeOfBread.length; index++) {
  var newTypeBreadOption = document.createElement('option');

  newTypeBreadOption.value = (TypeOfBread[index]);
  newTypeBreadOption.textContent = `${TypeOfBread[index]}`;
  elTypeOfBread.appendChild(newTypeBreadOption);

  // console.log(newTypeBreadOption);
}

for (let index = 0; index < SizeOfPizza.length; index++) {
  var newRadioInput = document.createElement('input');
  var newRadioSpan = document.createElement('span');

  newRadioSpan.textContent = `${SizeOfPizza[index]}`
  newRadioInput.value = (SizeOfPizza[index]);
  newRadioInput.type = 'checkbox';
  newRadioInput.textContent = `${SizeOfPizza[index]}`;
  newRadioInput.classList.add(`size-of-pizza-checkbox-${SizeOfPizza[index]}`,'custom-checkbox');
  elSizeOfPizza.appendChild(newRadioInput);
  elSizeOfPizza.appendChild(newRadioSpan);

  console.log(newRadioInput);
}

// Natijani htmlga chiqarib olamiz

elTypeOfBread.addEventListener('change', function(evt) {
  var TypeOfBreadArray = [];
  var newElementli = document.createElement('li');

  TypeOfBreadArray.push(this.value);
  newElementli.textContent = TypeOfBreadArray;
  elTypeOfBreadSolution.innerHTML = '';
  elTypeOfBreadSolution.append(newElementli);

  console.log(newElementli);
})




elSizeOfPizza.addEventListener('change', function(evt) {
  var sizeOfPizzaCheckbox25 = elOrderForm.querySelector('.size-of-pizza-checkbox-25')
  var sizeOfPizzaCheckbox30 = elOrderForm.querySelector('.size-of-pizza-checkbox-30')
  var sizeOfPizzaCheckbox35 = elOrderForm.querySelector('.size-of-pizza-checkbox-35')
  var sizeOfPizzaArray = [];

  if (sizeOfPizzaCheckbox25.checked) {
    sizeOfPizzaArray.push(sizeOfPizzaCheckbox25.value + 'sm')
  }
  if (sizeOfPizzaCheckbox30.checked) {
    sizeOfPizzaArray.push(sizeOfPizzaCheckbox30.value + 'sm')
  }
  if (sizeOfPizzaCheckbox35.checked) {
    sizeOfPizzaArray.push(sizeOfPizzaCheckbox35.value + 'sm')
  }

  console.log(sizeOfPizzaArray)

  var newElementli = document.createElement('li');
  elSizeOfPizzaList.textContent = sizeOfPizzaArray;
})
