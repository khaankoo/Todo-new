import { Request, Response } from "express";
import { UserModel } from "../model/User";

type SignUpType = {
    username: string,
    password: string,
    avatarImage: string
}
type RequestBodyType = {
    body: SignUpType
}

export const signUp = async (req: Request, res: Response) => {
    try {
        const { username, password }: Required<SignUpType> = req.body
        const result = await UserModel.create(req.body)
        return res.status(201).send({ success: true})
    } catch (error: any) {
        const { code } = error 
        if ( code === 11000 ) {
            return 
        }
        return res.status(400).send({ success: true })
    }
}