import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let basepath = "/Users/macbook/Documents/web/NinetyOne";

try {
    let files = await fs.readdir(basepath);

    for (const filename of files) {
        const ext = filename.split(".").pop(); // Get the file extension

        // Skip directories and certain file extensions
        if (ext && ext !== "js" && ext !== "json" && filename.split(".").length > 1) {
            const extDir = path.join(basepath, ext);

            // Check if the directory exists; if not, create it
            if (!fsn.existsSync(extDir)) {
                await fs.mkdir(extDir, { recursive: true });
                console.log(`Created directory: ${ext}`);
            }

            // Move the file to the new folder based on its extension
            const oldPath = path.join(basepath, filename);
            const newPath = path.join(extDir, filename);

            await fs.rename(oldPath, newPath);
            console.log(`Successfully moved ${filename} to ${ext}/`);
        }
    }
} catch (error) {
    console.error("Error:", error);
}
