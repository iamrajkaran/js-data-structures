var root = {
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

var zigzagLevelOrder = function(root) {
        if (root === null) {
        return [];
    }

    // Perform BFS traversal
    const result = [];
    const queue = [];
    const levelQueue = [];
    queue.push(root);
    levelQueue.push(0);

    while (queue.length !== 0) {
        const n = queue.shift(); // dequeue
        const level = levelQueue.shift(); // dequeue

        if (result[level] === undefined) {
            result[level] = [];
        }

        result[level].push(n.data);


        let tempNode = n.right?n.right:null;
        n.right = n.left?n.left:null;
        n.left = tempNode;

        queue.push(n);
        levelQueue.push(level + 1);

        if (level === 0 || (level % 2) === 0) {
            tempNode = n.right?n.right:null;
                n.right = n.left?n.left:null;
                n.left = tempNode;

             if(n.left !== null){
                queue.push(n.left)
                levelQueue.push(level + 1);
            }

             if (n.right !== null) {
                queue.push(n.right);
                levelQueue.push(level + 1);
             }
        }else {

             if(n.left !== null){
                queue.push(n.left)
                levelQueue.push(level + 1);
            }

             if (n.right !== null) {
                queue.push(n.right);
                levelQueue.push(level + 1);
             }
        }
    }

    return result;
};

console.log(zigzagLevelOrder(root));
