import PersonDetails from "../../../../components/person-details/PersonDetails";
import {
  getMovieCredits,
  getPersonDetails,
  getPersonImages,
} from "../../../../lib/movies";

export default async function PersonPage({ params }) {
  const person = await getPersonDetails(params.personId);
  const personImages = await getPersonImages(params.personId);
  const credits = await getMovieCredits(params.personId);
  return (
    <PersonDetails
      person={person}
      images={personImages.profiles}
      credits={credits.cast}
    />
  );
}
