import React from 'react'
import Card from '../Card'

//card icon imports
import devImg from '../../images/dev.png'
import webDImg from '../../images/webD.png'
import marketingImg from '../../images/marketing.png'
import otherImg from '../../images/other.png'

import './styles.css';

interface form2Props {

}

const Form2: React.FC<form2Props> = () => {
    return (
        <div>
            <div className='form-head-text'>
                <h2>Our services</h2>
                <p>Please select which service you are interested in.</p>
            </div>
            <div className='form1'>
                <div className='card-container'>
                    <Card
                        text='Development'
                        imgPath={devImg}
                    />
                    <Card
                        text='Web Design'
                        imgPath={webDImg}
                    />
                    <Card
                        text='Marketing'
                        imgPath={marketingImg}
                    />
                    <Card
                        text='Other'
                        imgPath={otherImg}
                    />
                </div>
            </div>
        </div>
    )
}

export default Form2