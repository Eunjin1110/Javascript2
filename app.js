
let btnElement = document.querySelector("#change"); 

btnElement.addEventListener("click", () => {
    let inputElement = document.querySelector("#text-input") //input

    let newList = document.createElement("li");
    newList.textContent = inputElement.value;

    localStorage.setItem("사용자이름", "박은진")

    let todoList = document.querySelector("#todo-list");
    todoList.appendChild(newList);
     
 
    inputElement.value = ""; //글씨 바뀐 뒤 빈칸 만들기
})


