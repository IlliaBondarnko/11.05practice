// Напишіть скрипт привітання користувача на сторінці. Коли користувач введе своє ім’я в інпут на екрані повино з’явитися текст “Вітаємо, ім’я!”. Текст повинен змінитися лише після того як користувач повністю ввів своє ім’я.

const inp = document.getElementById("input")
const p = document.getElementById("paragraph")


inp.addEventListener("input", _.debounce(onInput, 3000))

function onInput(e) {
    const res = e.target.value
    p.textContent = `Вітаємо, ${res}`
}
