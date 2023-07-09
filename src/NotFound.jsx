import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


export function NotFound(){
    const navigate=useNavigate();
    return(
        <div className="nf">
            <h1>404, Page Not Found</h1>
            <img className="not-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1U-fzbIq8W3EKClK4jZSXEkaeWKcX4aGIQ&usqp=CAU" alt="not found" />
            <Button
            size="large"
            variant="contained"
            onClick={()=> navigate("/")}
            > Home</Button>
        </div>
    )
}