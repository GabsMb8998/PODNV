import Button from "@/components/Button/Index"
import Input from "@/components/Input/Index"
import Select from "@/components/Select/Index"

import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

const schema = z.object({
    value: z.number().nonnegative('Insira um número valido').min(0.01, 'Campo Obrigatório'),
    category: z.string().nonempty('Campo obrigatório'),
    description: z.string().nonempty('Campo Obrigatório')
})

type CreateDespesaFormData = z.infer<typeof schema>

function ModalAddDespesa(){

    const {
        register,
        handleSubmit,
        control,
        formState: {errors}
    } = useForm <CreateDespesaFormData>({
        resolver: zodResolver(schema)
    })

    console.log(errors)

    async function validation(params: any) {
        console.log(params)
    }

    return(
        <>
        <form onSubmit={handleSubmit(validation)}></form>
            <Input width="100" placeholder="R$ 00,00" type="number" {...register('value')}>
                <span>valor:</span>
            </Input>
            <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({field})=>(
                <Select {...field} onChange={(val: string| number)=>field.onChange(val)}>
                    <span>categoria</span>
                </Select>

            )}
            />

            <Input placeholder="Ex.: Aniversário mari" {...register('description')}>
                <span>descrição:</span>
            </Input>

            <div className="self-end">
                <Button variant="tertiary" label="salvar" type="submit"/>
            </div>

        </>
    )
}

export default ModalAddDespesa