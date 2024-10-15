import './BeneathBlade.css'

function Blade() {
    return (
        <div>
            <div className='bike-trip-container'>
                <div className='map-desc'> 
                      <p> In 2024, I bike packed across the United States.  </p>  
                </div>
                <div className='map-iframe'> 
                    <iframe src="/gpx_routes_map.html" className='map'> </iframe>
                </div>
            </div>
            <div className='casco-bay-trail-container'>

            </div>
            <div className='nh-mountains'> 

            </div> 

        </div>
    );
}

export default Blade;