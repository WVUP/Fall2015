//Dummy data object records

var amazonRecords = 
[
	{
	ProductID: 'FinalFantasy7',
	SKU: '12774',
	Price: 50,
	Name: 'FinalFantasy 7',
	NumberSold: '512334',
	SellingHot: 'Yes',
	Tags: 'video game, vintage, FF'
	},

	{
	ProductID: 'FinalFantasy9',
	SKU: '12774',
	Price: 50,
	Name: 'FinalFantasy 9',
	NumberSold: '438999',
	SellingHot: 'No',
	Tags: 'video game, PS1, FF9, old school'
	},

	{
	ProductID: 'FinalFantasy10',
	SKU: '12774',
	Price: 50,
	Name: 'FinalFantasy 10',
	NumberSold: '32445',
	SellingHot: 'No',
	Tags: 'video game, vintage, FF10, linear'
	}


];

var amazonpreferredProducts = 
[
];

//Functions

function giveAmazonRecords()
{
	return 	'Vendor: AMAZON' +
			'</br>Product ID: ' + amazonRecords[0].ProductID +
			'</br>Name of the Product: ' + amazonRecords[0].Name + 
			'</br>SKU: ' + amazonRecords[0].SKU;
}

function queryAmazonRecords()
{
	return 	'You currently have ' + 
			amazonpreferredProducts.length +
			' items in your preferred products.';
}

function giveAmazonFinancials()
{
	return 	'Vendor: AMAZON' + 
			'</br>Price of the Product: ' + amazonRecords[0].Price +
			'</br>NumberSold:' + amazonRecords[0].NumberSold +
			'</br>Selling well: ' + amazonRecords[0].SellingHot;
}

function giveAmazonTags()
{
	return	'Vendor: AMAZON' +
			'</br>Tags: ' + amazonRecords[0].Tags;
}

function giveAmazonBuyRecommendation()
{
	if (amazonRecords[0].SellingHot == 'Yes')
	{
		return 'Buy? Yes';
	}
	else
	{
		return 'Buy? No';
	}
}

function addToAmazonPreferredProducts()
{
	amazonpreferredProducts.push(amazonRecords[0]);

	return 'Added to preferred products!'
}

function giveAmazonRawRecordKeys()
{
	return Object.keys(amazonRecords[0]);
}