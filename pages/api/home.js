import { dataHome } from "../../public/mock";

export default function home(req, res) {
  res.status(200).json(dataHome);
}
