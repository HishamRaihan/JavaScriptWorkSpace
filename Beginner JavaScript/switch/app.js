//  order status -> penind || in Transit || completed
let orderStatus = 'Random';

switch (orderStatus) {
	case 'Pending':
		'Your order has been placed and will be sent shortly';
		break;
	case 'In Transit':
		'Your order is on the move - you should recieve it soon';
		break;
	case 'Completed':
		'Your order has been completed';
		break;
	default:
		'Sorry! We arent sure what happened with your order';
}
console.log(orderStatus);