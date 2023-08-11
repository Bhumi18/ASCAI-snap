import { OnTransactionHandler } from '@metamask/snaps-types';
import { heading, panel, text, copyable } from '@metamask/snaps-ui';
// import fetch from 'isomorphic-unfetch';

// Load environment variables from .env file.

// const TENDERLY_USER = '';
// const TENDERLY_PROJECT = '';
// const TENDERLY_ACCESS_KEY = '';

// Handle outgoing transactions.
export const onTransaction: OnTransactionHandler = async ({ transaction }) => {
  // Call the Tenderly API to simulate the transaction
  // const resp = await fetch(
  //   `https://api.tenderly.co/api/v1/account/${TENDERLY_USER}/project/${TENDERLY_PROJECT}/simulate`,
  //   {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       save: false,
  //       save_if_fails: false,
  //       simulation_type: 'full',
  //       network_id: '1',

  //       /* Standard EVM Transaction object */
  //       from: transaction.from,
  //       to: transaction.to,
  //       input: transaction.input,
  //       gas: transaction.gas,
  //       gas_price: transaction.gasPrice,
  //       value: transaction.value,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Access-Key': TENDERLY_ACCESS_KEY,
  //     },
  //   },
  // );

  // If the simulation succeeds, update the transaction with the results
  // let data;
  // if (resp.status === 200) {
  //   data = await resp.json();
  //   transaction.gas = data.gas;
  //   transaction.gasPrice = data.gasPrice;
  //   transaction.value = data.value;
  // }

  // Display percentage of gas fees in the transaction insights UI.
  return {
    content: panel([
      heading('Transaction insights snap'),
      // text(
      //   `As set up, you are paying **${JSON.stringify(
      //     transaction,
      //   )}** in gas fees for this transaction.`,
      // ),
      text(
        'Look at your transaction insights in a visual form by clicking the below link',
      ),
      copyable(
        `https://ascai.vercel.app/contract-details/${transaction.from}/${transaction.to}/${transaction.data}`,
      ),
    ]),
  };
};
