// Моковые данные
const properties = [
    { id: 1, type: 'квартира', address: 'ул. Ленина, 10', price: 5000000, image: 'карточка1.jpg' },
    { id: 2, type: 'дом', address: 'ул. Пушкина, 5', price: 12000000, image: 'карточка2.jpg' },
    { id: 3, type: 'комната', address: 'ул. Гагарина, 20', price: 1500000, image: 'карточка3.jpg' },
];

// Отображение объектов
function displayProperties(props) {
    const container = document.getElementById('property-list');
    container.innerHTML = '';
    props.forEach(prop => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-12';
        col.innerHTML = `
            <div class="card">
                <img src="${prop.image}" class="card-img-top" alt="${prop.type}">
                <div class="card-body">
                    <h5 class="card-title">${prop.type}</h5>
                    <p class="card-text">${prop.address}</p>
                    <p class="card-text text-success"><strong>${prop.price.toLocaleString()} ₽</strong></p>
                    <a href="#" class="btn btn-outline-primary">Подробнее →</a>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Фильтрация
document.getElementById('apply-filters').addEventListener('click', () => {
    const type = document.getElementById('filter-type').value;
    const minPrice = parseInt(document.getElementById('filter-price-min').value) || 0;
    const maxPrice = parseInt(document.getElementById('filter-price-max').value) || Infinity;

    const filtered = properties.filter(p => {
        return (type === '' || p.type === type) &&
               (p.price >= minPrice) &&
               (p.price <= maxPrice);
    });

    displayProperties(filtered);
});

// Отправка формы
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    document.getElementById('contact-form').reset();
});

// Инициализация
displayProperties(properties);