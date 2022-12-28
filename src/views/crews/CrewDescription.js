import { useSearchParams } from 'react-router-dom';

export default function CrewDescription({ id }) {
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const crewId = searchParams.get('id');
  return (
    <div className='content'>
      <h1>This the crew view for the crew: {crewId}</h1>
    </div>
  );
}
