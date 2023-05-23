
import { ReactNode } from "react"
import { Input } from "../Input"
import { Button } from "../Button"
import { Text } from "../Text"
import { Back } from "../Back"

type FormRegisterType = "FormRegister"


interface FormRegisterProps {
    type?: FormRegisterType


}

export const FormRegister = ({ type = "FormRegister" }: FormRegisterProps) => {
    return (<>
        <div className={`FormRegister ${type} `}>
            <Back />
            <Text>
                Register
            </Text>


            <Input
                name="Email"
                placeholder='Email'
                typeinput="email"
            />
            <Input

                name="Password"
                placeholder='Password'
                typeinput="password"

            />
            <Button type="btn2">
                Next

            </Button>





        </div>


    </>)
}