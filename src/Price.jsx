export default function Price({oldPrice, newPrice}){
    return (
        <div className="price">
            <p>{oldPrice}</p>
            <p>{newPrice}</p>
        </div>
    );

}