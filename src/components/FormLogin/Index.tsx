
import { ReactNode } from "react"
import { Input } from "../Input"
import { Button } from "../Button"
import { Text } from "../Text"
import { Back } from "../Back"

type FormLoginType = "FormLogin"


interface FormLoginProps {
    type?: FormLoginType


}

export const FormLogin = ({ type = "FormLogin" }: FormLoginProps) => {
    return (<>
        <div className={`FormLogin ${type} `}>
            <Back />
            <Text>
                Log In
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
                Log In

            </Button>





        </div>


    </>)
}