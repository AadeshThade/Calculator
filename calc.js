function display(val){
    document.getElementById("demo1").value+=val;
    // document.getElementById("demo").innerHTML=c;
}
function cal(){
    var c=document.getElementById("demo1").value;
    var n=document.getElementById("demo1").value=eval(c);
//    num(c);
var p=0,a=0,r,c=n;
     while(n>0){
       r=n%10;
       a=a+r*r*r;
       p=p*10+r;
       n=parseInt(n/10);
     }
    //  document.getElementById("demo").value='Armstrong number';
     if(a==c)
        document.getElementById("demo1").value+=' Armstrong number';
    if (p==c)
        document.getElementById("demo1").value+=' Palindrome number';

}
function back(){
    var c=document.getElementById("demo1").value;
    // var cur=c.value;
    // var newv=cur.slice(0,-1);
    // demo1.value=newv;
    // var s=slice(0,-1);
    document.getElementById("demo1").value=c.slice(0,-1);


}
// function num(n){
//     var n=document.getElementById("demo").value
//      var p=0,a=0,r,c=n;
//      while(n>0){
//        r=n%10;
//        a=a+r*r*r;s
//        p=p*10+r;
//        n=parseInt(n/10);
//      }
//     //  document.getElementById("demo").value='Armstrong number';
//      if(a==c)
//         document.getElementById("demo").value+=' Armstrong number';
//     if (p==c)
//         document.getElementById("demo").value+=' Palindrome number';
// }