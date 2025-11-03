import React, { useState } from 'react';
import userImg from "../../assets/Group.png"
import flagImg from "../../assets/Group (1).png"
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance ,AvailableBalance , purchasedPlayers, setPurchasedPlayers}) => {

    const [isSelected, setIsSelected] = useState()
    const handleSelected = (playerData) =>{
        const playerPrice = parseInt(playerData.price)
        if(AvailableBalance < playerPrice)
        {
            toast("Not Enough money!!!!!")
            return 
        }
        if(purchasedPlayers.length === 11)
        {
            toast("11 players already selected!!!")
        }
        setIsSelected(true)
        setAvailableBalance(AvailableBalance - playerPrice)


        setPurchasedPlayers([...purchasedPlayers,playerData])
        toast("Player purchased!!")
    }



    return (
        <div className="card w-96 shadow-sm p-4">
            <figure>
                <img
                    src={player.player_image}
                    alt="Player-Image-Loading.."
                    className='h-[300px] object-cover' />
            </figure>
            <div className="mt-4">
                <div className='flex'>
                    <img src={userImg} alt="" /> <h2 className="card-title ml-2">{player.player_name}</h2>
                </div>
                <div className='flex justify-between mt-4 border-b-1 border-b-gray-400 p-2'>
                    <div className='flex gap-1'>
                        <img className='w-[20px] h-[20px]' src={flagImg}
                            alt="" />
                        <span>{player.player_country}</span>
                    </div>

                    <button className=' bg-gray-300 rounded-xl px-2 py-1'>{player.playing_style}</button>
                </div>


                <div className='flex justify-between font-bold'>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>
                <div className='flex justify-between'>
                    <span className=' font-bold'>Player-role:</span>
                    <span>{player.playing_role}</span>
                </div>

                <div className="card-actions mt-4 flex justify-between items-center">
                    <p className='font-bold'>Price:${player.price}M</p>
                    <button disabled={isSelected} onClick={() =>
                    {handleSelected(player)}
                    } className="btn btn-primary mt-3 hover:bg-green-500 border-none ">{isSelected === true ? "Selected" : "choose player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;