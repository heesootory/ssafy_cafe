const Minus_Button = document.querySelectorAll(".minus");
const Plus_Button = document.querySelectorAll(".plus");
const save = document.querySelectorAll(".save");

let coffee_arr = [
  { id: "Americano", cnt: 0 },
  { id: "CafeLatte", cnt: 0 },
  { id: "Smoodi", cnt: 0 },
];

// 수량 빼기
const count_minus = (e) => {
  const parent = e.target.closest(".order");
  const grandparent = parent.closest(".detail");
  const coffee_name = grandparent.querySelector(".coffee_name");
  const count = parent.querySelector("#count");
  let cnt;
  let num;
  for (let i = 0; i < coffee_arr.length; i++) {
    console.log(coffee_arr[i].id);
    if (coffee_arr[i].id === coffee_name.innerText) {
      cnt = Number(coffee_arr[i].cnt);
      num = i;
      console.log(coffee_arr[i].cnt);
      break;
    }
  }

  if (cnt <= 0) alert("더 이상 줄일 수 없습니다.");
  else {
    cnt -= 1;
    count.innerText = cnt;
    coffee_arr[num].cnt = cnt;
  }
};

// 수량 추가
const count_plus = (e) => {
  const parent = e.target.closest(".order");
  const grandparent = parent.closest(".detail");
  const coffee_name = grandparent.querySelector(".coffee_name");
  const count = parent.querySelector("#count");
  let cnt;
  let num;
  for (let i = 0; i < coffee_arr.length; i++) {
    console.log(coffee_arr[i].id);
    if (coffee_arr[i].id === coffee_name.innerText) {
      cnt = Number(coffee_arr[i].cnt);
      num = i;
      console.log(coffee_arr[i].cnt);
      break;
    }
  }

  cnt += 1;
  count.innerText = cnt;
  coffee_arr[num].cnt = cnt;
};

const put_order = (e) => {
  const parent = e.target.closest(".order");
  const grandparent = parent.closest(".detail");
  const coffee_name = grandparent.querySelector(".coffee_name");
  const count = parent.querySelector("#count");
  const list = document.querySelector(".list");
  console.log(coffee_arr);

  list.innerText = "";

  localStorage.setItem("coffees", JSON.stringify(coffee_arr));
  let order_list = [];
  order_list = JSON.parse(localStorage.getItem("coffees"));
  order_list.forEach((c) => {
    list.innerText += `${c.id} : ${c.cnt}잔
    `;
  });
};

Minus_Button.forEach((w) => w.addEventListener("click", count_minus));
Plus_Button.forEach((w) => w.addEventListener("click", count_plus));
save.forEach((w) => w.addEventListener("click", put_order));

function Order() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let ordertime = Math.floor(Math.random() * (10 - 1) + 1);
  alert("주문이 완료되었습니다! " + ordertime + "분 뒤에 오세요~");
}
