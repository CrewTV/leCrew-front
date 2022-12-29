import { useParams } from 'react-router-dom';

export default function CrewDescription({}) {
  const { id } = useParams();
  return (
    <div className='content'>
      <h1>This the crew view for the crew: {id}</h1>
    </div>
  );
}
