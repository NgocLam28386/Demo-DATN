import React, { useEffect, useState } from 'react';


import './HomeBanner.scss';
import { Link } from 'react-router-dom';
function HomeBanner(props) {


    return (

        <section className="home_banner_area mb-40" >
            {/* class home_banner_area trong file style.css chứa background banner  */}
            <div className="box-banner" style={{ backgroundImage: `url(${props.image})`,backgroundPosition:'center' }}>
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div className="banner_content row">
                            <div className="col-lg-12">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>




    );

}

export default HomeBanner;