import React from "react";
import { Card, Avatar } from "antd";
import classes from './Card.css';
import { getLocale } from "../../../utils/localization";
const { Meta } = Card;

export class CardComp extends React.Component {
  render() {
    return (
      <Card
        style={{ width: 300, marginTop: 6 }}
        bodyStyle={{ padding: 10 }}
        cover={
          <Avatar
            shape="square"
            size={54}
            src={this.props.img}
            className={classes.Cover}
          />
        }
      >
        >
        <Meta
          className={classes.Meta}
          avatar={
            <Avatar
              shape="square"
              size={100}
              src={this.props.img}
              className={classes.Avatar}
            />
          }
          title={getLocale(this.props.locale, "locale.navigation.Detail")}
          description={this.props.switch}
        />
      </Card>
    );
  }
}
export default CardComp;
