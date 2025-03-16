import { Request, Response } from "express";
const apiController = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { apiController };
