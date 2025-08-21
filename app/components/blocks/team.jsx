import Container from "../common/container";
import SectionHeader from "../common/SectionHeader";
import MemberCard from "../cards/MemberCard";
const Team = ({ teamContent }) => {
  if (!teamContent) return null;
  return (
    <section className="py-20" id="team">
      <Container>
        <SectionHeader
          SectionHeaderContent={teamContent.teamHeader}
          centeredText={true}
        />
        <section className="max-w-5xl mx-auto flex flex-wrap items-center justify-center mt-6 mb-10">
          {teamContent.team_members.length > 0
            ? teamContent.team_members.map((tm) => (
                <MemberCard MemberCardContent={tm} key={tm.id} />
              ))
            : null}
        </section>
      </Container>
    </section>
  );
};

export default Team;
