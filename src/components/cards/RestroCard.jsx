import { Card } from "react-bootstrap";
import {CDN_URL} from "../../common/constants"

const RestroCard = ({resData}) => {
    const {name, avgRating, cuisines, cloudinaryImageId,} = resData.info;
    return (
        <Card className="restro-card mb-5" style={{ maxWidth: '18rem', overflow: 'hidden' }}>
            <div className="restro-card-img">
                <Card.Img className="res-card-img"style={{ maxHeight: '100%', objectFit: 'cover' }} variant="top" src={CDN_URL+ cloudinaryImageId} />
            </div>
            <Card.Body className="restro-text">
                <h5 className="">{name}</h5>
                <h6 > &#9733;{avgRating} &#x2022; {resData.info.sla.deliveryTime} mins </h6>
                <p>{cuisines.join(",")}</p>
            </Card.Body>
        </Card>
    )
}

export default RestroCard;