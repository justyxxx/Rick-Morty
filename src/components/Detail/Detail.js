import React from 'react';
import { Row, Col } from 'antd';
import classes from './Detail.css';
import { getLocale } from '../../utils/localization';

const Detail = props => {
    console.log(props)
    return (<Row >
        <Col span={24} className={classes.Detail} style={{display: 'flex'}} >
            <img src={props.img} alt="" />
            <div className={classes.Spec}>
                <h1>{getLocale(props.locale, 'locale.navigation.Detail')}</h1>
                <h4>{getLocale(props.locale, 'locale.navigation.Name')}:</h4>
                <h3>{props.name}</h3>
                <h4>{getLocale(props.locale, 'locale.navigation.Species')}:</h4>
                <h3>{props.species}</h3>
                <h4>{getLocale(props.locale, 'locale.navigation.Location')}:</h4>
                <h3>{props.location}</h3>
                <h4>{getLocale(props.locale, 'locale.navigation.Gender')}:</h4>
                <h3>{props.gender}</h3>
            </div>


        </Col>      
  </Row>
);
    };
export default Detail