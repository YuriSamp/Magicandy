import { FormataBRL } from 'src/utils/ConvertCurrency'

export function Subtotal(Quantity: number, preco: number) {

  if (Quantity === 1) {
    return <h3 className='text-lg'>Subtotal ({Quantity} item) : {FormataBRL(preco)}</h3>
  }
  if (Quantity > 1) {
    return <h3 className='text-lg'>Subtotal ({Quantity} itens) : {FormataBRL(preco)}</h3>
  }
  if (Quantity === 0) {
    return <h3 className='text-lg'>Nenhum item no carrinho</h3>
  }
}
