import {
  Box,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { LinkItemProps, SidebarProps } from "../interfaces/index";

import { LuListTodo } from "react-icons/lu";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdNewspaper } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import NavItem from "./NavItem";

const LinkItems: Array<LinkItemProps> = [
  { name: "To-Do", icon: LuListTodo, path: "/" },
  { name: "Weather", icon: TiWeatherPartlySunny, path: "/weather" },
  { name: "Posts", icon: MdNewspaper, path: "/posts" },
  { name: "Profile", icon: FaUser, path: "/profile" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          MTN
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.path}
          onClick={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
