import { useHistory } from 'react-router-dom'

const HistorySelect = () => {
    let date1:any
    let date2:any
    let history = useHistory();

    const dateSet1 = (temp1: any) => {
        date1 = temp1
    }
    const dateSet2 = (temp2: any) => {
        date2 = temp2
    }

    const redirect = () => {
        // history.push(`/history/result?start=${date1}&end=${date2}`)
        history.push(`/history/result?start=${date1}&end=${date2}`,{
                          start: date1,
                          end: date2
                    })
    }

    const dateCheck = () => {
        if (date1 > date2 || date1 === undefined || date2 === undefined) {
            alert('Please select start date and end date correctly')
        }
        else{
            redirect()
        }
    }
   
    return(
    <div className='text-center space-y-3 space-x-3'>
    <p className='text-2xl font-semibold'>Select historical range</p>
    <span>From date</span>
    <input type='date' onChange={e => dateSet1(e.target.value)}></input>
    <span>To date</span>
    <input type='date' onChange={e => dateSet2(e.target.value)}></input>
    <br />
    <button onClick={dateCheck}>Get data</button>
  </div>
    )
}
  

export default HistorySelect