const Xhr = new XMLHttpRequest();
Xhr.open("GET","https://restcountries.com/v3.1/all");
Xhr.send();
Xhr.responseType="json";
Xhr.onload=function dispalyResult()
{
    const countries=Xhr.response;
    console.log(countries);
    for(var i=1; i<= countries.length; i++)
    {
    console.log(countries[i].flags.png)
    }
}