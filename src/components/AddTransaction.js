import React, { useContext, useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import { TextField, Button } from '@material-ui/core';
import { GlobalContext } from '../GlobalStorage';

let id = 0;
const AddTransaction = () =>
{
    const [text, setText] = useState('');
    const [money, setMoney] = useState('');
    const [transactions, setTransactions] = useContext(GlobalContext);

    console.log(transactions);
    const getText = (e) =>
    {
        setText(e.target.value);

    }
    const getMoney = (e) =>
    {
        setMoney(parseInt(e.target.value));
    }
    const submitForm = (e) =>
    {
        e.preventDefault();
        console.log(text, " ", money)
        setTransactions(
            [...transactions,
            { id: id++, text: text, money: money }]
        )
        setText('')
        setMoney('')
    }

    return (
        <div className="form">
            <h2>Add Transaction</h2><br /><br />
            <form>
                <FormControl>
                    <TextField style={{width:"300px"}} id="standard-basic" label="Enter Text" value={text} onChange={getText} />
                </FormControl>
                <br /><br />
                <FormControl>
                    <TextField style={{width:"300px"}} id="standard-basic" type="number" label="Enter expense (-ve) or income (+ve)" value={money} onChange={getMoney} />
                </FormControl><br></br><br />
                <Button onClick={submitForm} variant="contained" color="secondary">
                   Submit
                </Button>
            </form>

        </div>
    )
}

export default AddTransaction
