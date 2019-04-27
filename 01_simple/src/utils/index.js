export const getNexId = arr => {
  let maxId = 0;
  arr.forEach(item => {
    if (maxId < item.id) maxId = item.id;
  });
  return [{ id: maxId + 1 }, ...arr];
};
