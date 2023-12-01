import { useState } from 'react';

// material-ui
import { Grid, InputLabel, Stack, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// third-party
import { PatternFormat } from 'react-number-format';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| PLUGIN - MASK INPUT ||============================== //

const MaskPage = () => {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  const [time, setTime] = useState(new Date());
  const [datetime, setDatetime] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MainCard title="Date">
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Insert Date 1</InputLabel>
                  <DatePicker value={date1} onChange={(newValue) => setDate1(newValue)} />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Insert Date 2</InputLabel>
                  <DatePicker value={date2} onChange={(newValue) => setDate2(newValue)} format="mm-dd-yyyy" />
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <MainCard title="Time">
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Enter Time 1</InputLabel>
                  <TimePicker
                    ampm={false}
                    openTo="hours"
                    views={['hours', 'minutes', 'seconds']}
                    format="HH:mm:ss"
                    value={time}
                    onChange={(newValue) => {
                      setTime(newValue);
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Enter Time 2</InputLabel>
                  <MobileDateTimePicker
                    value={datetime}
                    onChange={(newValue) => {
                      setDatetime(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <MainCard title="Phone no.">
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Phone Number</InputLabel>
                  <PatternFormat format="+1 (###) ###-####" mask="_" fullWidth customInput={TextField} placeholder="Phone Number" />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Contact Number</InputLabel>
                  <PatternFormat format="+91 #### ###-####" mask="_" fullWidth customInput={TextField} placeholder="Contact Number" />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Telephone with Area Code</InputLabel>
                  <PatternFormat format="(##) ####-#####" mask="_" fullWidth customInput={TextField} placeholder="Tel. with Code Area" />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>US Telephone</InputLabel>
                  <PatternFormat format="(###) ### #####" mask="_" fullWidth customInput={TextField} placeholder="US Telephone" />
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <MainCard title="Network">
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Enter IP Address</InputLabel>
                  <PatternFormat format="###.###.###.###" mask="_" fullWidth customInput={TextField} placeholder="IP Address" />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Enter IPV4</InputLabel>
                  <PatternFormat format="####.####.####.####" mask="_" fullWidth customInput={TextField} placeholder="IPV4" />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Enter IPV6</InputLabel>
                  <PatternFormat
                    format="####:####:####:#:###:####:####:####"
                    mask="_"
                    fullWidth
                    customInput={TextField}
                    placeholder="IPV6"
                  />
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default MaskPage;
