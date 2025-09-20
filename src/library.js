import { alert, defaultModules, notice, info, success, error} from "@pnotify/core";
//стилі
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";


const keys = ["k f n g a e y b t w "];

console.log(keys);

let counter = 0;
// const curentIndex = keys.join(" ");
// console.log(curentIndex);
// for(const key of keys){
//     console.log(key);
// }

const keyToPress = document.querySelector(".key_to_press");
const score = document.querySelector(".score");


let myRandomLetter = '';
        // Функція для вибору та відображення випадкової літери
        function displayRandomLetter() {
            // Розбиваємо рядок на окремі літери (включаючи пробіли, якщо вони є)
            const letters = keys[0].split(' ');
            console.log(letters);

            // Фільтруємо пробіли, якщо ви хочете отримати тільки літери
            const actualLetters = letters.filter(letter => letter !== '');

            // Вибираємо випадковий індекс з масиву літер
            const randomIndex = Math.floor(Math.random() * actualLetters.length);

            // Отримуємо випадкову літеру
            const randomLetter = actualLetters[randomIndex];

            console.log(randomLetter);

            // Записуємо випадкову літеру в текстове значення тегу <p>
            keyToPress.textContent = `Випадкова буква: ${randomLetter}`;
            myRandomLetter = randomLetter;

        }

      function updateScore() {
            score.textContent = counter;
        }


 displayRandomLetter(keys);
// let myRandomLetter = displayRandomLetter(keys);
 console.log(myRandomLetter)


const keydown = (event) =>{
    console.log(event.key)
    if(event.key == myRandomLetter){
        console.log("yeah")
        counter++; 
            updateScore()
    } else{
          error({
    text: 'Wrong'
  });
    }
     displayRandomLetter(keys);
     
}

document.addEventListener("keyup" , keydown)
