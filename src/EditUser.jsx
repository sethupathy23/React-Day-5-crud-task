import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

export function EditUser({ data, setData }){
    const [idm, setIdm] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const[Qualification, setQualification] =useState("");
    const[Role, setRole]=useState("");
    const[YearofExperience, setYearOfExperience]=useState("");

const {id} = useParams();
const navigate=useNavigate();
const selectedUser= data.find((ef)=> ef.id === id);

useEffect(() =>{
    setIdm(selectedUser.id);
    setFirstName(selectedUser.FirstName);
    setLastName(selectedUser.LastName);
    setQualification(selectedUser.Qualification);
    setRole(selectedUser.Role);
    setYearOfExperience(selectedUser.YearofExperience); 
},[]);

const updateUser=()=>{
    const editIndex = data.findIndex((per) => per.id === id);
console.log(editIndex);
const editedData={
    id:idm,
    FirstName,
    LastName,
    Qualification,
    Role,
    YearofExperience,
};
data[editIndex]= editedData;
setData([...data]);
navigate("/");
};
return(
    <div className="">
    <h1 className="edit-h1">Edit Your Profile</h1>
    <div className="edit-user">
   
   <TextField
        id="outlined-basic"
        value={idm}
        label="Id"
        variant="outlined"
        onChange={(event) => setIdm(event.target.value)}
      />
       <TextField
        id="outlined-basic"
        value={FirstName}
        label="FirstName"
        variant="outlined"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={LastName}
        label="LastName"
        variant="outlined"
        onChange={(event) => setLastName(event.target.value )}
      />
      <TextField
        id="outlined-basic"
        value={Qualification}
        label="qualification"
        variant="outlined"
        onChange={(event) => setQualification(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={Role}
        label="Role"
        variant="outlined"
        onChange={(event) => setRole(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={YearofExperience}
        label="Year of Experience"
        variant="outlined"
        onChange={(event) => setYearOfExperience(event.target.value)}
      />
      <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={updateUser}
      >
        Save
      </Button>
      <Button variant="contained" onClick={()=> navigate(-1)}>Back</Button>
    </div>
    </div>
);
}