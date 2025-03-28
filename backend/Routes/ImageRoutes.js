import { Router } from 'express';
import { getAllImages, uploadImages, getImageDetailById } from '../Controllers/ImageController.js';
import { uploadMultiple } from '../Middlewares/FileUploader.js';

const routes = Router();

routes.get('/', getAllImages);
routes.get('/:id', getImageDetailById);
routes.post('/upload-images', uploadMultiple, uploadImages);

export default routes;
