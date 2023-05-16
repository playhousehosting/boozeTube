import { extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { textStyles, fonts } from './text';
import { semanticTokens } from './tokens';
import { Input as ChakraInput, Button as ChakraButton, Textarea as ChakraTextarea, Checkbox as ChakraCheckbox, AlertDialog as ChakraAlertDialog, Select as ChakraSelect, Switch as ChakraSwitch, Modal as ChakraModal } from '@chakra-ui/react';

const variantSolid = (props: any) => {
  const { colorScheme: c } = props;

  let bg = `${c}.400`;
  let color = `${c}.50`;
  let hoverBg = `${c}.500`;
  let activeBg = `${c}.600`;
  let disabledBg = `${c}.300`;
  let hoverColor = `${c}.50`;
  let borderColor = null;
  let hoverBorderColor = null

  if (c === 'contrast') {
    bg = 'bg-contrast-sm';
    color = 'text-contrast-lg';
    hoverBg = 'bg-contrast-md';
    activeBg = 'bg-contrast-lg';
    disabledBg = 'bg-contrast-sm';
  }

  if (c === 'purple') {
    bg = 'bg-contrast-sm';
    color = 'text-contrast-lg';
    hoverBg = 'bg-contrast-md';
    activeBg = 'bg-contrast-lg';
    disabledBg = 'purple.300';
    hoverColor = 'purple.400';
  }

  return {
    border: 'sm',
    borderColor,
    bgColor: bg,
    color: color,
    _hover: {
      bg: hoverBg,
      color: hoverColor,
      borderColor: hoverBorderColor
    },
    _focus: {
      boxShadow: 'none',
      borderColor: 'active',
    },
    _disabled: {
      bg: disabledBg,
      pointerEvents: 'none',
      opacity: 0.66,
    },
    _active: { bg: activeBg },
  };
};

export const Button = {
  defaultProps: {
    colorScheme: 'contrast',
  },
  baseStyle: {
    border: 'sm',
    transition: 'transform 0.05s ease-out, background 0.3s, opacity 0.3s',
  },
  variants: {
    solid: variantSolid,
  },
};

ChakraButton.defaultProps = {
  ...ChakraButton.defaultProps,
  fontSize: 'md',
  variant: 'solid',
  backdropFilter: 'blur(4px)',
};

ChakraCheckbox.defaultProps = {
  ...ChakraCheckbox.defaultProps,
  colorScheme: 'purple',
};

export const Checkbox = {
  baseStyle: {
    control: {
      border: 'md',
      borderColor: 'border-contrast-md',
      bg: 'bg-contrast-sm',
      _hover: {
        bg: 'bg-contrast-md',
        borderColor: 'border-contrast-md',
      },
      _focus: {
        boxShadow: '0px 0px 0px 2px var(--chakra-colors-active)',
        borderColor: 'active',
      },
      _disabled: {
        bg: 'bg-contrast-xs',
      },
    }
  }
};


ChakraInput.defaultProps = {
  ...ChakraInput.defaultProps,
  focusBorderColor: 'white',
  variant: 'outline',
};

export const Input = {
  variants: {
    outline: {
      field: {
        border: 'sm',
        borderColor: 'border-contrast-xs',
        bg: 'bg-contrast-sm',
        color: 'text-contrast-lg',
        _hover: {
          bg: 'bg-contrast-md',
          borderColor: 'border-contrast-md',
        },
        _focus: {
          boxShadow: 'none',
          borderColor: 'active',
        },
        _disabled: {
          bg: 'bg-contrast-xs',
        },
        _placeholder: {
          color: 'text-contrast-sm',
          fontSize: 'sm',
        },
      }
    },
  },
};

ChakraTextarea.defaultProps = {
  ...ChakraTextarea.defaultProps,
  focusBorderColor: 'white',
  variant: 'outline',
};

export const Textarea = {
  variants: {
    outline: {
      border: 'sm',
      borderColor: 'border-contrast-xs',
      bg: 'bg-contrast-sm',
      color: 'text-contrast-lg',
      _hover: {
        bg: 'bg-contrast-md',
        borderColor: 'border-contrast-md',
      },
      _focus: {
        boxShadow: 'none',
        borderColor: 'active',
      },
      _disabled: {
        bg: 'bg-contrast-xs',
      },
      _placeholder: {
        color: 'text-contrast-sm',
        fontSize: 'sm',
      },
    },
  },
};

export const Link = {
  baseStyle: {
    transition: 'all 0.1s ease-in-out',
    _hover: {
      textDecoration: 'none',
      boxShadow: '0px 1px 0px 0px var(--chakra-colors-active)',
    },
    _focus: {
      boxShadow: '0px 1px 0px 0px var(--chakra-colors-active)',
    },
    _active: { opacity: '0.5' },
  },
};

export const Select = {
  variants: {
    filled: {
      field: {
        bg: 'bg-contrast-sm',
        _hover: {
          bg: 'bg-contrast-md',
        },
        _disabled: {
          bg: 'bg-contrast-sm',
        },
      },
    },
  },
};

ChakraSelect.defaultProps = {
  ...ChakraSelect.defaultProps,
  focusBorderColor: 'purple.200',
  variant: 'filled',
};

export const Modal = {
  baseStyle: {
    dialog: {
      bg: 'bg-modal',
      color: 'text-contrast-lg',
      border: 'sm',
      borderColor: 'border-contrast-md',
      boxShadow: '0px 0px 0px 1px var(--chakra-colors-active)',
    },
    header: {
      color: 'text-contrast-lg',
    },
    footer: {
      color: 'text-contrast-md',
    },
  },
};

ChakraModal.defaultProps = {
  ...ChakraModal.defaultProps,
  // focusBorderColor: 'purple.200',
  // colorScheme: 'purple',
};


export const Switch = {
  baseStyle: {
    track: {
      bg: 'bg-contrast-sm',
    },
    thumb: {
      bg: 'bg-contrast-xs',
    },
  },
};

ChakraSwitch.defaultProps = {
  ...ChakraSwitch.defaultProps,
  focusBorderColor: 'purple.200',
  colorScheme: 'purple',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      fontSize: {
        base: '90%',
        md: '100%',
      },
    },
    body: {
      bgColor: 'bg-body',
    },
  }),
};



export const theme = extendTheme({
  components: {
    Modal,
    Input,
    Textarea,
    Button,
    Link,
    Checkbox,
    Select,
    // AlertDialog: {
    //   baseStyle: {
    //     body: {
    //       bgColor: 'bg-body',
    //     },
    //     dialog: {
    //       bg: 'bg-contrast-sm',
    //       color: 'text-contrast-lg',
    //       border: 'sm',
    //       borderColor: 'border-contrast-md',
    //       boxShadow: '0px 0px 0px 1px var(--chakra-colors-active)',
    //     },
    //     header: {
    //       color: 'text-contrast-lg',
    //     },
    //     footer: {
    //       color: 'text-contrast-md',
    //     },
    //   },
    // },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
  },
  config,
  textStyles,
  fonts,
  semanticTokens,
  styles,
  layerStyles: {
    card: {
      bgColor: 'bg-contrast-xs',
      border: 'sm',
      rounded: 'lg',
    },
    cardMd: {
      bgColor: 'bg-contrast-md',
      border: 'sm',
      rounded: 'lg',
    },
    cardLg: {
      bgColor: 'bg-contrast-lg',
      border: 'sm',
      rounded: 'lg',
    },
  },
  shadows: { outline: '0 0 0 3px var(--chakra-colors-active)' },
});
