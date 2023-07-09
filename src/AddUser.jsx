import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function AddUser({data, setData}) {
    const navigate = useNavigate();
    const [id,setId] = useState("");
    const [FirstName, setFirstName]= useState("");
    const [LastName, setLastName] = useState("");
    const [Qualification, setQualification] = useState("");
    const [Role, setRole] = useState("");
    const [YearofExperience, setYearOfExperience]= useState("");
return(
    <div className="add-user">
        <TextField
        id="outlined-basic"
        label="Id"
        type="text"
        variant="outlined"
        onChange={(event) => setId(event.target.value)}
      />
       <TextField
        id="outlined-basic"
        label="FirsrtName"
        type="text"
        variant="outlined"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="LastName"
        type="text"
        variant="outlined"
        onChange={(event) => setLastName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Qualification"
        type="text"
        variant="outlined"
        onChange={(event) => setQualification(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Role"
        type="text"
        variant="outlined"
        onChange={(event) => setRole(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Year of Experience"
        type="text"
        variant="outlined"
        onChange={(event) => setYearOfExperience(event.target.value)}
      />
      <Button
      size="large"
      variant="contained"
      onClick={()=>{
        const newData={
            id,
            FirstName,
            LastName,
            Qualification,
            Role,
            YearofExperience,
        };
        setData([...data, newData]);
        navigate("/");
      }}
      >
        Add user
      </Button>
      <Button className="back-adduser"  size="large"
      variant="contained" onClick={()=> navigate(-1)}>Back</Button>
    </div>
);
}