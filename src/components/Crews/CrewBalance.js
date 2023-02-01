import { sampleUsers } from 'assets/samples/user';
import PropTypes from 'prop-types';
import { formatNumber } from 'utils/formating';

/*
 * Component used to display the participants of a crew and their informations (Name, balance)
 */
export default function CrewBalance({ participants, crewValue }) {
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
          className='d-flex justify-content-center align-items-center'
          style={{
            width: `${width}%`,
            maxWidth: '500px',
            height: '20px',
            backgroundColor: balanceColor,
          }}>
          <p className='mt-1 font-weight-bold'>
            {formatNumber(participant.balance)} €
          </p>
        </div>
      </div>
    );
  });
}

CrewBalance.propTypes = {
  participants: PropTypes.array.isRequired,
  crewValue: PropTypes.number.isRequired,
};
