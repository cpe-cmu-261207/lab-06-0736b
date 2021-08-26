import React, { useState, useEffect } from 'react'
import axios, {AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'


const HistoryResult = () => {
    const history:any = useHistory().location
    let start:String = history.state.start
    let end:String = history.state.end

    const [btcPrice, setBtcPrice] = useState<Record<string,number> | null>(null)
    const [error, setError] = useState(null)

    let apiURL:string = `https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${start}&end=${end}`
    
    useEffect( () => {
        setBtcPrice(null)
        axios.get(apiURL)
        .then((resp: AxiosResponse<Record<string,number>>) => {
            setBtcPrice(resp.data)
        })
        .catch(err => setError(err));
    },[apiURL])

    console.log(btcPrice)
    let list:any = {}
    if(btcPrice === null){
    }else{
        list = btcPrice.bpi
    }

    const allList = Object.entries(list).map(([key,value])=>{
        const numbaa = value as number
        return (
            <li className='text-xl'>{key} - {numbaa.toLocaleString()} THB</li>
        )
      })

    
    return (
    <div className='text-center space-y-3'>
    <p className='text-2xl font-semibold'>Historical price</p>
    {btcPrice !== null || error !== null ? <span></span> : <p className='text-2xl'>Loading ...</p>}
    { error && <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>}
    {btcPrice === null ? <span></span> : <p className='text-xl font-semibold'> ( From {start} To {end} )</p>}
    <ul>
    {error !== null ? <span></span> : allList}
    </ul>
    </div>
    )
}

export default HistoryResult