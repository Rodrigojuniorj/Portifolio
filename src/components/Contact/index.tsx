"use client"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../Input'
import { Controller, useForm } from 'react-hook-form'
import { Textarea } from '../Textarea'
import { BiSolidSend } from "react-icons/bi";

const contactFormSchema = yup.object({
  email: yup
    .string()
    .email('Por favor, insira um e-mail válido')
    .required('O E-mail é obrigatório'),
  name: yup.string().required('O nome é obrigatório'),
  message: yup
    .string()
    .required('O nome é obrigatório')
})

type contactFormData = yup.InferType<typeof contactFormSchema>

export function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormData>({
    resolver: yupResolver(contactFormSchema),
  })

  async function onSubmit(data: contactFormData){
    console.log(data)
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    console.log(response)
  }

  return (
    <form className='mt-20 flex flex-wrap justify-center items-center gap-10 w-[39rem] m-auto' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Informe seu nome"
            placeholder="Rodrigo Junior"
            valueText={value}
            onChangeText={onChange}
            errorMessage={errors.name?.message}
          />
        )}
      />
      
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Informe seu e-mail"
            placeholder="jhondoe@email.com"
            valueText={value}
            onChangeText={onChange}
            errorMessage={errors.email?.message}
          />
        )}
      />

      <div className='w-full mt-6'>
        <Controller
          control={control}
          name="message"
          render={({ field: { onChange, value } }) => (
            <Textarea
              label="Mensagem"
              placeholder="Oi, eu acho que precisamos de um sistema de design para nossos produtos na Empresa X. Em quanto tempo você pode entrar para discutir isso?"
              valueText={value}
              onChangeText={onChange}
              errorMessage={errors.message?.message}
            />
          )}
        />
      </div>

      <div className='w-full'>
        <button type='submit' className="bg-primary duration-200 hover:brightness-110 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2">
          <BiSolidSend size={20} />
          <span>Enviar</span>
        </button>
      </div>
    </form>
  )
}