const scan = (ary) => {
    const solution = [];
    ary.forEach((item, idx) => {
      if (item === 'contraband') solution.push(idx);
    });
    return solution;
  };