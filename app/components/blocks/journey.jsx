import Container from "../common/container";
import SectionHeader from "../common/SectionHeader";
import JourneyCard from "../cards/JourneyCard";
const Journey = ({ journeyContent }) => {
  return (
    <section id="trip">
      <Container>
        <SectionHeader
          SectionHeaderContent={journeyContent.tripSectionHeader}
          centeredText={true}
        />
        <section className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mb-10">
          {journeyContent.trips.length > 0
            ? journeyContent.trips.map((trip) => (
                <JourneyCard journeyCardContent={trip} key={trip.id} />
              ))
            : null}
        </section>
      </Container>
    </section>
  );
};

export default Journey;
