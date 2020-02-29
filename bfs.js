var queue = [];
function bfs(tree){
   queue = [tree];

//    var treeNode;

   while(queue.length !== 0){
     var treeNode = queue.shift();

     console.log(treeNode.data);

     if(treeNode.left) queue.push(treeNode.left);
     if(treeNode.right) queue.push(treeNode.right);
   }

//    queue.push(tree.data);
//    queue.push(tree.left.data);
//    queue.push(tree.right.data);
}

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

console.log(bfs(tree));
//           10
//      50 .     30
//   50  70
//      40  90
//        70
//     40   90
