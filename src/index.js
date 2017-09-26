module.exports = function multiply(first, second) {
  if (first.length < second.length) {
    var temp = second;
    second = first;
    first = temp;
  }
  var a1 = first.split('');
  var a2 = second.split('');
  var arr = [];
  var rlen = a1.length + a2.length;
  var i, j;

  for (i = 0; i < rlen; i++) {
    arr[i] = 0;
  }

  for (i = 0; i < a2.length; i++) {
    for (j = 0; j < a1.length; j++) {
      arr[1 + j + i] += a1[j] * a2[i];
    }
  }

  for (i = rlen - 1; i > 0; i--) {
    if (arr[i] >= 10) {
      arr[i - 1] += Math.floor(arr[i] / 10);
      arr[i] %= 10;
    }
  }

  if(arr[ 0 ] == 0) {
    delete arr[0];
  }


    return arr.join( '' );
}
