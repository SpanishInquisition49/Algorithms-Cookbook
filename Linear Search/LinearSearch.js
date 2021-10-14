function linearSearch(a, v){
    for(let i = 0; i<a.length; i++){
        if(a[i] == v) {
            console.log("a["+i+"]="+a[i]+"=="+v)
            return i;
        }
        else {
            console.log("a["+i+"]="+a[i]+"!="+v) 
        }
            
    }
    return null;
}


linearSearch([34,67,3,89,100,23,78,34,21,29,86,456,3456,23436,786785645,334,21346,78757], 29)