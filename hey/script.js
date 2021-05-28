// setTimeout(function st1(){console.log("f1111")},3000);
// setTimeout(function st2(){console.log("f2222")},5000);
// setTimeout(function st3(){console.log("f3333")},3000);

// setTimeout(function st(){console.log("f0000");
//     setTimeout(function st2(){console.log("f1111")},1000);
// }
// ,3000);
// setTimeout(function st3(){console.log("f2111")},4020);
const myPromise1 = new Promise((resolve, reject) => {  
    let x=3;
    console.log("1111")
    if(x>4){
      setTimeout(()=>{console.log("1 one pass")},5000)}
      else{
        setTimeout(()=>{console.log("1 one fail")},5000)}
      }
  );
  const myPromise2 = new Promise((resolve, reject) => {  
    let x=5;
    console.log("2222")
    if(x>4){
      setTimeout(()=>{console.log("2 one pass")},6000)}
      else{
        setTimeout(()=>{console.log("2 one fail")},5000)}
      }
  );
  
  Promise.all([myPromise1,myPromise2]).then((fr)=>{console.log(fr[0]);console.log(fr[1]);
  },(fr)=>{console.log(fr)})
   .catch((fr)=>{console.log(fr)})              //using catch(either use then without error part(second) and catch at last) OR then with both 
   console.log("hello everyone")