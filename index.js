console.log("working");
// localStorage.clear();
// formData  input => inputText, desc => descText
const studentForm = document.getElementById("formData");
const detailDev = document.querySelector('.mint');
const titleInput = studentForm['inputText'];
const descInput = studentForm['descText'];



const userText = JSON.parse(localStorage.getItem("userinfo")) || [];
console.log(userText);
// {
//     title: 'React Js',
//     desc: 'Writing dev',
// }

const addStudent = (title, desc) => {
    userText.push({ title, desc })
    localStorage.setItem("userinfo", JSON.stringify(userText));
    return { title, desc };
}
const createStudentElement = ({ title, desc }) => {
    const utlDev = document.createElement('div');
    utlDev.classList.add('card');
    utlDev.classList.add('cliff');
    const mainDev = document.createElement('div');
    mainDev.classList.add('card-body');

    const titleDev = document.createElement('h2');
    titleDev.classList.add('card-title')
    const descDev = document.createElement('p');
    descDev.classList.add('card-text')
    titleDev.innerText = title;
    descDev.innerText = desc;
    mainDev.append(titleDev, descDev);
    utlDev.append(mainDev);
    detailDev.appendChild(utlDev);
}
userText.forEach(createStudentElement);
studentForm.onsubmit = (e) => {
    e.preventDefault();
    const newInfoUser = addStudent(
        titleInput.value,
        descInput.value
    )
    createStudentElement(newInfoUser);
    titleInput.value = "";
    descInput.value = "";
}




document.getElementById("clear").addEventListener("click", () => {
    localStorage.clear();
    detailDev.innerHTML = "";
})
