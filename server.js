const {Wit, log} = require('node-wit');

const client = new Wit({accessToken: 'IBQJLPVI4ZZ3E4ULOJIXL36NME7S6DPK'});
client.message('I have drunk a bottle of water and eat smoked beef ?', {})
.then((data) => {
  console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
})
.catch(console.error);