import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/shared/logo";
import { ModeToggle } from "@/components/mode-toogle";

export default function AdminSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="bg-primary/5 border-r border-primary/20"
    >
      {/* Header with Logo */}
      <SidebarHeader>
        <div className="flex items-center p-2">
          <Logo />
          <h2 className="ml-2 text-xl font-bold">CineScope</h2>
          <div className="ml-auto flex items-center">
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>ABC</SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
