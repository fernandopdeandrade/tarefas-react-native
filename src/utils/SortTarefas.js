const SortTarefas = (tarefas) => {
  tarefas.sort((a, b) => {
    const dateAMonth = a.date.split('/')[1];
    const dateBMonth = b.date.split('/')[1];
    const dateADay = a.date.split('/')[0];
    const dateBDay = b.date.split('/')[0];
    const dateAYear = a.date.split('/')[2];
    const dateBYear = b.date.split('/')[2];
    
    if (dateAYear > dateBYear) {
      return 1;
    } else if (dateAYear < dateBYear) {
      return -1;
    } else if (dateAYear === dateBYear) {
      if (dateAMonth > dateBMonth) {
        return 1;
      } else if (dateAMonth < dateBMonth) {
        return -1;
      } else if (dateAMonth === dateBMonth) {
        if (dateADay > dateBDay) {
          return 1;
        } else if (dateADay < dateBDay) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  });

  return tarefas;
}

export default SortTarefas;