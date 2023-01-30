import { sampleUsers } from 'assets/samples/user';
import { backgroundColors } from 'contexts/BackgroundColorContext';
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

  return participants.map((participant, index) => {
    const userInfo = getUserInfoFromId(participant.id);
    const balanceColor = participant.balance > 0 ? '#00f2c3' : '#fd5d93';
    const width = crewValue * Math.abs(participant.balance / crewValue);
    return (
      <div className='d-flex flex-row mb-3 justify-content-between' key={index}>
        <div className='fixed-name-container'>
          <p>{userInfo.firstName}</p>
        </div>

        <div
          className='d-flex justify-content-center'
          style={{ width: `${width}%`, backgroundColor: balanceColor }}>
          <p className='font-weight-bold'>{participant.balance} €</p>
        </div>
      </div>
    );
  });
}

CrewParticipants.propTypes = {
  participants: PropTypes.array.isRequired,
  crewValue: PropTypes.number.isRequired,
};
