import React from 'react';

const SelectedCard = ({player, removePlayer}) => {
    console.log(player)
    const handleRemove = () =>{
        removePlayer( 
            player
        )
    }
    return (
        <div className=' border-2 border-gray-500 p-4 flex justify-between mt-4 rounded-xl'>
            <div className="flex items-center">
                <img src= {player.player_image} className="h-[50px] w-[50px] rounded-xl" alt="" />
                <div className='ml-2'>
                    <h1>{player.player_name}</h1>
                    <p className='text-xs'>{player.player_country}</p>
                </div>
            </div>
            <div onClick={handleRemove} className="">
                <img src="https://i.ibb.co.com/TBGSp8D1/Vector.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;