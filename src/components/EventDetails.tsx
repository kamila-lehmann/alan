import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import { EventInterface } from "../services/interface";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

interface EventDetailsProps {
  event: EventInterface;
}

const EventDetails = ({ event }: EventDetailsProps) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        minHeight: "60vh",
        margin: "24px auto",
      }}
    >
      <CardMedia
        component="img"
        alt={`${event.title}`}
        height="100%"
        src={`${event.image}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ color: "#399fac", mt: 2, mb: 2 }}
        >
          {event.title}
        </Typography>
        <Typography
          sx={{
            mt: 4,
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
          }}
          color="#5d5d77"
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
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
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <PlaceIcon fontSize="small" sx={{ fill: "#399fac" }} />
            {`${event.event_location}`}
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          color="#5d5d77"
          sx={{ fontSize: "16px", mb: 1 }}
        >
          {event.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#399fac" }}>
          tel. {event.contact_phone}
        </Button>
        <Button size="small" sx={{ color: "#399fac" }}>
          e-mail: {event.contact_email}
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventDetails;
