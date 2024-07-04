import { Button, Paper } from "@mui/material";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import "dayjs/locale/pl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";
import { serverAddress } from "./utils/serverAddress";

const eventTypes = [
  {
    value: "Kultura",
    label: "Kultura",
  },
  {
    value: "Sport",
    label: "Sport",
  },
  {
    value: "Zdrowie",
    label: "Zdrowie",
  },
];

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    event_type: "",
    contact_phone: "",
    contact_email: "",
    event_location: "",
    event_date_time: "",
  });
  const [dateValue, setDateValue] = useState<Dayjs | null>();
  const [timeValue, setTimeValue] = useState<Dayjs | null>();

  const postNewEvent = async (data: string) => {
    await axios({
      method: "post",
      url: `${serverAddress}/add`,
      data: data,
    })
      .then(() => {
        console.log("Event successfully added!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const date = dateValue?.format("YYYY-MM-DD");
    const time = timeValue?.format("HH:mm:ss");
    const eventDateTime = `${date}T${time}`;
    formData.event_date_time = eventDateTime;
    console.log(JSON.stringify(formData));
    const dataToSend = JSON.stringify(formData);
    // postNewEvent(dataToSend);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      event_type: "",
      contact_phone: "",
      contact_email: "",
      event_location: "",
      event_date_time: "",
    });
    setDateValue(null);
    setTimeValue(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
      <Paper elevation={3}>
        <Header title={"Dodaj nowe wydarzenie"}></Header>
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{
            width: "95%",
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            pb: 3,
            "& .MuiTextField-root": {
              m: 1,
              width: "100%",
            },
            fieldset: {
              border: "1px solid #399fac",
              borderRadius: "4px",
            },
            "fieldset legend": {
              color: "#399fac",
            },
            "fieldset > div": {
              display: "flex",
              justifyContent: "center",
              pb: 3,
            },
          }}
        >
          <fieldset>
            <legend>Podstawowe informacje</legend>
            <div>
              <TextField
                required
                fullWidth
                id="title"
                name="title"
                label="Tytuł wydarzenia"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <DatePicker
                disablePast
                label="Data wydarzenia *"
                name="event_date"
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
              />
              <TimePicker
                label="Godzina wydarzenia *"
                name="event_time"
                value={timeValue}
                onChange={(newValue) => setTimeValue(newValue)}
              />
              <TextField
                required
                id="event_location"
                label="Miejsce wydarzenia"
                name="event_location"
                value={formData.event_location}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Dodatkowe informacje</legend>
            <div>
              <TextField
                required
                id="image"
                name="image"
                label="Obrazek"
                value={formData.image}
                onChange={handleChange}
              />
              <TextField
                required
                select
                id="event_type"
                name="event_type"
                label="Rodzaj wydarzenia"
                defaultValue=""
                value={formData.event_type}
                onChange={handleChange}
              >
                {eventTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                required
                multiline
                id="description"
                name="description"
                label="Opis wydarzenia"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Informacje kontaktowe</legend>
            <div>
              <TextField
                required
                id="contact_phone"
                name="contact_phone"
                label="Telefon kontaktowy"
                value={formData.contact_phone}
                onChange={handleChange}
              />
              <TextField
                required
                id="contact_email"
                name="contact_email"
                label="E-mail do kontaktu"
                value={formData.contact_email}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <Box
            sx={{
              width: "100%",
              maxWidth: "md",
              margin: "16px auto",
              p: "0 16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#399fac",
                ":hover": { bgcolor: "#38384d" },
              }}
              onClick={() => resetForm()}
            >
              Wyczyść formularz
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#399fac",
                ":hover": { bgcolor: "#38384d" },
              }}
              type="submit"
            >
              Zapisz
            </Button>
          </Box>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};

export default Form;
