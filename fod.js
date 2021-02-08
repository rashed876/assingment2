fetch(' https://www.themealdb.com/api/json/v1/1/categories.php ')
.then(res => res.json())
.then(data => disPlayCategories (data))

const disPlayCategories = Categories =>{
    console.log(Categories);
}