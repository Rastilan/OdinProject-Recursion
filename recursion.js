

function fibsReversed(val) {
    let f1 = [0,1];

    for(let i = 0; i<val-2; i++){
        f1.push(f1[i] + f1[i+1]);
        
    }
    console.log("fibs reversed function: " + f1);

}
let f2 = [0,1];
let b = 0;
function fibsRecReversed(val) {

    if(f2.length == val){
        console.log("fibs recursive reversed function: " + f2);
    }
    else {
        f2.push(f2[b] + f2[b+1]);
        b++;
        fibsRecReversed(val);
        //console.log(f1);
    }
    
}

function fibs(val) {
    seq = [0, 1];
    while(val > 2){
       seq.push(seq[seq.length-1] + seq[seq.length-2]);
       val--;
       //console.log("fibs function testing: " + seq);
    }
    console.log("fibs function: " + seq);
}

function fibsRec(val, seq) {
    if(seq.length < 1){ seq = [0,1]; }
    if(val > 2){
        //console.log("fibsRec function testing: " + seq);
        val--;
       seq.push(seq[seq.length-1] + seq[seq.length-2]);
       fibsRec(val, seq);

    }
      if(val === 2)  console.log("fibsRec function: " + seq);
    
}
fibs(8);
fibsRec(8, []);
fibsReversed(8);
fibsRecReversed(8);