const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const listGroup = document.querySelector("#listGroup");
const doneCount = document.querySelector("#doneCount");
const totalCount = document.querySelector("#totalCount");

const updateCounter = () => {
  totalCount.innerText = countListTotal();
  doneCount.innerText = countDoneListTotal();
};

const countListTotal = () => {
  return document.querySelectorAll(".list").length;
};

const countDoneListTotal = () => {
  return document.querySelectorAll(".list .list-checkbox:checked").length;
};

const createList = (text) => {
  const list = document.createElement("div");
  list.className = "list border-zinc-700 border-2 p-3 mb-5";
  list.innerHTML = ` <div class="flex justify-between items-center">
      <div class="flex gap-2">
        <input class=list-checkbox type="checkbox" />
        <label for="" class="list-text  font-bold">${text}</label>
      </div>
      <div class="flex gap-2 justify-between items-center">
        <button class=" list-edit-btn border-2 border-zinc-700 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 stroke-zinc-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button class="list-del-btn border-2 border-zinc-700 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 stroke-zinc-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>`;

  const listEditBtn = list.querySelector(".list-edit-btn");
  const listDelBtn = list.querySelector(".list-del-btn");
  // listEditBtn.addEventListener("click", () => {
  //   const input = document.createElement("input");
  //   input.className = "border border-zinc-700 px-2 focus-visible:outline-none";
  //   input.value = listText.innerText;
  //   listText.after(input);
  //   input.focus();
  //   listText.classList.toggle("hidden");
  //   input.addEventListener("blur", () => {
  //     listText.innerText = input.value;
  //     input.remove();
  //     listText.classList.toggle("hidden");
  //   });
  // });

  listDelBtn.addEventListener("click", deleteList);
  listCheckbox.addEventListener("change", checkList);
  listEditBtn.addEventListener("click", editList);

  // listDelBtn.addEventListener("click", () => {
  //   confirm("Are You Sure You Want to delete?") && list.remove();
  //   // totalCount.innerText = parseInt(totalCount.innerText) - 1;
  //   updateCounter();
  // });

  // const listCheckbox = list.querySelector(".list-checkbox");
  // const listText = list.querySelector(".list-text");
  // listCheckbox.addEventListener("click", () => {
  //   console.log("fuck");
  //   listText.classList.toggle("line-through");
  //   updateCounter();
  // });
  return list;
};

const addList = () => {
  console.log("apppp");

  listGroup.append(createList(textInput.value));
  // totalCount.innerText = parseInt(totalCount.innerText) + 1;
  updateCounter();
  textInput.value = null;
};

const editList = (event) => {
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");
  const input = document.createElement("input");
  input.value = listText.innerText;
  listText.after(input);
  input.focus();
  listText.classList.toggle("hidden");
  input.addEventListener("blur", () => {
    inputText.innerText = input.value;
    input.remove();
    listText.classList.toggle("hidden");
  });
};

const deleteList = (event) => {
  const list = event.target.closest(".list");
  if (confirm("Are you sure you want to delete?")) {
    list.remove();
    updateCounter();
  }
};

const checkList = (event) => {
  const listText = event.toggle.nextElementSibling;
  listText.classList.toggle("line-through");
  updateCounter();
};

addBtn.addEventListener("click", addList);
textInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addList();
  }
});
