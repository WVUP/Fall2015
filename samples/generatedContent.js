var obits = [
    {
        firstName: 'Aaron',
        lastName: 'Freeland'
    },

    {
        firstName: 'Josh',
        lastName: 'Pepper'
    }
];

function render () {

    // Grab user input
    var inputValue = document.getElementById('searchTerm').value;

    // This stores the html we will return
    var html = '';

    // Stores any obits we want to render on page
    var arrToBuildHTML = [];

    if(inputValue){

        for (var i = 0; i < obits.length; i++) {
            if(obits[i].lastName == inputValue){
                arrToBuildHTML.push(obits[i]);
            }
        }

    }else{
        arrToBuildHTML = obits;

    }

    for (var i = 0; i < arrToBuildHTML.length; i++) {
        html+= arrToBuildHTML[i].firstName + ' ' + arrToBuildHTML[i].lastName;
    }

    document.getElementById('body').innerHTML = html;
};