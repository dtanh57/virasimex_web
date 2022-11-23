import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import {Grid, List, ListItem, ListItemText, Typography} from "@mui/material";
import {Box} from "@mui/system";
import useTrans from "./hooks/useTrans";
import Image from "next/image";

export default function AppFooter() {
  const {Strings, push} = useTrans();

  const pages = [
    {label: Strings.home, value: "/home"},
    {label: Strings.service, value: "/service"},
    {label: Strings.newAndBlog, value: "/service"},
    {label: Strings.portfolio, value: "/newAndBlog"},
    {label: Strings.recruit, value: "/rescruit"},
  ];

  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          bgcolor: '#f3f4f6',
          justifyContent: "center",
          pt: 2,
          width: "100%",
        }}
      >
        <Grid container spacing={2} sx={{px: 3}} maxWidth="xl">
          <Grid item sm={4} xs={12} sx={{textAlign: "center", pt: 0}}>
            <Image
              alt="virasimex logo"
              href="/"
              src={"/logo.jpeg"}
              width={100}
              height={100}
            />
            <Typography fontSize="1.4em" sx={{mt: -3}}>
              {Strings.companyName || "VIRASIMEX"}
            </Typography>
            <Typography fontSize={".7em"}>
              Railway Import - Export and Supply Material Equipment Joint Stock
              Company
            </Typography>
            <Grid container sx={{mt: 2}} justifyContent='center'>
              <a href='https://line.me/ti/p/Baj3_KAFp_'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#00c300" d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z" /><path fill="#fff" d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z" /></svg>
              </a>
            </Grid>
          </Grid>
          <Grid item sm={4} xs={12}>
            <List dense={false}>
              {[
                {
                  label: "Số 132 Lê Duẩn - P. Nguyễn Du - Q. Hai Bà Trưng - Hà Nội",
                  icon: (props) => <LocationOnIcon {...props} />,
                },
                {
                  label: "vanpt25011987@gmail.com",
                  icon: (props) => <EmailIcon {...props} />,
                },
                {
                  label: "(+84)97-318-1000",
                  icon: (props) => <PhoneEnabledIcon {...props} />,
                },
              ].map((item) => {
                const Icon = (props) => item.icon(props);
                return (
                  <ListItem
                    key={`${item.label}`}
                    sx={{my: 2, width: "fit-content"}}
                  >
                    <Icon />
                    <ListItemText
                      sx={{m: 0, ml: 1}}
                      primary={item.label}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>

          <Grid item sm={4} xs={12}>
            <List dense={false}>
              {pages.map((item) => {
                return (
                  <ListItemText
                    key={`${item.label}`}
                    sx={{
                      my: 2,
                      ml: 2,
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                    onClick={() => push(item.value)}
                    primary={item.label}
                  />
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
