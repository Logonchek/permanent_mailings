const dom = document.querySelector('.js-body')

let currentData = new Date();
const month = currentData.getMonth() + 1
let data = currentData.getDate() + '0' + month + '21'


dom.innerHTML = dom.innerHTML.replace(/curData/gi, data)