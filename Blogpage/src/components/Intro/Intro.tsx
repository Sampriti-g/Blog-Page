import './Intro.css';

const Intro = ()=>{
    return (
        <>
          <div className="article-container">
  {/* <!-- Left Content Section --> */}
  <div className="article-content">
    <h1>What is Delivery Management and Why Does It Matter?</h1>
    <p className="meta">July 19, 2024 | By Author Name</p>
    <img src="image.png" alt="Delivery Management" className="main-image" />
  </div>

   <div className="cont mt-12">
   <section className="policy-details">
    <h2><b>Policy Details</b></h2>
    <p>
      You shall also receive an alphanumerical/numerical identification number for tracking your grievances with the customer care. 
      We assure You that ExMyB will make all reasonable endeavours to address the grievance made by You at the latest within 60 (Sixty) days from the date of receipt of the grievance.
    </p>
  </section>
  <section className="governance-framework flex">
   <div className="goverance-text">
   <h2><b>Governance Framework</b></h2>
    <p>
    You shall also receive an alphanumerical/numerical identification number for tracking your grievances with the customer care. We assure You that ExMyB will make all reasonable endeavours to address the grievance made by You at the latest within 60 (Sixty) days from the date of receipt of the grievance.
    </p>
    <p>
    A grievance will be treated as closed if You communicate Your acceptance of the response received from the customer care team or where You fail to respond to the response received from the customer care team within 7 (Seven) days. A grievance will be treated as closed if You communicate Your acceptance of the response received from the customer care team or where You fail to respond to the response received from the customer care team within 7 (Seven) days. A grievance will be treated as closed if You communicate Your acceptance of the response received from the customer care team or where You fail to respond to the response received from the customer care team within 7 (Seven) days.
    </p>
   </div>
  
  <div className="image-container">
    <img src="intro.jpg" alt="Delivery Management" className='intro-img' />
  </div>
  </section>
</div>
   </div>
        </>
    )
}

export default Intro;