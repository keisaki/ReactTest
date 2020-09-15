function fetchOrders(count = 10, start = 0)
{
	console.log('Getting',count, 'orders starting from ',start);
}

fetchOrders();

function findProducts(opts = {minPrice: 10, maxPrice : 20})
{
	console.log(opts);
}
findProducts();//по умолчанию
findProducts({});//заменяет обьект