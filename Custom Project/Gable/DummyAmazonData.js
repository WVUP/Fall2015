//Dummy data objects

var record1 = {
	ProductID: 'FinalFantasy7',
	Price: '50',
	Name: 'FinalFantasy7',
	NumberSold: '512334',
	Tags: 34,

}


function printAmazonRecords()
{
	document.write('</br> Vendor: AMAZON');
	document.write('</br>Product ID: ' + record1.ProductID);
	document.write('</br>Name of the Product: ' + record1.Name);
	document.write('</br>Price of the Product: ' + record1.Price);
	document.write('</br>Number sold: ' + record1.NumberSold);
}

function giveAmazonRecords()
{
	return 	'Vendor: AMAZON' +
			'</br>Product ID: ' + record1.ProductID +
			'</br>Name of the Product: ' + record1.Name + 
			'</br>Price of the Product: ' + record1.Price +
			'</br>Number sold: ' + record1.NumberSold;
}
