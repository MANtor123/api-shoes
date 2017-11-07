$(function(){

//first template
var all = document.querySelector('#button');
var searchTemplate = document.querySelector('.searchTemplate');
var searchTemp = Handlebars.compile(searchTemplate.innerHTML);
var output = document.querySelector('.output');

//
var myTemplate = document.querySelector('#myTemplate');
var temp = Handlebars.compile(myTemplate.innerHTML);
var display = document.querySelector('.block');

var add = document.querySelector('#add')

var brandFilter = document.querySelector('#brandFilter')
var brandButton = document.querySelector('#brandButton')

var sizeFilter = document.querySelector('#sizeFilter')
var sizeBUtton = document.querySelector('#sizeButton')

//var dropOut = document.querySelector('#dropOut')
// function displayTable(){
  $.ajax({
    url: "api/shoes",
    type: "get",
    dataType: "json",
    success:function(data){
      output.innerHTML = searchTemp({
        shoes: data.results
      })

    }
  })
  // displayTable()
// }


$("#brandButton").click(function(){
var brandSearch = brandFilter.value;

$.ajax({
  url: "api/shoes/brand/" + brandSearch,
  type: "GET",
  dataType: "json",
  success:function(data){
    output.innerHTML = searchTemp({
      shoes: data.results
    })
}
})


})


$("#sizeButton").click(function(){
var sizeSearch = sizeFilter.value;

$.ajax({
  url: "api/shoes/size/" + sizeSearch,
  type: "GET",
  dataType: "json",
  success:function(data){
    output.innerHTML = searchTemp({
      shoes: data.results
    })
}
})


})


$('#add').click(function(){
  var brand = document.querySelector('.brand').value
  var color = document.querySelector('.color').value
  var sizes = document.querySelector('.size').value
  var in_stock = document.querySelector('.in_stock').value
  var price = document.querySelector('.price').value

  var newShoes ={
    brand: brand,
    color: color,
    size: sizes,
    in_stock: in_stock,
    price: price
}

$.ajax({
  url: "api/shoes",
  type: "post",
  data: newShoes,
  dataType: "json",
  success:function(data){
}
})

window.location.reload()

    //console.log(data);

});
// var brands = [];
// var brandMap = {};
//
// for(var i=0; i<shoes.length; i++){
//   var shoe = shoes[i]
//   if(brandMap[shoe.brand] === undefined){
//     brandMap[shoe.brand] = shoe.brand;
//     brands.push(shoe.brand);
//   }
//
// }
// return brands;
// };
//
// function uniqColor(){
// var colors = [];
// var colorMap = {};
//
// for(var i=0; i<shoes.length; i++){
//   var shoe = shoes[i]
//   if(colorMap[shoe.color] === undefined){
//     colorMap[shoe.color] = shoe.color;
//     colors.push(shoe.color);
//   }
// }
// return colors;
// };
//
// function uniqSize(){
// var size = [];
// var sizeMap = {};
//
// for(var i=0; i<shoes.length; i++){
//   var shoe = shoes[i]
//   if(sizeMap[shoe.size] === undefined){
//     sizeMap

// $.ajax({
//   url: "api/shoes/dropDown",
//   type: "get",
//   dataType: "json",
//   success:function(data){
//
//     display.innerHTML = temp({
//       shoeBrandKeys: data.UniQbrand,
//       shoeSizeKeys: data.UniQsize
//     })
//     // window.location.reload()
// }
// })

});
