import { Button } from "../Button"
import { CircleImages } from "../CircleImages"
import { Images } from "../Images"
import { Text } from "../Text"

type ContentProfileType = "ContentProfile"

interface ContentProfileProps {
    type?: ContentProfileType


}

export const ContentProfile = ({ type = "ContentProfile" }: ContentProfileProps) => {
    return (<>
        <div className={`ContentProfile ${type}`}>
            <CircleImages
                url='/images/perfil.png'
            />
            <Text type="text1">
                Fatima
            </Text>
            <Text type="text2">
                Cucuta, Norte de Santander
            </Text>

            <Button type="btn2">
                Follow Fatima
            </Button>
            <Button type="btn1">
                Message
            </Button>
            <Images
                type="images2"
                images={[
                    "/images/cat.png",
                    "/images/ovejas.jfif",
                    "/images/patos.jpg",
                    "/images/cat.png",
                    "/images/ovejas.jfif",
                    "/images/patos.jpg",
                    "/images/cat.png",
                    "/images/ovejas.jfif",
                    "/images/patos.jpg",
                    "/images/cat.png",
                    "/images/ovejas.jfif",
                    "/images/patos.jpg",
                ]}
            />
            <Button type="btn1">
                See More
            </Button>




        </div>

    </>)
}
