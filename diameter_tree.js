function height(tree){
    if (tree === null) return 0;

    let h;

    let ltH = 1 + height(tree.left);
    let rtH = 1 + height(tree.right);

    return ltH > rtH ? ltH : rtH;
}


function diameter(tree){
    if(tree === null){
        return 0;
    }

    let lheight = height(tree.left);

    let rheight = height(tree.right);

    let ldiameter = diameter(tree.left);

    let rdiameter = diameter(tree.right);

    let md = Math.max(lheight + rheight + 1, Math.max(ldiameter, rdiameter) );

    return md;
}

//      10
//   50    30
// 50  70
//   40  90
//        70
//       40 90
var tree = {
    left: {
        left: {
            left: null,
            right: null,
            data: 50,
        },
        right: {
            left: {
                left: null,
                right: null,
                data: 40,
            },
            right: {
                left: {
            left: {
                left: null,
                right: null,
                data: 40,
            },
            right: {
                left: null,
                right: null,
                data: 90,
            },
            data: 70,
        },
                right: null,
                data: 90,
            },
            data: 70,
        },
        data: 50,
    },
    right: {
       left: null,
       right: null,
       data: 30,
    },
    data: 10,
};
console.log(diameter(tree));
