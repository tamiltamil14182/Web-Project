let item = {
  id: "AA101",
  imgUrl:
    "https://images.vegnonveg.com/resized/700X573/5358/nike-dunk-low-retro-whiteblack-white-60e41a479d3e7.jpg",
  pName: "Nike Dunks",
  pPrice: 9000,
  pQty: 1,
};

let htmlCod = "<h1>Hello</h1>";
let htmlCode = `<tr>
            <td>${item.id}</td>
            <td>
              <img
            src="${item.imgUrl}"
                width="40px"
                height="30px"
                alt=""
              />
            </td>
            <td>${item.pName}</td>
            <td  >${item.pPrice}.00 &#8377;</td>
            <td>
              <i
                id="decQty"
                style="cursor: pointer"
                class="bi bi-dash-circle"
              ></i>
              <span id="dispPrice">${item.pQty}</span>
              <i
                id="incQty"
                style="cursor: pointer"
                class="bi bi-plus-circle"
              ></i>
            </td>
            <td id="tPrice">${item.pPrice * item.pQty}.00 &#8377;</td>
          </tr>`;

          console.log(htmlCode);

let tableBody = document.getElementById("dispCode");
tableBody.innerHTML = htmlCode;

let incQty = document.querySelector("#incQty");
let decQty = document.querySelector("#decQty");
let resQty = document.querySelector("#resQty");

let qtyTag = document.getElementById("dispPrice");
let tPriceTag = document.querySelector("#tPrice");

incQty.addEventListener("click", () => {
  item.pQty++;
  qtyTag.innerText = item.pQty;
  tPriceTag.innerHTML = item.pQty * item.pPrice + `.00` + `&#8377;`;
});
decQty.addEventListener("click", () => {
  if (item.pQty > 1) {
    item.pQty--;
    qtyTag.innerText = item.pQty;
    tPriceTag.innerHTML = item.pQty * item.pPrice + `.00` + `&#8377;`;
  }
});
