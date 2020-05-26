import { Type } from "@/core/menu/types"
import components from "./components"
import core from "./core"

const menus = [
  {
    id: "get-started",
    name: "get-started",
    label: "Get Started",
    slug: "/doc/guide/get-started",
    parent: "",
    rank: "100",
    icon_type: "eva",
    icon: "play-circle-outline"
  },
  {
    id: "core",
    name: "core",
    label: "Core",
    parent: "",
    rank: "100",
    icon_type: "eva",
    icon: "archive-outline"
  },
  {
    id: "comp",
    name: "components",
    label: "Components",
    parent: "",
    rank: "100",
    icon_type: "eva",
    icon: "hard-drive-outline"
  },
  ...core,
  ...components
] as Type[]

export default menus
