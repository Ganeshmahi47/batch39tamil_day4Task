const Xhr = new XMLHttpRequest();
Xhr.open("GET","https://restcountries.com/v3.1/all");
Xhr.send();
Xhr.responseType="json";
Xhr.onload=function dispalyResult()
{
    const countries=Xhr.response;
   
    for(var i=0; i<= (countries.length); i++)
    {   let CountriesDetails = 'Countries Details';
        console.log(i+1,CountriesDetails)
        console.log("country:",countries[i].name.common)
        console.log("Regions :",countries[i].region)
        console.log("Sub Regions :",countries[i].subregion)
        console.log("Popullation :",countries[i].population)
    }
}