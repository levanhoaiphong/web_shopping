import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import * as multer from 'multer';
import { extname } from 'path';

interface UploadMiddlewareOptions {
    destination: string;
}
@Injectable()
export class UploadMiddleware implements NestMiddleware {
    constructor(private options: UploadMiddlewareOptions) { }
    use(req: Request, res: Response, next: NextFunction) {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, `./public/${this.options.destination}`);
            },
            filename: (req, files, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, files.fieldname + '-' + uniqueSuffix + extname(files.originalname));
            },
        });

        const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                return cb(new Error('Only jpg, jpeg, png, gif are allowed'));
            }
            cb(null, true);
        };

        const upload = multer({
            storage,
            fileFilter,
            limits: { fileSize: 1024 * 1024 * 5 },
        }).array(`${this.options.destination}`);

        upload(req, res, (err: any) => {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ message: err.message });
            } else if (err) {
                return res.status(400).json({ message: err.message });
            }
            next();
        });

    }
}