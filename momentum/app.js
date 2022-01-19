const h1 = document.querySelector("div.hello h1");


function handleTitleClick() {
  h1.style.color = "blue";
}

function handMouseEnter() {
  h1.innerText = "mouse is here";
}

function handMouseLeave() {
  h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("SOS no wifi!!")
}

function handleWindowOnline() {
  alert("All Good!!")
}



// title.addEventListener("click", handleTitleClick); // 클릭되면 handleTitleClick이라는 이벤트 실행
h1.onclick = handleTitleClick; // 방법도 있다

h1.addEventListener("mouseenter", handMouseEnter);

h1.addEventListener("mouseleave", handMouseLeave);

// window의 size가 바뀔 경우
window.addEventListener("resize",handleWindowResize);

// copy할 경우
window.addEventListener("copy",handleWindowCopy);

//와이파이 연결이 안되어 있을 경우
window.addEventListener("offlin",handleWindowOffline);

//와이파이 연결이 안되어 있을 경우
window.addEventListener("online",handleWindowOnline);