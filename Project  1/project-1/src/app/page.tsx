// pages/index.tsx

import ColorChangingButton from "@/components/ColorChangingButton";

export default function page() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <ColorChangingButton />
    </div>
  );
}
