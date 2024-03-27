import React from 'react'
import { NavLink } from 'react-router-dom'

function LandingPage() {

  return (
    <div className='landing'>
      <div className='wrapper'>
      </div>
      

      <br />
      <div className='butn'>
        <NavLink to='/userlogin'><button className='btn btn-info align-item-center'><b>Get Estimate</b></button></NavLink>
      </div>


      <br />
      <p className='about' id='aboutus'><b>About Us</b></p>
      <div className="card text-justify border-light">
        <div className="card-body">
          <p className='para' style= {{paddingLeft: '10px', paddingRight: '10px'}}>Welcome to MedJourney Marvels, where we redefine healthcare by offering a unique and comprehensive medical tourism experience.At MedJourney Marvels,we believe that your journey to well-being should be as enriching as the destination itself.Our platform is your gateway to renowed medical experts,ensuring you receive the highest standard of care tailored to your unique health goals.With a network of top-tier hospitals,expert medical professionals and personalized care plans,we strive to provide patients with access to the finest healthcare services.Our mission is to make medical travel accessible,ansuring patients receive top-notch treatment while enjoying personalized care.With a focus on excellence,we strive to be your trusted partner in navigating the realm of medical tourism.</p>
          <br />
        </div>
      </div>
      <p className='network' id='hospitals'><b>Our Hospitals Network</b></p>

      <div className="container">
        <div className="row">

          <div className="col-lg-4 mb-3 d-flex align-items-stretch" key="mumbai" >
            <div className="card" id='country-info'>
              <img src="https://media.istockphoto.com/id/1390163309/photo/beautiful-gateway-of-india-near-taj-palace-hotel-on-the-mumbai-harbour-with-many-jetties-on.webp?b=1&s=170667a&w=0&k=20&c=RySWzx7z0NQaemti36zzWk2KhG0JrbnhBLL1T5ggyHA="/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Mumbai</h5>
                <p className="card-text mb-4">Mumbai, city, capital of Maharashtra state, southwestern India. It is the country's financial and commercial centre and its principal port on the Arabian Sea.
                  Located on Maharashtra's coast, Mumbai is India's most-populous city, and it is one of the largest and most densely populated urban areas in the world.</p>
                <a href="https://en.wikipedia.org/wiki/Mumbai" target="_blank" className="btn btn-primary mt-auto align-self-start">Click for more</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3 d-flex align-items-stretch" key="banglore" >
            <div className="card" id='country-info'>
              <img src="https://t3.ftcdn.net/jpg/03/41/95/04/360_F_341950409_Gq1sN2OqYgRZrUTvPohSmgQVubaqzlA5.jpg" className="card-img-top" alt="Card Image" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Banglore</h5>
                <p className="card-text mb-4">Bangalore, also referred to as Bengaluru, is the capital of the Indian state, Karnataka.It is also known as "Garden City" for its gardens and parks and was once called a Pensioner's Paradise.
                  Located on the Deccan Plateau in the south-eastern part of Karnataka. Bangalore is India's third most populated city.</p>
                <a href="https://en.wikipedia.org/wiki/Bangalore" target="_blank" className="btn btn-primary mt-auto align-self-start">Click for more</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3 d-flex align-items-stretch" key="chennai" >
            <div className="card" id='country-info'>
              <img src="https://t3.ftcdn.net/jpg/02/75/03/42/360_F_275034287_RwBdkQQIvoYjxvHPocTR5MBrgQXFaZqr.jpg" className="card-img-top" alt="Card Image" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Chennai</h5>
                <p className="card-text mb-4">Chennai, city, capital of Tamil Nadu state, southern India,Known as the “Gateway to South India,Chennai is a major administrative and cultural centre.Chennai has one of the highest penetrations of high-speed Internet access in India and is one of a handful of cities in the country connected to submarine fibre-optic cables.</p>
                <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank" className="btn btn-primary mt-auto align-self-start">Click for more</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3 d-flex align-items-stretch" key="kolkata" >
            <div className="card" id='country-info'>
              <img src="https://t3.ftcdn.net/jpg/01/05/09/50/360_F_105095059_tTBzNg99vYmQxZAnQIGyxTSxDf0j60Dq.jpg" className="card-img-top" alt="Card Image" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Kolkata</h5>
                <p className="card-text mb-4">Kolkata, city, capital of West Bengal state,is the centre of India's large jute-processing industry.Hundreds of hospitals, private clinics, free dispensaries run by the Kolkata Municipal Corporation and charitable trusts, and state-operated polyclinics serve the Kolkata region. The number of doctors per 1,000 persons is greater in Kolkata than in most parts of the country.</p>
                <a href="https://en.wikipedia.org/wiki/Kolkata" target="_blank" className="btn btn-primary mt-auto align-self-start">Click for more</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3 d-flex align-items-stretch" key="delhi" >
            <div className="card" id='country-info'>
              <img src="https://t4.ftcdn.net/jpg/02/35/62/81/360_F_235628116_t1qVYt8OPkPAOg0AaiBbBQHkopamzDLj.jpg" className="card-img-top" alt="Card Image" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Delhi</h5>
                <p className="card-text mb-4">Delhi, city and national capital, and union territory, north-central India.Delhi is of great historical significance as an important commercial, transport, and cultural hub, as well as the political centre of India.Hospitals in Delhi are numerous; many of the larger facilities are administered by the national government or by the national capital territory.</p>
                <a href="https://en.wikipedia.org/wiki/Delhi" target="_blank" className="btn btn-primary mt-auto align-self-start">Click for more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default LandingPage
