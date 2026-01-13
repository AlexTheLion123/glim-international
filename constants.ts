
import { NavItem, ServiceTime } from './types';

export const CHURCH_NAME = "The Great Light Interdenominational Ministries International";
export const CHURCH_ACRONYM = "GLIM";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Inspiration", href: "#inspiration" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT_INFO = {
  email: "info.gliminternational@gmail.com",
  phone: "+27 71 275 5440",
  address: "Ubuntu Centre, 3 Wherry Road, Muizenberg, Cape Town",
  zoomId: "815 8664 8911",
  zoomPasscode: "GREATLIGHT",
};

export const DONATION_INFO = {
  accountHolder: "GLIM International (The Great Light Interdenominational Ministries International)",
  bank: "First National Bank (FNB)",
  accountNumber: "63136192498",
  branchCode: "250655",
};

export const SERVICE_TIMES: ServiceTime[] = [
  {
    day: "Sunday",
    time: "1:00 PM",
    timezone: "GMT+2",
    type: "Hybrid",
  }
];
