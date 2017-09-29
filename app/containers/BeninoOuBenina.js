import { h } from 'hyperapp';
import connect from '../tools/connect';

const mapRandomUserResponse = (randomuser) => {
  if (!randomuser || randomuser.isLoading || !randomuser.data) {
    return null;
  }
  const singleUser = randomuser.data.results[0];
  return singleUser
}

const User = ({ gender, picture }) => {
  return (
    <div
      style={{
        'max-width': '600px',
        margin: '20px auto',
        'text-align': 'center',
        'font-size': '16px'
      }}
      >
      <img src={picture.large} />
      <div>
        {
          gender === 'female'
          ? <span>É BENINA!!</span>
          : <span>É BENINO!!</span>
        }
      </div>
    </div>
  )
}

const BeninoOuBenina = ({ fetchRandomData, user, isLoading }) => {
  return (
    <div
      style={{
        'text-align': 'center'
      }}>
      <button
        style={{
          margin: '10px auto',
          border: 'none',
          'background-color': '#96281B',
          color: 'white',
          'font-size': '16px',
          padding: '10px 20px',
          display: 'block'
        }}
        onclick={fetchRandomData}
      >
        GERAR BENINO OU BENINA!
      </button>

      {
        isLoading &&
        <span>
          CARREGANDO....
        </span>
      }
      {
        user &&
        <div>
          <User
            gender={user.gender}
            picture={user.picture}
          />
        </div>
      }
    </div>
  )
};


const connected = connect(
  ({ requests }) => ({
    user: mapRandomUserResponse(requests.randomuser),
    isLoading: requests.randomuser && requests.randomuser.isLoading
  }),
  ({ fetchData }) => ({
    fetchRandomData() {
      return fetchData({
        url: 'https://randomuser.me/api/',
        key: 'randomuser'
      });
    }
  })
);

export default connected(BeninoOuBenina);
