

fetch('https://www.themealdb.com/api/json/v1/1/categories.php ')
.then(res => res.json())
.then(data => disPlayCategories (data.categories))




const disPlayCategories =(categories) =>{
const categoriesDiv = document.getElementById('categories');
categories.forEach(Cate => {

    const cateGoreDiv = document.createElement('div')

    // const h5 = document.createElement('h5')
    // h5.innerText = Cate.strCategory ;
    // const p = document.createElement('p')
    // p.innerText = Cate. strCategoryDescription;
    // cateGoreDiv.appendChild(p)
    // cateGoreDiv.appendChild(h5)


     cateGoreDiv.className = 'gorop';
    const cateGoreInfo = `
    <h6>${Cate.idCategory}</h6>
    <h3 class = "categoreItem">${Cate.strCategory}</h3>
    <p class = "detelis">${Cate.strCategoryDescription}</p>
    <button onclick"disPlayDetail('strCategoryDescription')">detelis</button>
    
    
    
    `
    cateGoreDiv.innerHTML = cateGoreInfo;
    categoriesDiv.appendChild(cateGoreDiv);

});
}
// for (let i = 0; i < categories.length; i++) {
//     const Cate = categories[i];
    
//     const cateGoreDiv = document.createElement('div')

//     // const h5 = document.createElement('h5')
//     // h5.innerText = Cate.strCategory ;
//     // const p = document.createElement('p')
//     // p.innerText = Cate. strCategoryDescription;
//     // cateGoreDiv.appendChild(p)
//     // cateGoreDiv.appendChild(h5)


//      cateGoreDiv.className = 'gorop';
//     const cateGoreInfo = `
//     <h6>${Cate.idCategory}</h6>
//     <h3 class = "categoreItem">${Cate.strCategory}</h3>
//     <p class = "detelis">${Cate.strCategoryDescription}</p>

//     `
//     cateGoreDiv.innerHTML = cateGoreInfo;
//     categoriesDiv.appendChild(cateGoreDiv);

    
//}



const disPlayDetail = name=> {
console.log(name );
}








//idCategory
//strCategory
//strCategoryDescription
//strCategoryThumb










// const Categories  = () =>{
// const search = document.getElementById('search-field').value;
// console.log()

// const url = ' https://www.themealdb.com/api/json/v1/1/categories.php ' 









