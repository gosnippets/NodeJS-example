import multer, { memoryStorage } from "multer";


var storage = memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 1 * 1000 * 1000 }
});

export default upload;