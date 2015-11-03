//Dummy data object records

var records = 
[
	{
	ProductID: 'FinalFantasy7',
	SKU: '12774',
	Price: '50',
	Name: 'FinalFantasy 7',
	NumberSold: '512334',
	SellingHot: 'Yes',
	Tags: 'video game, vintage, FF'
	},

	{
	ProductID: 'FinalFantasy9',
	SKU: '12774',
	Price: '50',
	Name: 'FinalFantasy 9',
	NumberSold: '438999',
	SellingHot: 'No',
	Tags: 'video game, PS1, FF9, old school'
	},

	{
	ProductID: 'FinalFantasy10',
	SKU: '12774',
	Price: '50',
	Name: 'FinalFantasy 10',
	NumberSold: '32445',
	SellingHot: 'No',
	Tags: 'video game, vintage, FF10, linear'
	}


];

var preferredProducts = 
[
];

//Functions

function giveAmazonRecords()
{
	return 	'Vendor: AMAZON' +
			'</br>Product ID: ' + records[0].ProductID +
			'</br>Name of the Product: ' + records[0].Name + 
			'</br>SKU: ' + records[0].SKU;
}

function giveAmazonFinancials()
{
	return 	'Vendor: AMAZON' + 
			'</br>Price of the Product: ' + records[0].Price +
			'</br>NumberSold:' + records[0].NumberSold +
			'</br>Selling well: ' + records[0].SellingHot;
}

function giveAmazonTags()
{
	return	'Vendor: AMAZON' +
			'</br>Tags: ' + records[0].Tags;
}

function giveBuyRecommendation()
{
	if (records[0].SellingHot == 'Yes')
	{
		return 'Buy? Yes';
	}
	else
	{
		return 'Buy? No';
	}
}

function addToPreferredProducts()
{
	return 'Added to preferred products!'
}

function giveRawRecordKeys ()
{
	return Object.keys(records[0]);
}