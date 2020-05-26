import { Type } from "@/core/menu/types"

const menus = [
  {
    id: "comp_notice",
    name: "notice",
    label: "Notice",
    slug: "/doc/components/notice",
    parent: "components"
  },
  {
    id: "comp_table",
    name: "table",
    label: "Table",
    slug: "/doc/components/table",
    parent: "components"
  },
  {
    id: "comp_cover",
    name: "cover",
    label: "Cover",
    slug: "/doc/components/cover",
    parent: "components"
  },
  {
    id: "comp_dialog",
    name: "dialog",
    label: "Dialog",
    slug: "/doc/components/dialog",
    parent: "components"
  },
  {
    id: "comp_drawer",
    name: "drawer",
    label: "Drawer",
    slug: "/doc/components/drawer",
    parent: "components"
  }
] as Type[]

export default menus
