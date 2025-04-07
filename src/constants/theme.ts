import { alpha, createTheme, linearProgressClasses } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ptBR } from "@mui/material/locale";
import type {} from "@mui/x-date-pickers/themeAugmentation";

const colorSchemes = {
  light: {
    palette: {
      primary: {
        main: "#000000",
        contrastText: "#F2F2F7",
      },
      text: {
        primary: "#000000",
        secondary: "#F2F2F7",
        tertiary: "#212121",
      },
      background: {
        default: "#ffffff",
        defaultChannel: "#000000",
        secondary: "#FAFAFA",
      },
      error: {
        main: "#d32f2f",
      },
    },
  },
};

export const theme = createTheme(
  {
    colorSchemes,
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "SF Pro Display",
          },
          h1: {
            fontSize: "1.75rem",
          },
          h2: {
            fontSize: "1.5rem",
          },
          h4: {
            fontSize: "1.25rem",
          },
          h5: {
            fontSize: "1.125rem",
          },
          h6: {
            fontSize: "0.9375rem",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            fontFamily: "SF Pro Display",
          },
        },
        variants: [
          {
            props: { variant: "contained", color: "inherit" },
            style: {
              backgroundColor: "#f2f2f7",
              ":hover": {
                backgroundColor: "#ececf0",
              },
            },
          },
        ],
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 12,
            borderRadius: 10,
            background: "#EEEEEE",
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 10,
            },
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            color: colorSchemes.light.palette.text.tertiary,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontFamily: "Urbanist",
            fontWeight: 600,
            fontSize: 18,
            color: colorSchemes.light.palette.text.tertiary,
            transform: "scale(1)",
            "&.negative": {
              color: colorSchemes.light.palette.background.default,
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-input": {
              "label + &": {
                marginTop: 32,
              },
              fontFamily: "Urbanist",
              fontWeight: 600,
              fontSize: 18,
              color: colorSchemes.light.palette.text.tertiary,
              backgroundColor: colorSchemes.light.palette.background.secondary,
              borderRadius: 10,
              padding: "16px 20px",
              border: `2px solid ${colorSchemes.light.palette.background.secondary}`,
              lineHeight: "26px",
              transition:
                "border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              "&:focus, .Mui-focused + &": {
                borderRadius: 10,
                backgroundColor: alpha(
                  colorSchemes.light.palette.primary.main,
                  0.08
                ),
                borderColor: colorSchemes.light.palette.primary.main,
              },
            },
            "&.negative .MuiInputBase-input": {
              "&:focus, .Mui-focused + &": {
                backgroundColor: colorSchemes.light.palette.background.default,
                borderColor: colorSchemes.light.palette.background.default,
              },
            },
            "&.MuiInputBase-adornedStart": {
              padding: 0,
              marginTop: 32,
              position: "relative",
              "& input": {
                paddingLeft: 50,
              },
              "& .MuiInputAdornment-positionStart": {
                position: "absolute !important",
                left: 14,
                bottom: 16,
                svg: {
                  color: colorSchemes.light.palette.text.tertiary,
                },
              },
            },
            "&.MuiInputBase-adornedEnd": {
              padding: 0,
              position: "relative",
              "& .MuiInputAdornment-positionEnd": {
                position: "absolute",
                right: 14,
                bottom: 14,
                svg: {
                  color: colorSchemes.light.palette.text.tertiary,
                },
              },
            },
            "&.Mui-error .MuiInputBase-input": {
              borderColor: colorSchemes.light.palette.error.main,
            },
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            "& .MuiTypography-root": {
              width: 34,
              height: 30,
              fontSize: 18,
              fontWeight: 600,
              fontFamily: "Urbanist",
              color: colorSchemes.light.palette.text.tertiary,
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiPopover: {
        defaultProps: {
          elevation: 2,
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: "Urbanist",
            fontWeight: 600,
            color: colorSchemes.light.palette.text.tertiary,
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: KeyboardArrowDownIcon,
        },
        styleOverrides: {
          root: {
            "label + &": {
              marginTop: 0,
            },
            "&::after, &::before": {
              display: "none",
            },
            "& .MuiSvgIcon-root": {
              top: "calc(50% + 4px)",
              right: 10,
            },
            "& .MuiSelect-icon": {
              color: colorSchemes.light.palette.text.tertiary,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            border: "0",
            fontFamily: "Urbanist",
            fontSize: 18,
            "& fieldset": {
              border: "none",
            },
          },
        },
      },
      MuiPickersPopper: {
        styleOverrides: {
          paper: {
            boxShadow:
              "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
          },
        },
      },
      MuiDayCalendar: {
        styleOverrides: {
          weekDayLabel: {
            color: colorSchemes.light.palette.text.tertiary,
          },
        },
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            fontFamily: "SF Pro Display",
            fontWeight: 600,
          },
        },
      },
      MuiPickersCalendarHeader: {
        styleOverrides: {
          label: {
            fontFamily: "SF Pro Display",
            fontWeight: 600,
          },
        },
      },
      MuiDatePickerToolbar: {
        styleOverrides: {
          root: {
            "& .MuiTypography-overline": {
              color: colorSchemes.light.palette.text.tertiary,
            },
          },
          title: {
            color: colorSchemes.light.palette.text.tertiary,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            alignItems: "center",
            background: colorSchemes.light.palette.background.default,
            borderRadius: 0,
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            maxWidth: 444,
            width: "100%",
            padding: 24,
          },
        },
      },
      MuiBadge: {
        styleOverrides: {
          badge: {
            top: -3,
            right: -3,
          },
        },
      },
    },
  },
  ptBR
);
