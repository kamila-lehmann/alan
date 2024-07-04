import data from "./data.json";
import { useParams } from "react-router-dom";
import { serverAddress } from "./utils/serverAddress";
import axios from "axios";
import { useEffect, useState } from "react";
import { EventInterface } from "./interface";
import Loader from "./components/Loader";
import Error from "./components/Error";
import EventDetails from "./components/EventDetails";

const Event = () => {
  const eventId = useParams();
  const [event, setEvent] = useState<EventInterface>();
  const [error, setError] = useState<boolean>(false);

  const getSingleEvent = async () => {
    await axios({
      method: "get",
      url: `${serverAddress}/events/${eventId}`,
    })
      .then((res) => {
        const data: EventInterface = res.data;
        setEvent(data);
      })
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    // getSingleEvent();
    const timer = setTimeout(() => {
      const singleEvent: EventInterface = data.filter(
        (item) => item.id.toString() === eventId.id
      )[0];
      setEvent(singleEvent);
    }, 1000);
    () => clearTimeout(timer);
  }, []);

  return (
    <>
      {error ? (
        <Error />
      ) : event !== undefined ? (
        <EventDetails event={event} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Event;
