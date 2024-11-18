import Casestudy from "../Casestudy/Casestudy";
import Driving from "../DRivingresults/Drivingresults";
import Intro from "../Intro/Intro";
import PartnerNewsletter from "../Newsletter/Newsletter";
import PartnerContact from "../PartnerContact/PartnerContact";

const BlogPage = ()=> {
    return (
        <>
           <Intro />
           <Casestudy/>
           <Driving/>
           <PartnerNewsletter/>
           <PartnerContact/>
        </>
    )
}

export default BlogPage;