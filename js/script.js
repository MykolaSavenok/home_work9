//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
//Наприклад:
const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (arr, element) {
   const index = arr.indexOf(element);
   if (index !== -1) {
      arr.splice(index, 1)
   }
}

removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]