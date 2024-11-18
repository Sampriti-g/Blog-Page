import './Casestudy.css';

const Casestudy = ()=> {
    return (
        <>
            <section className="case-study">
    <div className="container-fluid">
      <h2 className='text-white'>Case Study</h2>
      <p className='text-white'>
        We guide global businesses through the challenges of developing purposeful technology that addresses their
        needs and advances their growth. We have established offices in India, the UAE, and the USA.
      </p>
      <button className="view-all-btn ">View All →</button>
      <div className="card-container w-100 mt-5">
        {/* <!-- Card 1 --> */}
        <div className="card">
          <div className="card-image">
            <img src="case 1.png" alt="Card 1" />
          </div>
          <div className="card-content">
            <h3>What is Ad Exposure and Why It Matters?</h3>
            <p>Lorem ipsum ipsum ipsum lorem ipsum lorem ipsum ipsum.</p>
            <a href="#">Read Full Article →</a>
          </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="card">
          <div className="card-image">
            <img src="case 1.png" alt="Card 2" />
          </div>
          <div className="card-content">
            <h4 className='text-white'>What is Ad Exposure and Why It Matters?</h4>
            <p>Lorem ipsum ipsum ipsum lorem ipsum lorem ipsum ipsum.</p>
            <a href="#">Read Full Article →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}

export default Casestudy;