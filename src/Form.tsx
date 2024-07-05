import { Button, Paper } from "@mui/material";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import "dayjs/locale/pl";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { eventTypes } from "./services/eventTypes";
import { initialValues } from "./services/initialValues";
import { postNewEvent } from "./services/postNewEvent";

const Form = () => {
  const [formData, setFormData] = useState(initialValues);
  const [dateTimeValue, setDateTimeValue] = useState<Dayjs | null>(null);
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    image: false,
    event_type: false,
    contact_phone: false,
    contact_email: false,
    event_location: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if (formData[e.target.name as keyof typeof errors] === "") {
      setErrors((prevState) => {
        const state = { ...prevState };
        state[e.target.name as keyof typeof errors] = true;
        return { ...state };
      });
    } else {
      setErrors((prevState) => {
        const state = { ...prevState };
        state[e.target.name as keyof typeof errors] = false;
        return { ...state };
      });
    }
  };

  const handleSubmit = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    formData.event_date_time = dateTimeValue!.format("YYYY-MM-DDTHH:mm:ss");
    console.log(JSON.stringify(formData));
    const dataToSend = JSON.stringify(formData);
    // postNewEvent(dataToSend);
  };

  const resetForm = () => {
    setFormData(initialValues);
    setDateTimeValue(null);
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
                required={true}
                fullWidth
                id="title"
                name="title"
                label="Tytuł wydarzenia"
                value={formData.title}
                onChange={handleChange}
                error={errors.title}
              />
            </div>
            <div>
              <DateTimePicker
                disablePast
                label="Data i czas wydarzenia *"
                name="event_date_time"
                value={dateTimeValue}
                onChange={(newValue) => setDateTimeValue(newValue)}
              />
              <TextField
                required={true}
                id="event_location"
                label="Miejsce wydarzenia"
                name="event_location"
                value={formData.event_location}
                onChange={handleChange}
                error={errors.event_location}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Dodatkowe informacje</legend>
            <div>
              <TextField
                required={true}
                id="image"
                name="image"
                label="Obrazek"
                value={formData.image}
                onChange={handleChange}
                error={errors.image}
              />
              <TextField
                required={true}
                select
                id="event_type"
                name="event_type"
                label="Rodzaj wydarzenia"
                defaultValue=""
                value={formData.event_type}
                onChange={handleChange}
                error={errors.event_type}
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
                required={true}
                multiline
                id="description"
                name="description"
                label="Opis wydarzenia"
                value={formData.description}
                onChange={handleChange}
                error={errors.description}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Informacje kontaktowe</legend>
            <div>
              <TextField
                required={true}
                id="contact_phone"
                name="contact_phone"
                label="Telefon kontaktowy"
                value={formData.contact_phone}
                onChange={handleChange}
                error={errors.contact_phone}
              />
              <TextField
                required={true}
                id="contact_email"
                name="contact_email"
                label="E-mail do kontaktu"
                value={formData.contact_email}
                onChange={handleChange}
                error={errors.contact_email}
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
