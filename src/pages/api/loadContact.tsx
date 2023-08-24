import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: string): void; new (): any };
    };
  }
) {
  const jsonDirectory = path.join(process.cwd(), "json");

  const fileContent = await fs.readFile(
    jsonDirectory + "/contact.json",
    "utf8"
  );
  const obJect = JSON.parse(fileContent);
  res.status(200).json(fileContent);
}

export async function loadContactold() {
  const env = process.env.NODE_ENV;
  const data = {
    github: "https://github.com/aakash98",
    linkedin: "https://www.linkedin.com/in/aakash-mahadevan/",
    email: "imaakash98@gmail.com",
    phone: "+919660845930",
  };
  return data;
}
