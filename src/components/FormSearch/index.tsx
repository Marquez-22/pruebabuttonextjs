import { Button } from "../Button"
import { Images } from "../Images"
import { Input } from "../Input"
import { Text } from "../Text"

type FormSearchType = "FormSearch"


interface FormSearchProps {
    type?: FormSearchType


}

export const FormSearch = ({ type = "FormSearch" }: FormSearchProps) => {
    return (<>

        <div className={`FormSearch ${type} `}>
            <Text>
                Search
            </Text>
            <Input
                name="Search"
                placeholder='Search'
                typeinput="search"
            />
            <Text type="text2">
                All Results
            </Text>
            <Images

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