const scan = (ary) => {
    let count = 0;
    ary.forEach((str) => {
      if (str === 'contraband') count++;
    });
    return count;
  };