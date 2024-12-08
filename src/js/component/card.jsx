import React from "react";
const Card = (props) => {
    console.log(props.cardInfo.title)
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 overflow-hidden" id={props.cardInfo.id}>
            <div className="card mt-4" style={{ width: "auto", margin: "0", padding: "0" }}>
                <img src="https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg" className="card-img-top" alt="..." style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between" style={{ height: "250px" }} >
                    <div>
                        <h5 className="card-title fw-bold">{props.cardInfo.title}</h5>
                        <p className="card-text">
                            {props.cardInfo.description}
                        </p>
                    </div>
                    <a href="#" className="btn btn-primary custom-button mx-auto" style={{ width: "60%" }}>
                        Find out more!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;