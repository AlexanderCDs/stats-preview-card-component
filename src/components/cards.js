/** 
* @author: Alexander Chi
* @description:
* @date: 30/Agosto/2021
**/  

export function Card(props) {
    const { title, description, items, src } = props
    return (
        <div className="card">
            <div className="card__body">
                <div className="card__title">
                    <h3>{title}</h3>
                </div>
                <div className="card__text">
                    {description}
                </div>
                <div className="card__footer">
                    {items.map((item, index) => {
                        return <Item key={`item-${index}`} number={item.number} text={item.text}/>
                    })}
                </div>
            </div>
            <div className="card__img">
                <img alt={title} width="540" height="446" src={src} />
            </div> 
        </div>
    );
}

export function Item(props) {
    const { number, text } = props
    return (
        <div className="card__items">
            <span className="card__number">{number}</span>
            <span className="card__text">{text}</span>
        </div>
    );
}

export default Card;
