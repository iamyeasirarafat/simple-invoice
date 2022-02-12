// get data fumction
function getData(id){
    const data = document.getElementById(id).value;
    document.getElementById(id).value = '';
    return data;
}
document.getElementById('invoice').innerText = Math.ceil(Math.random()*100000);
// buyer detail submit button click
document.getElementById('detail-submit-btn').addEventListener('click', function(){
    const buyerData = getData('buyer-details-input');
    document.getElementById('buyer-info').innerText = buyerData;
})

// add button click
document.getElementById('add-details-btn').addEventListener('click', function(){
    const name = getData('item-name-input')
    const quantity = getData('item-quantity-input')
    const price = getData('item-price-input')
    const subtotal = quantity * price;
    const tableRow = document.createElement('tr');
    
    tableRow.innerHTML = `
   
    <th >${name}</th>
    <td>${price}</td>
    <td>${quantity}</td>
    <td class="subtotal">${subtotal}</td>
    `;
    document.getElementById('info-table').appendChild(tableRow);
    const totals = document.getElementsByClassName('subtotal');
   let sum = 0;
    for (let i = 0; i < totals.length; i++) {
       sum = parseFloat(totals[i].innerText) + sum;
    }
    document.getElementById('sub-total').innerText = sum;
    const tax = (sum/100)*20;
    document.getElementById('tax').innerText = tax;
    const grandTotal = sum + tax;
    document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('grand-total-2').innerText = grandTotal;
})