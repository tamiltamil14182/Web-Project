let m1 = {
    
    hName : "Vijay",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvgC4LIo0yUxJFNkNck8Rqj7woIlZfjvgGg&s",
    title:"Master",
    year:2024
}
let m2 = {
    
    hName : "Dhanush",
    imgUrl:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11945099_v_v12_ab.jpg",
    title:"Maari",
    year:2024
}
let m3 = {
    
    hName : "Vijay Devarakonda",
    imgUrl:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14472997_p_v8_aa.jpg",
    title:"Arjun Reddy",
    year:2024
}
let m4 = {
    
    hName : "Allu Arjun",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q-DWvkXIYcRo3RIV3SeigK_fXXLLiR4x3g&s",
    title:"Pushpa",
    year:2024
}

let movies=[m1,m2,m3,m4];

function dispMovies(titles){
    if(titles.length!=0){
        let eachMovie="";
        for(mov of titles){
            eachMovie+=`<div class="card text-center col-md-3  ">
        <div class="card-header">
          <img
            src="${mov.imgUrl}"
            class="card-img-top img-thumbnail"
            alt="..."
          />
        </div>
        <div class="card-body text-center">
          <h3>${mov.hName}</h3>
          <h4>${mov.title}</h4>
          <h6>🗓️${mov.year}</h6>
        </div>
      </div>`;
        }
        document.getElementById("moviesDisp").innerHTML =eachMovie;
    }
}
dispMovies(movies)

let inputEl = document.getElementById("inputBox");

inputEl.addEventListener('keyup',()=>{
    let enterdData = inputEl.value;
    let filteredData = searchData(enterdData,movies);
    if(enterdData.length==0) document.getElementById('moviesDisp').innerHTML = 'List is Empty';
    else dispMovies(filteredData)

})

function searchData(val,mArr){
    val = val.toLowerCase().trim();
    let filteredMovies =[];
    for(let mov of mArr){
        let orgMovies = mov.title.toLocaleLowerCase().trim();

        if(orgMovies.includes(val)){
            filteredMovies.push(mov);
        }
    }
    return filteredMovies;
}