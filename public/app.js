const questionList = document.querySelectorAll(".fqas li");
const arrowList = document.querySelectorAll(".fqas .bx");

console.log(questionList, arrowList);

questionList.forEach((q, idx) => {
  q.addEventListener("click", () => {
    arrowList[idx].classList.toggle("bx-chevron-up");
    q.nextElementSibling.classList.toggle("hidden");
  });
});
