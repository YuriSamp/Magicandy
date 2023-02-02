import Fields from '@ui/Fields/Fields'

export const FormularioCheckout = () => {
  return (
    <div className='flex gap-24'>
      <div>
        <Fields
          Name="name"
          Label="Nome *"
          Type="text"
        />
        <Fields
          Name="Email"
          Label="E-mail "
          Type="email"
        />
        <Fields
          Name="cep"
          Label="Cep *"
          Type="text"
        />
      </div>
      <div>
        <Fields
          Name="Sobrenome"
          Label="Sobrenome "
          Type="text"
        />
        <Fields
          Name="cpf"
          Label="CPF *"
          Type="text"
        />
        <Fields
          Name="telephone"
          Label="Telefone *"
          Type="tel"
        />

      </div>
    </div>
  )
}