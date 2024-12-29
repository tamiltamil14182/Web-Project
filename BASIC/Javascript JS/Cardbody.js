let likebtn = document.getElementById("like");
let dislikebtn = document.getElementById("dislike");
let like_res = document.getElementById("likeRes");
let dislike_res = document.getElementById("dislikeRes");

let total = document.getElementById("total");

let resLike = 0;
let resDislike = 0;

likebtn.addEventListener("click", () => {
  resLike++;
  like_res.innerText = resLike;
  total.innerText = resLike + resDislike;
});
dislikebtn.addEventListener("click", () => {
  resDislike++;
  dislike_res.innerText = resDislike;
  total.innerText = resLike + resDislike;
});
