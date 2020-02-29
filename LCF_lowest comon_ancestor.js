function findAncestor(root, p,q){
if(root === null) return null;


let left = findAncestor(root.left, p, q);
let right = findAncestor(root.right, p, q);


if(root.data === p || root.data === q){
    return root;
}

if(left !== null && right !== null){
  return root.data;
}
else{
  return left?left:right;
}

}
// null null => null
// p,q => root
// p, null => p
// q,null => q


//           10
//     50         30
// 100    170
//      3     9
//          70
//        40 90



var tree = {
    left: {
        left: {
            left: null,
            right: null,
            data: 100,
        },
        right: {
            left: {
                left: null,
                right: null,
                data: 3,
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
                data: 9,
            },
            data: 170,
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

findAncestor(tree, 70,3);
