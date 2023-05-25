// var vm = new Vue({
//   el: "#app",
//   data:{
//     title:'hello world',
//     price:1000,
//     discount:0.5,
//     content:"<h3>超讚</h3>",
//     link:"https://www.google.com.tw/"
//   }
// });

var vm = new Vue({
  el: "#app",
  data: {
    company: "台灣鐵路局",
    ticket: {
      date: "2018.05.05-05.04",
      from: "台北",
      to: "新竹",
      direction: "south",
      other: "限當日當次車有效",
      price: 250,
      discount: 0.5,
      link: "https://www.google.com.tw/",
    },
  },
});
