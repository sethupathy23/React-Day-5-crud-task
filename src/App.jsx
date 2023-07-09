import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddUser } from "./AddUser";
import { Home } from "./Home";
import { EditUser } from "./EditUser";

import { User } from "./User";
import { NotFound } from "./NotFound";
import { useEffect, useState } from "react";








function App() {

const initialDatas = [{
  id:"11",
  FirstName:"Abinesh",
  LastName:"Vasu",
  Qualification:"BE Mech",
  Role:"Assistant Engineer",
  YearofExperience:"4 Years"
},
{
  id:"12",
  FirstName:"Abu",
  LastName:"Mohamed",
  Qualification:"Bcom",
  Role:"Account Supervisor",
  YearofExperience:"2 Years"
},
{
  id:"13",
  FirstName:"Ashwin",
  LastName:"Prasath",
  Qualification:"Bsc",
  Role:"Devops Engineer",
  YearofExperience:"1 Years"
},
{
  id:"14",
  FirstName:"Balachandar",
  LastName:"Ashok",
  Qualification:"BE Civil",
  Role:"Design Engineer",
  YearofExperience:"3 Years"
},
{
  id:"15",
  FirstName:"Balaji",
  LastName:"Baskar",
  Qualification:"B.sc Maths",
  Role:"Teacher",
  YearofExperience:"5 Years"
},
{
  id:"16",
  FirstName:"Devishree",
  LastName:"Sathish",
  Qualification:"BDS",
  Role:"Dentist",
  YearofExperience:"2 Years"
},
{
  id:"17",
  FirstName:"Dhanvika",
  LastName:"Mano",
  Qualification:"BE",
  Role:"Biochemist",
  YearofExperience:"4 Years"
},
{
  id:"18",
  FirstName:"Keerthana",
  LastName:"Chandru",
  Qualification:"Bcom CA",
  Role:"Charted Accountant",
  YearofExperience:"3 Years"
},
];

const [data, setData]=useState(initialDatas);

const navigate = useNavigate();

  return (
    <div className="App">
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button size="large" color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button
              size="large"
              color="inherit"
              onClick={() => navigate("/add/user")}
            >
              Add user
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData}/>} />
        <Route
        path="/add/user"
        element={<AddUser data={data} setData={setData} />}
        />
        <Route
        path="/user/:id" element = {<User data={data} />} />
      <Route
       path="/edit/user/:id"
       element={<EditUser data={data} setData={setData} />}/>
      <Route path="*" element ={<NotFound />} /> 
      </Routes>
    
    </div>
  );
}

export default App;
     
      
      
 