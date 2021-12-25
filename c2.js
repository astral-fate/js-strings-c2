        

console.log("hello");

let heightt1 = 78;
let masse1 = 1.69;

let intBMIMark = masse1 / (heightt1* heightt1);


console.log("mark 1st mbi", intBMIMark*1000);


let height0 = 92;
let mass0 = 1.95;

let intBMIJohn = mass0 / (height0 * height0 );
console.log("john 1st mbi", intBMIJohn*1000);


//2nd test 

let height1 = 95;
let mass1 = 1.88;

let secBMImark = mass1 / (height1 * height1);

console.log("mark 2nd bmi", secBMImark);

let height2 = 85;
let mass2 = 1.76;


let secBMIjhon = mass2 / (height2 * height2);

const text = `the math is: ${secBMIjhon}`;

console.log(text );




let markHigherBMI = true ;


//if mark's bmi is greater than jhon, print false

        if ( intBMIMark   > intBMIJohn   ) {

            console.log(markHigherBMI );
        }

        else {

            markHigherBMI = false;
            console.log(markHigherBMI);

        }

            
        if ( secBMImark  > secBMIjhon ) 

        console.log("mark mbi is higher than john", arkHigherBMI );


    else 

        markHigherBMI = false;
        console.log("john mbi is higher than marker", markHigherBMI);


                    
