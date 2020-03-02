var p = 60, q = 95;
function findAncestor(root, v){
    let left;
    let right;
if(root === null) return null;

if(p < root.data){
   left = findAncestor(root.left, p);
}else if(q < root.data){
   left = findAncestor(root.left, q);
} 

if(p > root.data){
   right = findAncestor(root.right, p);
}else if(q > root.data){
   right = findAncestor(root.right, q);
}

if(root.data === p || root.data === q){
    return root;
}

if(left != null && right != null){
  return root.data;  
} 
else{
  return left?left:right;
}

}
//           100
//      50         110
//  40     70
//      60    85 
//               90
//              86 95



var tree = {
    left: {
        left: {
            left: null,
            right: null,
            data: 40,
        },
        right: {
            left: {
                left: null,
                right: null,
                data: 60,
            },
            right: {
                left: null,
                right: {
                    left: {
                        left: null,
                        right: null,
                        data: 86,
                    },
                    right: {
                        left: null,
                        right: null,
                        data: 95,
                    },
                data: 90,
                },
            data: 85,
            },
            data: 70,
        },
        data: 50,
    },
    right: {
       left: null,
       right: null,
       data: 110,
    },
    data: 100,
};

findAncestor(tree, null);
