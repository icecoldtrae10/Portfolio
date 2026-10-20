/**
 * Navigation definition. The header, the active-section observer and the
 * footer all read from here, so adding or renaming a section only needs one
 * edit.
 *
 * `href` must start with "#" and match the `id` of a section in
 * `src/app/page.tsx`.
 *
 * The link set is Home · Services · Work · Experience · About · Contact.
 * "Tools & Software" is on the page but not in the menu — the scroll-spy
 * simply skips it.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/** Pill button at the end of the navigation. */
export const navCta = { label: "Contact Me", href: "#contact" };

/**
 * Every section the scroll-spy watches, in document order.
 * Inactive targets simply leave the previously active link highlighted.
 */
export const observedSections: string[] = navItems.map((item) =>
  item.href.replace("#", ""),
);
