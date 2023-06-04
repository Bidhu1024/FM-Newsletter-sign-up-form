import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import Illustrationsignupdesktop from "../assets/Illustrationsignupdesktop";
import Iconlist from "../assets/Iconlist";
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
const Emailpage = () => {
    const theme = useTheme();
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!text) {
      setErrorMessage("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(text)) {
      setErrorMessage("Invalid email format");
    } else {
      setErrorMessage("");

      setSuccess(true);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "hsl(235, 18%, 26%)",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
      }}
    >
      {!success ? (
        <>
          <Box
            sx={{
              boxShadow: 1,
              backgroundColor: "white",
              width: "50rem",
              height: "25rem",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
        },
            }}
          >
            <Stack
              sx={{
                width: "65%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 14px",
              }}
            >
              <Box sx={{ padding: "0 6px" }}>
                <Typography
                  color="hsl(234, 29%, 20%)"
                  fontSize="2rem"
                  fontWeight="700"
                >
                  Stay updated!
                </Typography>
                <Typography
                  color="hsl(234, 29%, 20%)"
                  fontSize={"1rem"}
                  fontWeight="400"
                >
                  Join 60,000+ product manager receiving monthly updates on:
                </Typography>
                <Box
                  sx={{
                    mt: ".6rem",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    {" "}
                    <Iconlist />
                    <Typography color={"hsl(234, 29%, 20%)"} fontWeight="400">
                      Product discovery and building what matters
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <Iconlist />
                    <Typography color={"hsl(234, 29%, 20%)"} fontWeight="400">
                      Measuring to ensure updates are a success{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <Iconlist />
                    <Typography color={"hsl(234, 29%, 20%)"} fontWeight="400">
                      And much more!
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mt: "1rem" }}>
                  <Typography
                    color={"hsl(234, 29%, 20%)"}
                    fontWeight="bold"
                    fontSize={"12px"}
                  >
                    Email Address
                  </Typography>
                  <Box>
                    <TextField
                      fullWidth
                      size="small"
                      helperText={errorMessage}
                      error={errorMessage}
                      placeholder="email@company.com"
                      type="email"
                      sx={{ borderRadius: "8px", mt: "5px" }}
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                      value={text}
                    />
                  </Box>
                  <Button
                    onClick={handleSubmit}
                    fullWidth
                    sx={{
                      borderRadius: "8px",
                      mt: ".5rem",
                      backgroundColor: " hsl(234, 29%, 20%)",
                    }}
                    variant="contained"
                  >
                    Subscribe to daily newsletter
                  </Button>
                  {/* {errorMessage && <div>{errorMessage}</div>} */}
                </Box>
              </Box>
            </Stack>
            <Box
              sx={{
                width: "35%",
                height: "100%",
                marginRight: "1.6rem",
                marginTop: "15px",
              }}
            >
              <Illustrationsignupdesktop />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              boxShadow: 1,
              backgroundColor: "white",
              width: "20rem",
              height: "25rem",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Box sx={{ mt: "4rem", position: "relative", left: 12 }}>
              <Iconlist />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Typography
                fontSize="2rem"
                fontWeight="700"
                color="hsl(234, 29%, 20%)"
              >
                Thanks for Subscribing!
              </Typography>
            </Box>

            <Typography fontSize={"14px"} color={"hsl(234, 29%, 20%)"}>
              A confirmation email has been sent to{" "}
              <span style={{ fontWeight: "bold" }}>{text}</span> . Please open
              it and click the button inside to confirm your subscription.
            </Typography>
            <Button
              sx={{
                mt: "1rem",
                backgroundColor: "hsl(234, 29%, 20%)",
                "&:hover": {
                  color: "white",
                  transition: "background-color 0.5s ease",
                  backgroundColor: "hsl(4, 100%, 67%)",
                },
              }}
              variant="contained"
              onClick={() => {
                setSuccess(false);
                setText("");
              }}
            >
              Dismiss Message
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Emailpage;
