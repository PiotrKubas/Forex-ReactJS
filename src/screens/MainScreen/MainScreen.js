import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { fetchCurrencies, fetchHistory } from '../../actionCreators/app'
import { useDispatch, useSelector } from 'react-redux'


const Container = styled.div`
padding: 50px;
`

const HistoryBox = styled.div`
border: 1px solid black;
background-color: #cec28e;
padding: 5px;
width: 150px;
`

const Row = styled.div`
display: flex;
`

const CurrencyBox = styled.div`
border: 1px solid black;
background-color: #ffacac;
padding: 5px;
width: 150px;
`

const MainScreen = () => {
    const dispatch = useDispatch()
    const history = useSelector(state => state.history)
    const rates = useSelector(state => state.rates)
    const [currencyClicked, setCurrencyClicked] = useState(null);

    useEffect(() => {
        dispatch(fetchCurrencies());
        dispatch(fetchHistory());
    }, []);


    const handleCurrencyClicked = (nameData) => {
        setCurrencyClicked(nameData);
    }

    return (
        <Container>
            <div>
                <CurrencyBox>
                    <h3>Latest EUR rates</h3>
                </CurrencyBox>
                {rates.map((rate) => {
                    return (
                        <Row>
                            <CurrencyBox
                                onClick={() => handleCurrencyClicked(rate.name)}>
                                <div>
                                    {rate.name}
                                </div>
                                <div>
                                    {rate.value}
                                </div>
                            </CurrencyBox>
                            {currencyClicked && rate.name === currencyClicked && <div>
                                <HistoryBox>
                                    <div>
                                        {`Historical ${currencyClicked} rates`}
                                        <br></br>
                                        {history[currencyClicked]}
                                    </div>
                                </HistoryBox>
                            </div>}
                        </Row>
                    )
                })}
            </div>
        </Container >
    )
}

export default MainScreen;