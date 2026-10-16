import type { Project } from "./types";

/**
 * ============================================================================
 *  WORK GALLERY
 * ============================================================================
 * The gallery is intentionally empty. Only genuine, approved assets that are
 * already in `public/images/projects/` are shown — no placeholder projects,
 * no invented clients and no empty tiles.
 *
 * ADDING A PROJECT
 *   1. Put the image in           public/images/projects/
 *   2. Copy the block below, change the `id`, and fill in every field:
 *
 *      {
 *        id: "recruitment-campaign-creative",
 *        title: "Recruitment Campaign Creative",
 *        category: "Recruitment Campaigns",
 *        image: "/images/projects/recruitment-campaign-creative.webp",
 *        imageAlt: "A short, accurate description of the picture.",
 *        summary: "One sentence on what the piece is and who it was for.",
 *        tools: ["Canva", "Meta Business Suite"],
 *      },
 *
 *   3. Save. The cards, the filter buttons and the detail modal all appear
 *      automatically — until then the section shows only its heading and
 *      introduction, with no empty grid.
 *
 * Suggested labels, when accurate:
 *   Recruitment Campaign Creative · Social Media Content · Campaign
 *   Announcement · Recruitment Information Post · Content Design
 */

export const projects: Project[] = [];
