const form = document.querySelector("#contactForm");
const inputs = document.querySelectorAll(".form_input");
const cList = document.querySelector(".contacts_list");
const template = document.querySelector("#textTemplate").innerHTML;

form.addEventListener("submit", submittingForm);

function submittingForm(event) {
    event.preventDefault();
    const data = {}

    for (let input of inputs) {
        data[input.name] = input.value;
    }

    const contactHtml = template
        .replace( "{{Name}}", data.name)
        .replace("{{Surname}}", data.surname)
        .replace("{{Phone}}", data.phone);

    cList.insertAdjacentHTML("beforeend", contactHtml);
    for (let input of inputs) {
        input.value = "";
    }
}
    