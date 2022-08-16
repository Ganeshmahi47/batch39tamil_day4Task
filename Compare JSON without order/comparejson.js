var obj1 = { 
    name: "Person 1", 
    age:5 
    
};
var obj2 = { 
    age:5, 
    name: "Person 1" 
    
};



if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            
            continue;
            
        }
        
        else {
            console.log("values are not equal")
        }
    }
}
else {
    console.log("values are not equal")
}

console.log("values are equal")
