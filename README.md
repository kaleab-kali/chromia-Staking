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

# StakingProject

## Setup Instructions

1. **Clone the Repository:**
   ```
   git clone https://github.com/kaleab-kali/chromia-Staking.git
   
   ```

2. **Install Dependencies:**
   - Ensure you have necessary tools installed (e.g., VS Code, Node.js, etc.).
   - Install Postgres.
   - Install the Rell extension for VS Code.

3. **Install Frontend Dependencies:**
   ```
   cd frontend
   npm install
   ```

4. **Install Backend Dependencies:**
   ```
   cd staking-backend
   chr install
   ```

5. **Run the Frontend:**
   - Start the frontend server:
     ```
     npm run dev
     ```

6. **Run the Chromia Node:**
   - Start the Node server:
     ```
     chr node start
     ```

## Usage Instructions

1. **Access the Interface:**
   - Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

2. **Stake Tokens:**
   - Enter the amount of FT4 tokens you want to stake and submit the form.

3. **View Staked Amount and Yield:**
   - The interface will display the amount of tokens staked and the yield earned so far.

4. **Claim Yield:**
   - Click the "Claim Yield" button to withdraw your accumulated yield.

5. **Initiate Unstake Request:**
   - Click the "Unstake" button to initiate an unstake request.

6. **Complete Unstake Request:**
   - After two weeks, return to the interface and complete the unstake process to withdraw your tokens.

7. **Check Unstake Status:**
   - The interface will display the status of your unstake request.
```
