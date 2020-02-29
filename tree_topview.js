function Bst(data) { this.left = null; this.right = null; this.data = data; }

Bst.prototype.insert = function(data) {
  if (data > this.data) {
    if (!this.right) this.right = new Bst(data);
    else this.right.insert(data); }
    else if (data <= this.data) {
      if (!this.left) this.left = new Bst(data);
      else this.left.insert(data);
    }
}

Bst.prototype.BreadthFirstTraversal = function() {
   let sign = 0;
   this.sign = sign;
   let queue = [this];
   var hashMap = {};
    while (queue.length !== 0) {
        var treeNode = queue.shift();
         if(!hashMap[treeNode.sign]) hashMap[treeNode.sign] = treeNode.data;
//         iterative(treeNode);
        if (treeNode.left){
            treeNode.left.sign =  treeNode.sign - 1;
          queue.push(treeNode.left);
        }
        if (treeNode.right){
            treeNode.right.sign = treeNode.sign + 1;
          queue.push(treeNode.right);
        }
    }
console.log('>>>>', hashMap);
}

var bs = new Bst(50);

bs.insert(20);
bs.insert(30);
bs.insert(400);
bs.insert(10);
bs.insert(10);
bs.insert(12);
bs.insert(1);
bs.insert(500);

                //50 (0)
          //20 (-1)     400 (1)
       //10 (-2) 30 (0)
   //10 (-3) 12 (-1)
//1 (-4)
// console.log(bs);
bs.BreadthFirstTraversal();

// function log(value) { console.log(value); }
// bs.topView();
console.log(bs);
