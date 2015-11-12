//Comparative functions comparing Amazon and Ebay records


function giveAverage(){

	return "The mean price between these two vendors is: " + 
	(amazonRecords[0].Price + ebayRecords[0].Price) / 2;
}