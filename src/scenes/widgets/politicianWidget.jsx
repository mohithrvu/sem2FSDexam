import React from 'react';

const PoliticianWidget = () => {
  const [politicianName, setPoliticianName] = React.useState('');
  const [money, setMoney] = React.useState(0);
  const [votes, setVotes] = React.useState(0);

  const handleNameChange = (event) => {
    setPoliticianName(event.target.value);
  };

  const handleMoneyChange = (event) => {
    setMoney(Number(event.target.value));
  };

  const handleVotesChange = (event) => {
    setVotes(Number(event.target.value));
  };

  return (
    <div>
      <label>
        Politician Name:
        <input type="text" value={politicianName} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Money:
        <input type="number" value={money} onChange={handleMoneyChange} />
      </label>
      <br />
      <label>
        Votes:
        <input type="number" value={votes} onChange={handleVotesChange} />
      </label>
      <br />
      <p>
        Politician: {politicianName}
        <br />
        Money: ${money}
        <br />
        Votes: {votes}
      </p>
    </div>
  );
};

export default PoliticianWidget;