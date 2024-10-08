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

// weather slice interfaces

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

//posts slice interfaces

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
  status: "idle" | "loading" | "failed";
}

// profile interfaces
export interface UserState {
  data: {
    name: string;
    id: number;
    location: string;
    html_url: string;
    avatar_url: string;
    followers: number;
    following: number;
    bio: string;
  } | null;
  loading: boolean;
  error: string | null;
}
