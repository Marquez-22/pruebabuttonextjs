type imagesType = "images"|"images2"


interface imagesProps {
    type?: imagesType
    images?:string[]
    //imgase = ["/img/1" , "/img/2"]

}

export const Images = ({ images=[], type = "images" }: imagesProps) => {
    return (<>
        <div className={`images ${type} `}>
        {images.map((elemento,index)=>{
            return(<>
            <img key={index} src={elemento} className="imagen"></img>
            
            
            </>)

        })}
        </div>


        
        
        
        </>)
}