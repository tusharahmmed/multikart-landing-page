import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Section } from '..';

const Home = () => {

    const [data, setData] = useState([]);

    // fetch json data from public folder
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);


    return (
        <Container>
            <SectionWraper>
                {
                    data.length ? data.map(item => <Section key={item.id} data={item} />) : ''
                }
            </SectionWraper>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    
`;
const SectionWraper = styled.div`
    scroll-snap-type: y mandatory;
    overflow: auto;
    height: 100vh;
`;