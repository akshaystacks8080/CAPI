var axios = require('axios');
var goose = require('mongoose');
const db = goose.connection;

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true },
    function (err) {
        if (err) throw err;

        console.log('Successfully connected');
    }
);

var config = {
    method: 'get',
    url: 'https://rest.coinapi.io/v1/exchanges',
    headers: {
        'X-CoinAPI-Key': 'ACCA1D04-E7C7-421F-B1ED-C83DEF3A61FC',
    },
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
