//number prototyps
Number.prototype.nmber1=function(num = 10){
    if(num <10){
        return this*num;
    }
    else if(num >10){
        return this + num
    }
}
let numbe=6
console.log(numbe.nmber1(90));
//string prototyps
String.prototype.string1=function(style ="defut"){
    if(style=="defut"){
        return`---${this}---`
    }
    else if(style=="plus"){
        return `+++${this}+++`
    }
    else if(style=="gun"){
        return `***${this}***`
    }
    else if(style=="star"){
        return `###${this}###`
    }
    else if(style=="dolor"){
        return `$$$${this}$$$`
    }
}
const title= "Youtube";

console.log(title.string1());
//string prototyos
const arra=[2,3,5,9,88,8]
const dobles=arra.map(
    function(item){
        return item*2;
    }
)
console.log(dobles);