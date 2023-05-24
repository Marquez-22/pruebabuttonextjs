import { CircleImages } from "../CircleImages"

import { Text } from "../Text"

type UserInfoType = "userinfo"

interface UserInfoProps {
    type?: UserInfoType
    redsocial: string
    img?: string
    username?: string

}

export const UserInfo = ({ img = "", redsocial = "", username = "", type = "userinfo" }: UserInfoProps) => {
    return (<>
        <div className={`userinfo ${type}`}>
            <div className="img">
                <CircleImages
                    url={img}
                />
            </div>
            <div className="username">
                <Text type="text2">
                    {username}
                </Text>
            </div>
            <div className="redes">
                <Text type="text3">
                    {redsocial}
                </Text>
            </div>
        </div>

    </>)
}