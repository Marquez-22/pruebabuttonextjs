type CircleImagesType = "CircleImages1" |"CircleImages2"


interface CircleImagesProps {
    type?: CircleImagesType
    url?:string



}

export const CircleImages = ({ url="",type = "CircleImages1" }: CircleImagesProps) => {
    return (<>
      <div className={`CircleImages ${type} `}>
        <img src={url} className="circle"></img>



      </div>
    </>
)}    

      