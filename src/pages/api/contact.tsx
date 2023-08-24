export default function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          github: string;
          linkedin: string;
          email: string;
          phone: string;
        }): void;
        new (): any;
      };
    };
  }
) {
  res.status(200).json({
    github: "https://github.com/aakash98",
    linkedin: "https://www.linkedin.com/in/aakash-mahadevan/",
    email: "imaakash98@gmail.com",
    phone: "+919660845930",
  });
}
