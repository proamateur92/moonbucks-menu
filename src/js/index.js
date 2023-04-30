// 폼 태그 DOM요소 제어
const form = document.getElementById("espresso-menu-form");

// 폼 내에서 입력 값 enter -> 새로고침 방지
form.addEventListener("submit", (e) => e.preventDefault());

const countSpan = document.getElementById("count");
countSpan.textContent = `총 0개`;

// 메뉴 길이 체크 함수
const countMenuList = () => {
  const menuLength = document.getElementsByTagName("li");
  countSpan.textContent = `총 ${menuLength.length}개`;
};

// 수정 버튼 클릭 시 호출되는 함수
const onEdit = (targetName) => {
  const newMenuInput = window.prompt();

  if (newMenuInput.trim() === "") {
    return;
  }

  targetName.textContent = newMenuInput;
};

// 삭제 버튼 클릭 시 호출되는 함수
const onDelete = (targetLi) => {
  if (!window.confirm("해당 메뉴를 삭제할까요?")) {
    return;
  }

  menuList.removeChild(targetLi);
  countMenuList();
};

// 메뉴 추가 button
const addMenuBtn = document.getElementById("espresso-menu-submit-button");

// 메뉴 input
const menuInput = document.getElementById("espresso-menu-name");

// 메뉴 리스트 ul
const menuList = document.getElementById("espresso-menu-list");

const addMenu = () => {
  // 메뉴 입력 값 할당
  const menuInputValue = menuInput.value;

  // 입력 값 공백 예외처리
  if (menuInputValue.trim() === "") {
    return;
  }

  // 메뉴 li
  const menu = document.createElement("li");
  menu.setAttribute("class", "menu-list-item d-flex items-center py-2");
  // menu.setAttribute("data-set", liId++);

  // 메뉴 span
  const menuName = document.createElement("span");
  menuName.setAttribute("class", "w-100 pl-2 menu-name");

  // 메뉴 수정 버튼
  const editBtn = document.createElement("button");
  editBtn.setAttribute(
    "class",
    "bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  );
  editBtn.textContent = "수정";

  // 메뉴 삭제 버튼
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute(
    "class",
    "bg-gray-50 text-gray-500 text-sm menu-remove-button"
  );
  deleteBtn.textContent = "삭제";

  // 수정 버튼 클릭 시 이벤트 호출
  editBtn.addEventListener("click", () => onEdit(menuName));

  // 삭제 버튼 클릭 시 이벤트 호출
  deleteBtn.addEventListener("click", () => onDelete(menu));

  menuName.textContent = menuInputValue;
  menu.appendChild(menuName);
  menu.appendChild(editBtn);
  menu.appendChild(deleteBtn);

  menuList.appendChild(menu);

  countMenuList();

  // 입력 받은 값은 공백으로 초기화
  menuInput.value = "";
};

const onEnter = (e) => {
  if (e.keyCode === 13) {
    addMenu();
    return;
  }
};

// 메뉴 추가 버튼 클릭 시 호출되는 함수
const onSubmitMenu = () => {
  addMenu();
};

// 메뉴 추가 버튼 클릭 이벤트
addMenuBtn.addEventListener("click", onSubmitMenu);
menuInput.addEventListener("keydown", (event) => onEnter(event));
