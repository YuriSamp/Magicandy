import Card from '@ui/Card'
import { IProduto } from 'interface/IProduto'


export function CardRender(product: IProduto, index: number, Page: number) {
  let minIndex: number = (Page * 12) - 12
  let maxIndex: number = (Page * 12) - 1
  if (index >= minIndex && index <= maxIndex) {
    return (<Card
      key={product._id}
      _id={product._id}
      Src={product.Src}
      Alt={product.Alt}
      ProductTitle={product.ProductTitle}
      ProductPrice={product.ProductPrice}
    />)
  }
}