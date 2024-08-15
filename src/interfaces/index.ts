import { FlexProps, BoxProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

// todo interfaces
export interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

export interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  path: string;
}

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export interface ITodo {
  id: number;
  title: string;
  text: string;
  completed: boolean;
}

// weather interfaces

export interface WeatherState {
  currentWeather: CurrentWeather | null;
  forecast: Forecast | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface CurrentWeather {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    main: string;
  }[];
}

export interface Forecast {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      main: string;
    }[];
  }[];
}
