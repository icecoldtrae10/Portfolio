/**
 * Navigation definition. Kept here so the header, the active-section observer
 * and the footer all agree on the same ids.
 */

export interface NavItem {
  label: string;
  href: string;
  /** id of the section this points at, without the "#". */
  sectionId: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Work", href: "#work", sectionId: "work" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

/**
 * Every section the scroll-spy watches, in document order.
 * Inactive targets simply leave the previously active link highlighted.
 */
export const observedSections: string[] = navItems.map((item) => item.sectionId);
