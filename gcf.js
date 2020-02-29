function gcf(dr, dd, r){
    if(dd % dr === 0 && r !== 0) return r;

    r = Math.floor(dd % dr);

    dd = dr;
    dr = r;

    gcf(dr, dd, r);

    return r;
}
 var c = gcf(27, 63, 0);
console.log(c);

 
