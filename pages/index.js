import React from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Home from './home'
import { connect } from 'react-redux'

const Index = () => (

    <div >
        <Layout>
            <Home />
        </Layout>
    </div>
)
export default Index


// class Index extends React.Component {
//     componentDidMount() {
//         this.deleyAboutpages();
//     }

//     deleyAboutpages =()=> {
//         setTimeout( ()=> {
//             this.handleGoToAboutPages();
//         },3000)
//     }

//     handleGoToAboutPages = () => {
//         Router.push('/number')
//     }

//     render(){
//         return (
//             <div>
//                 Hello World
//                 <Link href="/about"> 
//                 <a>here</a> 
//                 </Link>{' '}
//                 <button onClick={this.handleGoToAboutPages}>Number</button>
//                 {this.props.number}
//             </div>
//         );
//     }
// }
// const mapStateToProps = ({number}) => {
//     return { number    }
// }

// export default connect(mapStateToProps)(Index)
