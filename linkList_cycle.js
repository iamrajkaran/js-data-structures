let root = {
    next:{
        next:{
            next: null,
            value: 30,
        },
        value: 20,
    },
    value: 10,
};

root.next.next.next = root.next;


function isCircular(){
   let slowRabbit = root;
   let fastRabbit = root.next.next;
//    let pointer = root.next;

   while(root.next != null) {
        if(slowRabbit.value === fastRabbit.value) return true;
        root = root.next;
        slowRabbit = fastRabbit;
        fastRabbit = root.next.next;
   }

}

console.log(isCircular());
// s .  f
// 10 - 20 - 30
//       |    |
//        ----
