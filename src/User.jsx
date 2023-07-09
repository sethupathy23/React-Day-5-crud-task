import { useNavigate, useParams } from "react-router-dom";
import {Button} from "@mui/material";

export function User({data}){
    const navigate = useNavigate();
    const { id } = useParams();
    const user = data[id];  
    console.log(user);
    return(
        <div className="user"> 
            <div className="user-details">
                <p className="p">
                    <strong className="s">First Name</strong>: {user.FirstName}
                </p>
                <p className="p">
                    <strong className="s">Last Name</strong>: {user.LastName}
                </p>
                <p className="p">
                    <strong className="s">Qualification</strong>: {user.Qualification}
                </p>
                <p className="p">
                    <strong className="s">Role</strong>: {user.Role}
                </p>
                <p className="p">
                    <strong className="s">Year Of Experience </strong>: {user.YearofExperience}
                </p>
                
            </div>
            <div className="back-button">
            <Button className="back-user"  size="large"
      variant="contained" onClick={()=> navigate(-1)}>Back</Button>
            </div>
        </div>
    )
}