import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import "./index.scss";
import Timeslot from "../TimeSlot";

const Index = () => {
  const [slots] = useState([
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm",
  ]);

  const [timeValue] = useState();

  const getValue = (time) => {
    console.log(time);
  };

  return (
    <Container data-testid={"Scheduler"} id="scheduler-container">
      {slots.map((time, key) => {
        return <Timeslot time={time} key={key} onClick={getValue} />;
      })}
    </Container>
  );
};

export default Index;
