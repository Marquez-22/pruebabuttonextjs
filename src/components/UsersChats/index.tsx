import { CircleImages } from "../CircleImages"
import { Text } from "../Text"

type UsersChatsType = "userschats1" | "userschats2"

interface UsersChatsProps {
    type?: UsersChatsType
    avatar?: string
    username?: string
    msg?: string
}

export const UsersChats = ({ avatar = "", username = "", msg = "", type = "userschats1" }: UsersChatsProps) => {
    return (<>
        <div className={`UsersChats ${type}`}>
            <div className="avatar">
                <CircleImages
                    url={avatar}
                />
            </div>

            <div className="username">
                <Text type="text2">
                    {username}
                </Text>
            </div>

            <div className="message">
                <Text type="text3">
                    {msg}
                </Text>
            </div>


        </div>
    </>)
}
