type LoadAppType="loadapp" 

interface LoadAppProps{
    type?:LoadAppType
    
    
}

export const LoadApp =({type="loadapp"}:LoadAppProps)=>{
    return(<>
    <div className={`loadapp ${type}`}>
        <img src="/images/loadAppFondo.png" className="fondo"></img>
        <img src="/images/logo.png" className="logo"></img>

    </div>
    
    </>)
}