import './stylesheets/Image.css'
export default function Image({src}){
    return(
        <div className="product-img">
            <img src={src} alt="" />
        </div>
    )
}