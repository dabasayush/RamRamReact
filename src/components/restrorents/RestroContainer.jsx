import { Button, Col, Container, Row } from "react-bootstrap";
import RestroCard from "../cards/RestroCard";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import restroData from "../../common/mockData";
import { useEffect, useState } from "react";

const RestroContainer = () => {
    const [topRestro, setTopRestro] = useState(restroData)

    useEffect(() => {
        apiData();
    }, []);

    const apiData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const result = await response.json();
        console.log("result: " , result)
    }


    // const CustomNextArrow = (props) => {
    //     const { onClick } = props;
    //     return (
    //         <div className="custom-next-arrow" onClick={onClick}>
    //             <GrFormNext />
    //         </div>
    //     );
    // }
    // const CustomPrevArrow = (props) => {
    //     const { onClick } = props;
    //     return (
    //         <div className="custom-prev-arrow" onClick={onClick}>
    //             <GrFormPrevious />
    //         </div>
    //     );
    // }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        // nextArrow: <CustomNextArrow />,
        // prevArrow: <CustomPrevArrow />,
        arrow: false,
        responsive:[
            {
                breakpoint: 768,
                settings:"unslick",
                settings: {
                    arrow: false,
                    autoplay: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
        
      };
      
    
    return(
        <Container>
            <Row className="restros">
                <h1 className="restro-name">
                    Restaurants
                </h1>
            </Row>
            <Row>
                <Col className="pt-5 pb-3">
                    <Button className="top-restro-btn"
                        onClick={() => {
                            const topRestroList = restroData.filter((res) => res.info.avgRating > 4);
                            setTopRestro(topRestroList)
                    }}>
                        Top Rated Restaurants &#9733;
                    </Button>
                    <Button className="all-restro-btn"
                        onClick={() => {
                            const topRestroList = restroData ;
                            setTopRestro(topRestroList)
                    }}>
                        All Restaurants &#9733;
                    </Button>
                </Col>
                <Col>
                    <Slider className="restro-slider" {...settings}>
                        {topRestro.map((data, index) => (
                            <RestroCard key={index} resData={data} />
                        ))}
                    </Slider>
                </Col>
            </Row>
        </Container>
    )
}
export default RestroContainer;