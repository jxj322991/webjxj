  // 快速排序

  // quit part swap

  function quick(arr, left, right) {
      var length = arr.length;
      var part_index;
      var left = typeof left != 'number' ? 0 : left;
      var right = typeof right != 'number' ? length - 1 : right;
      if (length < right) {
          part_index = part(arr, left, right);
          quick(arr, left, part_index - 1);
          quick(arr, part_index + 1, right);
      }
      console.log(arr) ;
  }

  function part(arr, left, right) {
      var pivot = left;
      var index = pivot + 1;
      for (var i = index; i <= right; i++) {
          if (arr[i] < arr[pivot]) {
              arr[i] = [arr[index], arr[index] = arr[i]][0];
              index++;
          }
      }
      arr[pivot] = [arr[index - 1], arr[index - 1] = arr[pivot]][0];
      return index - 1;
  }
  var arr = [1, 11, 3, 33, 2, 22];
  quick(arr);