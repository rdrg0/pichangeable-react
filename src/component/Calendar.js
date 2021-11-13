import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import styled from "@emotion/styled";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import { GetDate } from "../utils/GetDate";

const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
  {
    startDate: "2018-11-01T14:00",
    endDate: "2018-11-01T15:00",
    title: "Aldo Puerko",
  },
  {
    startDate: "2018-11-02T14:00",
    endDate: "2018-11-02T15:00",
    title: "Aldo Puerko",
  },
  {
    startDate: "2018-11-03T14:00",
    endDate: "2018-11-03T15:00",
    title: "Aldo Puerko",
  },
  {
    startDate: "2018-11-04T14:00",
    endDate: "2018-11-04T15:00",
    title: "Aldo Puerko",
  },
  {
    startDate: "2018-11-01T16:00",
    endDate: "2018-11-01T17:00",
    title: "Ana es una de mis mejores amigas",
  },
];

const ContainerCalendar = styled.div`
  margin: 0 auto;
`;

export const Calendar = () => {
  const [value, setValue] = React.useState(GetDate());
  console.log(GetDate());

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <ContainerCalendar>
        <Paper>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={value} />
            <WeekView startDayHour={9} endDayHour={23} />
            <Appointments />
          </Scheduler>
        </Paper>
      </ContainerCalendar>
    </>
  );
};
