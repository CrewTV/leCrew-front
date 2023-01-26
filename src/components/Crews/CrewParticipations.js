import { sampleUsers } from 'assets/samples/user';
import UserContext from 'contexts/UserContext';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

/*
 * Component used to display the participants of a crew and their informations
 */
export default function CrewParticipants({ participants, crewValue }) {
  const getUserInfoFromId = (id) => {
    return sampleUsers.find((sampleUser) => sampleUser.id === id);
  };

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
          const userInfo = getUserInfoFromId(participant.id);
          return (
            <tr key={index}>
              <td>
                <p>{userInfo.firstName}</p>
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
