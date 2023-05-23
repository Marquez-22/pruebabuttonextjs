import { UsersChats } from "../UsersChats"
import { Text } from "../Text"

type ListChatsType = "ListChats"

interface ListChatsProps {
    type?: ListChatsType


}

export const ListChats = ({ type = "ListChats" }: ListChatsProps) => {
    return (<>
        <div className={`listchats ${type}`}>
            <div className="Chts">
                <Text type="text2">Chats</Text>
            </div>


            <UsersChats
                avatar="/images/avatar1.png"
                username="Andrew"
                msg="Thank you! That was very helpful!"
            />
            <UsersChats
                avatar="/images/cat.png"
                username="Marta"
                msg="Beautiful!"
            />
            <UsersChats
                avatar="/images/avatar2.png"
                username="Sebastian"
                msg="Thank you!"
            />
            <UsersChats
                avatar="/images/avatar3.png"
                username="Estefania"
                msg="Hello!"
            />
            <UsersChats
                avatar="/images/avatar4.png"
                username="Nicol"
                msg="Flower!"
            />







        </div>


    </>)
}