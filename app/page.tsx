export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>TON Nominators Pool</h1>
      <p>Nominator pool source code for TON.</p>

      <section>
        <h2>Add Stake</h2>
        <p>
          Adding stake is a two-step process: first you send a stake and eventually the pool needs to accept it. 
          The Nominator Pool is free to NOT accept your stake for any reason.
        </p>
        <p>
          All pools have different deposit fees and minimum stake amounts, check out information about current deposit fees.
        </p>
        <p>
          To send stake, send a message with a comment <code>Stake</code> (capitalization is important) with value of{' '}
          <code>desired stake</code> + <code>deposit fee</code>.
        </p>
      </section>

      <section>
        <h2>Withdraw Stake</h2>
        <p>
          Withdrawal is also a two-step process: first you need to request withdrawal and then when withdrawal solidifies, 
          you can repeat the command to withdraw the result. Sometimes you can withdraw immediately.
        </p>
        <p>
          All pools have different withdraw fees, check out information about current withdraw fees.
        </p>
        <p>
          To withdraw stake, send a message with a comment <code>Withdraw</code> (capitalization is important) with value of{' '}
          <code>withdraw fee</code>.
        </p>
      </section>

      <section>
        <h2>Deployment</h2>
        <p>Nominator pool is a combination of several contracts:</p>
        <ul>
          <li>
            <strong>Owner</strong> - an arbitrary contract (wallet or DAO) that can make critical updates to the contract: 
            change fees, start/stop pool, and even update code. Owner also receives all profits from fees.
          </li>
          <li>
            <strong>Controller</strong> - an arbitrary contract (wallet or DAO) that issues staking commands for validation 
            and/or voting. Controller pays for these operations and can get "unowned" balances to restore its balance and 
            continue working. We recommend topping ~1000 TONs for uninterrupted work.
          </li>
          <li>
            <strong>Proxy</strong> - the only contract that is in masterchain and represents validation pool there. 
            It performs simple proxying between pool and elector.
          </li>
          <li>
            <strong>Pool</strong> - main contract that contains all records of all stakes and performs staking itself.
          </li>
        </ul>
      </section>

      <section>
        <h2>License</h2>
        <p>GNU v3</p>
      </section>
    </main>
  );
}
