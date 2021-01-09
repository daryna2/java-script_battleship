function myfunc(len) {
  var i=2;
  var sum=1;
  if (len==0) {
    return 0;
  }
  if (len==1) {
  return 1;
  } else {
    while (i <= len) {
      sum=sum*i;
   i++;
}
 return sum;
}

}
console.log(myfunc(5));
