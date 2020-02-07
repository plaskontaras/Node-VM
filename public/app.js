//connection of client scripts
document.querySelectorAll('.price').forEach( node => {
    node.textContent = new Intl.NumberFormat('de-DE', {
        currency: 'uah',
        style: 'currency'
    }).format(node.textContent);
})