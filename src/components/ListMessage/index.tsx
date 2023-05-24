import { Message } from "../Message"
import { Text } from "../Text"

type ListMessageType = "listmessage"

interface ListMessageProps {
    type?: ListMessageType

}

export const ListMessage = ({ type = "listmessage" }: ListMessageProps) => {
    return (<>
        <div className={`ListMessage ${type}`}>
                <Message
                    images="/images/cat.png"
                    text={"Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"}
                    by="me"
                />
                <Message
                    images="/images/avatar1.png"
                    text={" I’ve been trying to capture the same thing for a few months and would love some tips!"}

                    by="you"
                />
                <Message
                    images="/images/cat.png"
                    text={"Really "}

                    by="me"
                />
                <Message
                    images="/images/avatar1.png"
                    text={"Yes,tanks"}

                    by="you"
                />


            </div>




        

    </>)
}