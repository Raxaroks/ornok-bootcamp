import axios from "axios";
import { Request, Response } from "express";
import { GetListUsersResponse } from "../interfaces/get-list-users.response";  

export const getListUsers = async ( req: Request, res: Response ) => {
    const { pageNumber } = req.query;

    if (!pageNumber)
        return res.status(400).json({
            ok: false,
            msg: "Is not a valid page number."
        });
    else {
        const reqresEndpoint: string = "https://reqres.in/api/users";
        try {
            const { data } = await axios.get( reqresEndpoint, { params: { page: pageNumber } } );
            const resp: GetListUsersResponse = data;

            return res.json({
                ok: true,
                total: resp.data.length,
                users: resp.data
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: "Internal Server Error"
            })
        } 
    }

}