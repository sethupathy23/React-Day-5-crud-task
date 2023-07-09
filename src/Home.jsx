import React from 'react'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate, useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";





export function Home({data, setData}){
  const navigate = useNavigate();
  const deleteUser = (idx) =>{
    const alterList = data.filter((per) => per.id !== idx);
  setData(alterList);
  };
    return(
        <div>
          <div className="person-details">
            {data.map((data, idx) =>(
              <div key={idx} className="person">
                <p>
                  <strong>FirstName</strong>: {data.FirstName}
                </p>
                <p>
                  <strong>LastName</strong>: {data.LastName}
                </p>
                <p>
                  <strong>Qualification</strong>: {data.Qualification}
                </p>
                <p>
                  <strong>Role</strong>: {data.Role}
                </p>
                <p>
                  <strong>Year Of Experience</strong>: {data.YearofExperience}
                </p>
                <div className='button'>
                  <IconButton
                  className="info"
                  color="primary"
                  onClick={()=> navigate(`/user/${idx}`)}
                  >
                    <InfoIcon></InfoIcon>
                  </IconButton>
                  <IconButton
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/edit/user/${data.id}`)}
                  >
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton
                  variant="contained"
                  color="primary"
                  onClick={() => deleteUser(data.id)}
                  >
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                  </div>
          </div>
        ))}
      </div>
    </div>
  );
}