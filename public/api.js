$(function(){
//first template

//second template
var all = document.querySelector('#button');
var searchTemplate = document.querySelector('.searchTemplate');
var searchTemp = Handlebars.compile(searchTemplate.innerHTML);
var output = document.querySelector('.output');

var myTemplate = document.querySelector('#myTemplate');
var temp = Handlebars.compile(myTemplate.innerHTML);
var display = document.querySelector('.block');

//var dropOut = document.querySelector('#dropOut')

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


$.ajax({
  url: "api/shoes",
  type: "post",
  dataType: "json",
  success:function(data){

  }
})
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
//     sizeMap[shoe.size] = shoe.size;
//     size.push(shoe.size);
//   }
//
// }
// return size;
// };
//
// function populateDropDowns(){
//
//   var brand = uniqBrand();
//   var colors = uniqColor();
//   var size = uniqSize();
//
//
//   brand.sort(),
//   colors.sort(),
//   size.sort(function(a,b){
//   return a - b;
//     });
//
//
//   var results = temp({shoeColorKeys:colors,shoeBrandKeys:brand,shoeSizeKeys:size})
//   display.innerHTML = results;
//
// }
});