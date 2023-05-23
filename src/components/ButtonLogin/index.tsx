import { Button } from "../Button"
import Link from "next/link"


type ButtonLoginType = "btnlogin1" | "btnlogin2"

interface ButtonLoginProps {
    type?: ButtonLoginType

}

export const ButtonLogin = ({ type = "btnlogin1" }: ButtonLoginProps) => {
    return (<>
        <div className={`btnlogin ${type}`}>
            <Link href={"/login"} className="linkBtn">
                <Button type="btn1">
                    Log in
                </Button>
            </Link>
            <Link href={"/register"} className="linkBtn">
            <Button type="btn2">
                Register
            </Button>
            </Link>

        </div>

    </>)
}