import dbConnect from "../db";
import Registration from "../db/model/Registration";
export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const getCountAndLastEntry = async () => {
    try {
      const allRegistration = await Registration.find({});
      let count = allRegistration.reduce(
        (acc, currentValue) => {
          if (acc[currentValue.category] !== undefined) {
            acc[currentValue.category]++;
          }
          return acc;
        },
        {
          Student: 0,
          Startup: 0,
          "Local Business/SME": 0,
          "Working Professional": 0,
          "NRE or Gulf Returnees": 0,
          Other: 0,
        }
      );
      return {
        count,
        totalEntry: allRegistration.length,
        lastEntry: allRegistration[allRegistration.length - 1],
      };
    } catch (err) {
      return { err };
    }
  };

  switch (method) {
    case "GET":
      const data = await getCountAndLastEntry();
      if (data.err)
        return res.status(400).json({ message: "Something went wrong" });
      return res
        .status(200)
        .json({ data, message: "Count fetched successfully" });
  }
}
