//Dummy data objects

var record1 = {
	ProductID: 'FinalFantasy7',
	SKU: '12774',
	Price: '50',
	Name: 'FinalFantasy7',
	NumberSold: '512334',
	SellingHot: 'Yes',
	Tags: 'video game, vintage, FF'
}


// function printAmazonRecords()
// {
// 	document.write('</br> Vendor: AMAZON');
// 	document.write('</br>Product ID: ' + record1.ProductID);
// 	document.write('</br>Name of the Product: ' + record1.Name);
// 	document.write('</br>Price of the Product: ' + record1.Price);
// 	document.write('</br>Number sold: ' + record1.NumberSold);
// }

function giveAmazonRecords()
{
	return 	'Vendor: AMAZON' +
			'</br>Product ID: ' + record1.ProductID +
			'</br>Name of the Product: ' + record1.Name + 
			'</br>SKU: ' + record1.SKU;
}

function giveAmazonFinancials()
{
	return 	'Vendor: AMAZON' + 
			'</br>Price of the Product: ' + record1.Price +
			'</br>NumberSold:' + record1.NumberSold +
			'</br>Selling well: ' + record1.SellingHot;
}

function giveAmazonTags()
{
	return	'Vendor: AMAZON' +
			'</br>Tags: ' + record1.Tags;
}

function giveBuyRecommendation()
{
	if (record1.SellingHot == 'Yes')
	{
		return 'Buy? Yes';
	}
	else
	{
		return 'Buy? No';
	}
}