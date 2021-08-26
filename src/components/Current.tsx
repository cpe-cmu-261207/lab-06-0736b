import React, { useState, useEffect } from 'react'
import axios, {AxiosResponse } from 'axios'

type priceType = {
    bpi: any,
    THB: any,
    time: any
}

const Current = () => {
    const [btcPrice, setBtcPrice] = useState<priceType | null>(null)
    
    useEffect( () => {
        setBtcPrice(null)
        axios.get(`https://api.coindesk.com/v1/bpi/currentprice/thb.json`)
        .then((resp: AxiosResponse<priceType>) => {
            setBtcPrice(resp.data)
        })
        .catch(err => console.error(err))
    },[])

    return(
    <div className='text-center space-y-3'>
    <p className='text-2xl font-semibold'>Current price</p>
    {btcPrice === null ? <p className='text-2xl'>Loading ...</p> : <p className='text-2xl'>{(btcPrice.bpi.THB.rate_float).toLocaleString()} THB</p>}
    {btcPrice === null ? <span></span> : <p> (Last updated {btcPrice.time.updated}) </p>}
  </div>
    )
}

export default Current