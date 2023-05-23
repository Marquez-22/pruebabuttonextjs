import { ButtonLogin } from "../ButtonLogin"
import { LoadApp } from "../LoadApp"

type LoadLoginRegisterType = "load1"

interface LoadLoginRegisterProps {
    type?: LoadLoginRegisterType

}

export const LoadLoginRegister = ({ type = "load1" }: LoadLoginRegisterProps) => {
    return (<>
        <div className={`load ${type}`}>
            <LoadApp />
            <ButtonLogin />
        </div>

    </>)
}