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

const levelOrder = function(root) {
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

//         if(n == undefined) return;

        result[level].push(n.data);

        if (n.left !== null) {
            queue.push(n.left);
            levelQueue.push(level + 1);
        }
        if (n.right !== null) {
            queue.push(n.right);
            levelQueue.push(level + 1);
        }
    }

    return result;
};

console.log(levelOrder(root));
