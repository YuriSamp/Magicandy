import { FormataBRL } from 'utils/ConvertCurrency'

export function Subtotal(Quantity: number, preco: number) {

  if (Quantity === 1) {
    return <h3 className='text-lg'>Total ({Quantity} item) : {FormataBRL(preco)}</h3>
  }
  if (Quantity > 1) {
    return <h3 className='text-lg'>Total ({Quantity} itens) : {FormataBRL(preco)}</h3>
  }
  if (Quantity === 0) {
    return <h3 className='text-lg'>Nenhum item no carrinho</h3>
  }
}