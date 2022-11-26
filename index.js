import PVObject from "PersistentData";

const config = new PVObject("NoFallingBlocks", {
  enabled: false,
  key: Keyboard.KEY_NONE,
});

let enabled = config.enabled;

let toggleKeyBind = new KeyBind(
  "Falling Blocks Toggle",
  config.key,
  "No Falling Blocks"
);

const prefix = "&8[&a&lNo Falling Blocks&8]&r &7&l> &r";

ChatLib.chat(`${prefix} &7Loaded successfully!`);

register("Tick", () => {
  if (!toggleKeyBind.isPressed()) return;
  enabled = !enabled;

  ChatLib.chat(
    `${prefix} &7Falling Blocks will now be ${enabled ? "&c&lhidden": "&ashown"}.`
  );

  config.key = toggleKeyBind.getKeyCode();
  config.enabled = enabled;
});

register("RenderEntity", (x) => x.getName() === "Falling Block" && enabled && x.getEntity().func_70106_y())
