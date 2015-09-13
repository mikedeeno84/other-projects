/* The flatten function already exists in Javascript and was more of an exercise for myself.  The function will take the sum of all elements in an array including elements within nested arrays no matter the depth
*/

var arr=[1,[2,[3,4]],[5,6]];    //input array with many nested arrays
function flat_sum(input){
    sum=0;        //holds the sum
    for (var x=0;x<input.length;x++){
        if(Array.isArray(input[x])) 
            sum+=flat_sum(input[x]);   //if the selected element is an array run flat_sum on that element recursively and add it to the sum
        else
            sum+=input[x];            //if the element is not an array add the element to the sum 
    }
    return sum;
}
console.log(flat_sum(arr));
