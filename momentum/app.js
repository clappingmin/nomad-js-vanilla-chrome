const h1 = document.querySelector("div.hello h1");


function handleTitleClick() {
  h1.classList.toggle("active");
}



h1.addEventListener("click", handleTitleClick); // 클릭되면 handleTitleClick이라는 이벤트 실행
//h1.onclick = handleTitleClick; // 이런 방법도 있다