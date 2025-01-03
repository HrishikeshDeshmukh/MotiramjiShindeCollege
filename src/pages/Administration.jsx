import React from 'react'
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Designation", "Address"];

const TABLE_ROWS = [
  {
    name: "Shri. Motiramji M. Shinde",
    job: "Chairman",
    date: "At. Sawali (Sa) Dist. Wardha",
  },
  {
    name: "Shri. Prashant V. Burle",
    job: "Vice President",
    date: "Ramnagar, Wardha",
  },
  {
    name: "Shri. Sunil M. Shinde",
    job: "Secretary",
    date: "Hiramoti Building, Mahilashram, Wardha",
  },
  {
    name: "Shri. Dinesh V. Waratkar",
    job: "Joint Secretary",
    date: "Nalwadi, Wardha",
  },
  {
    name: "Shri. Sanjay V. Akre",
    job: "Director",
    date: "Wanjari Chowk, Wardha",
  },
  {
    name: "Dr. Rahul R. Marothi",
    job: "Director",
    date: "Arihant Hospital, Hinganghat",
  },
  {
    name: "Dr.Rajendra R. Borkar",
    job: "Director",
    date: "Balhari Hospital, Wardha",
  },
  {
    name: "Shri. Sandip M. Shinde",
    job: "Director",
    date: "Mahilashram, Wardha",
  },
  {
    name: "Sau. Supriya S. Shinde",
    job: "Director",
    date: "Hiramoti Building, Mahilashram, Wardha",
  },
  {
    name: "Sau. Nayana S. Zade",
    job: "Special Invited Director",
    date: "Ramna Maroti Nagar, Nagpur",
  },
  {
    name: "Prof. Mahesh P. Dhabale",
    job: "Special Invited Director",
    date: "Vishram Wadi, Pune",
  },

];


const Administration = () => {
  return (
    <div class="flex flex-col pt-7 px-6 md:px-20  items-center justify-center bg-hero">
      <div class="flex gap-6 flex-row items-center max-w-8xl">
        <div className='my-3 flex flex-col justify-center'>
          <h2 class="text-xl lg:text-3xl text-center font-bold md:text-left text-blue-900 leading-tight ">
            Shri Awadhut Bahuuddeshiya Sewa Sanstha
          </h2>
          <div className='flex items-center justify-center text-slate-700 gap-6 text-sm my-3'>
            <p>Reg.no. W36/95</p>
            <p>Mah.f-2345</p>


          </div>

          <div className='flex items-center justify-center my-6'>
            <h2 class="text-xl lg:text-2xl text-center font-bold md:text-left text-slate-600 leading-tight ">
              Board of Directors
            </h2></div>

        </div>
      </div>

      <Card className="h-full w-full overflow-scroll max-w-6xl my-5">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-slate-200 p-4">
                  <Typography
                    variant="medium"
                    color="blue-gray"
                    className={`font-bold leading-none opacity-70 `}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
              const hide = isLast ? "hidden md:block" : "";

              return (
                <tr key={name}>
                  <td className={`${classes}`}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {job}
                    </Typography>
                  </td>
                  <td className={`${classes} hidden md:flex`}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

    </div>
  )
}

export default Administration
