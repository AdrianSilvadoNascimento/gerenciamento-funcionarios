import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string,
  email: string,
}

export default function MainBody() {
  const { register, handleSubmit, watch, formState: { errors } } =  useForm<Inputs>()
  
  function onSubmit(data: any): SubmitHandler<Inputs> {
    console.log('data', data)
    return data
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Digite seu nome" {...register('name', { required: true })} />
        {errors.name && <span>O nome é obrigatório</span>}
        <br />
        <input placeholder="Digite seu melhor e-mail" {...register('email', { required: true })} />
        {errors.email && <span>O e-mail é obrigatório</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}
