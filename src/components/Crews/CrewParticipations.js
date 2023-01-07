import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

/*
 * Component used to display the participants of a crew and their informations
 */
export default function CrewParticipants({ participants, crewValue }) {
  return (
    <Table>
      <thead className='text-primary'>
        <tr>
          <th>Nom</th>
          <th>Part du crew</th>
          <th>Valorisation</th>
        </tr>
      </thead>
      <tbody>
        {participants.map((participant, index) => {
          return (
            <tr key={index}>
              <td>
                <p>{participant.owner}</p>
              </td>
              <td>
                <p>{participant.percentage} %</p>
              </td>
              <td>
                <p>
                  {((participant.percentage / 100) * crewValue).toFixed(2)} €
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

CrewParticipants.propTypes = {
  participants: PropTypes.array.isRequired,
  crewValue: PropTypes.number.isRequired,
};
