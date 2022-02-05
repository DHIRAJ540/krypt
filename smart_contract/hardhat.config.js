//https://eth-ropsten.alchemyapi.io/v2/u1i-v5oxomcOXdA_gnu4JO9HfXRSI-Sy

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten:{
      url: "https://eth-ropsten.alchemyapi.io/v2/u1i-v5oxomcOXdA_gnu4JO9HfXRSI-Sy",
      accounts: ['2d202d9f8bb373007c95d55bdbd66508eb7dd0760b78c3c0e5d11c2d005fe80d']
    }
  }
}