import { CircleImages } from "../CircleImages"
import { Text } from "../Text"

type MessageType = "Message"

interface MessageProps {
    type?: MessageType
    text?: string
    images?: string

    by?:"me" | "you"
}

export const Message = ({ text = "", images = "", type = "Message" ,by="me" }: MessageProps) => {
    return (<>
        <div className={`message1 ${type} ${by}`} >
            <div className="userchats">
                <CircleImages
                    url={images}
                />
            </div>
            <div className="texto">
                <Text type="text3">
                    {text}
                </Text>
            </div>





        </div>

    </>)
}