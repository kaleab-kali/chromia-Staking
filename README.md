# Chromia Staking Protocol

## Author Information
**Name:** Kaleab Girma  
**Email:** kaleab.girma.official@gmail.com

## Project Description
This project implements a staking protocol using Chromia's Rell language and the FT4 library. The protocol allows users to stake FT4 tokens and earn a 10% annual yield, which can be claimed at any time. Additionally, users can initiate an unstake request that requires a two-week notice period before the staked tokens can be withdrawn.

## How It Works
The staking protocol consists of two main smart contracts: the FT4 token contract and the staking protocol contract.

### Staking Process
- Users stake their FT4 tokens by interacting with the staking protocol contract.
- The staked tokens generate a 10% annual yield, which can be queried and claimed at any time.
- Users can initiate an unstake request, which locks the staked tokens for two weeks before they can be withdrawn.

### Frontend
The frontend is built using React and provides an interface for users to interact with the staking protocol. It allows users to stake tokens, claim yield, initiate unstake requests, and check the status of their unstake requests.

## Setup Instructions
Follow these steps to set up and run the project locally.

### Backend
1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd chromia-staking-protocol/backend
