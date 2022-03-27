import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x11539d6826b06c51dfF20b99cA0efE445391Fc47");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Shadow NFT",
        description: "This NFT will give you access to ShadowDAO.",
        image: readFileSync("scripts/assets/shadows.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();