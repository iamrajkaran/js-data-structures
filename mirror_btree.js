function mirror(root) {
if(root === null) return null;

let left = root.left;
let right = root.right;

var temp;

temp = left?left.data:null;
if(right){
 left.data = right.data;
}else{
  left = null;
}
 if(right)
 right.data = temp;
 else
 right = null;

 mirror(left);
 mirror(right);

 return root;
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

console.log(mirror(tree));
