import React from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Message({ message, loggedIn }) {
  const isUser = message.userName === loggedIn;
  return (
    <div className={`message_card ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.userName} : {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
