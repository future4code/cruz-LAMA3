import dotenv from "dotenv";
import { AddressInfo } from "net";
import express, { Request, Response } from "express";
import { userRouter } from "./routes/userRouter";
import { showRouter } from "./routes/showRouter";
import { bandRouter } from "./routes/bandRouter";
import { CustomError } from "./error/BaseError";
import "express-async-errors"
dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/show", showRouter);
app.use("/band", bandRouter);

app.use((err: CustomError, req: Request, res: Response) => {
  if (err instanceof CustomError) {
    return res.status(err.code).send({ message: err.message });
  }

  return res.status(500).send({ message: "Internal Server Error" });
});

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
