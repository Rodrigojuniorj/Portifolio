"use client"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../Input'
import { Controller, useForm } from 'react-hook-form'
import { Textarea } from '../Textarea'
import { BiSolidSend } from "react-icons/bi";
import { Bounce, toast } from 'react-toastify'
import { useState } from 'react'

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
  const [loading, setLoading] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<contactFormData>({
    resolver: yupResolver(contactFormSchema),
  })

  async function onSubmit(data: contactFormData) {
    setLoading(true)
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(response)
    if (response.status == 200) {
      toast.success('E-mail enviado com sucesso!');
      reset({
        email: '',
        message: '',
        name: ''
      })
    } else {
      toast.error('Algo deu errado, tente novamente!');
    }
    setLoading(false)
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
        <button
          type='submit'
          className={`bg-primary duration-200 hover:brightness-110 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={loading}
          style={{ width: loading ? 'auto' : 'auto' }}
        >
          {loading ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm8 4.416a8 8 0 01-8-8h-4a12 12 0 0012 12v-4zm-9.102-6.748l1.846-1.385a1 1 0 011.3 1.532l-2.346 1.76a1 1 0 01-1.8-.907zM14 12h2c0-1.149.16-2.256.445-3.313a1 1 0 00-1.986-.374C14.618 9.537 14 10.694 14 12z"
              ></path>
            </svg>
          ) : (
            <BiSolidSend size={20} />
          )}
          <span>{loading ? 'Enviando' : 'Enviar'}</span>
        </button>
      </div>
    </form>
  )
}