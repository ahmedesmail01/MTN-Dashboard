import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import MobileNav from "./MobileNav";
import SidebarContent from "./SidebarContent";
import { Route, Routes } from "react-router-dom";
import ToDoPage from "../pages/ToDoPage";
import WeatherPage from "../pages/WeatherPage";
import PostsPage from "../pages/PostsPage";
import ProfilePage from "../pages/ProfilePage";

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Routes>
          <Route path="/" element={<ToDoPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Layout;
