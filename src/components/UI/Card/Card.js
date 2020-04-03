import React from "react";
import { Card, Avatar } from "antd";
import classes from "./Card.css";
import { getLocale } from "../../../utils/localization";
const { Meta } = Card;
const env = process.env.NODE_ENV === "development";

export class CardComp extends React.Component {
  render() {
    const maxWidth = window.innerWidth >= 992;
    return (
      <Card
        className={classes.Card}
        style={!env && maxWidth ? { margin: "0.6rem 2.5rem 0 3rem" } : null}
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
        <Meta
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
