import { Button } from "../Button"
import { Images } from "../Images"
import { Text } from "../Text"
type DiscoverType = "discover"

interface DiscoverProps {
    type?: DiscoverType
}

export const Discover = ({ type = "discover" }: DiscoverProps) => {
    return (<>
        <div className={`Discover ${type} `}>

            <Text>
                Discover
            </Text>
            <Text type="text2">
                {"What’s new today"}
            </Text>
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




    </>
    )
}

