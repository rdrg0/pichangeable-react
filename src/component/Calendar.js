import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import styled from "@emotion/styled";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import { GetDate, GetDateFormat } from "../utils/GetDate";
import Popover from "@mui/material/Popover";
import TimePicker from "@mui/lab/TimePicker";
import { Button } from "@material-ui/core";
import { ButtonGreen } from "../component/UI/Buttons";
import { AxiosCreateReservation } from "services/AxiosReservation";
import { convertNeSwToNwSe } from "google-map-react";
import { useHistory } from "react-router";

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

const FormReservation = styled.form`
  height: 300px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  /* background-color: blue; */
`;

const Input = styled.input`
  height: 40px;
  border: 1px solid var(--light-green);
  width: 100%;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px;
`;

export const Calendar = () => {
  const [value, setValue] = React.useState(GetDate());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  const history = useHistory();

  // function clickModalReservation(e) {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   console.log("aqui");
  // }

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };
  
  const sendDataReservation = async (e) => {
    e.preventDefault();

    function addZero(i) {
      if (i < 10) {i = "0" + i}
      return i;
    }

    const DataField = JSON.parse(sessionStorage.getItem("selectedField"));

    console.log(GetDateFormat(value), addZero(startTime.getHours()), addZero(endTime.getHours()));
    // 01/03/2020 , 01:00 , 02:00

    console.log(DataField.id);


    let datareservation = {
      start_date_hour: `${GetDateFormat(value)} ${addZero(startTime.getHours())}:${addZero(startTime.getMinutes())}`,
      end_date_hour: `${GetDateFormat(value)} ${addZero(endTime.getHours())}:${addZero(endTime.getMinutes())}`,
      total: DataField.price_hour*(endTime.getHours() - startTime.getHours()),
      field_id: parseInt(DataField.id),
    };

    // console.log(`${GetDateFormat(value)} ${addZero(startTime.getHours())}:${addZero(startTime.getMinutes())}`);
    // console.log(`${GetDateFormat(value)} ${addZero(endTime.getHours())}:${addZero(endTime.getMinutes())}`);

    console.log(datareservation);
    // GetDateFormat(value), addZero(startTime.getHours()), addZero(endTime.getHours())
    await AxiosCreateReservation(datareservation);
    history.push("/home");
  }
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Paper onClick={handleClick} aria-describedby={id}>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={value} />
            <DayView startDayHour={9} endDayHour={23} />
            <Appointments />
          </Scheduler>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <FormReservation>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Hora inicio"
                  value={startTime}
                  onChange={(newValue) => {
                    setStartTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Hora fin"
                  value={endTime}
                  onChange={(newValue) => {
                    setEndTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Input
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                // value={ctx.session.email}
                // onChange={ctx.handleChangeLogin}
              ></Input>
              <div onClick={sendDataReservation}>
              <ButtonGreen> Enviar reserva</ButtonGreen>
              </div>
              <p>Press "esc" for exit</p>
            </FormReservation>
          </Popover>
        </Paper>
      </ContainerCalendar>
    </>
  );
};
