const h1 = document.querySelector("div.hello h1");


function handleTitleClick() {

  const currentColor = h1.style.color
  let newColor;

  if (currentColor=== "blue") {
    newColor = "tomato";
  }
  else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}



h1.addEventListener("click", handleTitleClick); // 클릭되면 handleTitleClick이라는 이벤트 실행
//h1.onclick = handleTitleClick; // 이런 방법도 있다