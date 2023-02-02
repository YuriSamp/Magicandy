import { IProduto } from 'interface/IProduto';

function Compare(string1: string, string2: string) {
  const titleNormalized = string1.toLocaleLowerCase();
  const searchValueNormalized = string2.toLowerCase();
  return titleNormalized.includes(searchValueNormalized);
}

export const FilterHelper = (name: string, type: string, db: IProduto[]) => {
  if (type === 'Todos' && name === '') {
    return db;
  }

  if (type !== 'Todos' && name === '') {
    const Products = db.filter(
      (item) => item.Category?.toLowerCase() === type.toLowerCase()
    );
    return Products;
  }

  if (type === 'Todos' && name !== '') {
    const dbSearch = db.filter((item) => Compare(item.ProductTitle, name));
    return dbSearch;
  }

  if (type !== 'Todos' && name !== '') {
    const Products = db.filter(
      (item) => item.Category?.toLowerCase() === type.toLowerCase()
    );
    const dbSearch = Products.filter((item) =>
      Compare(item.ProductTitle, name)
    );
    return dbSearch;
  } else {
    return db;
  }
};
