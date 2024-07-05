import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import data from "./data.json";
import { EventInterface } from "./services/interface";
import Header from "./components/Header";
import AppButton from "./components/AppButton";
import EventCard from "./components/EventCard";
import axios from "axios";
import { serverAddress } from "./utils/serverAddress";
import Loader from "./components/Loader";

const EventsList = () => {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [error, setError] = useState<boolean>(false);

  const getEventsList = async () => {
    await axios({
      method: "get",
      url: `${serverAddress}/events`,
    })
      .then((res) => {
        const data: EventInterface[] = res.data;
        setEvents(data);
      })
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    // getEventsList();
    const timer = setTimeout(() => {
      setEvents(data);
    }, 1000);
    () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header title={"Nadchodzące wydarzenia"}></Header>
      {error ? (
        <div></div>
      ) : events.length === 0 ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              margin: "24px auto",
              pr: 2,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <AppButton path="/form" content="Dodaj wydarzenie" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            {events.map((event: EventInterface) => {
              return <EventCard event={event} />;
            })}
          </Box>
        </>
      )}
    </>
  );
};

export default EventsList;
