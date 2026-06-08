import React from "react";

const TabsContext = React.createContext<{ active: string; setActive: (id: string) => void } | null>(null);

function Tabs({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState("tab1");
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", gap: "1rem" }}>{children}</div>;
}

function Tab({ id, children }: { id: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)!;
  return (
    <button
      style={{ fontWeight: ctx.active === id ? "bold" : "normal" }}
      onClick={() => ctx.setActive(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }: { id: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext)!;
  return ctx.active === id ? <div>{children}</div> : null;
}

export default function CompoundComponents() {
  return (
    <Tabs>
      <TabList>
        <Tab id="tab1">Home</Tab>
        <Tab id="tab2">Profile</Tab>
      </TabList>
      <TabPanel id="tab1">🏠 Welcome Home</TabPanel>
      <TabPanel id="tab2">👤 User Profile</TabPanel>
    </Tabs>
  );
}
