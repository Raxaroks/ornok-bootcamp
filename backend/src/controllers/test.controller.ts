import { Request, Response } from "express";


// GET - Test route
export const getHello = async (req: Request, res: Response) => {
    const { content } = req.query;
    
    if (!content)
        return await res.status(500).json({
            ok: false,
            msg: "Internal Server Error"
        });

    return await res.json({
        ok: true,
        msg: "Hello puto!",
        queryparam: content
    });
};