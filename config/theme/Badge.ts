import { createStyle } from "@gluestack-style/react";

export const Badge = createStyle({
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "$xs",
  variants: {
    action: {
      error: {
        bg: "$backgroundLightError",
        borderColor: "$error300",
        _icon: {
          color: "$error600",
        },
        _text: {
          color: "$error600",
        },
        _dark: {
          bg: "$backgroundDarkError",
          borderColor: "$error700",
          _text: {
            color: "$error400",
          },
          _icon: {
            color: "$error400",
          },
        },
      },
      rose: {
        bg: "$rose50",

        borderColor: "$rose300",
        _icon: {
          color: "$rose600",
        },
        _text: {
          color: "$rose600",
        },
        _dark: {
          bg: "$rose900",
          borderColor: "$rose700",
          _text: {
            color: "$rose400",
          },
          _icon: {
            color: "$rose400",
          },
        },
      },
      pink: {
        bg: "$pink50",
        borderColor: "$pink300",
        _icon: {
          color: "$pink600",
        },
        _text: {
          color: "$pink600",
        },
        _dark: {
          bg: "$pink900",
          borderColor: "$pink700",
          _text: {
            color: "$pink400",
          },
          _icon: {
            color: "$pink400",
          },
        },
      },
      fuchsia: {
        bg: "$fuchsia50",
        borderColor: "$fuchsia300",
        _icon: {
          color: "$fuchsia600",
        },
        _text: {
          color: "$fuchsia600",
        },
        _dark: {
          bg: "$fuchsia900",
          borderColor: "$fuchsia700",
          _text: {
            color: "$fuchsia400",
          },
          _icon: {
            color: "$fuchsia400",
          },
        },
      },
      purple: {
        bg: "$purple50",
        borderColor: "$purple300",
        _icon: {
          color: "$purple600",
        },
        _text: {
          color: "$purple600",
        },
        _dark: {
          bg: "$purple900",
          borderColor: "$purple700",
          _text: {
            color: "$purple400",
          },
          _icon: {
            color: "$purple400",
          },
        },
      },
      violet: {
        bg: "$violet50",
        borderColor: "$violet300",
        _icon: {
          color: "$violet600",
        },
        _text: {
          color: "$violet600",
        },
        _dark: {
          bg: "$violet900",
          borderColor: "$violet700",
          _text: {
            color: "$violet400",
          },
          _icon: {
            color: "$violet400",
          },
        },
      },
      indigo: {
        bg: "$indigo50",
        borderColor: "$indigo300",
        _icon: {
          color: "$indigo600",
        },
        _text: {
          color: "$indigo600",
        },
        _dark: {
          bg: "$indigo900",
          borderColor: "$indigo700",
          _text: {
            color: "$indigo400",
          },
          _icon: {
            color: "$indigo400",
          },
        },
      },
      cyan: {
        bg: "$cyan50",
        borderColor: "$cyan300",
        _icon: {
          color: "$cyan600",
        },
        _text: {
          color: "$cyan600",
        },
        _dark: {
          bg: "$cyan900",
          borderColor: "$cyan700",
          _text: {
            color: "$cyan400",
          },
          _icon: {
            color: "$cyan400",
          },
        },
      },
      teal: {
        bg: "$teal50",
        borderColor: "$teal300",
        _icon: {
          color: "$teal600",
        },
        _text: {
          color: "$teal600",
        },
        _dark: {
          bg: "$teal900",
          borderColor: "$teal700",
          _text: {
            color: "$teal400",
          },
          _icon: {
            color: "$teal400",
          },
        },
      },
      emerald: {
        bg: "$emerald50",
        borderColor: "$emerald300",
        _icon: {
          color: "$emerald600",
        },
        _text: {
          color: "$emerald600",
        },
        _dark: {
          bg: "$emerald900",
          borderColor: "$emerald700",
          _text: {
            color: "$emerald400",
          },
          _icon: {
            color: "$emerald400",
          },
        },
      },
      lime: {
        bg: "$lime50",
        borderColor: "$lime300",
        _icon: {
          color: "$lime600",
        },
        _text: {
          color: "$lime600",
        },
        _dark: {
          bg: "$lime900",
          borderColor: "$lime700",
          _text: {
            color: "$lime400",
          },
          _icon: {
            color: "$lime400",
          },
        },
      },
      yellow: {
        bg: "$yellow50",
        borderColor: "$yellow300",
        _icon: {
          color: "$yellow600",
        },
        _text: {
          color: "$yellow600",
        },
        _dark: {
          bg: "$yellow900",
          borderColor: "$yellow700",
          _text: {
            color: "$yellow400",
          },
          _icon: {
            color: "$yellow400",
          },
        },
      },
      amber: {
        bg: "$amber50",
        borderColor: "$amber300",
        _icon: {
          color: "$amber600",
        },
        _text: {
          color: "$amber600",
        },
        _dark: {
          bg: "$amber900",
          borderColor: "$amber700",
          _text: {
            color: "$amber400",
          },
          _icon: {
            color: "$amber400",
          },
        },
      },
      warning: {
        bg: "$backgroundLightWarning",
        borderColor: "$warning300",
        _icon: {
          color: "$warning600",
        },
        _text: {
          color: "$warning600",
        },
        _dark: {
          bg: "$backgroundDarkWarning",
          borderColor: "$warning700",
          _text: {
            color: "$warning400",
          },
          _icon: {
            color: "$warning400",
          },
        },
      },
      success: {
        bg: "$backgroundLightSuccess",
        borderColor: "$success300",
        _icon: {
          color: "$success600",
        },
        _text: {
          color: "$success600",
        },
        _dark: {
          bg: "$backgroundDarkSuccess",
          borderColor: "$success700",
          _text: {
            color: "$success400",
          },
          _icon: {
            color: "$success400",
          },
        },
      },
      info: {
        bg: "$backgroundLightInfo",
        borderColor: "$info300",
        _icon: {
          color: "$info600",
        },
        _text: {
          color: "$info600",
        },
        _dark: {
          bg: "$backgroundDarkInfo",
          borderColor: "$info700",
          _text: {
            color: "$info400",
          },
          _icon: {
            color: "$info400",
          },
        },
      },
      muted: {
        bg: "$backgroundLightMuted",
        borderColor: "$secondary300",
        _icon: {
          color: "$secondary600",
        },
        _text: {
          color: "$secondary600",
        },
        _dark: {
          bg: "$backgroundDarkMuted",
          borderColor: "$secondary700",
          _text: {
            color: "$secondary400",
          },
          _icon: {
            color: "$secondary400",
          },
        },
      },
    },

    variant: {
      solid: {},
      outline: {
        borderWidth: "$1",
      },
    },

    size: {
      sm: {
        px: "$2",
        _icon: {
          props: {
            size: "2xs",
          },
        },
        _text: {
          props: {
            size: "2xs",
          },
        },
      },
      md: {
        px: "$2",
        _icon: {
          props: {
            size: "xs",
          },
        },
        _text: {
          props: {
            size: "xs",
          },
        },
      },
      lg: {
        px: "$2",
        _icon: {
          props: { size: "sm" },
        },
        _text: {
          props: { size: "sm" },
        },
      },
    },
  },

  ":disabled": {
    opacity: 0.5,
  },
  defaultProps: {
    action: "info",
    variant: "solid",
    size: "md",
  },
});
