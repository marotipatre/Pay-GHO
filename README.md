# PAY-gho: A Decentralized Application for AAVE-GHO Transfer and Yield earning 
![PAY-gho Logo](public\logos\transferPAY.png)

## Table of Contents
- [Introduction](#introduction)
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Technology Stack](#technology-stack)
- [Execution Steps](#execution-steps)
  - [Prerequisites](#prerequisites)
  - [Setting Up the Environment](#setting-up-the-environment)
  - [Running the Application](#running-the-application)
- [Yield Farming](#yield-farming)
- [Contributing](#contributing)
- [License](#license)

## Introduction
PAY-gho is a decentralized application built to facilitate the transfer of AAVE-GHO, the decentralized stablecoin by AAVE. The application is developed using the Next.js framework for the frontend, Additionally, the application leverages Solidity for smart contract development, ether.js for Ethereum interaction, and integrates the ConnectKIT walletconnect SDK for seamless web3 interaction.

## Problem Statement
The existing methods for transferring AAVE-GHO lack user-friendliness. Users face challenges in securely interacting with the blockchain and managing their assets. The goal is to develop a decentralized application that addresses these issues and provides a smooth experience for AAVE-GHO transfers.

## Solution
PAY-gho provides a decentralized solution for AAVE-GHO transfers, offering enhanced security and ease of use. The integration of Next.js, ChakraUI, Solidity, ether.js, and ConnectKIT ensures a seamless and efficient user experience.

## Technology Stack
| Technology     | Purpose                                           |
| -------------- | ------------------------------------------------- |
| Next.js        | Frontend framework for web application development|
| ChakraUI       | UI library for building responsive user interfaces|
| Solidity       | Smart contract development language for Ethereum  |
| ether.js       | JavaScript library for interacting with Ethereum  |
| ConnectKIT     | Family's walletconnect SDK for simplified web3 interaction|

## Execution Steps

### Prerequisites
- Node.js and npm installed
- Ethereum wallet with AAVE-GHO tokens for testing

### Setting Up the Environment
1. Clone the repository: `git clone https://github.com/marotipatre/Pay-GHO`
2. Navigate to the project directory: `cd PAY-gho`
3. Install dependencies: `npm install`

### Running the Application
1. Start the development server: `npm run dev`
2. Open your web browser and go to `http://localhost:3000`

## Yield earning
PAY-gho also provides users with the opportunity to earn yield through GHO vaults. Users can lock their AAVE-GHO tokens into the vaults, contributing to the liquidity pool and earning rewards over time. To participate in yield farming, follow the steps outlined in the application's user interface.

## Contributing
Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [MIT License](LICENSE).
