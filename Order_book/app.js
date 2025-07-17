const API_BASE = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const msgDiv = document.getElementById('msg');
    form.onsubmit = function (e) {
        e.preventDefault();
        const order = {
            type: document.getElementById('type').value,
            symbol: document.getElementById('symbol').value,
            price: parseFloat(document.getElementById('price').value),
            quantity: parseInt(document.getElementById('quantity').value, 10)
        };
        fetch(API_BASE + '/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(r => r.text())
            .then(msg => {
                msgDiv.innerText = msg;
                form.reset();
                fetchOrders();
            })
            .catch(err => {
                msgDiv.innerText = "Error: " + err;
            });
    };
    fetchOrders();
});

function fetchOrders() {
    fetch(API_BASE + '/orderbook')
        .then(resp => resp.json())
        .then(data => renderOrders(data));
}

function renderOrders(orders) {
    let tbody = document.querySelector('#ordersTable tbody');
    tbody.innerHTML = '';
    for (let o of orders) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${o.id}</td>
                        <td>${o.type}</td>
                        <td>${o.symbol}</td>
                        <td>${o.price}</td>
                        <td>${o.quantity}</td>`;
        tbody.appendChild(tr);
    }
}
