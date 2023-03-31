import BrandSection from "./brandSection"
import ExploreWomen from "./exploreWomen"
import ExploreMen from "./exploremen"
import Shoes from "./shoes"
import Artist from "./artist"
import Versity from "./Versity"
import MiddlesectionWomen from "./middleSectionWomen"
import MiddlesectionMen from "./middleSectionMen"
import TopSection from "./topsection"

function LandingPage() {

    return (
        <>
            <TopSection />
            <MiddlesectionWomen />
            <MiddlesectionMen />
            <Versity />
            <Artist />
            <Shoes />
            <ExploreMen />
            <ExploreWomen />
            <BrandSection />
        </>
    )
}

export default LandingPage