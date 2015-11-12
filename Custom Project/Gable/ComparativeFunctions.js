//Comparative functions comparing Amazon and Ebay records


function giveAverage(){
	return "The mean price between these two vendors is: $" + 
	(amazonRecords[0].Price + ebayRecords[0].Price) / 2;
}

function givePriceDifference(){
	if (amazonRecords[0].Price > ebayRecords[0].Price){
		return "Price difference: For this item, Amazon is more expensive by $" + 
		(amazonRecords[0].Price - ebayRecords[0].Price);
	} else if (ebayRecords[0].Price > amazonRecords[0].Price){
		return "Price difference: For this item, Ebay is more expensive by $" + 
		(ebayRecords[0].Price - amazonRecords[0].Price);
	} else {
		return "Incomplete data. Please try another query.";
	}
}

function givePreferenceRating(){
	if (amazonpreferredProducts.length > ebaypreferredProducts.length){
		return "Your Preferred Products favor Amazon by " + 
		(amazonpreferredProducts.length - ebaypreferredProducts.length) + 
		" units";
	} else if (ebaypreferredProducts.length > amazonpreferredProducts.length){
		return "Your Preferred Products favor Ebay by " + 
		(ebaypreferredProducts.length - amazonpreferredProducts.length) + 
		" units";
	} else {
		return "Your Preferred Products cart has no preference yet.";
	}	
}
