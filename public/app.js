//connection of client scripts

const toCurrency = price => {
    return new Intl.NumberFormat('de-DE', {
        currency: 'uah',
        style: 'currency'
    }).format(price);
}

document.querySelectorAll('.price').forEach(node => {
    node.textContent = toCurrency(node.textContent)
})

// for delete course from basket

const $card = document.querySelector('#card');

if ($card) {
    $card.addEventListener('click', event => {
        // console.log(event.target);
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id;

            fetch('/card/remove/' + id, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(card => {
                    // console.log(card)
                    if (card.courses.length) {
                        const html = card.courses.map(c => {
                            return `
                            <tr>
                                <td>${c.title}</td>
                                <td>${c.count}</td>
                                <td>
                                    <button class="btn btn-small js-remove" data-id="${c.id}">delete</button>
                                </td>
                            </tr>
                            `
                        }).join("")
                        $card.querySelector('tbody').innerHTML = html;
                        $card.querySelector('.price').textContent = toCurrency(card.price);
                        
                    } else {
                        $card.innerHTML = '<p>Basket is empty</p>';
                    }
                })
        }
    })
}