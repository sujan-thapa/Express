fs.mkdir(ext, { recursive: true });        // fs.mkdir(ext);
    
            console.log("folder exists")
    
            if (ext != "js" && ext != "json" && filename.split(".").length > 1) {
                fs.rename(path.join(basepath, filename), path.join(basepath, ext, filename))
                
            }