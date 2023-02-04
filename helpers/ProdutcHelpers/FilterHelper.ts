import { IProduto } from 'interface/IProduto';

function Compare(string1: string, string2: string) {
  const titleNormalized = string1.toLocaleLowerCase();
  const searchValueNormalized = string2.toLowerCase();
  return titleNormalized.includes(searchValueNormalized);
}

export const FilterHelper = (name: string, type: string, db: IProduto[]) => {
  let filteredDB = db;

  if (type !== 'Todos') {
    filteredDB = filteredDB.filter(
      (item) => item.Category?.toLowerCase() === type.toLowerCase()
    );
  }

  if (name !== '') {
    filteredDB = filteredDB.filter((item) => Compare(item.ProductTitle, name));
  }

  return filteredDB;
};
