// DAY 8: Arrays & Array Methods//

/* Q.1) Write a program that finds the largest and smallest elements in an array. */

// METHOD 1:- REDUCE //
/*let a=[10,20,40,50,30]
let b=a.reduce((acc,cur)=>{
    if(cur > acc){
        acc=cur
    }
    return acc

},0)
console.log("The largest element in an array is:- ",b);
let c=a.reduce((acc,cur)=>{
    if(cur <acc){
        acc=cur
    }
    return acc
})
console.log("The smallest element in an array is:- ",c);*/

// CONVERTING THIS TO CUSTOM CODE:- //

/*let a=[10,20,30,40,50,60]
let b=0
for(let i=0;i<a.length;i++){
    //console.log(a[i]);//
    if(a[i]>b){
        b=a[i]
    }
    
    

    
}
console.log("The largest element in this array is:-",b);
let c=a[0]
for(let i=0;i<a.length;i++){
    if(a[i]<c){
        c=a[i]
    }
}
console.log("The smallest element in this array is ",c);*/


/* Q.2) Write a program that removes all duplicate elements from an array. */

// METHOD 1:- FILTER //
/*let a=["Somali","Sampurna","Somali","Piyali","Sampurna"]
let b=a.filter((item,index,arr)=>{
    return arr.indexOf(item)==index
})
console.log("The original array is:- ",b);*/

// CONVERTING THIS TO CUSTOM CODE:- //


/*let a=["Somali","Sampurna","Somali","Piyali","Sampurna"]
let b=[]
for(let i=0;i<a.length;i++){
    if(a.indexOf(a[i])==i){
        b.push(a[i])
    }

}
console.log(b);*/

// METHOD 2:- REDUCE //
/*let a=["Somali","Sampurna","Somali","Piyali","Sampurna"]
let b=a.reduce((acc,cur)=>{
    !acc.includes(cur)?acc.push(cur):""
    return acc

},[])
console.log(b);*/
 
// CONVERTING THIS TO CUSTOM CODE //
/*let a=["Somali","Sampurna","Somali","Piyali","Sampurna"]
let b=[]
for(let i=0;i<a.length;i++){
    if(!b.includes(a[i])){
        b.push(a[i])
    }
}
console.log(b);*/


/* Q.3) Create a program to reverse an array without using reverse() method. */

// METHOD 1:- REDUCE //
/*let arr=[43,65,86,74,20,52]
let arr2=arr.reduce((acc,cur)=>{
    acc.unshift(cur)
    return acc
},[])
console.log("The reverse array is:- ",arr2);*/

// CONVERTING THIS TO CUSTOM CODE //
/*let arr=[43,65,86,74,20,52]
let arr2=[]
for(let i=0;i<arr.length;i++){
    arr2.unshift(arr[i])
}
console.log(arr2);*/


/* Q.4) Write a program to find the sum and average of all numbers in an array. */

// METHOD 1:- REDUCE //
/*let a=[20,36,16,70]
let b=a.reduce((acc,cur)=>{
    acc+=cur
    return acc
})
console.log("The sum of all numbers are:-",b);
let c=b/a.length
console.log("The average of all numbers are ",c);*/

// CONVERTING THIS TO CUSTOM CODE //
/*let a=[20,36,16,70]
let b=0
for(let i=0;i<a.length;i++){
    b+=a[i]
}
console.log(b);
let c=b/a.length
console.log(c);*/



/* Q.5) Write a program to find the index of the first occurrence of a given element in an array. */
/*let a=[10,4,3,21]
console.log(a.indexOf(10));*/



/* Q.6) Write a program that joins all elements of an array into a single string separated by commas. */
/*let arr=["I","am","a","good","girl"]
let arr2="";
for(let i=0;i<arr.length;i++){
    arr2=arr2+ " " +" "+arr[i]
}
console.log(arr2);*/


/* Q.7) Write a program to merge two arrays and remove duplicates. */

/*let arr=[[1,2],[2,3]]
let arr2=arr.reduce((acc,cur)=>{
    acc=acc.concat(cur)
    return acc
},[])
console.log(arr2);
let arr3=arr2.filter((item,index,arr)=>{
    return arr.indexOf(item)==index
})
console.log(arr3);*/

// CONVERTING THIS TO CUSTOM CODE //
/*let arr=[[1,2],[2,3]]
let arr2=[]
for(let i=0;i<arr.length;i++){
    arr2=arr2.concat(arr[i])
}
console.log(arr2);
let arr3=[]
for(let i=0;i<arr2.length;i++){
    if(arr2.indexOf(arr2[i])==i){
        arr3.push(arr2[i])
    }
}
console.log(arr3);*/








/* Q.8) Write a program to find all even numbers from an array using filter(). */

// METHOD 1: REDUCE //

/*let a=[2,5,7,8,10,3,16,20]
let b=a.filter((item)=>{
    return item % 2==0
})
console.log(b);*/

// CONVERTING THIS TO CUSTOM CODE//
/*let a=[2,5,7,8,10,3,16,20]
let b=[]
for(let i=0;i<a.length;i++){
    if(a[i] % 2==0){
        b.push(a[i])
    }
}
console.log(b);*/

// METHOD 2: REDUCE //
/*let a=[2,5,7,8,10,3,16,20]
let b=a.reduce((acc,cur)=>{
    if(cur % 2==0){
        acc.push(cur)
    }
    return acc

},[])
console.log(b);*/

//CONVERTING THIS TO CUSTOM CODE//
/*let a=[2,5,7,8,10,3,16,20]
let b=[]
for(let i=0;i<a.length;i++){
    if(a[i] % 2==0){
        b.push(a[i])
    }
}
console.log(b);*/












// DAY 9: Arrays & Array Methods (Continued) //

/* Q.1) Write a program that sorts an array of numbers in ascending and descending order. */
/*let array=[1,16,3,5,6,20]
let array2=array.reduce((acc,cur)=>{
    if(array.sort){
        
    }
},[])
console.log(array2);*/



/* Q.2) Write a program to count how many times each element appears in an array. */

// METHOD 1:- REDUCE //
/*let a=["Somali","Sampurna","Somali","Piyali","Somali","Sampurna","Piyali"]
let b=a.reduce((acc,cur)=>{
    acc[cur]=(acc[cur] ||0)+1
    return acc

},{})
console.log(b);*/

// CONVERTING THIS TO CUSTOM CODE//
/*let a=["Somali","Sampurna","Somali","Piyali","Somali","Sampurna","Piyali"]
let b={}

for(let i=0;i<a.length;i++){
    b[a[i]] = (b[a[i]] || 0) + 1
}

console.log(b)*/





/* Q.3) Write a program to flatten a nested array (e.g., [1, [2, [3]]] → [1,2,3]). */

/* Q.4) Write a program to rotate an array by k positions to the right. */

/* Q.5) Write a program that finds the intersection of two arrays. */

// METHOD 1:- REDUCE //
/*let a=[1,2,3,4]
let b=[3,4,5,6]
let c=a.reduce((acc,cur)=>{
    if(b.includes(cur)){
        acc.push(cur)
    }
    return acc
    
},[])
console.log(c);*/


//CONVERTING THIS TO CUSTOM CODE//
/*let a=[1,2,3,4]
let b=[3,4,5,6]
let c=[]
for(let i=0;i<a.length;i++){
    if(b.includes(a[i])){
        c.push(a[i])
    }
}
console.log(c);*/

// METHOD 2:- FILTER //
/*let a=[1,2,3,4]
let b=[3,4,5,6]
let c=a.filter((item)=>{
    return item=b.includes(item)
    
})
console.log(c);*/

//CONVERTING THIS TO CUSTOM CODE//
/*let a=[1,2,3,4]
let b=[3,4,5,6]
let c=[]
for(let i=0;i<a.length;i++){
    if(b.includes(a[i])){
        c.push(a[i])

    }
    
}
console.log(c);*/





/* Q.6) Write a program to split an array into chunks of size n. */

/*let arr=[1,2,3,4,5,6,7,8,9,10]
let n=2
let arr2=arr.reduce((acc,cur)=>{
    

},[])*.

/* Q.7) Write a program that squares each element of an array using map(). */

// METHOD 1:- MAP
/*let arr=[2,3,5,8,10]
let arr2=arr.map((item)=>{
    return item * item
})
console.log(arr2);*/


//CONVERTING THIS TO CUSTOM CODE//
/*let arr=[2,3,5,8,10]
let arr2=[]
for(let i=0;i<arr.length;i++){
    arr2.push(arr[i] * arr[i])
}
console.log(arr2);*/


/* Q.8) Write a program to check if all elements in an array are unique. */


// METHOD 1:-FILTER //
/*let  a=[1,2,3,3,5,6]
let b=a.filter((item,index,arr)=>{
    return arr.indexOf(item)==index

})
console.log(b.length===a.length);*/

// CONVERTING THIS TO CUSTOM CODE //
/*let a=[1,2,3,5,6]
let b=[]
for(let i=0;i<a.length;i++){
    if(a.indexOf(a[i])==i){
        b.push(a[i])
    }
}
console.log(b.length===a.length);*/

// METHOD 2:-REDUCE //
/*let a=[1,2,3,5,6]
let b=a.reduce((acc,cur)=>{
    !acc.includes(cur)?acc.push(cur):""
    return acc

},[])
console.log(b.length===a.length);*/


// CONVERTING THIS TO CUSTOM CODE //
/*let a=[1,2,3,5,6]
let b=[]
for(let i=0;i<a.length;i++){
    if(!b.includes(a[i])){
         b.push(a[i])
    }
}
console.log(b.length===a.length)*/


 



