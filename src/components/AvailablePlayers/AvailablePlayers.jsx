import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise ,setAvailableBalance, AvailableBalance, purchasedPlayers, setPurchasedPlayers}) => {

    const playerData = use(playerPromise)
    console.log(playerData);
    return (



        <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-4'>

            {
                playerData.map(player => <PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} AvailableBalance={AvailableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }

        </div>
    );
};

export default AvailablePlayers;