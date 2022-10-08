import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "../styles/TableData.css";

const tableData = [
  {
    company_name: "Infosys",
    company_img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png",
    email: "management@infosys.com",
    phone: "+91 2376309835",
    name: "Vijayent Roy",
    facilitator: "--",
    sites: "12",
    tenants: "--",
    tenantGrp: "--",
    actions: "--",
  },
  {
    company_name: "Wipro",
    company_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png",
    email: "management@wipro.com",
    phone: "+91 9834687423",
    name: "Kalpit Soni",
    facilitator: "--",
    sites: "8",
    tenants: "--",
    tenantGrp: "--",
    actions: "--",
  },
  {
    company_name: "Accenture",
    company_img: "https://www.savethechildren.org/content/dam/usa/images/donors/partners/logos/accenture-rec.png/_jcr_content/renditions/original",
    email: "management@accenture.com",
    phone: "+91 8732654789",
    name: "Drishti Sane",
    facilitator: "--",
    sites: "4",
    tenants: "--",
    tenantGrp: "--",
    actions: "--",
  },
  {
    company_name: "Capgemini",
    company_img: "https://pbs.twimg.com/profile_images/1481197280955101184/wfgZ2R5V_400x400.jpg",
    email: "management@capgemini.com",
    phone: "+91 8432657463",
    name: "Aisha Keer",
    facilitator: "--",
    sites: "6",
    tenants: "--",
    tenantGrp: "--",
    actions: "--",
  },
  {
    company_name: "Lodha",
    company_img: "https://www.promarinetrade.com/cache/promarine/public/shop_product_picture/_1200x800x0/4623_L.jpg",
    email: "management@lodha.com",
    phone: "+91 6573246958",
    name: "Kanika Khare",
    facilitator: "--",
    sites: "24",
    tenants: "16",
    tenantGrp: "--",
    actions: "--",
  },
  {
    company_name: "Tata Consultancy Service",
    company_img: "https://www.gartner.com/imagesrv/peer-insights/vendors/logos/tata-consultancy-services-tcs.png",
    email: "management@tcs.com",
    phone: "+91 9316985467",
    name: "Prabhat Rao",
    facilitator: "--",
    sites: "10",
    tenants: "--",
    tenantGrp: "--",
    actions: "--",
  },
  {
    company_name: "HCL",
    company_img: "https://s3-symbol-logo.tradingview.com/hcl-technologies--600.png",
    email: "management@hcl.com",
    phone: "+91 9356846852",
    name: "Venkat Pant",
    facilitator: "--",
    sites: "5",
    tenants: "2",
    tenantGrp: "--",
    actions: "--",
  },
  {
    company_name: "Redington",
    company_img: "https://www.promarinetrade.com/cache/promarine/public/shop_product_picture/_1200x800x0/4629_R.jpg",
    email: "management@redington.com",
    phone: "+91 9456378294",
    name: "Samit Yadav",
    facilitator: "--",
    sites: "1",
    tenants: "1",
    tenantGrp: "--",
    actions: "--",
  },
  {
    company_name: "Mphasis",
    company_img: "data:image/jpeg;base64,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",
    email: "management@mphasis.com",
    phone: "+91 9856423956",
    name: "Sweta Chawla",
    facilitator: "--",
    sites: "1",
    tenants: "--",
    tenantGrp: "--",
    actions: "--",
  },
  {
    company_name: "Larsen & Toubro",
    company_img: "https://cdn.cleverism.com/wp-content/uploads/wpjobboard/company/557/company-logo/LT.png",
    email: "management@larsentoubro.com",
    phone: "+91 9034726548",
    name: "Abhishek Kumar",
    facilitator: "--",
    sites: "16",
    tenants: "--",
    tenantGrp: "--",
    actions: "--",
  }
];





export const TableData = () => {





  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" className="table">
        <div className="edit">
          <p><i class="fa-regular fa-eye"></i>View Details</p>
          <p><i class="fa-solid fa-pencil"></i>Edit</p>
          <p><i class="fa-solid fa-ban"></i>Block Access</p>
          <p><i class="fa-regular fa-trash-can"></i>Delete</p>
        </div>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>Contact Person</TableCell>
              <TableCell>Facilitator</TableCell>
              <TableCell>Sites</TableCell>
              <TableCell>Tenants</TableCell>
              <TableCell>Tenant Groups</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="companyImg"><div><img src={row.company_img}/><p>{row.company_name}</p></div></TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.facilitator}</TableCell>
                <TableCell>{row.sites}</TableCell>
                <TableCell>{row.tenants}</TableCell>
                <TableCell>{row.tenantGrp}</TableCell>
                <TableCell className="threeDots" >{<i class="fa-solid fa-ellipsis-vertical" ></i>}</TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
