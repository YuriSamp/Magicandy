import { FormularioCheckout } from '../InformacaoUsuario';
import { FormularioCartao } from '../MetodoPagamento';
import { RevisarPedido } from '../RevisarPedido';

interface Props {
  Passo: number
}

export default function CheckoutRender({ Passo }: Props) {
  return (
    <main className=' bgMovingEffect flex flex-col justify-center items-center p-12 py-16'>
      <div className='flex rounded-lg border-2 border-fontPurple overflow-hidden'>
        <form
          className='flex flex-col gap-4 w-full  bg-backgroundWhite p-10 rounded-r-lg'
        // onSubmit={onSubmitHandler}
        >
          <div className='pt-4 text-center'>
            <h1 className='text-2xl font-kalam text-fontPurple font-semibold'>Preencha as informações abaixo</h1>
          </div>
          {Passo == 1 && <FormularioCheckout />}
          {Passo == 2 && <FormularioCartao />}
          {Passo == 3 && <RevisarPedido />}
        </form>
      </div>
    </main>
  )
}