function findStep(n){
        if (n == 1 || n == 0)
            return 1;
        if (n == 2)
            return 2;

            return findStep(n - 1) +

                   findStep(n - 2);

//                    return findStep(n - 3) +
//                    findStep(n - 2) +
//                    findStep(n - 1);  3 1
    }



findStep(5);
//111 21  12  5  11111 122 . 212 221 1112 2111 1211 1121
