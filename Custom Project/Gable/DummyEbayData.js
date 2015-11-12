//Dummy data object records

var ebayRecords = 
[
	{
	ProductID: 'FF7',
	SKU: '00001',
	Price: 45,
	Name: 'Final7',
	NumberSold: '81122',
	SellingHot: 'No',
	Tags: 'vg, best, worst'
	},

	{
	ProductID: 'FF9',
	SKU: '00002',
	Price: 44.6,
	Name: 'Final9',
	NumberSold: '3424',
	SellingHot: 'No',
	Tags: 'terrible, 233, great, video game'
	},

	{
	ProductID: 'FF10',
	SKU: '00003',
	Price: 5,
	Name: 'Final10',
	NumberSold: '676676',
	SellingHot: 'No',
	Tags: 'video game, FF10, linear'
	}


];

var ebaypreferredProducts = 
[
];

//Functions

function giveEbayRecords()
{
	return 	'Vendor: EBAY' +
			'</br>Product ID: ' + ebayRecords[0].ProductID +
			'</br>Name of the Product: ' + ebayRecords[0].Name + 
			'</br>SKU: ' + ebayRecords[0].SKU;
}

function queryEbayRecords()
{
	return 	'You currently have ' + 
			ebaypreferredProducts.length +
			' items in your preferred products.';
}

function giveEbayFinancials()
{
	return 	'Vendor: EBAY' + 
			'</br>Price of the Product: ' + ebayRecords[0].Price +
			'</br>NumberSold:' + ebayRecords[0].NumberSold +
			'</br>Selling well: ' + ebayRecords[0].SellingHot;
}

function giveEbayTags()
{
	return	'Vendor: EBAY' +
			'</br>Tags: ' + ebayRecords[0].Tags;
}

function giveEbayBuyRecommendation()
{
	if (ebayRecords[0].SellingHot == 'Yes')
	{
		return 'Buy? Yes';
	}
	else
	{
		return 'Buy? No';
	}
}

function addToEbayPreferredProducts()
{
	ebaypreferredProducts.push(ebayRecords[0]);

	return 'Added to preferred products!'
}

function giveEbayRawRecordKeys()
{
	return Object.keys(ebayRecords[0]);
}