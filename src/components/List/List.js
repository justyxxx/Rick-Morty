import React from 'react';
import { Row, Col } from 'antd';
import ListBuilder from '../../containers/List/ListBuilder';
import classes from './List.css';
import { getLocale } from '../../utils/localization';

const List = (props) => (
    <Row>
      <Col className={classes.List} span={24}>
          <div>
            <h2>{getLocale(props.locale, 'locale.navigation.List')}</h2>
          </div>
          <ListBuilder />
      </Col>      
    </Row>
);
export default List