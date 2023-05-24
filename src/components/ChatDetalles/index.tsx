import { BackSegundo } from "../BackSegundo"
import { ListMessage } from "../ListMessage"
import { Text } from "../Text"


type ChatDetallesType = "ChatDetalles"

interface ChatDetallesProps {
    type?: ChatDetallesType


}

export let ChatDetalles = ({ type = "ChatDetalles" }: ChatDetallesProps) => {
    return (<>
        <div className={`ChatDetalles ${type}`}>
            <div className="chatmessage" >
                <BackSegundo />
                <div className="usuario">
                    <Text type="text2">
                        Marta
                    </Text>

                </div>


            </div>

            <ListMessage />

        </div>


    </>)
}