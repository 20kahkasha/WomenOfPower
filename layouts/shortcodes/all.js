import Accordion from "./Accordion";
import Button from "./Button";
import Code from "./Code";
import Heading from "./Heading";
import Notice from "./Notice";
import para from "./para";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Video from "./Video";
import Youtube from "./Youtube";

const shortcodes = {
  Button,
  Accordion,
  Video,
  Tab,
  Tabs,
  Notice,
  Code,
  Youtube,
  h1: Heading,
  p: para
};

export default shortcodes;
