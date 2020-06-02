import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = ({ bpi }) => (
    <Layout>
        <div>
            <h1>Welcome to BitzPrice</h1>
            <p>Check Current Bitcoin Rate</p>
            <Prices bpi={bpi} />
        </div>
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    const data = await res.json();
    return {
        bpi: data
    };
}

export default Index