const loginFormm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 유저의 이름을 저장하고 보여주는 함수
function onLoginSubmit(event) { // 첫번째 argument는 공간만 제공
  event.preventDefault(); // 새로고침 막아줌
  loginFormm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

// 유저 이름 보여주는 함수
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);

  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { // 유저의 정보가 저장이 되어 있지 않을 경우
  loginFormm.classList.remove(HIDDEN_CLASSNAME);
  loginFormm.addEventListener("submit", onLoginSubmit);
} else { // 유저의 정보를 가지고 있을 경우
  paintGreetings();
}