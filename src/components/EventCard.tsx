import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import { EventInterface } from "../interface";
import AppButton from "./AppButton";
import Button from "@mui/material/Button";

interface CardProps {
  event: EventInterface;
}

const EventCard = ({ event }: CardProps) => {
  return (
    <Card
      key={`${event.id}`}
      sx={{
        width: "100%",
        maxWidth: 350,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="#38384d"
          sx={{
            marginBottom: "24px",
          }}
        >
          {event.title}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
          color="#5d5d77"
        >
          <CalendarMonthIcon fontSize="small" sx={{ fill: "#399fac" }} />
          {`${new Date(
            event.event_date_time
          ).toLocaleDateString()} o godz. ${new Date(event.event_date_time)
            .toLocaleTimeString()
            .slice(0, 5)}`}
        </Typography>
        <Typography
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
          color="#5d5d77"
        >
          <PlaceIcon fontSize="small" sx={{ fill: "#399fac" }} />
          {`${event.event_location}`}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          disabled
          size="medium"
          sx={{
            color: "#399fac",
            margin: "0 0 8px 8px",
          }}
        >
          {event.event_type}
        </Button>
        <AppButton
          path={`/events/${event.id}`}
          content="Więcej"
          size="small"
          margin="0 8px 8px 0"
        />
      </CardActions>
    </Card>
  );
};

export default EventCard;
