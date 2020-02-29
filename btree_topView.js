function topView(root){
let sign = 0;
root.sign = sign;
let hashMap = {};
let queue = [root];

    while(queue.length !== 0){
        var treeNode = queue.shift();

         if(!hashMap[treeNode.sign])
           hashMap[treeNode.sign] = treeNode.data;

        if(treeNode.left){
           treeNode.left.sign = treeNode.sign - 1;
           queue.push(treeNode.left);

        }

        if(treeNode.right){
           treeNode.right.sign = treeNode.sign + 1;
           queue.push(treeNode.right);

        }
    }

    console.log('>>', hashMap);

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

topView(tree);
