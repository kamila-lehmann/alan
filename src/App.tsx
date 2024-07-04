import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import EventsList from "./EventsList";
import Event from "./Event";
import Form from "./Form";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<EventsList />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);
root.render(<App />);
